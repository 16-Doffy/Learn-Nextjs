// API configuration and utilities
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// API response types
export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  msg: string;
  token: {
    access_token: string;
    refresh_token: string;
  };
}

export interface RegisterRequest {
  address: string;
  date_of_birth: string; // ISO string format
  email: string;
  full_name: string;
  gender: boolean;
  identity_card: string;
  image: string | null; // Can be null when no image provided
  password: string;
  phone_number: string;
  username: string;
  role_id: number; // Should default to 1 for regular users
}

export interface RegisterResponse {
  msg: string;
}

export interface EmailVerificationRequest {
  email: string;
}

export interface EmailVerificationResponse {
  msg: string;
}

export interface OtpVerificationRequest {
  email: string;
  otp: string;
}

export interface OtpVerificationResponse {
  msg: string;
  token: string;
}

export class ApiError extends Error {
  status?: number;

  constructor(options: { message: string; status?: number }) {
    super(options.message);
    this.name = "ApiError";
    this.status = options.status;
  }
}

// Generic API call function
async function apiCall<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_BASE_URL}${endpoint}`;

  const config: RequestInit = {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  };

  try {
    const response = await fetch(url, config);

    // Try to parse the response as JSON regardless of status
    let responseData;
    try {
      responseData = await response.json();
    } catch (parseError) {
      // If JSON parsing fails, create a basic error object
      responseData = {
        message: `HTTP ${response.status}: ${response.statusText}`,
        msg: `HTTP ${response.status}: ${response.statusText}`,
      };
    }

    if (!response.ok) {
      // Extract error message from various possible fields the backend might use
      const errorMessage =
        responseData.message ||
        responseData.msg ||
        responseData.error ||
        responseData.detail ||
        responseData.errors ||
        `HTTP ${response.status}: ${response.statusText}`;

      throw new ApiError({
        message: errorMessage,
        status: response.status,
      });
    }

    return responseData;
  } catch (error) {
    // Handle network errors (no response from server)
    if (error instanceof ApiError) {
      throw error; // Re-throw our custom API errors
    }

    if (error instanceof TypeError && error.message.includes("fetch")) {
      throw new ApiError({
        message:
          "Unable to connect to the server. Please check your internet connection and try again.",
        status: 0,
      });
    }

    throw new ApiError({
      message:
        error instanceof Error ? error.message : "An unexpected error occurred",
    });
  }
}

// Authentication API functions
export const authApi = {
  // Login function
  login: async (credentials: LoginRequest): Promise<LoginResponse> => {
    try {
      return await apiCall<LoginResponse>("/auth/login", {
        method: "POST",
        body: JSON.stringify(credentials),
      });
    } catch (error) {
      if (error instanceof ApiError) {
        // Handle specific authentication errors
        const status = error.status;
        if (status === 401) {
          throw new ApiError({
            message: "Invalid username or password. Please try again.",
            status: status,
          });
        }
        if (status === 422) {
          throw new ApiError({
            message:
              error.message ||
              "Please check your username and password format.",
            status: status,
          });
        }
        if (status === 429) {
          throw new ApiError({
            message:
              "Too many login attempts. Please wait a moment and try again.",
            status: status,
          });
        }
        if (status && status >= 500) {
          throw new ApiError({
            message: "Server error. Please try again later.",
            status: status,
          });
        }
      }
      throw error; // Re-throw the original error if no specific handling
    }
  },

  // Register function
  register: async (userData: RegisterRequest): Promise<RegisterResponse> => {
    try {
      return await apiCall<RegisterResponse>("/auth/register", {
        method: "POST",
        body: JSON.stringify(userData),
      });
    } catch (error) {
      if (error instanceof ApiError) {
        const status = error.status;
        if (status === 409) {
          throw new ApiError({
            message: "Username or email already exists. Please choose another.",
            status: status,
          });
        }
        if (status === 422) {
          throw new ApiError({
            message: error.message || "Please check your registration data.",
            status: status,
          });
        }
        if (status && status >= 500) {
          throw new ApiError({
            message: "Server error. Please try again later.",
            status: status,
          });
        }
      }
      throw error;
    }
  },

  // Send email verification OTP
  sendEmailVerification: async (
    email: EmailVerificationRequest
  ): Promise<EmailVerificationResponse> => {
    try {
      return await apiCall<EmailVerificationResponse>("/auth/forgotPassword", {
        method: "POST",
        body: JSON.stringify(email),
      });
    } catch (error) {
      if (error instanceof ApiError) {
        const status = error.status;
        if (status === 404) {
          throw new ApiError({
            message: "Email address not found in our system.",
            status: status,
          });
        }
        if (status === 429) {
          throw new ApiError({
            message:
              "Too many requests. Please wait before requesting another OTP.",
            status: status,
          });
        }
      }
      throw error;
    }
  },

  // Verify OTP
  verifyOtp: async (
    otpData: OtpVerificationRequest
  ): Promise<OtpVerificationResponse> => {
    try {
      return await apiCall<OtpVerificationResponse>("/auth/verifyOtp", {
        method: "POST",
        body: JSON.stringify(otpData),
      });
    } catch (error) {
      if (error instanceof ApiError) {
        const status = error.status;
        if (status === 400) {
          throw new ApiError({
            message: "Invalid or expired OTP. Please try again.",
            status: status,
          });
        }
        if (status === 404) {
          throw new ApiError({
            message:
              "OTP verification session not found. Please request a new OTP.",
            status: status,
          });
        }
      }
      throw error;
    }
  },

  // Logout function (if needed)
  logout: async (): Promise<{ success: boolean; message: string }> => {
    const token = sessionStorage.getItem("authToken");
    return apiCall("/auth/logout", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};

// Token management utilities
export const tokenManager = {
  setTokens: (accessToken: string, refreshToken: string) => {
    sessionStorage.setItem("authToken", accessToken);
    sessionStorage.setItem("refreshToken", refreshToken);
  },

  getToken: (): string | null => {
    return sessionStorage.getItem("authToken");
  },

  getRefreshToken: (): string | null => {
    return sessionStorage.getItem("refreshToken");
  },

  removeTokens: () => {
    sessionStorage.removeItem("authToken");
    sessionStorage.removeItem("refreshToken");
  },

  isTokenValid: (): boolean => {
    const token = sessionStorage.getItem("authToken");
    return token !== null && token !== "";
  },
};

// User session management (simplified since we don't get user data from login)
export const sessionManager = {
  setUser: (userData: { username: string }) => {
    sessionStorage.setItem("currentUser", JSON.stringify(userData));
  },

  getUser: (): { username: string } | null => {
    const userStr = sessionStorage.getItem("currentUser");
    return userStr ? JSON.parse(userStr) : null;
  },

  removeUser: () => {
    sessionStorage.removeItem("currentUser");
  },

  clearSession: () => {
    tokenManager.removeTokens();
    sessionManager.removeUser();
  },
};

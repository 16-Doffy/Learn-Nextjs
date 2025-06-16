import { Ticket } from '@/types';

// Error handling for admin operations
export class AdminError extends Error {
  constructor(message: string, public code?: string) {
    super(message);
    this.name = 'AdminError';
  }
}

// Ticket scanning result handler
export interface ScanResult {
  success: boolean;
  message: string;
  ticket?: Ticket;
}

// Mock scan result handler for demonstration
export const handleTicketScan = async (scannedTicketId: string): Promise<ScanResult> => {
  try {
    // In a real implementation, this would validate the ticket ID against the database
    if (!validateTicketId(scannedTicketId)) {
      throw new AdminError('Invalid ticket ID', 'INVALID_ID');
    }

    // Mock successful scan result
    return {
      success: true,
      message: "Ticket successfully validated!",
      ticket: {
        id: scannedTicketId,
        bookingId: "booking_" + scannedTicketId,
        userId: "user_123",
        movieId: 1,
        movieTitle: "Sample Movie",
        memberName: "John Doe",
        seatNumber: "A12",
        showtime: new Date(),
        theaterName: "Theater 1",
        memberEmail: "john@example.com",
        price: 15.99,
        status: "valid",
        membershipType: "basic",
        barcode: "123456789",
        qrCode: "QR_" + scannedTicketId,
        issuedAt: new Date(),
        validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 days from now
      }
    };
  } catch (error) {
    if (error instanceof AdminError) {
      return {
        success: false,
        message: error.message
      };
    }
    
    return {
      success: false,
      message: 'An unexpected error occurred while processing the ticket.'
    };
  }
};

// CSV export utility
export const exportTicketsToCSV = (tickets: Ticket[], filename?: string): void => {
  try {
    if (!tickets || tickets.length === 0) {
      throw new AdminError('No tickets to export', 'NO_DATA');
    }

    const csvData = tickets.map((ticket) => ({
      "Ticket ID": ticket.id,
      "Booking ID": ticket.bookingId,
      "User ID": ticket.userId,
      "Movie": ticket.movieTitle,
      "Customer": ticket.memberName,
      "Email": ticket.memberEmail,
      "Seat": ticket.seatNumber,
      "Theater": ticket.theaterName,
      "Showtime": ticket.showtime.toISOString(),
      "Price": ticket.price,
      "Status": ticket.status,
      "Membership": ticket.membershipType,
      "Issued At": ticket.issuedAt.toISOString(),
      "Valid Until": ticket.validUntil.toISOString(),
    }));

    const csvContent = [
      Object.keys(csvData[0]).join(","),
      ...csvData.map((row) => Object.values(row).join(",")),
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename || `tickets-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  } catch (error) {
    if (error instanceof AdminError) {
      throw error;
    }
    throw new AdminError('Failed to export tickets to CSV');
  }
};

// Admin action logger (replaces console.log statements)
export const logAdminAction = (action: string, data?: unknown, level: 'info' | 'warn' | 'error' = 'info'): void => {
  const timestamp = new Date().toISOString();
  const logEntry = {
    timestamp,
    action,
    data,
    level
  };

  // In a real application, this would send logs to a proper logging service
  // For now, we'll use console methods but in a structured way
  if (level === 'error') {
    console.error('[ADMIN ERROR]', logEntry);
  } else if (level === 'warn') {
    console.warn('[ADMIN WARN]', logEntry);
  } else {
    console.info('[ADMIN INFO]', logEntry);
  }
};

// Validation utilities
export const validateTicketId = (ticketId: string): boolean => {
  return Boolean(ticketId && ticketId.trim().length > 0);
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Date formatting utilities for admin
export const formatAdminDate = (date: Date): string => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
};

// Status color utilities
export const getStatusColor = (status: Ticket['status']): string => {
  switch (status) {
    case 'valid':
      return 'text-green-600 bg-green-100';
    case 'used':
      return 'text-blue-600 bg-blue-100';
    case 'cancelled':
      return 'text-red-600 bg-red-100';
    case 'expired':
      return 'text-yellow-600 bg-yellow-100';
    default:
      return 'text-gray-600 bg-gray-100';
  }
}; 
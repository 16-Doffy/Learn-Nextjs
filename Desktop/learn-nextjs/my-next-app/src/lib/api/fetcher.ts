// src/lib/api/fetcher.ts
export const fetcher = async (...args: Parameters<typeof fetch>) => {
  const response = await fetch(...args);
  
  if (!response.ok) {
    const error = new Error('An error occurred while fetching the data.');
    throw error;
  }
  
  return response.json();
};


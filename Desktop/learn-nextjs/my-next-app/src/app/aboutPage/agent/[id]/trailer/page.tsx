import React from 'react';

type Params = {
  params: {
    id: string
  }
}

export default function TrailerPage({ params }: Params) {
  const { id } = params;
  
  // Mock data - thay bằng API call thực tế
  const trailerId = {
    '1': 'jett-trailer-id',
    '2': 'sage-trailer-id', 
    '3': 'raze-trailer-id'
  }[id] || 'default-trailer-id';

  return (
    <div className="p-10 text-white bg-gray-900 min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Trailer</h1>
      <iframe
        className="w-full h-[500px]"
        src={`https://www.youtube.com/embed/${trailerId}`}
        allowFullScreen
      />
    </div>
  );
}
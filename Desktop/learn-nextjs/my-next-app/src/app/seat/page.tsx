'use client';

import dynamic from 'next/dynamic';

const SeatSelection = dynamic(() => import('@/components/seat/page'), { ssr: false });

export default function SeatPage() {
  return <SeatSelection />;
} 
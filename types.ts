import React from 'react';

export interface PortfolioItem {
  id: number;
  src: string;
  category: string;
  title: string;
  height: string; // Expecting tailwind aspect ratio classes e.g., "aspect-[3/4]"
  offsetY?: 'left' | 'right' | 'center';
  altText: string;
  year: string;
}

export interface FormData {
  name: string;
  email: string;
  phone: string;
  placement: string;
  sizeCm: string;
  description: string;
  referenceFile: File | null;
  agreeToDeposit: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  details: string;
  image: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

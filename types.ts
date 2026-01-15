import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface GalleryItem {
  id: number;
  src: string;
  category: string;
  title: string;
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
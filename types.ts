import React from 'react';

export interface GalleryItem {
  id: number;
  src: string;
  category: string;
  title: string;
}

// Expanded type for grid control with specific SEO alt text
export interface GridGalleryItem extends GalleryItem {
  colSpan: string; // Tailwind class like "md:col-span-6"
  height: string; // Tailwind class like "h-[600px]" or aspect ratio
  offsetY?: string; // CSS translation for staggered layout
  altText: string; // Descriptive text for SEO/Accessibility
  description?: string; // New field: Short editorial description for hover state
  enableOverlay?: boolean; // Se true, o texto aparece sobre a imagem
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
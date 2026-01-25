import { GridGalleryItem } from '../types';

export const PORTFOLIO_ITEMS: GridGalleryItem[] = [
  { 
    id: 1, 
    src: "https://images.unsplash.com/photo-1598371839696-5c5bb3454091?q=80&w=1200&auto=format&fit=crop", 
    category: "Neotraditional", 
    title: "Ethereal Flora", 
    colSpan: "md:col-span-4", 
    height: "aspect-[3/4]", 
    offsetY: "md:mt-0",
    altText: "Tatuagem floral no ombro",
    description: "Composição orgânica adaptada à curvatura do ombro.",
    enableOverlay: false
  },
  { 
    id: 2, 
    src: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=1200&auto=format&fit=crop", 
    category: "Anatomy", 
    title: "Spine Flow", 
    colSpan: "md:col-span-4", 
    height: "aspect-[3/4]",
    offsetY: "md:mt-12", // Deslocamento para criar o efeito "staggered"
    altText: "Tatuagem fluida nas costas",
    description: "Linhas que acompanham a coluna vertebral.",
    enableOverlay: false
  },
  { 
    id: 3, 
    src: "https://images.unsplash.com/photo-1562962230-16e4623d36e6?q=80&w=1200&auto=format&fit=crop", 
    category: "Fine Line", 
    title: "Connection of Souls", 
    colSpan: "md:col-span-4", 
    height: "aspect-[3/4]",
    offsetY: "md:mt-0", 
    altText: "Tatuagem delicada no braço",
    description: "Detalhes finos e sombreamento suave.",
    enableOverlay: false 
  },
  { 
    id: 4, 
    src: "https://images.unsplash.com/photo-1565492067605-24c600100d8c?q=80&w=1200&auto=format&fit=crop", 
    category: "Botanical", 
    title: "Dark Peonies", 
    colSpan: "md:col-span-6", 
    height: "aspect-[4/5]",
    offsetY: "md:mt-24",
    altText: "Peônias escuras no braço",
    description: "Contraste alto para durabilidade.",
    enableOverlay: false
  },
  { 
    id: 5, 
    src: "https://images.unsplash.com/photo-1605008545802-995f5c381c8c?q=80&w=1200&auto=format&fit=crop", 
    category: "Abstract", 
    title: "The Vision", 
    colSpan: "md:col-span-6", 
    height: "aspect-[4/5]",
    offsetY: "md:mt-12", 
    altText: "Conceito surrealista",
    description: "Projeto de fechamento completo.",
    enableOverlay: false
  },
];
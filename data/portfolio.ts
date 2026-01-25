import { GridGalleryItem } from '../types';

export const PORTFOLIO_ITEMS: GridGalleryItem[] = [
  { 
    id: 1, 
    src: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=1200&auto=format&fit=crop", 
    category: "Anatomy Flow", 
    title: "Spine Composition", 
    colSpan: "md:col-span-6 lg:col-span-5", 
    height: "aspect-[3/4]", 
    offsetY: "md:mt-0",
    altText: "Tatuagem fluida nas costas seguindo a anatomia da coluna",
    description: "Linhas que acompanham a coluna vertebral.",
    enableOverlay: false
  },
  { 
    id: 2, 
    src: "https://images.unsplash.com/photo-1598371839696-5c5bb3454091?q=80&w=1200&auto=format&fit=crop", 
    category: "Neotraditional", 
    title: "Ethereal Flora", 
    colSpan: "md:col-span-6 lg:col-span-7", 
    height: "aspect-[16/9]", 
    offsetY: "md:mt-12 lg:mt-32", 
    altText: "Tatuagem floral no ombro em preto e branco",
    description: "Composição orgânica adaptada à curvatura do ombro.",
    enableOverlay: false
  },
  { 
    id: 3, 
    src: "https://images.unsplash.com/photo-1565492067605-24c600100d8c?q=80&w=1200&auto=format&fit=crop", 
    category: "Botanical", 
    title: "Dark Peonies", 
    colSpan: "md:col-span-6 lg:col-span-4", 
    height: "aspect-[3/4]",
    offsetY: "lg:-mt-24", 
    altText: "Peônias escuras no braço estilo neotradicional",
    description: "Contraste alto para durabilidade.",
    enableOverlay: false 
  },
  { 
    id: 4, 
    src: "https://images.unsplash.com/photo-1605008545802-995f5c381c8c?q=80&w=1200&auto=format&fit=crop", 
    category: "Abstract", 
    title: "The Vision", 
    colSpan: "md:col-span-6 lg:col-span-8", 
    height: "aspect-[16/9]", 
    offsetY: "lg:mt-12",
    altText: "Conceito surrealista nas costas",
    description: "Projeto de fechamento completo.",
    enableOverlay: false
  },
  { 
    id: 5, 
    src: "https://images.unsplash.com/photo-1562962230-16e4623d36e6?q=80&w=1200&auto=format&fit=crop", 
    category: "Fine Line", 
    title: "Connection", 
    colSpan: "md:col-span-6 lg:col-span-4", 
    height: "aspect-[3/4]",
    offsetY: "lg:-mt-48", 
    altText: "Tatuagem delicada de mãos se tocando",
    description: "Detalhes finos e sombreamento suave.",
    enableOverlay: false
  },
  { 
    id: 6, 
    src: "https://images.unsplash.com/photo-1542359649-31e03cd4d909?q=80&w=1200&auto=format&fit=crop", 
    category: "Full Sleeve", 
    title: "Japanese Flow", 
    colSpan: "md:col-span-6 lg:col-span-6", 
    height: "aspect-[4/5]",
    offsetY: "lg:mt-0", 
    altText: "Fechamento de braço estilo oriental neotradicional",
    description: "Fluidez e movimento.",
    enableOverlay: false
  },
  { 
    id: 7, 
    src: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?q=80&w=1200&auto=format&fit=crop", 
    category: "Ornamental", 
    title: "Sacred Geometry", 
    colSpan: "md:col-span-6 lg:col-span-6", 
    height: "aspect-[4/5]",
    offsetY: "lg:mt-24", 
    altText: "Geometria sagrada nas costas",
    description: "Precisão matemática e pontilhismo.",
    enableOverlay: false
  }
];
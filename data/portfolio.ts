import { GridGalleryItem } from '../types';

export const PORTFOLIO_ITEMS: GridGalleryItem[] = [
  { 
    id: 1, 
    src: "https://picsum.photos/800/1200?random=10", 
    category: "Neotraditional", 
    title: "Lady Face & Peonies", 
    colSpan: "", // Handled by layout structure
    height: "h-full",
    offsetY: "",
    altText: "Tatuagem neotradicional de rosto feminino",
    enableOverlay: true
  },
  { 
    id: 2, 
    src: "https://picsum.photos/600/600?random=22", 
    category: "Architecture", 
    title: "Gothic Arch", 
    colSpan: "", 
    height: "aspect-square",
    offsetY: "", 
    altText: "Detalhe arquitetônico gótico",
    enableOverlay: true
  },
  { 
    id: 3, 
    src: "https://picsum.photos/600/600?random=33", 
    category: "Study", 
    title: "Koi Movement", 
    colSpan: "", 
    height: "aspect-square",
    offsetY: "", 
    altText: "Estudo de movimento de carpas",
    enableOverlay: true 
  },
  { 
    id: 4, 
    src: "https://picsum.photos/1200/600?random=44", 
    category: "Full Sleeve", 
    title: "Floral Composition", 
    colSpan: "", 
    height: "aspect-[2/1]",
    offsetY: "",
    altText: "Composição floral para fechamento de braço",
    enableOverlay: true
  },
  { 
    id: 5, 
    src: "https://picsum.photos/1600/900?random=55", 
    category: "Surrealism", 
    title: "The Vision", 
    colSpan: "col-span-12", 
    height: "aspect-[21/9]",
    offsetY: "", 
    altText: "Conceito surrealista expandido",
    enableOverlay: true
  },
];
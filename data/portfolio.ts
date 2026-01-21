import { GridGalleryItem } from '../types';

export const PORTFOLIO_ITEMS: GridGalleryItem[] = [
  { 
    id: 1, 
    src: "https://picsum.photos/800/1200?random=10", 
    category: "Neotraditional", 
    title: "Lady Face & Peonies", 
    colSpan: "md:col-span-6 md:row-span-2", // Item Alto à Esquerda
    height: "h-[500px] md:h-full", 
    offsetY: "",
    altText: "Tatuagem neotradicional de rosto feminino",
    enableOverlay: true
  },
  { 
    id: 2, 
    src: "https://picsum.photos/600/600?random=22", 
    category: "Architecture", 
    title: "Gothic Arch", 
    colSpan: "md:col-span-3 md:row-span-1", // Quadrado Topo Centro
    height: "h-[300px] md:h-full",
    offsetY: "", 
    altText: "Detalhe arquitetônico gótico",
    enableOverlay: true
  },
  { 
    id: 3, 
    src: "https://picsum.photos/600/600?random=33", 
    category: "Study", 
    title: "Koi Movement", 
    colSpan: "md:col-span-3 md:row-span-1", // Quadrado Topo Direita
    height: "h-[300px] md:h-full",
    offsetY: "", 
    altText: "Estudo de movimento de carpas",
    enableOverlay: true 
  },
  { 
    id: 4, 
    src: "https://picsum.photos/1200/600?random=44", 
    category: "Full Sleeve", 
    title: "Floral Composition", 
    colSpan: "md:col-span-6 md:row-span-1", // Retangular Abaixo
    height: "h-[300px] md:h-full",
    offsetY: "",
    altText: "Composição floral para fechamento de braço",
    enableOverlay: true
  },
  { 
    id: 5, 
    src: "https://picsum.photos/1600/900?random=55", 
    category: "Surrealism", 
    title: "The Vision", 
    colSpan: "md:col-span-12 md:row-span-1", // Full Width
    height: "h-[400px] md:aspect-[3/1]",
    offsetY: "mt-0 md:mt-0", 
    altText: "Conceito surrealista expandido",
    enableOverlay: true
  },
];
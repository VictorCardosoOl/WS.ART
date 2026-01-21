import { GridGalleryItem } from '../types';

export const PORTFOLIO_ITEMS: GridGalleryItem[] = [
  { 
    id: 1, 
    src: "https://picsum.photos/800/1200?random=1", 
    category: "Neotraditional", 
    title: "Lady Face & Peonies", 
    // Coluna da esquerda ocupando 2 "linhas" visuais do grid da direita
    colSpan: "md:col-span-6 md:row-span-2", 
    height: "h-full min-h-[600px]",
    offsetY: "0px",
    altText: "Tatuagem neotradicional de rosto feminino (Lady Face) com ornamentos detalhados.",
    enableOverlay: true
  },
  { 
    id: 2, 
    src: "https://picsum.photos/600/600?random=2", 
    category: "Detail", 
    title: "Ornamental Arch", 
    colSpan: "md:col-span-3", 
    height: "aspect-square",
    offsetY: "0px", 
    altText: "Detalhe de arquitetura ornamental tatuada.",
    enableOverlay: false
  },
  { 
    id: 3, 
    src: "https://picsum.photos/600/600?random=3", 
    category: "Color Study", 
    title: "Koi Fish Pond", 
    colSpan: "md:col-span-3", 
    height: "aspect-square",
    offsetY: "0px", 
    altText: "Tatuagem colorida de carpas (Koi Fish) em movimento.",
    enableOverlay: true // Texto sobre a imagem como na referência
  },
  { 
    id: 4, 
    src: "https://picsum.photos/1200/600?random=4", 
    category: "Composition", 
    title: "Floral Sleeve", 
    colSpan: "md:col-span-6", 
    height: "aspect-[2/1]",
    offsetY: "0px",
    altText: "Fechamento de braço com tema floral.",
    enableOverlay: true
  },
  // Item extra para fechar o layout se necessário ou manter como destaque final
  { 
    id: 5, 
    src: "https://picsum.photos/1200/800?random=5", 
    category: "Surrealism", 
    title: "The Eye Concept", 
    colSpan: "md:col-span-12", 
    height: "aspect-[21/9]",
    offsetY: "mt-6", // Pequeno espaço antes do último item wide
    altText: "Conceito surrealista de olho.",
    enableOverlay: true
  },
];
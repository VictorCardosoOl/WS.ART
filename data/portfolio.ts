import { GridGalleryItem } from '../types';

export const PORTFOLIO_ITEMS: GridGalleryItem[] = [
  { 
    id: 1, 
    src: "https://images.unsplash.com/photo-1542359649-31e03cd4d909?q=80&w=1920&auto=format&fit=crop", 
    category: "Full Back", 
    title: "The Ascension", 
    colSpan: "md:col-span-12", // Full Width Hero
    height: "aspect-[16/9] md:aspect-[21/9]", 
    offsetY: "mt-0",
    altText: "Tatuagem costas completas surrealista",
    description: "Composição de corpo inteiro.",
    enableOverlay: false
  },
  { 
    id: 2, 
    src: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=1200&auto=format&fit=crop", 
    category: "Texture", 
    title: "Botanical Detail", 
    colSpan: "md:col-span-4", 
    height: "aspect-[3/4]", 
    offsetY: "md:mt-32", // Staggered down
    altText: "Detalhe botânico no ombro",
    description: "Textura orgânica.",
    enableOverlay: false
  },
  { 
    id: 3, 
    src: "https://images.unsplash.com/photo-1598371839696-5c5bb3454091?q=80&w=1200&auto=format&fit=crop", 
    category: "Anatomy", 
    title: "Spine Flow", 
    colSpan: "md:col-span-5 md:col-start-7", 
    height: "aspect-[4/5]",
    offsetY: "md:-mt-24", // Pull up to overlap slightly visual space
    altText: "Tatuagem na coluna",
    description: "Fluidez anatômica.",
    enableOverlay: false 
  },
  { 
    id: 4, 
    src: "https://images.unsplash.com/photo-1562962230-16e4623d36e6?q=80&w=1200&auto=format&fit=crop", 
    category: "Neotrad", 
    title: "Dark Peonies", 
    colSpan: "md:col-span-6", 
    height: "aspect-[4/5]",
    offsetY: "md:mt-24", 
    altText: "Peônias escuras",
    description: "Contraste e solidez.",
    enableOverlay: false
  },
  { 
    id: 5, 
    src: "https://images.unsplash.com/photo-1560707303-4e9803d1544a?q=80&w=1200&auto=format&fit=crop", 
    category: "Ornamental", 
    title: "Sacred Form", 
    colSpan: "md:col-span-5", 
    height: "aspect-[3/4]", 
    offsetY: "md:mt-48",
    altText: "Geometria sagrada",
    description: "Precisão.",
    enableOverlay: false
  },
  { 
    id: 6, 
    src: "https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=1920&auto=format&fit=crop", 
    category: "Sleeve", 
    title: "Japanese Narrative", 
    colSpan: "md:col-span-10 md:col-start-2", // Almost full width
    height: "aspect-[16/9]",
    offsetY: "md:mt-32", 
    altText: "Fechamento de braço",
    description: "Narrativa oriental.",
    enableOverlay: false
  }
];
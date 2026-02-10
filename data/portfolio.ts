import { GridGalleryItem } from '../types';

// Extendemos a interface temporariamente aqui ou assumimos que o componente lidará com os campos extras
// Vamos usar os campos existentes de forma criativa:
// height -> aspectRatio
// offsetY -> layoutType (left, right, center)

export const PORTFOLIO_ITEMS: any[] = [
  { 
    id: 1, 
    src: "https://images.unsplash.com/photo-1598371839696-5c5bb3454091?q=80&w=1200&auto=format&fit=crop", 
    category: "Anatomy Flow", 
    title: "Spine Composition", 
    height: "aspect-[3/4]", // Vertical Portrait
    offsetY: "right", // Alinhamento
    altText: "Tatuagem fluida nas costas",
    year: "2024"
  },
  { 
    id: 2, 
    src: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=1200&auto=format&fit=crop", 
    category: "Neotraditional", 
    title: "Ethereal Flora", 
    height: "aspect-[16/10]", // Landscape Cinematic
    offsetY: "center",
    altText: "Tatuagem floral no ombro",
    year: "2023"
  },
  { 
    id: 3, 
    src: "https://images.unsplash.com/photo-1562962230-16e4623d36e6?q=80&w=1200&auto=format&fit=crop", 
    category: "Botanical", 
    title: "Dark Peonies", 
    height: "aspect-[4/5]",
    offsetY: "left", 
    altText: "Peônias escuras",
    year: "2023"
  },
  { 
    id: 4, 
    src: "https://images.unsplash.com/photo-1542359649-31e03cd4d909?q=80&w=1200&auto=format&fit=crop", 
    category: "Abstract", 
    title: "The Vision", 
    height: "aspect-[16/9]", 
    offsetY: "center",
    altText: "Conceito surrealista",
    year: "2024"
  },
  { 
    id: 5, 
    src: "https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=1200&auto=format&fit=crop", 
    category: "Full Sleeve", 
    title: "Japanese Flow", 
    height: "aspect-[3/4]",
    offsetY: "right", 
    altText: "Fechamento de braço",
    year: "2023"
  }
];
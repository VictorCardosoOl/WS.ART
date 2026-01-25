import { GridGalleryItem } from '../types';
import { ASSETS } from './assets';

export const PORTFOLIO_ITEMS: GridGalleryItem[] = [
  { 
    id: 1, 
    src: ASSETS.portfolio.img1, 
    category: "Neotraditional", 
    title: "Lady Face & Peonies", 
    colSpan: "md:col-span-6 md:row-span-2", 
    height: "h-full", 
    offsetY: "",
    altText: "Tatuagem neotradicional de rosto feminino com peônias",
    description: "Uma fusão entre a delicadeza botânica e a força do retrato feminino, cicatrizada em tons terrosos.",
    enableOverlay: true
  },
  { 
    id: 2, 
    src: ASSETS.portfolio.img2, 
    category: "Architecture", 
    title: "Gothic Arch", 
    colSpan: "md:col-span-6 md:row-span-1", 
    height: "h-full",
    offsetY: "", 
    altText: "Detalhe arquitetônico gótico em preto e cinza",
    description: "Estudo de luz e sombra inspirado em catedrais do século XIV, adaptado para a anatomia das costas.",
    enableOverlay: true
  },
  { 
    id: 3, 
    src: ASSETS.portfolio.img3, 
    category: "Study", 
    title: "Mountain Flow", 
    colSpan: "md:col-span-3 md:row-span-1", 
    height: "h-full",
    offsetY: "", 
    altText: "Estudo de texturas naturais e movimento",
    description: "Fluidez orgânica representando resiliência e transformação contínua.",
    enableOverlay: true 
  },
  { 
    id: 4, 
    src: ASSETS.portfolio.img4, 
    category: "Flora", 
    title: "Dark Rose", 
    colSpan: "md:col-span-3 md:row-span-1", 
    height: "h-full",
    offsetY: "",
    altText: "Rosa escura estilo neotradicional",
    description: "Contraste alto e saturação profunda para uma peça atemporal.",
    enableOverlay: true
  },
  { 
    id: 5, 
    src: ASSETS.portfolio.img5, 
    category: "Surrealism", 
    title: "The Vision", 
    colSpan: "md:col-span-12 md:row-span-1", 
    height: "h-full",
    offsetY: "mt-0 md:mt-0", 
    altText: "Conceito surrealista expandido",
    description: "Projeto de fechamento completo onde sonhos e realidade se confundem em traços firmes.",
    enableOverlay: true
  },
];
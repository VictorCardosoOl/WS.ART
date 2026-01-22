import { GridGalleryItem } from '../types';

export const PORTFOLIO_ITEMS: GridGalleryItem[] = [
  { 
    id: 1, 
    src: "https://picsum.photos/800/1200?random=10", 
    category: "Neotraditional", 
    title: "Lady Face & Peonies", 
    colSpan: "md:col-span-6 md:row-span-2", 
    height: "h-[500px] md:h-full", 
    offsetY: "",
    altText: "Tatuagem neotradicional de rosto feminino com peônias",
    description: "Uma fusão entre a delicadeza botânica e a força do retrato feminino, cicatrizada em tons terrosos.",
    enableOverlay: true
  },
  { 
    id: 2, 
    src: "https://picsum.photos/1200/800?random=22", 
    category: "Architecture", 
    title: "Gothic Arch", 
    colSpan: "md:col-span-6 md:row-span-1", 
    height: "h-[300px] md:h-full",
    offsetY: "", 
    altText: "Detalhe arquitetônico gótico em preto e cinza",
    description: "Estudo de luz e sombra inspirado em catedrais do século XIV, adaptado para a anatomia das costas.",
    enableOverlay: true
  },
  { 
    id: 3, 
    src: "https://picsum.photos/600/600?random=33", 
    category: "Study", 
    title: "Koi Movement", 
    colSpan: "md:col-span-3 md:row-span-1", 
    height: "h-[300px] md:h-full",
    offsetY: "", 
    altText: "Estudo de movimento de carpas",
    description: "Fluidez orgânica representando resiliência e transformação contínua.",
    enableOverlay: true 
  },
  { 
    id: 4, 
    src: "https://picsum.photos/600/600?random=44", 
    category: "Flora", 
    title: "Dark Rose", 
    colSpan: "md:col-span-3 md:row-span-1", 
    height: "h-[300px] md:h-full",
    offsetY: "",
    altText: "Rosa escura estilo neotradicional",
    description: "Contraste alto e saturação profunda para uma peça atemporal.",
    enableOverlay: true
  },
  { 
    id: 5, 
    src: "https://picsum.photos/1600/900?random=55", 
    category: "Surrealism", 
    title: "The Vision", 
    colSpan: "md:col-span-12 md:row-span-1", 
    height: "h-[400px] md:aspect-[3/1]",
    offsetY: "mt-0 md:mt-0", 
    altText: "Conceito surrealista expandido",
    description: "Projeto de fechamento completo onde sonhos e realidade se confundem em traços firmes.",
    enableOverlay: true
  },
];
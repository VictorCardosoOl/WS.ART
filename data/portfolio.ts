import { GridGalleryItem } from '../types';

/* 
  NOTA: Estas imagens estão hospedadas no Unsplash Source para garantir estabilidade e performance.
  Em um projeto final, você deve baixar essas imagens e colocá-las em:
  /public/images/portfolio/nome-arquivo.jpg
*/

export const PORTFOLIO_ITEMS: GridGalleryItem[] = [
  { 
    id: 1, 
    // Imagem: Mulher com flores/tatuagem - Tons terrosos e artísticos
    src: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?q=80&w=800&auto=format&fit=crop", 
    category: "Neotraditional", 
    title: "Lady Face & Peonies", 
    colSpan: "md:col-span-6 md:row-span-2", 
    height: "h-full", // Altura controlada pelo grid pai
    offsetY: "",
    altText: "Tatuagem neotradicional de rosto feminino com peônias",
    description: "Uma fusão entre a delicadeza botânica e a força do retrato feminino, cicatrizada em tons terrosos.",
    enableOverlay: true
  },
  { 
    id: 2, 
    // Imagem: Detalhe arquitetônico gótico / Sombrio
    src: "https://images.unsplash.com/photo-1548625361-12c8ba364274?q=80&w=800&auto=format&fit=crop", 
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
    // Imagem: Movimento fluido / Tinta na água ou Peixe
    src: "https://images.unsplash.com/photo-1517649281203-dad836b4aa5d?q=80&w=600&auto=format&fit=crop", 
    category: "Study", 
    title: "Koi Movement", 
    colSpan: "md:col-span-3 md:row-span-1", 
    height: "h-full",
    offsetY: "", 
    altText: "Estudo de movimento de carpas",
    description: "Fluidez orgânica representando resiliência e transformação contínua.",
    enableOverlay: true 
  },
  { 
    id: 4, 
    // Imagem: Rosa escura / Textura de flor
    src: "https://images.unsplash.com/photo-1548092372-0d1bd40424cb?q=80&w=600&auto=format&fit=crop", 
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
    // Imagem: Surrealista / Arte Abstrata ou Tatuagem Grande
    src: "https://images.unsplash.com/photo-1599596486001-c8eb5b62e4c4?q=80&w=1200&auto=format&fit=crop", 
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
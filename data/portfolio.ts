import { GridGalleryItem } from '../types';

export const PORTFOLIO_ITEMS: GridGalleryItem[] = [
  { 
    id: 1, 
    src: "https://picsum.photos/900/1200?random=1", 
    category: "Neotraditional", 
    title: "Lady Face", 
    colSpan: "md:col-span-5", 
    height: "aspect-[3/4]",
    offsetY: "0px",
    altText: "Tatuagem neotradicional de rosto feminino (Lady Face) com ornamentos detalhados em preto e cinza e linhas finas."
  },
  { 
    id: 2, 
    src: "https://picsum.photos/1000/800?random=2", 
    category: "Color Study", 
    title: "Floral Piece", 
    colSpan: "md:col-span-7", 
    height: "aspect-[4/3]",
    offsetY: "md:mt-32", 
    altText: "Tatuagem floral colorida com estudo de profundidade e contraste, cobrindo ombro e braço com peônias vibrantes."
  },
  { 
    id: 3, 
    src: "https://picsum.photos/700/1000?random=3", 
    category: "Backpiece", 
    title: "Tiger & Snake", 
    colSpan: "md:col-span-4", 
    height: "aspect-[3/5]",
    offsetY: "md:-mt-24", 
    altText: "Fechamento de costas (Backpiece) neotradicional apresentando um tigre e uma serpente em batalha, composição dinâmica."
  },
  { 
    id: 4, 
    src: "https://picsum.photos/700/700?random=4", 
    category: "Detail", 
    title: "Dagger", 
    colSpan: "md:col-span-4", 
    height: "aspect-square",
    offsetY: "md:mt-12",
    altText: "Detalhe macro de tatuagem de adaga perfurando uma rosa, com sombreamento pontilhista (whipshading) e traços sólidos."
  },
  { 
    id: 5, 
    src: "https://picsum.photos/700/1000?random=5", 
    category: "Surrealism", 
    title: "Eye Concept", 
    colSpan: "md:col-span-4", 
    height: "aspect-[3/4]",
    offsetY: "0px",
    altText: "Conceito surrealista de olho com elementos orgânicos e lágrimas, estilo neotradicional blackwork."
  },
];
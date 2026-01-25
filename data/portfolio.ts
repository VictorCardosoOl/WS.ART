import { ASSETS } from './assets';

export interface PortfolioStory {
  id: string;
  client: string;
  title: string;
  brokenTitle: string[]; // For Lass-style broken typography
  category: string;
  narrative: string;
  mainImage: string;
  detailImage: string;
  year: string;
}

export const PORTFOLIO_STORIES: PortfolioStory[] = [
  {
    id: "01",
    client: "Anais",
    title: "The Feminine Power",
    brokenTitle: ["FEMI-", "NINE", "POWER"],
    category: "Neotraditional",
    year: "2023",
    narrative: "A connection to the botanical soul. We explored the resilience of nature through the peony's bloom, merging soft shading with sharp, defined conceptual lines.",
    mainImage: ASSETS.portfolio.img1,
    detailImage: ASSETS.portfolio.img4
  },
  {
    id: "02",
    client: "Sarah",
    title: "Eternal Architecture",
    brokenTitle: ["GOTHIC", "ARCHI-", "TECTURE"],
    category: "Blackwork",
    year: "2024",
    narrative: "Inspired by 14th-century Gothic structures. The aim was to turn the body into a temple, respecting the spine's flow as the central pillar of the design.",
    mainImage: ASSETS.portfolio.img2,
    detailImage: ASSETS.portfolio.img3
  },
  {
    id: "03",
    client: "Lucas",
    title: "The Lucid Dream",
    brokenTitle: ["LUCID", "DREAM", "STATE"],
    category: "Surrealism",
    year: "2022",
    narrative: "Where reality bends. A project about breaking the constraints of the waking mind, visualized through heavy contrast and fluid, dreamlike composition.",
    mainImage: ASSETS.portfolio.img5,
    detailImage: ASSETS.portfolio.img2
  }
];
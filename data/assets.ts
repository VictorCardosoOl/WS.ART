// Centralização de assets para fácil substituição futura
// Imagens otimizadas com parâmetros de// Importando imagens diretamente para garantir processamento pelo Vite
import portfolio1 from '../src/assets/images/portfolio_01.png';
import portfolio2 from '../src/assets/images/portfolio_02.png';
import portfolio3 from '../src/assets/images/portfolio_03.png';
import portfolio4 from '../src/assets/images/portfolio_04.png';
import portfolio5 from '../src/assets/images/portfolio_05.png';

import about1 from '../src/assets/images/about_01.png';
import about2 from '../src/assets/images/about_02.png';
import about3 from '../src/assets/images/about_03.png';

export const ASSETS = {
  portfolio: {
    img1: portfolio1,
    img2: portfolio2,
    img3: portfolio3,
    img4: portfolio4,
    img5: portfolio5,
  },
  about: {
    img1: about1,
    img2: about2,
    img3: about3,
  }
};
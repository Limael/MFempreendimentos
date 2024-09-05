// data.ts

import { Project } from "../../../types/Projects";
import COMPLEXO_DE_SERVICO_NACIONAL_DE_APRENDIZAGEM from "../../../assets/images/completed/COMPLEXO_DE_SERVICO_NACIONAL_DE_APRENDIZAGEM.png";
import FABRICA_DA_HG_DO_BRASIL from "../../../assets/images/completed/FABRICA_DA_HG_DO_BRASIL.png";
import ROYAL_BOULEVAR from "../../../assets/images/completed/ROYAL_BOULEVAR.png";

import construcao_de_complexo_esportivo from "../../../assets/images/in_progress/construcao_de_complexo_esportivo.png";
import edificio_Comercial_Costa_Oeste from "../../../assets/images/in_progress/edificio_Comercial_Costa_Oeste.png";
import edificio_Comercial_Novare from "../../../assets/images/in_progress/edificio_Comercial_Novare.png";

const novare: { [key: string]: { default: string } } = import.meta.glob(
  "../../../assets/images/novare/*",
  {
    eager: true,
  }
);
const edco: { [key: string]: { default: string } } = import.meta.glob(
  "../../../assets/images/edco/*",
  {
    eager: true,
  }
);
const cdce: { [key: string]: { default: string } } = import.meta.glob(
  "../../../assets/images/cdce/*",
  {
    eager: true,
  }
);
const royalBoulevard: { [key: string]: { default: string } } = import.meta.glob(
  "../../../assets/images/royalBoulevard/*",
  {
    eager: true,
  }
);
const senar: { [key: string]: { default: string } } = import.meta.glob(
  "../../../assets/images/senar/*",
  {
    eager: true,
  }
);

export const projectsInProgress: Project[] = [
  {
    image: edificio_Comercial_Novare,
    images: novare,
    title: "EDIFÍCIO COMERCIAL NOVARE",
    location: "Centro de Foz do Iguaçu-PR.",
    description:
      "Edificação comercial com 7 pavimentos e 1900m² de área construída. Fundação em estacas com alargamento de base, mais de 900m³ de concreto armado, lajes pré-moldadas protendidas, esquadrias com tratamento acústico e térmico.",
  },
  {
    images: edco,
    image: edificio_Comercial_Costa_Oeste,
    title: "EDIFÍCIO COMERCIAL COSTA OESTE",
    location: "Centro de Toledo-PR.",
    description: `Edificação comercial com 9 pavimentos, com 2100m² de área construída. Subsolo com paredes de concreto armado aparente. Estrutura em concreto aparente. Fundações profundas com estaca hélice contínua. Lajes em concreto protendo. 
Lançamento de 1300m³ de concreto armado aparente. Esquadrias em pele de vidro e tratamento acústico e térmico. Sistema de automação completo. Sistema de climatização. Elevador alta performance.`,
  },
  {
    images: cdce,
    image: construcao_de_complexo_esportivo,
    title: "CONSTRUÇÃO DE COMPLEXO ESPORTIVO",
    location: "São João-PR.",
    builtArea: "12039,97 m²",
    description:
      "Construção de COMPLEXO ESPORTIVO contendo: Ginásio de Esportes, com ambientes de quadra poliesportiva, arquibancadas, cabines para imprensa, hall de entrada, bilheteria, copa, cozinha, vestiários, instalações sanitárias masculinas e femininas, instalações sanitárias masculinas e femininas para PCD, áreas de circulação e salas multiuso. Campo para Futebol Sintético - CGSF e quadra poliesportiva - modelo meu campinho, além de quadra de areia.",
  },
];

export const projectsCompleted: Project[] = [
  {
    image: ROYAL_BOULEVAR,
    title: "CONDOMÍNIO RESIDENCIAL HORIZONTAL ROYAL BOULEVAR",
    location: "Foz do Iguaçu-PR",
    description: `implantação das áreas comuns do condomínio residencial Royal
Boulevard em Foz do Iguaçu. Área de intervenção total 25.000m² Construção com fundações especiais em água. Contenções de água e movimentação de aterros durante a obra. Estruturas com concreto armado e proteção. Piscinas aquecidas. Pórticos de entrada, passarelas, pontes e sistemas de drenagens
`,
    images: royalBoulevard,
  },
  {
    image: FABRICA_DA_HG_DO_BRASIL,
    title: "FABRICA DA HG DO BRASIL",
    location: "Área industrial de Foz do Iguaçu-PR",
    description: `
    implantação da fábrica de CD unidade Foz do Iguaçu. Terreno com 11.000m² , construção com área total de 5.350m2 de aera construída, 11.000m³ de movimentação de terra. 92 Ton. de estruturas metálicas. 1.200m³ de lançamento de concreto. Cabine de alta tensão, subestação e gerador de energia para 500KVA.
    `,
    images: royalBoulevard,
  },
  {
    image: COMPLEXO_DE_SERVICO_NACIONAL_DE_APRENDIZAGEM,
    title: "CONSTRUÇÃO DO COMPLEXO DE SERVIÇO NACIONAL DE APRENDIZAGEM SENAR",
    location: "Fazenda Embrapa Campo Grande-MS",
    description: `
    Construção do campus do complexo de aprendizagem rural do Mato Grosso do Sul, obra com área de intervenção de 24Ha, área construída total de 3.300m² . Edificação mista em estrutura metálica e alvenaria convencional. Complexo executado em 180 dias corridos. Mais de 16.000m³ de movimentação de terra e ajustes de terreno. 800m lineares de cravação de estacas em solo mole. Mais de 90T de aço para estrutura metálica. Implantação total do campus com prazo reduzido e trabalho em 2 turnos.
    `,
    images: senar,
  },
];

export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

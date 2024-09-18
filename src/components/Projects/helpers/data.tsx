// data.ts

import { Project } from "../../../types/Projects";
import COMPLEXO_DE_SERVICO_NACIONAL_DE_APRENDIZAGEM from "../../../assets/images/completed/COMPLEXO_DE_SERVICO_NACIONAL_DE_APRENDIZAGEM.png";
import FABRICA_DA_HG_DO_BRASIL from "../../../assets/images/completed/FABRICA_DA_HG_DO_BRASIL.png";
import ROYAL_BOULEVAR from "../../../assets/images/completed/ROYAL_BOULEVAR.png";

import construcao_de_complexo_esportivo from "../../../assets/images/cdce/complexo-esp-5.jpg";
import edificio_Comercial_Costa_Oeste from "../../../assets/images/in_progress/edificio_Comercial_Costa_Oeste.png";
import edificio_Comercial_Novare from "../../../assets/images/in_progress/edificio_Comercial_Novare.png";
import ministerioPublicoCuritibaMainPhoto from "../../../assets/images/ministerio-publico-curitiba/ministerio-publico-1.jpg";
import unilaMainPhoto from "../../../assets/images/unila/unila-0.jpeg";
import utftprMainPhoto from "../../../assets/images/utfpr/utftpr-0.jpg";
import cilo_banner from "../../../assets/images/cilo-industrial/Banner.jpeg";
import complexo_sao_joao_banner from "../../../assets/images/complexo-são-jõao/Banner.jpeg";
import residencial_dois_pisos_banner from "../../../assets/images/Residencial dois pisos/Banner.jpeg";
import residencial_sofisticado_banner from "../../../assets/images/Residencial Sofisticado/Banner.jpeg";
import sobrado_luxuoso_banner from "../../../assets/images/Sobrado Luxuoso/WhatsApp Image 2024-09-09 at 16.08.15.jpeg";
import sobrado_moderno_banner from "../../../assets/images/Sobrado moderno/Vila A Park (4).jpg";
import sobrado_Vila_A_banner from "../../../assets/images/Sobrado Vila A Park/Sobrados_VilaAPark_MFempreendimentos-108.jpg";
import casa_terrea_banner from "../../../assets/images/Casa Térrea/Banner.jpeg";
import germina_dos_sonhos_banner from "../../../assets/images/Germina dos Sonhos/Banner.jpeg";

const germina_dos_sonhos: { [key: string]: { default: string } } =
  import.meta.glob("../../../assets/images/Germina dos Sonhos/*", {
    eager: true,
  });
const casa_terrea: { [key: string]: { default: string } } = import.meta.glob(
  "../../../assets/images/Casa Térrea/*",
  {
    eager: true,
  }
);

const sobrado_vila_a: { [key: string]: { default: string } } = import.meta.glob(
  "../../../assets/images/Sobrado Vila A Park/*",
  {
    eager: true,
  }
);
const sobrado_moderno: { [key: string]: { default: string } } =
  import.meta.glob("../../../assets/images/Sobrado moderno/*", {
    eager: true,
  });
const sobrado_luxuoso: { [key: string]: { default: string } } =
  import.meta.glob("../../../assets/images/Sobrado Luxuoso/*", {
    eager: true,
  });
const residencial_dois_pisos: { [key: string]: { default: string } } =
  import.meta.glob("../../../assets/images/Residencial dois pisos/*", {
    eager: true,
  });
const residencial_sofisticado: { [key: string]: { default: string } } =
  import.meta.glob("../../../assets/images/Residencial Sofisticado/*", {
    eager: true,
  });
const novare: { [key: string]: { default: string } } = import.meta.glob(
  "../../../assets/images/novare/*",
  {
    eager: true,
  }
);
const cilo_industrial: { [key: string]: { default: string } } =
  import.meta.glob("../../../assets/images/cilo-industrial/*", {
    eager: true,
  });
const complexo_sao_joao: { [key: string]: { default: string } } =
  import.meta.glob("../../../assets/images/complexo-são-jõao/*", {
    eager: true,
  });
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
const fabricaHG: { [key: string]: { default: string } } = import.meta.glob(
  "../../../assets/images/fabrica-hg/*",
  {
    eager: true,
  }
);
const ministerioPublicoCuritiba: { [key: string]: { default: string } } =
  import.meta.glob("../../../assets/images/ministerio-publico-curitiba/*", {
    eager: true,
  });

const unila: { [key: string]: { default: string } } = import.meta.glob(
  '../../../assets/images/unila/*"',
  {
    eager: true,
  }
);
const utfpr: { [key: string]: { default: string } } = import.meta.glob(
  '../../../assets/images/utfpr/*"',
  {
    eager: true,
  }
);

export const projectsInProgress: Project[] = [
  {
    category: "corporativas",
    image: edificio_Comercial_Novare,
    images: novare,
    title: "EDIFÍCIO COMERCIAL NOVARE",
    location: "Centro de Foz do Iguaçu-PR.",
    description:
      "Edificação comercial com 7 pavimentos e 1900m² de área construída. Fundação em estacas com alargamento de base, mais de 900m³ de concreto armado, lajes pré-moldadas protendidas, esquadrias com tratamento acústico e térmico.",
  },
  {
    category: "corporativas",
    images: edco,
    image: edificio_Comercial_Costa_Oeste,
    title: "EDIFÍCIO COMERCIAL COSTA OESTE",
    location: "Centro de Toledo-PR.",
    description: `Edificação comercial com 9 pavimentos, com 2100m² de área construída. Subsolo com paredes de concreto armado aparente. Estrutura em concreto aparente. Fundações profundas com estaca hélice contínua. Lajes em concreto protendo. 
Lançamento de 1300m³ de concreto armado aparente. Esquadrias em pele de vidro e tratamento acústico e térmico. Sistema de automação completo. Sistema de climatização. Elevador alta performance.`,
  },
  {
    category: "publicas",
    images: cdce,
    image: construcao_de_complexo_esportivo,
    title: "CONSTRUÇÃO DE COMPLEXO ESPORTIVO",
    location: "São João-PR.",
    builtArea: "12039,97 m²",
    description:
      "Construção de COMPLEXO ESPORTIVO contendo: Ginásio de Esportes, com ambientes de quadra poliesportiva, arquibancadas, cabines para imprensa, hall de entrada, bilheteria, copa, cozinha, vestiários, instalações sanitárias masculinas e femininas, instalações sanitárias masculinas e femininas para PCD, áreas de circulação e salas multiuso. Campo para Futebol Sintético - CGSF e quadra poliesportiva - modelo meu campinho, além de quadra de areia.",
  },
  {
    category: "industriais",
    images: cilo_industrial,
    image: cilo_banner,
    title: "CILO INDUSTRIAL",
    location: "São João-PR.",
    builtArea: "12039,97 m²",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis facere inventore saepe natus quo molestias, corporis et quos illo minus nam magni illum, aliquid consequatur aperiam fuga eos, excepturi commodi!",
  },
  {
    category: "publicas",
    images: complexo_sao_joao,
    image: complexo_sao_joao_banner,
    title: "COMPLEXO SÃO JÕAO",
    location: "São João-PR.",
    builtArea: "12039,97 m²",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis facere inventore saepe natus quo molestias, corporis et quos illo minus nam magni illum, aliquid consequatur aperiam fuga eos, excepturi commodi!",
  },
];

export const projectsCompleted: Project[] = [
  {
    category: "residenciais",
    image: ROYAL_BOULEVAR,
    title: "CONDOMÍNIO RESIDENCIAL HORIZONTAL ROYAL BOULEVAR",
    location: "Foz do Iguaçu-PR",
    description: `implantação das áreas comuns do condomínio residencial Royal
Boulevard em Foz do Iguaçu. Área de intervenção total 25.000m² Construção com fundações especiais em água. Contenções de água e movimentação de aterros durante a obra. Estruturas com concreto armado e proteção. Piscinas aquecidas. Pórticos de entrada, passarelas, pontes e sistemas de drenagens
`,
    images: royalBoulevard,
  },
  {
    category: "industriais",
    image: FABRICA_DA_HG_DO_BRASIL,
    title: "FABRICA DA HG DO BRASIL",
    location: "Área industrial de Foz do Iguaçu-PR",
    description: `
    implantação da fábrica de CD unidade Foz do Iguaçu. Terreno com 11.000m² , construção com área total de 5.350m2 de aera construída, 11.000m³ de movimentação de terra. 92 Ton. de estruturas metálicas. 1.200m³ de lançamento de concreto. Cabine de alta tensão, subestação e gerador de energia para 500KVA.
    `,
    images: fabricaHG,
  },
  {
    category: "publicas",
    image: COMPLEXO_DE_SERVICO_NACIONAL_DE_APRENDIZAGEM,
    title: "CONSTRUÇÃO DO COMPLEXO DE SERVIÇO NACIONAL DE APRENDIZAGEM SENAR",
    location: "Fazenda Embrapa Campo Grande-MS",
    description: `
    Construção do campus do complexo de aprendizagem rural do Mato Grosso do Sul, obra com área de intervenção de 24Ha, área construída total de 3.300m² . Edificação mista em estrutura metálica e alvenaria convencional. Complexo executado em 180 dias corridos. Mais de 16.000m³ de movimentação de terra e ajustes de terreno. 800m lineares de cravação de estacas em solo mole. Mais de 90T de aço para estrutura metálica. Implantação total do campus com prazo reduzido e trabalho em 2 turnos.
    `,
    images: senar,
  },
  {
    category: "publicas",
    image: ministerioPublicoCuritibaMainPhoto,
    title: "MINISTÉRIO PÚBLICO DE CURITIBA",
    location: "Centro Cívico de Curitiba-PR.",
    description: (
      <>
        Construção da Nova Sede do Ministério Público de Curitiba, obra com
        13.000m² de construção com dois subsolos, pavimento térreo e 8
        Pavimentos tipo incluindo um auditório e pavimento técnico, trincheira
        de ligação entre os prédios com túnel Linear em Método não destrutivo,
        Fundação em Estaca Raiz, Parede Diafragma, Estrutura em concreto armado
        aparente.
        <br />
        <strong> Movimentação de terra: </strong>
        <ul>
          <li> 30.000m³ </li>
          <li>660T de aço aplicado. </li>
          <li>9.000m³ de concreto armado. </li>
          <li>Lajes em concreto armado protendidas.</li>
          <li>Estrutura completa em concreto aparente como acabamento.</li>
          <li>62 metros de túnel com método não destrutivo.</li>
          <li>04 elevadores alta performance.</li>
          <li>30T. de alumínio aplicados em fachada e esquadrias.</li>
        </ul>
      </>
    ),
    images: ministerioPublicoCuritiba,
  },
  {
    category: "publicas",
    image: unilaMainPhoto,
    title: "CONSTRUÇÃO DAS OBRAS DO EDIFÍCIO ESTUDANTIL DA UNILA",
    location: "Foz do Iguaçu-PR.",
    description: (
      <>
        Implantação dos blocos de moradia A e B, refeitório guarita e quadras de
        esportes da Universidade Latina Americana. Obra com área total edificada
        de 5800m². prazo de entrega da obra 12 meses
      </>
    ),
    images: unila,
  },
  {
    category: "publicas",
    image: utftprMainPhoto,
    title: "IMPLANTAÇÃO DOS CAMPUS UTF-PR TOLEDO E MEDIANEIRA",
    location: "Toledo e Medianeira-PR.",
    description: (
      <>
        Implantação dos campus UTF-Pr em Medianeira e Toledo. Blocos de sala de
        aula, laboratórios, quadra de esportes, guaritas toda infraestrutura de
        funcionamento. Mais de 18.000m² de área construída.{" "}
      </>
    ),
    images: utfpr,
  },
  {
    category: "residenciais",
    images: sobrado_luxuoso,
    image: sobrado_luxuoso_banner,
    title: "SOBRADO LUXO",
    location: "Condomínio Royal Boulevard",
    builtArea: "311 m²",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis facere inventore saepe natus quo molestias, corporis et quos illo minus nam magni illum, aliquid consequatur aperiam fuga eos, excepturi commodi!",
  },
  {
    category: "residenciais",
    images: sobrado_moderno,
    image: sobrado_moderno_banner,
    title: "SOBRADO MODERNO",
    location: "Condomínio Royal Boulevard",
    builtArea: "360 m²",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis facere inventore saepe natus quo molestias, corporis et quos illo minus nam magni illum, aliquid consequatur aperiam fuga eos, excepturi commodi!",
  },
  {
    category: "residenciais",
    images: sobrado_vila_a,
    image: sobrado_Vila_A_banner,
    title: "SOBRADO VILA A PARK",
    location: "Condomínio Vila A Park",
    builtArea: "311 m²",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis facere inventore saepe natus quo molestias, corporis et quos illo minus nam magni illum, aliquid consequatur aperiam fuga eos, excepturi commodi!",
  },
  {
    category: "residenciais",
    images: residencial_sofisticado,
    image: residencial_sofisticado_banner,
    title: "RESIDENCIAL SOFISTICADO",
    location: "Condomínio Royal Boulevard",
    builtArea: "360 m²",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis facere inventore saepe natus quo molestias, corporis et quos illo minus nam magni illum, aliquid consequatur aperiam fuga eos, excepturi commodi!",
  },
  {
    category: "residenciais",
    images: casa_terrea,
    image: casa_terrea_banner,
    title: "CASA TERREA",
    location: "Condomínio Royal Boulevard",
    builtArea: "311 m²",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis facere inventore saepe natus quo molestias, corporis et quos illo minus nam magni illum, aliquid consequatur aperiam fuga eos, excepturi commodi!",
  },

  {
    category: "residenciais",
    images: residencial_dois_pisos,
    image: residencial_dois_pisos_banner,
    title: "RESIDENCIAL DOIS PISOS",
    location: "Condomínio Royal Boulevard",
    builtArea: "360 m²",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis facere inventore saepe natus quo molestias, corporis et quos illo minus nam magni illum, aliquid consequatur aperiam fuga eos, excepturi commodi!",
  },
  {
    category: "residenciais",
    images: germina_dos_sonhos,
    image: germina_dos_sonhos_banner,
    title: "GERMINADOS DOS SONHOS",
    location: "Condomínio Royal Boulevard",
    builtArea: "311 m²",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis facere inventore saepe natus quo molestias, corporis et quos illo minus nam magni illum, aliquid consequatur aperiam fuga eos, excepturi commodi!",
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

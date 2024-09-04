// data.ts

import { Project } from "../../../types/Projects";
import COMPLEXO_DE_SERVICO_NACIONAL_DE_APRENDIZAGEM from "../../../assets/images/completed/COMPLEXO_DE_SERVICO_NACIONAL_DE_APRENDIZAGEM.png";
import FABRICA_DA_HG_DO_BRASIL from "../../../assets/images/completed/FABRICA_DA_HG_DO_BRASIL.png";
import MINISTERIO_PUBLICO_DE_FOZ_DO_IGUACU from "../../../assets/images/completed/MINISTERIO_PUBLICO_DE_FOZ_DO_IGUACU.png";
import ROYAL_BOULEVAR from "../../../assets/images/completed/ROYAL_BOULEVAR.png";

import construcao_de_complexo_esportivo from "../../../assets/images/in_progress/construcao_de_complexo_esportivo.png";
import edificio_Comercial_Costa_Oeste from "../../../assets/images/in_progress/edificio_Comercial_Costa_Oeste.png";

import casa from "../../../assets/images/CasaMf.png";

export const projectsInProgress: Project[] = [
  {
    image: casa,
    title: "EDIFÍCIO COMERCIAL NOVARE",
    location: "Centro de Foz do Iguaçu-PR.",
    deliveryDate: "Junho 2024",
    description:
      "Edificação comercial com 7 pavimentos e 1900m² de área construída. Fundação em estacas com alargamento de base, mais de 900m³ de concreto armado, lajes pré-moldadas protendidas, esquadrias com tratamento acústico e térmico.",
    builtArea: "1900 m²",
    numberOfRooms: "10",
    numberOfBathrooms: "5",
    value: "R$ 2.000.000,00",
  },
  {
    image: edificio_Comercial_Costa_Oeste,
    title: "EDIFÍCIO COMERCIAL COSTA OESTE",
    location: "Centro de Toledo-PR.",
    deliveryDate: "Dezembro 2024",
    description: `Edificação comercial com 9 pavimentos, com 2100m² de área construída. Subsolo com paredes de concreto armado aparente. Estrutura em concreto aparente. Fundações profundas com estaca hélice continua. Lajes em concreto protendo. 
Lançamento de 1300m³ de concreto armado aparente. Esquadrias em pele de vidro e tratamento acústico e térmico. Sistema de automação completo. Sistema de climatização. Elevador alta performance.`,
    builtArea: "2100 m²",
    numberOfRooms: "15",
    numberOfBathrooms: "8",
    value: "R$ 3.500.000,00",
  },
  {
    image: construcao_de_complexo_esportivo,
    title: "CONSTRUÇÃO DE COMPLEXO ESPORTIVO",
    location: "São João-PR.",
    builtArea: "12039,97 m²",
    deliveryDate: "Agosto 2024",
    description:
      "Construção de COMPLEXO ESPORTIVO contendo: Ginásio de Esportes, com ambientes de quadra poliesportiva, arquibancadas, cabines para imprensa, hall de entrada, bilheteria, copa, cozinha, vestiários, instalações sanitárias masculinas e femininas, instalações sanitárias masculinas e femininas para PCD, áreas de circulação e salas multiuso. Campo para Futebol Sintético - CGSF e quadra poliesportiva - modelo meu campinho, além de quadra de areia.",
    numberOfRooms: "20",
    numberOfBathrooms: "10",
    value: "R$ 5.000.000,00",
  },
];

export const projectsCompleted: Project[] = [
  {
    image: ROYAL_BOULEVAR,
    title: "CONDOMÍNIO RESIDENCIAL HORIZONTAL ROYAL BOULEVAR",
    location: "Localização 5",
    deliveryDate: "Data de entrega 5",
    description: "Descrição 5",
  },
  {
    image: FABRICA_DA_HG_DO_BRASIL,
    title: "FABRICA DA HG DO BRASIL",
    location: "Localização 6",
    deliveryDate: "Data de entrega 6",
    description: "Descrição 6",
  },
  {
    image: COMPLEXO_DE_SERVICO_NACIONAL_DE_APRENDIZAGEM,
    title: "CONSTRUÇÃO DO COMPLEXO DE SERVIÇO NACIONAL DE APRENDIZAGEM SENAR",
    location: "Localização 7",
    deliveryDate: "Data de entrega 7",
    description: "Descrição 7",
  },
  {
    image: MINISTERIO_PUBLICO_DE_FOZ_DO_IGUACU,
    title: "MINISTÉRIO PÚBLICO DE FOZ DO IGUAÇU",
    location: "Localização 8",
    deliveryDate: "Data de entrega 8",
    description: "Descrição 8",
  },
];

export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 4,
  },
};

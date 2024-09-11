// data.ts

import { HouseProject } from "../../../types/HouseProjects";
const imagesHouse1: { [key: string]: { default: string } } = import.meta.glob(
  "../../../assets/images/casa1/*",
  {
    eager: true,
  }
);
const imagesHouse2: { [key: string]: { default: string } } = import.meta.glob(
  "../../../assets/images/casa2/*",
  {
    eager: true,
  }
);

export const housesProjects: HouseProject[] = [
  {
    images: imagesHouse1,
    title: "Casa 1",
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
    images: imagesHouse2,
    title: "Casa 2",
    location: "Centro de Foz do Iguaçu-PR.",
    deliveryDate: "Junho 2024",
    description:
      "Edificação comercial com 7 pavimentos e 1900m² de área construída. Fundação em estacas com alargamento de base, mais de 900m³ de concreto armado, lajes pré-moldadas protendidas, esquadrias com tratamento acústico e térmico.",
    builtArea: "1900 m²",
    numberOfRooms: "10",
    numberOfBathrooms: "5",
    value: "R$ 2.000.000,00",
  },
];

export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
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

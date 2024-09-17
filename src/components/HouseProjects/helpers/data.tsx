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
const imagesApartamentoImobiliado: { [key: string]: { default: string } } =
  import.meta.glob("../../../assets/images/apartamento-imobiliado/*", {
    eager: true,
  });

export const housesProjects: HouseProject[] = [
  {
    images: imagesHouse1,
    title: "RESIDENCIAL ROYAL BOULEVARD 1",
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
    title: "RESIDENCIAL ROYAL BOULEVARD 2",
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
    title: "SOBRADO ENCANTADOR",
    location: "Centro de Foz do Iguaçu-PR.",
    deliveryDate: "Junho 2024",
    description: (
      <>
        Sobrado alto padrão com estrutura mista metálica, alvenaria, lajes,
        forro de madeira, sistema de automação, ar condicionado em todos os
        ambientes, sistema solar com sobra de energia, elevador, sistema de
        aquecimento de agua solar, sistema de aquecimento de piscina, piscina
        com salinizador, persianas automatizadas, movelaria completa, iluminação
        interna e externa da casa e piscina.
        <strong>Parte inferior:</strong>
        <ul>
          <li>02 Garagens amplas cobertas</li>
          <li>Escritório com banheiro</li>
          <li>Sala de cinema com banheiro</li>
          <li>Suíte com closet</li>
        </ul>
        <strong>Parte superior:</strong>
        <ul>
          <li>Suíte master com closet e banheiro</li>
          <li>02 Suítes com closet</li>
          <li>Sala de estar</li>
          <li>Lavabo</li>
          <li>Lavanderia</li>
          <li>Área gourmet com churrasqueira</li>
          <li>Varanda</li>
          <li>Piscina</li>
        </ul>
        <p>
          <strong>PRONTA PARA MORAR.</strong>
        </p>
        <p>
          <em>Não ficam no imóvel móveis soltos.</em>
        </p>
      </>
    ),
    builtArea: "1900 m²",
    numberOfRooms: "10",
    numberOfBathrooms: "5",
    value: "R$ 2.000.000,00",
  },
  {
    images: imagesApartamentoImobiliado,
    title: "APARTAMENTO MOBILIADO - EDIFÍCIO CHEVERNY",
    location:
      "Apartamento no 13º andar, edifício Cheverny, av. Jose Maria de Brito, 2930",
    deliveryDate: "Junho 2024",
    description: (
      <>
        Apartamento mobiliado completo, decoração, moveis, eletro, ar
        condicionado, pronto para morar.
        <br />
        Contendo:
        <br />
        <ul>
          <li>Dois quartos</li>
          <li>Um banheiro social</li>
          <li>Sala de estar/jantar</li>
          <li>Cozinha</li>
          <li>Área de serviço</li>
          <li>Sacada</li>
          <li>Uma vaga de garagem</li>
        </ul>
        <p>O Condomínio oferece:</p>
        <ul>
          <li>Portaria 24 horas</li>
          <li>Área para churrasco</li>
          <li>Piscina</li>
        </ul>
      </>
    ),
    builtArea: "72m²",
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

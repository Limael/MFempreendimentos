// data.ts

import { HouseProject } from "../../../types/HouseProjects";
const imagesHouse1: { [key: string]: { default: string } } = import.meta.glob(
  "../../../assets/images/casa1/*",
  {
    eager: true,
  }
);
const casa_terrea_alto_padrao: { [key: string]: { default: string } } =
  import.meta.glob("../../../assets/images/casa-terrea-alto-padrao/*", {
    eager: true,
  });
const casa_com_edicula: { [key: string]: { default: string } } =
  import.meta.glob("../../../assets/images/casa-com-edicula/*", {
    eager: true,
  });
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
const imagesSobrado: { [key: string]: { default: string } } = import.meta.glob(
  "../../../assets/images/sobrado/*",
  {
    eager: true,
  }
);
const recantoDoLago: { [key: string]: { default: string } } = import.meta.glob(
  "../../../assets/images/Recanto do Lago/*",
  {
    eager: true,
  }
);

export const housesProjects: HouseProject[] = [
  {
    images: imagesHouse1,
    title: "RESIDENCIAL ROYAL BOULEVARD 1",
    location: "Avenida das Cataratas.",
    deliveryDate: "Junho 2024",
    description: (
      <>
        <p>
          Residencial familiar de alto padrão, localizado em um condomínio de
          luxo, perfeito para a comodidade, segurança e bem-estar da família. O
          projeto dos sonhos que você pode chamar de seu, com cerca de 284
          metros de área total.
        </p>
        <ul>
          <li>1 Suíte Master</li>
          <li>3 Suítes Tradicionais</li>
          <li>Sala de Estar</li>
          <li>Sala de Jantar</li>
          <li>Espaço Gourmet</li>
          <li>Lavanderia</li>
          <li>Lavabo</li>
          <li>Área externa com piscina</li>
          <li>Garagem com depósito</li>
        </ul>
      </>
    ),
    builtArea: "1900 m²",
    numberOfRooms: "4",
    numberOfBathrooms: "4",
    value: "R$ 2.000.000,00",
  },
  {
    images: imagesHouse2,
    title: "RESIDENCIAL ROYAL BOULEVARD 2",
    location: "Avenida das Cataratas.",
    deliveryDate: "Junho 2024",
    description: (
      <>
        <p>
          Projetada com muita delicadeza, esta casa remete a um estilo de vida
          único e exala requinte e sofisticação. Um projeto exclusivo,
          idealizado para transformar o sonho de uma família em realidade.
        </p>
        <p>Com uma área completa, a residência oferece os seguintes espaços:</p>

        <ul>
          <li>1 Suíte Master</li>
          <li>3 Suítes Tradicionais</li>
          <li>Sala de Estar</li>
          <li>Sala de Jantar</li>
          <li>Espaço Gourmet</li>
          <li>Lavanderia</li>
          <li>Lavabo</li>
          <li>Área externa com piscina</li>
          <li>Garagem com depósito</li>
        </ul>
      </>
    ),
    builtArea: "1900 m²",
    numberOfRooms: "4",
    numberOfBathrooms: "4",
    value: "R$ 2.000.000,00",
  },
  {
    images: imagesSobrado,
    title: "SOBRADO ENCANTADOR",
    location: "Condomínio Vila A Park",
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
          <strong>Não ficam no imóvel móveis soltos.</strong>
        </p>
      </>
    ),
    builtArea: "311m²",
    numberOfRooms: "4",
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
    numberOfRooms: "2",
    numberOfBathrooms: "1",
    value: "R$ 2.000.000,00",
  },
  {
    images: recantoDoLago,
    title: "TERRENO LOTEAMENTO RECANTO DO LAGO",
    location: " Av. Maria Bubiak em frente ao Golf.  quadra 9A, lote 264.",
    deliveryDate: "Junho 2024",
    description: (
      <>
        Casa térrea com alto padrão mobiliada. Um projeto bem distribuído, com
        ar condicionado em todos os ambientes, com acesso lateral da casa para
        os fundos, sobra de terreno, churrasqueira, pergolado, jardim, pé
        direito duplo na sala e cozinha.
      </>
    ),
    builtArea: "10x30, 300m²",
    numberOfRooms: "2",
    numberOfBathrooms: "1",
    value: "R$ 2.000.000,00",
  },
  {
    images: casa_terrea_alto_padrao,
    title: "CASA TÉRREA DE ALTO PADRÃO - LOTEAMENTO PARQUE DOS PIONEIROS",
    location: "Parque dos Pioneiros, Rua Angelina Lemos, 464.",
    deliveryDate: "Junho 2024",
    description: (
      <>
        Oportunidade para investimento. Terreno sub esquina de frente para o
        lago, na entrada do loteamento.
        <br />
        <ul>
          <li>Garagem ampla para 2 carros cobertos</li>
          <li>Acesso lateral para os fundos</li>
          <li>Sala de estar, jantar e cozinha gourmet (pé direito duplo)</li>
          <li>Suíte com closet</li>
          <li>2 quartos</li>
          <li>Banheiro social</li>
          <li>Lavanderia</li>
          <li>Churrasqueira nos fundos</li>
          <li>Pergolado e jardim integrado</li>
        </ul>
      </>
    ),
    builtArea: "112m²",
    numberOfRooms: "2",
    numberOfBathrooms: "1",
    value: "R$ 2.000.000,00",
  },
  {
    images: casa_com_edicula,
    title: "CASA COM EDÍCULA COMPLETA - LOTEAMENTO PARQUE DOS PIONEIROS",
    location: "Parque dos Pioneiros, Rua Angelina Lemos, 464.",
    deliveryDate: "Junho 2024",
    description: (
      <>
        Casa térrea com alto padrão mobiliada, de interiores executados por
        completo, ar condicionado em todos os ambientes, sistema fotovoltaico,
        cerca elétrica, câmeras, com acesso lateral da casa para os fundos,
        edícula com churrasqueira, jardim, pé direito duplo na sala e cozinha.
        <br />
        <ul>
          <li>Garagem ampla para 2 carros cobertos</li>
          <li>Acesso lateral para os fundos</li>
          <li>Sala de estar, jantar e cozinha gourmet (pé direito duplo)</li>
          <li>Suíte com closet</li>
          <li>2 quartos</li>
          <li>Banheiro social</li>
          <li>Churrasqueira e gourmet nos fundos</li>
          <li>Lavabo</li>
          <li>Lavanderia</li>
        </ul>
      </>
    ),
    builtArea: "137m²",
    numberOfRooms: "2",
    numberOfBathrooms: "1",
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

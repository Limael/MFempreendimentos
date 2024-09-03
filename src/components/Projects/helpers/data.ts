// data.ts

import { Project } from '../../../types/Projects';
import COMPLEXO_DE_SERVICO_NACIONAL_DE_APRENDIZAGEM from '../../../assets/images/completed/COMPLEXO_DE_SERVICO_NACIONAL_DE_APRENDIZAGEM.png';
import FABRICA_DA_HG_DO_BRASIL from '../../../assets/images/completed/FABRICA_DA_HG_DO_BRASIL.png';
import MINISTERIO_PUBLICO_DE_FOZ_DO_IGUACU from '../../../assets/images/completed/MINISTERIO_PUBLICO_DE_FOZ_DO_IGUACU.png';
import ROYAL_BOULEVAR from '../../../assets/images/completed/ROYAL_BOULEVAR.png';

import construcao_de_complexo_esportivo from '../../../assets/images/in_progress/construcao_de_complexo_esportivo.png';
import construcao_do_armazem_de_Graos from '../../../assets/images/in_progress/construcao_do_armazem_de_Graos.png';
import edificio_Comercial_Costa_Oeste from '../../../assets/images/in_progress/edificio_Comercial_Costa_Oeste.png';
import edificio_Comercial_Novare from '../../../assets/images/in_progress/edificio_Comercial_Novare.png';



export const projectsInProgress: Project[] = [
    {
        image: edificio_Comercial_Novare,
        title: 'EDIFÍCIO COMERCIAL NOVARE',
        location: 'Centro de Foz do Iguaçu-PR.',
        deliveryDate: 'Junho 2024',
        description: 'Edificação comercial com 7 pavimentos e 1900m² de área construída...',
    },
    {
        image: edificio_Comercial_Costa_Oeste,
        title: 'EDIFÍCIO COMERCIAL COSTA OESTE',
        location: 'Localização 2',
        deliveryDate: 'Data de entrega 2',
        description: 'Descrição 2',
    },
    {
        image: construcao_de_complexo_esportivo,
        title: 'CONSTRUÇÃO DE COMPLEXO ESPORTIVO',
        location: 'Localização 3',
        deliveryDate: 'Data de entrega 3',
        description: 'Descrição 3',
    },
    {
        image: construcao_do_armazem_de_Graos,
        title: 'Construção do Armazém de Grãos e Distribuidora de Alpiste Foz Ltda.',
        location: 'Localização 4',
        deliveryDate: 'Data de entrega 4',
        description: 'Descrição 4',
    },
];

export const projectsCompleted: Project[] = [
    {
        image: ROYAL_BOULEVAR,
        title: 'CONDOMÍNIO RESIDENCIAL HORIZONTAL ROYAL BOULEVAR',
        location: 'Localização 5',
        deliveryDate: 'Data de entrega 5',
        description: 'Descrição 5',
    },
    {
        image: FABRICA_DA_HG_DO_BRASIL,
        title: 'FABRICA DA HG DO BRASIL',
        location: 'Localização 6',
        deliveryDate: 'Data de entrega 6',
        description: 'Descrição 6',
    },
    {
        image: COMPLEXO_DE_SERVICO_NACIONAL_DE_APRENDIZAGEM,
        title: 'CONSTRUÇÃO DO COMPLEXO DE SERVIÇO NACIONAL DE APRENDIZAGEM SENAR',
        location: 'Localização 7',
        deliveryDate: 'Data de entrega 7',
        description: 'Descrição 7',
    },
    {
        image: MINISTERIO_PUBLICO_DE_FOZ_DO_IGUACU,
        title: 'MINISTÉRIO PÚBLICO DE FOZ DO IGUAÇU',
        location: 'Localização 8',
        deliveryDate: 'Data de entrega 8',
        description: 'Descrição 8',
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

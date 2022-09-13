import producto_1 from '../images/producto_1.jpg';
import producto_2 from '../images/producto_2.jpg';
import producto_3 from '../images/producto_3.jpg';
import producto_4 from '../images/producto_4.jpg';

export const Productos = [
    {
        id: 1,
        categoria: 'toallas',
        title: 'Toallón',
        description: 'Confeccionada con tela de toalla doble felpa con capucha en tela piqué o gabardina estampada 100 % algodón y en su interior en tela de toalla.',
        pictureUrl: producto_1,
        price: 350.99,
        stock: 30,
        initial: 1,
    },
    {
        id: 2,
        categoria: 'toallas',
        title: 'Toalla con Capucha',
        description: 'Confeccionada en tela de toalla doble felpa. Con Capucha en tela de algodón en su interior en toalla.',
        pictureUrl: producto_2,
        price: 600.25,
        stock: 10,
        initial: 1,
    },
    {
        id: 3,
        categoria: 'mantas',
        title: 'Mantas Polar y corderito',
        description: 'Confeccionada en tela polar soft y corderito suave. Mantita recibidora, también para usar en el cochecito y  en la cuna.',
        pictureUrl: producto_3,
        price: 400,
        stock: 25,
        initial: 1,
    },
    {
        id: 4,
        categoria: 'cambiadores',
        title: 'Cambiador para bolso',
        description: 'Exterior en tela matelasse de algodón, en su interior tela impermeable, para su mejor limpieza.',
        pictureUrl: producto_4,
        price: 500,
        stock: 12,
        initial: 1,
    },
    
]
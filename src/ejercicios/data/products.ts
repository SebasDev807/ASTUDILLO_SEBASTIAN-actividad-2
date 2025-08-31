interface Product {
    title: string;
    imageUrl: string;
    price: number;
    description?: string;
    features?: string[];
    sizes?: string[];   // Tallas disponibles
    stock?: number;     // Cantidad disponible
}

export const products: Product[] = [
    {
        title: 'Camiseta Red Bull Racing',
        imageUrl: '/products/redbull_shirt.webp',
        price: 50,
        description: 'Camiseta oficial Red Bull Racing, diseño clásico.',
        features: ['Logo bordado', 'Transpirable', 'Ajuste cómodo'],
        sizes: ['S', 'M', 'L', 'XL'],
        stock: 30
    },
    {
        title: 'Sudadera Mercedes AMG',
        imageUrl: '/products/sudadera_mercedes.webp',
        price: 80,
        description: 'Sudadera oficial Mercedes AMG con capucha ajustable.',
        features: ['Suave al tacto', 'Bolsillos frontales', 'Resistente al frío'],
        sizes: ['M', 'L', 'XL', 'XXL'],
        stock: 20
    },
    {
        title: 'Gorra Ferrari',
        imageUrl: '/products/gorra_ferrari.jpeg',
        price: 35,
        description: 'Gorra oficial Ferrari con logo bordado.',
        features: ['Ligera', 'Ajustable', 'Resistente al sol'],
        sizes: ['Única'],
        stock: 50
    },
    {
        title: 'Mini Casco Lewis Hamilton',
        imageUrl: '/products/casco_hamilton.jpg',
        price: 120,
        description: 'Mini casco de colección a escala 1:5 de Lewis Hamilton.',
        features: ['Pintura detallada', 'Soporte incluido', 'Coleccionable'],
        stock: 15
    },
    {
        title: 'Mini Casco Max Verstappen',
        imageUrl: '/products/casco_max.webp',
        price: 120,
        description: 'Mini casco de colección a escala 1:5 de Max Verstappen.',
        features: ['Acabado realista', 'Base para exposición', 'Coleccionable'],
        stock: 10
    },
    {
        title: 'Chaqueta Alpine F1',
        imageUrl: '/products/alpine_shirt.avif',
        price: 150,
        description: 'Chaqueta oficial Alpine, resistente al viento.',
        features: ['Capucha desmontable', 'Bolsillos interiores', 'Cómoda y ligera'],
        sizes: ['M', 'L', 'XL', 'XXL'],
        stock: 12
    },
    {
        title: 'Camiseta McLaren',
        imageUrl: '/products/mcLaren_shirt.avif',
        price: 55,
        description: 'Camiseta oficial McLaren con diseño moderno.',
        features: ['Logo estampado', 'Transpirable', 'Ajuste clásico'],
        sizes: ['S', 'M', 'L', 'XL'],
        stock: 25
    }
];

interface Product {
    title: string;
    imageUrl: string;
    price: number;
    description?: string;
    features?: string[];
}

export const products: Product[] = [
    {
        title: 'Bareta',
        imageUrl: '/products/cannabis.jpg',
        price: 2000,
        description: 'Peguese los plones y disfrute de su aroma, escuche colores y vea sonidos',
        features: ['100% natural', 'Cultivo indoor', 'Aroma intenso']
    },
    {
        title: 'Chamber',
        imageUrl: '/products/chamber.jpeg',
        price: 1500,
        description: 'Alcohol jgb con frutiño, una chimba',
        features: ["Rico", "Rico", "Rico"]
    },
    {
        title: 'Crack',
        imageUrl: '/products/crack.jpg',
        description: 'Pega fuerte, no es para todos los públicos',
        price: 1600,
        features:["100% adictivo", "No apto para cardíacos", "Te hace feliz"]
    },
    {
        title: 'Clonazepam',
        description: 'Relajante muscular, ansiolítico, anticonvulsivo y sedante',
        price: 6000,
        imageUrl: '/products/coquan.jpeg',
        features: ["Efecto prolongado", "Uso recreativo", "Alivio del estrés"]
    }
]
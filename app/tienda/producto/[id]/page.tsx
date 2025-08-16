import ProductClientPage from "./ProductClientPage"

// Mock product data for static generation
const products = [
  {
    id: 1,
    name: "Suéter Minimalista Negro",
    price: 89.99,
    originalPrice: 109.99,
    category: "sueteres",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Negro"],
    images: [
      "/minimalist-black-sweater.png",
      "/black-sweater-front.png",
      "/black-sweater-back-view.png",
      "/placeholder-guk1p.png",
    ],
    description:
      "Suéter minimalista de alta calidad confeccionado en algodón premium. Diseño atemporal que combina comodidad y estilo urbano.",
    features: [
      "100% Algodón orgánico",
      "Corte regular fit",
      "Cuello redondo",
      "Costuras reforzadas",
      "Lavable a máquina",
    ],
    isNew: true,
    onSale: true,
    rating: 4.8,
    reviews: 24,
    stock: 15,
  },
  {
    id: 2,
    name: "Gorra Minimalista Blanca",
    price: 34.99,
    originalPrice: 44.99,
    category: "gorras",
    sizes: ["Única"],
    colors: ["Blanco"],
    images: ["/minimalist-white-cap.png", "/placeholder-guk1p.png"],
    description: "Gorra minimalista de diseño limpio y moderno.",
    features: ["100% Algodón", "Ajustable", "Diseño minimalista"],
    isNew: false,
    onSale: true,
    rating: 4.5,
    reviews: 12,
    stock: 8,
  },
  {
    id: 3,
    name: "Sudadera Negra Oversized",
    price: 79.99,
    originalPrice: 99.99,
    category: "sueteres",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Negro"],
    images: ["/oversized-black-hoodie-urban.png", "/placeholder-guk1p.png"],
    description: "Sudadera oversized perfecta para el estilo urbano.",
    features: ["Corte oversized", "Capucha ajustable", "Bolsillo frontal"],
    isNew: true,
    onSale: false,
    rating: 4.7,
    reviews: 18,
    stock: 12,
  },
]

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }))
}

export default function ProductPage() {
  return <ProductClientPage />
}

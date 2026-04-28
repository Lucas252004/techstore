export type Producto = {
  id: number
  nombre: string
  precio: number
  imagen: string
  descripcion: string
  categoria: string
}

export const productos: Producto[] = [
  {
    id: 1,
    nombre: "iPhone 15",
    precio: 1299999,
    imagen: "/images/iphone15.png",
    descripcion: "128GB, Chip A16, cámara 48MP",
    categoria: "celulares",
  },
  {
    id: 2,
    nombre: "Samsung Galaxy S24",
    precio: 1149999,
    imagen: "/images/s24.png",
    descripcion: "256GB, Android 14, pantalla AMOLED",
    categoria: "celulares",
  },
  {
    id: 3,
    nombre: "AirPods Pro 2",
    precio: 389999,
    imagen: "/images/airpods.png",
    descripcion: "Cancelación activa de ruido, estuche MagSafe",
    categoria: "audio",
  },
  {
    id: 4,
    nombre: "MacBook Air M3",
    precio: 2499999,
    imagen: "/images/macbook.png",
    descripcion: "13 pulgadas, 8GB RAM, 256GB SSD",
    categoria: "laptops",
  },
  {
    id: 5,
    nombre: "Apple Watch SE",
    precio: 549999,
    imagen: "/images/applewatch.png",
    descripcion: "GPS, monitoreo de salud, 44mm",
    categoria: "wearables",
  },
  {
    id: 6,
    nombre: "Motorola Edge 50",
    precio: 649999,
    imagen: "/images/moto.png",
    descripcion: "256GB, cámara 50MP, carga rápida 68W",
    categoria: "celulares",
  },
]

export const productosDestacados = productos.slice(0, 6)
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
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3u-cZslBp3S9J0gw31-2ll9DW8U3Db2gjeg&s",
    descripcion: "128GB, Chip A16, cámara 48MP",
    categoria: "celulares",
  },
  {
    id: 2,
    nombre: "Samsung Galaxy S24",
    precio: 1149999,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJK0f74Ia32L9MCWGjxi2aoQnVls-A8_gQJw&s",
    descripcion: "256GB, Android 14, pantalla AMOLED",
    categoria: "celulares",
  },
  {
    id: 3,
    nombre: "AirPods Pro 2",
    precio: 389999,
    imagen: "https://cdn-ipoint.waugi.com.ar/27897-large_default/airpods-pro-2.jpg",
    descripcion: "Cancelación activa de ruido, estuche MagSafe",
    categoria: "audio",
  },
  {
    id: 4,
    nombre: "MacBook Air M3",
    precio: 2499999,
    imagen: "https://mauricomputacion.com.ar/images/productos/25277.webp",
    descripcion: "13 pulgadas, 8GB RAM, 256GB SSD",
    categoria: "laptops",
  },
  {
    id: 5,
    nombre: "Apple Watch SE",
    precio: 549999,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOiaV5YcTWpMwL7j_25Y-hz2mrREg5-ollKw&s",
    descripcion: "GPS, monitoreo de salud, 44mm",
    categoria: "wearables",
  },
  {
    id: 6,
    nombre: "Motorola Edge 50",
    precio: 649999,
    imagen: "https://http2.mlstatic.com/D_NQ_NP_971220-MLA99928931799_112025-O.webp",
    descripcion: "256GB, cámara 50MP, carga rápida 68W",
    categoria: "celulares",
  },
]

export const productosDestacados = productos.slice(0, 6)
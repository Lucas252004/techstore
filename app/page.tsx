import Link from "next/link"
import ProductCard from "@/components/ProductCard"
import { productosDestacados } from "@/lib/products"
import Carrusel from "@/components/Carrusel"

const servicios = [
  { icono: "🔧", titulo: "Pantallas rotas", descripcion: "Reemplazo en 24hs con garantía" },
  { icono: "🔋", titulo: "Batería", descripcion: "Cambio express mismo día" },
  { icono: "💧", titulo: "Daño por agua", descripcion: "Diagnóstico gratuito" },
  { icono: "📷", titulo: "Cámara", descripcion: "Reparación de lente y sensor" },
]
const resenas = [
  {
    nombre: "Martina G.",
    producto: "iPhone 15",
    estrellas: 5,
    texto: "Excelente atención y el producto llegó perfectamente embalado. Lo pedí el lunes y el miércoles ya lo tenía en casa. Muy recomendable.",
  },
  {
    nombre: "Lucas P.",
    producto: "Reparación de pantalla",
    estrellas: 5,
    texto: "Llevé mi Samsung con la pantalla rota y en menos de 24 horas lo tenía como nuevo. El precio fue muy razonable y el trabajo quedó impecable.",
  },
  {
    nombre: "Valeria M.",
    producto: "AirPods Pro 2",
    estrellas: 4,
    texto: "Muy buena experiencia de compra. El producto es original y llegó con todos los accesorios. Le saco una estrella porque tardó un día más de lo esperado.",
  },
  {
    nombre: "Diego F.",
    producto: "MacBook Air M3",
    estrellas: 5,
    texto: "Compré la MacBook y el proceso fue muy simple. Me asesoraron bien antes de comprar y el precio era mejor que en otras tiendas. Diez puntos.",
  },
  {
    nombre: "Sofía R.",
    producto: "Cambio de batería",
    estrellas: 5,
    texto: "El servicio técnico es de primera. Mi celular duraba 2 horas y ahora vuelve a durar todo el día. Rápido, barato y con garantía.",
  },
  {
    nombre: "Tomás B.",
    producto: "Samsung Galaxy S24",
    estrellas: 4,
    texto: "Muy buen producto y atención al cliente impecable. Me respondieron todas las dudas antes de comprar. Lo recomiendo sin dudarlo.",
  },
]
export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0f1117] text-white py-28 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(37,99,235,0.15),transparent_70%)]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-block bg-blue-950 text-blue-400 text-sm px-4 py-1 rounded-full mb-5 border border-blue-800">
            Nuevos modelos 2026
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-5 leading-tight tracking-tight">
            La mejor tecnología,<br />al mejor precio
          </h1>
          <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
            Celulares, accesorios y más. Envío a todo el país.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/productos"
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-medium transition-colors"
            >
              Ver productos
            </Link>
            <Link
              href="/reparaciones"
              className="border border-blue-800 hover:border-blue-500 text-blue-400 hover:text-blue-300 px-8 py-3 rounded-xl font-medium transition-colors"
            >
              Reparaciones
            </Link>
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-bold text-slate-100 mb-6">Categorías</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Celulares", "Laptops", "Audio", "Wearables"].map((cat) => (
            <Link
              key={cat}
              href={`/productos?categoria=${cat.toLowerCase()}`}
              className="bg-[#161820] border border-[#2a2d3a] rounded-xl p-6 text-center hover:border-blue-700 hover:bg-[#1a1d2e] transition-all text-slate-300 hover:text-blue-400 font-medium"
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>

      {/* Productos destacados */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-slate-100">Productos destacados</h2>
          <Link
            href="/productos"
            className="text-blue-400 hover:text-blue-300 text-sm transition-colors"
          >
            Ver todos →
          </Link>
        </div>
        <Carrusel productos={productosDestacados} />
      </section>

      {/* Sección reparaciones */}
      <section className="bg-[#0d0f18] border-t border-[#2a2d3a] mt-16 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <h2 className="text-2xl font-bold text-slate-100">Servicio técnico</h2>
            <span className="bg-emerald-950 text-emerald-400 text-xs px-3 py-1 rounded-full border border-emerald-800">
              Nuevo
            </span>
          </div>
          <p className="text-slate-400 mb-10">Reparaciones profesionales con garantía en todos los trabajos.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            {servicios.map((s) => (
              <div
                key={s.titulo}
                className="bg-[#161820] border border-[#2a2d3a] rounded-xl p-5 hover:border-blue-800 transition-colors"
              >
                <span className="text-3xl mb-3 block">{s.icono}</span>
                <h3 className="font-semibold text-slate-100 mb-1">{s.titulo}</h3>
                <p className="text-slate-400 text-sm">{s.descripcion}</p>
              </div>
            ))}
          </div>
          <Link
            href="/reparaciones"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-medium transition-colors"
          >
            Ver todos los servicios →
          </Link>
        </div>
      </section>
      {/* Reseñas */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-slate-100 mb-3">Lo que dicen nuestros clientes</h2>
          <p className="text-slate-400">Más de 500 clientes satisfechos en todo el país</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {resenas.map((r) => (
            <div
              key={r.nombre}
              className="bg-[#161820] border border-[#2a2d3a] rounded-2xl p-6 hover:border-blue-800 transition-all flex flex-col gap-4"
            >
              {/* Estrellas */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${i < r.estrellas ? "text-amber-400" : "text-slate-700"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Texto */}
              <p className="text-slate-300 text-sm leading-relaxed flex-1">"{r.texto}"</p>

              {/* Autor */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#2a2d3a]">
                <div className="w-9 h-9 rounded-full bg-blue-900 border border-blue-700 flex items-center justify-center text-blue-300 text-sm font-bold flex-shrink-0">
                  {r.nombre.charAt(0)}
                </div>
                <div>
                  <p className="text-slate-100 text-sm font-medium">{r.nombre}</p>
                  <p className="text-slate-500 text-xs">{r.producto}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
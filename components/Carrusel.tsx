"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { useCart } from "@/context/CartContext"
import { Producto } from "@/lib/products"

export default function Carrusel({ productos }: { productos: Producto[] }) {
  const { agregarAlCarrito } = useCart()
  const [indice, setIndice] = useState(0)
  const intervaloRef = useRef<NodeJS.Timeout | null>(null)

  const iniciarIntervalo = () => {
    if (intervaloRef.current) clearInterval(intervaloRef.current)
    intervaloRef.current = setInterval(() => {
      setIndice((prev) => (prev + 1) % productos.length)
    }, 3000)
  }

  useEffect(() => {
    iniciarIntervalo()
    return () => {
      if (intervaloRef.current) clearInterval(intervaloRef.current)
    }
  }, [productos.length])

  const irA = (i: number) => {
    setIndice(i)
    iniciarIntervalo()
  }

  const anterior = () => irA((indice - 1 + productos.length) % productos.length)
  const siguiente = () => irA((indice + 1) % productos.length)

  const producto = productos[indice]

  return (
    <div className="relative w-full overflow-hidden">

      {/* Tarjeta principal */}
      <div className="bg-[#161820] border border-[#2a2d3a] rounded-2xl overflow-hidden transition-all duration-500">
        <div className="flex flex-col md:flex-row">

          {/* Imagen */}
          <div className="bg-[#1e2030] flex items-center justify-center p-12 md:w-1/2 min-h-64">
            <img
              key={producto.id}
              src={producto.imagen}
              alt={producto.nombre}
              className="max-h-52 object-contain animate-fade"
            />
          </div>

          {/* Info */}
          <div className="p-8 flex flex-col justify-center md:w-1/2">
            <span className="text-xs text-blue-400 font-medium uppercase tracking-widest mb-2">
              {producto.categoria}
            </span>
            <h3 className="text-3xl font-bold text-slate-100 mb-3">{producto.nombre}</h3>
            <p className="text-slate-400 mb-6">{producto.descripcion}</p>
            <p className="text-4xl font-bold text-blue-400 mb-8">
              ${producto.precio.toLocaleString()}
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => agregarAlCarrito(producto)}
                className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-medium transition-all active:scale-95"
              >
                Agregar al carrito
              </button>
              <Link
                href={`/productos/${producto.id}`}
                className="border border-[#2a2d3a] hover:border-blue-700 text-slate-300 hover:text-blue-400 px-6 py-3 rounded-xl font-medium transition-all"
              >
                Ver detalle
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* Controles */}
      <div className="flex items-center justify-between mt-5">

        {/* Flechas */}
        <button
          onClick={anterior}
          className="bg-[#161820] border border-[#2a2d3a] hover:border-blue-700 text-slate-400 hover:text-blue-400 w-10 h-10 rounded-full flex items-center justify-center transition-all"
        >
          ←
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {productos.map((_, i) => (
            <button
              key={i}
              onClick={() => irA(i)}
              className={`rounded-full transition-all duration-300 ${
                i === indice
                  ? "bg-blue-500 w-6 h-2"
                  : "bg-[#2a2d3a] hover:bg-slate-500 w-2 h-2"
              }`}
            />
          ))}
        </div>

        {/* Flecha */}
        <button
          onClick={siguiente}
          className="bg-[#161820] border border-[#2a2d3a] hover:border-blue-700 text-slate-400 hover:text-blue-400 w-10 h-10 rounded-full flex items-center justify-center transition-all"
        >
          →
        </button>

      </div>

      {/* Barra de progreso */}
      <div className="mt-3 h-0.5 bg-[#2a2d3a] rounded-full overflow-hidden">
        <div
          key={indice}
          className="h-full bg-blue-600 rounded-full"
          style={{ animation: "progreso 3s linear forwards" }}
        />
      </div>

      <style>{`
        @keyframes progreso {
          from { width: 0% }
          to { width: 100% }
        }
      `}</style>

    </div>
  )
}
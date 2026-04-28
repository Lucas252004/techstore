"use client"

import Link from "next/link"
import { useCart } from "@/context/CartContext"
import { Producto } from "@/lib/products"

export default function ProductCard({ id, nombre, precio, imagen, descripcion, categoria }: Producto) {
  const { agregarAlCarrito } = useCart()

  return (
    <div className="bg-[#161820] border border-[#2a2d3a] rounded-2xl overflow-hidden hover:border-blue-800 transition-all duration-300 group">
      <Link href={`/productos/${id}`}>
        <div className="bg-[#1e2030] p-6 flex items-center justify-center h-52 group-hover:bg-[#1a1d2e] transition-colors">
          <img
            src={imagen}
            alt={nombre}
            className="h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      <div className="p-5">
        <span className="text-xs text-blue-400 font-medium uppercase tracking-wide">
          {categoria}
        </span>
        <Link href={`/productos/${id}`}>
          <h3 className="font-semibold text-slate-100 text-lg mt-1 hover:text-blue-400 transition-colors">
            {nombre}
          </h3>
        </Link>
        <p className="text-slate-400 text-sm mt-1">{descripcion}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-blue-400 font-bold text-xl">
            ${precio.toLocaleString()}
          </span>
          <button
            onClick={() => agregarAlCarrito({ id, nombre, precio, imagen, descripcion, categoria })}
            className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm active:scale-95 transition-all"
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  )
}
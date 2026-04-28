"use client"

import { use } from "react"
import { productos } from "@/lib/products"
import { useCart } from "@/context/CartContext"
import Link from "next/link"
import { notFound } from "next/navigation"

export default function DetalleProducto({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const producto = productos.find((p) => p.id === Number(id))

  if (!producto) notFound()

  const { agregarAlCarrito } = useCart()

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">

      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-8 flex gap-2">
        <Link href="/" className="hover:text-blue-600">Inicio</Link>
        <span>/</span>
        <Link href="/productos" className="hover:text-blue-600">Productos</Link>
        <span>/</span>
        <span className="text-gray-800">{producto.nombre}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Imagen */}
        <div className="bg-gray-100 rounded-2xl p-12 flex items-center justify-center min-h-72">
          <img
            src={producto.imagen}
            alt={producto.nombre}
            className="max-h-64 object-contain"
          />
        </div>

        {/* Info */}
        <div className="flex flex-col justify-center">
          <span className="text-sm text-blue-600 font-medium uppercase tracking-wide mb-2">
            {producto.categoria}
          </span>
          <h1 className="text-3xl font-bold text-gray-800 mb-3">{producto.nombre}</h1>
          <p className="text-gray-500 text-lg mb-6">{producto.descripcion}</p>
          <p className="text-4xl font-bold text-blue-600 mb-8">
            ${producto.precio.toLocaleString()}
          </p>
          <button
            onClick={() => agregarAlCarrito(producto)}
            className="bg-blue-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-blue-700 active:scale-95 transition-all"
          >
            Agregar al carrito
          </button>
          <Link
            href="/productos"
            className="text-center text-gray-500 text-sm mt-4 hover:text-gray-700"
          >
            ← Volver a productos
          </Link>
        </div>

      </div>
    </div>
  )
}
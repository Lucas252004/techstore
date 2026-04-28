"use client"

import { useState, useMemo, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import ProductCard from "@/components/ProductCard"
import { productos } from "@/lib/products"

const categorias = ["Todos", "Celulares", "Laptops", "Audio", "Wearables"]

export default function Productos() {
  const [busqueda, setBusqueda] = useState("")
  const [categoriaActiva, setCategoriaActiva] = useState("Todos")
  const searchParams = useSearchParams()

  useEffect(() => {
    const q = searchParams.get("q")
    if (q) setBusqueda(q)
  }, [searchParams])

  const productosFiltrados = useMemo(() => {
    return productos.filter((p) => {
      const coincideCategoria =
        categoriaActiva === "Todos" ||
        p.categoria.toLowerCase() === categoriaActiva.toLowerCase()

      const coincideBusqueda =
        p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        p.descripcion.toLowerCase().includes(busqueda.toLowerCase())

      return coincideCategoria && coincideBusqueda
    })
  }, [busqueda, categoriaActiva])

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-1">Productos</h1>
        <p className="text-gray-500">
          {productosFiltrados.length}{" "}
          {productosFiltrados.length === 1 ? "resultado" : "resultados"}
          {busqueda && ` para "${busqueda}"`}
          {categoriaActiva !== "Todos" && ` en ${categoriaActiva}`}
        </p>
      </div>

      <div className="relative mb-6">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4"
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
        </svg>
        <input
          type="text"
          placeholder="Buscar productos..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="w-full pl-11 pr-4 py-3 border border-gray-00 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
        />
        {busqueda && (
          <button
            onClick={() => setBusqueda("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        )}
      </div>

      <div className="flex gap-2 flex-wrap mb-8">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoriaActiva(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              categoriaActiva === cat
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-600 border border-gray-200 hover:border-blue-300 hover:text-blue-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {productosFiltrados.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productosFiltrados.map((producto) => (
            <ProductCard key={producto.id} {...producto} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24">
          <p className="text-5xl mb-4">🔍</p>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            No encontramos resultados
          </h2>
          <p className="text-gray-500 mb-6">
            Intentá con otro término o cambiá la categoría
          </p>
          <button
            onClick={() => { setBusqueda(""); setCategoriaActiva("Todos") }}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
          >
            Ver todos los productos
          </button>
        </div>
      )}

    </div>
  )
}
"use client"

import { useCart } from "@/context/CartContext"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Link from "next/link"

export default function Checkout() {
  const { carrito, totalItems, totalPrecio } = useCart()
  const router = useRouter()

  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    notas: "",
  })

  const [errores, setErrores] = useState<Record<string, string>>({})

  if (carrito.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <p className="text-5xl mb-4">🛒</p>
        <h1 className="text-2xl font-bold text-slate-100 mb-2">Tu carrito está vacío</h1>
        <Link href="/productos" className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-500 transition-colors inline-block mt-4">
          Ver productos
        </Link>
      </div>
    )
  }

  const validar = () => {
    const e: Record<string, string> = {}
    if (!form.nombre.trim()) e.nombre = "El nombre es obligatorio"
    if (!form.apellido.trim()) e.apellido = "El apellido es obligatorio"
    if (!form.email.trim() || !form.email.includes("@")) e.email = "Email inválido"
    if (!form.telefono.trim()) e.telefono = "El teléfono es obligatorio"
    return e
  }

  const handleSubmit = () => {
    const e = validar()
    if (Object.keys(e).length > 0) { setErrores(e); return }

    const numeroOrden = `TS-${Date.now().toString().slice(-6)}`
    const orden = {
      numero: numeroOrden,
      fecha: new Date().toLocaleDateString("es-AR", { day: "2-digit", month: "2-digit", year: "numeric" }),
      hora: new Date().toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit" }),
      cliente: form,
      items: carrito,
      total: totalPrecio,
    }

    localStorage.setItem("ultima-orden", JSON.stringify(orden))
    router.push("/orden-confirmada")
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-slate-100 mb-2">Finalizar compra</h1>
      <p className="text-slate-400 mb-10">Completá tus datos y te contactamos para coordinar el pago y retiro.</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Formulario */}
        <div className="bg-[#161820] border border-[#2a2d3a] rounded-2xl p-7 space-y-5">
          <h2 className="text-lg font-semibold text-slate-100">Tus datos</h2>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-400 mb-1">Nombre *</label>
              <input
                type="text"
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                placeholder="Juan"
                className="w-full bg-[#0f1117] border border-[#2a2d3a] text-slate-100 placeholder-slate-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {errores.nombre && <p className="text-red-400 text-xs mt-1">{errores.nombre}</p>}
            </div>
            <div>
              <label className="block text-sm text-slate-400 mb-1">Apellido *</label>
              <input
                type="text"
                value={form.apellido}
                onChange={(e) => setForm({ ...form, apellido: e.target.value })}
                placeholder="Pérez"
                className="w-full bg-[#0f1117] border border-[#2a2d3a] text-slate-100 placeholder-slate-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {errores.apellido && <p className="text-red-400 text-xs mt-1">{errores.apellido}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm text-slate-400 mb-1">Email *</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="juan@email.com"
              className="w-full bg-[#0f1117] border border-[#2a2d3a] text-slate-100 placeholder-slate-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            {errores.email && <p className="text-red-400 text-xs mt-1">{errores.email}</p>}
          </div>

          <div>
            <label className="block text-sm text-slate-400 mb-1">Teléfono *</label>
            <input
              type="tel"
              value={form.telefono}
              onChange={(e) => setForm({ ...form, telefono: e.target.value })}
              placeholder="+54 9 11 0000-0000"
              className="w-full bg-[#0f1117] border border-[#2a2d3a] text-slate-100 placeholder-slate-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            {errores.telefono && <p className="text-red-400 text-xs mt-1">{errores.telefono}</p>}
          </div>

          <div>
            <label className="block text-sm text-slate-400 mb-1">Notas adicionales</label>
            <textarea
              rows={3}
              value={form.notas}
              onChange={(e) => setForm({ ...form, notas: e.target.value })}
              placeholder="Horario de contacto preferido, preguntas, etc."
              className="w-full bg-[#0f1117] border border-[#2a2d3a] text-slate-100 placeholder-slate-600 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
            />
          </div>

          <div className="bg-blue-950/40 border border-blue-800/50 rounded-xl p-4 text-sm text-blue-300">
            📞 Una vez confirmada la orden, nos contactaremos con vos para coordinar el medio de pago y el retiro del producto.
          </div>
        </div>

        {/* Resumen del pedido */}
        <div className="flex flex-col gap-5">
          <div className="bg-[#161820] border border-[#2a2d3a] rounded-2xl p-6">
            <h2 className="text-lg font-semibold text-slate-100 mb-5">
              Resumen ({totalItems} {totalItems === 1 ? "producto" : "productos"})
            </h2>
            <div className="space-y-4">
              {carrito.map((item) => (
                <div key={item.id} className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#1e2030] rounded-lg flex items-center justify-center flex-shrink-0">
                    <img src={item.imagen} alt={item.nombre} className="h-10 object-contain" />
                  </div>
                  <div className="flex-1">
                    <p className="text-slate-100 text-sm font-medium">{item.nombre}</p>
                    <p className="text-slate-500 text-xs">x{item.cantidad}</p>
                  </div>
                  <p className="text-blue-400 font-semibold text-sm">
                    ${(item.precio * item.cantidad).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
            <div className="border-t border-[#2a2d3a] mt-5 pt-4 flex justify-between items-center">
              <span className="text-slate-400">Total</span>
              <span className="text-2xl font-bold text-blue-400">${totalPrecio.toLocaleString()}</span>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-xl font-semibold text-lg transition-all active:scale-95"
          >
            Confirmar orden →
          </button>

          <Link href="/carrito" className="text-center text-slate-500 text-sm hover:text-slate-300 transition-colors">
            ← Volver al carrito
          </Link>
        </div>

      </div>
    </div>
  )
}
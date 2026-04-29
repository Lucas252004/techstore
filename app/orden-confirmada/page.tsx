"use client"

import { useEffect, useState, useRef } from "react"
import { useCart } from "@/context/CartContext"
import Link from "next/link"

type Orden = {
  numero: string
  fecha: string
  hora: string
  cliente: {
    nombre: string
    apellido: string
    email: string
    telefono: string
    notas: string
  }
  items: { id: number; nombre: string; precio: number; cantidad: number; categoria: string }[]
  total: number
}

export default function OrdenConfirmada() {
  const [orden, setOrden] = useState<Orden | null>(null)
  const { limpiarCarrito } = useCart()
  const limpiado = useRef(false)
  const ticketRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const guardada = localStorage.getItem("ultima-orden")
    if (guardada) setOrden(JSON.parse(guardada))
    if (!limpiado.current) {
      limpiarCarrito()
      limpiado.current = true
    }
  }, [])

  const imprimirTicket = () => window.print()

  if (!orden) {
    return (
      <div className="max-w-xl mx-auto px-4 py-24 text-center">
        <p className="text-slate-400">No se encontró ninguna orden.</p>
        <Link href="/" className="text-blue-400 hover:text-blue-300 mt-4 inline-block">
          Volver al inicio
        </Link>
      </div>
    )
  }

  return (
    <>
      {/* Estilos de impresión */}
      <style>{`
        @media print {
          body * { visibility: hidden; }
          #ticket, #ticket * { visibility: visible; }
          #ticket { position: fixed; top: 0; left: 0; width: 100%; }
          .no-print { display: none !important; }
        }
      `}</style>

      <div className="max-w-2xl mx-auto px-4 py-12">

        {/* Encabezado */}
        <div className="text-center mb-10 no-print">
          <div className="w-16 h-16 bg-emerald-950 border border-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-slate-100 mb-2">¡Orden confirmada!</h1>
          <p className="text-slate-400">
            Te contactaremos pronto al <span className="text-blue-400">{orden.cliente.email}</span> para coordinar el pago y retiro.
          </p>
        </div>

        {/* Ticket */}
        <div
          id="ticket"
          ref={ticketRef}
          className="bg-[#161820] border border-[#2a2d3a] rounded-2xl overflow-hidden"
        >
          {/* Header del ticket */}
          <div className="bg-blue-600 px-7 py-5 flex items-center justify-between">
            <div>
              <p className="text-white font-bold text-xl">TechStore</p>
              <p className="text-blue-200 text-sm">Orden de compra</p>
            </div>
            <div className="text-right">
              <p className="text-white font-mono font-bold text-lg">{orden.numero}</p>
              <p className="text-blue-200 text-xs">{orden.fecha} · {orden.hora}</p>
            </div>
          </div>

          <div className="p-7 space-y-6">

            {/* Datos del cliente */}
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-3">Datos del cliente</p>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-slate-500 text-xs">Nombre completo</p>
                  <p className="text-slate-100 text-sm font-medium">{orden.cliente.nombre} {orden.cliente.apellido}</p>
                </div>
                <div>
                  <p className="text-slate-500 text-xs">Teléfono</p>
                  <p className="text-slate-100 text-sm font-medium">{orden.cliente.telefono}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-slate-500 text-xs">Email</p>
                  <p className="text-slate-100 text-sm font-medium">{orden.cliente.email}</p>
                </div>
                {orden.cliente.notas && (
                  <div className="col-span-2">
                    <p className="text-slate-500 text-xs">Notas</p>
                    <p className="text-slate-300 text-sm">{orden.cliente.notas}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="border-t border-[#2a2d3a]" />

            {/* Productos */}
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-widest mb-3">Productos</p>
              <div className="space-y-3">
                {orden.items.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div>
                      <p className="text-slate-100 text-sm font-medium">{item.nombre}</p>
                      <p className="text-slate-500 text-xs">x{item.cantidad} · {item.categoria}</p>
                    </div>
                    <p className="text-blue-400 font-semibold text-sm">
                      ${(item.precio * item.cantidad).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-[#2a2d3a]" />

            {/* Total */}
            <div className="flex justify-between items-center">
              <span className="text-slate-400 font-medium">Total a pagar</span>
              <span className="text-2xl font-bold text-blue-400">${orden.total.toLocaleString()}</span>
            </div>

            {/* Aviso */}
            <div className="bg-[#0f1117] border border-[#2a2d3a] rounded-xl p-4 text-xs text-slate-400 leading-relaxed">
              📋 <span className="text-slate-300 font-medium">Próximos pasos:</span> Guardá este comprobante con el número de orden <span className="text-blue-400 font-mono">{orden.numero}</span>. Nos pondremos en contacto para coordinar el medio de pago (efectivo, transferencia) y el retiro o envío del producto.
            </div>

          </div>
        </div>

        {/* Acciones */}
        <div className="flex gap-3 mt-6 no-print">
          <button
            onClick={imprimirTicket}
            className="flex-1 bg-[#161820] border border-[#2a2d3a] hover:border-blue-700 text-slate-300 hover:text-blue-400 py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Imprimir / Guardar PDF
          </button>
          <Link
            href="/"
            className="flex-1 bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-xl font-medium transition-all text-center"
          >
            Volver al inicio
          </Link>
        </div>

      </div>
    </>
  )
}
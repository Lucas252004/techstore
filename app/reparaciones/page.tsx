import Link from "next/link"

const servicios = [
  {
    icono: "🔧",
    titulo: "Pantallas rotas",
    descripcion: "Reemplazamos la pantalla de tu celular con repuestos originales. Servicio express en 24 horas con garantía de 90 días.",
    precio: "Desde $15.000",
    tiempo: "24 horas",
  },
  {
    icono: "🔋",
    titulo: "Cambio de batería",
    descripcion: "Recuperá la autonomía de tu dispositivo. Usamos baterías certificadas compatibles con todos los modelos.",
    precio: "Desde $8.000",
    tiempo: "2 horas",
  },
  {
    icono: "💧",
    titulo: "Daño por agua",
    descripcion: "Diagnóstico gratuito para dispositivos mojados. Limpieza ultrasónica y reemplazo de componentes dañados.",
    precio: "Diagnóstico gratis",
    tiempo: "48 horas",
  },
  {
    icono: "📷",
    titulo: "Cámara",
    descripcion: "Reparamos lentes rotos, sensores dañados y problemas de enfoque en todas las marcas.",
    precio: "Desde $12.000",
    tiempo: "24 horas",
  },
  {
    icono: "🔌",
    titulo: "Puerto de carga",
    descripcion: "¿Tu celular no carga? Reemplazamos el conector de carga con garantía incluida.",
    precio: "Desde $6.000",
    tiempo: "3 horas",
  },
  {
    icono: "🔊",
    titulo: "Audio y micrófono",
    descripcion: "Reparación de altavoces, auriculares y micrófonos. No escuchás o no te escuchan: lo solucionamos.",
    precio: "Desde $7.000",
    tiempo: "24 horas",
  },
]

const pasos = [
  { numero: "01", titulo: "Traé tu equipo", descripcion: "Acercate al local con tu dispositivo" },
  { numero: "02", titulo: "Diagnóstico", descripcion: "Evaluamos el problema sin costo" },
  { numero: "03", titulo: "Presupuesto", descripcion: "Te damos un precio antes de empezar" },
  { numero: "04", titulo: "Retirá", descripcion: "Listo en el tiempo acordado con garantía" },
]

export default function Reparaciones() {
  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="relative bg-[#0f1117] text-white py-20 px-4 text-center border-b border-[#2a2d3a] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(37,99,235,0.12),transparent_70%)]" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="inline-block bg-blue-950 text-blue-400 text-sm px-4 py-1 rounded-full mb-5 border border-blue-800">
            Servicio técnico oficial
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Reparaciones profesionales
          </h1>
          <p className="text-slate-400 text-lg mb-8">
            Todos los trabajos con garantía escrita. Diagnóstico siempre gratuito.
          </p>
          <Link
            href="/contacto"
            className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-medium transition-colors"
          >
            Consultar turno
          </Link>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-slate-100 mb-10 text-center">¿Cómo funciona?</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {pasos.map((paso) => (
            <div key={paso.numero} className="text-center">
              <div className="text-4xl font-bold text-blue-800 mb-3">{paso.numero}</div>
              <h3 className="font-semibold text-slate-100 mb-1">{paso.titulo}</h3>
              <p className="text-slate-400 text-sm">{paso.descripcion}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Servicios */}
      <section className="bg-[#0d0f18] border-t border-[#2a2d3a] py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-100 mb-10">Nuestros servicios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {servicios.map((s) => (
              <div
                key={s.titulo}
                className="bg-[#161820] border border-[#2a2d3a] rounded-2xl p-6 hover:border-blue-800 transition-all"
              >
                <span className="text-3xl mb-4 block">{s.icono}</span>
                <h3 className="font-semibold text-slate-100 text-lg mb-2">{s.titulo}</h3>
                <p className="text-slate-400 text-sm mb-5 leading-relaxed">{s.descripcion}</p>
                <div className="flex items-center justify-between pt-4 border-t border-[#2a2d3a]">
                  <span className="text-blue-400 font-semibold text-sm">{s.precio}</span>
                  <span className="text-slate-500 text-xs bg-[#1e2030] px-3 py-1 rounded-full">
                    {s.tiempo}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="max-w-2xl mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold text-slate-100 mb-4">¿Tenés otro problema?</h2>
        <p className="text-slate-400 mb-8">
          Contactanos y te ayudamos a encontrar la solución.
        </p>
        <Link
          href="/contacto"
          className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-medium transition-colors"
        >
          Contactar ahora
        </Link>
      </section>

    </div>
  )
}
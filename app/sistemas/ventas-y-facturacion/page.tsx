import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ServiceLanding from "@/components/sections/landing/ServiceLanding";

export const metadata: Metadata = pageMeta({
  path: "/sistemas/ventas-y-facturacion",
  title: "Sistema de Ventas y Facturación Electrónica en Perú",
  description:
    "Desarrollo de sistemas de ventas y facturación para empresas en Perú, con integración a facturación electrónica. Registra ventas, emite comprobantes y controla tu caja.",
});

export default function SistemaVentasFacturacionPage() {
  return (
    <ServiceLanding
      slug="/sistemas/ventas-y-facturacion"
      breadcrumb={[
        { name: "Inicio", path: "/" },
        { name: "Software a Medida", path: "/desarrollo-de-software-a-medida" },
        { name: "Ventas y Facturación", path: "/sistemas/ventas-y-facturacion" },
      ]}
      eyebrow="Sistema · Ventas y Facturación"
      h1="Sistema de ventas y facturación electrónica"
      intro="Desarrollamos sistemas de ventas con integración a facturación electrónica para empresas en Perú: registra cada venta, emite boletas y facturas, y controla tu caja en un solo lugar. Menos errores, menos trabajo manual y tus comprobantes en orden."
      highlights={["Facturación electrónica", "Boletas y facturas", "Control de caja", "Reportes de ventas", "Multi-usuario"]}
      stats={[
        { value: "Electrónica", label: "Comprobantes válidos SUNAT" },
        { value: "Caja", label: "Control de ingresos diario" },
        { value: "Ventas", label: "Reportes en tiempo real" },
        { value: "A medida", label: "Para tu giro de negocio" },
      ]}
      sections={[
        {
          h2: "Vende y factura en un solo flujo",
          body:
            "Registrar la venta en un lado y facturar en otro es perder tiempo y cometer errores. Unificamos el proceso: registras la venta y emites el comprobante electrónico en el mismo paso, con tu inventario descontándose automáticamente.",
          bullets: [
            "Registro de ventas con búsqueda rápida de productos.",
            "Emisión de boletas y facturas electrónicas.",
            "Integración con tu proveedor de facturación electrónica.",
            "Control de caja: ingresos, egresos y cierre diario.",
            "Reportes de ventas por día, producto, vendedor o sede.",
          ],
        },
        {
          h2: "Conectado con inventario y clientes",
          body:
            "Cada venta descuenta stock y queda asociada al cliente. Así tienes el panorama completo: qué se vende, cuánto queda y quién compra, sin cuadrar hojas a fin de mes.",
        },
        {
          h2: "Control y permisos por rol",
          bullets: [
            "Usuarios con permisos (cajero, vendedor, administrador).",
            "Trazabilidad de cada operación para auditar con confianza.",
            "Acceso web desde caja, oficina o de manera remota.",
          ],
        },
      ]}
      related={[
        { label: "Software a medida", href: "/desarrollo-de-software-a-medida", desc: "Vuelve al pilar y mira todos los sistemas que desarrollamos." },
        { label: "Sistema de inventario", href: "/sistemas/inventario", desc: "Controla tu stock conectado a las ventas." },
      ]}
      faqs={[
        {
          q: "¿Emite comprobantes válidos para SUNAT?",
          a: "Sí. Integramos el sistema con un proveedor de facturación electrónica para emitir boletas y facturas válidas, según la normativa vigente.",
        },
        {
          q: "¿Se integra con mi inventario?",
          a: "Sí. Cada venta descuenta el stock automáticamente, para que inventario y ventas estén siempre cuadrados.",
        },
        {
          q: "¿Sirve para varias sedes o cajas?",
          a: "Sí. Maneja varias cajas y sedes con usuarios y permisos, y te consolida los reportes.",
        },
      ]}
      serviceName="Sistema de ventas y facturación"
      serviceDescription="Desarrollo de sistemas de ventas y facturación electrónica a medida para empresas en Perú, con control de caja, reportes e integración con inventario."
    />
  );
}

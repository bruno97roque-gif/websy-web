import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ServiceLanding from "@/components/sections/landing/ServiceLanding";

export const metadata: Metadata = pageMeta({
  path: "/sistemas/sistema-hotelero",
  title: "Sistema Hotelero a Medida en Perú",
  description:
    "Sistema hotelero a medida en Perú: reservas, estado de habitaciones, check-in, caja, consumos y facturación electrónica en una sola plataforma, sin licencias por usuario.",
});

export default function SistemaHoteleroPage() {
  return (
    <ServiceLanding
      slug="/sistemas/sistema-hotelero"
      breadcrumb={[
        { name: "Inicio", path: "/" },
        { name: "Software a Medida", path: "/desarrollo-de-software-a-medida" },
        { name: "Sistemas Web", path: "/sistemas" },
        { name: "Sistema Hotelero", path: "/sistemas/sistema-hotelero" },
      ]}
      eyebrow="Sistema · Hoteles"
      h1="Sistema hotelero a medida para hoteles y hospedajes en Perú"
      intro="Un sistema hotelero a medida reúne en una sola plataforma las reservas, el estado de cada habitación, el check-in y check-out, la caja y la facturación electrónica de tu hotel u hospedaje. Websy lo desarrolla con tus tarifas, tus temporadas y tu forma de trabajar, y el sistema queda a nombre de tu empresa, sin pago mensual por usuario."
      highlights={["Reservas", "Habitaciones", "Check-in / check-out", "Caja y consumos", "Facturación SUNAT"]}
      stats={[
        { value: "Una pantalla", label: "Ocupación de todo el hotel" },
        { value: "Tus tarifas", label: "Por temporada y tipo de habitación" },
        { value: "Sin licencias", label: "No pagas por usuario" },
        { value: "Tuyo", label: "Código y datos a tu nombre" },
      ]}
      sections={[
        {
          h2: "Qué es un sistema hotelero",
          body:
            "Un sistema hotelero (también llamado PMS, por Property Management System) es el software con el que un hotel gestiona su operación diaria: quién llega, a qué habitación, cuánto paga y qué consumió. Reemplaza el cuaderno de reservas, la pizarra de habitaciones y la hoja de cálculo de caja por un sistema web al que recepción, limpieza y gerencia entran desde el navegador, cada uno con su usuario.",
        },
        {
          h2: "Qué incluye un sistema hotelero a medida",
          body:
            "Estos son los módulos que suele llevar un sistema hotelero. No hace falta tenerlos todos el primer día: se arranca por los que más trabajo manual te quitan y se suman los demás por etapas.",
          bullets: [
            "Calendario de reservas con la ocupación de todas las habitaciones a la vista.",
            "Estado de cada habitación: libre, ocupada, por limpiar o en mantenimiento.",
            "Check-in y check-out con los datos del huésped y su documento.",
            "Tarifas por tipo de habitación, temporada y canal de venta.",
            "Caja por turno y consumos cargados a la habitación (restaurante, lavandería, minibar).",
            "Boletas y facturas electrónicas emitidas desde el mismo sistema.",
            "Reportes de ocupación, ingresos por día y huéspedes frecuentes.",
          ],
        },
        {
          h2: "Sistema hotelero a medida o del mercado",
          body:
            "Los sistemas hoteleros del mercado funcionan bien para un hotel estándar y se activan rápido. Conviene uno a medida cuando tu operación no encaja en la plantilla: varias sedes, tarifas especiales para empresas, un restaurante con su propia caja o procesos que hoy resuelves con Excel porque el programa no los contempla.",
          table: {
            cabeceras: ["", "Sistema del mercado", "Sistema hotelero a medida"],
            filas: [
              ["Procesos", "Los que trae, con ajustes limitados", "Los de tu hotel, con tus nombres y reglas"],
              ["Costo en el tiempo", "Suscripción mensual, a veces por habitación o usuario", "Desarrollo inicial y luego solo servidor y soporte"],
              ["Integraciones", "Las que ofrece el proveedor", "Tu web de reservas, tu facturación y lo que ya uses"],
              ["Tus datos", "En la plataforma del proveedor", "En tu servidor, a nombre de tu empresa"],
            ],
          },
        },
        {
          h2: "Se conecta con tu web y tus reservas directas",
          body:
            "Si tu hotel ya tiene página web, el sistema puede recibir las reservas que entran por ella y descontar la disponibilidad al instante, para que no vendas dos veces la misma habitación. Si aún no la tienes, la armamos con [diseño web para hoteles y hospedajes](/diseno-de-paginas-web/hoteles); y para entender cómo sumar reservas sin pagar comisión a intermediarios, lee [página web para hoteles y hospedajes en Perú](/blog/pagina-web-para-hoteles-y-hospedajes-en-peru). La conexión con agencias en línea depende de la API que ofrezca cada canal y se evalúa en el relevamiento.",
        },
        {
          h2: "Cuánto cuesta un sistema hotelero a medida",
          body:
            "En Websy, un sistema hotelero a medida entra en el rango de un ERP: parte desde S/ 20,000 a S/ 25,000 con reservas, habitaciones, caja y reportes. El monto final depende de cuántos módulos entren en la primera etapa, cuántas sedes y usuarios lo usen y con qué sistemas tenga que conectarse. Los montos indicados son referenciales; la cifra exacta va por escrito en la propuesta.",
          table: {
            cabeceras: ["Proyecto", "Desde (referencial)", "Qué incluye la primera etapa"],
            filas: [
              ["Sistema hotelero a medida", "S/ 20,000 a S/ 25,000", "Reservas, estado de habitaciones, caja y reportes"],
              ["Página web del hotel", "Según alcance", "Habitaciones, galería, reservas directas y pagos"],
            ],
            nota: "Los precios son referenciales y varían según el alcance del proyecto. Montos en soles informados por Websy en octubre de 2026.",
          },
        },
        {
          h2: "Cómo lo desarrollamos",
          bullets: [
            "Relevamos la operación con recepción, limpieza y gerencia, no solo con quien aprueba.",
            "Definimos por escrito los módulos de la primera etapa, los tiempos y el costo.",
            "Entregamos por módulos que tu equipo prueba con reservas reales.",
            "Migramos tus habitaciones, tarifas y huéspedes para que el sistema no arranque vacío.",
            "Capacitamos al equipo y damos soporte después de la puesta en marcha.",
          ],
        },
      ]}
      related={[
        { label: "Sistema de gestión ERP", href: "/sistemas/gestion-erp-crm", desc: "Ventas, compras, stock, caja y reportes en una plataforma." },
        { label: "Sistema de ventas y facturación", href: "/sistemas/ventas-y-facturacion", desc: "Comprobantes electrónicos y control de caja." },
        { label: "Diseño web para hoteles", href: "/diseno-de-paginas-web/hoteles", desc: "La web de tu hotel con reservas directas." },
        { label: "Software a medida", href: "/desarrollo-de-software-a-medida", desc: "Apps, ERP, SaaS y sistemas web hechos para tu operación." },
      ]}
      articles={[
        { label: "Cuánto cuesta un ERP a medida en Perú", href: "/blog/cuanto-cuesta-un-erp-a-medida-en-peru", desc: "Desde cuánto parte y qué mueve el precio." },
        { label: "Sistema de reservas y citas a medida", href: "/blog/sistema-de-reservas-y-citas-a-medida", desc: "Cuándo la agenda pide un sistema propio." },
        { label: "Página web para hoteles y hospedajes", href: "/blog/pagina-web-para-hoteles-y-hospedajes-en-peru", desc: "Reservas directas sin comisión de intermediarios." },
      ]}
      faqs={[
        {
          q: "¿Qué es un sistema hotelero?",
          a: "Es el software con el que un hotel u hospedaje gestiona reservas, habitaciones, check-in y check-out, caja, consumos y facturación. También se le llama PMS (Property Management System).",
        },
        {
          q: "¿Cuánto cuesta un sistema hotelero a medida en Perú?",
          a: "En Websy parte desde S/ 20,000 a S/ 25,000 con reservas, estado de habitaciones, caja y reportes. Los montos indicados son referenciales y varían según los módulos, sedes e integraciones.",
        },
        {
          q: "¿El sistema emite boletas y facturas electrónicas?",
          a: "Sí. Se integra con la facturación electrónica para emitir el comprobante del huésped al hacer el check-out, con los consumos cargados a la habitación.",
        },
        {
          q: "¿Sirve para un hostal o un hospedaje pequeño?",
          a: "Sí. Se puede arrancar solo con reservas y estado de habitaciones, y sumar caja, consumos o reportes cuando el negocio lo pida.",
        },
        {
          q: "¿Pago una mensualidad por usar el sistema?",
          a: "No hay licencia por usuario ni por habitación. Solo cubres el servidor donde funciona y, si lo deseas, un plan de soporte y mejoras.",
        },
      ]}
      serviceName="Desarrollo de sistema hotelero a medida"
      serviceDescription="Desarrollo de sistemas hoteleros a medida en Perú: reservas, estado de habitaciones, check-in y check-out, caja, consumos y facturación electrónica, sin licencias por usuario."
    />
  );
}

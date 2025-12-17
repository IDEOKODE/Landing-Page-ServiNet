"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Menu,
  X,
  Gamepad2,
  Zap,
  Smartphone,
  Trophy,
  Wallet,
  FileCheck,
  Tv,
  Car,
  Shield,
  Handshake,
  Camera,
  ThumbsUp,
  Send,
} from "lucide-react"
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp, FaEnvelope } from "react-icons/fa"

export default function ServiNetLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" })

  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Hola, soy ${formData.name}. ${formData.message}. Mi teléfono es: ${formData.phone}`
    const whatsappUrl = `https://wa.me/573147350170?text=${encodeURIComponent(message)}`
    if (typeof window !== "undefined") window.open(whatsappUrl, "_blank")
    setFormData({ name: "", phone: "", message: "" })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar: WhatsApp + redes sociales (antes del header) */}
      <div className="bg-[#0f3b66] text-white">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between text-sm">
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/573147350170"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline"
            >
              <FaWhatsapp className="w-5 h-5" />
              <span>+57 314 7350170</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/share/1XmmK4L6qC/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100">
              <FaFacebookF className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/servi.pagos?igsh=NGRvZzJyZG56dGc3" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className="opacity-90 hover:opacity-100">
              <FaYoutube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-16 md:h-20 flex items-center justify-center">
                <img src="/logo.png" alt="ServiNET logo" className="h-14 md:h-16 lg:h-24 object-contain" />
              </div>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#inicio"
                className="text-sm font-medium text-foreground hover:text-brand-orange transition-colors relative after:content-[''] after:block after:h-1 after:w-6 after:bg-brand-orange after:rounded-full after:mx-auto after:mt-1"
              >
                Inicio
              </a>
              <a
                href="#sobre-nosotros"
                className="text-sm font-medium text-foreground hover:text-brand-orange transition-colors relative after:content-[''] after:block after:h-1 after:w-6 after:bg-brand-orange after:rounded-full after:mx-auto after:mt-1"
              >
                Sobre nosotros
              </a>
              <a
                href="#servicios"
                className="text-sm font-medium text-foreground hover:text-brand-orange transition-colors relative after:content-[''] after:block after:h-1 after:w-6 after:bg-brand-orange after:rounded-full after:mx-auto after:mt-1"
              >
                Servicios
              </a>
              <a
                href="#soporte"
                className="text-sm font-medium text-foreground hover:text-brand-orange transition-colors relative after:content-[''] after:block after:h-1 after:w-6 after:bg-brand-orange after:rounded-full after:mx-auto after:mt-1"
              >
                Soporte
              </a>
              <Button
                onClick={scrollToContact}
                className="bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold"
              >
                CONTÁCTENOS
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="md:hidden pt-4 pb-2 flex flex-col gap-4 border-t border-border mt-4">
              <a
                href="#inicio"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-foreground hover:text-brand-orange transition-colors"
              >
                Inicio
              </a>
              <a
                href="#sobre-nosotros"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-foreground hover:text-brand-orange transition-colors"
              >
                Sobre nosotros
              </a>
              <a
                href="#servicios"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-foreground hover:text-brand-orange transition-colors"
              >
                Servicios
              </a>
              <a
                href="#soporte"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-foreground hover:text-brand-orange transition-colors"
              >
                Soporte
              </a>
              <Button
                onClick={() => {
                  scrollToContact()
                  setMobileMenuOpen(false)
                }}
                className="bg-brand-blue hover:bg-brand-blue/90 text-white font-semibold"
              >
                CONTÁCTENOS
              </Button>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="inicio"
        className="relative py-20 md:py-32 bg-brand-blue overflow-hidden hero-section"
        style={
          {
            // backgroundImage: 'url("/hero-background.jpg")', // Uncomment and add image path to use background image
            // backgroundSize: 'cover',
            // backgroundPosition: 'center',
          }
        }
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content Column */}
            <div className="text-white space-y-6 animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                Somos el aliado de tu negocio.
              </h2>
              <p className="text-lg md:text-xl leading-relaxed opacity-90">
                Facilitamos productos y servicios en línea ayudando a incrementar tus ganancias, se el referente de tu
                barrio y/o comunidad.
              </p>
              <div className="pt-4">
                <Button
                  onClick={scrollToContact}
                  size="lg"
                  className="text-white font-bold px-10 py-6 text-base border-2 border-white hover:opacity-95"
                  style={{ backgroundColor: "#FF8500" }}
                >
                  QUIERO REGISTRARME
                </Button>
              </div>
            </div>

            {/* Carousel sencillo: cambia cada 5s y la imagen se adapta al tamaño */}
            <div className="relative md:col-span-1">
              <div className="relative aspect-video md:aspect-video bg-white/10 rounded-lg overflow-hidden border-2 border-white/20 animate-slide-in-right">
              <style>{`
                /* Duración total = 3 slides * 5s = 15s */
                @keyframes servinet-slideshow {
                0%   { opacity: 0; }
                6.666% { opacity: 1; }
                33.333% { opacity: 1; }
                39.999% { opacity: 0; }
                100% { opacity: 0; }
                }
                .servinet-slide {
                position: absolute;
                inset: 0;
                width: 100%;
                height: 100%;
                object-fit: contain;    /* Mantiene la imagen completa dentro del contenedor */
                object-position: center;
                opacity: 0;
                animation-name: servinet-slideshow;
                animation-duration: 15s;
                animation-timing-function: ease-in-out;
                animation-iteration-count: infinite;
                }
              `}</style>

              {/* Ajusta los nombres de archivo si tus imágenes tienen otra extensión/nombre */}
              <img src="/img1.jpg" alt="Slide 1" className="servinet-slide" style={{ animationDelay: "0s" }} />
              <img src="/img2.jpg" alt="Slide 2" className="servinet-slide" style={{ animationDelay: "5s" }} />
              <img src="/img3.jpg" alt="Slide 3" className="servinet-slide" style={{ animationDelay: "10s" }} />
              </div>
            </div>
            </div>
          </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-16 md:h-24"
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path d="M0 0C240 40 480 80 720 80C960 80 1200 40 1440 0V120H0V0Z" fill="white" className="text-white" />
          </svg>
        </div>
      </section>

      {/* Collection Network Section */}
      <section id="sobre-nosotros" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue mb-6 leading-tight">
                Conoce nuestra red de recaudo.
              </h2>
              <div className="w-20 h-1 bg-brand-orange mb-6" />
              <p className="text-xl md:text-2xl text-foreground font-medium">
                A nivel nacional es la más grande de todas.
              </p>
            </div>

            {/* Right Column - Company Logos Grid */}
            <div className="grid grid-cols-4 gap-3">
              {/* Rutas de las imágenes: /logos/logo1.png ... /logos/logo16.png */}
              {Array.from({ length: 16 }).map((_, index) => {
                const filename = `Logo${index + 1}.png` // archivos en /public/logos tienen mayúscula inicial
                return (
                  <div
                    key={filename}
                    className="bg-white border border-border rounded-lg p-2 flex items-center justify-center aspect-square hover:shadow-md transition-all hover:scale-105 animate-fade-in-up relative overflow-hidden"
                    style={{ animationDelay: `${index * 0.05}s`, transform: 'scale(0.95)', transformOrigin: 'center' }}
                  >
                    <img
                      src={`/logos/${filename}`}
                      alt={`Logo ${index + 1}`}
                      className="max-w-full max-h-full object-contain"
                      loading="lazy"
                      draggable={false}
                      onError={(e) => {
                        const img = e.currentTarget as HTMLImageElement
                        img.style.display = "none"
                        const placeholder = img.nextElementSibling as HTMLElement | null
                        if (placeholder) placeholder.style.display = "flex"
                      }}
                    />
                    {/* Placeholder visible si la imagen no carga */}
                    <div
                      className="logo-placeholder hidden w-full h-full items-center justify-center text-sm text-foreground"
                      style={{ display: "none" }}
                      aria-hidden
                    >
                      Logo {index + 1}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-12 md:py-16 bg-neutral-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 animate-fade-in-up">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-blue mb-3">¡Nuestros servicios!</h2>
        <div className="w-20 h-1 bg-brand-orange mx-auto" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
        {/* Pines de entretenimiento */}
        <div
          className="flex flex-col items-center text-center group animate-pop-diagonal"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="w-16 h-16 md:w-20 md:h-20 bg-white border-2 border-brand-blue rounded-full flex items-center justify-center mb-3 group-hover:bg-brand-blue transition-all duration-300 group-hover:scale-105">
            <Gamepad2 className="w-8 h-8 md:w-10 md:h-10 text-brand-blue group-hover:text-white transition-colors" />
          </div>
          <p className="text-xs md:text-sm font-semibold text-brand-blue">Pines de entretenimiento</p>
        </div>

        {/* Recaudo servicios publicos */}
        <div
          className="flex flex-col items-center text-center group animate-pop-diagonal"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="w-16 h-16 md:w-20 md:h-20 bg-white border-2 border-brand-blue rounded-full flex items-center justify-center mb-3 group-hover:bg-brand-blue transition-all duration-300 group-hover:scale-105">
            <Zap className="w-8 h-8 md:w-10 md:h-10 text-brand-blue group-hover:text-white transition-colors" />
          </div>
          <p className="text-xs md:text-sm font-semibold text-brand-blue">Recaudo servicios públicos</p>
        </div>

        {/* Recargas operadores */}
        <div
          className="flex flex-col items-center text-center group animate-pop-diagonal"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="w-16 h-16 md:w-20 md:h-20 bg-white border-2 border-brand-blue rounded-full flex items-center justify-center mb-3 group-hover:bg-brand-blue transition-all duration-300 group-hover:scale-105">
            <Smartphone className="w-8 h-8 md:w-10 md:h-10 text-brand-blue group-hover:text-white transition-colors" />
          </div>
          <p className="text-xs md:text-sm font-semibold text-brand-blue">Recargas operadores</p>
        </div>

        {/* Apuestas deportivas */}
        <div
          className="flex flex-col items-center text-center group animate-pop-diagonal"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="w-16 h-16 md:w-20 md:h-20 bg-white border-2 border-brand-blue rounded-full flex items-center justify-center mb-3 group-hover:bg-brand-blue transition-all duration-300 group-hover:scale-105">
            <Trophy className="w-8 h-8 md:w-10 md:h-10 text-brand-blue group-hover:text-white transition-colors" />
          </div>
          <p className="text-xs md:text-sm font-semibold text-brand-blue">Apuestas deportivas</p>
        </div>

        {/* Depósitos y retiros */}
        <div
          className="flex flex-col items-center text-center group animate-pop-diagonal"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="w-16 h-16 md:w-20 md:h-20 bg-white border-2 border-brand-blue rounded-full flex items-center justify-center mb-3 group-hover:bg-brand-blue transition-all duration-300 group-hover:scale-105">
            <Wallet className="w-8 h-8 md:w-10 md:h-10 text-brand-blue group-hover:text-white transition-colors" />
          </div>
          <p className="text-xs md:text-sm font-semibold text-brand-blue">Depósitos y retiros</p>
        </div>

        {/* Certificado de tradición */}
        <div
          className="flex flex-col items-center text-center group animate-pop-diagonal"
          style={{ animationDelay: "0.6s" }}
        >
          <div className="w-16 h-16 md:w-20 md:h-20 bg-white border-2 border-brand-blue rounded-full flex items-center justify-center mb-3 group-hover:bg-brand-blue transition-all duration-300 group-hover:scale-105">
            <FileCheck className="w-8 h-8 md:w-10 md:h-10 text-brand-blue group-hover:text-white transition-colors" />
          </div>
          <p className="text-xs md:text-sm font-semibold text-brand-blue">Certificado de tradición</p>
        </div>

        {/* Directv prepago */}
        <div
          className="flex flex-col items-center text-center group animate-pop-diagonal"
          style={{ animationDelay: "0.7s" }}
        >
          <div className="w-16 h-16 md:w-20 md:h-20 bg-white border-2 border-brand-blue rounded-full flex items-center justify-center mb-3 group-hover:bg-brand-blue transition-all duration-300 group-hover:scale-105">
            <Tv className="w-8 h-8 md:w-10 md:h-10 text-brand-blue group-hover:text-white transition-colors" />
          </div>
          <p className="text-xs md:text-sm font-semibold text-brand-blue">Directv prepago</p>
        </div>

        {/* Histórico vehicular */}
        <div
          className="flex flex-col items-center text-center group animate-pop-diagonal"
          style={{ animationDelay: "0.8s" }}
        >
          <div className="w-16 h-16 md:w-20 md:h-20 bg-white border-2 border-brand-blue rounded-full flex items-center justify-center mb-3 group-hover:bg-brand-blue transition-all duration-300 group-hover:scale-105">
            <Car className="w-8 h-8 md:w-10 md:h-10 text-brand-blue group-hover:text-white transition-colors" />
          </div>
          <p className="text-xs md:text-sm font-semibold text-brand-blue">Histórico vehicular</p>
        </div>

        {/* Soat (cuando hay un número impar, ocuparemos ambas columnas en móvil para centrarlo) */}
        <div
          className="col-span-2 md:col-span-1 flex flex-col items-center text-center group animate-pop-diagonal"
          style={{ animationDelay: "0.9s" }}
        >
          <div className="w-16 h-16 md:w-20 md:h-20 bg-white border-2 border-brand-blue rounded-full flex items-center justify-center mb-3 group-hover:bg-brand-blue transition-all duration-300 group-hover:scale-105">
            <Shield className="w-8 h-8 md:w-10 md:h-10 text-brand-blue group-hover:text-white transition-colors" />
          </div>
          <p className="text-xs md:text-sm font-semibold text-brand-blue">Soat</p>
        </div>
          </div>
        </div>
      </section>

      {/* Value Propositions Section */}
      <section
        id="soporte"
        className="relative py-16 md:py-24 bg-brand-blue text-white overflow-hidden value-section"
        style={
          {
            // backgroundImage: 'url("/value-background.jpg")', // Uncomment and add image path to use background image
            // backgroundSize: 'cover',
            // backgroundPosition: 'center',
          }
        }
      >
        {/* Decorative Wave Top */}
        <div className="absolute top-0 left-0 right-0 transform rotate-180">
          <svg
            className="w-full h-16 md:h-24"
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path d="M0 0C240 40 480 80 720 80C960 80 1200 40 1440 0V120H0V0Z" fill="white" className="text-white" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10 mt-8">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {/* Somos su aliado multiservicio */}
            <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-subtle">
                <Handshake className="w-10 h-10 text-brand-blue" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">Somos su aliado multiservicio</h3>
              <p className="text-base leading-relaxed opacity-90">
                Dale a tus clientes un amplio portafolio de servicios. Se apreciado en Pichaleña.
              </p>
            </div>

            {/* Lleva tu negocio al siguiente nivel */}
            <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-subtle">
                <Camera className="w-10 h-10 text-brand-blue" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">Lleva tu negocio al siguiente nivel</h3>
              <p className="text-base leading-relaxed opacity-90">
                Aumenta las compras de tu negocio ofreciendo un amplio portafolio de servicios a tus clientes.
              </p>
            </div>

            {/* Nuestro fuerte es el servicio */}
            <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-subtle">
                <ThumbsUp className="w-10 h-10 text-brand-blue" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4">Nuestro fuerte es el servicio</h3>
              <p className="text-base leading-relaxed opacity-90">
                Te unimos a nuestros 24 horas para que y tus acompañamiento las ventajas del sistemas buscando.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Wave Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-16 md:h-24"
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path d="M0 0C240 40 480 80 720 80C960 80 1200 40 1440 0V120H0V0Z" fill="white" className="text-white" />
          </svg>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-blue mb-4">Envíanos un mensaje</h2>
              <div className="w-32 h-1 bg-brand-orange mx-auto mb-4" />
              <p className="text-lg text-muted-foreground">Estamos aquí para ayudarte</p>
            </div>

            {/* Mapa responsive (Google Maps embed) */}
            <div className="mb-8 animate-fade-in-up">
              <h3 className="text-xl font-bold text-center text-brand-blue mb-3">Nuestra ubicación</h3>
              <div className="max-w-3xl mx-auto rounded-lg overflow-hidden shadow-md">
                <div className="relative" style={{ paddingTop: "56.25%" }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15930.590492479787!2d-76.4895331!3d3.4356335!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e30a77536a0014b%3A0x83c41d957ca17fdd!2sParque%20Comercial%20R%C3%ADo%20Cauca!5e0!3m2!1ses-419!2sco!4v1765863822469!5m2!1ses-419!2sco"
                    title="Ubicación ServiNET"
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    aria-label="Mapa con la ubicación de ServiNET"
                  />
                </div>
                <div className="p-3 text-sm text-center">
                  <a
                    href="https://www.google.com/maps?q=3.4356335,-76.4895331"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-blue hover:underline"
                  >
                    Abrir en Maps
                  </a>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div>
                <Input
                  type="text"
                  placeholder="Nombre"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full border-2 border-border focus:border-brand-blue"
                />
              </div>

              <div>
                <Input
                  type="tel"
                  placeholder="Número telefónico"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="w-full border-2 border-border focus:border-brand-blue"
                />
              </div>

              <div>
                <Textarea
                  placeholder="Mensaje"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full border-2 border-border focus:border-brand-blue resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white font-bold py-6 text-base flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Enviar mensaje por WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-blue py-12" style={{ color: "#FF8500" }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
                <img src="/logo.png" alt="ServiNET logo" className="h-20 md:h-22 lg:h-26 object-contain" />
              <p className="text-sm opacity-90">Tu aliado en la red de pagos y servicios digitales.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Contacto</h3>
              <p className="text-sm opacity-90">
                WhatsApp: 
                <a
                  href="https://wa.me/573147350170?text=Hola%2C%20estoy%20interesado%20en%20sus%20servicios"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Enviar WhatsApp a +57 314 7350170"
                  className="ml-2 hover:text-brand-orange"
                >
                  +57 314 7350170
                </a>
              </p>
              <p className="text-sm opacity-90">
                Correo: 
                <a
                  href="mailto:servinetplusservicios@gmail.com?subject=Contacto%20desde%20sitio&body=Hola%2C%20estoy%20interesado%20en%20sus%20servicios"
                  aria-label="Enviar correo a servinetplusservicios@gmail.com"
                  className="ml-2 hover:text-brand-orange"
                >
                  servinetplusservicios@gmail.com
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Redes sociales</h3>
              <div className="flex gap-4 items-center">
                <a
                  href="https://www.facebook.com/share/1XmmK4L6qC/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="p-2 bg-white rounded-full hover:scale-105 transition-transform shadow-sm"
                >
                  <FaFacebookF className="w-5 h-5 text-[#1877F2]" />
                </a>

                <a
                  href="https://www.instagram.com/servi.pagos?igsh=NGRvZzJyZG56dGc3"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-2 bg-white rounded-full hover:scale-105 transition-transform shadow-sm"
                >
                  <FaInstagram className="w-5 h-5 text-[#E1306C]" />
                </a>

                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="p-2 bg-white rounded-full hover:scale-105 transition-transform shadow-sm"
                >
                  <FaYoutube className="w-5 h-5 text-[#FF0000]" />
                </a>

                <a
                  href="https://wa.me/573147350170?text=Hola%2C%20estoy%20interesado%20en%20sus%20servicios"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="p-2 bg-white rounded-full hover:scale-105 transition-transform shadow-sm"
                >
                  <FaWhatsapp className="w-5 h-5 text-[#25D366]" />
                </a>

                <a
                  href="mailto:servinetplusservicios@gmail.com?subject=Contacto%20desde%20sitio&body=Hola%2C%20estoy%20interesado%20en%20sus%20servicios"
                  aria-label="Correo"
                  className="p-2 bg-white rounded-full hover:scale-105 transition-transform shadow-sm"
                >
                  <FaEnvelope className="w-5 h-5 text-[#333333]" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-75">
            <p>&copy; 2025 Comuniktec S.A.S. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

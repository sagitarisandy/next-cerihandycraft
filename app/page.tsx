"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Package, Palette, MessageCircle, Download, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import './globals.css'

import EditDesainIcon from "@/public/landing-page/edit-desain.svg"
import CanvaIcon from "@/public/landing-page/canva.svg"
import BotIcon from "@/public/landing-page/fitur-chatbot.svg"
import PrintIcon from "@/public/landing-page/cetak-profesional.svg"

import EditDesainScreen from "@/public/landing-page/edit-desain-screen.webp"
import CanvaScreen from "@/public/landing-page/canva-screen.webp"
import BotScreen from "@/public/landing-page/bot-screen.webp"
import PrintScreen from "@/public/landing-page/cetak-screen.webp"

export default function HomePage() {
  const slides = [
    "/landing-page/testimonial-hero.webp",
    "/landing-page/testimonial-hero-2.webp", 
    "/landing-page/testimonial-hero-3.webp",
    "/landing-page/testimonial-hero-4.webp",
  ];

  const cardColors = ["bg-[#F1F9F1]", "bg-[#EDEFFA]", "bg-[#FFF8F8]", "bg-[#F7F5ED]"];

  const brands = [
    "/brands/amelia.png",
    "/brands/bluff-fragnance.png",
    "/brands/cara-beante.png",
    "/brands/chacha-charmeur.png",
    "/brands/eau-de-parfume.png",
    "/brands/elenia-pangora-parfums.png",
    "/brands/filoskopi.png",
    "/brands/fish-oil.png",
    "/brands/haroem.png",
    "/brands/hayoon.png",
    "/brands/hazeemah.png",
    "/brands/miracle-queen.png",
    "/brands/olyashine.png",
    "/brands/paris-de-heiress.png",
    "/brands/rdm-parfume.png",
    "/brands/sera.png",
    "/brands/tiara-jewelry.png",
  ];

  const features = [
    {
      icon: <Image src={EditDesainIcon} alt="Edit Desain Icon" width={24} height={24} />,
      title: "Edit Desain Sendiri atau Dibantu Oleh Tim Desain Kami",
      // description: "Editor lengkap dengan Fabric.js untuk kustomisasi penuh",
      image: <Image src={EditDesainScreen} alt="Edit Desain Screen" width={720} height={720} className="mx-auto"/> 
    },
    {
      icon: <Image src={CanvaIcon} alt="Edit Desain Icon" width={24} height={24} />,
      title: "Import Desain Dari Canva",
      // description: "Mudah import dan edit desain dari Canva",
      image: <Image src={CanvaScreen} alt="Edit Desain Screen" width={720} height={720} className="mx-auto"/> 
    },
    {
      icon: <Image src={BotIcon} alt="Edit Desain Icon" width={24} height={24} />,
      title: "Fitur Chatbot / AI untuk Bantuan Cepat",
      // description: "Bantuan real-time untuk semua kebutuhan Anda",
      image: <Image src={BotScreen} alt="Edit Desain Screen" width={720} height={720} className="mx-auto"/> 
    },
    {
      icon: <Image src={PrintIcon} alt="Edit Desain Icon" width={24} height={24} />,
      title: "Cetak Sedikit, Tetapi Profesional",
      // description: "Mulai dari jumlah kecil dengan kualitas tinggi",
      image: <Image src={PrintScreen} alt="Edit Desain Screen" width={720} height={720} className="mx-auto"/> 
    },
  ]

  const stats = [
    { number: "50.000+", label: "Kemasan Terkirim" },
    { number: "150+", label: "UMKM Percaya" },
    { number: "15+", label: "Jenis Kemasan" },
  ]

  const steps = [
    {
      number: "1",
      title: "Pilih Template",
      description: "Pilih dari berbagai template kemasan yang tersedia",
    },
    {
      number: "2",
      title: "Desain / Request Desain",
      description: "Edit sendiri atau minta bantuan tim desainer kami",
    },
    {
      number: "3",
      title: "Cetak & Kirim",
      description: "Kami cetak dan kirim langsung ke alamat Anda",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Promo Banner */}
      <div className="bg-gray-50 px-4 py-2 text-center text-sm">
        <span className="text-slate-950">
          🎉 Promo Spesial UMKM: Cetak kemasan dengan harga hemat, tanpa minimal order besar! ➜
        </span>
      </div>

      {/* Header */}
      <header className="bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <Package className="w-4 h-4 text-white" />
            </div>
            <span className="font-bold text-lg">Ceri Handycraft</span> */}

            <Image
              src="/ceri-handycraft-logo.svg"
              alt="Ceri Handycraft Logo"
              width={2}
              height={2}
              className="w-auto h-12"
            />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/templates" className="text-gray-600 hover:text-gray-900">
              Jenis Kemasan
            </Link>
            <Link href="/how-to-order" className="text-gray-600 hover:text-gray-900">
              Cara Pesan
            </Link>
            <Link href="/testimonials" className="text-gray-600 hover:text-gray-900">
              Testimoni
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Kontak Kami
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link href="/consultation">
              <Button variant="default">Konsultasi Gratis</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-6">
              Kemasan Berkualitas,
              <div className="mb-4"></div>
              Mulai dari Jumlah Kecil
            </h1>
            <p className="text- text-gray-600 mb-8">
              Solusi cetak kemasan untuk UMKM yang ingin tampil profesional tanpa harus cetak ribuan. Kualitas tetap
              premium, harga tetap bersahabat!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/templates">
                <Button size="lg" variant="default">
                  Konsultasi Gratis
                </Button>
              </Link>
              <Link href="/templates">
                <Button size="lg" variant="outline">
                  Lihat Jenis Kemasan
                </Button>
              </Link>
            </div>
          </div>

          <div className="">
                <Swiper
                  modules={[Autoplay, Pagination]}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  loop={true}
                  className="rounded-lg"
                >
                  {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                      <Image
                        src={slide}
                        alt={`Testimonial Hero ${index + 1}`}
                        width={720}
                        height={400}
                        className="rounded-lg mx-auto w-full object-cover "
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
            </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600 mb-8">Dipercaya oleh UMKM:</p>
          <div className="overflow-hidden relative">
            <div className="flex flex-nowrap justify-start items-center gap-8 opacity-60 animate-scroll">
              {[...brands, ...brands].map((brand, index) => (
                <div key={index} className="flex-shrink-0">
                  <Image
                    src={brand}
                    alt={`Brand ${index + 1}`}
                    width={80}
                    height={30}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className={`p-6 ${cardColors[index % cardColors.length]}`}>
              <CardContent className="p-0">
                <div className="flex flex-col items-start space-x-4">
                  <div className="flex flex-row items-center gap-4">  
                    <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">  
                      <Image src={feature.icon.props.src} alt={feature.icon.props.alt} width={32} height={32} className="mx-auto"/>  
                    </div>  
                    <div className="flex items-center">  
                      <h3 className="font-medium text-lg mb-2">{feature.title}</h3>  
                      {/* <p className="text-gray-600">{feature.description}</p> */}  
                    </div>
                  </div>
                  <div className="mt-8 ew">
                    <Image src={feature.image.props.src} alt={feature.icon.props.alt} width={720} height={720} className="mx-auto"/>  
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      <section className="container mx-auto px-4 py-16">

      </section>

      {/* Testimonial Section */}
      {/* <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Tentang Kami</h2>
              <blockquote className="text-xl text-gray-700 italic">
                "Ni pedagang cekatan sekali dan support small businees orang yg belum bisa cetak banyak, terimakasih dan
                sukses selalu"
              </blockquote>
              <div className="flex justify-center mt-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mt-2">- lughcent</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl font-bold text-orange-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Process Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Cara Pesan</h2>
          <h3 className="text-xl text-gray-700">Cara Pesan Mudah & Cepat</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/templates">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              Mulai Sekarang
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <Package className="w-4 h-4 text-white" />
                </div>
                <span className="font-bold text-lg">Ceri Handycraft</span>
              </div>
              <p className="text-gray-400 text-sm">
                Pengrajin Cookies
                <br />© 2025 Ceri Handycraft
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Navigasi Cepat</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="/templates" className="hover:text-white">
                    Beranda
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white">
                    Jenis Kemasan
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Cara Pesan
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="hover:text-white">
                    Testimoni
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Kontak Kami</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>📞 0812-3456-7890</li>
                <li>✉️ mail@cerihandycraft.com</li>
                <li>📍 Kontak</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Jam Operasional</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Senin - Jumat: 08:00 - 18:00</li>
                <li>Sabtu - Minggu: 09:00 - 17:00</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

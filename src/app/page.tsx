import { Footer } from "@/pages/Footer"
import { Header } from "@/pages/Header"
import { Hero } from "@/pages/Hero"
import { LogoTicker } from "@/pages/LogoTicker"
import { Pricing } from "@/pages/Pricing"
import { ProductShowcase } from "@/pages/ProductShowcase"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
      <Footer />
    </>
  )
}

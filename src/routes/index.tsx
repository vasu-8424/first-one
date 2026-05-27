import { createFileRoute } from "@tanstack/react-router";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CursorGlow } from "@/components/CursorGlow";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Services } from "@/components/Services";
import { Manifesto } from "@/components/Manifesto";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "AERVO — The Art of Moving · Premium Grocery Delivery" },
      {
        name: "description",
        content:
          "AERVO delivers groceries, milk, meat, fish & vegetables in Makthal and Narayanpet with concierge precision. Mon–Sat · 6 AM – 6 PM.",
      },
      { property: "og:title", content: "AERVO — The Art of Moving" },
      {
        property: "og:description",
        content: "Premium grocery, dairy, meat, fish and produce delivery.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="grain relative min-h-screen bg-transparent text-ink">
      <AnimatedBackground />
      <SmoothScroll />
      <CursorGlow />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Marquee />
        <Services />
        <Manifesto />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

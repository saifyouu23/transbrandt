import { Hero } from "@/components/hero"
import { ScheduleSearch } from "@/components/schedule-search"
import { Services } from "@/components/services"
import { Destinations } from "@/components/destinations"
import { Promotions } from "@/components/promotions"
import { Newsletter } from "@/components/newsletter"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ScheduleSearch />
      <Services />
      <Destinations />
      <Promotions />
      <Newsletter />
    </main>
  )
}

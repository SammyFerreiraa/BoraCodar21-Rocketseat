import Cart from '@/components/Cart'

export default function Home() {
  return (
    <main className="relative max-h-screen min-h-screen min-w-full overflow-visible">
      {/* Left */}
      <div className="grid w-[70%] grid-cols-4 items-center gap-8 p-6"></div>

      {/* CART */}
      <Cart />
    </main>
  )
}

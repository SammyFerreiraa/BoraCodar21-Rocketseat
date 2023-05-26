import Cart from '@/components/Cart'
import ItemLoja from '@/components/ItemLoja'

export default function Home() {
  return (
    <main className="relative max-h-screen min-h-screen min-w-full overflow-visible">
      {/* Left */}
      <div className="grid w-[70%] grid-cols-4 items-center gap-8 p-6">
        <ItemLoja />
        <ItemLoja />
        <ItemLoja />
        <ItemLoja />
        <ItemLoja />
        <ItemLoja />
        <ItemLoja />
        <ItemLoja />
        <ItemLoja />
      </div>

      {/* CART */}
      <Cart />
    </main>
  )
}

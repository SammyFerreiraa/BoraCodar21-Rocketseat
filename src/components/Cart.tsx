import React from 'react'
import Item from '@/components/Item'
import CardBot from './CardBot'
import CardTop from './CardTop'

const Cart = () => {
  return (
    <div className="absolute right-0 h-screen w-[30%] bg-neutrals-surface">
      {/* TOP */}
      <CardTop />
      {/* MID */}
      <div className=" z-0 flex flex-col gap-12 bg-neutrals-surface pb-60 pl-8 pr-8 pt-28">
        <Item />
      </div>

      {/* BOT */}
      <CardBot />
    </div>
  )
}

export default Cart

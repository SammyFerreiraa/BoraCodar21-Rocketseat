import React from 'react'
import Item from '@/components/Item'
import CardBot from './CardBot'
import CardTop from './CardTop'

const Cart = () => {
  const items = [
    {
      name: 'Monitor Gamer Curvo 49 DQHD, 240Hz, 1ms, HDMI e DisplayPort, HDR 1000, FreeSync Premium, Ajuste de Altura - LC49G95TSSLXZD',
      preço: 8599.9,
      id: 1,
      img: '/monitor.jpg',
    },
    {
      name: 'Cadeira Gamer  RGB - Preta com Iluminação (Led)',
      preço: 959.9,
      id: 2,
      img: '/cadeira.jpg',
    },
    {
      name: 'Teclado Gamer Mecânico Low Profile RGB AW510K 580',
      preço: 1002,
      id: 3,
      img: '/teclado.jpg',
    },
    {
      name: 'Headset Gamer RGB Preto',
      preço: 99.9,
      id: 4,
      img: '/headset.jpg',
    },
    {
      name: 'Patinho De Borracha Para Banho',
      preço: 19.9,
      id: 5,
      img: '/paatinho.jpg',
    },
  ]
  let precoFinal: any = 0
  for (let int = 0; int < items.length; int++) {
    const num = items[int].preço
    precoFinal += num
  }
  return (
    <div
      id="cart"
      className="fixed right-0 top-0 h-[90vh] w-[30%] overflow-hidden overflow-y-scroll bg-neutrals-surface"
    >
      {/* TOP */}
      <CardTop quantidade={items.length} />
      {/* MID */}
      <div className=" z-0 flex flex-col gap-12 bg-neutrals-surface pb-52 pl-8 pr-8 pt-28">
        {items.map((it) => (
          <Item
            name={it.name}
            preço={it.preço.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
            })}
            src={it.img}
            key={it.id}
          />
        ))}
      </div>

      {/* BOT */}
      <CardBot
        total={precoFinal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
      />
    </div>
  )
}

export default Cart

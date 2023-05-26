import React from 'react'
import Image from 'next/image'

const ItemLoja = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 overflow-hidden">
      <Image
        src="/teclado.jpg"
        alt="produto"
        width={160}
        height={160}
        className="rounded"
      />
      <p
        className="max-h-12 w-[16ch] overflow-hidden text-ellipsis"
        style={{
          display: '-webkit-box',
          WebkitLineClamp: '2',
          WebkitBoxOrient: 'vertical',
        }}
      >
        Monitor Gamer Curvo 49 DQHD, 240Hz, 1ms, HDMI e DisplayPort, HDR 1000,
        FreeSync Premium, Ajuste de Altura - LC49G95TSSLXZD
      </p>
      <div className="flex flex-col items-center gap-2">
        <p className="font-[700] text-neutrals-pri">R$ 8.595,99</p>
        <button className="rounded bg-brand-color pb-3 pl-2 pr-2 pt-3 text-sm text-neutrals-pri hover:bg-brand-light">
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  )
}

export default ItemLoja

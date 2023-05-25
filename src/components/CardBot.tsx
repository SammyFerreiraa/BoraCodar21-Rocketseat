import React from 'react'
import Image from 'next/image'

const CardBot = () => {
  return (
    <div className="fixed bottom-0 z-10 flex w-full max-w-[30vw] flex-col border-t-2 border-neutrals-stroke bg-neutrals-surface p-8 ">
      <div className="flex items-start justify-between">
        <p className="font-[500] text-neutrals-sec">Total:</p>
        <div className="flex flex-col items-end gap-4">
          <p className="font-[700]">R$ 10,661,89</p>
          <div className="relative flex p-4">
            <Image
              src="/Tag.svg"
              alt="img"
              width={24}
              height={24}
              className="absolute"
            />
            <input
              id="cupom"
              type="text"
              placeholder="Adicionar cupom"
              className="bg-transparent pl-8 font-[500] text-brand-light placeholder:text-brand-light hover:text-brand-lighter"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center pt-8">
        <button className="rounded bg-brand-color pb-5 pl-28 pr-28 pt-5 text-neutrals-pri hover:bg-brand-light">
          Finalizar compra
        </button>
      </div>
    </div>
  )
}

export default CardBot

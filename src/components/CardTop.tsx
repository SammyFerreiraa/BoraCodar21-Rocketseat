import React from 'react'
import Image from 'next/image'

const CardTop = () => {
  return (
    <div className="fixed z-10 flex w-full max-w-[30vw] flex-row items-center justify-between gap-2 border-b-2 border-neutrals-stroke bg-neutrals-surface pb-6 pl-8 pr-4 pt-6">
      <p className="text-xl text-neutrals-sec">
        Seu carrinho tem{' '}
        <span className="font-[500] text-neutrals-pri">5 itens</span>
      </p>
      <button>
        <Image src="/Close.svg" alt="quit" width={24} height={24} />
      </button>
    </div>
  )
}

export default CardTop

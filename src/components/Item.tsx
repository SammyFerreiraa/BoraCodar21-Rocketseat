import Image from 'next/image'
import React from 'react'

const Item = () => {
  return (
    <div className="flex flex-row gap-6">
      {/* LEFT  */}
      <div>
        <Image
          priority
          src="/teclado.jpg"
          alt="img"
          width={104}
          height={104}
          className="min-w-[104px] rounded"
        />
      </div>
      {/* RIGHT  */}
      <div className="flex flex-col gap-4">
        <p
          className="max-h-12 overflow-hidden text-ellipsis"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: '2',
            WebkitBoxOrient: 'vertical',
          }}
        >
          Teclado Gamer Mecânico Low Profile RGB AW510K 580
        </p>
        <div className="flex flex-row items-center justify-between">
          <p className="font-[700]">R$ 8599,90</p>
          <div className="gap flex">
            <button className="rounded border-2 border-neutrals-stroke p-3">
              <Image src="/Minus.svg" alt="minus" width={16} height={16} />
            </button>
            <p className="flex h-10 w-10 items-center justify-center">1</p>
            <button className="rounded border-2 border-brand-light p-3">
              <Image src="/Plus.svg" alt="plus" width={16} height={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item

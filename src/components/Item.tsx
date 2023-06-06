import Image from 'next/image'

interface Items {
  preço: any
  name: string
  src: any
}

const Item = (props: Items) => {
  return (
    <div className="flex flex-row gap-6">
      {/* LEFT  */}
      <div>
        <Image
          priority
          src={props.src}
          alt="img"
          width={104}
          height={104}
          className="min-w-[104px] rounded"
        />
      </div>
      {/* RIGHT  */}
      <div className="flex min-h-[104px] min-w-[255px] flex-col justify-between gap-4">
        <p
          className="max-h-12 overflow-hidden text-ellipsis text-neutrals-sec"
          style={{
            display: '-webkit-box',
            WebkitLineClamp: '2',
            WebkitBoxOrient: 'vertical',
          }}
        >
          {props.name}
        </p>
        <div className="flex flex-row items-center justify-between">
          <p className="font-[700] text-neutrals-pri">R$ {props.preço}</p>
          <div className="gap flex">
            <button className="rounded border-2 border-neutrals-stroke p-3">
              <Image src="/Minus.svg" alt="minus" width={16} height={16} />
            </button>
            <p className="flex h-10 w-10 items-center justify-center text-neutrals-pri">
              1
            </p>
            <button className="rounded border-2 border-brand-light p-3 hover:border-brand-color hover:bg-brand-color">
              <Image src="/Plus.svg" alt="plus" width={16} height={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item

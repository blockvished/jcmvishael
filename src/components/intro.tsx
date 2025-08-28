import Image from 'next/image'
import pfp from '@/public/pfp.png'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pt-14 pb-24 md:flex-row md:items-center'>
      <div className='mt-4 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&#39;m Vi.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab alias quasi cumque eos deserunt sapiente animi dolor, tempore voluptatem veniam, pariatur quis! Error, rem? At amet maiores expedita a rerum.
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg w-40 h-40 grayscale'
          src={`/vi.png`}
          alt='Vishal'
          width={105}
          height={105}
          priority
        />
      </div>
    </section>
  )
}

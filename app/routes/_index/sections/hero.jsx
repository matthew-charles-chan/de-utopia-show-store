import { Image } from '@shopify/hydrogen'

export default function Hero() {
  return (
    <section className='relative w-full'>
      <Image
        src='https://cdn.shopify.com/s/files/1/0840/0063/6950/files/3_2.svg?v=1714738176  '
        className='w-full h-auto'
        width='100%'
        style={{ display: 'block' }} // Ensures the image takes up the full width without extra space
      />
    </section>
  )
}

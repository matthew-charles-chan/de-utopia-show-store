import { ProductCard } from '@h2/ProductCard'
import { Heading, Span } from '@h2/new/Text'
import {
  Container,
  Row,
  Grid,
  Section,
} from '@h2/new/Layout'
import {
  useLoaderData,
  Await,
  Link,
} from '@remix-run/react'
import {
  flattenConnection,
  Image,
  Money,
} from '@shopify/hydrogen'
import { Suspense } from 'react'

export default function BestSellers() {
  const { collectionHeading, products } = useLoaderData()

  return (
    <Section className='pt-32' style={{ height: 1000 }}>
      <Container>
        <div className='recommended-products'>
          <CollectionHeading {...collectionHeading} />
          <Suspense fallback={<div>Loading...</div>}>
            <Await resolve={products}>
              {(products) => (
                <div className='grid gap-6 grid-cols-5 py-6'>
                  {products.map((product) => (
                    <Link
                      key={product.id}
                      className='recommended-product '
                      to={`/products/${product.handle}`}
                    >
                      <div className='overflow-hidden '>
                        <Image
                          data={product.images.nodes[0]}
                          className='hover:scale-110 transition-all duration-500'
                          aspectRatio='1/1'
                          sizes='(min-width: 45em) 20vw, 50vw'
                        />
                      </div>
                      <h3 className='font-semibold text-lg pt-4'>
                        {product.vendor}
                      </h3>
                      <h4 className='text-sm'>
                        {product.title}
                      </h4>
                      <small>
                        <Money
                          data={
                            product.priceRange
                              .minVariantPrice
                          }
                        />
                      </small>
                    </Link>
                  ))}
                </div>
              )}
            </Await>
          </Suspense>
          <br />
        </div>
      </Container>
    </Section>
  )
}

function ArrowIcon() {
  return (
    <svg
      width='12'
      height='8'
      viewBox='0 0 12 8'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M11.3536 4.35355C11.5488 4.15829 11.5488 3.84171 11.3536 3.64645L8.17157 0.464466C7.97631 0.269204 7.65973 0.269204 7.46447 0.464466C7.2692 0.659728 7.2692 0.976311 7.46447 1.17157L10.2929 4L7.46447 6.82843C7.2692 7.02369 7.2692 7.34027 7.46447 7.53553C7.65973 7.7308 7.97631 7.7308 8.17157 7.53553L11.3536 4.35355ZM0 4.5H11V3.5H0V4.5Z'
        fill='black'
      />
    </svg>
  )
}

function CollectionHeading({
  header,
  cta,
  collectionHandle,
  linkUrl,
}) {
  return (
    <>
      <h2 className='text-3xl font-bold uppercase'>
        TRENDING PRODUCTS!
      </h2>
      <div>
        <Link
          className='flex items-center space-x-1'
          to={`/collections/bestsellers`}
        >
          <div className='font-light text-sm'>
            Shop our bestsellers
          </div>
          <div>
            <ArrowIcon />
          </div>
        </Link>
      </div>
    </>
  )
}

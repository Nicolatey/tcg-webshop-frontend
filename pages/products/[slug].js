import Head from "next/head"
import { useRouter } from "next/router"

import NextImage from "../../components/Image"
import { getProducts, getProduct } from "../../utils/api"
import { getStrapiMedia } from "../../utils/medias"

const ProductPage = ({ product }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Laden product...</div>
  }

  return (
    <div className="m-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mt-8">
      <Head>
        <title>{product.title} product</title>
      </Head>
      <div className="flex justify-center bg-white p-16 pb-40">
        <div className="h-48 w-48">
          <NextImage media={product.image} />
        </div>
      </div>
      <div className="w-full p-5 flex flex-col justify-center">
        <h4 className="font-black text-3xl leading-tight truncate text-darkbrown mb-2">
          {product.title}
        </h4>
        <h4 className="font-bold text-2xl leading-tight text-strawcherry mb-2">
          €{product.price}
        </h4>
        <div className="mt-8 mb-8 text-darkbrown">{product.description}</div>

        {product.status === "published" ? (
          <button
            className="snipcart-add-item bg-strawberry border border-cherry d hover:shadow-xl text-white font-semibold p-2 my-4 rounded-2xl shadow w-3/4"
            data-item-id={product.id}
            data-item-price={product.price}
            data-item-url={router.asPath}
            data-item-description={product.description}
            data-item-image={getStrapiMedia(
              product.image.formats.thumbnail.url
            )}
            data-item-name={product.title}
            v-bind="customFields"
          >
            Toevoegen aan winkelwagen
          </button>
        ) : (
          <div className="text-center mr-10 mb-1" v-else>
            <div
              className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex"
              role="alert"
            >
              <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
                Coming soon...
              </span>
              <span className="font-semibold mr-2 text-left flex-auto">
                Dit product is not niet beschikbaar.
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductPage

export async function getStaticProps({ params }) {
  const product = await getProduct(params.slug)
  return { props: { product } }
}

export async function getStaticPaths() {
  const products = await getProducts()
  return {
    paths: products.map((_product) => {
      return {
        params: { slug: _product.slug },
      }
    }),
    fallback: true,
  }
}

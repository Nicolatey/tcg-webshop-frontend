import NextImage from "./Image"
import Link from "next/link"

const ProductsList = ({ products }) => {
  return (
    <div className="m-6 grid grid-cols-1 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 mt-8">
      {products.map((_product) => (
        <div
          key={_product.id}
          className="border rounded-lg bg-lightblue border-pauwblauw hover:shadow-xl shadow-md"
        >
          <Link href={`/products/${_product.slug}`}>
            <a>
              <div className="bg-white m-3">
                <div className="p-2 w-3/4 mx-auto">
                  <NextImage media={_product.image} />
                </div>
              </div>
              <div className="flex flex-col p-3 rounded-lg">
                <h1 className="self-center mt-1 font-bold text-xl leading-tight truncate text-pauwblauw">
                  {_product.title}
                </h1>
                <div className="self-center mt-1 text-xl text-pauwblauw">
                  {_product.price}
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default ProductsList

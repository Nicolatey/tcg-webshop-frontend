import Link from "next/link"
import NextImage from "./Image"
import "../public/images/shopping-cart.svg"

const Navbar = () => {
  return (
    <div className="flex justify-between ml-6 mr-6 mt-2">
      <Link href="/">
        <p className="font-custom text-5xl text-darkbrown">TCG-Zwolle</p>
      </Link>
      <button className="snipcart-checkout flex items-baseline">
        <NextImage
          height="50"
          width="50"
          src="/images/shopping-cart.svg"
          alt="Cart"
        />
        <span className="snipcart-total-price font-custom text-5xl text-darkbrown pl-5"></span>
      </button>
    </div>
  )
}

export default Navbar

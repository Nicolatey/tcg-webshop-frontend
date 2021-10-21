import CategoryButtons from "./CategoryButtons"
import Footer from "./Footer"
import Navbar from "./Navbar"

const Layout = ({ children, categories }) => {
  return (
    <div className="flex justify-center bg-yellow">
      <div className="max-w-screen-lg flex flex-col min-h-screen w-full">
        <Navbar />
        <CategoryButtons categories={categories} />
        <div className="flex-grow">{children}</div>
        <Footer />
      </div>
      <div
        hidden
        id="snipcart"
        data-api-key="ZjMzYWY0OGYtMzY1Yi00OGUwLThhNTktMjlmMjQ1YTI2MTIzNjM3Njg1MDUyMjYxOTExNDE1"
        data-currency="eur"
      />
    </div>
  )
}

export default Layout

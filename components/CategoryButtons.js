import Link from "next/link"

const CategoryButtons = ({ categories = [] }) => {
  return (
    <div className="container flex flex-wrap justify-center mx-auto gap-2 mt-8">
      {categories.map((_category) => (
        <Link href={`/categories/${_category.slug}`} key={_category.id}>
          <a className="bg-strawberry hover:bg-strawcherry text-white font-semibold py-2 px-4 border border-cherry rounded-3xl shadow">
            {_category.name}
          </a>
        </Link>
      ))}
    </div>
  )
}

export default CategoryButtons

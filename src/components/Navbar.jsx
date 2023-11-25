import { links } from '../data'
const Navbar = () => {
  return (
    <nav className="bg-emerald-100 ">
      <div className="align-element py-8 flex flex-col gap-2 sm:flex-row">
        <h2 className="text-3xl font-bold">
          Web<span className="text-emerald-600">Dev</span>
        </h2>
        <ul className="flex sm:items-center gap-x-4 flex-row sm:ml-8">
          {links.map((link) => {
            const { id, href, text } = link
            return (
              <li key={id}>
                <a
                  href={href}
                  className="capitalize block hover:text-emerald-500 duration-200 text-lg tracking-wide"
                >
                  {text}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
export default Navbar

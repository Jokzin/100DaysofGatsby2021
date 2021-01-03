import React from "react"
import { Link } from "gatsby"

export default function Nav() {
  return (
    <nav className="text-gray-500 uppercase text-center font-mono py-6">
      <div className="text-green-900 font-bold font-sans uppercase text-5xl py-6">AudioC0RE</div>
      <ul>
        <li className="inline-block px-6 hover:text-green-900 hover:line-through">
          <Link to="/">H0me</Link>
        </li>
        <li className="inline-block px-6 hover:text-green-900 hover:line-through">
          <Link to="/about/">Ab0ut</Link>
        </li>
        <li className="inline-block px-6 hover:text-green-900 hover:line-through">
          <Link to="/locations/">L0cati0ns</Link>
        </li>
      </ul>
    </nav>
  )
}

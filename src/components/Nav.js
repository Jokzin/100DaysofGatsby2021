import React from "react"
import { Link } from "gatsby"

export default function Nav() {
  return (
    <nav className="">
      <div className="">AudioC0RE</div>
      <ul>
        <li className="">
          <Link to="/">H0me</Link>
        </li>
        <li className="">
          <Link to="/about/">Ab0ut</Link>
        </li>
        <li className="">
          <Link to="/locations/">L0cati0ns</Link>
        </li>
      </ul>
    </nav>
  )
}

import React from "react"
import { Link } from "gatsby"

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">H0me</Link>
        </li>
        <li>
          <Link to="/about/">Ab0ut</Link>
        </li>
        <li>
          <Link to="/locations/">L0cati0ns</Link>
        </li>
      </ul>
    </nav>
  )
}

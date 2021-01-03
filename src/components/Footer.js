import React from "react"

export default function Footer() {
  return (
    <footer className="uppercase absolute bottom-0 w-full text-center font-mono py-6">
      <p>&copy;AudioC0RE {new Date().getFullYear()}</p>
    </footer>
  )
}
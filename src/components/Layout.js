import React from "react"
import Nav from "./Nav"
import Footer from "./Footer"

export default function Layout({ children }) {
  return (
    <div className="h-screen relative">
      <Nav />
      <div className="px-28">
        {children}
      </div>
      <Footer />
    </div>
  )
}

import { Children } from "react"
import { Footer } from "./Footer"
import { Intro } from "./Intro"
import { Navbar } from "./Navbar"

export const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
              {children}
            <Footer />
        </div>
    )
}

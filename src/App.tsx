import { Footer } from "./components/Footer/Footer"
import { Header } from "./components/Header/Header"
import { About } from "./sections/About/About"
import { Experience } from "./sections/Experience/Experience"
import { Hero } from "./sections/Hero/Hero"
import {Projects} from "./sections/Projects/Projects"

export function App() {
    return (
        <>
            <Header />
            <Hero />
            <About/>
            <Experience/>
            <Projects/>
            <Footer/>
        </>
    )
}
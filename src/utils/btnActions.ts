export const scrollToProjects = (id: string): void => {
    const element = document.getElementById(id)

    if (element instanceof HTMLElement) {
        element.scrollIntoView({ behavior: "smooth" })
    }
}

export const DowloadBtn = () => {
    const link = document.createElement("a")
    link.href =
        "https://docs.google.com/document/d/1f3Epr4Jl1YhLLqht0a5eof7_Z3eKO3Vn74ES34D-CL4/export?format=pdf"
    link.download = "curriculo.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
}

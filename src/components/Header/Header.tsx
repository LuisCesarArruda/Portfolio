import "./Style.css"

export function Header() {
    return (
        <header id="header" className="header">
            <div className="header_content">
                <div className="header_logo_container">
                    <div className="header_logo_img">
                        <img src="#" alt="#" />
                    </div>
                    <span className="header__logo-sub">Luis César</span>
                </div>
                <div className="header_main">

                    <ul className="header_links">
                        <li>
                            <a className="header_link" href="#hero">Home</a>
                        </li>
                        <li>
                            <a className="header_link" href="#about">Sobre</a>
                        </li>
                        <li>
                            <a className="header_link" href="#experience">Experiência</a>
                        </li>
                        <li>
                            <a className="header_link" href="#projects">projetos</a>
                        </li>
                        <li>
                            <a className="header_link" href="#footer">Contato</a>
                        </li>
                        

                    </ul>
                </div>
            </div>
        </header>
    )
}
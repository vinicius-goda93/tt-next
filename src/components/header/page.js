import Image from "next/image";
import Link from "next/link";

export function Header() {
    return (
        <header className="header">
            <div className="container-fluid container-xxl">
                <div className="row">
                    <div className="col-12">

                        <div className="header-content">
                            <div className="header-brand">
                                <Link href="./">
                                    <Image
                                        src="/logo/logo-white.svg"
                                        width={1000}
                                        height={1000}
                                        alt="Logo TT Creative"
                                        title="Logo TT Creative"
                                    />
                                </Link>
                            </div>

                            <div className="header-toggle">
                                <div className="hamburger"></div>
                            </div>

                            <nav className="header-items">

                                <div className="header-mobile-brand d-lg-none">
                                    <Link href="./">
                                        <Image
                                            src="/logo/logo-dark.svg"
                                            width={1000}
                                            height={1000}
                                            alt="Logo TT Creative"
                                            title="Logo TT Creative"
                                        />
                                    </Link>
                                </div>

                                <ul className="header-items-links">
                                    <li><Link href="./"> Home </Link></li>
                                    <li><Link href="/agencia"> A Agência </Link></li>

                                    <li className="dropdown-link">
                                        <Link href="/solucoes">
                                            Soluções
                                            <Image
                                                src="/icons/ico-arrow-down.svg"
                                                width={1000}
                                                height={1000}
                                                alt="Ver as soluções da TT Creative"
                                                title="Ver as soluções da TT Creative"
                                            />
                                        </Link>

                                        <ul className="dropdown-box">
                                            <span className="close-dropdown">
                                                <Image
                                                    src="/icons/ico-arrow-left.svg"
                                                    width={1000}
                                                    height={1000}
                                                    alt="Fechar Dropdown"
                                                    title="Fechar Dropdown"
                                                />
                                                Voltar
                                            </span>

                                            <div className="container-fluid">
                                                <div className="row">
                                                    <div className="col-12 d-none d-lg-block">
                                                        <li><strong>Nossas Soluções:</strong></li>
                                                    </div>

                                                    <div className="col-lg-4">
                                                        <li><Link href="/estrategia-de-marketing-digital"> Estratégia de Marketing Digital </Link></li>
                                                        <li><Link href="/gestao-de-midias-sociais"> Gestão de mídias sociais </Link></li>
                                                        <li><Link href="/marketing-de-conteudo"> Marketing de Conteúdo </Link></li>
                                                        <li><Link href="/email-marketing"> Email Marketing </Link></li>
                                                        <li><Link href="/desenvolvimento-e-lancamento-de-infoprodutos"> Desenvolvimento e Lançamento de Infoprodutos </Link></li>
                                                        <li><Link href="/consultoria-de-presenca-online"> Consultoria de Presença Online </Link></li>
                                                    </div>

                                                    <div className="col-lg-4">
                                                        <li><Link href="/gestao-de-eventos-e-webinars"> Gestão de Eventos e Webinars </Link></li>
                                                        <li><Link href="/desenvolvimento-de-branding"> Desenvolvimento de Branding </Link></li>
                                                        <li><Link href="/gestao-de-trafego-pago"> Gestão de Tráfego Pago </Link></li>
                                                        <li><Link href="/seo"> SEO (Search Engine Optimization) </Link></li>
                                                        <li><Link href="/indentidade-visual"> Identidade Visual </Link></li>
                                                        <li><Link href="/design-para-redes-sociais"> Design para redes sociais </Link></li>
                                                    </div>

                                                    <div className="col-lg-4">
                                                        <li><Link href="/criacao-de-logotipos"> Criação de logotipos </Link></li>
                                                        <li><Link href="/design-de-materiais-promocionais"> Design de materiais promocionais </Link></li>
                                                        <li><Link href="/producao-de-conteudo-visual"> Produção de conteúdo visual </Link></li>
                                                        <li><Link href="/desenvolvimento-de-sites"> Desenvolvimento de Site </Link></li>
                                                        <li><Link href="/marketing-de-influencia"> Marketing de Influência </Link></li>
                                                    </div>
                                                </div>
                                            </div>
                                        </ul>
                                    </li>
                                    <li className="d-lg-none"><Link href="/contato"> Contato </Link></li>
                                    <li className="d-none d-lg-block"><Link href="/contato" className="main-button">Contato</Link></li>
                                </ul>
                            </nav>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    );
}

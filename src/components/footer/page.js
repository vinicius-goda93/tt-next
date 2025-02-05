import Image from "next/image";
import Link from "next/link";

export function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container-fluid container-xxl">
                    <div className="row">
                        <div className="col-12 d-flex justify-content-center">
                            <div className="footer-brand">
                                {/* <img src="img/logo/logo-dark.svg" alt="Logo da TT Creative" title="Logo da TT Creative"> */}
                            </div>
                        </div>

                        <div className="col-12 d-flex justify-content-center">
                            <nav className="footer-nav">
                                <ul>
                                    <li><Link href="./"> Home </Link></li>
                                    <li><Link href="/agencia"> A Agência </Link></li>
                                    <li><Link href="/solucoes"> Soluções </Link></li>
                                    <li><Link href="/contato"> Contato </Link></li>
                                    <li><Link href="/politica-de-privacidade"> Política de Privacidade </Link></li>
                                    <li><Link href="/mapa-do-site"> Mapa do Site </Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="footer-copyright">
                <div className="container-fluid container-xxl">
                    <div className="row">
                        <div className="col-lg-6 text-center text-lg-start">
                            {/* <span>&copy; TT Creative Agency <?= date("Y") ?> - Todos os direitos reservados</span> */}
                        </div>

                        <div className="col-lg-6 text-center text-lg-end">
                            <span>Desenvolvido e Otimizado por: <Link href="https://wa.me/5511932108163" title="Sites Otimizados e Únicos por um preço acessível" target="_blank">Israel Victor</Link></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lgpd-box" style={{display: 'none'}}>
                <span className="title"><i className="fa-solid fa-lock fa-lg mr-1"></i> Política de Privacidade</span>
                <p className="description">
                    Este site utiliza cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa <Link href="politica-de-privacidade" target="_blank" className="">Política de Privacidade</Link>
                </p>
                <div className="actions">
                    <button className="accept">
                        Concordo
                    </button>
                </div>
            </div>

            <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
            <script type="text/javascript" src="./dist/script.min.js"></script>
        </>
    );
}

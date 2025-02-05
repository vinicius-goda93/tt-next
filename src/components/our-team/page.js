import Image from "next/image";
import Link from "next/link";

export function OurTeam() {
    return (
        <section className="our-team stage-padding">
            <div className="container-fluid container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="main-title font-dark">
                                    <h2>Nossa equipe qualificada para ajudar sua empresa</h2>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="our-team-card">
                                    <div className="img">
                                        {/* <img src="img/our-team/tassia-pilheri.png" alt="Tássia C. Pilheri" title="Tássia C. Pilheri"> */}
                                    </div>

                                    <div className="content">
                                        <div className="main-subtitle font-gray">
                                            <h3>Tássia C. Pilheri</h3>
                                        </div>

                                        <div className="main-text font-gray">
                                            <p>Especialista em Marketing Digital e Estrategista digital</p>
                                        </div>
                                    </div>

                                    <ul className="sn-links">
                                        <li>
                                            <Link href="https://api.whatsapp.com/send?phone=5511963112570" target="_blank">
                                                {/* <img src="img/icons/ico-whatsapp-red.svg" alt="Whatsapp da Tássia C. Pilheri" title="Whatsapp da Tássia C. Pilheri"> */}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.instagram.com/tassiapilheri" target="_blank">
                                                {/* <img src="img/icons/ico-instagram-red.svg" alt="Instagram da Tássia C. Pilheri" title="Instagram da Tássia C. Pilheri"> */}
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="our-team-card mt-40">
                                    <div className="img">
                                        {/* <img src="img/our-team/tabatta-c-n.png" alt="Tabatta C. Nakamura" title="Tabatta C. Nakamura"> */}
                                    </div>

                                    <div className="content">
                                        <div className="main-subtitle font-gray">
                                            <h3>Tabatta C. Nakamura</h3>
                                        </div>

                                        <div className="main-text font-gray">
                                            <p>Design Gráfico</p>
                                        </div>
                                    </div>

                                    <ul className="sn-links">
                                        <li>
                                            <Link href="https://api.whatsapp.com/send?phone=5513981155141" target="_blank">
                                                {/* <img src="img/icons/ico-whatsapp-red.svg" alt="Whatsapp da Tabatta C. Nakamura" title="Whatsapp da Tabatta C. Nakamura">  */}
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://www.instagram.com/tabattacn/" target="_blank">
                                                {/* <img src="img/icons/ico-instagram-red.svg" alt="Instagram da Tabatta C. Nakamura" title="Instagram da Tabatta C. Nakamura">  */}
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="our-team-card mt-80">
                                    <div className="img">
                                        {/* <img src="img/our-team/monise-lopes.png" alt="Monise L. Pelegrini" title="Monise L. Pelegrini"> */}
                                    </div>

                                    <div className="content">
                                        <div className="main-subtitle font-gray">
                                            <h3>Monise L. Pelegrini</h3>
                                        </div>

                                        <div className="main-text font-gray">
                                            <p>Analista de dados e Diretora de Processos e Projetos</p>
                                        </div>
                                    </div>

                                    <ul className="sn-links">
                                        <li>
                                            <Link href="https://api.whatsapp.com/send?phone=5521995416395" target="_blank">
                                                {/* <img src="img/icons/ico-whatsapp-red.svg" alt="Whatsapp da Monise L. Pelegrini" title="Whatsapp da Monise L. Pelegrini">  */}
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

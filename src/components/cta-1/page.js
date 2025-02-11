import Image from "next/image";
import Link from "next/link";

export function CTA1({ pageId }) {
    return (
        <section className={`cta-one stage-padding ${pageId == 'home' ? 'pb-0' : ''}`}>
            <div className="container-fluid container-xxl">
                <div className="row">
                    <div className="col-lg-5 d-flex align-items-center">
                        <div>
                            <div className="main-title font-gray">
                                <small>Aumente sua visibilidade com</small>
                                <h2>Estratégias de marketing profissionais</h2>
                            </div>

                            <div className="main-text font-gray">
                                <p>Amplie o alcance da sua marca com estratégias de marketing digital que realmente funcionam.</p>
                                <p>Na T&T Creative Agency, desenvolvemos planos sob medida para aumentar a visibilidade da sua empresa, fortalecer sua presença online e engajar seu público de maneira eficaz. Entre em contato conosco e descubra como podemos ajudar você a crescer.</p>
                            </div>

                            <Link href="/contato" className="main-button">Entre em contato agora mesmo</Link>
                        </div>
                    </div>

                    <div className="offset-xl-1 col-xl-6 col-lg-7">
                        <div className="cta-one-img">
                            <Image
                                src="/cta-1-img.png"
                                width={1000}
                                height={1000}
                                alt="Estratégias de marketing profissionais"
                                title="Estratégias de marketing profissionais"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

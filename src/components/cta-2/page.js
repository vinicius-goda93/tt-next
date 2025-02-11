import Image from "next/image";
import Link from "next/link";

export function CTA2() {
    return (
        <section className="cta-two stage-padding">
            <div className="container-fluid container-xxl">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="cta-two-content left">
                            <div className="main-title font-white">
                                <h2>Serviços de marketing de qualidade!</h2>
                            </div>
                            <div className="main-text font-white">
                                <p>Na TT Creative, transformamos ideias em resultados concretos. Nosso compromisso é oferecer soluções personalizadas em marketing digital, branding e design, com estratégias inovadoras e criativas que realmente fazem a diferença.</p>
                                <p>Unimos expertise, paixão e inovação para destacar sua marca no mercado, cuidando de cada detalhe com foco em desempenho e impacto. Não apenas criamos, mas potencializamos a presença da sua marca, conectando-a ao público certo e gerando resultados que impulsionam seu crescimento.</p>
                                <p>Confie em nossa experiência para levar sua marca ao próximo nível. Juntos, vamos transformar o potencial da sua empresa em histórias de sucesso!</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="cta-two-content right">
                            <div className="content">
                                <Link href="https://api.whatsapp.com/send/?phone=5511963112570" target="_blank" className="main-button">Faça já o teste!</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

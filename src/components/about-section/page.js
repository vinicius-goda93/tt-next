import Image from "next/image";
import Link from "next/link";

export function aboutSection({ pageId }) {
    return (
        <section className={`about stage-padding ${pageId == 'about' ? 'about-page' : ''}`}>
        <div className="container-fluid container-xxl">
            <div className="row">
                <div className="col-xl-6 col-lg-7 mb-5 mb-lg-0">
                    <div className="about-img">
                        {/* <img src="/about-img.png" alt="Conheça a TT Creative" title="Conheça a TT Creative"> */}
                    </div>
                </div>
    
                <div className="offset-xl-1 col-lg-5 d-flex align-items-center">
                    <div className="about-content">
                        <div className="main-title font-white">
                            <h2>Uma empresa de confiança: TT Creative</h2>
                        </div>
    
                        {/* <?php if ($pageId != 'about') : ?> */}
    
                            <div className="main-text font-white">
                                <p>Na T&T Creative Agency, nosso processo é projetado para ser eficiente e altamente eficaz, garantindo que cada etapa do seu projeto seja cuidadosamente executada para alcançar os melhores resultados possíveis. Combinamos estratégia, criatividade e tecnologia para otimizar o desempenho de nossas campanhas. </p>
                            </div>
    
                            <div className="main-subtitle font-white">
                                <h3>Por que escolher a Creative</h3>
                            </div>
    
                            <div className="row mb-24">
                                <div className="col-xl-6 col-lg-12 col-sm-6">
                                    <div className="vantages-card font-white">
                                        <div className="vantages-card-border">
                                            <div className="icon">
                                                {/* <img src="/icons/ico-check.svg" alt="Processo Otimizado" title="Processo Otimizado"> */}
                                            </div>
                                            <div className="content">
                                                <span>Processo Otimizado</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    
                                <div className="col-xl-6 col-lg-12 col-sm-6">
                                    <div className="vantages-card font-white">
                                        <div className="vantages-card-border">
                                            <div className="icon">
                                                <img src="/icons/ico-check.svg" alt="Suporte Qualificado" title="Suporte Qualificado">
                                            </div>
                                            <div className="content">
                                                <span>Suporte Qualificado</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div className="main-text font-white">
                                <p>Contamos com uma equipe altamente qualificada, especializada em diversas áreas do marketing digital. Nosso compromisso é oferecer um suporte completo e personalizado, garantindo que suas necessidades sejam atendidas com excelência e que sua empresa receba a atenção que merece.</p>
                            </div>
                            <Link href="/agencia" className="main-button">Nos conheça melhor</Link>
                        {/* <?php else : ?> */}
    
                            <div className="main-text font-white">
                                <p>Na TT Creative Agency, cada projeto é desenvolvido com eficiência, estratégia e criatividade. Nosso objetivo é garantir que cada etapa do processo seja cuidadosamente planejada e executada para entregar os melhores resultados.</p>
                                <p>Combinamos expertise em marketing digital, design e branding para otimizar a performance das marcas que confiam em nosso trabalho. Utilizamos tecnologia de ponta e um olhar atento às tendências do mercado para criar campanhas personalizadas que conectam marcas ao público certo.</p>
                                <p>Somos mais que uma agência; somos parceiros na construção de histórias de sucesso. </p>
                                <p>Vamos juntos transformar o potencial da sua marca em resultados que impactam!</p>
                            </div>
    
                            <Link href="https://api.whatsapp.com/send/?phone=5511963112570" className="main-button">Entre em contato consoco</Link>
                        {/* <?php endif; ?> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

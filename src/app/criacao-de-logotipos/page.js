import { Breadcrumb } from "@/components/breadcrumb/page";
import { CTA1 } from "@/components/cta-1/page";
import { Sidebar } from "@/components/sidebar/page";
import Image from "next/image";

const title = 'Criação de Logotipos'
const description = 'Desenvolvemos logotipos únicos e estratégicos para representar a identidade da sua marca.'

export const metadata = {
    title: title + ' | TT Creative',
    description: description,
    openGraph: {
        title: title + ' | TT Creative',
        description: description,
    },
};

export default function CriacaoDeLogotipos() {
    return (
        <>
            <Breadcrumb title="Criação de Logotipos" pageId="single-service" />

            <section className="content-page stage-padding pb-0">
                <div className="container-fluid container-xxl">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="main-title font-gray">
                                <h2>Criação de Logotipos</h2>
                            </div>

                            <div className="main-text font-gray mb-4">
                                <p>O logotipo é a alma visual da sua marca. Ele representa quem você é e comunica seus valores em um único elemento. Na T&T Creative Agency, criamos logotipos exclusivos que vão além do visual, transmitindo profissionalismo, confiança e criatividade.</p>
                                <p>Nosso processo combina briefing estratégico, análise de mercado e design inovador para garantir que seu logotipo seja memorável e alinhado à identidade da sua marca.</p>
                            </div>

                            <div className="content-page-img">
                                <Image
                                    src="/services/internal/criacao-de-logotipos.webp"
                                    width={1000}
                                    height={1000}
                                    alt={title}
                                    title={title}
                                />
                            </div>

                            <div className="main-subtitle font-gray">
                                <h3>Como funciona nosso processo:</h3>
                            </div>

                            <div className="row">
                                <div className="col-lg-6 mb-4">
                                    <div className="content-page-card" data-index="1">
                                        <div className="content">
                                            <div className="main-subtitle font-white">
                                                <h3>Imersão na Marca</h3>
                                            </div>
                                            <div className="main-text font-white">
                                                <p>Entendemos sua história, valores e diferenciais para criar um logotipo que comunique sua essência.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="content-page-card" data-index="2">
                                        <div className="content">
                                            <div className="main-subtitle font-white">
                                                <h3>Pesquisa de Mercado</h3>
                                            </div>
                                            <div className="main-text font-white">
                                                <p>Estudamos o setor e os concorrentes para garantir originalidade e relevância.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="content-page-card" data-index="3">
                                        <div className="content">
                                            <div className="main-subtitle font-white">
                                                <h3>Criação e Refinamento</h3>
                                            </div>
                                            <div className="main-text font-white">
                                                <p>Desenvolvemos conceitos e apresentamos opções criativas, ajustando conforme o feedback.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="content-page-card" data-index="4">
                                        <div className="content">
                                            <div className="main-subtitle font-white">
                                                <h3>Entrega de Arquivos</h3>
                                            </div>
                                            <div className="main-text font-white">
                                                <p>Fornecemos o logotipo em diversos formatos, garantindo que você possa usá-lo em diferentes mídias.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="main-subtitle font-gray">
                                <h3>Exemplo de aplicação:</h3>
                            </div>

                            <div className="main-text font-gray mb-4">
                                <p>Sua empresa precisa de uma identidade visual marcante para se posicionar como líder em seu segmento. Criamos um logotipo moderno, com cores que transmitem inovação e credibilidade, e entregamos um manual de aplicação para uso consistente.</p>
                            </div>

                            <div className="main-subtitle font-gray">
                                <h3>Diferenciais:</h3>
                            </div>

                            <div className="main-text font-gray">
                                <ul>
                                    <li>Design 100% exclusivo e personalizado.</li>
                                    <li>Processo colaborativo com foco em seus objetivos.</li>
                                    <li>Entrega de arquivos prontos para todas as plataformas.</li>
                                </ul>
                            </div>

                            <div className="main-subtitle font-gray">
                                <h3>Benefícios:</h3>
                            </div>

                            <div className="main-text font-gray">
                                <ul>
                                    <li>Reconhecimento instantâneo da marca.</li>
                                    <li>Credibilidade e profissionalismo em todas as interações.</li>
                                    <li>Comunicação clara e alinhada aos valores da empresa.</li>
                                </ul>
                                <p>Fortaleça sua marca com um logotipo que impressiona e inspira confiança.</p>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </section>

            <CTA1 />
        </>
    );
}
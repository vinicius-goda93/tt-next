import { Breadcrumb } from "@/components/breadcrumb/page";
import { CTA1 } from "@/components/cta-1/page";
import { Sidebar } from "@/components/sidebar/page";
import Image from "next/image";

const title = 'Gestão de Eventos e Webinars'
const description = 'Organizamos e promovemos eventos e webinars para ampliar o alcance da sua marca.'

export const metadata = {
    title: title + ' | TT Creative',
    description: description,
    openGraph: {
        title: title + ' | TT Creative',
        description: description,
    },
};

export default function GestaoDeEventosEWebnars() {
    return (
        <>
            <Breadcrumb title="Gestão de Eventos e Webinars" pageId="single-service" />

            <section className="content-page stage-padding pb-0">
                <div className="container-fluid container-xxl">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="main-title font-gray">
                                <h2>Gestão de Eventos e Webinars</h2>
                            </div>

                            <div className="main-text font-gray mb-4">
                                <p>Eventos e webinars são poderosas ferramentas para engajar seu público, gerar leads qualificados e posicionar sua marca como referência no mercado. No entanto, o sucesso desses eventos depende de um planejamento minucioso e execução impecável. É exatamente isso que a <strong>T&T Creative Agency</strong> oferece.</p>
                                <p>Cuidamos de todos os aspectos, desde a concepção da ideia até a análise de resultados pós-evento. Nossa abordagem estratégica garante que cada detalhe seja pensado para proporcionar uma experiência única e memorável ao público, enquanto atingimos os objetivos da sua marca.</p>
                            </div>

                            <div className="content-page-img">
                                <Image
                                    src="/services/internal/gestao-de-eventos-e-webinars.webp"
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
                                                <h3>Planejamento Estratégico</h3>
                                            </div>
                                            <div className="main-text font-white">
                                                <p>Definimos os objetivos do evento e elaboramos um plano detalhado, incluindo cronograma, palestrantes e conteúdo.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="content-page-card" data-index="2">
                                        <div className="content">
                                            <div className="main-subtitle font-white">
                                                <h3>Divulgação</h3>
                                            </div>
                                            <div className="main-text font-white">
                                                <p>Criamos materiais promocionais e campanhas de marketing para atrair o público certo.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="content-page-card" data-index="3">
                                        <div className="content">
                                            <div className="main-subtitle font-white">
                                                <h3>Gestão Técnica</h3>
                                            </div>
                                            <div className="main-text font-white">
                                                <p>Organizamos a transmissão ao vivo ou presencial, cuidando de toda a tecnologia envolvida.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="content-page-card" data-index="4">
                                        <div className="content">
                                            <div className="main-subtitle font-white">
                                                <h3>Engajamento do Público</h3>
                                            </div>
                                            <div className="main-text font-white">
                                                <p>Desenvolvemos dinâmicas e interações para manter a audiência engajada durante o evento.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-12 mb-4">
                                    <div className="content-page-card" data-index="5">
                                        <div className="content">
                                            <div className="main-subtitle font-white">
                                                <h3>Análise de Resultados</h3>
                                            </div>
                                            <div className="main-text font-white">
                                                <p>Após o evento, fornecemos um relatório completo com métricas de desempenho e insights para futuras ações.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="main-text font-gray mb-4">
                                <p>Sua empresa deseja organizar um webinar para lançar um novo produto. Planejamos o conteúdo, desenvolvemos uma página de inscrição otimizada, criamos anúncios segmentados para atrair participantes e gerenciamos toda a transmissão ao vivo, garantindo uma experiência impecável.</p>
                            </div>

                            <div className="main-subtitle font-gray">
                                <h3>Diferenciais:</h3>
                            </div>

                            <div className="main-text font-gray">
                                <ul>
                                    <li>Planejamento detalhado, alinhado aos objetivos do cliente.</li>
                                    <li>Experiência em gestão de eventos digitais e presenciais.</li>
                                    <li>Uso de tecnologia avançada para transmissões e interações.</li>
                                    <li>Suporte completo, antes, durante e após o evento.</li>
                                </ul>
                            </div>

                            <div className="main-subtitle font-gray">
                                <h3>Benefícios:</h3>
                            </div>

                            <div className="main-text font-gray">
                                <ul>
                                    <li>Maior engajamento e interação com o público-alvo.</li>
                                    <li>Geração de leads qualificados e aumento do reconhecimento da marca.</li>
                                    <li>Posicionamento como referência no setor com eventos profissionais.</li>
                                    <li>Relacionamento mais próximo e confiável com clientes e parceiros.</li>
                                </ul>
                                <p>Com a T&T Creative Agency, seus eventos serão muito mais do que momentos, serão experiências inesquecíveis.</p>
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
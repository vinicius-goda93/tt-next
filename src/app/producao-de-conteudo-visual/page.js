import { Breadcrumb } from "@/components/breadcrumb/page";
import { CTA1 } from "@/components/cta-1/page";
import { Sidebar } from "@/components/sidebar/page";
import Image from "next/image";

const title = 'Produção de Conteúdo Visual'
const description = 'Criamos materiais visuais impactantes para destacar sua marca no digital.'

export const metadata = {
    title: title + ' | TT Creative',
    description: description,
    openGraph: {
        title: title + ' | TT Creative',
        description: description,
    },
};

export default function ProducaoDeConteudoVisual() {
    return (
        <>
            <Breadcrumb title="Produção de Conteúdo Visual" pageId="single-service" />

            <section className="content-page stage-padding pb-0">
                <div className="container-fluid container-xxl">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="main-title font-gray">
                                <h2>Produção de Conteúdo Visual</h2>
                            </div>

                            <div className="main-text font-gray mb-4">
                                <p>O impacto visual é uma peça fundamental na comunicação de qualquer marca. Imagens e vídeos são mais do que meras ilustrações: eles contam histórias, despertam emoções e influenciam decisões de compra. Na <strong>T&T Creative Agency</strong>, criamos conteúdos visuais que não apenas impressionam, mas também entregam resultados.</p>
                                <p>Nosso processo de produção é altamente colaborativo e adaptado às necessidades de cada cliente. Desenvolvemos designs gráficos, ilustrações, infográficos e até mesmo vídeos animados que ajudam a transmitir mensagens complexas de maneira simples e atraente. Cada peça visual é projetada para alinhar-se à identidade da sua marca e aos seus objetivos de marketing.</p>
                            </div>

                            <div className="content-page-img">
                                <Image
                                    src="/services/internal/producao-de-conteudo-visual.webp"
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
                                                <p>Conhecemos profundamente a identidade visual, valores e público-alvo da sua empresa.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="content-page-card" data-index="2">
                                        <div className="content">
                                            <div className="main-subtitle font-white">
                                                <h3>Criação de Conceitos</h3>
                                            </div>
                                            <div className="main-text font-white">
                                                <p>Desenvolvemos ideias criativas alinhadas à sua estratégia de comunicação.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="content-page-card" data-index="3">
                                        <div className="content">
                                            <div className="main-subtitle font-white">
                                                <h3>Produção e Design</h3>
                                            </div>
                                            <div className="main-text font-white">
                                                <p>Criamos materiais visuais com atenção aos mínimos detalhes, garantindo qualidade e impacto.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mb-4">
                                    <div className="content-page-card" data-index="4">
                                        <div className="content">
                                            <div className="main-subtitle font-white">
                                                <h3>Entrega e Ajustes</h3>
                                            </div>
                                            <div className="main-text font-white">
                                                <p>Fornecemos os arquivos em alta qualidade e realizamos ajustes com base no feedback do cliente.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="main-text font-gray mb-4">
                                <p>Você precisa de infográficos para explicar um processo complexo aos seus clientes. Criamos uma peça visual clara e impactante que simplifica as informações, aumenta o entendimento e engaja seu público.</p>
                            </div>

                            <div className="main-subtitle font-gray">
                                <h3>Diferenciais:</h3>
                            </div>

                            <div className="main-text font-gray">
                                <ul>
                                    <li>Foco em design funcional e alinhado aos objetivos de marketing.</li>
                                    <li>Experiência em diversos formatos visuais, desde estáticos até animados.</li>
                                    <li>Uso de tendências de design modernas para manter sua marca atualizada.</li>
                                    <li>Personalização completa para refletir a identidade única da sua empresa.</li>
                                </ul>
                            </div>

                            <div className="main-subtitle font-gray">
                                <h3>Benefícios:</h3>
                            </div>

                            <div className="main-text font-gray">
                                <ul>
                                    <li>Comunicação visual mais clara e eficiente.</li>
                                    <li>Aumento no engajamento e compartilhamento de conteúdos.</li>
                                    <li>Fortalecimento da identidade da marca com materiais profissionais.</li>
                                    <li>Diferenciação da concorrência com designs exclusivos e criativos.</li>
                                </ul>
                                <p>Com a produção visual da T&T Creative Agency, sua marca não será apenas vista, mas lembrada.</p>
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
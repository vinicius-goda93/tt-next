import { Breadcrumb } from "@/components/breadcrumb/page";
import { CTA1 } from "@/components/cta-1/page";
import { Sidebar } from "@/components/sidebar/page";
import Image from "next/image";

const title = 'Design de materiais promocionais'
const description = 'Criamos materiais promocionais de alta qualidade para divulgar sua marca com criatividade.'

export const metadata = {
  title: title + ' | TT Creative',
  description: description,
  openGraph: {
    title: title + ' | TT Creative',
    description: description,
  },
};

export default function DesigneDeMateriaisPromocionais() {
  return (
    <>
      <Breadcrumb title="Design de materiais promocionais" pageId="single-service" />

      <section className="content-page stage-padding pb-0">
        <div className="container-fluid container-xxl">
          <div className="row">
            <div className="col-lg-8">
              <div className="main-title font-gray">
                <h2>Design de materiais promocionais</h2>
              </div>

              <div className="main-text font-gray mb-4">
                <p>Materiais promocionais são ferramentas essenciais para fortalecer a presença da sua marca, transmitir credibilidade e engajar seu público. Na T&T Creative Agency, criamos peças que vão além da estética, unindo design estratégico e funcionalidade para comunicar sua mensagem de forma impactante.</p>
                <p>De cartões de visita a catálogos, desenvolvemos materiais que refletem a identidade da sua marca e atendem às suas necessidades específicas. Cada projeto é pensado para destacar os diferenciais do seu negócio e garantir resultados.</p>
              </div>

              <div className="content-page-img">
                <Image
                  src="/services/internal/design-de-materiais-promocionais.webp"
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
                        <h3>Briefing Personalizado</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Entendemos as demandas do cliente, o objetivo da campanha e o público-alvo.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="content-page-card" data-index="2">
                    <div className="content">
                      <div className="main-subtitle font-white">
                        <h3>Planejamento Criativo</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Desenvolvemos conceitos visuais alinhados à identidade da marca e às tendências do mercado.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="content-page-card" data-index="3">
                    <div className="content">
                      <div className="main-subtitle font-white">
                        <h3>Produção e Finalização</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Criamos peças promocionais, como flyers, banners, folders e brindes, com atenção a cada detalhe.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="content-page-card" data-index="4">
                    <div className="content">
                      <div className="main-subtitle font-white">
                        <h3>Acompanhamento de Produção</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Auxiliamos na entrega dos materiais em formatos ideais para impressão ou distribuição digital.
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
                <p>Sua empresa está participando de um evento e precisa de materiais de alta qualidade para atrair potenciais clientes. Desenvolvemos um kit completo, incluindo brochuras informativas, folders promocionais e cartões de visita com um design elegante e profissional.</p>
              </div>

              <div className="main-subtitle font-gray">
                <h3>Diferenciais:</h3>
              </div>

              <div className="main-text font-gray">
                <ul>
                  <li>Soluções personalizadas para diferentes formatos e objetivos.</li>
                  <li>Alinhamento estratégico com campanhas e eventos.</li>
                  <li>Suporte completo, do planejamento à entrega final.</li>
                </ul>
              </div>

              <div className="main-subtitle font-gray">
                <h3>Benefícios:</h3>
              </div>

              <div className="main-text font-gray">
                <ul>
                  <li>Fortalecimento da imagem profissional da marca.</li>
                  <li>Maior impacto em eventos, feiras e ações promocionais.</li>
                  <li>Comunicação clara e atraente com seu público-alvo.</li>
                </ul>
                <p>Transforme suas ações promocionais com materiais que realmente fazem a diferença.</p>
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
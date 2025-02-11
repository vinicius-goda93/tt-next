import { Breadcrumb } from "@/components/breadcrumb/page";
import { CTA1 } from "@/components/cta-1/page";
import { Sidebar } from "@/components/sidebar/page";
import Image from "next/image";

const title = 'Gestão de Tráfego Pago'
const description = 'Maximize seus resultados com campanhas pagas otimizadas para alcançar o público certo.'

export const metadata = {
  title: title + ' | TT Creative',
  description: description,
  openGraph: {
    title: title + ' | TT Creative',
    description: description,
  },
};

export default function GestaoDeTrafegoPago() {
  return (
    <>
      <Breadcrumb title="Gestão de Tráfego Pago" pageId="single-service" />

      <section className="content-page stage-padding pb-0">
        <div className="container-fluid container-xxl">
          <div className="row">
            <div className="col-lg-8">
              <div className="main-title font-gray">
                <h2>Gestão de Tráfego Pago</h2>
              </div>

              <div className="main-text font-gray mb-4">
                <p>O tráfego pago é uma das formas mais rápidas e eficazes de atrair clientes qualificados para o seu negócio. Com anúncios bem planejados, sua marca pode alcançar milhares de pessoas em poucos dias. Na <strong>T&T Creative Agency</strong>, nossa gestão de tráfego pago é focada em maximizar resultados e otimizar o retorno sobre o investimento (ROI).</p>
                <p>Criamos campanhas altamente segmentadas para Google Ads, Facebook Ads, Instagram Ads e outras plataformas. Nossa abordagem combina criatividade, dados e análises constantes, garantindo que cada centavo investido seja direcionado ao público certo.</p>
              </div>

              <div className="content-page-img">
                <Image
                  src="/services/internal/gestao-de-trafego-pago.webp"
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
                        <h3>Definição de Objetivos</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Alinhamos suas metas, como aumento de vendas, geração de leads ou fortalecimento da marca.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="content-page-card" data-index="2">
                    <div className="content">
                      <div className="main-subtitle font-white">
                        <h3>Segmentação Precisa</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Identificamos o público ideal com base em comportamentos, interesses e localização.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="content-page-card" data-index="3">
                    <div className="content">
                      <div className="main-subtitle font-white">
                        <h3>Criação de Anúncios</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Desenvolvemos peças visuais e textos persuasivos que chamam atenção e convertem.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="content-page-card" data-index="4">
                    <div className="content">
                      <div className="main-subtitle font-white">
                        <h3>Otimização Contínua</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Monitoramos o desempenho da campanha em tempo real, realizando ajustes para maximizar resultados.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 mb-4">
                  <div className="content-page-card" data-index="5">
                    <div className="content">
                      <div className="main-subtitle font-white">
                        <h3>Relatórios Detalhados</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Fornecemos análises claras sobre o impacto das campanhas e sugestões para as próximas etapas.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="main-text font-gray mb-4">
                <p>Você quer aumentar as vendas de um produto específico em um curto período. Criamos anúncios direcionados para o público ideal, otimizando a segmentação e ajustando os lances para garantir o máximo de conversões dentro do seu orçamento.</p>
              </div>

              <div className="main-subtitle font-gray">
                <h3>Diferenciais:</h3>
              </div>

              <div className="main-text font-gray">
                <ul>
                  <li>Foco em conversões reais, não apenas cliques.</li>
                  <li>Estratégias personalizadas para cada objetivo de campanha.</li>
                  <li>Monitoramento em tempo real para ajustes rápidos e eficazes.</li>
                  <li>Relatórios claros e transparentes, com insights acionáveis.</li>
                </ul>
              </div>

              <div className="main-subtitle font-gray">
                <h3>Benefícios:</h3>
              </div>

              <div className="main-text font-gray">
                <ul>
                  <li>Alcance imediato e direcionado para o público ideal.</li>
                  <li>Aumento de conversões e vendas em curto prazo.</li>
                  <li>ROI maximizado com campanhas otimizadas.</li>
                  <li>Fortalecimento da presença digital em várias plataformas.</li>
                </ul>
                <p>Se você deseja acelerar seus resultados e conquistar novos clientes, nossa gestão de tráfego pago é a solução ideal.</p>
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
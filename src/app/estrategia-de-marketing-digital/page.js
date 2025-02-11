import { Breadcrumb } from "@/components/breadcrumb/page";
import { CTA2 } from "@/components/cta-2/page";
import { Sidebar } from "@/components/sidebar/page";
import Image from "next/image";

const title = 'Estratégia de Marketing Digital'
const description = 'Desenvolvemos estratégias personalizadas para potencializar seus resultados no ambiente digital.'

export const metadata = {
  title: title + ' | TT Creative',
  description: description,
  openGraph: {
    title: title + ' | TT Creative',
    description: description,
  },
};

export default function EstrategiaDeMarketingDigital() {
  return (
    <>
      <Breadcrumb title="Estratégia de Marketing Digital" pageId="single-service" />

      <section className="content-page stage-padding pb-0">
        <div className="container-fluid container-xxl">
          <div className="row">
            <div className="col-lg-8">
              <div className="main-title font-gray">
                <h2>Estratégia de Marketing Digital</h2>
              </div>

              <div className="main-text font-gray mb-4">
                <p>No universo digital em constante evolução, ter uma presença online não é suficiente. Sua marca precisa de estratégias bem definidas para se destacar e conquistar um público cada vez mais exigente e informado. Na <strong>T&T Creative Agency</strong>, entendemos que cada negócio possui necessidades específicas e objetivos únicos. Por isso, criamos estratégias de marketing digital personalizadas e orientadas por dados, desenhadas para maximizar seu potencial.</p>
                <p>O processo começa com uma análise detalhada da sua empresa, do mercado em que você atua e do comportamento do seu público-alvo. Utilizamos ferramentas avançadas para identificar tendências, estudar seus concorrentes e mapear oportunidades. A partir disso, criamos um plano estratégico que abrange múltiplos canais e técnicas: SEO, tráfego pago, redes sociais, marketing de conteúdo, entre outros. Nosso objetivo? Garantir que sua marca esteja no lugar certo, no momento certo, falando diretamente com quem importa.</p>
              </div>

              <div className="content-page-img">
                <Image
                  src="/services/internal/estrategia-de-marketing-digital.webp"
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
                        <h3>Diagnóstico Inicial</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Avaliamos sua presença digital atual, identificando pontos fortes, fraquezas e áreas de oportunidade.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="content-page-card" data-index="2">
                    <div className="content">
                      <div className="main-subtitle font-white">
                        <h3>Planejamento Estratégico</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Criamos um plano detalhado, alinhado às suas metas de curto e longo prazo.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="content-page-card" data-index="3">
                    <div className="content">
                      <div className="main-subtitle font-white">
                        <h3>Execução Personalizada</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Implementamos ações focadas em gerar resultados tangíveis e mensuráveis, utilizando as ferramentas e plataformas mais adequadas.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="content-page-card" data-index="4">
                    <div className="content">
                      <div className="main-subtitle font-white">
                        <h3>Acompanhamento e Ajustes</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Monitoramos os resultados continuamente, ajustando estratégias para maximizar o ROI.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="main-text font-gray mb-4">
                <p>Imagine que você deseja aumentar as vendas de um produto específico. Nossa equipe pode desenvolver uma campanha de tráfego pago segmentada, combinada com conteúdos otimizados para SEO, para atrair clientes qualificados e gerar conversões. Ao mesmo tempo, criamos uma estratégia de email marketing para nutrir leads e manter sua marca presente na mente dos consumidores.</p>
              </div>

              <div className="main-subtitle font-gray">
                <h3>Diferenciais:</h3>
              </div>

              <div className="main-text font-gray">
                <ul>
                  <li>Abordagem personalizada, com foco nos seus objetivos.</li>
                  <li>Utilização de dados e análises para tomadas de decisão mais assertivas.</li>
                  <li>Estratégias integradas que combinam diversas técnicas para maior impacto.</li>
                  <li>Suporte contínuo e relatórios detalhados para acompanhar o progresso.</li>
                </ul>
              </div>

              <div className="main-subtitle font-gray">
                <h3>Benefícios:</h3>
              </div>

              <div className="main-text font-gray">
                <ul>
                  <li>Maior visibilidade online e reconhecimento da marca.</li>
                  <li>Estratégias otimizadas que geram resultados mensuráveis.</li>
                  <li>Melhoria do ROI através de ações focadas em conversão.</li>
                  <li>Fortalecimento da conexão com o público-alvo.</li>
                </ul>
                <p>Se você busca uma estratégia de marketing digital que realmente funcione e leve sua marca ao próximo nível, conte conosco. Estamos prontos para transformar seus desafios em oportunidades.</p>
              </div>
            </div>

            <div className="col-lg-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>

      <CTA2 />
    </>
  );
}
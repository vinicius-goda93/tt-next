import { Breadcrumb } from "@/components/breadcrumb/page";
import { CTA1 } from "@/components/cta-1/page";
import { Sidebar } from "@/components/sidebar/page";
import Image from "next/image";

const title = 'Marketing de Conteúdo'
const description = 'Criamos conteúdos estratégicos e relevantes para engajar seu público e fortalecer sua marca no digital.'

export const metadata = {
  title: title + ' | TT Creative',
  description: description,
  openGraph: {
    title: title + ' | TT Creative',
    description: description,
  },
};

export default function MarketingDeConteudo() {
  return (
    <>
      <Breadcrumb title="Marketing de Conteúdo" pageId="single-service" />

      <section className="content-page stage-padding pb-0">
        <div className="container-fluid container-xxl">
          <div className="row">
            <div className="col-lg-8">
              <div className="main-title font-gray">
                <h2>Marketing de Conteúdo</h2>
              </div>

              <div className="main-text font-gray mb-4">
                <p>Nosso serviço de <strong>marketing de conteúdo</strong> começa com uma imersão completa no universo da sua marca. Estudamos quem você é, o que você representa e, mais importante, quem é o seu público. Com base em pesquisas detalhadas, identificamos as dores, os desejos e os interesses da sua audiência. Essa análise se traduz em uma estratégia de conteúdo completa, abrangendo todos os canais relevantes para o seu negócio.</p>
              </div>

              <div className="main-subtitle font-gray">
                <h3>Nosso processo inclui:</h3>
              </div>

              <div className="row">
                <div className="col-lg-6 mb-4">
                  <div className="content-page-card" data-index="1">
                    <div className="content">
                      <div className="main-subtitle font-white">
                        <h3>Planejamento Estratégico</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Identificamos os temas mais relevantes para atrair a atenção do público e alinhamos cada conteúdo aos seus objetivos de negócio.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="content-page-card" data-index="2">
                    <div className="content">
                      <div className="main-subtitle font-white">
                        <h3>Produção de Conteúdo de Alta Qualidade</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Desenvolvemos artigos otimizados para SEO, posts para redes sociais, materiais ricos (como e-books e whitepapers) e até mesmo roteiros para vídeos. Cada peça é pensada para agregar valor e estimular ações.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="content-page-card" data-index="3">
                    <div className="content">
                      <div className="main-subtitle font-white">
                        <h3>Distribuição Estratégica</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Publicamos os conteúdos nos canais certos, no momento certo, garantindo máxima visibilidade e engajamento.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="content-page-card" data-index="4">
                    <div className="content">
                      <div className="main-subtitle font-white">
                        <h3>Análise e Otimização Contínua</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Utilizamos ferramentas avançadas para monitorar o desempenho e ajustar as estratégias conforme necessário, assegurando resultados consistentes.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="main-text font-gray">
                <p>Imagine o <strong>impacto de um blog</strong> que aparece nos primeiros resultados do Google, trazendo <strong>milhares de visitantes</strong> para o seu site todos os meses. Ou de uma <strong>série de posts nas redes sociais</strong> que geram engajamento autêntico e fortalecem sua comunidade. Nosso marketing de conteúdo faz exatamente isso: transforma sua marca em uma autoridade confiável e em um ponto de referência para o público.</p>
              </div>

              <div className="content-page-img">
                <Image
                  src="/services/internal/marketing-de-conteudo.webp"
                  width={1000}
                  height={1000}
                  alt={title}
                  title={title}
                />
              </div>

              <div className="main-subtitle font-gray">
                <h3>Diferenciais:</h3>
              </div>

              <div className="main-text font-gray">
                <ul>
                  <li>Experiência em storytelling para criar conexões emocionais com o público.</li>
                  <li>Produção de conteúdo alinhada às melhores práticas de SEO, garantindo alta visibilidade.</li>
                  <li>Estratégias integradas que unem texto, vídeo e imagem para maior impacto.</li>
                  <li>Relatórios claros e detalhados sobre o desempenho de cada campanha.</li>
                </ul>
              </div>

              <div className="main-subtitle font-gray">
                <h3>Por que escolher a T&T Creative Agency?</h3>
              </div>

              <div className="main-text font-gray">
                <p>Porque acreditamos que o conteúdo é a ponte entre a sua marca e o seu cliente. E não estamos aqui para criar "mais do mesmo". Nosso compromisso é com <strong>conteúdo relevante, que educa, inspira e converte</strong>. Afinal, em um mundo digital tão saturado, sua marca merece ser ouvida, lida e lembrada.</p>
                <ul>
                  <li>Fortalecimento da autoridade da marca, posicionando-a como líder no setor.</li>
                  <li>Maior tráfego orgânico através de conteúdo otimizado para SEO.</li>
                  <li>Engajamento consistente com o público, aumentando a fidelidade e a retenção.</li>
                  <li>Geração de leads qualificados através de materiais que atendem às necessidades do consumidor.</li>
                  <li>Conexão emocional com a audiência, criando relacionamentos duradouros.</li>
                </ul>
                <p>Se você está cansado de criar conteúdos que não geram resultados, ou sente que sua marca tem mais a dizer, estamos prontos para ajudar. <strong>Juntos, vamos contar histórias que fazem a diferença.</strong></p>
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
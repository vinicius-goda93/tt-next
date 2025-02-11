import { Breadcrumb } from "@/components/breadcrumb/page";
import { CTA2 } from "@/components/cta-2/page";
import { Sidebar } from "@/components/sidebar/page";
import Image from "next/image";

const title = 'Gestão de Mídias Sociais'
const description = 'Gerenciamos suas redes sociais com estratégias eficazes para engajar e converter seu público-alvo.'

export const metadata = {
  title: title + ' | TT Creative',
  description: description,
  openGraph: {
    title: title + ' | TT Creative',
    description: description,
  },
};

export default function GestaoDeMidiasSociais() {
  return (
    <>
      <Breadcrumb title="Gestão de Mídias Sociais" pageId="single-service" />

      <section className="content-page stage-padding pb-0">
        <div className="container-fluid container-xxl">
          <div className="row">
            <div className="col-lg-8">
              <div className="main-title font-gray">
                <h2>Gestão de Mídias Sociais</h2>
              </div>

              <div className="main-text font-gray mb-4">
                <p>As <strong>redes sociais são mais do que uma tendência: elas são o principal canal de comunicação entre marcas e consumidores</strong>. Estar presente nelas, no entanto, vai além de postar conteúdos regularmente. É preciso ter uma estratégia clara, que combine criatividade, consistência e análise de resultados. É exatamente isso que oferecemos na <strong>T&T Creative Agency.</strong></p>
                <p>Nosso serviço de <strong>gestão de mídias sociais</strong> não se limita à criação de postagens. Ele abrange todo o ecossistema das redes: <strong>planejamento estratégico, design visual, redação de textos, interação com o público e monitoramento de métricas</strong>. Desenvolvemos conteúdos personalizados que refletem a identidade da sua marca, geram engajamento e fortalecem sua comunidade online.</p>
              </div>

              <div className="content-page-img">
                <Image
                  src="/services/internal/gestao-de-midias-sociais.webp"
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
                        <p>Conhecemos profundamente a história, os valores e o tom de voz da sua empresa.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="content-page-card" data-index="2">
                    <div className="content">
                      <div className="main-subtitle font-white">
                        <h3>Criação de Calendário Editorial</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Planejamos conteúdos estratégicos, alinhados às datas relevantes do seu setor e aos interesses do público.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="content-page-card" data-index="3">
                    <div className="content">
                      <div className="main-subtitle font-white">
                        <h3>Produção de Conteúdo</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Desenvolvemos posts, stories, reels e vídeos criativos e impactantes.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="content-page-card" data-index="4">
                    <div className="content">
                      <div className="main-subtitle font-white">
                        <h3>Gestão e Interação</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Respondemos a comentários, mensagens e mencionamos sua marca, criando um relacionamento genuíno com os seguidores.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 mb-4">
                  <div className="content-page-card" data-index="5">
                    <div className="content">
                      <div className="main-subtitle font-white">
                        <h3>Análise e Relatórios</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Monitoramos métricas como alcance, engajamento e conversões para ajustar continuamente a estratégia.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="main-text font-gray mb-4">
                <p>Sua marca está presente no Instagram, mas o engajamento está baixo. Implementamos um plano de conteúdos interativos, como enquetes e desafios nos stories, combinados com posts otimizados para gerar comentários e compartilhamentos. Em paralelo, trabalhamos na identidade visual para tornar sua página mais atrativa e profissional.</p>
              </div>

              <div className="main-subtitle font-gray">
                <h3>Diferenciais:</h3>
              </div>

              <div className="main-text font-gray">
                <ul>
                  <li>Conteúdo criativo e estratégico, adaptado a cada plataforma.</li>
                  <li>Foco em engajamento genuíno, construindo uma comunidade ativa.</li>
                  <li>Análise contínua de resultados para garantir melhorias constantes.</li>
                  <li>Atendimento ágil e suporte próximo às necessidades do cliente.</li>
                </ul>
              </div>

              <div className="main-subtitle font-gray">
                <h3>Benefícios:</h3>
              </div>

              <div className="main-text font-gray">
                <ul>
                  <li>Fortalecimento da presença digital e aumento do alcance.</li>
                  <li>Engajamento consistente com o público-alvo.</li>
                  <li>Construção de um relacionamento duradouro com os seguidores.</li>
                  <li>Resultados mensuráveis que contribuem para o crescimento da marca.</li>
                </ul>
                <p>Transforme suas redes sociais em ferramentas poderosas de conexão e conversão com a T&T Creative Agency.</p>
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
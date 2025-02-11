import { Breadcrumb } from "@/components/breadcrumb/page";
import { CTA2 } from "@/components/cta-2/page";
import { Sidebar } from "@/components/sidebar/page";
import Image from "next/image";

const title = 'SEO (Search Engine Optimization)'
const description = 'Otimização para mecanismos de busca (SEO) para melhorar o posicionamento do seu site no Google.'

export const metadata = {
  title: title + ' | TT Creative',
  description: description,
  openGraph: {
    title: title + ' | TT Creative',
    description: description,
  },
};

export default function SEO() {
  return (
    <>
      <Breadcrumb title="SEO (Search Engine Optimization)" pageId="single-service" />

      <section className="content-page stage-padding pb-0">
        <div className="container-fluid container-xxl">
          <div className="row">
            <div className="col-lg-8">
              <div className="main-title font-gray">
                <h2>SEO (Search Engine Optimization)</h2>
              </div>

              <div className="main-text font-gray mb-4">
                <p>No vasto oceano digital, onde milhões de páginas competem por atenção, <strong>estar no topo dos resultados de busca não é apenas um desejo: é uma necessidade</strong>. Na <strong>T&T Creative Agency</strong>, utilizamos técnicas avançadas de SEO para garantir que sua marca seja encontrada pelos clientes certos, no momento certo. Nosso foco não é apenas atrair tráfego, mas trazer visitantes qualificados que se transformem em clientes.</p>
              </div>

              <div className="main-subtitle font-gray">
                <h3>Como funciona nosso processo:</h3>
              </div>

              <div className="row">
                <div className="col-lg-6 mb-4">
                  <div className="content-page-card" data-index="1">
                    <div className="content">
                      <div className="main-subtitle font-white">
                        <h3>Pesquisa de Palavras-Chave</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Identificamos os termos mais relevantes para o seu nicho e público-alvo.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="content-page-card" data-index="2">
                    <div className="content">
                      <div className="main-subtitle font-white">
                        <h3>Otimização On-Page</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Ajustamos elementos internos do site, como títulos, descrições, imagens e velocidade de carregamento.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="content-page-card" data-index="3">
                    <div className="content">
                      <div className="main-subtitle font-white">
                        <h3>SEO Técnico</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Corrigimos erros estruturais que podem prejudicar sua posição nos motores de busca.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="content-page-card" data-index="4">
                    <div className="content">
                      <div className="main-subtitle font-white">
                        <h3>Link Building</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Desenvolvemos uma estratégia de links externos e internos para aumentar a autoridade do seu site.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="content-page-card" data-index="5">
                    <div className="content">
                      <div className="main-subtitle font-white">
                        <h3>Produção de Conteúdo Otimizado</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Criamos textos relevantes que atraem tanto os leitores quanto os algoritmos de busca.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="content-page-card" data-index="6">
                    <div className="content">
                      <div className="main-subtitle font-white">
                        <h3>Monitoramento Contínuo</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Utilizamos ferramentas avançadas para acompanhar seu progresso e realizar ajustes necessários.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="main-text font-gray">
                <p>Seu site tem um bom design, mas não aparece nas primeiras páginas do Google. Com nossa estratégia de SEO, trabalhamos na otimização das páginas existentes, criamos conteúdos relevantes e estabelecemos parcerias estratégicas para aumentar a autoridade do seu domínio.</p>
              </div>

              <div className="content-page-img">
                <Image
                  src="/services/internal/seo.webp"
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
                  <li>Estratégias baseadas em dados e análise de concorrência.</li>
                  <li>Expertise em práticas atualizadas de SEO, alinhadas às mudanças dos algoritmos.</li>
                  <li>Relatórios detalhados e transparentes para acompanhar o progresso.</li>
                  <li>Foco em resultados sustentáveis e de longo prazo.</li>
                </ul>
              </div>

              <div className="main-subtitle font-gray">
                <h3>Benefícios:</h3>
              </div>

              <div className="main-text font-gray">
                <ul>
                  <li>Maior visibilidade e tráfego orgânico.</li>
                  <li>Melhoria na experiência do usuário e velocidade do site.</li>
                  <li>Aumento da credibilidade e autoridade da marca.</li>
                  <li>Redução de custos com tráfego pago, graças ao crescimento orgânico.</li>
                </ul>
                <p>Se sua marca quer conquistar o topo dos resultados de busca e ser uma referência no setor, nosso serviço de SEO é a solução ideal.</p>
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
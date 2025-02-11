import { Breadcrumb } from "@/components/breadcrumb/page";
import { CTA2 } from "@/components/cta-2/page";
import { Sidebar } from "@/components/sidebar/page";
import Image from "next/image";

const title = 'Desenvolvimento e Lançamento de Infoprodutos'
const description = 'Criamos e lançamos infoprodutos de sucesso com estratégias eficazes para vendas online.'

export const metadata = {
  title: title + ' | TT Creative',
  description: description,
  openGraph: {
    title: title + ' | TT Creative',
    description: description,
  },
};

export default function DesenvolvimentoELancamentosDeInfoprodutos() {
  return (
    <>
      <Breadcrumb title="Desenvolvimento e Lançamento de Infoprodutos" pageId="single-service" />

      <section className="content-page stage-padding pb-0">
        <div className="container-fluid container-xxl">
          <div className="row">
            <div className="col-lg-8">
              <div className="main-title font-gray">
                <h2>Desenvolvimento e Lançamento de Infoprodutos</h2>
              </div>

              <div className="main-text font-gray mb-4">
                <p>Transformar conhecimento em fonte de receita nunca foi tão estratégico e acessível. No mundo digital, infoprodutos como cursos online, e-books e webinars são formas poderosas de compartilhar expertise, impactar vidas e gerar lucro. Na <strong>T&T Creative Agency</strong>, nosso papel é <strong>transformar sua ideia em um produto digital de sucesso</strong>, cuidando de cada etapa do processo com estratégia e excelência.</p>
                <p>Sabemos que criar e lançar um infoproduto pode ser desafiador. Desde a concepção da ideia até o planejamento do lançamento, cada detalhe conta. É por isso que desenvolvemos um método completo e eficiente que inclui: pesquisa de mercado, estruturação de conteúdo, design, produção de materiais promocionais, estratégia de tráfego pago e acompanhamento pós-lançamento.</p>
              </div>

              <div className="content-page-img">
                <Image
                  src="/services/internal/desenvolvimento-e-lancamento-de-infoprodutos.webp"
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
                        <h3>Pesquisa de Mercado e Público-Alvo</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Identificamos as necessidades do mercado e definimos a persona ideal para o seu infoproduto.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="content-page-card" data-index="2">
                    <div className="content">
                      <div className="main-subtitle font-white">
                        <h3>Planejamento de Conteúdo</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Estruturamos os módulos, aulas ou capítulos, garantindo um fluxo lógico e envolvente.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="content-page-card" data-index="3">
                    <div className="content">
                      <div className="main-subtitle font-white">
                        <h3>Produção do Infoproduto</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Criamos materiais de alta qualidade, PDFs interativos, quizzes e outros formatos.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="content-page-card" data-index="4">
                    <div className="content">
                      <div className="main-subtitle font-white">
                        <h3>Estratégia de Lançamento</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Desenvolvemos campanhas que combinam storytelling, gatilhos mentais e anúncios direcionados para atrair o público certo.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 mb-4">
                  <div className="content-page-card" data-index="5">
                    <div className="content">
                      <div className="main-subtitle font-white">
                        <h3>Pós-Lançamento</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Acompanhamos os resultados, ajustamos estratégias e planejamos as próximas etapas, como upsells ou relançamentos.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="main-text font-gray mb-4">
                <p>Você é especialista em um tema e deseja criar um curso online, mas não sabe por onde começar. Nossa equipe define o tema mais atrativo, estrutura o conteúdo em módulos, grava e edita as aulas e lança o curso com uma campanha estratégica, garantindo um alto impacto desde o início.</p>
              </div>

              <div className="main-subtitle font-gray">
                <h3>Diferenciais:</h3>
              </div>

              <div className="main-text font-gray">
                <ul>
                  <li>Planejamento completo, desde a ideia inicial até o pós-lançamento.</li>
                  <li>Estratégias personalizadas que maximizam vendas e engajamento.</li>
                  <li>Produção de conteúdos com padrão profissional e design moderno.</li>
                  <li>Acompanhamento contínuo para garantir melhorias a cada edição.</li>
                </ul>
              </div>

              <div className="main-subtitle font-gray">
                <h3>Benefícios:</h3>
              </div>

              <div className="main-text font-gray">
                <ul>
                  <li>Monetização eficaz do seu conhecimento.</li>
                  <li>Alcance global para seu conteúdo, sem limites geográficos.</li>
                  <li>Fortalecimento da sua autoridade e reputação no mercado.</li>
                  <li>Geração de receitas recorrentes com lançamentos estruturados.</li>
                </ul>
                <p>Se você quer transformar sua expertise em um negócio digital rentável, conte com nossa experiência para criar infoprodutos que realmente fazem a diferença.</p>
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
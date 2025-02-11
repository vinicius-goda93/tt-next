import { Breadcrumb } from "@/components/breadcrumb/page";
import { CTA1 } from "@/components/cta-1/page";
import { Sidebar } from "@/components/sidebar/page";
import Image from "next/image";

const title = 'Email Marketing'
const description = 'Campanhas de email marketing eficientes para fidelizar clientes e aumentar conversões.'

export const metadata = {
  title: title + ' | TT Creative',
  description: description,
  openGraph: {
    title: title + ' | TT Creative',
    description: description,
  },
};

export default function EmailMarketing() {
  return (
    <>
      <Breadcrumb title="Email Marketing" pageId="single-service" />

      <section className="content-page stage-padding pb-0">
        <div className="container-fluid container-xxl">
          <div className="row">
            <div className="col-lg-8">
              <div className="main-title font-gray">
                <h2>Email Marketing</h2>
              </div>

              <div className="main-text font-gray mb-4">
                <p>O email marketing é uma das ferramentas mais eficazes para manter uma comunicação direta, personalizada e de alta conversão com seu público. Embora muitas empresas usem emails como uma simples forma de divulgação, nós, da <strong>T&T Creative Agency</strong>, transformamos essa ferramenta em um poderoso canal de relacionamento e vendas.</p>
                <p>Criamos campanhas que vão além do envio de mensagens. Desenvolvemos estratégias baseadas no comportamento do público, segmentando listas, personalizando conteúdos e utilizando automações para enviar a mensagem certa, na hora certa. Cada campanha é planejada para gerar impacto, seja para conquistar novos clientes, fidelizar os atuais ou reativar leads que pareciam perdidos.</p>
              </div>

              <div className="content-page-img">
                <Image
                  src="/services/internal/email-marketing.webp"
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
                        <h3>Segmentação de Lista</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Dividimos seu público com base em interesses, comportamento e estágio na jornada do cliente.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="content-page-card" data-index="2">
                    <div className="content">
                      <div className="main-subtitle font-white">
                        <h3>Criação de Conteúdo Personalizado</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Escrevemos emails envolventes que conversam diretamente com as necessidades e desejos de cada segmento.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="content-page-card" data-index="3">
                    <div className="content">
                      <div className="main-subtitle font-white">
                        <h3>Design Atrativo</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Desenvolvemos layouts profissionais e responsivos que chamam a atenção e incentivam cliques.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="content-page-card" data-index="4">
                    <div className="content">
                      <div className="main-subtitle font-white">
                        <h3>Automação e Fluxos de Trabalho</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Implementamos sequências automatizadas para engajar leads e nutrir clientes em potencial.</p>
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
                        <p>Monitoramos métricas como taxa de abertura, cliques e conversões, ajustando as campanhas para maximizar resultados.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="main-text font-gray mb-4">
                <p>Você deseja lançar um novo produto e gerar interesse no seu público. Criamos uma sequência de emails: um teaser para despertar curiosidade, outro com detalhes do produto e um último incentivando a compra com um desconto exclusivo.</p>
              </div>

              <div className="main-subtitle font-gray">
                <h3>Diferenciais:</h3>
              </div>

              <div className="main-text font-gray">
                <ul>
                  <li>Campanhas baseadas em dados para maior relevância e impacto.</li>
                  <li>Automação de processos para economizar tempo e aumentar eficiência.</li>
                  <li>Personalização avançada para criar conexões mais profundas com o público.</li>
                  <li>Relatórios claros e completos para medir o sucesso das campanhas.</li>
                </ul>
              </div>

              <div className="main-subtitle font-gray">
                <h3>Benefícios:</h3>
              </div>

              <div className="main-text font-gray">
                <ul>
                  <li>Aumento significativo na taxa de conversão.</li>
                  <li>Fortalecimento do relacionamento com o público.</li>
                  <li>Retorno sobre investimento mais alto em comparação a outras estratégias.</li>
                  <li>Comunicação direta e eficaz que mantém sua marca presente na mente do cliente.</li>
                </ul>
                <p>Transforme emails em oportunidades de negócio com as estratégias personalizadas da T&T Creative Agency.</p>
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
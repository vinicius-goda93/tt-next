import { Breadcrumb } from "@/components/breadcrumb/page";
import { CTA1 } from "@/components/cta-1/page";
import { Sidebar } from "@/components/sidebar/page";
import Image from "next/image";

const title = 'Desenvolvimento de Sites'
const description = 'Criamos sites modernos, responsivos e otimizados para proporcionar a melhor experiência ao usuário.'

export const metadata = {
  title: title + ' | TT Creative',
  description: description,
  openGraph: {
    title: title + ' | TT Creative',
    description: description,
  },
};

export default function DesenvolvimentoDeSites() {
  return (
    <>
      <Breadcrumb title="Desenvolvimento de Sites" pageId="single-service" />

      <section className="content-page stage-padding pb-0">
        <div className="container-fluid container-xxl">
          <div className="row">
            <div className="col-lg-8">
              <div className="main-title font-gray">
                <h2>Desenvolvimento de Sites</h2>
              </div>

              <div className="main-text font-gray mb-4">
                <p>O site da sua empresa não é apenas uma vitrine online; ele é o ponto central da sua presença digital. É onde visitantes se tornam clientes e onde sua marca realmente ganha vida. Na <strong>T&T Creative Agency</strong>, desenvolvemos sites modernos, funcionais e estrategicamente projetados para oferecer a melhor experiência ao usuário e maximizar conversões.</p>
                <p>Entendemos que um site deve ser mais do que esteticamente bonito. Ele precisa ser responsivo, otimizado para SEO e focado em resultados. Nosso processo inclui uma análise detalhada do seu público-alvo, o desenvolvimento de uma estrutura de navegação intuitiva e a integração de ferramentas essenciais para garantir que seu site funcione como uma máquina de vendas.</p>
              </div>

              <div className="content-page-img">
                <Image
                  src="/services/internal/desenvolvimento-de-sites.webp"
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
                        <p>Analisamos sua marca, seus objetivos e as expectativas do público-alvo para o site.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="content-page-card" data-index="2">
                    <div className="content">
                      <div className="main-subtitle font-white">
                        <h3>Wireframe e Planejamento</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Criamos um esboço detalhado da estrutura do site, definindo as principais páginas e funcionalidades.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="content-page-card" data-index="3">
                    <div className="content">
                      <div className="main-subtitle font-white">
                        <h3>Design Personalizado</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Desenvolvemos layouts modernos e atraentes, alinhados à identidade visual da sua marca.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="content-page-card" data-index="4">
                    <div className="content">
                      <div className="main-subtitle font-white">
                        <h3>Desenvolvimento Técnico</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Construímos o site utilizando as melhores práticas de codificação e integração de ferramentas, como formulários, sistemas de pagamento e chatbots.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="content-page-card" data-index="5">
                    <div className="content">
                      <div className="main-subtitle font-white">
                        <h3>Teste e Lançamento</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Realizamos testes rigorosos para garantir que o site funcione perfeitamente em diferentes dispositivos e navegadores antes do lançamento.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="content-page-card" data-index="6">
                    <div className="content">
                      <div className="main-subtitle font-white">
                        <h3>Manutenção e Suporte</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Oferecemos suporte contínuo para atualizações, correções e melhorias.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="main-text font-gray mb-4">
                <p>Você deseja criar um site para lançar um novo produto ou serviço. Nós planejamos cada detalhe: desde o design da página inicial até a criação de uma área de blog para educar seus clientes e melhorar o SEO. Após o lançamento, seu site atrairá novos leads e impulsionará vendas.</p>
              </div>

              <div className="main-subtitle font-gray">
                <h3>Diferenciais:</h3>
              </div>

              <div className="main-text font-gray">
                <ul>
                  <li>Design personalizado, exclusivo e focado em conversões.</li>
                  <li>Sites responsivos, otimizados para todos os dispositivos.</li>
                  <li>Integrações avançadas, como sistemas de agendamento e e-commerce.</li>
                  <li>Foco na experiência do usuário para aumentar retenção e engajamento.</li>
                </ul>
              </div>

              <div className="main-subtitle font-gray">
                <h3>Benefícios:</h3>
              </div>

              <div className="main-text font-gray">
                <ul>
                  <li>Maior credibilidade e confiança no ambiente digital.</li>
                  <li>Experiência do usuário aprimorada, com navegação fluida.</li>
                  <li>Maior visibilidade nos motores de busca com otimização SEO integrada.</li>
                  <li>Potencial de gerar mais vendas e leads com um site estrategicamente planejado.</li>
                </ul>
                <p>Seu site é sua porta de entrada para o mundo digital. Deixe nossa equipe criar um site que seja funcional, atraente e projetado para resultados.</p>
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
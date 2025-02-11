import { Breadcrumb } from "@/components/breadcrumb/page";
import { CTA2 } from "@/components/cta-2/page";
import { Sidebar } from "@/components/sidebar/page";
import Image from "next/image";

const title = 'Design para Redes Sociais'
const description = 'Artes criativas e personalizadas para aumentar o impacto da sua marca nas redes sociais.'

export const metadata = {
  title: title + ' | TT Creative',
  description: description,
  openGraph: {
    title: title + ' | TT Creative',
    description: description,
  },
};

export default function DesigneDeRedesSociais() {
  return (
    <>
      <Breadcrumb title="Design para Redes Sociais" pageId="single-service" />

      <section className="content-page stage-padding pb-0">
        <div className="container-fluid container-xxl">
          <div className="row">
            <div className="col-lg-8">
              <div className="main-title font-gray">
                <h2>Design para Redes Sociais</h2>
              </div>

              <div className="main-text font-gray mb-4">
                <p>Nas redes sociais, a primeira impressão é visual. Um design bem-feito não apenas atrai o olhar, mas também comunica os valores da sua marca e incentiva a interação. O serviço de design para redes sociais da T&T Creative Agency transforma suas páginas em vitrines profissionais, alinhadas à identidade da sua marca e às expectativas do público.</p>
                <p>Criamos designs personalizados e criativos, desenvolvendo conteúdo visual que vai do feed ao story, sempre com o objetivo de destacar sua marca e aumentar o engajamento. Nosso trabalho combina estética, funcionalidade e estratégia para impulsionar sua presença digital.</p>
              </div>

              <div className="content-page-img">
                <Image
                  src="/services/internal/design-para-redes-sociais.webp"
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
                        <h3>Briefing Detalhado</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Entendemos a fundo a identidade visual da sua marca e as preferências do público-alvo.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="content-page-card" data-index="2">
                    <div className="content">
                      <div className="main-subtitle font-white">
                        <h3>Planejamento de Estilo</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Desenvolvemos templates únicos e consistentes, alinhados à paleta de cores e tipografia da marca.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="content-page-card" data-index="3">
                    <div className="content">
                      <div className="main-subtitle font-white">
                        <h3>Produção de Artes</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Criamos posts, stories, reels e anúncios com foco em atração e conversão.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="content-page-card" data-index="4">
                    <div className="content">
                      <div className="main-subtitle font-white">
                        <h3>Ajustes e Aprovações</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Trabalhamos lado a lado com você para garantir que cada peça esteja alinhada às expectativas.
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
                <p>Sua marca quer lançar um produto e precisa de uma campanha visualmente atrativa no Instagram. Desenvolvemos uma sequência de posts, stories e reels com design moderno, destacando os benefícios do produto e gerando expectativa no público.</p>
              </div>

              <div className="main-subtitle font-gray">
                <h3>Diferenciais:</h3>
              </div>

              <div className="main-text font-gray">
                <ul>
                  <li>Design exclusivo e estratégico, adaptado para cada plataforma.</li>
                  <li>Foco em tendências visuais e na experiência do usuário.</li>
                  <li>Alinhamento entre estética e mensagem, garantindo impacto.</li>
                </ul>
              </div>

              <div className="main-subtitle font-gray">
                <h3>Benefícios:</h3>
              </div>

              <div className="main-text font-gray">
                <ul>
                  <li>Aumento do engajamento e reconhecimento da marca.</li>
                  <li>Profissionalização da presença nas redes sociais.</li>
                  <li>Conteúdos visualmente atrativos que incentivam interações e conversões.</li>
                </ul>
                <p>Transforme suas redes sociais com designs que comunicam, conectam e convertem com a T&T Creative Agency.</p>
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
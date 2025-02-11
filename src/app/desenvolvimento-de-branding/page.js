import { Breadcrumb } from "@/components/breadcrumb/page";
import { CTA2 } from "@/components/cta-2/page";
import { Sidebar } from "@/components/sidebar/page";
import Image from "next/image";

const title = 'Desenvolvimento de Branding'
const description = 'Construímos marcas fortes e memoráveis com estratégias completas de branding.'

export const metadata = {
  title: title + ' | TT Creative',
  description: description,
  openGraph: {
    title: title + ' | TT Creative',
    description: description,
  },
};

export default function DesenvolvimentoDeBranding() {
  return (
    <>
      <Breadcrumb title="Desenvolvimento de Branding" pageId="single-service" />

      <section className="content-page stage-padding pb-0">
        <div className="container-fluid container-xxl">
          <div className="row">
            <div className="col-lg-8">
              <div className="main-title font-gray">
                <h2>Desenvolvimento de Branding</h2>
              </div>

              <div className="main-text font-gray mb-4">
                <p>Branding é muito mais do que criar uma identidade visual. É sobre contar a história da sua marca, transmitir seus valores e conectar-se emocionalmente com o público. Na T&T Creative Agency, oferecemos um serviço completo de desenvolvimento de branding, pensado para posicionar sua empresa de forma única e memorável no mercado.</p>
                <p>Nosso processo de branding vai além do design. Trabalhamos estrategicamente para construir uma marca forte, com uma identidade que se destaque e seja facilmente reconhecida. Combinamos criatividade, análise de mercado e expertise para criar uma experiência marcante, do primeiro contato à fidelização do cliente.</p>

              </div>

              <div className="content-page-img">
                <Image
                  src="/services/internal/desenvolvimento-de-branding.webp"
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
                        <p>Entendemos a essência da sua empresa, seus valores, objetivos e mercado-alvo para criar uma marca que realmente represente você.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="content-page-card" data-index="2">
                    <div className="content">
                      <div className="main-subtitle font-white">
                        <h3>Análise de Concorrência</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Estudamos o mercado e os concorrentes para identificar oportunidades e diferenciais competitivos.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="content-page-card" data-index="3">
                    <div className="content">
                      <div className="main-subtitle font-white">
                        <h3>Definição de Identidade</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Desenvolvemos elementos como nome, logotipo, cores, tipografia, tom de voz e outros aspectos que formam a personalidade da marca.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="content-page-card" data-index="4">
                    <div className="content">
                      <div className="main-subtitle font-white">
                        <h3>Criação do Manual da Marca</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Documentamos as diretrizes para o uso correto da identidade visual e verbal, garantindo consistência em todos os canais de comunicação.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 mb-4">
                  <div className="content-page-card" data-index="5">
                    <div className="content">
                      <div className="main-subtitle font-white">
                        <h3>Posicionamento de Marca</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Ajudamos sua marca a ocupar um espaço único na mente e no coração do consumidor.
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
                <p>Sua marca é nova no mercado e precisa se destacar em um setor competitivo. Desenvolvemos uma identidade visual moderna e profissional, com uma narrativa que transmite confiança e inovação. Além disso, criamos um manual de aplicação para garantir consistência em todas as peças publicitárias e redes sociais.</p>
              </div>

              <div className="main-subtitle font-gray">
                <h3>Diferenciais:</h3>
              </div>

              <div className="main-text font-gray">
                <ul>
                  <li>Processo personalizado e colaborativo, adaptado às necessidades de cada cliente.</li>
                  <li>Criação de marcas que contam histórias autênticas e geram conexão emocional.</li>
                  <li>Alinhamento estratégico com as tendências e demandas do mercado.</li>
                </ul>
              </div>

              <div className="main-subtitle font-gray">
                <h3>Benefícios:</h3>
              </div>

              <div className="main-text font-gray">
                <ul>
                  <li>Reconhecimento e lembrança da marca no mercado.</li>
                  <li>Maior confiança e credibilidade junto ao público.</li>
                  <li>Conexão emocional com os clientes, criando fidelidade e valor de longo prazo.</li>
                </ul>
                <p>Transforme sua empresa em uma marca poderosa e memorável com o serviço de branding da T&T Creative Agency.</p>
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
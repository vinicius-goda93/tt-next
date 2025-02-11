import { CTA2 } from "@/components/cta-2/page";
import { CTA1 } from "@/components/cta-1/page";
import { OurTeam } from "@/components/our-team/page";
import { ContactSection } from "@/components/contact-section/page";
import Link from "next/link";
import Image from "next/image";


const title = 'TT Creative – Marketing Digital e Branding'
const description = 'A TT Creative oferece soluções em marketing digital, branding e estratégias personalizadas para impulsionar sua marca e alcançar resultados reais.'

export const metadata = {
  title: title,
  description: description,
  openGraph: {
    title: title,
    description: description,
  },
};

export default function Home() {
  return (
    <>

      <section className="banner stage-padding">
        <div className="container-fluid container-xxl">
          <div className="row">
            <div className="col-lg-6">
              <div className="banner-content">
                <div className="main-title font-white">
                  <h1>TTCreative, a melhor agência para você!</h1>
                </div>
                <div className="main-text font-white">
                  <p>Na T&T Creative Agency, acreditamos que o marketing digital é a chave para o crescimento sustentável dos negócios. Oferecemos soluções inovadoras e personalizadas que geram resultados mensuráveis, com um foco especial em empoderar empreendedores, especialmente mulheres. </p>
                  <p>Descubra como podemos transformar sua presença digital em uma poderosa ferramenta de crescimento.</p>
                </div>

                <Link href="/solucoes" className="main-button">Conheça os serviços que oferecemos</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services stage-padding">
        <div className="container-fluid container-xxl">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <div className="main-title font-gray">
                <h2>Soluções em marketing para você</h2>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="main-text font-gray">
                <p>Entendemos que cada negócio é único e, por isso, oferecemos soluções de marketing personalizadas, focadas em resultados reais. Combinamos criatividade, tecnologia e estratégias eficazes para produzir sua marca e atingir seus objetivos de forma assertiva e mensurável.</p>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 mb-24">
              <div className="main-card">
                <div className="main-card-img">
                  <Image
                    src="/services/estrategia-de-marketing.svg"
                    width={1000}
                    height={1000}
                    alt="Estratégia de Marketing"
                    title="Estratégia de Marketing"
                  />
                </div>

                <div className="main-card-content">
                  <div className="main-subtitle font-gray">
                    <h3>Estratégia de Marketing</h3>
                  </div>

                  <div>
                    <div className="main-text font-gray">
                      <p>No universo digital em constante evolução, ter uma presença online não é suficiente. Sua marca precisa de estratégias bem definidas para se destacar e conquistar um público...</p>
                    </div>

                    <div className="main-card-double-buttons">
                      <Link href="estrategia-de-marketing-digital" className="second-button">
                        <span> Saiba mais </span>
                      </Link>
                      <Link href="https://api.whatsapp.com/send/?phone=5511963112570" target="_blank" className="main-button"> Whatsapp </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-24">
              <div className="main-card">
                <div className="main-card-img">
                  <Image
                    src="/services/gestao-de-midias-sociais.svg"
                    width={1000}
                    height={1000}
                    alt="Gestão de Mídias Sociais"
                    title="Gestão de Mídias Sociais"
                  />
                </div>

                <div className="main-card-content">
                  <div className="main-subtitle font-gray">
                    <h3>Gestão de Mídias Sociais</h3>
                  </div>

                  <div>
                    <div className="main-text font-gray">
                      <p>As redes sociais são mais do que uma tendência: elas são o principal canal de comunicação entre marcas e consumidores. Estar presente nelas, no entanto, vai além de postar...</p>
                    </div>

                    <div className="main-card-double-buttons">
                      <Link href="gestao-de-midias-sociais" className="second-button">
                        <span> Saiba mais </span>
                      </Link>
                      <Link href="https://api.whatsapp.com/send/?phone=5511963112570" target="_blank" className="main-button"> Whatsapp </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-24">
              <div className="main-card">
                <div className="main-card-img">
                  <Image
                    src="/services/marketing-de-conteudo.svg"
                    width={1000}
                    height={1000}
                    alt="Marketing de Conteúdo"
                    title="Marketing de Conteúdo"
                  />
                </div>

                <div className="main-card-content">
                  <div className="main-subtitle font-gray">
                    <h3>Marketing de Conteúdo</h3>
                  </div>

                  <div>
                    <div className="main-text font-gray">
                      <p>Nosso serviço de marketing de conteúdo começa com uma imersão completa no universo da sua marca. Estudamos quem você é, o que você representa...</p>
                    </div>

                    <div className="main-card-double-buttons">
                      <Link href="marketing-de-conteudo" className="second-button">
                        <span> Saiba mais </span>
                      </Link>
                      <Link href="https://api.whatsapp.com/send/?phone=5511963112570" target="_blank" className="main-button"> Whatsapp </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about stage-padding">
        <div className="container-fluid container-xxl">
          <div className="row">
            <div className="col-xl-6 col-lg-7 mb-5 mb-lg-0">
              <div className="about-img">
                <Image
                  src="/about-img.png"
                  width={1000}
                  height={1000}
                  alt="Conheça a TT Creative"
                  title="Conheça a TT Creative"
                />
              </div>
            </div>

            <div className="offset-xl-1 col-lg-5 d-flex align-items-center">
              <div className="about-content">
                <div className="main-title font-white">
                  <h2>Uma empresa de confiança: TT Creative</h2>
                </div>

                <div className="main-text font-white">
                  <p>Na T&T Creative Agency, nosso processo é projetado para ser eficiente e altamente eficaz, garantindo que cada etapa do seu projeto seja cuidadosamente executada para alcançar os melhores resultados possíveis. Combinamos estratégia, criatividade e tecnologia para otimizar o desempenho de nossas campanhas. </p>
                </div>

                <div className="main-subtitle font-white">
                  <h3>Por que escolher a Creative</h3>
                </div>

                <div className="row mb-24">
                  <div className="col-xl-6 col-lg-12 col-sm-6">
                    <div className="vantages-card font-white">
                      <div className="vantages-card-border">
                        <div className="icon">
                          <Image
                            src="/icons/ico-check.svg"
                            width={37}
                            height={27}
                            alt="Processo Otimizado"
                            title="Processo Otimizado"
                          />
                        </div>
                        <div className="content">
                          <span>Processo Otimizado</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-6 col-lg-12 col-sm-6">
                    <div className="vantages-card font-white">
                      <div className="vantages-card-border">
                        <div className="icon">
                          <Image
                            src="/icons/ico-check.svg"
                            width={37}
                            height={27}
                            alt="Suporte Qualificado"
                            title="Suporte Qualificado"
                          />
                        </div>
                        <div className="content">
                          <span>Suporte Qualificado</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="main-text font-white">
                  <p>Contamos com uma equipe altamente qualificada, especializada em diversas áreas do marketing digital. Nosso compromisso é oferecer um suporte completo e personalizado, garantindo que suas necessidades sejam atendidas com excelência e que sua empresa receba a atenção que merece.</p>
                </div>
                <Link href="/agencia" className="main-button">Nos conheça melhor</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA1 pageId="home" />

      <OurTeam pageId="home" />

      <CTA2 />

      <ContactSection />

    </>
  );
}
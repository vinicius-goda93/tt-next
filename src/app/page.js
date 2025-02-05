import { CTA2 } from "@/components/cta-2/page";
import { CTA1 } from "@/components/cta1/page";
import { FormCustom } from "@/components/form/page";
import { OurTeam } from "@/components/our-team/page";
import Link from "next/link";
import Image from "next/image";

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

                <Link href="#" className="main-button">Conheça os serviços que oferecemos</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services stage-padding <?= $pageId == 'services' ? 'pb-0' : '' ?>">
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
                  {/* <img src="img/services/estrategia-de-marketing.svg" alt="Estratégia de Marketing" title="Estratégia de Marketing"> */}
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
                      <Link href="<?= $empressWhatsappLink ?>" target="_blank" className="main-button"> Whatsapp </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-24">
              <div className="main-card">
                <div className="main-card-img">
                  {/* <img src="img/services/gestao-de-midias-sociais.svg" alt="Gestão de Mídias Sociais" title="Gestão de Mídias Sociais"> */}
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
                      <Link href="<?= $empressWhatsappLink ?>" target="_blank" className="main-button"> Whatsapp </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-24">
              <div className="main-card">
                <div className="main-card-img">
                  {/* <img src="img/services/marketing-de-conteudo.svg" alt="Marketing de Conteúdo" title="Marketing de Conteúdo"> */}
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
                      <Link href="<?= $empressWhatsappLink ?>" target="_blank" className="main-button"> Whatsapp </Link>
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
                {/* <img src="img/about-img.png" alt="Conheça a TT Creative" title="Conheça a TT Creative"> */}
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
                          {/* <img src="img/icons/ico-check.svg" alt="Processo Otimizado" title="Processo Otimizado"> */}
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
                          {/* <img src="img/icons/ico-check.svg" alt="Suporte Qualificado" title="Suporte Qualificado"> */}
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
                <Link href="escritorio-de-advocacia" className="main-button">Nos conheça melhor</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA1 />

      <OurTeam />

      <CTA2 />

      <section className="contact stage-padding">
        <div className="container-fluid container-xxl">
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0 d-flex align-items-center">
              <div>
                <div className="main-title font-white">
                  <h2>Entre em contato com nossos consultores especializados</h2>
                </div>

                <div className="main-text font-white">
                  <p>Estamos aqui para ajudar sua marca a alcançar novos patamares. Preencha o formulário ao lado e fale com nossa equipe. Seja para tirar dúvidas, solicitar uma proposta ou entender como podemos impulsionar sua empresa, estamos prontos para atender você com atenção e soluções personalizadas. </p>
                </div>

                <div className="contact-img">
                  {/* <img src="img/contact-img.png" alt="Entre em contato com a TT Creative" title="Entre em contato com a TT Creative"> */}
                </div>
              </div>
            </div>

            <div className="col-lg-1 col-2 d-flex align-items-end justify-content-center">
              <div className="contact-icons">
                <Link href="<?= $empressWhatsappLink ?>" target="_blank">
                  {/* <img src="img/icons/ico-whatsapp-white.svg" alt="Entre em contato pelo nosso Whatsapp" title="Entre em contato pelo nosso Whatsapp"> */}
                </Link>
                <Link href="<?= $linkedinLink ?>" target="_blank">
                  {/* <img src="img/icons/ico-linkedin-white.svg" alt="LinkedIn da TT Creative" title="LinkedIn da TT Creative"> */}
                </Link>
                <Link href="<?= $instagramLink ?>" target="_blank">
                  {/* <img src="img/icons/ico-instagram-white.svg" alt="Instagram da TT Creative" title="Instagram da TT Creative"> */}
                </Link>
                <Link href="<?= $facebookLink ?>" target="_blank">
                  {/* <img src="img/icons/ico-facebook-white.svg" alt="Facebook da TT Creative" title="Facebook da TT Creative"> */}
                </Link>
                <Link href="<?= $tiktokLink ?>" target="_blank">
                  {/* <img src="img/icons/ico-tiktok-white.svg" alt="TikTok da TT Creative" title="TikTok da TT Creative"> */}
                </Link>
                <Link href="<?= $threadsLink ?>" target="_blank">
                  {/* <img src="img/icons/ico-threads-white.svg" alt="Threads da TT Creative" title="Threads da TT Creative"> */}
                </Link>
                <Link href="<?= $youtubeLink ?>" target="_blank">
                  {/* <img src="img/icons/ico-youtube-white.svg" alt="Youtube da TT Creative" title="Youtube da TT Creative"> */}
                </Link>
              </div>
            </div>

            <div className="col-lg-5 col-10">
              <div className="contact-form-box">
                <div className="main-text font-dark">
                  <p>Vamos construir juntos o sucesso da sua marca!</p>
                </div>

                <FormCustom />
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
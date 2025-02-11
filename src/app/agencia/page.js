import { Breadcrumb } from "@/components/breadcrumb/page";
import { OurTeam } from "@/components/our-team/page";
import Image from "next/image";
import Link from "next/link";

const title = 'A Agência'
const description = 'Conheça a TT Creative, uma agência especializada em marketing digital, branding e estratégias para impulsionar negócios.'

export const metadata = {
  title: title + ' | TT Creative',
  description: description,
  openGraph: {
    title: title + ' | TT Creative',
    description: description,
  },
};

export default function Agencia() {
  return (
    <>
      <Breadcrumb title="Sobre a TT Creative" pageId="about" />

      <section className="about stage-padding about-page">
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
                  <p>Na TT Creative Agency, cada projeto é desenvolvido com eficiência, estratégia e criatividade. Nosso objetivo é garantir que cada etapa do processo seja cuidadosamente planejada e executada para entregar os melhores resultados.</p>
                  <p>Combinamos expertise em marketing digital, design e branding para otimizar a performance das marcas que confiam em nosso trabalho. Utilizamos tecnologia de ponta e um olhar atento às tendências do mercado para criar campanhas personalizadas que conectam marcas ao público certo.</p>
                  <p>Somos mais que uma agência; somos parceiros na construção de histórias de sucesso. </p>
                  <p>Vamos juntos transformar o potencial da sua marca em resultados que impactam!</p>
                </div>

                <Link href="https://api.whatsapp.com/send/?phone=5511963112570" className="main-button">Entre em contato consoco</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="missions stage-padding">
        <div className="container-fluid container-xxl">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <div className="main-title font-white">
                <h2>A missão, visão e os valores que seguimos:</h2>
              </div>
            </div>
            <div className="col-lg-10">
              <div className="main-text font-white">
                <p>Nossa agência tem como objetivo ajudar empreendedores a alcançar seus objetivos de negócios por meio de estratégias de marketing inovadoras, personalizadas e eficazes. Com a missão de ampliar a visibilidade, aumentar o engajamento e contribuir o crescimento sustentável de nossos clientes, buscamos ser uma referência no mercado, reconhecido pela excelência, inovação e pelo compromisso com o sucesso de cada cliente.</p>
                <p>Acreditamos no empoderamento, na inovação e na inclusão, trabalhando com integridade e excelência para entregar soluções que superem as expectativas. Valorizamos a colaboração estreita com nossos clientes e promovemos práticas que incentivam a sustentabilidade, sempre com o objetivo de transformar a visão do público perante a marca.</p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 mb-24">
              <div className="missions-card">
                <div className="missions-content">
                  <div className="icon">
                    {/* <img src="/icons/ico-mission.svg" alt="Missão da TT Creative" title="Missão da TT Creative"> */}
                    <Image
                      src="/icons/ico-mission.svg"
                      width={1000}
                      height={1000}
                      alt="Missão da TT Creative"
                      title="Missão da TT Creative"
                    />
                  </div>

                  <div className="main-subtitle font-white">
                    <h3>Missão</h3>
                  </div>

                  <div className="main-text font-white">
                    <p> Nossa missão é guiar empreendedores, alcançar seus objetivos de negócios através de estratégias de marketing inovadoras, personalizadas e eficazes. Nos dedicamos a fornecer soluções de marketing que ampliem a visibilidade, aumentem o engajamento e impulsionem o crescimento sustentável de nossos clientes. </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-24">
              <div className="missions-card">
                <div className="missions-content">
                  <div className="icon">
                    {/* <img src="/icons/ico-vision.svg" alt="Visão da TT Creative" title="Visão da TT Creative"> */}
                    <Image
                      src="/icons/ico-vision.svg"
                      width={1000}
                      height={1000}
                      alt="Visão da TT Creative"
                      title="Visão da TT Creative"
                    />
                  </div>

                  <div className="main-subtitle font-white">
                    <h3>Visão</h3>
                  </div>

                  <div className="main-text font-white">
                    <p> Ser a agência de marketing de referência para empreendedores, reconhecida pela excelência, inovação e compromisso com o sucesso de nossos clientes. Queremos criar um ambiente onde empreendedores se sintam apoiados e inspirados a transformar suas ideias em realidades prósperas. </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 mb-24">
              <div className="missions-card">
                <div className="missions-content">
                  <div className="icon">
                    {/* <img src="/icons/ico-values.svg" alt="Valores da TT Creative" title="Valores da TT Creative"> */}
                    <Image
                      src="/icons/ico-values.svg"
                      width={1000}
                      height={1000}
                      alt="Valores da TT Creative"
                      title="Valores da TT Creative"
                    />
                  </div>

                  <div className="main-subtitle font-white">
                    <h3>Valores</h3>
                  </div>

                  <div className="main-text font-white">
                    <p>Os valores da empresa incluem empoderamento, inovação, inclusão e excelência, com foco em fornecer suporte, soluções criativas e qualidade aos clientes. Priorizamos a integridade, colaboração e práticas sustentáveis para promover o crescimento ético e sustentável dos negócios.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OurTeam />
    </>
  );
}

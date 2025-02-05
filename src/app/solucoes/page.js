import { CTA1 } from "@/components/cta1/page";
import Image from "next/image";

export default function Soulucoes() {
  return (
    <>
      <section className="services stage-padding pb-0">
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
                      <a href="estrategia-de-marketing-digital" className="second-button">
                        <span> Saiba mais </span>
                      </a>
                      <a href="<?= $empressWhatsappLink ?>" target="_blank" className="main-button"> Whatsapp </a>
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
                      <a href="gestao-de-midias-sociais" className="second-button">
                        <span> Saiba mais </span>
                      </a>
                      <a href="<?= $empressWhatsappLink ?>" target="_blank" className="main-button"> Whatsapp </a>
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
                      <a href="marketing-de-conteudo" className="second-button">
                        <span> Saiba mais </span>
                      </a>
                      <a href="<?= $empressWhatsappLink ?>" target="_blank" className="main-button"> Whatsapp </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-24">
              <div className="main-card">
                <div className="main-card-img">
                  {/* <img src="img/services/email-marketing.svg" alt="Email Marketing" title="Email Marketing"> */}
                </div>

                <div className="main-card-content">
                  <div className="main-subtitle font-gray">
                    <h3>Email Marketing</h3>
                  </div>

                  <div>
                    <div className="main-text font-gray">
                      <p>O email marketing é uma das ferramentas mais eficazes para manter uma comunicação direta, personalizada e de alta conversão com seu público. Embora muitas empresas usem...</p>
                    </div>

                    <div className="main-card-double-buttons">
                      <a href="email-marketing" className="second-button">
                        <span> Saiba mais </span>
                      </a>
                      <a href="<?= $empressWhatsappLink ?>" target="_blank" className="main-button"> Whatsapp </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-24">
              <div className="main-card">
                <div className="main-card-img">
                  {/* <img src="img/services/desenvolvimento-e-lancamento-de-infoprodutos.svg" alt="Desenvolvimento e Lançamento de Infoprodutos" title="Desenvolvimento e Lançamento de Infoprodutos"> */}
                </div>

                <div className="main-card-content">
                  <div className="main-subtitle font-gray">
                    <h3>Desenvolvimento e Lançamento de Infoprodutos</h3>
                  </div>

                  <div>
                    <div className="main-text font-gray">
                      <p>Transformar conhecimento em fonte de receita nunca foi tão estratégico e acessível. No mundo digital, infoprodutos como cursos online, e-books e webinars são formas poderosas de...</p>
                    </div>

                    <div className="main-card-double-buttons">
                      <a href="desenvolvimento-e-lancamento-de-infoprodutos" className="second-button">
                        <span> Saiba mais </span>
                      </a>
                      <a href="<?= $empressWhatsappLink ?>" target="_blank" className="main-button"> Whatsapp </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-24">
              <div className="main-card">
                <div className="main-card-img">
                  {/* <img src="img/services/consultoria-de-presenca-online.svg" alt="Consultoria de Presença Online" title="Consultoria de Presença Online"> */}
                </div>

                <div className="main-card-content">
                  <div className="main-subtitle font-gray">
                    <h3>Consultoria de Presença Online</h3>
                  </div>

                  <div>
                    <div className="main-text font-gray">
                      <p>No ambiente digital, sua presença online é o reflexo direto da sua marca. Um site desatualizado, redes sociais inativas ou uma comunicação incoerente podem comprometer a imagem...</p>
                    </div>

                    <div className="main-card-double-buttons">
                      <a href="consultoria-de-presenca-online" className="second-button">
                        <span> Saiba mais </span>
                      </a>
                      <a href="<?= $empressWhatsappLink ?>" target="_blank" className="main-button"> Whatsapp </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-24">
              <div className="main-card">
                <div className="main-card-img">
                  {/* <img src="img/services/gestao-de-eventos-e-webinars.svg" alt="Gestão de Eventos e Webinars" title="Gestão de Eventos e Webinars"> */}
                </div>

                <div className="main-card-content">
                  <div className="main-subtitle font-gray">
                    <h3>Gestão de Eventos e Webinars</h3>
                  </div>

                  <div>
                    <div className="main-text font-gray">
                      <p>Eventos e webinars são poderosas ferramentas para engajar seu público, gerar leads qualificados e posicionar sua marca como referência no mercado. No entanto, o sucesso...</p>
                    </div>

                    <div className="main-card-double-buttons">
                      <a href="gestao-de-eventos-e-webinars" className="second-button">
                        <span> Saiba mais </span>
                      </a>
                      <a href="<?= $empressWhatsappLink ?>" target="_blank" className="main-button"> Whatsapp </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-24">
              <div className="main-card">
                <div className="main-card-img">
                  {/* <img src="img/services/desenvolvimento-de-branding.svg" alt="Desenvolvimento de Branding" title="Desenvolvimento de Branding"> */}
                </div>

                <div className="main-card-content">
                  <div className="main-subtitle font-gray">
                    <h3>Desenvolvimento de Branding</h3>
                  </div>

                  <div>
                    <div className="main-text font-gray">
                      <p>Branding é muito mais do que criar uma identidade visual. É sobre contar a história da sua marca, transmitir seus valores e conectar-se emocionalmente com o público.</p>
                    </div>

                    <div className="main-card-double-buttons">
                      <a href="desenvolvimento-de-branding" className="second-button">
                        <span> Saiba mais </span>
                      </a>
                      <a href="<?= $empressWhatsappLink ?>" target="_blank" className="main-button"> Whatsapp </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-24">
              <div className="main-card">
                <div className="main-card-img">
                  {/* <img src="img/services/gestao-de-trafego-pago.svg" alt="Gestão de Tráfego Pago" title="Gestão de Tráfego Pago"> */}
                </div>

                <div className="main-card-content">
                  <div className="main-subtitle font-gray">
                    <h3>Gestão de Tráfego Pago</h3>
                  </div>

                  <div>
                    <div className="main-text font-gray">
                      <p>O tráfego pago é uma das formas mais rápidas e eficazes de atrair clientes qualificados para o seu negócio. Com anúncios bem planejados, sua marca pode alcançar milhares de pessoas em</p>
                    </div>

                    <div className="main-card-double-buttons">
                      <a href="gestao-de-trafego-pago" className="second-button">
                        <span> Saiba mais </span>
                      </a>
                      <a href="<?= $empressWhatsappLink ?>" target="_blank" className="main-button"> Whatsapp </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-24">
              <div className="main-card">
                <div className="main-card-img">
                  {/* <img src="img/services/seo.svg" alt="SEO" title="SEO"> */}
                </div>

                <div className="main-card-content">
                  <div className="main-subtitle font-gray">
                    <h3>SEO</h3>
                  </div>

                  <div>
                    <div className="main-text font-gray">
                      <p>No vasto oceano digital, onde milhões de páginas competem por atenção, estar no topo dos resultados de busca não é apenas um desejo: é uma necessidade...</p>
                    </div>

                    <div className="main-card-double-buttons">
                      <a href="seo" className="second-button">
                        <span> Saiba mais </span>
                      </a>
                      <a href="<?= $empressWhatsappLink ?>" target="_blank" className="main-button"> Whatsapp </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-24">
              <div className="main-card">
                <div className="main-card-img">
                  {/* <img src="img/services/identidade-visual.svg" alt="Identidade Visual" title="Identidade Visual"> */}
                </div>

                <div className="main-card-content">
                  <div className="main-subtitle font-gray">
                    <h3>Identidade Visual</h3>
                  </div>

                  <div>
                    <div className="main-text font-gray">
                      <p>Uma identidade visual forte e coesa é a alma da sua marca. Ela é o que diferencia seu negócio em um mercado saturado e cria uma conexão emocional com o público...</p>
                    </div>

                    <div className="main-card-double-buttons">
                      <a href="indentidade-visual" className="second-button">
                        <span> Saiba mais </span>
                      </a>
                      <a href="<?= $empressWhatsappLink ?>" target="_blank" className="main-button"> Whatsapp </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-24">
              <div className="main-card">
                <div className="main-card-img">
                  {/* <img src="img/services/design-para-redes-sociais.svg" alt="Design para redes sociais" title="Design para redes sociais"> */}
                </div>

                <div className="main-card-content">
                  <div className="main-subtitle font-gray">
                    <h3>Design para redes sociais</h3>
                  </div>

                  <div>
                    <div className="main-text font-gray">
                      <p>Nas redes sociais, a primeira impressão é visual. Um design bem-feito não apenas atrai o olhar, mas também comunica os valores da sua marca e incentiva a interação.</p>
                    </div>

                    <div className="main-card-double-buttons">
                      <a href="design-para-redes-sociais" className="second-button">
                        <span> Saiba mais </span>
                      </a>
                      <a href="<?= $empressWhatsappLink ?>" target="_blank" className="main-button"> Whatsapp </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-24">
              <div className="main-card">
                <div className="main-card-img">
                  {/* <img src="img/services/criacao-de-logotipos.svg" alt="Criação de logotipos" title="Criação de logotipos"> */}
                </div>

                <div className="main-card-content">
                  <div className="main-subtitle font-gray">
                    <h3>Criação de logotipos</h3>
                  </div>

                  <div>
                    <div className="main-text font-gray">
                      <p>O logotipo é a alma visual da sua marca. Ele representa quem você é e comunica seus valores em um único elemento.</p>
                    </div>

                    <div className="main-card-double-buttons">
                      <a href="criacao-de-logotipos" className="second-button">
                        <span> Saiba mais </span>
                      </a>
                      <a href="<?= $empressWhatsappLink ?>" target="_blank" className="main-button"> Whatsapp </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-24">
              <div className="main-card">
                <div className="main-card-img">
                  {/* <img src="img/services/design-de-materiais-promocionais.svg" alt="Design de materiais promocionais" title="Design de materiais promocionais"> */}
                </div>

                <div className="main-card-content">
                  <div className="main-subtitle font-gray">
                    <h3>Design de materiais promocionais</h3>
                  </div>

                  <div>
                    <div className="main-text font-gray">
                      <p>Materiais promocionais são ferramentas essenciais para fortalecer a presença da sua marca, transmitir credibilidade e engajar seu público.</p>
                    </div>

                    <div className="main-card-double-buttons">
                      <a href="design-de-materiais-promocionais" className="second-button">
                        <span> Saiba mais </span>
                      </a>
                      <a href="<?= $empressWhatsappLink ?>" target="_blank" className="main-button"> Whatsapp </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-24">
              <div className="main-card">
                <div className="main-card-img">
                  {/* <img src="img/services/producao-de-conteudo-visual.svg" alt="Produção de conteúdo visual" title="Produção de conteúdo visual"> */}
                </div>

                <div className="main-card-content">
                  <div className="main-subtitle font-gray">
                    <h3>Produção de conteúdo visual</h3>
                  </div>

                  <div>
                    <div className="main-text font-gray">
                      <p>O impacto visual é uma peça fundamental na comunicação de qualquer marca. Imagens e vídeos são mais do que meras ilustrações: eles contam histórias, despertam emoções e influenciamO impacto visual é uma peça fundamental na comunicação...</p>
                    </div>

                    <div className="main-card-double-buttons">
                      <a href="producao-de-conteudo-visual" className="second-button">
                        <span> Saiba mais </span>
                      </a>
                      <a href="<?= $empressWhatsappLink ?>" target="_blank" className="main-button"> Whatsapp </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-24">
              <div className="main-card">
                <div className="main-card-img">
                  {/* <img src="img/services/desenvolvimento-de-site.svg" alt="Desenvolvimento de Site" title="Desenvolvimento de Site"> */}
                </div>

                <div className="main-card-content">
                  <div className="main-subtitle font-gray">
                    <h3>Desenvolvimento de Site</h3>
                  </div>

                  <div>
                    <div className="main-text font-gray">
                      <p>O site da sua empresa não é apenas uma vitrine online; ele é o ponto central da sua presença digital. É onde visitantes se tornam clientes e onde sua marca realmente ganha vida...</p>
                    </div>

                    <div className="main-card-double-buttons">
                      <a href="desenvolvimento-de-sites" className="second-button">
                        <span> Saiba mais </span>
                      </a>
                      <a href="<?= $empressWhatsappLink ?>" target="_blank" className="main-button"> Whatsapp </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-24">
              <div className="main-card">
                <div className="main-card-img">
                  {/* <img src="img/services/marketing-de-influencia.svg" alt="Marketing de Influencia" title="Marketing de Influencia"> */}
                </div>

                <div className="main-card-content">
                  <div className="main-subtitle font-gray">
                    <h3>Marketing de Influencia</h3>
                  </div>

                  <div>
                    <div className="main-text font-gray">
                      <p>No mundo digital, a recomendação de influenciadores pode ser o diferencial que sua marca precisa para alcançar novas audiências e gerar mais vendas.</p>
                    </div>

                    <div className="main-card-double-buttons">
                      <a href="marketing-de-influencia" className="second-button">
                        <span> Saiba mais </span>
                      </a>
                      <a href="<?= $empressWhatsappLink ?>" target="_blank" className="main-button"> Whatsapp </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA1 />
    </>
  );
}

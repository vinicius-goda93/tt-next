import { Breadcrumb } from "@/components/breadcrumb/page";
import { CTA2 } from "@/components/cta-2/page";
import { Sidebar } from "@/components/sidebar/page";
import Image from "next/image";

const title = 'Consultoria de Presença Online'
const description = 'Ajudamos sua marca a se destacar no digital com uma consultoria especializada e estratégias assertivas.'

export const metadata = {
  title: title + ' | TT Creative',
  description: description,
  openGraph: {
    title: title + ' | TT Creative',
    description: description,
  },
};

export default function ConsultoriaDePresençaOnline() {
  return (
    <>
      <Breadcrumb title="Consultoria de Presença Online" pageId="single-service" />

      <section className="content-page stage-padding pb-0">
        <div className="container-fluid container-xxl">
          <div className="row">
            <div className="col-lg-8">
              <div className="main-title font-gray">
                <h2>Consultoria de Presença Online</h2>
              </div>

              <div className="main-text font-gray mb-4">
                <p>No ambiente digital, sua presença online é o reflexo direto da sua marca. Um site desatualizado, redes sociais inativas ou uma comunicação incoerente podem comprometer a imagem da sua empresa e afastar potenciais clientes. É por isso que a <strong>T&T Creative Agency</strong> oferece uma consultoria completa para otimizar sua presença online e garantir que ela seja tão forte quanto o seu negócio.</p>
                <p>Nosso trabalho começa com uma auditoria detalhada de todos os pontos de contato da sua marca no digital: site, redes sociais, e-mail marketing, plataformas de vendas e até mesmo avaliações online. Em seguida, desenvolvemos um plano estratégico personalizado para melhorar sua visibilidade, alinhando tecnologia, design e conteúdo.</p>
              </div>

              <div className="content-page-img">
                <Image
                  src="/services/internal/consultoria-de-presenca-online.webp"
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
                        <h3>Auditoria Digital</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Analisamos o que está funcionando, o que pode ser melhorado e o que está faltando.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="content-page-card" data-index="2">
                    <div className="content">
                      <div className="main-subtitle font-white">
                        <h3>Planejamento Estratégico</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Criamos um plano de ação com etapas claras para fortalecer sua presença online.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="content-page-card" data-index="3">
                    <div className="content">
                      <div className="main-subtitle font-white">
                        <h3>Implementação</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Oferecemos suporte na execução de melhorias, como ajustes no site, criação de conteúdos ou novas campanhas.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="content-page-card" data-index="4">
                    <div className="content">
                      <div className="main-subtitle font-white">
                        <h3>Acompanhamento</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Monitoramos o impacto das mudanças e fornecemos relatórios para ajustes contínuos.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="main-text font-gray mb-4">
                <p>Você tem um site que não converte e redes sociais que não refletem a essência da sua marca. Nós identificamos as lacunas, propomos soluções como reformulação do site e criação de uma identidade visual consistente, e ajudamos você a implementar cada etapa.</p>
              </div>

              <div className="main-subtitle font-gray">
                <h3>Diferenciais:</h3>
              </div>

              <div className="main-text font-gray">
                <ul>
                  <li>Auditoria completa e detalhada de todos os canais digitais.</li>
                  <li>Recomendações práticas e personalizadas, alinhadas aos seus objetivos.</li>
                  <li>Acompanhamento próximo para garantir a implementação das melhorias.</li>
                  <li>Suporte contínuo para evolução da sua estratégia.</li>
                </ul>
              </div>

              <div className="main-subtitle font-gray">
                <h3>Benefícios:</h3>
              </div>

              <div className="main-text font-gray">
                <ul>
                  <li>Aumento da visibilidade e reconhecimento da marca.</li>
                  <li>Maior confiança e credibilidade junto ao público.</li>
                  <li>Experiência do usuário aprimorada em todas as plataformas digitais.</li>
                  <li>Melhores resultados em engajamento, conversões e vendas.</li>
                </ul>
                <p>Se sua marca precisa de uma presença online forte e impactante, nossa consultoria é o primeiro passo para transformar seu digital.</p>
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
import { Breadcrumb } from "@/components/breadcrumb/page";
import { CTA2 } from "@/components/cta-2/page";
import { Sidebar } from "@/components/sidebar/page";
import Image from "next/image";

const title = 'Marketing de Influência'
const description = 'Conectamos sua marca com influenciadores para aumentar sua visibilidade e engajamento.'

export const metadata = {
  title: title + ' | TT Creative',
  description: description,
  openGraph: {
    title: title + ' | TT Creative',
    description: description,
  },
};

export default function MarketingDeInfluencia() {
  return (
    <>
      <Breadcrumb title="Marketing de Influência" pageId="single-service" />

      <section className="content-page stage-padding pb-0">
        <div className="container-fluid container-xxl">
          <div className="row">
            <div className="col-lg-8">
              <div className="main-title font-gray">
                <h2>Marketing de Influência</h2>
              </div>

              <div className="main-text font-gray mb-4">
                <p>No mundo digital, a recomendação de influenciadores pode ser o diferencial que sua marca precisa para alcançar novas audiências e gerar mais vendas. O Marketing de Influência da T&T Creative Agency conecta sua marca com influenciadores relevantes, criando campanhas autênticas e impactantes.</p>
                <p>Trabalhamos com análise de perfil, planejamento estratégico e acompanhamento das ações, garantindo que a parceria com influenciadores seja alinhada aos valores da sua marca e aos interesses do público. Nosso objetivo é transformar conexões em resultados.</p>
              </div>

              <div className="content-page-img">
                <Image
                  src="/services/internal/marketing-de-influencia.webp"
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
                        <h3>Identificação de Influenciadores</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Selecionamos perfis que compartilham do mesmo nicho e valores da sua marca, priorizando autenticidade.</p>
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
                        <p>Criamos campanhas que engajam o público, combinando criatividade e objetivos claros.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="content-page-card" data-index="3">
                    <div className="content">
                      <div className="main-subtitle font-white">
                        <h3>Gestão de Parcerias</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Gerenciamos as interações com os influenciadores, garantindo um alinhamento consistente durante toda a campanha.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 mb-4">
                  <div className="content-page-card" data-index="4">
                    <div className="content">
                      <div className="main-subtitle font-white">
                        <h3>Análise de Resultados</h3>
                      </div>
                      <div className="main-text font-white">
                        <p>Monitoramos métricas como alcance, engajamento e conversões para avaliar o impacto da ação.
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
                <p>Sua marca está lançando um produto e quer atingir um público jovem e engajado. Conectamos você com influenciadores estratégicos, criamos ações exclusivas e monitoramos os resultados para maximizar o retorno da campanha.</p>
              </div>

              <div className="main-subtitle font-gray">
                <h3>Diferenciais:</h3>
              </div>

              <div className="main-text font-gray">
                <ul>
                  <li>Relacionamento com influenciadores de diferentes segmentos e tamanhos de público.</li>
                  <li>Estratégias criativas e autênticas, evitando parcerias genéricas.</li>
                  <li>Monitoramento contínuo para garantir transparência e resultados mensuráveis.</li>
                </ul>
              </div>

              <div className="main-subtitle font-gray">
                <h3>Benefícios:</h3>
              </div>

              <div className="main-text font-gray">
                <ul>
                  <li>Alcance ampliado e fortalecimento da presença digital.</li>
                  <li>Conexão genuína com o público por meio de recomendações confiáveis.</li>
                  <li>Aumento de conversões e vendas de forma orgânica.</li>
                </ul>
                <p>Impulsione sua marca e conquiste novas audiências com campanhas de Marketing de Influência da T&T Creative Agency.</p>
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
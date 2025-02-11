import { Breadcrumb } from "@/components/breadcrumb/page";
import { CTA2 } from "@/components/cta-2/page";
import { Sidebar } from "@/components/sidebar/page";
import Image from "next/image";

const title = 'Identidade Visual'
const description = 'Construímos uma identidade visual forte e coerente para destacar sua marca no mercado.'

export const metadata = {
  title: title + ' | TT Creative',
  description: description,
  openGraph: {
    title: title + ' | TT Creative',
    description: description,
  },
};

export default function IdentidadeVisual() {
  return (
    <>
      <Breadcrumb title="Identidade Visual" pageId="single-service" />

      <section classNamee="content-page stage-padding pb-0">
        <div classNamee="container-fluid container-xxl">
          <div classNamee="row">
            <div classNamee="col-lg-8">
              <div classNamee="main-title font-gray">
                <h2>Identidade Visual</h2>
              </div>

              <div classNamee="main-text font-gray mb-4">
                <p>Uma identidade visual forte e coesa é a alma da sua marca. Ela é o que diferencia seu negócio em um mercado saturado e cria uma conexão emocional com o público. Na <strong>T&T Creative Agency</strong>, desenvolvemos identidades visuais completas, projetadas para comunicar os valores, a missão e a essência da sua empresa.</p>
                <p>Nosso processo vai muito além do design. Ele começa com uma imersão na história da sua marca, seus objetivos e a percepção que você deseja transmitir. A partir daí, criamos um conjunto de elementos visuais que incluem logotipos, paletas de cores, tipografias e aplicações que garantem consistência em todos os pontos de contato com o público.</p>
              </div>

              <div classNamee="content-page-img">
                <Image
                  src="/services/internal/indentidade-visual.webp"
                  width={1000}
                  height={1000}
                  alt={title}
                  title={title}
                />
              </div>

              <div classNamee="main-subtitle font-gray">
                <h3>Como funciona nosso processo:</h3>
              </div>

              <div classNamee="row">
                <div classNamee="col-lg-6 mb-4">
                  <div classNamee="content-page-card" data-index="1">
                    <div classNamee="content">
                      <div classNamee="main-subtitle font-white">
                        <h3>Imersão e Pesquisa</h3>
                      </div>
                      <div classNamee="main-text font-white">
                        <p>Estudamos o mercado, o público-alvo e as tendências visuais do setor.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div classNamee="col-lg-6 mb-4">
                  <div classNamee="content-page-card" data-index="2">
                    <div classNamee="content">
                      <div classNamee="main-subtitle font-white">
                        <h3>Criação de Conceito</h3>
                      </div>
                      <div classNamee="main-text font-white">
                        <p>Desenvolvemos uma proposta inicial com base nos valores e na personalidade da marca.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div classNamee="col-lg-6 mb-4">
                  <div classNamee="content-page-card" data-index="3">
                    <div classNamee="content">
                      <div classNamee="main-subtitle font-white">
                        <h3>Design do Logotipo</h3>
                      </div>
                      <div classNamee="main-text font-white">
                        <p>Criamos um símbolo único que encapsula a essência do seu negócio.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div classNamee="col-lg-6 mb-4">
                  <div classNamee="content-page-card" data-index="4">
                    <div classNamee="content">
                      <div classNamee="main-subtitle font-white">
                        <h3>Definição da Paleta de Cores e Tipografia</h3>
                      </div>
                      <div classNamee="main-text font-white">
                        <p>Escolhemos elementos visuais que comunicam emoção e criam uma identidade memorável.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div classNamee="col-lg-12 mb-4">
                  <div classNamee="content-page-card" data-index="5">
                    <div classNamee="content">
                      <div classNamee="main-subtitle font-white">
                        <h3>Manual de Identidade Visual</h3>
                      </div>
                      <div classNamee="main-text font-white">
                        <p>Fornecemos um guia completo para garantir que a aplicação seja consistente em todas as mídias e materiais.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div classNamee="main-text font-gray mb-4">
                <p>Você está lançando uma nova empresa ou deseja renovar sua marca atual. Nossa equipe cria uma identidade visual moderna e impactante que se destaca da concorrência e gera reconhecimento imediato.</p>
              </div>

              <div classNamee="main-subtitle font-gray">
                <h3>Diferenciais:</h3>
              </div>

              <div classNamee="main-text font-gray">
                <ul>
                  <li>Processo colaborativo, com foco nas suas ideias e objetivos.</li>
                  <li>Design exclusivo, adaptado para diferentes mídias e aplicações.</li>
                  <li>Entrega de materiais prontos para uso em redes sociais, papelaria e anúncios.</li>
                  <li>Suporte contínuo para atualizações ou expansões da identidade.</li>
                </ul>
              </div>

              <div classNamee="main-subtitle font-gray">
                <h3>Benefícios:</h3>
              </div>

              <div classNamee="main-text font-gray">
                <ul>
                  <li>Reconhecimento instantâneo da marca pelo público.</li>
                  <li>Fortalecimento da presença no mercado com uma imagem profissional.</li>
                  <li>Maior conexão emocional com clientes e parceiros.</li>
                  <li>Diferenciação frente à concorrência, destacando os valores únicos da sua empresa.</li>
                </ul>
                <p>Com uma identidade visual forte, sua marca não será apenas lembrada, mas admirada.</p>
              </div>
            </div>

            <div classNamee="col-lg-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>

      <CTA2 />
    </>
  );
}
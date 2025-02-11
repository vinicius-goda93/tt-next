import { Breadcrumb } from "@/components/breadcrumb/page";
import Image from "next/image";
import Link from "next/link";

const title = 'Política de Privacidade'
const description = 'Saiba como protegemos seus dados e garantimos a privacidade ao utilizar nossos serviços.'

export const metadata = {
  title: title + ' | TT Creative',
  description: description,
  openGraph: {
    title: title + ' | TT Creative',
    description: description,
  },
};

export default function PoliticaDePrivacidade() {
  return (
    <>
    <Breadcrumb title="Política de Privacidade" pageId="privacy" />

      <section className="content-page stage-padding">
        <div className="container-fluid container-xxl">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="main-title font-gray mb-5">
                <h2>Política de Privacidade</h2>
                <span>Data da última atualização: 12/12/2024</span>
              </div>

              <div className="main-subtitle font-gray">
                <h3>Introdução</h3>
              </div>

              <div className="main-text font-gray mb-4">
                <p>Na T&T Creative Agency, estamos comprometidos em proteger sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, armazenamos e protegemos suas informações pessoais, de acordo com a Lei Geral de Proteção de Dados (LGPD) e outras legislações aplicáveis.</p>
              </div>

              <div className="main-subtitle font-gray">
                <h3>Dados Coletados</h3>
              </div>

              <div className="main-text font-gray mb-4">
                <p>Coletamos informações pessoais fornecidas por você e dados gerados automaticamente durante o uso de nossos serviços. Esses dados incluem:</p>

                <ul>
                  <li><strong>Informações fornecidas diretamente:</strong> nome, e-mail, telefone, empresa, cargo, e outros dados inseridos em formulários de contato ou cadastro.</li>
                  <li><strong>Informações coletadas automaticamente:</strong> endereço IP, tipo de navegador, duração da visita, páginas acessadas e cookies.</li>
                </ul>
              </div>

              <div className="main-subtitle font-gray">
                <h3>Finalidades do Uso de Dados</h3>
              </div>

              <div className="main-text font-gray mb-4">
                <p>Os dados coletados são utilizados para:</p>

                <ol>
                  <li>Melhorar e personalizar nossos serviços e conteúdos.</li>
                  <li>Responder às suas solicitações de contato e orçamentos.</li>
                  <li>Enviar comunicações relevantes, como novidades, ofertas e atualizações.</li>
                  <li>Cumprir obrigações legais e regulatórias.</li>
                </ol>
              </div>

              <div className="main-subtitle font-gray">
                <h3>Compartilhamento de Dados</h3>
              </div>

              <div className="main-text font-gray mb-4">
                <p>Não compartilhamos suas informações pessoais com terceiros, exceto:</p>

                <ul>
                  <li><strong>Parceiros de negócios:</strong> para viabilizar a prestação de serviços contratados.</li>
                  <li><strong>Autoridades legais:</strong> quando requerido por lei ou em processos legais.</li>
                </ul>

                <p>Em todos os casos, garantimos que os dados serão tratados com segurança e confidencialidade.</p>
              </div>

              <div className="main-subtitle font-gray">
                <h3>Armazenamento e Segurança dos Dados</h3>
              </div>

              <div className="main-text font-gray mb-4">
                <p>Adotamos medidas técnicas e organizacionais para proteger seus dados pessoais contra acessos não autorizados, perda, alterações ou divulgação indevida. Os dados são armazenados em servidores seguros, com acesso restrito e criptografia.</p>
              </div>

              <div className="main-subtitle font-gray">
                <h3>Seus Direitos</h3>
              </div>

              <div className="main-text font-gray mb-4">
                <p>De acordo com a LGPD, você tem o direito de:</p>

                <ul>
                  <li>Solicitar o acesso aos seus dados pessoais.</li>
                  <li>Corrigir ou atualizar informações desatualizadas ou incorretas.</li>
                  <li>Solicitar a exclusão de seus dados, quando permitido por lei.</li>
                  <li>Revogar seu consentimento para o tratamento de dados.</li>
                </ul>

                <p>Para exercer esses direitos, entre em contato pelo e-mail: <a href="mailto:ttcreativeagency@ttcreativeagency.com.br"> ttcreativeagency@ttcreativeagency.com.br </a></p>
              </div>

              <div className="main-subtitle font-gray">
                <h3>Uso de Cookies</h3>
              </div>

              <div className="main-text font-gray mb-4">
                <p>Utilizamos cookies para melhorar sua experiência em nosso site. Você pode gerenciar ou desativar os cookies através das configurações do seu navegador. Alguns cookies são essenciais para o funcionamento do site.</p>
              </div>

              <div className="main-subtitle font-gray">
                <h3>Alterações na Política de Privacidade</h3>
              </div>

              <div className="main-text font-gray mb-4">
                <p>Esta política pode ser atualizada periodicamente para refletir mudanças em nossas práticas ou legislação. Qualquer alteração será publicada nesta página, com data de atualização.</p>
              </div>

              <div className="main-subtitle font-gray">
                <h3>Contato</h3>
              </div>

              <div className="main-text font-gray mb-4">
                <p>Se tiver dúvidas ou preocupações sobre nossa Política de Privacidade ou o tratamento de seus dados pessoais, entre em contato conosco:</p>

                <ul>
                  <li><strong>E-mail:</strong> <Link href="mailto:contato@ttcreativeagency.com"> contato@ttcreativeagency.com </Link> </li>
                  <li><strong>Telefone:</strong> <Link href="tel:+5511963112570"> (11) 96311-2570 </Link> </li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

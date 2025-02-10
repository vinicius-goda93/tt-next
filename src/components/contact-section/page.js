import Image from "next/image";
import { FormCustom } from "../form/page";

export function ContactSection({ pageId }) {
    return (
        <section class={`contact stage-padding contact-page ${pageId == 'contact' ? 'contact-page' : ''}`}>
        <div class="container-fluid container-xxl">
          <div class="row">
            <div class="col-lg-6 mb-4 mb-lg-0 d-flex align-items-center">
              <div>
                <div class="main-title font-white">
                  <h2>Entre em contato com nossos consultores especializados</h2>
                </div>

                <div class="main-text font-white">
                  <p>Estamos aqui para ajudar sua marca a alcançar novos patamares. Preencha o formulário ao lado e fale com nossa equipe. Seja para tirar dúvidas, solicitar uma proposta ou entender como podemos impulsionar sua empresa, estamos prontos para atender você com atenção e soluções personalizadas. </p>
                </div>

                <div class="contact-img">
                  {/* <img src="img/contact-img.png" alt="Entre em contato com a TT Creative" title="Entre em contato com a TT Creative"> */}
                </div>
              </div>
            </div>

            <div class="col-lg-1 col-2 d-flex align-items-end justify-content-center">
              <div class="contact-icons">
                <a href="" target="_blank">
                  {/* <img src="img/icons/ico-whatsapp-white.svg" alt="Entre em contato pelo nosso Whatsapp" title="Entre em contato pelo nosso Whatsapp"> */}
                </a>
                <a href="" target="_blank">
                  {/* <img src="img/icons/ico-linkedin-white.svg" alt="LinkedIn da TT Creative" title="LinkedIn da TT Creative"> */}
                </a>
                <a href="" target="_blank">
                  {/* <img src="img/icons/ico-instagram-white.svg" alt="Instagram da TT Creative" title="Instagram da TT Creative"> */}
                </a>
                <a href="" target="_blank">
                  {/* <img src="img/icons/ico-facebook-white.svg" alt="Facebook da TT Creative" title="Facebook da TT Creative"> */}
                </a>
                <a href="" target="_blank">
                  {/* <img src="img/icons/ico-tiktok-white.svg" alt="TikTok da TT Creative" title="TikTok da TT Creative"> */}
                </a>
                <a href="" target="_blank">
                  {/* <img src="img/icons/ico-threads-white.svg" alt="Threads da TT Creative" title="Threads da TT Creative"> */}
                </a>
                <a href="" target="_blank">
                  {/* <img src="img/icons/ico-youtube-white.svg" alt="Youtube da TT Creative" title="Youtube da TT Creative"> */}
                </a>
              </div>
            </div>

            <div class="col-lg-5 col-10">
              <div class="contact-form-box">
                <div class="main-text font-dark">
                  <p>Vamos construir juntos o sucesso da sua marca!</p>
                </div>

                <FormCustom />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

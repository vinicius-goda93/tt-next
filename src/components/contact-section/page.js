import Image from "next/image";
import { FormCustom } from "../form/page";

export function ContactSection({ pageId }) {
  return (
    <section className={`contact stage-padding ${pageId == 'contact' ? 'contact-page' : ''}`}>
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
                <Image
                  src="/contact-img.png"
                  width={1000}
                  height={1000}
                  alt="Entre em contato com a TT Creative"
                  title="Entre em contato com a TT Creative"
                />
              </div>
            </div>
          </div>

          <div className="col-lg-1 col-2 d-flex align-items-end justify-content-center">
            <div className="contact-icons">
              <a href="https://api.whatsapp.com/send/?phone=5511963112570" target="_blank">
                <Image
                  src="/icons/ico-whatsapp-white.svg"
                  width={28}
                  height={28}
                  alt="Entre em contato pelo nosso Whatsapp"
                  title="Entre em contato pelo nosso Whatsapp"
                />
              </a>
              <a href="https://www.linkedin.com/company/t-t-creative-agency/?viewAsMember=true" target="_blank">
                <Image
                  src="/icons/ico-linkedin-white.svg"
                  width={28}
                  height={28}
                  alt="LinkedIn da TT Creative"
                  title="LinkedIn da TT Creative"
                />
              </a>
              <a href="https://www.instagram.com/ttcreativeagency/" target="_blank">
                <Image
                  src="/icons/ico-instagram-white.svg"
                  width={28}
                  height={28}
                  alt="Instagram da TT Creative"
                  title="Instagram da TT Creative"
                />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61552430965210" target="_blank">
                <Image
                  src="/icons/ico-facebook-white.svg"
                  width={28}
                  height={28}
                  alt="Facebook da TT Creative"
                  title="Facebook da TT Creative"
                />
              </a>
              <a href="https://www.tiktok.com/@ttcreativeagency" target="_blank">
                <Image
                  src="/icons/ico-tiktok-white.svg"
                  width={28}
                  height={28}
                  alt="TikTok da TT Creative"
                  title="TikTok da TT Creative"
                />
              </a>
              <a href="https://www.threads.net/@ttcreativeagency" target="_blank">
                <Image
                  src="/icons/ico-threads-white.svg"
                  width={28}
                  height={28}
                  alt="Threads da TT Creative"
                  title="Threads da TT Creative"
                />
              </a>
              <a href="https://www.youtube.com/channel/UC0ULaHm8PiURkKqRR2y7B7g" target="_blank">
                <Image
                  src="/icons/ico-youtube-white.svg"
                  width={28}
                  height={28}
                  alt="Youtube da TT Creative"
                  title="Youtube da TT Creative"
                />
              </a>
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
  );
}

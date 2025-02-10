import Image from "next/image";
import Form from 'next/form'

export function FormCustom({ pageId }) {
    return (
        <Form className="contact-form" action="">
            <div className="input-box">
                <input type="text" required name="name" placeholder="Digite seu nome" />
            </div>

            <div className="input-box">
                <input type="email" required name="email" placeholder="Digite seu e-mail" />
            </div>

            <div className="input-box">
                <input type="tel" required name="subject" placeholder="Digite seu telefone" />
            </div>

            <div className="input-box">
                <textarea name="message" placeholder="Digite sua mensagem (Opcional)"></textarea>
            </div>

            <div className={`submit-box ${pageId == 'single-service' ? 'submit-box-sidebar' : ''}`}>
                <button className="contact-button main-button">
                    Enviar pelo whatsapp
                </button>

                <button className="contact-button second-button">
                    <span>Enviar</span>
                </button>
            </div>
        </Form>
    );
}

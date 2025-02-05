import Form from "next/form";
import Image from "next/image";

export function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="main-subtitle font-white">
                <h2>Entre em contato consco</h2>
            </div>

            <div className="main-text font-white mb-4">
                <p>Estamos aqui para ajudar sua marca a alcançar novos patamares. Preencha o formulário a baixo e fale com nossa equipe.</p>
            </div>

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

                <div className="submit-box submit-box-sidebar">
                    <button className="contact-button main-button">
                        Enviar pelo whatsapp
                    </button>

                    <button className="contact-button second-button">
                        <span>Enviar</span>
                    </button>

                </div>
            </Form>
        </aside>
    );
}

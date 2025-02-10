import Form from "next/form";
import Image from "next/image";
import { FormCustom } from "../form/page";

export function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="main-subtitle font-white">
                <h2>Entre em contato consco</h2>
            </div>

            <div className="main-text font-white mb-4">
                <p>Estamos aqui para ajudar sua marca a alcançar novos patamares. Preencha o formulário a baixo e fale com nossa equipe.</p>
            </div>

            <FormCustom pageId="single-service" />
        </aside>
    );
}

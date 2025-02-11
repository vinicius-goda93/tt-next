import { Breadcrumb } from "@/components/breadcrumb/page";
import { ContactSection } from "@/components/contact-section/page";
import Image from "next/image";

const title = 'Entre em contato com a TT Creative'
const description = 'Fale com a TT Creative e descubra como podemos ajudar sua marca a crescer com estratégias digitais eficientes.'

export const metadata = {
  title: title + ' | TT Creative',
  description: description,
  openGraph: {
    title: title + ' | TT Creative',
    description: description,
  },
};

export default function Contato() {
  return (
    <>
      <Breadcrumb title="Entre em contato com a TT Creative" pageId="contact" />

      <ContactSection pageId="contact" />
    </>
  );
}

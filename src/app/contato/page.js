import { Breadcrumb } from "@/components/breadcrumb/page";
import { ContactSection } from "@/components/contact-section/page";
import Image from "next/image";

export default function Contato() {
  return (
    <>
      <Breadcrumb title="Entre em contato com a TT Creative" pageId="contact" />

      <ContactSection pageId="contact" />
    </>
  );
}

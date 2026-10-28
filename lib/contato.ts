import { perfil } from "@/content/perfil";

// Monta o link de contato principal.
// Com WhatsApp preenchido: abre a conversa já com a mensagem escrita.
// Sem WhatsApp: cai no Fiverr.
export function linkContato(mensagem: string = perfil.whatsappMensagem) {
  if (perfil.whatsapp) {
    return `https://wa.me/${perfil.whatsapp}?text=${encodeURIComponent(mensagem)}`;
  }
  return perfil.fiverr;
}

export const temWhatsapp = Boolean(perfil.whatsapp);

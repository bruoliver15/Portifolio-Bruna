import type { Metadata, Viewport } from "next";
// A fonte vem de um pacote do npm e é servida pelo próprio site:
// nenhum pedido ao Google quando alguém visita (mais rápido e mais privado).
import "@fontsource-variable/schibsted-grotesk";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bruna Oliveira | Automações, integrações e sistemas sob medida",
  description:
    "Conecto as ferramentas da sua empresa e construo os sistemas que faltam: automações, integrações de pagamento e CRM, sistemas web e páginas de venda.",
  openGraph: {
    title: "Bruna Oliveira | Automações, integrações e sistemas sob medida",
    description:
      "Projetos no ar: SaaS com assinatura, inteligência de mercado, páginas integradas a CRM, planilha e WhatsApp.",
    locale: "pt_BR",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#14213D" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}

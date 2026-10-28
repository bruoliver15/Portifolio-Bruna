import { FluxoHero } from "@/components/FluxoHero";
import { ProjetoDestaque, ProjetoLinha } from "@/components/Projeto";
import { perfil } from "@/content/perfil";
import { casosOperacao, paginas, projetoDestaque, projetos } from "@/content/projetos";

const servicos = [
  {
    titulo: "Automações",
    texto:
      "Tarefas repetidas que a equipe faz à mão viram fluxos que rodam sozinhos: mensagens, planilhas, cadastros e avisos.",
    ferramentas: "Make, ManyChat, Google Apps Script",
  },
  {
    titulo: "Integrações",
    texto:
      "Pagamento, CRM, planilha, anúncios e WhatsApp conversando entre si, sem copiar e colar dados de um lugar para outro.",
    ferramentas: "Asaas, Hubla, ActiveCampaign, Meta Pixel, webhooks",
  },
  {
    titulo: "Sistemas sob medida",
    texto:
      "Quando nenhuma ferramenta pronta resolve: painéis, áreas de cliente e sistemas com login, planos e cobrança.",
    ferramentas: "React, Next.js, Supabase, Node.js",
  },
  {
    titulo: "Sites e páginas de venda",
    texto:
      "Sites para empresas locais e páginas de captura que já saem integradas ao CRM e com rastreamento de anúncio.",
    ferramentas: "HTML, CSS, JavaScript, Next.js, Vercel",
  },
];


function linkWhatsapp() {
  if (!perfil.whatsapp) return "";
  return `https://wa.me/${perfil.whatsapp}?text=${encodeURIComponent(perfil.whatsappMensagem)}`;
}

function Contatos({ principal = false }: { principal?: boolean }) {
  const whats = linkWhatsapp();
  const itens = [
    whats && { href: whats, texto: "Conversar no WhatsApp" },
    perfil.fiverr && { href: perfil.fiverr, texto: "Contratar pelo Fiverr" },
    perfil.email && { href: `mailto:${perfil.email}`, texto: "Enviar e-mail" },
    perfil.linkedin && { href: perfil.linkedin, texto: "LinkedIn" },
  ].filter(Boolean) as { href: string; texto: string }[];

  return (
    <div className="contatos">
      {itens.map((c, i) => (
        <a
          key={c.href}
          href={c.href}
          target={c.href.startsWith("mailto:") ? undefined : "_blank"}
          rel="noopener noreferrer"
          className={i === 0 && principal ? "botao botao-principal" : "botao"}
        >
          {c.texto}
        </a>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <a href="#conteudo" className="pular">
        Pular para o conteúdo
      </a>

      <header className="topo">
        <div className="largura topo-linha">
          <span className="marca">{perfil.nome}</span>
          <nav aria-label="Seções">
            <a href="#projetos">Projetos</a>
            <a href="#servicos">O que eu faço</a>
            <a href="#contato">Contato</a>
          </nav>
        </div>
      </header>

      <main id="conteudo">
        <section className="hero largura">
          <div className="hero-texto">
            <h1>Conecto as ferramentas da sua empresa e construo os sistemas que faltam.</h1>
            <p className="hero-sub">
              Sou {perfil.nome.split(" ")[0]}, de {perfil.cidade}. Trabalho na ponte entre marketing
              e tecnologia: automações, integrações de pagamento e CRM, sistemas web e páginas que
              já nascem conectadas. Tudo que está aqui foi construído e está em uso.
            </p>
            <Contatos principal />
          </div>
          <FluxoHero />
        </section>

        <section id="projetos" className="secao largura" aria-labelledby="h-projetos">
          <h2 id="h-projetos">Projetos</h2>
          <p className="secao-intro">
            Sistemas que eu desenvolvi. Os que guardam dados de clientes ficam privados; posso
            mostrar funcionando numa conversa.
          </p>

          <ProjetoDestaque p={projetoDestaque} />

          <div className="linhas">
            {projetos.map((p) => (
              <ProjetoLinha key={p.slug} p={p} />
            ))}
          </div>

          {paginas.length > 0 && (
            <div className="paginas">
              <h3>Páginas de venda no ar</h3>
              <ul>
                {paginas.map((pg) => (
                  <li key={pg.link}>
                    <a href={pg.link} target="_blank" rel="noopener noreferrer">
                      {pg.nome}
                    </a>
                    <span>{pg.descricao}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        <section className="secao largura" aria-labelledby="h-operacao">
          <h2 id="h-operacao">Operação e dados</h2>
          <p className="secao-intro">
            Nem todo problema pede um sistema. Estes são trabalhos de operação, análise e
            automação feitos para uma empresa de educação em viagens.
          </p>
          <ul className="casos">
            {casosOperacao.map((c) => (
              <li key={c.titulo}>
                <h3>{c.titulo}</h3>
                <p>{c.texto}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="servicos" className="secao secao-escura" aria-labelledby="h-servicos">
          <div className="largura">
            <h2 id="h-servicos">O que eu faço para a sua empresa</h2>
            <ul className="servicos">
              {servicos.map((s) => (
                <li key={s.titulo}>
                  <h3>{s.titulo}</h3>
                  <p>{s.texto}</p>
                  <p className="servico-ferramentas">{s.ferramentas}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>


        <section id="contato" className="secao largura contato" aria-labelledby="h-contato">
          <h2 id="h-contato">Tem um processo que dá trabalho demais?</h2>
          <p>
            Me conte o que a sua equipe faz à mão hoje. Eu digo o que dá para automatizar, quanto
            tempo leva e o que é melhor não automatizar.
          </p>
          <Contatos principal />
        </section>
      </main>

      <footer className="rodape largura">
        <span>
          {perfil.nome}, {perfil.empresa}
        </span>
        <a href={`${perfil.github}/Portifolio-Bruna`} target="_blank" rel="noopener noreferrer">
          Código deste site no GitHub
        </a>
      </footer>
    </>
  );
}

import { Checklist } from "@/components/Checklist";
import { FluxoHero } from "@/components/FluxoHero";
import { ProjetoDestaque, ProjetoLinha } from "@/components/Projeto";
import { perfil } from "@/content/perfil";
import { paginas, projetoDestaque, projetos } from "@/content/projetos";
import { antesDepois, passos, perguntas } from "@/content/venda";
import { linkContato } from "@/lib/contato";

function BotaoContato({ grande = false }: { grande?: boolean }) {
  return (
    <a
      href={linkContato()}
      target="_blank"
      rel="noopener noreferrer"
      className={grande ? "botao botao-principal botao-grande" : "botao botao-principal"}
    >
      Quero automatizar minha empresa
    </a>
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
            <a href="#checklist">Diagnóstico</a>
            <a href="#projetos">Projetos</a>
            <a href="#perguntas">Dúvidas</a>
            <a href={linkContato()} target="_blank" rel="noopener noreferrer" className="topo-cta">
              Fale comigo
            </a>
          </nav>
        </div>
      </header>

      <main id="conteudo">
        {/* Topo: fala com a dor do dono da empresa */}
        <section className="hero">
          <div className="largura hero-grade">
            <div className="hero-texto">
              <h1>
                Sua empresa não precisa de mais um funcionário. Precisa parar de fazer tudo à mão.
              </h1>
              <p className="hero-sub">
                Eu automatizo as tarefas repetidas do seu negócio: atendimento no WhatsApp,
                cadastro de clientes, cobranças, planilhas e relatórios. Sua equipe para de copiar e
                colar e volta a cuidar do que traz dinheiro.
              </p>
              <div className="hero-acoes">
                <BotaoContato grande />
                <a href="#checklist" className="link-claro">
                  Descobrir o que dá para automatizar
                </a>
              </div>
            </div>
            <FluxoHero />
          </div>
        </section>

        {/* Checklist interativo */}
        <section id="checklist" className="secao secao-lilas" aria-labelledby="h-checklist">
          <div className="largura">
            <h2 id="h-checklist">Quanto da sua rotina dá para automatizar?</h2>
            <p className="secao-intro">Marque o que acontece na sua empresa hoje. Leva 30 segundos.</p>
            <Checklist />
          </div>
        </section>

        {/* Antes e depois */}
        <section className="secao largura" aria-labelledby="h-antes">
          <h2 id="h-antes">Como fica a sua rotina depois</h2>
          <p className="secao-intro">Exemplos reais de processos que eu já transformei.</p>
          <div className="comparacoes">
            {antesDepois.map((c) => (
              <article key={c.area} className="comparacao">
                <h3>{c.area}</h3>
                <div className="lado lado-antes">
                  <span className="lado-rotulo">Hoje</span>
                  <p>{c.antes}</p>
                </div>
                <div className="lado lado-depois">
                  <span className="lado-rotulo">Com automação</span>
                  <p>{c.depois}</p>
                </div>
                <p className="prova">{c.prova}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Como funciona */}
        <section className="secao secao-indigo" aria-labelledby="h-passos">
          <div className="largura">
            <h2 id="h-passos">Como a gente trabalha junto</h2>
            <ol className="passos">
              {passos.map((p) => (
                <li key={p.titulo}>
                  <h3>{p.titulo}</h3>
                  <p>{p.texto}</p>
                </li>
              ))}
            </ol>
            <BotaoContato />
          </div>
        </section>

        {/* Prova: projetos */}
        <section id="projetos" className="secao largura" aria-labelledby="h-projetos">
          <h2 id="h-projetos">Sistemas que eu já entreguei</h2>
          <p className="secao-intro">
            Tudo aqui está construído e em uso. Os sistemas que guardam dados de clientes ficam
            privados, e eu mostro funcionando numa conversa.
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

        {/* Dúvidas */}
        <section id="perguntas" className="secao secao-lilas" aria-labelledby="h-perguntas">
          <div className="largura perguntas-grade">
            <div>
              <h2 id="h-perguntas">Dúvidas de quem está pensando em automatizar</h2>
              <p className="secao-intro">Não achou a sua? Pergunte direto, eu respondo.</p>
            </div>
            <div className="perguntas">
              {perguntas.map((q) => (
                <details key={q.p}>
                  <summary>{q.p}</summary>
                  <p>{q.r}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Chamada final */}
        <section className="final" aria-labelledby="h-final">
          <div className="largura">
            <h2 id="h-final">Qual tarefa está roubando o tempo da sua equipe?</h2>
            <p>
              Me conte em uma mensagem. Eu respondo dizendo se dá para automatizar, quanto tempo leva
              e quanto custa.
            </p>
            <BotaoContato grande />
            <p className="final-local">
              {perfil.nome}, {perfil.cidade}. Atendo todo o Brasil.
            </p>
          </div>
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

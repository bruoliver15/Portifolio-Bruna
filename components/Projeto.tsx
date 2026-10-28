import type { Projeto, Status } from "@/content/projetos";

const rotuloStatus: Record<Status, string> = {
  "no-ar": "No ar",
  privado: "Sistema privado",
  codigo: "Código aberto",
};

export function StatusSelo({ status }: { status: Status }) {
  return (
    <span className={`selo selo-${status}`}>
      <span className="selo-luz" aria-hidden="true" />
      {rotuloStatus[status]}
    </span>
  );
}

function Links({ p }: { p: Projeto }) {
  if (!p.link && !p.codigo) return null;
  return (
    <p className="projeto-links">
      {p.link && (
        <a href={p.link} target="_blank" rel="noopener noreferrer">
          Abrir o {p.nome}
        </a>
      )}
      {p.codigo && (
        <a href={p.codigo} target="_blank" rel="noopener noreferrer">
          Ver o código
        </a>
      )}
    </p>
  );
}

// Projeto principal: ocupa a largura toda, com a ficha do que tem dentro
export function ProjetoDestaque({ p }: { p: Projeto }) {
  return (
    <article className="destaque" aria-labelledby={`t-${p.slug}`}>
      <div className="destaque-texto">
        <StatusSelo status={p.status} />
        <h3 id={`t-${p.slug}`} className="destaque-nome">
          {p.nome}
        </h3>
        <p className="projeto-tipo">{p.tipo}</p>
        <p className="projeto-problema">{p.problema}</p>
        <p>{p.solucao}</p>
        <Links p={p} />
      </div>

      <div className="destaque-ficha">
        {p.imagens && p.imagens.length > 0 && (
          <div className="destaque-imagens">
            {p.imagens.map((src) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={src} src={src} alt={`Tela do ${p.nome}`} loading="lazy" />
            ))}
          </div>
        )}
        <h4>O que tem dentro</h4>
        <ul className="lista-check">
          {p.destaques.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
        <ul className="stack" aria-label="Tecnologias">
          {p.stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

// Demais projetos: linhas, com detalhes que abrem ao clicar
export function ProjetoLinha({ p }: { p: Projeto }) {
  return (
    <article className="linha" aria-labelledby={`t-${p.slug}`}>
      <div className="linha-cabeca">
        <h3 id={`t-${p.slug}`}>{p.nome}</h3>
        <StatusSelo status={p.status} />
      </div>
      <p className="projeto-tipo">{p.tipo}</p>
      <p className="projeto-problema">{p.problema}</p>
      <p>{p.solucao}</p>
      <details>
        <summary>O que tem dentro</summary>
        <ul className="lista-check">
          {p.destaques.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </details>
      <ul className="stack" aria-label="Tecnologias">
        {p.stack.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
      <Links p={p} />
    </article>
  );
}

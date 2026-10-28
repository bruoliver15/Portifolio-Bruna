// Diagrama do topo: o caminho real de um lead na Mesa das Emissões.
// Um sinal âmbar percorre os fios uma única vez quando a página abre
// (e não anima para quem ativou "reduzir movimento" no sistema).

type No = { id: string; x: number; y: number; titulo: string; detalhe: string };

const L = 128; // largura de cada caixa
const A = 52; // altura de cada caixa

const nos: No[] = [
  { id: "anuncio", x: 8, y: 160, titulo: "Anúncio", detalhe: "Meta Ads" },
  { id: "pagina", x: 206, y: 160, titulo: "Página", detalhe: "formulário" },
  { id: "planilha", x: 424, y: 52, titulo: "Planilha", detalhe: "Google Sheets" },
  { id: "crm", x: 424, y: 160, titulo: "CRM", detalhe: "ActiveCampaign" },
  { id: "whats", x: 424, y: 268, titulo: "WhatsApp", detalhe: "grupo da turma" },
];

const fios = [
  { id: "f1", d: `M${8 + L} 160 L206 160`, atraso: 0 },
  { id: "f2", d: `M${206 + L} 160 C380 160 380 52 424 52`, atraso: 0.55 },
  { id: "f3", d: `M${206 + L} 160 L424 160`, atraso: 0.7 },
  { id: "f4", d: `M${206 + L} 160 C380 160 380 268 424 268`, atraso: 0.85 },
];

export function FluxoHero() {
  return (
    <figure className="fluxo">
      <svg
        viewBox="0 0 560 320"
        role="img"
        aria-labelledby="fluxo-titulo"
        className="fluxo-svg"
      >
        <title id="fluxo-titulo">
          Um cadastro feito a partir de um anúncio chega ao mesmo tempo na planilha, no CRM e no
          grupo de WhatsApp.
        </title>

        {fios.map((f) => (
          <g key={f.id}>
            <path d={f.d} className="fio" pathLength={1} />
            <path
              d={f.d}
              className="fio-sinal"
              pathLength={1}
              style={{ animationDelay: `${f.atraso}s` }}
            />
          </g>
        ))}

        {nos.map((n) => (
          <g key={n.id} transform={`translate(${n.x} ${n.y - A / 2})`}>
            <rect width={L} height={A} rx={10} className="no" />
            <text x={16} y={22} className="no-titulo">
              {n.titulo}
            </text>
            <text x={16} y={39} className="no-detalhe">
              {n.detalhe}
            </text>
          </g>
        ))}
      </svg>
      <figcaption>
        Uma automação que eu fiz: o cliente se cadastra e tudo acontece sozinho, sem ninguém digitar nada.
      </figcaption>
    </figure>
  );
}

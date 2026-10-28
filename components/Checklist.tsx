"use client";

// "use client" = este pedaço roda no navegador do visitante,
// porque precisa reagir aos cliques. O resto da página é HTML pronto.

import { useState } from "react";
import { dores } from "@/content/venda";
import { linkContato, temWhatsapp } from "@/lib/contato";

export function Checklist() {
  const [marcados, setMarcados] = useState<number[]>([]);

  function alternar(i: number) {
    setMarcados((atual) => (atual.includes(i) ? atual.filter((x) => x !== i) : [...atual, i]));
  }

  const total = marcados.length;
  const mensagem =
    "Oi, Bruna! Fiz o checklist do seu site. Na minha empresa acontece isto:\n" +
    [...marcados]
      .sort((a, b) => a - b)
      .map((i) => `- ${dores[i]}`)
      .join("\n") +
    "\nQuero entender o que dá para automatizar.";

  return (
    <div className="checklist">
      <ul className="dores" role="list">
        {dores.map((d, i) => {
          const ativo = marcados.includes(i);
          return (
            <li key={d}>
              <button
                type="button"
                className={ativo ? "dor dor-ativa" : "dor"}
                aria-pressed={ativo}
                onClick={() => alternar(i)}
              >
                <span className="dor-caixa" aria-hidden="true">
                  {ativo ? "✓" : ""}
                </span>
                {d}
              </button>
            </li>
          );
        })}
      </ul>

      <div className="resultado" aria-live="polite">
        {total === 0 ? (
          <>
            <p className="resultado-numero">0</p>
            <p className="resultado-texto">
              Clique no que acontece na sua empresa hoje. Seja sincero, ninguém está olhando.
            </p>
          </>
        ) : (
          <>
            <p className="resultado-numero">{total}</p>
            <p className="resultado-texto">
              {total === 1
                ? "Esse processo dá para automatizar."
                : `Esses ${total} processos dão para automatizar.`}{" "}
              {total >= 3
                ? "É tempo de equipe sendo gasto em tarefa que um sistema faz sozinho."
                : "Cada um deles libera horas da sua equipe toda semana."}
            </p>
            <a
              className="botao botao-principal"
              href={linkContato(mensagem)}
              target="_blank"
              rel="noopener noreferrer"
            >
              {temWhatsapp ? "Enviar minha lista no WhatsApp" : "Falar com a Bruna"}
            </a>
          </>
        )}
      </div>
    </div>
  );
}

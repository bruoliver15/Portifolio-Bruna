// ─────────────────────────────────────────────────────────────
// TEXTOS DE VENDA DA PÁGINA
// Tudo que fala com o cliente fica aqui. Mude à vontade.
// ─────────────────────────────────────────────────────────────

// Checklist "Quanto da sua rotina dá pra automatizar?"
export const dores: string[] = [
  "Alguém da equipe passa horas copiando dados de um lugar para outro",
  "Clientes mandam mensagem no WhatsApp e esperam horas por resposta",
  "Cobrança e lembrete de vencimento são feitos um por um, à mão",
  "Você não sabe de qual anúncio ou canal vêm os seus clientes",
  "Montar relatório de vendas toma uma tarde inteira",
  "Cada venda exige liberar acesso, mandar contrato ou cadastrar à mão",
  "Você já pensou em contratar mais alguém só para dar conta da rotina",
  "As informações da empresa estão espalhadas em planilhas que só uma pessoa entende",
];

// Antes e depois: cada linha aponta para um trabalho real
export const antesDepois: { area: string; antes: string; depois: string; prova: string }[] = [
  {
    area: "Captação de clientes",
    antes: "Cada cadastro do site é copiado à mão para a planilha, e alguém manda mensagem um por um.",
    depois: "O cadastro cai na planilha, no CRM e no grupo de WhatsApp no mesmo segundo, com a origem do anúncio.",
    prova: "Feito na página Mesa das Emissões",
  },
  {
    area: "Cobrança e acesso",
    antes: "Todo mês alguém confere quem pagou, cobra quem atrasou e libera ou bloqueia acesso.",
    depois: "A cobrança é recorrente e automática. Quem paga ganha acesso na hora, quem cancela perde sozinho.",
    prova: "Feito no GestorPro e na Plataforma IA Lucrativa",
  },
  {
    area: "Atendimento",
    antes: "O cliente pergunta à noite e só recebe resposta no dia seguinte. Parte deles desiste.",
    depois: "Um atendente com IA responde na hora, tira as dúvidas comuns e passa para uma pessoa quando precisa.",
    prova: "Feito para um evento de vendas no WhatsApp",
  },
  {
    area: "Gestão e números",
    antes: "Para saber o que vendeu e de onde veio, alguém monta planilha e cruza listas por horas.",
    depois: "Um painel se atualiza sozinho e mostra vendas, metas e a origem de cada cliente.",
    prova: "Feito em operação de lançamento com 143 ações e 553 fórmulas",
  },
];

// Como funciona (é uma sequência de verdade, por isso tem número)
export const passos: { titulo: string; texto: string }[] = [
  {
    titulo: "Conversa sobre a sua rotina",
    texto: "Você me conta o que a equipe faz à mão. Eu mostro o que dá para automatizar e o que não vale a pena.",
  },
  {
    titulo: "Proposta com prazo e preço fechados",
    texto: "Você recebe por escrito o que será feito, quanto custa e quando fica pronto. Sem surpresa no meio do caminho.",
  },
  {
    titulo: "Entrega funcionando e equipe treinada",
    texto: "Eu coloco no ar, testo com casos reais da sua empresa e ensino a equipe a usar.",
  },
];

export const perguntas: { p: string; r: string }[] = [
  {
    p: "Vou precisar trocar os programas que já uso?",
    r: "Na maioria dos casos, não. Eu conecto as ferramentas que você já tem: WhatsApp, planilhas, CRM, plataforma de pagamento. Só sugiro trocar quando a ferramenta atual realmente trava a empresa.",
  },
  {
    p: "Quanto custa?",
    r: "Depende do tamanho do processo. Uma automação simples custa bem menos do que um sistema completo. Na primeira conversa eu já digo a faixa de preço, e a proposta vem com valor fechado.",
  },
  {
    p: "Quanto tempo leva?",
    r: "Automações simples ficam prontas em poucos dias. Sistemas sob medida levam algumas semanas. O prazo vem escrito na proposta.",
  },
  {
    p: "Minha empresa é pequena. Vale a pena?",
    r: "É justamente para empresa pequena que automação faz mais diferença: cada hora que a equipe deixa de gastar em tarefa repetida volta para vender e atender.",
  },
  {
    p: "E se algo parar de funcionar depois?",
    r: "Eu acompanho o período inicial e corrijo o que precisar. Depois disso, dá para combinar um suporte mensal.",
  },
  {
    p: "Atende fora de Presidente Prudente?",
    r: "Sim. Atendo empresas de todo o Brasil por videochamada. Em Presidente Prudente também posso ir até você.",
  },
];

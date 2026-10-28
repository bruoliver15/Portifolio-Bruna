// ─────────────────────────────────────────────────────────────
// PROJETOS DO PORTFÓLIO
// Para adicionar um projeto: copie um bloco { ... }, cole no fim
// da lista e troque os textos. O site se monta sozinho.
//
// status:
//   "no-ar"      → tem link público funcionando
//   "privado"    → sistema interno; mostra "demonstração sob pedido"
//   "codigo"     → código aberto no GitHub
// ─────────────────────────────────────────────────────────────

export type Status = "no-ar" | "privado" | "codigo";

export type Projeto = {
  slug: string;
  nome: string;
  tipo: string; // uma linha: que tipo de coisa é
  problema: string; // a dor que o projeto resolve
  solucao: string; // o que foi construído
  destaques: string[]; // o que tem dentro (concreto, verificável)
  stack: string[];
  status: Status;
  link?: string; // site no ar
  codigo?: string; // repositório público
  imagens?: string[]; // ex.: ["/projetos/gestorpro/painel.png"]
};

// O projeto em destaque no topo da seção
export const projetoDestaque: Projeto = {
  slug: "gestorpro",
  nome: "GestorPro",
  tipo: "SaaS com assinatura mensal, para web, Android, iPhone e Windows",
  problema:
    "Empresas pequenas perdem dinheiro com assinaturas esquecidas, senhas espalhadas em planilhas e contas que vencem sem ninguém ver.",
  solucao:
    "Uma central que reúne assinaturas, fornecedores, senhas da equipe e vencimentos, avisa antes de cada cobrança e cobra o próprio cliente por plano mensal.",
  destaques: [
    "Senhas criptografadas no próprio aparelho (AES-256) antes de ir para o banco",
    "Bloqueio por PIN e por inatividade",
    "Planos pagos com cobrança recorrente automática pelo Asaas",
    "Cada empresa só enxerga os próprios dados (regras de acesso no banco)",
    "Alertas de vencimento por notificação no celular",
    "Painel de administração, relatórios e importação de planilhas",
    "Um único código publicado como site, app Android, app iPhone e programa Windows",
  ],
  stack: ["React", "Vite", "Supabase", "Asaas", "Capacitor", "Electron", "Tailwind"],
  status: "no-ar",
  link: "https://acrosstech.com.br",
  imagens: [],
};

export const projetos: Projeto[] = [
  {
    slug: "brx-radar",
    nome: "BRX Radar",
    tipo: "Inteligência de mercado para o Mercado Livre",
    problema:
      "Escolher produto para vender no Mercado Livre costuma ser chute: olha-se o que mais vende, e não onde há espaço para entrar.",
    solucao:
      "Um sistema que acompanha produtos ao longo do tempo e dá uma nota a cada oportunidade, cruzando demanda, crescimento, concorrência, preço, margem e risco. Cada nota vem com a explicação.",
    destaques: [
      "Integração oficial com a API do Mercado Livre (login OAuth)",
      "Tokens de acesso guardados criptografados",
      "Histórico de preços e vendas para comparar ao longo do tempo",
      "Nota de confiança que cai quando faltam dados",
      "Testes automatizados nas regras de cálculo",
    ],
    stack: ["Next.js 16", "React 19", "TypeScript", "Supabase", "Recharts", "Vitest"],
    status: "privado",
  },
  {
    slug: "seller-intelligence",
    nome: "Seller Intelligence",
    tipo: "Plataforma e extensão de navegador para vendedores da Amazon",
    problema:
      "Quem revende na Amazon perde horas calculando taxa, margem e retorno de cada produto em planilha, um por um.",
    solucao:
      "Uma plataforma que calcula lucro, margem e retorno de qualquer produto, cruza o catálogo dos fornecedores com a Amazon e aponta onde vale investir. Uma extensão mostra a nota direto na página da Amazon.",
    destaques: [
      "Nota de oportunidade de 0 a 100 com explicação em português",
      "Cruzamento automático do catálogo do fornecedor com a Amazon",
      "Controle de estoque com sugestão de reposição e risco de ruptura",
      "Copiloto com IA que divide um valor a investir entre as melhores oportunidades",
      "Rotinas automáticas que rodam todo dia e geram alertas",
      "Extensão de navegador para Chrome",
    ],
    stack: ["Next.js 16", "TypeScript", "Prisma", "Claude API", "Vercel Cron"],
    status: "privado",
  },
  {
    slug: "ia-lucrativa",
    nome: "Plataforma IA Lucrativa",
    tipo: "Plataforma de cursos com área do aluno e painel administrativo",
    problema:
      "Vender curso digital e liberar o acesso à mão a cada compra não escala e gera erro.",
    solucao:
      "Uma plataforma própria de ensino de IA com trilhas, prompts e desafios, ligada à plataforma de pagamento: quem compra ganha acesso sozinho, e quem cancela perde.",
    destaques: [
      "Área do aluno e painel administrativo",
      "Integração com os eventos de pagamento da Hubla (compra, renovação, cancelamento)",
      "Reprocessamento de eventos que falharam",
      "Login, recuperação de senha e controle de acesso por plano",
    ],
    stack: ["React", "TypeScript", "Vite", "Supabase", "Edge Functions", "Hubla"],
    status: "privado",
  },
  {
    slug: "mesa-das-emissoes",
    nome: "Mesa das Emissões",
    tipo: "Página de captura integrada a quatro ferramentas",
    problema:
      "Uma campanha precisava que cada cadastro chegasse ao mesmo tempo na planilha, no CRM, no Pixel da Meta e no grupo de WhatsApp, sem perder de qual anúncio veio.",
    solucao:
      "Uma página de captura que, a cada cadastro, faz as quatro coisas de uma vez e leva a pessoa direto para o grupo.",
    destaques: [
      "Meta Pixel com evento de lead",
      "Planilha Google alimentada via Apps Script",
      "Envio automático para o ActiveCampaign",
      "Versão separada para tráfego pago, com rastreamento de origem (UTM)",
    ],
    stack: ["HTML", "CSS", "JavaScript", "Apps Script", "ActiveCampaign", "Meta Pixel"],
    status: "no-ar",
    link: "https://mesadasemissoes.danimilhasaereas.com.br",
  },
  {
    slug: "miles-trip",
    nome: "Miles Trip",
    tipo: "Loja virtual de pacotes de viagem",
    problema:
      "Uma operação de viagens precisava vender pacotes online, com pagamento, cupons e controle financeiro num lugar só.",
    solucao:
      "Uma loja completa com vitrine, carrinho, pagamento e painel para a operação cadastrar pacotes, cupons e acompanhar o financeiro.",
    destaques: [
      "Checkout integrado ao Asaas",
      "Área do cliente, carrinho e avaliações",
      "Painel com pacotes, cupons, clientes e financeiro",
      "Senhas protegidas com scrypt",
    ],
    stack: ["Node.js", "Express", "MySQL", "JavaScript", "Asaas"],
    status: "privado",
  },
];

// Páginas de venda e captura que estão no ar (aparecem agrupadas)
export const paginas: { nome: string; descricao: string; link: string }[] = [
  {
    nome: "Plano Viagens Vitalícias",
    descricao: "Página de vendas com versão para tráfego pago e página de indicação",
    link: "https://vendas.danimilhasaereas.com.br",
  },
  {
    nome: "Checklist dos Programas de Fidelidade",
    descricao: "Material de isca digital com área de acesso",
    link: "https://ebookfidelidade.danimilhasaereas.com.br",
  },
];


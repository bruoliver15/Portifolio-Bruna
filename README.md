# Portfólio, Bruna Oliveira

Site pessoal com os projetos que desenvolvi: automações, integrações e sistemas web.

Feito com **Next.js 16** e **React 19**, exportado como site estático e publicado na **Vercel**.

## Como atualizar o conteúdo

Todo o texto do site fica em **dois arquivos**. Não precisa mexer no layout.

| Quero mudar... | Arquivo |
|---|---|
| WhatsApp, e-mail, Fiverr, LinkedIn | `content/perfil.ts` |
| Projetos, páginas no ar e casos de operação | `content/projetos.ts` |

### Adicionar um projeto

1. Abra `content/projetos.ts`.
2. Copie um bloco `{ ... }` da lista `projetos`, cole no fim e troque os textos.
3. Em `status`, use `"no-ar"` (tem link público), `"privado"` (sistema interno) ou `"codigo"` (código aberto no GitHub).
4. Salve e envie para o GitHub. A Vercel publica sozinha em cerca de 1 minuto.

### Adicionar prints

1. Coloque as imagens em `public/projetos/<nome-do-projeto>/` (ex.: `public/projetos/gestorpro/painel.png`).
2. No projeto, preencha `imagens: ["/projetos/gestorpro/painel.png"]`.

Antes de subir um print, confira se não aparece **nenhum** dado real: senha, e-mail, telefone ou nome de cliente.

## Rodar no computador

```bash
npm install
npm run dev     # abre em http://localhost:3000
npm run build   # gera o site final na pasta out/
```

## Estrutura

```
app/            página, layout e estilos (globals.css guarda as cores e fontes)
components/     diagrama do topo e blocos de projeto
content/        os textos do site (é aqui que você edita)
public/         imagens
```

# Odontologia Craveiro

Página estilo link na bio para divulgação de atendimento odontológico homecare,
domiciliar e hospitalar.

## Como rodar

```bash
npm install
npm run dev
```

A página pública abre em `/`. Em desenvolvimento local, o painel simples de
cadastro abre em `/#admin`.

## Como editar

- Atualize nome, CRO, WhatsApp, Instagram e textos no painel local `/#admin`.
- Troque a imagem de fundo do topo e o logo/monograma no mesmo painel.
- Cadastre novos botões em "Botões cadastrados"; eles aparecem na prévia e na
  página pública deste navegador após salvar.
- O botão "Agende sua consulta aqui" usa o campo WhatsApp e a mensagem inicial.

## Sobre hospedagem na Vercel

Este projeto funciona como site estático no Vercel. Por segurança, o painel
`/#admin` fica disponível apenas em desenvolvimento local e não abre no build de
produção. Para editar conteúdo online com login real, integre autenticação e um
banco/serviço de conteúdo como Supabase, Vercel KV ou outro CMS.

Build command:

```bash
npm run build
```

Output directory:

```bash
dist
```

## Imagem

A imagem principal fica em `public/assets/homecare-dental.png`.

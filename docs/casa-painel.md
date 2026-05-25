# Painel Casa

Página privada de organização de marketing da Odonto em Casa / Dra. Patrícia.

## Acesso

Produção:

```text
https://odontoemcasa.com.br/casa/
```

O painel usa Basic Auth via Vercel Function. Ele não é rota pública do React, não entra no sitemap e não deve ser linkado em menus, rodapé ou páginas públicas.

## Variáveis de ambiente na Vercel

Configure no projeto da Vercel:

```text
CASA_PANEL_USER
CASA_PANEL_PASSWORD
```

Se alguma variável não estiver configurada, a função falha fechada e não libera o conteúdo.

## Teste local

Para testar a autenticação da função diretamente:

```bash
CASA_PANEL_USER=usuario CASA_PANEL_PASSWORD=senha node scripts/test-casa-auth.mjs
```

Para testar a build e SEO:

```bash
npm run build
npm run seo:generate
npm run seo:validate
```

## Teste em produção

1. Acesse `https://odontoemcasa.com.br/casa/`.
2. Confirme que o navegador solicita usuário e senha.
3. Informe os valores de `CASA_PANEL_USER` e `CASA_PANEL_PASSWORD`.
4. Confirme que o painel abre e que os headers incluem:
   - `X-Robots-Tag: noindex, nofollow`
   - `Cache-Control: no-store`
   - `X-Frame-Options: DENY`
   - `Referrer-Policy: no-referrer`

## Progresso

O progresso dos checkboxes é salvo no `localStorage` do navegador com a chave:

```text
odonto-casa-marketing-checklist-v1
```

Esse progresso fica restrito ao navegador/dispositivo. Para migrar para outro dispositivo, use "Exportar progresso JSON" e depois "Importar progresso JSON".

## Uso correto

O painel é apenas para planejamento e execução de marketing. Não use a página para registrar dados de pacientes, informações clínicas, senhas, documentos pessoais ou qualquer dado sensível.

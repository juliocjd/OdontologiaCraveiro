# Deploy notes

## Domínio canônico

URL canônica do site:

```text
https://odontoemcasa.com.br/
```

O arquivo `vercel.json` redireciona o host `www.odontoemcasa.com.br` para
`https://odontoemcasa.com.br/*` com redirect permanente.

Na Vercel, confirme em **Project Settings > Domains**:

- `odontoemcasa.com.br` está cadastrado como domínio principal.
- `www.odontoemcasa.com.br` também está cadastrado no projeto para que o redirect por host seja aplicado.
- O certificado HTTPS está ativo para os dois hosts. A Vercel normalmente redireciona HTTP para HTTPS automaticamente quando o domínio está configurado.

## DNS

No provedor DNS, aponte:

- `odontoemcasa.com.br` para o destino recomendado pela Vercel para apex/root domain.
- `www.odontoemcasa.com.br` para o destino recomendado pela Vercel.

Não configure redirecionamento genérico de todas as URLs antigas para a home.
URLs inexistentes devem retornar 404 para evitar soft 404.

## Prerender por rota

O build (`npm run build`) gera um arquivo HTML estático e distinto para cada rota
pública (`dist/servicos/index.html`, `dist/sobre/index.html` etc.), já com
`<title>`, meta description, canonical, Open Graph e JSON-LD corretos daquela
página e com o conteúdo visível (h1, texto) pronto no HTML — sem depender de
JavaScript rodar. Isso é feito por `scripts/prerender.mjs`, a partir de um bundle
de servidor gerado por `vite build --ssr src/entry-server.jsx`. O React ainda
hidrata o mesmo HTML no client para manter a navegação da SPA e o menu mobile.

Antes dessa mudança, `vercel.json` reescrevia todas as rotas para o mesmo
`/index.html`, então qualquer bot que não executasse JavaScript (crawlers no
primeiro passo de rastreamento, prévias de link do WhatsApp/Instagram/Twitter)
via sempre o título e a descrição da home, não importa a página compartilhada.
`npm run seo:validate` agora falha o build se algum arquivo prerenderizado
estiver faltando ou com `<title>`/canonical/JSON-LD errado — não só a
configuração-fonte.

## 404

O projeto inclui `public/404.html` com `noindex,follow`. O `vercel.json` não tem
mais rewrite genérico para rotas de conteúdo: cada rota pública existe como
arquivo estático real em `dist/`, então a Vercel serve o arquivo diretamente.
Caminhos antigos ou desconhecidos não têm arquivo correspondente e devem cair
no 404 estático da hospedagem.

## Pós-deploy

1. Testar o host `www.odontoemcasa.com.br` em `/servicos/` e confirmar 301 para `https://odontoemcasa.com.br/servicos/`.
2. Testar uma URL inexistente e confirmar HTTP 404, sem redirect para a home.
3. Enviar `https://odontoemcasa.com.br/sitemap.xml` no Google Search Console.
4. Atualizar o Perfil da Empresa no Google com o link de serviços: `https://odontoemcasa.com.br/servicos/`.

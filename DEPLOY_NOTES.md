# Deploy notes

## Domínio canônico

URL canônica do site:

```text
https://www.odontoemcasa.com.br/
```

O arquivo `vercel.json` redireciona `https://odontoemcasa.com.br/*` para
`https://www.odontoemcasa.com.br/*` com redirect permanente.

Na Vercel, confirme em **Project Settings > Domains**:

- `www.odontoemcasa.com.br` está cadastrado como domínio principal.
- `odontoemcasa.com.br` também está cadastrado no projeto para que o redirect por host seja aplicado.
- O certificado HTTPS está ativo para os dois hosts. A Vercel normalmente redireciona HTTP para HTTPS automaticamente quando o domínio está configurado.

## DNS

No provedor DNS, aponte:

- `www.odontoemcasa.com.br` para o destino recomendado pela Vercel.
- `odontoemcasa.com.br` para o destino recomendado pela Vercel para apex/root domain.

Não configure redirecionamento genérico de todas as URLs antigas para a home.
URLs inexistentes devem retornar 404 para evitar soft 404.

## 404

O projeto inclui `public/404.html` com `noindex,follow`. O `vercel.json` reescreve
apenas as rotas públicas conhecidas para a SPA. Caminhos antigos ou desconhecidos
devem cair no 404 estático da hospedagem.

## Pós-deploy

1. Testar `https://odontoemcasa.com.br/servicos/` e confirmar 301 para `https://www.odontoemcasa.com.br/servicos/`.
2. Testar uma URL inexistente e confirmar HTTP 404, sem redirect para a home.
3. Enviar `https://www.odontoemcasa.com.br/sitemap.xml` no Google Search Console.
4. Atualizar o Perfil da Empresa no Google com o link de serviços: `https://www.odontoemcasa.com.br/servicos/`.

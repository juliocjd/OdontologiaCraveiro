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

## 404

O projeto inclui `public/404.html` com `noindex,follow`. O `vercel.json` reescreve
apenas as rotas públicas conhecidas para a SPA. Caminhos antigos ou desconhecidos
devem cair no 404 estático da hospedagem.

## Pós-deploy

1. Testar o host `www.odontoemcasa.com.br` em `/servicos/` e confirmar 301 para `https://odontoemcasa.com.br/servicos/`.
2. Testar uma URL inexistente e confirmar HTTP 404, sem redirect para a home.
3. Enviar `https://odontoemcasa.com.br/sitemap.xml` no Google Search Console.
4. Atualizar o Perfil da Empresa no Google com o link de serviços: `https://odontoemcasa.com.br/servicos/`.

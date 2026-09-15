# 🦈 Bot Tubarão — Landing Page

Landing page premium do **Bot Tubarão**, por **Richard Barbosa**.
Feita com React + Vite + Tailwind CSS.

---

## ▶️ Como rodar no seu computador

```bash
npm install     # instala as dependências (só na primeira vez)
npm run dev     # abre o site em http://localhost:5173
```

Para gerar a versão final (pasta `dist/`):

```bash
npm run build
```

---

## ✏️ Como alterar o WhatsApp e os textos

Abra o arquivo **`src/config.ts`** e edite:

- `whatsapp` → seu número (só dígitos, com código do país). Atual: `258865674459`
- `mensagemPadrao` → a mensagem que o cliente envia ao clicar no botão

---

## 🚀 Publicar no GitHub Pages (deploy automático)

Este repositório já vem com deploy automático configurado.
Toda vez que você enviar código para a branch `main`, o site é atualizado sozinho.

### Passo a passo (só 1 vez):

1. Crie o repositório no GitHub (veja instruções abaixo).
2. Envie o código.
3. No GitHub, vá em **Settings → Pages**.
4. Em **Build and deployment → Source**, escolha **GitHub Actions**.
5. Pronto! Em poucos minutos o site estará no ar no link mostrado.

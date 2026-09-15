// Configurações do site — edite aqui facilmente
export const CONFIG = {
  nome: "Richard Barbosa",
  // Número do WhatsApp no formato internacional, apenas dígitos.
  // Ex.: 5511999999999 (Brasil) ou 244923000000 (Angola)
  whatsapp: "258865674459",
  mensagemPadrao:
    "Olá Richard! Vi a página do Bot Tubarão 🦈 e quero começar a lucrar como os grandes players. Como faço?",
};

export const whatsappLink = () =>
  `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(
    CONFIG.mensagemPadrao
  )}`;

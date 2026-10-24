export const formatFileSizeDisplay = value => {
  if (value < 1024) {
    return `${value} KB`;
  }
  return `${parseFloat((value / 1024).toFixed(1))} MB`;
};

// wa.me link for the configured WhatsApp number, optionally with a
// pre-filled message. Returns null when no number is set.
export const whatsappLink = (number, message = "") => {
  const digits = String(number || "").replace(/\D/g, "");
  if (!digits) return null;
  return message
    ? `https://wa.me/${digits}?text=${encodeURIComponent(message)}`
    : `https://wa.me/${digits}`;
};

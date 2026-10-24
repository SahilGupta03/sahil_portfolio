import React from "react";
import "./WhatsAppButton.scss";
import {WhatsAppIcon} from "../icons/Icons";
import {profile} from "../../portfolio";
import {whatsappLink} from "../../utils";

/* Floating WhatsApp chat button. Hidden when no number is configured. */
export default function WhatsAppButton() {
  const href = whatsappLink(
    profile.whatsapp,
    "Hi Sahil, I'd like to discuss a project."
  );
  if (!href) return null;

  return (
    <a
      className="whatsapp-fab"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp (opens in a new tab)"
    >
      <WhatsAppIcon size={26} />
    </a>
  );
}

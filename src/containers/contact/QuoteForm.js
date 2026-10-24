import React, {useState} from "react";
import "./QuoteForm.scss";
import Reveal from "../../components/reveal/Reveal";
import {
  ArrowRightIcon,
  CheckIcon,
  WhatsAppIcon
} from "../../components/icons/Icons";
import {contact, profile} from "../../portfolio";
import {whatsappLink} from "../../utils";

const initial = {name: "", reach: "", type: "", message: "", botcheck: false};
const WEB3FORMS_URL = "https://api.web3forms.com/submit";

/* "Get a quote" form. With a Web3Forms key the enquiry is emailed straight
   to the inbox; without one, submitting opens the visitor's email app.
   WhatsApp sends the same details as a pre-filled chat message. */
export default function QuoteForm() {
  const [values, setValues] = useState(initial);
  const [error, setError] = useState("");
  // idle | sending | sent
  const [status, setStatus] = useState("idle");
  const canWhatsApp = Boolean(whatsappLink(profile.whatsapp));

  const update = event => {
    const {name, value, type, checked} = event.target;
    setValues(current => ({
      ...current,
      [name]: type === "checkbox" ? checked : value
    }));
    if (error) setError("");
  };

  const subject = `Quote request: ${values.type || "New project"}`;

  const body = () =>
    [
      `Hi Sahil,`,
      ``,
      `Name: ${values.name}`,
      `Contact: ${values.reach}`,
      `Project type: ${values.type || "Not sure yet"}`,
      ``,
      values.message
    ].join("\n");

  const validate = () => {
    if (!values.name.trim() || !values.reach.trim() || !values.message.trim()) {
      setError("Please fill in your name, how to reach you and your project.");
      return false;
    }
    return true;
  };

  const openMailApp = () => {
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body())}`;
  };

  const sendEmail = async event => {
    event.preventDefault();
    if (status === "sending" || !validate()) return;

    if (!contact.web3formsKey) {
      openMailApp();
      return;
    }

    setStatus("sending");
    const reach = values.reach.trim();
    try {
      const response = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json", Accept: "application/json"},
        body: JSON.stringify({
          access_key: contact.web3formsKey,
          subject,
          from_name: "Portfolio quote form",
          name: values.name.trim(),
          // Lets you hit "Reply" in your inbox when they left an email.
          ...(reach.includes("@") ? {email: reach} : {}),
          contact: reach,
          project_type: values.type || "Not sure yet",
          message: values.message.trim(),
          botcheck: values.botcheck
        })
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok || result.success === false) throw new Error();
      setStatus("sent");
      setValues(initial);
    } catch (e) {
      setStatus("idle");
      setError(
        `Couldn't send right now. Please email ${profile.email}${
          canWhatsApp ? " or message me on WhatsApp" : ""
        }.`
      );
    }
  };

  const sendWhatsApp = () => {
    if (!validate()) return;
    window.open(
      whatsappLink(profile.whatsapp, body()),
      "_blank",
      "noopener,noreferrer"
    );
  };

  if (status === "sent") {
    return (
      <Reveal className="quote">
        <div className="quote__success" role="status">
          <span className="quote__success-icon" aria-hidden="true">
            <CheckIcon size={22} />
          </span>
          <div>
            <p className="quote__success-title">Thanks — message received!</p>
            <p className="quote__note">
              I'll get back to you with a quote, usually within 24 hours.
            </p>
            <button
              type="button"
              className="text-link quote__again"
              onClick={() => setStatus("idle")}
            >
              Send another enquiry
            </button>
          </div>
        </div>
      </Reveal>
    );
  }

  const sending = status === "sending";

  return (
    <Reveal className="quote">
      <form className="quote__form" onSubmit={sendEmail} noValidate>
        <p className="quote__label mono">Get a free quote</p>

        <div className="quote__row">
          <label className="field">
            <span className="field__label">Your name</span>
            <input
              className="field__input"
              name="name"
              autoComplete="name"
              value={values.name}
              onChange={update}
              required
            />
          </label>
          <label className="field">
            <span className="field__label">Email or phone</span>
            <input
              className="field__input"
              name="reach"
              autoComplete="email"
              value={values.reach}
              onChange={update}
              required
            />
          </label>
        </div>

        <label className="field">
          <span className="field__label">What do you need?</span>
          <select
            className="field__input"
            name="type"
            value={values.type}
            onChange={update}
          >
            <option value="">Choose one (optional)</option>
            {contact.projectTypes.map(type => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>

        <label className="field">
          <span className="field__label">Tell me about your project</span>
          <textarea
            className="field__input field__input--area"
            name="message"
            rows={5}
            placeholder="What it's for, pages or features you need, any deadline…"
            value={values.message}
            onChange={update}
            required
          />
        </label>

        {/* Spam honeypot: hidden from people, bots tick it. */}
        <input
          type="checkbox"
          name="botcheck"
          className="quote__honeypot"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          checked={values.botcheck}
          onChange={update}
        />

        <p className="quote__error" role="alert">
          {error}
        </p>

        <div className="quote__actions">
          <button
            type="submit"
            className="btn btn--primary"
            disabled={sending}
            aria-busy={sending}
          >
            <span className="btn__label">
              <span className="btn__text">
                {sending ? "Sending…" : "Send enquiry"}
              </span>
              <span className="btn__text btn__text--clone" aria-hidden="true">
                {sending ? "Sending…" : "Send enquiry"}
              </span>
            </span>
            <span className="btn__icon">
              <ArrowRightIcon size={16} />
            </span>
          </button>
          {canWhatsApp && (
            <button
              type="button"
              className="btn btn--secondary"
              onClick={sendWhatsApp}
            >
              <span className="btn__label">
                <span className="btn__text">Send on WhatsApp</span>
                <span
                  className="btn__text btn__text--clone"
                  aria-hidden="true"
                >
                  Send on WhatsApp
                </span>
              </span>
              <span className="btn__icon">
                <WhatsAppIcon size={16} />
              </span>
            </button>
          )}
        </div>
        <p className="quote__note">
          Free, no obligation. I usually reply within 24 hours.
        </p>
      </form>
    </Reveal>
  );
}

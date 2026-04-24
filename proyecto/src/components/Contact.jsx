import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus(t("contact.sending"));

    try {
      await emailjs.sendForm(
      "service_m8sdwfg",
      "template_s19g79n",
      form.current,
      {
        publicKey: "lRtnxZlmLL2En1neE",
      }
    )

      setStatus(t("contact.success"));
      form.current.reset();
    } catch (error) {
      setStatus(t("contact.error"));
    }
  };

  return (
    <section id="contacto" className="px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-4 text-center section-title">
        {t("contact.title")}
      </h2>
      <p className="text-white/75 mb-10 text-center max-w-2xl mx-auto"></p>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="glass-card rounded-2xl p-6 space-y-4"
      >
        <input
          type="text"
          name="user_name"
          required
          placeholder={t("contact.name")}
          className="w-full rounded-xl bg-black/40 border border-main/30 px-4 py-3 text-white"
        />
        <input
          type="email"
          name="user_email"
          required
          placeholder={t("contact.email")}
          className="w-full rounded-xl bg-black/40 border border-main/30 px-4 py-3 text-white"
        />
        <textarea
          name="message"
          rows="5"
          required
          placeholder={t("contact.message")}
          className="w-full rounded-xl bg-black/40 border border-main/30 px-4 py-3 text-white"
        />
        <button
          type="submit"
          className="w-full rounded-xl bg-main py-3 font-semibold text-white hover:bg-accent hover:text-black transition-all duration-300"
        >
          {t("contact.send")}
        </button>

        {status && <p className="text-sm text-white/75">{status}</p>}
      </form>
    </section>
  );
};

export default Contact;
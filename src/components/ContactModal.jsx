import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import emailjs from "@emailjs/browser";
import Button from "./Button";
import { useToast } from "../hooks/useToast";

export default function ContactModal({ open, onClose }) {
  const dialogRef = useRef(null);
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose?.();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  const onInput = (e) => {
    setError("");
    setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    if (!values.name.trim()) return "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      return "Please enter a valid email";
    if (values.message.trim().length < 5) return "Message is too short";
    return "";
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    const err = validate();
    if (err) {
      setError(err);
      toast({
        title: "Validation error",
        description: err,
        variant: "destructive",
      });
      return;
    }

    const pending = toast({
      title: "Sending…",
      description: "Your message is being sent.",
    });

    try {
      setSending(true);
      const SERVICE_ID = "service_yw49mxw";
      const TEMPLATE_ID = "template_97qdnok";
      const PUBLIC_KEY = "xd3v2_Q-_u2aSQyxg";

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: values.name,
          from_email: values.email,
          message: values.message,
        },
        PUBLIC_KEY
      );

      pending.update({
        title: "Message sent ✅",
        description: "Thanks! I’ll get back to you soon.",
      });

      setValues({ name: "", email: "", message: "" });
      onClose?.();
    } catch (err) {
      console.error("EmailJS error:", err);

      pending.update({
        title: "Failed to send",
        description:
          "Something went wrong. I’ll open your email client as a fallback.",
        variant: "destructive",
      });

      const subject = encodeURIComponent(
        `Portfolio message from ${values.name}`
      );
      const body = encodeURIComponent(
        `${values.message}\n\nFrom: ${values.name} <${values.email}>`
      );
      window.location.href = `mailto:your@email.com?subject=${subject}&body=${body}`;
    } finally {
      setSending(false);
    }
  };

  const modal = (
    <div
      onClick={(e) => e.target === e.currentTarget && onClose?.()}
      className="
        fixed inset-0 z-[9999] grid place-items-center
        bg-[hsl(var(--foreground)/0.08)] dark:bg-[hsl(var(--foreground)/0.45)]
        backdrop-blur-[10px]
        animate-fade-in
      "
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
        className="
          w-[min(640px,92vw)]
          rounded-2xl p-6
          text-foreground
          bg-card
          border border-border
          shadow-[0_24px_60px_hsl(var(--foreground)/0.20)]
          max-md:rounded-xl max-md:p-4
        "
      >
        <h3 id="contact-title" className="m-0 mb-1 text-xl font-bold">
          Contact me
        </h3>

        <p className="m-0 mb-3 text-[0.95rem] opacity-80">
          I'll get back to you as soon as possible.
        </p>

        <form
          onSubmit={sendEmail}
          noValidate
          className="grid gap-[14px] max-[560px]:gap-[10px]"
        >
          <div className="grid grid-cols-2 gap-3 max-[560px]:grid-cols-1">
            <div>
              <label
                htmlFor="name"
                className="mb-1 block text-[0.85rem] opacity-85"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                value={values.name}
                onChange={onInput}
                placeholder="Your name"
                autoComplete="name"
                enterKeyHint="next"
                className="
                  w-full h-11 rounded-xl outline-none
                  px-[14px] py-[10px]
                  border border-border
                  bg-[hsl(var(--foreground)/0.06)]
                  text-foreground
                  placeholder:text-foreground/55
                  transition
                  focus:bg-[hsl(var(--foreground)/0.12)]
                  focus:border-primary
                  focus:ring-4 focus:ring-primary/25
                "
                style={{ fontSize: 16 }}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-[0.85rem] opacity-85"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={onInput}
                placeholder="you@example.com"
                autoComplete="email"
                inputMode="email"
                enterKeyHint="next"
                className="
                  w-full h-11 rounded-xl outline-none
                  px-[14px] py-[10px]
                  border border-border
                  bg-[hsl(var(--foreground)/0.06)]
                  text-foreground
                  placeholder:text-foreground/55
                  transition
                  focus:bg-[hsl(var(--foreground)/0.12)]
                  focus:border-primary
                  focus:ring-4 focus:ring-primary/25
                "
                style={{ fontSize: 16 }}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-1 block text-[0.85rem] opacity-85"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={values.message}
              onChange={onInput}
              placeholder="Write your message..."
              autoComplete="off"
              enterKeyHint="send"
              className="
                w-full rounded-xl outline-none
                px-[14px] py-[10px]
                border border-border
                bg-[hsl(var(--foreground)/0.06)]
                text-foreground
                placeholder:text-foreground/55
                transition
                resize-y leading-[1.4]
                min-h-[140px] max-[560px]:min-h-[120px]
                focus:bg-[hsl(var(--foreground)/0.12)]
                focus:border-primary
                focus:ring-4 focus:ring-primary/25
              "
              style={{ fontSize: 16 }}
            />
          </div>

          {error && (
            <div className="mt-[-4px] text-[0.85rem] break-words text-destructive">
              {error}
            </div>
          )}

          <div className="mt-1.5 flex justify-end gap-[10px] max-[560px]:flex-col-reverse max-[560px]:items-stretch max-[560px]:justify-center max-[560px]:gap-2">
            <Button
              type="button"
              className="
                max-[560px]:w-full max-[560px]:min-h-11
                bg-transparent text-foreground border border-border
                hover:bg-[hsl(var(--foreground)/0.06)]
              "
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="
                max-[560px]:w-full max-[560px]:min-h-11
                bg-primary text-primary-foreground
                hover:bg-primary/90
                disabled:opacity-70
              "
              disabled={sending}
            >
              {sending ? "Sending..." : "Send"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}

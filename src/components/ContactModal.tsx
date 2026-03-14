import { useEffect, useRef, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import emailjs from "@emailjs/browser";
import Button from "./Button.tsx";
import { useToast } from "../hooks/useToast.ts";

const OWNER_EMAIL = "dtimofeev04@gmail.com";
const COOLDOWN_MS = 30_000; // 30 s between submissions

interface FormValues {
  name: string;
  email: string;
  message: string;
}

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

function validate(values: FormValues): string {
  if (!values.name.trim()) return "Please enter your name";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    return "Please enter a valid email";
  if (values.message.trim().length < 5) return "Message is too short";
  return "";
}

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const [values, setValues] = useState<FormValues>({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [lastSentAt, setLastSentAt] = useState<number | null>(null);
  const { toast } = useToast();

  const firstFocusableRef = useRef<HTMLInputElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Escape key + body scroll lock
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  // Auto-focus first input when modal opens
  useEffect(() => {
    if (open) {
      setTimeout(() => firstFocusableRef.current?.focus(), 50);
    }
  }, [open]);

  // Focus trap: keep Tab within the modal
  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "Tab" || !overlayRef.current) return;
    const focusable = overlayRef.current.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (!first || !last) return;

    if (e.shiftKey) {
      if (document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    } else {
      if (document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  }, []);

  if (!open) return null;

  const onInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setError("");
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    const err = validate(values);
    if (err) {
      setError(err);
      toast({ title: "Validation error", description: err, variant: "destructive" });
      return;
    }

    // Rate limiting
    if (lastSentAt && Date.now() - lastSentAt < COOLDOWN_MS) {
      const secs = Math.ceil((COOLDOWN_MS - (Date.now() - lastSentAt)) / 1000);
      toast({
        title: "Please wait",
        description: `You can send another message in ${secs}s.`,
        variant: "destructive",
      });
      return;
    }

    const pending = toast({ title: "Sending…", description: "Your message is being sent." });

    try {
      setSending(true);
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { from_name: values.name, from_email: values.email, message: values.message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setLastSentAt(Date.now());
      pending.update({ title: "Message sent ✓", description: "Thanks! I'll get back to you soon." });
      setValues({ name: "", email: "", message: "" });
      onClose();
    } catch {
      pending.update({
        title: "Failed to send",
        description: "Something went wrong. Opening your email client as a fallback.",
        variant: "destructive",
      });

      const subject = encodeURIComponent(`Portfolio message from ${values.name}`);
      const body = encodeURIComponent(`${values.message}\n\nFrom: ${values.name} <${values.email}>`);
      window.location.href = `mailto:${OWNER_EMAIL}?subject=${subject}&body=${body}`;
    } finally {
      setSending(false);
    }
  };

  const inputClass =
    "w-full h-11 rounded-xl outline-none px-[14px] py-[10px] border border-border bg-[hsl(var(--foreground)/0.06)] text-foreground placeholder:text-foreground/55 transition focus:bg-[hsl(var(--foreground)/0.12)] focus:border-primary focus:ring-4 focus:ring-primary/25";

  const modal = (
    <div
      ref={overlayRef}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      onKeyDown={handleKeyDown}
      className="fixed inset-0 z-[9999] grid place-items-center bg-[hsl(var(--foreground)/0.08)] dark:bg-[hsl(var(--foreground)/0.45)] backdrop-blur-[10px] animate-fade-in"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
        className="w-[min(640px,92vw)] rounded-2xl p-6 text-foreground bg-card border border-border shadow-[0_24px_60px_hsl(var(--foreground)/0.20)] max-md:rounded-xl max-md:p-4"
      >
        <h3 id="contact-title" className="m-0 mb-1 text-xl font-bold">
          Contact me
        </h3>
        <p className="m-0 mb-3 text-[0.95rem] opacity-80">
          I'll get back to you as soon as possible.
        </p>

        <form onSubmit={sendEmail} noValidate className="grid gap-[14px] max-[560px]:gap-[10px]">
          <div className="grid grid-cols-2 gap-3 max-[560px]:grid-cols-1">
            <div>
              <label htmlFor="name" className="mb-1 block text-[0.85rem] opacity-85">
                Name
              </label>
              <input
                ref={firstFocusableRef}
                id="name"
                name="name"
                value={values.name}
                onChange={onInput}
                placeholder="Your name"
                autoComplete="name"
                enterKeyHint="next"
                className={inputClass}
                style={{ fontSize: 16 }}
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-[0.85rem] opacity-85">
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
                className={inputClass}
                style={{ fontSize: 16 }}
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="mb-1 block text-[0.85rem] opacity-85">
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
              className={`${inputClass} h-auto resize-y leading-[1.4] min-h-[140px] max-[560px]:min-h-[120px]`}
              style={{ fontSize: 16 }}
            />
          </div>

          {error && (
            <div role="alert" className="mt-[-4px] text-[0.85rem] break-words text-destructive">
              {error}
            </div>
          )}

          <div className="mt-1.5 flex justify-end gap-[10px] max-[560px]:flex-col-reverse max-[560px]:items-stretch max-[560px]:justify-center max-[560px]:gap-2">
            <Button
              type="button"
              className="max-[560px]:w-full max-[560px]:min-h-11 bg-transparent text-foreground border border-border hover:bg-[hsl(var(--foreground)/0.06)]"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="max-[560px]:w-full max-[560px]:min-h-11 bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-70"
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

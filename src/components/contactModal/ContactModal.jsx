import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import emailjs from "@emailjs/browser";
import Button from "../button/Button";
import {
  Backdrop,
  Dialog,
  Title,
  Sub,
  Form,
  Row,
  Label,
  Input,
  Textarea,
  Actions,
  ErrorText,
} from "./styles";

export default function ContactModal({ open, onClose }) {
  const dialogRef = useRef(null);
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

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
      return;
    }

    try {
      setSending(true);
      const SERVICE_ID = "service_yw49mxw";
      const TEMPLATE_ID = "template_97qdnok";
      const PUBLIC_KEY = "xd3v2_Q-_u2aSQyxg";

      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: values.name,
          from_email: values.email,
          message: values.message,
        },
        { publicKey: PUBLIC_KEY }
      );

      setValues({ name: "", email: "", message: "" });
      onClose?.();
    } catch (err) {
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
    <Backdrop onClick={(e) => e.target === e.currentTarget && onClose?.()}>
      <Dialog
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
      >
        <Title id="contact-title">Contact me</Title>
        <Sub>I'll get back to you as soon as possible.</Sub>

        <Form onSubmit={sendEmail}>
          <Row>
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={values.name}
                onChange={onInput}
                placeholder="Your name"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={onInput}
                placeholder="you@example.com"
              />
            </div>
          </Row>

          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              value={values.message}
              onChange={onInput}
              placeholder="Write your message..."
            />
          </div>

          {error && <ErrorText>{error}</ErrorText>}

          <Actions>
            <Button onClick={onClose}>Cancel</Button>
            <Button disabled={sending}>
              {sending ? "Sending..." : "Send"}
            </Button>
          </Actions>
        </Form>
      </Dialog>
    </Backdrop>
  );

  return createPortal(modal, document.body);
}

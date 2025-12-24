import React, { useState } from "react";
import { Mail, X, Instagram } from "lucide-react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby04Qr2jpaXIMX7l3jdu7LwKahwExFw5qPbbxa1wTUrTRg1rohIVuOmiXehtj0JVqklGA/exec";

const WHATSAPP_NUMBER = "+917875323237"; // 🔴 change
const INSTAGRAM_URL = "https://www.instagram.com/infinity_pavilion?igsh=ZXdzdmNkemJ5bG03"; // 🔴 change

const FloatingContact: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    event: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new URLSearchParams();
    Object.entries(form).forEach(([k, v]) => formData.append(k, v));

    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      body: formData,
      mode: "no-cors",
    });

    setLoading(false);
    setSuccess(true);

    // ✅ AUTO CLOSE AFTER SUBMIT
    setTimeout(() => {
      setOpen(false);
      setSuccess(false);
      setForm({
        name: "",
        email: "",
        phone: "",
        eventDate: "",
        event: "",
        message: "",
      });
    }, 2000);
  };

  return (
    <>
      {/* ================= FLOATING GOLD BAR ================= */}
      <div
        style={{
          position: "fixed",
          right: 0,
          top: "35%",
          zIndex: 90,
          display: "flex",
          flexDirection: "column",
          borderRadius: "16px 0 0 16px",
          overflow: "hidden",
          boxShadow:
            "-6px 8px 24px rgba(0,0,0,0.35), 0 0 18px rgba(217,164,65,0.45)",
        }}
      >
        {/* CONTACT US – GOLD */}
        <button
          onClick={() => setOpen(true)}
          style={{
            background: "linear-gradient(180deg,#EDD79A,#D9A441)",
            color: "#111",
            padding: "18px 14px",
            border: "none",
            cursor: "pointer",
            writingMode: "vertical-rl",
            letterSpacing: "0.14em",
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            gap: 6,
          }}
        >
          <Mail size={16} />
          CONTACT&nbsp;US
        </button>

        {/* WHATSAPP */}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noreferrer"
          style={{
            background: "#25D366",
            padding: "18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            width={22}
          />
        </a>

        {/* INSTAGRAM */}
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noreferrer"
          style={{
            background:
              "linear-gradient(135deg,#F58529,#DD2A7B,#8134AF,#515BD4)",
            padding: "18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Instagram color="#fff" size={22} />
        </a>
      </div>

      {/* ================= OVERLAY ================= */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
            zIndex: 95,
          }}
        />
      )}

      {/* ================= POPUP DRAWER ================= */}
      <div
        style={{
          position: "fixed",
          right: open ? 0 : "-100%",
          top: 0,
          height: "100vh",
          width: "100%",
          maxWidth: 420,
          background: "#F7EEDB",
          zIndex: 100,
          transition: "right 0.4s ease",
          boxShadow: "-12px 0 40px rgba(0,0,0,0.35)",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            background: "#111",
            color: "#fff",
            padding: "14px 18px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={{ letterSpacing: "0.18em", display: "flex", gap: 8 }}>
            <Mail size={16} /> CONTACT
          </span>
          <button
            onClick={() => setOpen(false)}
            style={{
              background: "transparent",
              border: "none",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            <X />
          </button>
        </div>

        {/* ================= CONTACT FORM ================= */}
        <form
          onSubmit={handleSubmit}
          style={{
            margin: 16,
            background: "linear-gradient(180deg,#F1D598,#E7C16D)",
            padding: 18,
            borderRadius: 20,
            boxShadow: "0 14px 30px rgba(0,0,0,0.12)",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          <div
            style={{
              fontSize: 11,
              letterSpacing: "0.22em",
              color: "#7A5A1A",
              textTransform: "uppercase",
              textAlign: "center",
            }}
          >
            Inquiry
          </div>

          <h2
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "1.6rem",
              textAlign: "center",
            }}
          >
            Let’s plan your celebration
          </h2>

          {[
            { name: "name", placeholder: "Your Name", type: "text" },
            { name: "email", placeholder: "Email Address", type: "email" },
            { name: "phone", placeholder: "Phone Number", type: "text" },
            { name: "eventDate", placeholder: "", type: "date" },
            { name: "event", placeholder: "Type of Event", type: "text" },
          ].map((f) => (
            <input
              key={f.name}
              name={f.name}
              type={f.type}
              placeholder={f.placeholder}
              required={f.name !== "event"}
              value={(form as any)[f.name]}
              onChange={handleChange}
              style={inputStyle}
            />
          ))}

          <textarea
            name="message"
            rows={3}
            placeholder="Tell us about your event"
            value={form.message}
            onChange={handleChange}
            style={{ ...inputStyle, resize: "none" }}
          />

          <button type="submit" disabled={loading} style={submitStyle}>
            {loading ? "Sending..." : "Send Inquiry"}
          </button>

          {success && (
            <div style={{ color: "#1b5e20", fontWeight: 600, textAlign: "center" }}>
              Inquiry sent successfully ✔
            </div>
          )}
        </form>
      </div>
    </>
  );
};

const inputStyle: React.CSSProperties = {
  padding: "12px 14px",
  borderRadius: 12,
  border: "1px solid rgba(0,0,0,0.25)",
  fontSize: 14,
  background: "#E3B968",
  color: "#111",
};

const submitStyle: React.CSSProperties = {
  marginTop: 4,
  padding: 12,
  borderRadius: 999,
  border: "none",
  background: "linear-gradient(90deg,#D9A441,#EDD79A)",
  fontWeight: 700,
  cursor: "pointer",
  boxShadow: "0 8px 20px rgba(217,164,65,0.55)",
};

export default FloatingContact;

import React, { useState } from "react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby04Qr2jpaXIMX7l3jdu7LwKahwExFw5qPbbxa1wTUrTRg1rohIVuOmiXehtj0JVqklGA/exec";

const ContactSection: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    event: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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
    setForm({
      name: "",
      email: "",
      phone: "",
      eventDate: "",
      event: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      itemScope
      itemType="https://schema.org/EventVenue"
      style={{ background: "#F7EEDB", color: "#111" }}
    >
      {/* ✅ SCHEMA SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EventVenue",
            name: "Infinity Pavilion",
            description:
              "Luxury event venue for weddings, receptions, corporate events and celebrations.",
            telephone: "+91-7875323237",
            email: "infinitypavilion@gmail.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Your Address Line",
              addressLocality: "City",
              addressRegion: "State",
              postalCode: "000000",
              addressCountry: "IN",
            },
            url: "https://www.infinitypavilion.com",
          }),
        }}
      />

      <style>{`
        .ct-section {
          padding: 80px 16px;
        }

        .ct-wrap {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          gap: 40px;
        }

        @media (min-width: 900px) {
          .ct-wrap {
            grid-template-columns: 1.2fr 0.8fr;
            gap: 50px;
          }
        }

        .ct-card {
          background: #F1D598;
          padding: 28px;
          border-radius: 20px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.08);
          color: #111;
        }

        @media (min-width: 768px) {
          .ct-card {
            padding: 36px;
          }
        }

        .ct-eyebrow {
          font-size: 20px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #B8944E;
          margin-bottom: 8px;
        }

        .ct-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.6rem, 4vw, 2rem);
          margin-bottom: 22px;
        }

        .ct-fields {
          display: grid;
          gap: 14px;
        }

        .ct-fields input,
        .ct-fields textarea {
          width: 100%;
          padding: 14px 16px;
          border-radius: 12px;
          border: 1px solid rgba(0,0,0,0.18);
          font-size: 15px;
          color: #111;
          background: #e1b968ff;
        }

        .ct-fields textarea {
          resize: none;
        }

        .ct-date {
          display: grid;
          gap: 6px;
        }

        .ct-date label {
          font-size: 13px;
          color: #5f5548;
        }

        .ct-btn {
          margin-top: 10px;
          padding: 14px;
          border-radius: 999px;
          border: none;
          background: linear-gradient(90deg,#D9A441,#EDD79A);
          font-weight: 700;
          cursor: pointer;
          color: #111;
        }

        .ct-success {
          margin-top: 10px;
          color: #1b5e20;
          font-weight: 600;
        }

        /* INFO CARD */
        .ct-info-card h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.6rem;
          margin-bottom: 10px;
        }

        .ct-info-desc {
          color: #5f5548;
          line-height: 1.7;
          margin-bottom: 18px;
        }

        .ct-info-item {
          font-size: 0.95rem;
          margin-bottom: 10px;
          color: #111;
        }

        .ct-map {
          margin-top: 18px;
          height: 420px;
          border-radius: 14px;
          overflow: hidden;
          border: 1px solid rgba(0,0,0,0.08);
        }

        .ct-map iframe {
          width: 100%;
          height: 100%;
          border: none;
        }

        @media (max-width: 480px) {
          .ct-map {
            height: 180px;
          }
        }
      `}</style>

      <div className="ct-section">
        <div className="ct-wrap">
          {/* FORM */}
          <form className="ct-card" onSubmit={handleSubmit}>
            <div className="ct-eyebrow">Inquiry</div>
            <h2 className="ct-title">Let’s plan your celebration</h2>

            <div className="ct-fields">
              <input name="name" placeholder="Your Name" required value={form.name} onChange={handleChange} />
              <input name="email" type="email" placeholder="Email Address" required value={form.email} onChange={handleChange} />
              <input name="phone" placeholder="Phone Number" required value={form.phone} onChange={handleChange} />

              <div className="ct-date">
                <label>Event Date</label>
                <input name="eventDate" type="date" required value={form.eventDate} onChange={handleChange} />
              </div>

              <input name="event" placeholder="Type of Event" value={form.event} onChange={handleChange} />
              <textarea name="message" rows={4} placeholder="Tell us about your event" value={form.message} onChange={handleChange} />

              <button className="ct-btn" type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Inquiry"}
              </button>

              {success && <div className="ct-success">Thank you — we’ll contact you shortly.</div>}
            </div>
          </form>

          {/* INFO */}
          <div className="ct-card ct-info-card">
            <h3 itemProp="name">Infinity Pavilion</h3>
            <p className="ct-info-desc" itemProp="description">
              Built for weddings, concerts, exhibitions, and everything beyond.
            </p>

            <div className="ct-info-item">📍 Pune Nagar Rd, in front of Lexicon International School, next to Chroma, Wagholi, Pune, </div>
            <div className="ct-info-item">📞 +91-7875323237</div>
            <div className="ct-info-item">✉️ infinitypavilion@gmail.com</div>

            <div className="ct-map">
              <iframe
                title="Infinity Pavilion Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.7104192168786!2d73.99141411050635!3d18.587089682446475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c33d065298b1%3A0xc2ad37403c159bd3!2sInfinity%20Pavilion!5e0!3m2!1sen!2sin!4v1766321740147!5m2!1sen!2sin"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

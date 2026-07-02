import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import "./contactform.css";

const EMAIL_ADDRESS = "shujaahmad581@gmail.com";

// Replace these with your actual EmailJS credentials from https://www.emailjs.com
const EMAILJS_SERVICE_ID = "service_l9mdlun";
const EMAILJS_TEMPLATE_ID = "template_ohjlm6m";
const EMAILJS_PUBLIC_KEY = "EpiG0utjNJR00jc5n";

const CONTACT_LINKS = [
  { label: "Phone", value: "+92 344 4425490", href: "tel:+923444425490", icon: "☎" },
  { label: "Email", value: EMAIL_ADDRESS, href: `mailto:${EMAIL_ADDRESS}`, icon: "@" },
  { label: "LinkedIn", value: "linkedin.com/in/shujaahmaad", href: "https://www.linkedin.com/in/shujaahmaad", icon: "in" },
];

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);
  const formRef = useRef(null);

  // Initialize EmailJS on component mount
  useEffect(() => {
    try {
      emailjs.init(EMAILJS_PUBLIC_KEY);
      console.log("✓ EmailJS initialized successfully");
    } catch (error) {
      console.error("✗ EmailJS initialization failed:", error);
      setStatus("error:EmailJS not configured properly. Please check your credentials.");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.message) {
      setStatus("error:Please provide your email and a message.");
      return;
    }
    setSending(true);
    setStatus("");
    try {
      console.log("Sending email with:", { service: EMAILJS_SERVICE_ID, template: EMAILJS_TEMPLATE_ID });
      
      const result = await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      
      console.log("✓ Email sent successfully:", result);
      setStatus("success:Message sent! I'll get back to you within 24 hours.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("✗ Email send failed:", error);
      
      // Provide more specific error messages
      let errorMsg = "Something went wrong. Please try again.";
      if (error.text === "Bad Request") {
        errorMsg = "Invalid credentials. Please check your EmailJS setup.";
      } else if (error.status === 0) {
        errorMsg = "Network error. Please check your connection.";
      } else if (error.text) {
        errorMsg = error.text;
      }
      
      setStatus(`error:${errorMsg}`);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="contact-block">
      <div className="contact-card">

        {/* Left — info panel */}
        <div className="contact-info">
          <div className="contact-info-inner">
            <p className="contact-eyebrow">Get in touch</p>
            <h2 className="contact-heading">Let's build something great together.</h2>
            <p className="contact-subtext">
              Have a project in mind? Drop me a message and I'll get back to
              you within 24 hours.
            </p>

            <ul className="contact-links">
              {CONTACT_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="contact-link-item">
                    <span className="contact-link-icon">{link.icon}</span>
                    <span>
                      <span className="contact-link-label">{link.label}</span>
                      <span className="contact-link-value">{link.value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="contact-availability">
              <span className="availability-dot" />
              Available for freelance projects
            </div>
          </div>
        </div>

        {/* Right — form */}
        <div className="contact-form-wrapper">
          <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
            <div className="contact-grid">
              <label className="field-label">
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="contact-input"
                />
              </label>
              <label className="field-label">
                <span>Email *</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="contact-input"
                  required
                />
              </label>
            </div>

            <label className="field-label">
              <span>Subject</span>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="What would you like to discuss?"
                className="contact-input"
              />
            </label>

            <label className="field-label">
              <span>Message *</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project, timeline, or budget..."
                rows="6"
                className="contact-textarea"
                required
              />
            </label>

            <div className="contact-form-footer">
              <button type="submit" className="contact-submit" disabled={sending}>
                <span>{sending ? "Sending..." : "Send Message"}</span>
                {!sending && <span className="submit-arrow">→</span>}
              </button>
              {status && (
                <p className={`contact-status ${status.startsWith("success:") ? "contact-status--success" : "contact-status--error"}`}>
                  {status.replace(/^(success|error):/, "")}
                </p>
              )}
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}

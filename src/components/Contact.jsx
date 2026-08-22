import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { profile } from '../data/profile';
import Section from './Section';

const initialForm = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (!form.email.trim()) {
      e.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = 'Please enter a valid email address.';
    }
    if (!form.subject.trim()) e.subject = 'Please enter a subject.';
    if (!form.message.trim()) {
      e.message = 'Please enter a message.';
    } else if (form.message.trim().length < 10) {
      e.message = 'Message should be at least 10 characters.';
    }
    return e;
  };

  const handleChange = (field) => (event) => {
    setForm((f) => ({ ...f, [field]: event.target.value }));
    setErrors((err) => ({ ...err, [field]: undefined }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length === 0) {
      // NOTE: No backend/email service is configured yet. This currently
      // opens the user's mail client with the message pre-filled instead
      // of silently pretending to send an email. Wire up a real email
      // service (e.g. Formspree, EmailJS, or a serverless function) and
      // replace this handler when ready.
      const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
        form.subject
      )}&body=${encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)}`;
      window.location.href = mailto;
      setSubmitted(true);
      setForm(initialForm);
    }
  };

  return (
    <Section
      id="contact"
      eyebrow="Get In Touch"
      title="Let's Build Something Meaningful"
      subtitle="I'm always interested in opportunities where I can apply my software development, data analytics, and problem-solving skills to real-world challenges."
    >
      <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10">
        <div className="space-y-4 reveal">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-4 card-surface rounded-xl p-5 hover:border-accent/30 transition-colors"
          >
            <span className="p-2.5 rounded-lg bg-accent/10 text-accent"><Mail size={18} /></span>
            <div>
              <p className="text-xs text-ink-muted">Email</p>
              <p className="text-sm font-semibold text-ink">{profile.email}</p>
            </div>
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s+/g, '')}`}
            className="flex items-center gap-4 card-surface rounded-xl p-5 hover:border-accent/30 transition-colors"
          >
            <span className="p-2.5 rounded-lg bg-accent/10 text-accent"><Phone size={18} /></span>
            <div>
              <p className="text-xs text-ink-muted">Phone</p>
              <p className="text-sm font-semibold text-ink">{profile.phone}</p>
            </div>
          </a>
          <div className="flex items-center gap-4 card-surface rounded-xl p-5">
            <span className="p-2.5 rounded-lg bg-accent/10 text-accent"><MapPin size={18} /></span>
            <div>
              <p className="text-xs text-ink-muted">Location</p>
              <p className="text-sm font-semibold text-ink">{profile.location}</p>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="card-surface rounded-xl p-6 sm:p-8 reveal"
          style={{ transitionDelay: '100ms' }}
        >
          <h3 className="font-display font-bold text-ink text-lg mb-5">Send Me a Message</h3>

          {submitted && (
            <div className="mb-5 flex items-center gap-2 text-sm text-success bg-success/10 rounded-lg px-4 py-3">
              <CheckCircle2 size={16} />
              Your mail client should now open with the message ready to send.
            </div>
          )}

          <div className="grid sm:grid-cols-2 gap-4">
            <Field
              label="Name"
              id="name"
              value={form.name}
              onChange={handleChange('name')}
              error={errors.name}
            />
            <Field
              label="Email"
              id="email"
              type="email"
              value={form.email}
              onChange={handleChange('email')}
              error={errors.email}
            />
          </div>

          <div className="mt-4">
            <Field
              label="Subject"
              id="subject"
              value={form.subject}
              onChange={handleChange('subject')}
              error={errors.subject}
            />
          </div>

          <div className="mt-4">
            <label htmlFor="message" className="block text-xs font-semibold text-ink-muted mb-1.5">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={form.message}
              onChange={handleChange('message')}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className="w-full rounded-lg bg-bg border border-white/10 px-4 py-3 text-sm text-ink placeholder:text-ink-muted/60 focus:border-accent/50 transition-colors"
              placeholder="Tell me a bit about the opportunity or project..."
            />
            {errors.message && (
              <p id="message-error" className="mt-1 text-xs text-red-400">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-accent text-bg font-semibold text-sm hover:bg-accent/90 transition-colors"
          >
            Send Message <Send size={15} />
          </button>
        </form>
      </div>
    </Section>
  );
}

function Field({ label, id, type = 'text', value, onChange, error }) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-semibold text-ink-muted mb-1.5">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="w-full rounded-lg bg-bg border border-white/10 px-4 py-2.5 text-sm text-ink placeholder:text-ink-muted/60 focus:border-accent/50 transition-colors"
      />
      {error && (
        <p id={`${id}-error`} className="mt-1 text-xs text-red-400">{error}</p>
      )}
    </div>
  );
}

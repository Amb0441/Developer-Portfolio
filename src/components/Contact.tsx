import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Send, Check, Copy, ExternalLink, Mail, ArrowUpRight, Github, Linkedin } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [copied, setCopied] = useState(false);
  const [dispatchedData, setDispatchedData] = useState<{
    name: string;
    email: string;
    message: string;
    mailtoUrl: string;
    gmailUrl: string;
  } | null>(null);
  
  const destinationEmail = 'aanthonyb.dev@gmail.com';

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const newErrors = {
      name: !formData.name.trim() ? 'Name is required' : '',
      email: !formData.email.trim() ? 'Email is required' : !validateEmail(formData.email) ? 'Please enter a valid email' : '',
      message: !formData.message.trim() ? 'Message is required' : ''
    };
    
    setErrors(newErrors);
    
    if (!Object.values(newErrors).some(err => err)) {
      setIsSubmitting(true);

      const senderName = formData.name.trim();
      const senderEmail = formData.email.trim();
      const senderMessage = formData.message.trim();

      const subject = `Portfolio Inquiry from ${senderName}`;
      const body = `Hi Anthony,\n\n${senderMessage}\n\n---\nFrom: ${senderName}\nEmail: ${senderEmail}\nSent via Portfolio Contact Form`;

      const encodedSubject = encodeURIComponent(subject);
      const encodedBody = encodeURIComponent(body);

      const mailtoUrl = `mailto:${destinationEmail}?subject=${encodedSubject}&body=${encodedBody}`;
      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${destinationEmail}&su=${encodedSubject}&body=${encodedBody}`;

      setDispatchedData({
        name: senderName,
        email: senderEmail,
        message: senderMessage,
        mailtoUrl,
        gmailUrl
      });

      // Try triggering mail client
      try {
        const link = document.createElement('a');
        link.href = mailtoUrl;
        link.click();
      } catch {
        // Fallback
      }

      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
      }, 500);
    }
  };

  const handleCopyMessage = () => {
    if (!dispatchedData) return;
    const textToCopy = `To: ${destinationEmail}\nSubject: Portfolio Inquiry from ${dispatchedData.name}\n\n${dispatchedData.message}\n\nFrom: ${dispatchedData.name} (${dispatchedData.email})`;
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  const handleReset = () => {
    setSubmitSuccess(false);
    setDispatchedData(null);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto border-t border-border">
      <div>
        <div className="grid md:grid-cols-2 gap-16 md:gap-24">
          <div>
            <div className="flex items-center gap-6 mb-10">
              <h2 className="text-4xl md:text-5xl font-serif tracking-tight">Get in touch</h2>
            </div>
            <p className="font-sans text-xl leading-relaxed text-muted-foreground max-w-md mb-8">
              Whether you have a complex problem to solve, a project in mind, or just want to connect, my inbox is always open.
            </p>
            <div className="space-y-6 font-sans text-lg">
              <p className="flex flex-col">
                <span className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-1">Direct Email</span>
                <a 
                  href={`mailto:${destinationEmail}`} 
                  className="inline-flex items-center gap-2 hover:text-primary transition-colors font-medium text-foreground w-fit"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  {destinationEmail}
                  <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground" />
                </a>
              </p>
              <p className="flex flex-col">
                <span className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-1">Location</span>
                <span className="font-medium text-foreground">Baguio City, Philippines</span>
              </p>
              <div className="pt-2">
                <span className="text-xs text-muted-foreground uppercase tracking-widest font-semibold block mb-3">Connect Online</span>
                <div className="flex flex-wrap items-center gap-3">
                  <a 
                    href="https://github.com/Amb0441" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-card border border-border text-foreground hover:border-primary/50 hover:text-primary transition-all text-sm font-medium shadow-xs"
                    aria-label="GitHub Profile (Amb0441)"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                    <ArrowUpRight className="w-3 h-3 text-muted-foreground" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/anthony-ballestra-108272307" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-card border border-border text-foreground hover:border-primary/50 hover:text-primary transition-all text-sm font-medium shadow-xs"
                    aria-label="LinkedIn Profile (Anthony Ballestra)"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                    <ArrowUpRight className="w-3 h-3 text-muted-foreground" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-6 font-sans bg-muted/30 p-8 md:p-10 rounded-2xl border border-border">
            {submitSuccess && dispatchedData ? (
              <div className="space-y-6 animate-fade-in-up">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-primary/10 border border-primary/20">
                  <div className="p-2 rounded-full bg-primary/20 text-primary mt-0.5">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">Message Dispatched!</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Your default mail application was triggered with your message addressed to <span className="font-medium text-foreground">{destinationEmail}</span>.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-background border border-border space-y-2 text-sm">
                  <div className="flex justify-between text-xs text-muted-foreground border-b border-border pb-2">
                    <span>Summary of your message:</span>
                    <span>To: {destinationEmail}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">From: <strong className="text-foreground">{dispatchedData.name}</strong> ({dispatchedData.email})</p>
                  <p className="text-foreground italic whitespace-pre-wrap bg-muted/40 p-3 rounded-lg border border-border/50 text-xs">
                    "{dispatchedData.message}"
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Choose how you'd like to send it:
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <a
                      href={dispatchedData.gmailUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-primary text-primary-foreground py-3 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity text-sm text-center"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Open in Gmail Web
                    </a>

                    <a
                      href={dispatchedData.mailtoUrl}
                      className="flex items-center justify-center gap-2 bg-foreground text-background py-3 px-4 rounded-lg font-medium hover:bg-foreground/90 transition-colors text-sm text-center"
                    >
                      <Mail className="w-4 h-4" />
                      Open Default App
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="w-full flex items-center justify-center gap-2 border border-border bg-background hover:bg-muted py-2.5 rounded-lg text-xs font-medium text-foreground transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-primary" />
                        Copied to clipboard!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        Copy message & email address to clipboard
                      </>
                    )}
                  </button>
                </div>

                <div className="pt-2 border-t border-border flex justify-end">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-end">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                    {errors.name && <span id="name-error" className="text-xs font-medium text-primary">{errors.name}</span>}
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={formData.name}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground text-sm"
                    placeholder="e.g. John Doe or Company"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-end">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                    {errors.email && <span id="email-error" className="text-xs font-medium text-primary">{errors.email}</span>}
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    inputMode="email"
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground text-sm"
                    placeholder="e.g. you@example.com"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-end">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                    {errors.message && <span id="message-error" className="text-xs font-medium text-primary">{errors.message}</span>}
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground resize-none text-sm"
                    placeholder="Tell me about your project, timeline, or inquiry..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 w-full flex items-center justify-center gap-2 bg-foreground text-background py-4 rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300 disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? (
                    'Preparing Message...'
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}


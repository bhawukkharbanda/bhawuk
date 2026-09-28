'use client'

import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const EMAIL = 'bhawuk.kharbanda@example.com'

const details = [
  { icon: Mail, label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: Phone, label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
  { icon: MapPin, label: 'Location', value: 'India', href: undefined },
]

const inputClass =
  'w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground/70 transition-shadow focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15'

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') ?? '')
    const message = String(data.get('message') ?? '')
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${data.get('email')})`)
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's work together"
          description="Have an opportunity, a project idea, or just want to say hello? My inbox is always open."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div className="flex h-full flex-col gap-4 rounded-3xl bg-gradient-to-br from-primary to-blue-500 p-7 text-primary-foreground shadow-xl shadow-primary/25 sm:p-9">
              <h3 className="text-2xl font-bold">Contact details</h3>
              <p className="leading-relaxed text-primary-foreground/85">
                {"I usually reply within a day. Feel free to reach out through any of these channels."}
              </p>
              <ul className="mt-4 space-y-4">
                {details.map((d) => {
                  const content = (
                    <>
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/15">
                        <d.icon className="size-5" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-sm text-primary-foreground/75">{d.label}</span>
                        <span className="block font-semibold break-all">{d.value}</span>
                      </span>
                    </>
                  )
                  return (
                    <li key={d.label}>
                      {d.href ? (
                        <a
                          href={d.href}
                          className="flex items-center gap-4 rounded-xl p-1 transition-colors hover:bg-white/10"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="flex items-center gap-4 p-1">{content}</div>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border bg-card p-7 shadow-sm sm:p-9"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-navy">
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Jane Doe"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-navy">
                    Your email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="jane@example.com"
                    className={inputClass}
                  />
                </div>
              </div>
              <div className="mt-5">
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-navy">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me a little about your idea..."
                  className={`${inputClass} resize-none`}
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="mt-6 h-12 w-full rounded-full text-base shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5 sm:w-auto sm:px-8"
              >
                Send Message
                <Send className="size-4" aria-hidden="true" />
              </Button>
              <p role="status" className="mt-4 text-sm text-primary">
                {sent ? 'Opening your email app — thanks for reaching out!' : ''}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

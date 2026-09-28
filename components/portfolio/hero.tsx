import { ArrowRight, GraduationCap, Mail, Sparkles } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-accent/70 via-background to-background pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-10%] size-[28rem] rounded-full bg-primary/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-[-10%] size-[22rem] rounded-full bg-primary/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.2fr_1fr]">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background px-4 py-1.5 text-sm font-medium text-primary shadow-sm">
            <Sparkles className="size-4" aria-hidden="true" />
            Open to internships & collaborations
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-navy sm:text-5xl lg:text-6xl">
            {"Hi, I'm "}
            <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
              Bhawuk Kharbanda
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            A curious and driven student who loves turning ideas into clean, useful digital
            experiences. I enjoy learning new technologies, solving problems, and building
            projects that make everyday life a little easier.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'h-12 rounded-full px-7 text-base shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5',
              )}
            >
              View My Work
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className={cn(
                buttonVariants({ size: 'lg', variant: 'outline' }),
                'h-12 rounded-full border-primary/30 px-7 text-base text-primary transition-transform hover:-translate-y-0.5 hover:bg-accent hover:text-primary',
              )}
            >
              <Mail className="size-4" aria-hidden="true" />
              Get In Touch
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
            {[
              { value: '10+', label: 'Projects' },
              { value: '8+', label: 'Skills' },
              { value: '3+', label: 'Certificates' },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-heading text-3xl font-extrabold text-navy">{stat.value}</dd>
                <p className="text-sm text-muted-foreground" aria-hidden="true">
                  {stat.label}
                </p>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-sm animate-fade-up [animation-delay:200ms]">
          <div className="animate-float">
            <div className="relative aspect-square rounded-[2.5rem] bg-gradient-to-br from-primary to-blue-400 p-1.5 shadow-2xl shadow-primary/30">
              <div className="flex h-full w-full flex-col items-center justify-center rounded-[2.2rem] bg-background">
                <span className="font-heading text-8xl font-extrabold text-primary">BK</span>
                <span className="mt-3 text-sm font-medium tracking-widest text-muted-foreground uppercase">
                  Student Developer
                </span>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl border bg-background px-4 py-3 shadow-lg sm:-left-8">
            <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-primary">
              <GraduationCap className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-semibold text-navy">Always Learning</p>
              <p className="text-xs text-muted-foreground">Computer Science</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

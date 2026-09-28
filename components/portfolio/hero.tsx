import { ArrowRight, GraduationCap, Mail, Sparkles } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const taglineWords = ['Student', 'Learner', 'Creator']

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-br from-navy via-primary to-blue-500 pt-32 pb-24 text-white sm:pt-40 sm:pb-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:56px_56px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-[-10%] size-[32rem] rounded-full bg-sky-300/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-[-15%] size-[26rem] rounded-full bg-blue-950/50 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.25fr_1fr]">
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
            <Sparkles className="size-4" aria-hidden="true" />
            Open to internships & collaborations
          </span>

          <h1 className="mt-6 font-heading font-extrabold tracking-tight">
            <span className="block text-2xl font-semibold text-blue-100 sm:text-3xl">
              {"Hi, I'm"}
            </span>
            <span className="mt-2 block text-6xl leading-[0.95] text-white drop-shadow-sm sm:text-7xl lg:text-8xl">
              Bhawuk
            </span>
            <span className="block bg-gradient-to-r from-white via-sky-200 to-blue-200 bg-clip-text text-6xl leading-[1.05] text-transparent sm:text-7xl lg:text-8xl">
              Kharbanda
            </span>
          </h1>

          <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-lg font-semibold tracking-wide text-sky-100 sm:text-xl">
            {taglineWords.map((word, index) => (
              <span key={word} className="flex items-center gap-3">
                {word}
                {index < taglineWords.length - 1 && (
                  <span aria-hidden="true" className="h-5 w-px bg-sky-200/60" />
                )}
              </span>
            ))}
          </p>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-blue-50/90">
            A curious and driven student who loves turning ideas into clean, useful digital
            experiences. I enjoy learning new technologies, solving problems, and building
            projects that make everyday life a little easier.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'h-12 rounded-full bg-white px-7 text-base text-primary shadow-lg shadow-blue-950/30 transition-transform hover:-translate-y-0.5 hover:bg-blue-50',
              )}
            >
              View My Work
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className={cn(
                buttonVariants({ size: 'lg', variant: 'outline' }),
                'h-12 rounded-full border-white/40 bg-white/5 px-7 text-base text-white transition-transform hover:-translate-y-0.5 hover:bg-white/15 hover:text-white',
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
                <dd className="font-heading text-3xl font-extrabold text-white">{stat.value}</dd>
                <p className="text-sm text-blue-100/80" aria-hidden="true">
                  {stat.label}
                </p>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-sm animate-fade-up [animation-delay:200ms]">
          <div className="animate-float">
            <div className="relative aspect-square rounded-[2.5rem] bg-gradient-to-br from-white/70 to-sky-200/40 p-1.5 shadow-2xl shadow-blue-950/40">
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

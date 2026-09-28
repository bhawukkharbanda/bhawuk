import { BookOpen, Lightbulb, Target, Users } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const highlights = [
  {
    icon: BookOpen,
    title: 'Eager Learner',
    text: 'I pick up new tools quickly and love exploring how things work.',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solver',
    text: 'I break complex challenges into simple, practical steps.',
  },
  {
    icon: Users,
    title: 'Team Player',
    text: 'I communicate clearly and enjoy building things with others.',
  },
  {
    icon: Target,
    title: 'Goal Driven',
    text: 'I set clear goals and stay consistent until they are done.',
  },
]

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow="About Me" title="Get to know me" />

        <div className="grid items-start gap-12 lg:grid-cols-2">
          <Reveal className="space-y-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            <p>
              {"I'm "}
              <strong className="font-semibold text-navy">Bhawuk Kharbanda</strong>, a student with
              a strong interest in technology, design, and building things for the web. What started
              as curiosity about how websites work has grown into a genuine passion for development.
            </p>
            <p>
              I enjoy writing clean code, designing simple interfaces, and learning something new
              every day. Outside of academics, I work on personal projects, take part in coding
              challenges, and keep exploring new ideas.
            </p>
            <p>
              {"I'm currently looking for opportunities where I can learn from experienced people, contribute to meaningful work, and continue growing as a developer."}
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <div className="group h-full rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <item.icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

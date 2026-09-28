import { Code2, Palette, Wrench } from 'lucide-react'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const technical = [
  { name: 'HTML & CSS', level: 90 },
  { name: 'JavaScript', level: 80 },
  { name: 'React', level: 70 },
  { name: 'Python', level: 75 },
  { name: 'Java', level: 65 },
]

const groups = [
  {
    icon: Code2,
    title: 'Development',
    items: ['Responsive Web Design', 'Git & GitHub', 'REST APIs', 'Tailwind CSS'],
  },
  {
    icon: Palette,
    title: 'Design',
    items: ['Figma', 'UI Layouts', 'Typography', 'Color Theory'],
  },
  {
    icon: Wrench,
    title: 'Soft Skills',
    items: ['Communication', 'Teamwork', 'Time Management', 'Critical Thinking'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="bg-secondary py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="What I work with"
          description="A growing toolkit of technologies and abilities I use to learn, build, and collaborate."
        />

        <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <div className="h-full rounded-3xl border bg-card p-7 shadow-sm sm:p-9">
              <h3 className="text-xl font-bold text-navy">Technical Skills</h3>
              <ul className="mt-7 space-y-6">
                {technical.map((skill) => (
                  <li key={skill.name}>
                    <div className="mb-2 flex items-center justify-between text-sm font-medium">
                      <span className="text-foreground">{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <div
                      className="h-2.5 overflow-hidden rounded-full bg-accent"
                      role="progressbar"
                      aria-label={skill.name}
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    >
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary to-blue-400"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <div className="grid gap-5">
            {groups.map((group, i) => (
              <Reveal key={group.title} delay={i * 100}>
                <div className="rounded-3xl border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <group.icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-lg font-bold text-navy">{group.title}</h3>
                  </div>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full bg-accent px-3.5 py-1.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

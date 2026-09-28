import Image from 'next/image'
import { ArrowUpRight, Code2 } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Reveal } from './reveal'
import { SectionHeading } from './section-heading'

const projects = [
  {
    title: 'StudyFlow Planner',
    description:
      'A study planner that helps students organize assignments, track deadlines, and plan their week with a clean calendar view.',
    image: '/images/project-study.png',
    tags: ['React', 'Tailwind CSS', 'LocalStorage'],
  },
  {
    title: 'SkyCast Weather',
    description:
      'A mobile-friendly weather app showing live conditions and a 5-day forecast using a public weather API.',
    image: '/images/project-weather.png',
    tags: ['JavaScript', 'REST API', 'CSS'],
  },
  {
    title: 'Insight Dashboard',
    description:
      'A data dashboard that turns raw CSV data into clear charts and summaries for quick, easy analysis.',
    image: '/images/project-dashboard.png',
    tags: ['Python', 'Pandas', 'Charts'],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Things I have built"
          description="A selection of projects that helped me learn, experiment, and solve real problems."
        />

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 120}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-primary/10">
                <div className="relative aspect-[16/10] overflow-hidden bg-accent">
                  <Image
                    src={project.image}
                    alt={`Screenshot of the ${project.title} project`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-bold text-navy">{project.title}</h3>
                  <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md bg-accent px-2.5 py-1 text-xs font-semibold text-accent-foreground"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex gap-3">
                    <a href="#contact" className={cn(buttonVariants({size: 'sm'}), 'rounded-full px-4')}>
                        Live Demo
                        <ArrowUpRight className="size-4" aria-hidden="true" />
                      </a>
                    <a
                      href="#contact"
                      className={cn(
                        buttonVariants({ size: 'sm', variant: 'outline' }),
                        'rounded-full px-4 text-primary hover:bg-accent hover:text-primary',
                      )}
                    >
                      <Code2 className="size-4" aria-hidden="true" />
                      Source
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

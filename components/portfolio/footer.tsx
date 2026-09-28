import { ArrowUp } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
        <p className="text-sm text-white/75">
          {`© ${new Date().getFullYear()} Bhawuk Kharbanda. All rights reserved.`}
        </p>
        <a
          href="#top"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium transition-colors hover:bg-white hover:text-navy"
        >
          Back to top
          <ArrowUp className="size-4" aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}

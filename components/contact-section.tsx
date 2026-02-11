import Link from "next/link"
import { Mail, Linkedin, Github, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import RevealOnView from "@/components/reveal-on-view"

type ContactSectionProps = {
  className?: string
}

/**
 * Contact section component for portfolio homepage
 * Displays contact info and social links with emerald accents
 */
export default function ContactSection({ className }: ContactSectionProps) {
  const socialLinks = [
    {
      name: "Email",
      href: "mailto:nguyenvietloc0411@gmail.com",
      icon: Mail,
      label: "nguyenvietloc0411@gmail.com"
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/locnguyen0411/",
      icon: Linkedin,
      label: "Connect on LinkedIn",
      external: true
    },
    {
      name: "GitHub",
      href: "https://github.com/vilo0411",
      icon: Github,
      label: "View GitHub profile",
      external: true
    }
  ]

  return (
    <RevealOnView delay={0.2} className={cn("w-full", className)}>
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 p-8 sm:p-12">
        {/* Background gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-purple-500/5" />

        <div className="relative z-10">
          {/* Heading */}
          <div className="mb-8 text-center">
            <h2 className="mb-3 text-3xl font-black tracking-tight sm:text-4xl">
              Let's work together
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-white/70">
              Quan tâm đến việc hợp tác? Liên hệ với tôi qua email hoặc kết nối trên các nền tảng mạng xã hội.
            </p>
          </div>

          {/* Contact links */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className={cn(
                    "group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300",
                    "hover:border-emerald-500/30 hover:bg-emerald-500/10 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]",
                    "hover:-translate-y-1"
                  )}
                  aria-label={link.label}
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-500/20 transition-all duration-300 group-hover:bg-emerald-500/30 group-hover:scale-110">
                    <Icon className="h-6 w-6 text-emerald-400 transition-colors group-hover:text-emerald-300" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="mb-1 flex items-center gap-2">
                      <span className="text-sm font-semibold text-white/90 transition-colors group-hover:text-white">
                        {link.name}
                      </span>
                      {link.external && (
                        <ExternalLink className="h-3 w-3 text-white/40 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      )}
                    </div>
                    <span className="block truncate text-sm text-white/60 transition-colors group-hover:text-white/80">
                      {link.label}
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Footer note */}
          <div className="mt-8 text-center">
            <p className="text-sm text-white/50">
              Thường phản hồi trong vòng 24 giờ
            </p>
          </div>
        </div>
      </div>
    </RevealOnView>
  )
}

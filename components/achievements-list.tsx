import { cn } from "@/lib/utils"
import { TrendingUp, Award, Star, Sparkles } from 'lucide-react'

type AchievementsListProps = {
  achievements: string[]
  title?: string
  className?: string
}

/**
 * Icons for different achievement types - rotates through them
 */
const icons = [TrendingUp, Award, Star, Sparkles]

/**
 * A reusable component to display a list of achievements with icons and animations
 */
export default function AchievementsList({
  achievements,
  title = "THÀNH TỰU NỔI BẬT",
  className,
}: AchievementsListProps) {
  if (!achievements || achievements.length === 0) return null

  return (
    <div className={cn("border-t border-border pt-8", className)}>
      <p className="mb-3 text-xs font-semibold tracking-widest text-muted-foreground">
        {title}
      </p>
      <ul className="space-y-3">
        {achievements.map((achievement, index) => {
          const Icon = icons[index % icons.length]
          return (
            <li
              key={index}
              className="group flex items-start gap-3 text-foreground/70 hover:text-foreground transition-all duration-300 cursor-default"
            >
              <span className="mt-0.5 flex-shrink-0 p-1.5 rounded-lg bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-all duration-300 group-hover:scale-110 border border-emerald-500/20 group-hover:border-emerald-500/40">
                <Icon className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-500 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors" />
              </span>
              <span className="leading-relaxed">{achievement}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

import { cn } from "@/lib/utils"

type SkeletonProps = {
  className?: string
}

/**
 * Basic skeleton component with shimmer animation
 */
export function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-lg bg-white/5",
        "relative overflow-hidden",
        "before:absolute before:inset-0",
        "before:-translate-x-full before:animate-[shimmer_2s_infinite]",
        "before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent",
        className
      )}
    />
  )
}

/**
 * Project card skeleton for loading states
 */
export function ProjectCardSkeleton() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 p-0">
      {/* Image skeleton */}
      <Skeleton className="aspect-[16/9] w-full rounded-none" />

      {/* Content skeleton */}
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <div className="space-y-3">
          {/* Title */}
          <Skeleton className="h-6 w-3/4" />
          {/* Subtitle */}
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>

      {/* Tags skeleton */}
      <div className="absolute left-4 top-4 flex gap-2">
        <Skeleton className="h-6 w-16 rounded-full" />
        <Skeleton className="h-6 w-20 rounded-full" />
      </div>
    </div>
  )
}

/**
 * Sidebar skeleton for loading states
 */
export function SidebarSkeleton() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 p-6 sm:p-8">
      {/* Wordmark */}
      <Skeleton className="mb-8 h-8 w-32" />

      {/* Badge */}
      <Skeleton className="mb-4 h-8 w-48 rounded-full" />

      {/* Heading */}
      <div className="mb-4 space-y-2">
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-4/5" />
      </div>

      {/* Description */}
      <div className="mb-6 space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
      </div>

      {/* CTA Button */}
      <Skeleton className="h-10 w-40 rounded-full" />

      {/* Social Links */}
      <div className="mt-6 flex gap-3">
        <Skeleton className="h-10 w-10 rounded-full" />
        <Skeleton className="h-10 w-10 rounded-full" />
        <Skeleton className="h-10 w-10 rounded-full" />
      </div>

      {/* Companies */}
      <div className="mt-10">
        <Skeleton className="mb-3 h-3 w-48" />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-full" />
        </div>
      </div>
    </div>
  )
}

export default function ProjectLoading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-white/10 border-t-white" />
        <p className="text-sm text-white/50">Loading project...</p>
      </div>
    </div>
  )
}

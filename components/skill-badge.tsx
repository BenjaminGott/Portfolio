import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface SkillBadgeProps {
  name: string
  level: number
}

export default function SkillBadge({ name, level }: SkillBadgeProps) {
  // Determine color based on level
  const getColorClass = (level: number) => {
    if (level >= 90) return "bg-teal-100 text-teal-800 hover:bg-teal-200 dark:bg-teal-900 dark:text-teal-300"
    if (level >= 80) return "bg-cyan-100 text-cyan-800 hover:bg-cyan-200 dark:bg-cyan-900 dark:text-cyan-300"
    if (level >= 70)
      return "bg-emerald-100 text-emerald-800 hover:bg-emerald-200 dark:bg-emerald-900 dark:text-emerald-300"
    if (level >= 60) return "bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900 dark:text-green-300"
    return "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300"
  }

  return <Badge className={cn("px-3 py-1 text-sm font-medium", getColorClass(level))}>{name}</Badge>
}

import { Card, CardContent } from "@/components/ui/card"
import { BarChart, Database } from "lucide-react"

interface CertificationCardProps {
  title: string
  issuer: string
  date: string
  icon: "chart" | "database" | "code"
  description: string
}

export default function CertificationCard({ title, issuer, date, icon, description }: CertificationCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6 flex gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-100 dark:bg-teal-900 flex items-center justify-center">
          {icon === "chart" && <BarChart className="h-6 w-6 text-teal-600 dark:text-teal-400" />}
          {icon === "database" && <Database className="h-6 w-6 text-teal-600 dark:text-teal-400" />}
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{date}</p>
          </div>
          <p className="text-sm text-muted-foreground">{issuer}</p>
          <p className="text-sm">{description}</p>
        </div>
      </CardContent>
    </Card>
  )
}

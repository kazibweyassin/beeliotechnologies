import Card from "./Card"
import { Star } from "lucide-react"
import Image from "next/image"

interface TestimonialCardProps {
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar?: string
}

export default function TestimonialCard({
  name,
  role,
  company,
  content,
  rating,
  avatar,
}: TestimonialCardProps) {
  return (
    <Card>
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating
                ? "text-yellow-400 fill-yellow-400"
                : "text-beelio-border"
            }`}
          />
        ))}
      </div>
      <p className="text-beelio-textSecondary dark:text-beelio-bg/80 mb-6 italic">
        &ldquo;{content}&rdquo;
      </p>
      <div className="flex items-center space-x-3">
        {avatar ? (
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image
              src={avatar}
              alt={name}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="w-12 h-12 rounded-full bg-beelio-accent/20 flex items-center justify-center">
            <span className="text-beelio-accent font-bold">
              {name.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <p className="font-semibold text-beelio-primary dark:text-beelio-bg">
            {name}
          </p>
          <p className="text-sm text-beelio-textSecondary dark:text-beelio-bg/80">
            {role} at {company}
          </p>
        </div>
      </div>
    </Card>
  )
}


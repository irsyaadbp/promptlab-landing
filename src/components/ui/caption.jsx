import { cn } from '@/lib/utils'

export default function Caption({children, className}) {
  return (
    <p className={cn("font-normal text-sm md:text-lg mb-0 text-[#B2B2B2]", className)}>{children}</p>
  )
}

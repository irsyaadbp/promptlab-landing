import { cn } from '@/lib/utils'

export default function Title({children, className, as ="h3"}) {
  const Comp = as
  return (
    <Comp className={cn("font-medium text-xl md:text-5xl", className)}>{children}</Comp>
  )
}

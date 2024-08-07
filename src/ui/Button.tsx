import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "../lib/utils"

const buttonVariants = cva(
  "font-bold leading-none transition-default flex items-center justify-center gap-2 pb-px rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "text-secondary-950 bg-primary-400 hover:bg-primary-600",
        link: "text-default-50 border border-default-50 hover:shadow-white",
        default: "text-default-50 border border-default-50 hover:shadow-white",
      },
      size: {
        xs: 'h-8 px-4 text-14',
        sm: 'h-9 px-4 text-14',
        default: 'h-9 px-6 text-16',
        md: 'h-12 px-4 text-16',
      },
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

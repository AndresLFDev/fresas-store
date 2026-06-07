import Link from "next/link"

interface ButtonLinkProps {
  href: string
  variant?: 'primary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export default function ButtonLink({ href, variant = 'primary', size = 'md', children }: ButtonLinkProps) {
  const baseClasses = "inline-flex items-center gap-2 font-body font-extrabold text-16 border-0 cursor-pointer rounded-full text-nowrap leading-none transition-all duration-200 ease-bounce"
  
  const variants = {
    primary: "bg-brand text-brand-ink shadow-small hover:-translate-y-0.5 transition-transform shadow-basic",
    ghost: "bg-surface text-ink shadow-small hover:-translate-y-0.5 transition-transform"
  }
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3.5 text-base",
    lg: "px-8 py-4 text-lg"
  }
  
  return (
    <Link href={href} className={`${baseClasses} ${variants[variant]} ${sizes[size]}`}>
      {children}
    </Link>
  )
}
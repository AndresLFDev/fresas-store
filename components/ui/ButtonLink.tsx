import Link from "next/link"

interface ButtonLinkProps {
  href: string
  variant?: 'primary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export default function ButtonLink({ href, variant = 'primary', size = 'md', children }: ButtonLinkProps) {
  const baseClasses = "inline-flex items-center gap-2 font-body font-extrabold border-0 cursor-pointer rounded-full text-nowrap leading-none transition-all duration-200 ease-bounce active:scale-95"
  
  const variants = {
    primary: "bg-brand text-brand-ink shadow-small hover:-translate-y-0.5 hover:shadow-basic",
    ghost: "bg-surface text-ink shadow-small hover:-translate-y-0.5"
  }

  const sizes = {
    sm: "px-[18px] py-2.5 text-sm",
    md: "px-[26px] py-[14px] text-base",
    lg: "px-8 py-[17px] text-[17px]"
  }
  
  return (
    <Link href={href} className={`${baseClasses} ${variants[variant]} ${sizes[size]}`}>
      {children}
    </Link>
  )
}
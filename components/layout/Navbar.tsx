import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-40 bg-base/80 backdrop-blur-2xl border-b border-border">
            <div className="flex items-center justify-between h-20 gap-x-10 max-w-6xl mx-auto px-4">
                <Link href="/">
                    <Image src="/logo.png" alt="Logo" width={100} height={100} />
                </Link>
                <div className="flex items-center gap-x-1">
                <Link href="/#flavors"
                        className="font-bold text-ink-muted rounded-full px-3.5 py-2 hover:bg-surface-raised hover:text-ink transition-colors">
                        Inicio
                    </Link>
                    <Link href="/#flavors"
                        className="font-bold text-ink-muted rounded-full px-3.5 py-2 hover:bg-surface-raised hover:text-ink transition-colors">
                        Sabores
                    </Link>
                    <Link href="/#toppings"
                        className="font-bold text-ink-muted rounded-full px-3.5 py-2 hover:bg-surface-raised hover:text-ink transition-colors">
                        Toppings
                    </Link>
                    <Link href="/armar"
                        className="font-bold text-ink-muted rounded-full px-3.5 py-2 hover:bg-surface-raised hover:text-ink transition-colors">
                        Armar tu fresa
                    </Link>
                    <Link href="/carrito"
                        className="font-bold text-brand-ink bg-brand rounded-full px-3.5 py-2 hover:-translate-y-1 transition-transform">
                        Mi pedido
                    </Link>
                </div>
            </div>
        </nav>
    )
}

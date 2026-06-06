import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
    return (
        <nav>
            <div>
                <Link href="/">
                    <Image src="/logo.png" alt="Logo" width={100} height={100} />
                </Link>
                <Link href="/#flavors">Sabores</Link>
                <Link href="/#toppings">Toppings</Link>
                <Link href="/armar">Armar tu Fresita</Link>
                <Link href="/carrito">Mi Pedido</Link>
            </div>
        </nav>
    )
}

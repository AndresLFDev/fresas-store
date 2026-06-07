import Image from "next/image"
import imgHero from "../../public/Hero.webp"
import ButtonLink from "../ui/ButtonLink"

export default function Hero(){
    return(
        <section className="pt-6 pb-10 md:pt-8 md:pb-14 lg:pt-11 lg:pb-16">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                <div className="relative">
                    <div
                        className="relative w-full rounded-3xl overflow-hidden shadow-basic"
                        style={{
                            height: "clamp(380px, 56vh, 600px)",
                            background: "repeating-linear-gradient(135deg, var(--surface-raised), var(--surface-raised) 16px, var(--brand-soft) 16px, var(--brand-soft) 32px)"
                        }}>
                        <Image src={imgHero} alt="Imagen_hero - fresas" fill className="object-cover" />
                    </div>
                    <div
                    className="absolute bg-surface rounded-4xl max-w-[560px] w-[86%] shadow-basic"
                    style={{
                        left: "clamp(16px, 4vw, 48px)",
                        bottom: "clamp(-28px, -2vw, -36px)",
                        padding: "clamp(20px, 2.5vw, 36px)"
                    }}>
                        <span className="flex w-fit items-center text-sm gap-2 bg-brand-soft text-brand font-extrabold uppercase px-3 py-2 rounded-full mb-3">
                            🍓 Fresas con crema artesanales
                        </span>
                        <h1
                        className="font-display leading-none tracking-tight mb-3 text-ink font-semibold
                        text-[38px] md:text-[44px] lg:text-[54px] xl:text-[62px]">
                            Un antojo que <em className="not-italic text-brand">merece la pena</em>
                        </h1>
                        <p className="text-ink-muted font-medium text-[18px] max-w-[42ch] mb-6">
                            Fresa fresca, crema batida al momento y los toppings que más se te antojen. Hechas para consentirte.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <ButtonLink href="/armar" size="lg">Arma tu fresa</ButtonLink>
                            <ButtonLink href="#flavors" variant="ghost" size="lg">Ver sabores</ButtonLink>
                        </div>
                    </div>
                </div>
                {/* spacer to clear the absolutely-positioned hero card */}
                <div style={{ height: "clamp(48px, 5vw, 72px)" }} />
            </div>
        </section>
    )
}
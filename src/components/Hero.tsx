import hero from "../assets/hero.png"

const Hero = () => {
    return (
        <div>
            <img loading="lazy" src={hero} className="w-full max-h-[600px] object-cover" />
        </div>
    )
}

export default Hero
import landingImage from "../assets/landing.png"
import appDownloadImage from "../assets/appDownload.png"

const HomePage = () => {
    return (
        <div className="flex flex-col gap-12">
            <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
                <h1 className="text-5xl font-bold tracking-tight text-orange-500">
                    Tuck into a takeway today
                </h1>
                <span className="text-xl">Food is just a click away!</span>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
                <img loading="lazy" src={landingImage} alt="Error" />
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <span className="font-bold text-3xl tracking-tighter">
                        Order takeway even faster!
                    </span>
                    <span>
                        Download the BookingEats App for faster ordering add personalised recommendation
                    </span>
                    <img loading="lazy" src={appDownloadImage} alt="Error" />
                </div>
            </div>
        </div>
    )
}

export default HomePage
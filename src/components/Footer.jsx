import visa from "/visa.svg"
import mastercard from "/mastercard.svg"
import paypal from "/paypal.svg"

function Footer() {

    return (
        <div className="w-full bg-sky-600 h-20 flex items-center justify-center p-7">
            <div className="h-full text-white w-2/4 text-center">
                © 2024 StoreOHO. Power by Natchaaaa
            </div>
            <div className="w-2/4 h-full flex flex-row gap-5 justify-end ">
                <img src={visa} className="h-10" />
                <img src={mastercard} className="h-10" />
                <img src={paypal} className="h-10" />
            </div>
        </div>
    )
}

export default Footer
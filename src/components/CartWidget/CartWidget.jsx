import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import "./CartWidget.css"

const CartWidget = () => {
  return (
    <div className="w-50">
        <div className="contendorPadreWidget">
            <div className="contendorWidget">
            <FontAwesomeIcon icon={faCartShopping} bounce size="2xl" style={{color: "#000000",}} />
            <p className="fs-5 text-light mx-3">0 (SIN ARTÍCULOS)</p>
            </div>
        </div>
    </div>
  )
}

export default CartWidget
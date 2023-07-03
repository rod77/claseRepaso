import { CartWidget } from "../CartWidget/CartWidget"
import logo from "./logo.png"
import './NavBar.css'
export const NavBar = () => {
    return (
        <div className="container">
            <img src={logo} width={150} />
            <ul>
                <li>Remeras</li>
                <li>Zapatillas</li>
                <li>Buzos</li>
            </ul>
            <CartWidget />
        </div>
    )
}

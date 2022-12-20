import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons"

export default function Networks () {
    return (
        <div className="networks">
            <ul>
                <li>
                    <a href="https://www.facebook.com/vendomepy" target='_blank'>
                        <FontAwesomeIcon className="icon__facebook" icon={faFacebookF} />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/vendomepy/" target='_blank'>
                        <FontAwesomeIcon className="icon__instagram" icon={faInstagram} />
                    </a>
                </li>
            </ul>
        </div>
    )
}
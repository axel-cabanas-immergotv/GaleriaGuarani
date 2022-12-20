import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Contact () {
    return (
        <div className='contact__container'>
            <div className='contact'>
                <section className='contact__phone mt-4'>
                    <div className='contact__phone-card'>
                        <div><FontAwesomeIcon className='contact__phone-card-icon' icon={faPhone}/></div>
                        <div className='contact__phone-card-item'>
                            <div>
                                <p>Edificio</p>
                                <a href='tel:+59521214800'>(+595 21) 214800</a>
                            </div>
                            <div className='mt-2'>
                                <p>Deposito</p>
                                <a href='tel:+59521205122'>(+595 21) 205122</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
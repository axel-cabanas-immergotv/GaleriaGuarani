import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import 'aos/dist/aos.css'

export default function Form () {
    const [ valid, setValid ] = React.useState(false)
    const [ text, setText ] = React.useState('');
    const setClass = (boolean ,text) => {
        return boolean ? text : '';
    };
    
    const handleOnChange = (e) => {
        const value = e.target.value;
        return value === '' ?  setValid(false) : setValid(true);
    };

    const uploadFile = (e) => {
        const { value } = e.target;
        return value && setText('¡Subido!');
    };

    React.useEffect(() => {
        Aos.init({duration: 1000});
    });

    return (
        <div className="work p-t p-b">
            <section className="work__form box-container d-flex" data-aos='zoom-in'>
                <form className="col-md-6 col-7">
                    <div className="work__form-text">
                        <h2>Trabaja con nosotros</h2>
                    </div>
                    <div>
                        <input type='text' name="full-name" className="form-input" required/>
                        <label for='full-name' className="form-label">Nombre completo</label>
                    </div>
                    <div>
                        <input type='email' name="email" className="form-input" required/>
                        <label for='email' className="form-label">Correo electronico</label>
                    </div>
                    <div>
                        <input type='tel' name="tel" className="form-input" required/>
                        <label for='tel' className="form-label">Teléfono (opcional)</label>
                    </div>
                    <div>
                        <input type='text' name="subject" className="form-input" required/>
                        <label for='subject' className="form-label">Asunto</label>
                    </div>
                    <div className="work__form-upload d-flex align-items-center">
                        <input onChange={(e) => uploadFile(e)} type='file' name="my_file" id="file" accept='application/pdf, image/jpeg,image/png,application/pdf,image/x-eps' />
                        <label className="btn-file" for='file'>
                            <FontAwesomeIcon className="btn-file-icon" icon={faCloudArrowUp}/>
                            Cargar CV
                        </label>
                        <p>{text}</p>
                    </div>
                    <div>
                        <textarea onChange={handleOnChange}  name='message'/>
                        <label for='message' className={`form-label ${setClass(valid, 'valid')}`}>Mensaje...</label>
                    </div>
                    <div>
                        <input className="form-send" type='button' value="Enviar"/>
                    </div>
                </form>
                <div className="work__form-img col-md-6 col-5"></div>
            </section>
        </div>
    )
}
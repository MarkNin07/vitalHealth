import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Info = () => {
    return(
        <div className="info bg-black  text-white text-center" >
            <div className="info__item">
                <FontAwesomeIcon icon="fa-solid fa-truck-fast" />
                <h3>
                    ENVÍOS GRATIS NACIONALMENTE
                </h3>
                <p>
                    Entregamos su pedido a la empresa encargada de transporte de mercancias y paquetes el mismo día que realizó el pago, siempre y cuando haya sido antes del mediodía y la compra haya sido superior a $200.000,00
                </p>
            </div>           
            <br/>
            <div className="info__item">
                <FontAwesomeIcon icon="fa-solid fa-user-shield" />
                <h3>
                    TUS DATOS Y DINERO ESTÁN SEGUROS
                </h3>
                <p>
                    Usa MercadoPago para realizar tus transacciones
                </p>
            </div>            
            <br/>
            <div className="info__item">
                <FontAwesomeIcon icon="user-tie" />
                <h3>
                    SERVICIO AL CLIENTE
                </h3>
                <p>
                    Escríbenos por WhatsApp de lunes a sábado de 9:00 AM a 7:00PM
                </p>
            </div>                
        </div>        
    );    
}

export {Info};
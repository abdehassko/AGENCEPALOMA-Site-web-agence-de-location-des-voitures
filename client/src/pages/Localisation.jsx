import React from "react";
import voiture from "../assets/voiture.png";
import motorcyclek from "../assets/motorcyclek.png";

export default function Localisation() {
    return (
        <>
            <div className="tete">
                <p>Agence Paloma</p>
                <p>We Welcome You to our car rental service!</p>
                <p className="text text-center">
                    We are delighted to serve you in Tétouan, Tangier, and
                    Casablanca, offering reliable vehicles to suit all your
                    travel needs.{" "}
                </p>
                <img src={voiture} alt="..." />
                <img src={motorcyclek} alt="..." />
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="tableau">
                <div className="card-container">
                    <div className="card" style={{ width: "18rem" }}>
                        <iframe
                            title="Paloma Tetouan Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5416.806299354957!2d-5.357702742266936!3d35.57805993712971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b432c8d54cbd5%3A0xa10be84dd2c85673!2sAl_ahbab%20Car!5e1!3m2!1sfr!2sma!4v1737744976395!5m2!1sfr!2sma"
                            style={{ border: 0 }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <div className="card-body">
                            <h5 className="card-title">Paloma Tetouan</h5>
                            <p className="card-text">
                                31 Av. Jbel Zerhoun 93020 , Tétouan, Morocco
                            </p>
                            <a
                                href="https://maps.google.com/maps?ll=35.577971,-5.354358&z=14&t=h&hl=fr&gl=MA&mapclient=embed&cid=11604624285796685427"
                                className="btn btn-info"
                            >
                                Visit Us
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card-container">
                    <div className="card" style={{ width: "18rem" }}>
                        <iframe
                            title="Paloma Tangier Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10809.529575845234!2d-5.8067402587690715!3d35.75572490400705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b819df407d071%3A0xfa0f280530141eb7!2sNio%20Drive%20Car!5e1!3m2!1sfr!2sma!4v1737745066552!5m2!1sfr!2sma"
                            style={{ border: 0 }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <div className="card-body">
                            <h5 className="card-title">Paloma Tangier</h5>
                            <p className="card-text">
                                02 Av El Mansour Edahbi 90010, Tangier, Morocco
                            </p>
                            <a
                                href="https://maps.google.com/maps?ll=35.75233,-5.801109&z=13&t=h&hl=fr&gl=MA&mapclient=embed&cid=18018664636879216311"
                                className="btn btn-info"
                            >
                                Visit Us
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card-container">
                    <div className="card" style={{ width: "18rem" }}>
                        <iframe
                            title="Paloma Casablanca Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11096.540379647433!2d-7.654754814474436!3d33.58535361829662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d37d145c092b%3A0x3c01db5aa7c5732b!2sSTE%20LEONARD%20CARS!5e1!3m2!1sfr!2sma!4v1737745183474!5m2!1sfr!2sma"
                            style={{ border: 0 }}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <div className="card-body">
                            <h5 className="card-title">Paloma Casablanca</h5>
                            <p className="card-text">
                                728 Av Modibo Keita 20420, Casablanca, Morocco
                            </p>
                            <a
                                href="https://maps.google.com/maps?ll=33.584376,-7.636146&z=13&t=h&hl=fr&gl=MA&mapclient=embed&cid=4323978299660661547"
                                className="btn btn-info"
                            >
                                Visit Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gap"></div>
        </>
    );
}

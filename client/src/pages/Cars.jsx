import { useEffect, useState } from "react";
import api from "../services/api";
import voiture from "../assets/voiture.png";
import motorcyclek from "../assets/motorcyclek.png";

export default function Cars() {
    useEffect(() => {
        const paragraphs = document.querySelectorAll(".tete p");
        const speed = 20;
        let delay = 0;

        paragraphs.forEach((p) => {
            const text = p.textContent.trim();
            p.textContent = "";

            setTimeout(() => {
                let index = 0;

                function typeEffect() {
                    if (index < text.length) {
                        p.textContent += text.charAt(index);
                        index++;
                        setTimeout(typeEffect, speed);
                    }
                }

                typeEffect();
            }, delay);

            delay += text.length * speed + 500;
        });
    }, []);
    const [cars, setCars] = useState([]);

    useEffect(() => {
        api.get("/cars")
            .then((res) => setCars(res.data))
            .catch((err) => console.error("API error:", err));
    }, []);

    return (
        <>
            <div className="tete">
                <p>Agence Paloma</p>
                <p>Introducing our premium car lineup</p>
                <p className="text text-center">
                    The luxurious Mercedes GLE, the sporty Audi RS3, the
                    versatile Volkswagen Tiguan, the rugged Dacia Duster, and
                    the compact yet stylish Renault Clio. Designed to meet
                    diverse needs with comfort and performance!
                </p>
                <img src={voiture} alt="..." />
                <img src={motorcyclek} alt="..." />
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseOne"
                            aria-expanded="true"
                            aria-controls="panelsStayOpen-collapseOne"
                        >
                            Mercedes GLE and Volkswagen Tiguan
                        </button>
                    </h2>
                    <div
                        id="panelsStayOpen-collapseOne"
                        className="accordion-collapse collapse show"
                    >
                        <div className="accordion-body">
                            <strong>
                                for those seeking luxury, comfort, and advanced
                                features, ideal for long drives or special
                                occasions.
                            </strong>
                            <li style={{ listStyleType: "none" }}>
                                Volkswagen Tiguan : Available in white, black,
                                and navy blue; max speed: 200 km/h.{" "}
                            </li>
                            <li style={{ listStyleType: "none" }}>
                                Mercedes GLE : Available in black, white, and
                                silver; max speed: 225 km/h.
                            </li>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseTwo"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseTwo"
                        >
                            Audi RS3
                        </button>
                    </h2>
                    <div
                        id="panelsStayOpen-collapseTwo"
                        className="accordion-collapse collapse"
                    >
                        <div className="accordion-body">
                            <strong>
                                a sporty and dynamic choice for those who love
                                performance and style.
                            </strong>
                            <li style={{ listStyleType: "none" }}>
                                Audi RS3 : Available in red, blue, and gray; max
                                speed: 350 km/h.{" "}
                            </li>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseThree"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseThree"
                        >
                            Dacia Duster and Renault Clio
                        </button>
                    </h2>
                    <div
                        id="panelsStayOpen-collapseThree"
                        className="accordion-collapse collapse"
                    >
                        <div className="accordion-body">
                            <strong>
                                a compact and economical choice for daily
                                commuting or short trips.
                            </strong>
                            <li style={{ listStyleType: "none" }}>
                                Dacia Duster : Available in orange, green, and
                                gray; max speed: 175 km/h.{" "}
                            </li>
                            <li style={{ listStyleType: "none" }}>
                                Renault Clio : Available in red, yellow, and
                                blue; max speed: 180 km/h.
                            </li>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div
                id="carouselExampleCaptions"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                {/* Indicators */}
                <div className="carousel-indicators">
                    {cars.map((car, index) => (
                        <button
                            key={car.id}
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={index}
                            className={index === 0 ? "active" : ""}
                            aria-current={index === 0 ? "true" : undefined}
                            aria-label={`Slide ${index + 1}`}
                        ></button>
                    ))}
                </div>

                {/* Items */}
                <div className="carousel-inner">
                    {cars.map((car, index) => (
                        <div
                            key={car.id}
                            className={`carousel-item ${
                                index === 0 ? "active" : ""
                            }`}
                        >
                            <img
                                src={car.image_url}
                                className="d-block w-100"
                                alt={car.name}
                            />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>{car.name}</h5>
                                <p>{car.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Controls */}
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

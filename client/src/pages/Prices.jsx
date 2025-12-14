import { useEffect, useState } from "react";
import api from "../services/api";
import voiture from "../assets/voiture.png";
import motorcyclek from "../assets/motorcyclek.png";

export default function Prices() {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        api.get("/cars")
            .then((res) => setCars(res.data))
            .catch((err) => console.error("API error:", err));
    }, []);
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
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        api.get("/prices").then((res) => setPrices(res.data));
    }, []);
    return (
        <>
            <div class="tete">
                <p>Agence Paloma</p>
                <p>We offer competitive pricing for our premium car lineup:</p>
                <p class="text text-center">
                    Special Offers: Enjoy further discounts for 15+ days or
                    monthly rentals, tailored to your needs! Affordable rates
                    tailored to suit your budget and needs!
                </p>
                <img src={voiture} alt="..." />
                <img src={motorcyclek} alt="..." />
            </div>
            <br /> <br />
            <br /> <br />
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Car Model</th>
                        <th scope="col">1 Day</th>
                        <th scope="col">3 Days</th>
                        <th scope="col">7 Days</th>
                        <th scope="col">Month</th>
                    </tr>
                </thead>
                <tbody className="table-group-divider">
                    {prices.map((p) => {
                        const car = cars.find((c) => c.id === p.car_id);

                        return (
                            <tr key={p.car_id}>
                                <th scope="row">
                                    {car ? car.name : "Unknown car"}
                                </th>
                                <td>{p.price_1_day} MAD</td>
                                <td>{p.price_3_days} MAD</td>
                                <td>{p.price_7_days} MAD</td>
                                <td>{p.price_30_days} MAD</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div class="rr"></div>
        </>
    );
}

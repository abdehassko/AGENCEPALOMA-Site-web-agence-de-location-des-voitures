import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import api from "../services/api";
import voiture from "../assets/voiture.png";
import motorcyclek from "../assets/motorcyclek.png";

export default function Home() {
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
            .catch((err) => console.error(err));
    }, []);

    const [carId, setCarId] = useState("");
    const [start, setStart] = useState("");
    const [end, setEnd] = useState("");
    const navigate = useNavigate();
    const check = async () => {
        // 1️⃣ Check if inputs are filled
        if (!carId || !start || !end) {
            alert("⚠️ Please select a car and choose both dates.");
            return;
        }

        // 2️⃣ Optional: check date logic
        if (end < start) {
            alert("⚠️ End date must be after start date.");
            return;
        }

        // 3️⃣ Call backend
        const res = await api.post("/reservations/check", {
            car_id: carId,
            start_date: start,
            end_date: end,
        });

        // 4️⃣ If AVAILABLE
        if (res.data.available) {
            const confirmReservation = window.confirm(
                "✅ This car is available.\n\nDo you want to confirm your reservation?"
            );

            if (confirmReservation) {
                navigate("/contact", {
                    state: {
                        message: `Hello, I would like to reserve this car from ${start} to ${end}.`,
                    },
                });
            }
        }
        // 5️⃣ If NOT AVAILABLE
        else {
            alert(
                "❌ Sorry, this car is already reserved for the selected period."
            );
        }
    };

    return (
        <>
            <div className="tete">
                <p>Agence Paloma</p>
                <p>Welcome To The Greatest Location Service in the City</p>
                <p className="text text-center">
                    Our agency offers reliable vehicle and motorcycles rentals
                    with a wide range of models to suit your needs. Conveniently
                    located for easy access, we prioritize customer satisfaction
                    and competitive pricing. Experience hassle-free rentals for
                    your journey today!
                </p>
                <img src={voiture} alt="voiture" />
                <img src={motorcyclek} alt="voiture" />
            </div>
            <br />
            <br />
            <div className="part1">
                <div className="part1-1">
                    <div className="p">
                        <br />
                        <p>Agence Location Paloma</p>
                    </div>
                    <div>
                        <Link to="/contact">
                            <button type="button" className="btn btn-warning">
                                Contact Us
                            </button>
                        </Link>
                        <Link to="/local">
                            <button type="button" className="btn btn-warning">
                                Plus D'info
                            </button>
                        </Link>
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>
                </div>
                <div className="part1-2">
                    <div className="search">
                        <label>Check your car disponibility</label>
                        <br />
                        <div className="ReservationDates">
                            <input
                                className="date"
                                type="date"
                                value={start}
                                onChange={(e) => setStart(e.target.value)}
                            />
                            <input
                                className="date"
                                type="date"
                                value={end}
                                onChange={(e) => setEnd(e.target.value)}
                            />
                        </div>
                        <select
                            className="form-select"
                            value={carId}
                            onChange={(e) => setCarId(e.target.value)}
                        >
                            <option value="">Choose the car</option>

                            {cars.map((car) => (
                                <option key={car.id} value={car.id}>
                                    {car.name} {car.model}
                                </option>
                            ))}
                        </select>

                        <button
                            type="button"
                            className="btn btn-primary btn-lg"
                            onClick={check}
                        >
                            Search
                        </button>
                        <br />
                    </div>
                </div>
            </div>
        </>
    );
}

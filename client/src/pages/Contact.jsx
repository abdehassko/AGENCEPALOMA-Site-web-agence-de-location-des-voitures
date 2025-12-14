import { useState, useEffect } from "react";
import api from "../services/api";

export default function Contact() {
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
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        agence: "",
        subject: "",
        message: "",
    });

    const send = async () => {
        // 1️⃣ Basic validation
        if (
            !form.firstName ||
            !form.lastName ||
            !form.email ||
            !form.subject ||
            !form.agence ||
            !form.message
        ) {
            alert("⚠️ Please fill in all required fields.");
            return;
        }

        // 2️⃣ Email validation (simple)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email)) {
            alert("⚠️ Please enter a valid email address.");
            return;
        }
        const payload = {
            full_name: form.firstName + " " + form.lastName,
            email: form.email,
            phone: null,
            message: form.message,
        };

        try {
            // 3️⃣ Send to backend
            await api.post("/contact", payload);

            // 4️⃣ Success message
            alert(
                "✅ Message sent successfully!\nWe will contact you very soon."
            );

            // 5️⃣ Reset form
            setForm({
                firstName: "",
                lastName: "",
                email: "",
                agence: "",
                subject: "",
                message: "",
            });
        } catch (error) {
            alert("❌ Something went wrong. Please try again later.");
            console.error(error);
        }
    };

    return (
        <>
            <div className="all">
                <div className="all-1">
                    <p>First, a bit about you.</p>
                    <p className="pp">
                        Fill the form in with your details and we will be in
                        touch to assist.
                    </p>

                    {/* First Name */}
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="First Name"
                            value={form.firstName}
                            onChange={(e) =>
                                setForm({ ...form, firstName: e.target.value })
                            }
                        />
                        <label>First Name</label>
                    </div>

                    {/* Last Name */}
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Last Name"
                            value={form.lastName}
                            onChange={(e) =>
                                setForm({ ...form, lastName: e.target.value })
                            }
                        />
                        <label>Last Name</label>
                    </div>

                    {/* Email */}
                    <div className="form-floating mb-3">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="name@example.com"
                            value={form.email}
                            onChange={(e) =>
                                setForm({ ...form, email: e.target.value })
                            }
                        />
                        <label>Email address</label>
                    </div>

                    {/* Agence */}
                    <div className="form-floating">
                        <select
                            className="form-select"
                            value={form.agence}
                            onChange={(e) =>
                                setForm({ ...form, agence: e.target.value })
                            }
                        >
                            <option value="">Choose The Agence</option>
                            <option value="Tetouan">Tetouan</option>
                            <option value="Tangier">Tangier</option>
                            <option value="Casablanca">Casablanca</option>
                        </select>
                        <label>Agence</label>
                    </div>
                    <br />

                    {/* Subject */}
                    <div className="form-floating">
                        <select
                            className="form-select"
                            value={form.subject}
                            onChange={(e) =>
                                setForm({ ...form, subject: e.target.value })
                            }
                        >
                            <option value="">Choose The Subject</option>
                            <option value="Request informations">
                                Request informations
                            </option>
                            <option value="Take an appointement">
                                Take an appointement
                            </option>
                            <option value="Signal a Problem">
                                Signal a Problem
                            </option>
                        </select>
                        <label>Subject</label>
                    </div>
                    <br />

                    {/* Message */}
                    <div className="form-floating">
                        <textarea
                            className="form-control"
                            placeholder="Leave a comment here"
                            style={{ height: "100px" }}
                            value={form.message}
                            onChange={(e) =>
                                setForm({ ...form, message: e.target.value })
                            }
                        ></textarea>
                        <label>Comments</label>
                    </div>

                    <div className="col-12">
                        <br />
                        <button className="btn btn-secondary" onClick={send}>
                            SUBMIT
                        </button>
                    </div>
                </div>

                {/* RIGHT SIDE STATIC INFO */}
                <div className="all-2">
                    <p className="pett">
                        Our Email
                        <br />
                        We Respond ASAP
                    </p>
                    <a
                        href="mailto:contact@agency.com"
                        style={{ textDecoration: "none", color: "black" }}
                    >
                        <p className="grnd">contact@paloma.agency.com</p>
                    </a>

                    <p className="pett">National Number</p>
                    <p className="grnd">+212 5 01 43 56 65</p>

                    <p className="pett">Tetouan | Head Office</p>
                    <p className="grnd">
                        31 Av. Jbel Zerhoun
                        <br />
                        93020 , Tétouan, Morocco
                    </p>

                    <p className="pett">Tanger</p>
                    <p className="grnd">
                        02 Av El Mansour Edahbi
                        <br />
                        90010, Tangier, Morocco
                    </p>

                    <p className="pett">Casablanca</p>
                    <p className="grnd">
                        728 Av Modibo Keita
                        <br />
                        20420, Casablanca, Morocco
                    </p>

                    <p className="pett">Whatsapp</p>
                    <p className="grnd">+212 6 10 19 55 29</p>
                </div>
            </div>
        </>
    );
}

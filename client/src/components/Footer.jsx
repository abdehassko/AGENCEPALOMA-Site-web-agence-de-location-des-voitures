import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fb from "../assets/fb.png";
import yt from "../assets/yt.png";
import nsta from "../assets/nsta.png";

export default function Footer() {
    const [email, setEmail] = useState("");

    useEffect(() => {
        const basElement = document.querySelector(".bas");
        const basParagraphs = basElement?.querySelectorAll("p");

        if (!basElement || !basParagraphs) return;

        basParagraphs.forEach((p) => p.classList.add("hidden"));

        function revealText() {
            const basPosition = basElement.getBoundingClientRect().top;
            const screenPosition = window.innerHeight - 100;

            if (basPosition < screenPosition) {
                basParagraphs.forEach((p, i) => {
                    p.classList.remove("hidden");
                    p.style.animationDelay = `${i * 1}s`;
                });

                window.removeEventListener("scroll", revealText);
            }
        }

        window.addEventListener("scroll", revealText);

        return () => window.removeEventListener("scroll", revealText);
    }, []);

    const handleSubscribe = (e) => {
        e.preventDefault();
        console.log("Subscribed:", email);
        // Add your API call here
        alert(`Subscribed with ${email}`);
        setEmail(""); // reset input
    };

    return (
        <>
            <div className="bas">
                <br />
                <div>
                    <p>Our team connects passion with creativity.</p>
                    <p>
                        Our team is a dedicated group of professionals committed
                        to delivering exceptional service. With diverse
                        expertise and a passion for excellence, we work
                        collaboratively to meet your needs and exceed
                        expectations. Together, we strive
                    </p>
                </div>
                <br />
                <br />
                <Link
                    to="/local"
                    className="styled-button"
                    onClick={() => {
                        const middle = document.body.scrollHeight / 4.7; // middle of the page
                        window.scrollTo({ top: middle, behavior: "smooth" });
                    }}
                >
                    Meet Our Team
                </Link>
            </div>

            <div className="half-behind">
                <div className="newsletter">
                    <h2 className="e">Subscribe to our Newsletter</h2>
                    <form onSubmit={handleSubscribe}>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <br />
                        <br />
                        <button type="submit">Subscribe</button>
                        <br />
                        <br />
                    </form>
                </div>

                <div className="social-media">
                    <h2>Follow Us</h2>
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={fb} alt="Facebook" />
                    </a>
                    <a
                        href="https://youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={yt} alt="YouTube" />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={nsta} alt="Instagram" />
                    </a>
                </div>

                <br />
                <div className="address">
                    <h2>Our Address</h2>
                    <p>
                        Av. Jbel Zerhoun, 93020 , Tétouan, Morocco <br />
                        Phone: (+212) 601435665
                        <br />
                        <a
                            href="mailto:contact@agency.com"
                            style={{ textDecoration: "none", color: "white" }}
                        >
                            Email: contact@paloma.agency.com
                        </a>
                    </p>
                </div>

                <hr />
                <div className="copyright">
                    <p>&copy; Agence Paloma Morocco</p>
                </div>
            </div>
        </>
    );
}

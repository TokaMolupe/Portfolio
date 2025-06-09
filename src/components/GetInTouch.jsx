import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";

function GetInTouch() {
    const navigate = useNavigate(); // for navigation

    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const data = new FormData(form);

        fetch("https://formspree.io/f/xovwedbw", {
            method: "POST",
            body: data,
            headers: {
                Accept: "application/json",
            },
        }).then((response) => {
            if (response.ok) {
                setSubmitted(true);
                form.reset();
            } else {
                alert("Something went wrong. Try again.");
            }
        });
    };

    useEffect(() => {
        if (submitted) {
            const timer = setTimeout(() => {
                navigate("/");
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [submitted, navigate]);

    if (submitted) {
        return <p>✅ Message sent! Redirecting...</p>;
    }
    return (
        <div class=" flex p-24 items-center justify-center w-full h-screen text-white">

            <form className="form" onSubmit={handleSubmit}>
                <Link
                    to="/"
                >
                    <IoHomeOutline
                        className="text-3xl hover:text-lime-500 cursor-pointer" />
                </Link>
                <h1 className="mb-10 text-3xl text-center hover:text-lime-500 hover:underline">Contact</h1>
                <input
                    className="inputForm mb-10 w-full px-2 rounded-lg p-2 bg-transparent shadow-lg shadow-lime-500 border-none focus:outline-none"
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Name:"
                /><br />

                <input
                    className="inputForm mb-10 w-full px-2 rounded-lg p-2 bg-transparent shadow-lg shadow-lime-500 border-none focus:outline-none"
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="Email:"
                /><br />

                <select
                    className="optionForm mb-10 w-full px-2 rounded-lg p-2 bg-transparent shadow-lg shadow-lime-500 border-none focus:outline-none"
                    name="section"
                    required
                >
                    <option
                        value=""
                        disabled selected className="text-black">-- Please choose an option --
                    </option>
                    <option
                        value="Collaboration"
                        className="text-gray-700">Collaboration
                    </option>
                    <option
                        value="Job Opportunity"
                        className="text-gray-700">Job Opportunity
                    </option>
                    <option
                        value="Freelance Work"
                        className="text-gray-700">Freelance Work
                    </option>
                    <option
                        value="Question"
                        className="text-gray-700">Ask a Question
                    </option>
                    <option
                        value="Feedback"
                        className="text-gray-700">Leave Feedback
                    </option>
                    <option
                        value="Networking"
                        className="text-gray-700">Networking
                    </option>
                    <option
                        value="Other"
                        className="text-gray-700">Other
                    </option>
                </select><br />

                <textarea
                    className="textarea mb-10 w-full px-2 rounded-lg p-10 border-none bg-transparent shadow-lg shadow-lime-500 focus:outline-none"
                    id="message"
                    name="message"
                    required
                    placeholder="Message:"
                ></textarea><br />

                <button className="formBtn mb-10 p-4 bg-transparent shadow-lg shadow-lime-500 rounded-lg w-full border-none transition-transform duration-300 hover:scale-105">Send</button>
            </form>

        </div>
    );
};


export default GetInTouch;
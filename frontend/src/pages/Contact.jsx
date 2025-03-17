import React, { useState } from "react";
import Navbar from "../components/Nav_bar"; // Adjust the path if needed

const ConnectWithUs = () => {
    return (
        <div className="relative">
            <img
                src="https://i.pinimg.com/736x/fb/4d/44/fb4d44101721524f854ae8707d3cdb60.jpg"
                alt="Person lying on grass and using a phone"
                className="w-full h-screen object-contain brightness-50"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
                <h1 className="text-4xl font-bold">Connect With Us</h1>
                <p className="mt-2 text-lg max-w-2xl">
                    Stay updated with our latest news, events, and fitness tips by
                    following us on our social media platforms. Join our community and
                    engage with fellow fitness enthusiasts.
                </p>
                <button className="mt-4 px-6 py-2 bg-white text-black font-semibold rounded hover:bg-gray-300">
                    Follow Us
                </button>
            </div>
        </div>
    );
};

const GetInTouch = () => {
    // State for form data
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    // Handle form data changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch("http://127.0.0.1:8000/api/contacts/contact-form/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
    
            const data = await response.json();
    
            if (response.ok) {
                alert("Message sent successfully!");
                setFormData({
                    name: "",
                    email: "",
                    message: "",
                });
            } else {
                alert(`Failed to send message: ${data.message}`);
            }
        } catch (error) {
            console.error("Error submitting contact form:", error);
            alert("An error occurred while submitting the form.");
        }
    };
    
    
    

    return (
        <div className="bg-black text-white py-16">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center">Get in Touch</h2>
                <p className="mt-4 text-center text-gray-400">
                    We are conveniently located in the heart of the city. Our doors are
                    open for you to achieve your fitness goals. Check our operating hours
                    and feel free to reach out with any questions.
                </p>
                <div className="mt-8 flex flex-col md:flex-row md:space-x-8">
                    {/* Contact Form */}
                    <div className="flex-1">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Name"
                                className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none"
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Email"
                                className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded focus:outline-none"
                            />
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder="Message"
                                className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-600 rounded h-32 focus:outline-none"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full px-4 py-2 bg-white text-black font-semibold rounded hover:bg-gray-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Details */}
                    <div className="flex-1 mt-8 md:mt-0">
                        <div className="flex items-center space-x-4">
                            <i className="fas fa-map-marker-alt text-gray-400"></i>
                            <p>Inaruwa, Nepal</p>
                        </div>
                        <div className="flex items-center space-x-4 mt-4">
                            <i className="fas fa-clock text-gray-400"></i>
                            <p>Mon-Fri 10am-5pm, Sat 1pm-5pm</p>
                        </div>

                        {/* Static Map Image */}
                        <div className="mt-4">
                            <img
                                src="https://i.pinimg.com/474x/31/5b/7b/315b7b41ec7bdb86542b7bba2dd0158a.jpg"
                                alt="Map of Kathmandu, Nepal"
                                className="w-full h-80 border border-gray-600"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ContactPage = () => {
    return (
        <div className="bg-black text-white">
            <Navbar />
            <ConnectWithUs />
            <GetInTouch />
        </div>
    );
};

export default ContactPage;

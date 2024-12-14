import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare the data to be sent
        const submissionData = new FormData();
        submissionData.append("Name", formData.name);
        submissionData.append("Email", formData.email);
        submissionData.append("Message", formData.message);

        try {
            const response = await fetch("YOUR_WEB_APP_URL", {
                method: "POST",
                body: submissionData,
            });

            if (response.ok) {
                setResponseMessage("Your message was successfully sent!");
                setFormData({ name: '', email: '', message: '' });
            } else {
                setResponseMessage("There was an error sending your message.");
            }
        } catch (error) {
            console.error("Error:", error);
            setResponseMessage("There was an error sending your message.");
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Contact Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
                {responseMessage && <p className="mt-3 text-center">{responseMessage}</p>}
            </form>
        </div>
    );
};

export default ContactForm;

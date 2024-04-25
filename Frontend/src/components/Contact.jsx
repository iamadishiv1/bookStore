import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importing useNavigate instead of useHistory

function Contact() {
    const navigate = useNavigate(); // Using useNavigate instead of useHistory

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contactNumber: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const handleGoBack = () => {
        navigate(-1); // Navigate back to the previous page
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md relative">
            <button onClick={handleGoBack} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 focus:outline-none border rounded-full px-2">
                x
            </button>
            <h2 className="text-2xl font-bold mb-4">Contact Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name *</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">Contact Number *</label>
                    <input
                        type="text"
                        id="contactNumber"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        required
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                </div>
                <button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700">Submit</button>
            </form>
        </div>
    )
}

export default Contact;

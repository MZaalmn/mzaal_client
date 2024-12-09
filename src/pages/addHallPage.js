import React, { useState } from "react";
import axios from "axios";

const AddHallPage = () => {
    const [formData, setFormData] = useState({
        title: "",
        price: "",
        sale: "",
        description: "",
        heroImage: "",
        location: "",
        contactNumber: "",
        facilities: "",
    });

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState("");

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});
        setSuccess("");

        try {
            const response = await axios.post(
                "http://localhost:8000/halls",
                formData
            );
            setSuccess("Hall added successfully!");
            setFormData({
                title: "",
                price: "",
                sale: "",
                description: "",
                heroImage: "",
                location: "",
                contactNumber: "",
                facilities: "",
            });
        } catch (error) {
            if (error.response && error.response.data.errors) {
                const validationErrors = {};
                error.response.data.errors.forEach((err) => {
                    validationErrors[err.param] = err.msg;
                });
                setErrors(validationErrors);
            } else {
                console.error("Error adding hall:", error);
            }
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-2xl font-bold text-center mb-6">
                Add a New Hall
            </h1>
            {success && (
                <p className="text-green-500 text-center mb-4">{success}</p>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col">
                    <label
                        htmlFor="title"
                        className="font-medium text-gray-700"
                    >
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.title && (
                        <p className="text-red-500 text-sm">{errors.title}</p>
                    )}
                </div>
                <div className="flex flex-col">
                    <label
                        htmlFor="price"
                        className="font-medium text-gray-700"
                    >
                        Price
                    </label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.price && (
                        <p className="text-red-500 text-sm">{errors.price}</p>
                    )}
                </div>
                <div className="flex flex-col">
                    <label htmlFor="sale" className="font-medium text-gray-700">
                        Sale
                    </label>
                    <input
                        type="text"
                        id="sale"
                        name="sale"
                        value={formData.sale}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex flex-col">
                    <label
                        htmlFor="description"
                        className="font-medium text-gray-700"
                    >
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows="4"
                        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                    {errors.description && (
                        <p className="text-red-500 text-sm">
                            {errors.description}
                        </p>
                    )}
                </div>
                <div className="flex flex-col">
                    <label
                        htmlFor="heroImage"
                        className="font-medium text-gray-700"
                    >
                        Hero Image URL
                    </label>
                    <input
                        type="text"
                        id="heroImage"
                        name="heroImage"
                        value={formData.heroImage}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.heroImage && (
                        <p className="text-red-500 text-sm">
                            {errors.heroImage}
                        </p>
                    )}
                </div>
                <div className="flex flex-col">
                    <label
                        htmlFor="location"
                        className="font-medium text-gray-700"
                    >
                        Location
                    </label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.location && (
                        <p className="text-red-500 text-sm">
                            {errors.location}
                        </p>
                    )}
                </div>
                <div className="flex flex-col">
                    <label
                        htmlFor="contactNumber"
                        className="font-medium text-gray-700"
                    >
                        Contact Number
                    </label>
                    <input
                        type="text"
                        id="contactNumber"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.contactNumber && (
                        <p className="text-red-500 text-sm">
                            {errors.contactNumber}
                        </p>
                    )}
                </div>
                <div className="flex flex-col">
                    <label
                        htmlFor="facilities"
                        className="font-medium text-gray-700"
                    >
                        Facilities (comma-separated)
                    </label>
                    <input
                        type="text"
                        id="facilities"
                        name="facilities"
                        value={formData.facilities}
                        onChange={handleChange}
                        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
                >
                    Add Hall
                </button>
            </form>
        </div>
    );
};

export default AddHallPage;

import axios from "axios";
import React, { useState } from "react";

const CreateNewsPage = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        heroImage: "",
        images: [],
        author: "",
        published: false,
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    // const handleImageChange = (e) => {
    //     const files = e.target.files;
    //     setFormData({
    //         ...formData,
    //         images: Array.from(files),
    //     });
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await axios.post(
                "http://localhost:8000/news",
                formData
            );
            console.log(formData);
            if (response.status === 201) {
                alert("News created successfully");
                // You can reset the form or redirect as needed
            } else {
                setError(response.data.message || "Error creating news");
            }
        } catch (err) {
            setError(
                err.response?.data?.message ||
                    err.message ||
                    "An unexpected error occurred"
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-8">Create News</h1>
            {error && (
                <div className="text-red-500 mb-4 text-center">{error}</div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Title */}
                <div>
                    <label
                        htmlFor="title"
                        className="block text-lg font-medium"
                    >
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                    />
                </div>

                {/* Description */}
                <div>
                    <label
                        htmlFor="description"
                        className="block text-lg font-medium"
                    >
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        rows="5"
                        required
                    />
                </div>

                {/* Hero Image URL */}
                <div>
                    <label
                        htmlFor="heroImage"
                        className="block text-lg font-medium"
                    >
                        Hero Image URL
                    </label>
                    <input
                        type="text"
                        id="heroImage"
                        name="heroImage"
                        value={formData.heroImage}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                    />
                </div>

                {/* Image Uploads */}
                <div>
                    <label
                        htmlFor="images"
                        className="block text-lg font-medium"
                    >
                        Additional Images
                    </label>
                    <input
                        type="text"
                        id="images"
                        name="images"
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>

                {/* Author */}
                <div>
                    <label
                        htmlFor="author"
                        className="block text-lg font-medium"
                    >
                        Author
                    </label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                    />
                </div>

                {/* Published Checkbox */}
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="published"
                        name="published"
                        checked={formData.published}
                        onChange={handleChange}
                        className="w-5 h-5 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                        htmlFor="published"
                        className="ml-2 text-lg font-medium"
                    >
                        Published
                    </label>
                </div>

                {/* Submit Button */}
                <div>
                    <button
                        type="submit"
                        className={`w-full p-3 bg-indigo-600 text-white font-bold rounded-md focus:outline-none ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                        disabled={loading}
                    >
                        {loading ? "Submitting..." : "Create News"}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateNewsPage;

// tailwind.config.js
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                orange: {
                    DEFAULT: "#FA8232",
                    light: "#FFAB74",
                },
                red: {
                    DEFAULT: "#FC1515",
                    light: "#FF6B6B",
                },
                black: "#191C1F",
                text: {
                    primary: "#333333",
                    secondary: "#666666",
                    orange: "#FA8232",
                },
            },
        },
    },
    plugins: [],
};

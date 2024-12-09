const Card = ({ court }) => {
    return (
        <div className="border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white">
            {/* Image Section */}
            <div className="relative group">
                <img
                    src={court.imgUrl}
                    alt={court.name}
                    className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300"></div>
                <span className="absolute bottom-2 right-2 bg-red-500 text-white text-sm px-2 py-1 rounded">
                    {court.rating} ⭐
                </span>
            </div>
            {/* Content Section */}
            <div className="p-4">
                <h3 className="font-bold text-xl text-gray-800">{court.name}</h3>
                <p className="text-gray-600 mt-2">📍 Байршил: {court.location}</p>
                <p className="text-gray-600">⚽ Төрөл: {court.type}</p>
                <p className="text-red-500 font-bold text-lg mt-2">Үнэ: {court.price}₮</p>
                <button className="bg-red-500 hover:bg-red-600 text-white w-full mt-4 py-2 rounded-lg transition-all duration-300">
                    Захиалах →
                </button>
            </div>
        </div>
    );
};

export default Card;

const Card = ({ court }) => {
    return (
        <div className="border rounded shadow-md overflow-hidden">
            <img
                src={court.imgUrl}
                alt={court.name}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="font-bold text-lg">{court.name}</h3>
                <p className="text-gray-600">Байршил: {court.location}</p>
                <p className="text-gray-600">Төрөл: {court.type}</p>
                <p className="text-red-500 font-bold">Үнэ: {court.price}₮</p>
                <button className="bg-red-500 text-white w-full mt-4 py-2 rounded">
                    Захиалах
                </button>
            </div>
        </div>
    );
};

export default Card;

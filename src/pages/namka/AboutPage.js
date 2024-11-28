import Card from "./Card";

const teamMembers = [
    {
        name: "Kevin Gilbert",
        position: "Chief Executive Officer",
        imageUrl: "/images/team1.jpg",
    },
    {
        name: "Kevin Gilbert",
        position: "Assistant of CEO",
        imageUrl: "/images/team2.jpg",
    },
    {
        name: "Kevin Gilbert",
        position: "Head of Designer",
        imageUrl: "/images/team3.jpg",
    },
    {
        name: "Kevin Gilbert",
        position: "UX Designer",
        imageUrl: "/images/team4.jpg",
    },
];

const courts = [
    {
        id: 1,
        name: "БЗД, Нарны Шинэ Монгол сургуулийн заал",
        location: "БЗД, Улаанбаатар",
        type: "Сагсны заал",
        price: "750,000₮",
        imgUrl: "/images/court1.jpg",
    },
    {
        id: 2,
        name: "БЗД, Нарны Шинэ Монгол сургуулийн заал",
        location: "БЗД, Улаанбаатар",
        type: "Сагсны заал",
        price: "750,000₮",
        imgUrl: "/images/court2.jpg",
    },
];

export default function About() {
    return (
        <div>
            <main className="container mx-auto my-8 px-4">
                {/* Талархал хэсэг */}
                <section className="mb-12">
                    <h1 className="text-4xl font-extrabold mb-8 text-center text-orange-500">
                        Талархал
                    </h1>
                    <div className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg p-8 space-y-6 md:space-y-0 md:space-x-6">
                        <div className="md:w-1/2">
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                Praesent maximus lobortis nisi at congue. Nulla malesuada feugiat ipsum eu pharetra.
                            </p>
                            <ul className="list-disc ml-5 space-y-3 text-gray-700">
                                <li>Дээд зэрэглэлийн чанартай үйлчилгээ</li>
                                <li>Зоригтой шийдэл, хурдтай ажлын арга барил</li>
                                <li>Маркетинг орчин үеийн шийдэлд тулгуурлана</li>
                                <li>Дэлхийн стандартад нийцсэн бүрэн систем</li>
                            </ul>
                        </div>
                        <div className="md:w-1/2">
                            <img
                                src="/images/court1.jpg"
                                alt="Court"
                                className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
                            />
                        </div>
                    </div>
                </section>

                {/* Хамт олон хэсэг */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-center text-orange-500">
                        Манай хамт олон
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 transition hover:shadow-lg hover:scale-105 transform"
                            >
                                <img
                                    src={member.imageUrl}
                                    alt={member.name}
                                    className="w-24 h-24 object-cover rounded-full border-4 border-orange-500"
                                />
                                <h3 className="text-lg font-bold mt-4 text-gray-800">
                                    {member.name}
                                </h3>
                                <p className="text-gray-500">{member.position}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Санал болгох заалнууд */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6 text-center text-orange-500">
                        Санал болгох заалнууд
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                        {courts.map((court) => (
                            <Card
                                key={court.id}
                                court={court}
                                className="hover:shadow-lg hover:scale-105 transform transition"
                            />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}

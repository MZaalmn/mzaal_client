import Card from "./Card";


const teamMembers = [
    {
        name: 'Kevin Gilbert',
        position: 'Chief Executive Officer',
        imageUrl: '/images/team1.jpg',
    },
    {
        name: 'Kevin Gilbert',
        position: 'Assistant of CEO',
        imageUrl: '/images/team2.jpg',
    },
    {
        name: 'Kevin Gilbert',
        position: 'Head of Designer',
        imageUrl: '/images/team3.jpg',
    },
    {
        name: 'Kevin Gilbert',
        position: 'UX Designer',
        imageUrl: '/images/team4.jpg',
    },
];

const courts = [
    {
        id: 1,
        name: 'БЗД, Нарны Шинэ Монгол сургуулийн заал',
        location: 'БЗД, Улаанбаатар',
        type: 'Сагсны заал',
        price: '750,000',
        imgUrl: '/images/court1.jpg',
    },
    {
        id: 2,
        name: 'БЗД, Нарны Шинэ Монгол сургуулийн заал',
        location: 'БЗД, Улаанбаатар',
        type: 'Сагсны заал',
        price: '750,000',
        imgUrl: '/images/court2.jpg',
    },
];

export default function About() {
    return (
        <div>
            <main className="container mx-auto my-8">
                <section className="mb-12">
                    <h1 className="text-2xl font-bold mb-4">ТАЛАРХАЛ</h1>
                    <div className="flex space-x-6">
                        <div className="w-1/2">
                            <p className="text-gray-700 mb-4">
                                Praesent maximus lobortis nisi at congue. Nulla malesuada feugiat ipsum eu pharetra.
                            </p>
                            <ul className="list-disc ml-5 space-y-2">
                                <li>Дээд зэрэглэлийн чанартай үйлчилгээ</li>
                                <li>Зоригтой шийдэл, хурдтай ажлын арга барил</li>
                                <li>Маркетинг орчин үеийн шийдэлд тулгуурлана</li>
                                <li>Дэлхийн стандартад нийцсэн бүрэн систем</li>
                            </ul>
                        </div>
                        <div className="w-1/2">
                            <img
                                src="/images/court1.jpg"
                                alt="Court"
                                className="w-full h-64 object-cover rounded"
                            />
                        </div>
                    </div>
                </section>
                <section className="mb-12">
                    <h2 className="text-xl font-bold mb-4">Манай хамт олон</h2>
                    <div className="grid grid-cols-4 gap-6">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="text-center">
                                <img
                                    src={member.imageUrl}
                                    alt={member.name}
                                    className="w-24 h-24 object-cover rounded-full mx-auto"
                                />
                                <h3 className="text-lg font-bold mt-2">{member.name}</h3>
                                <p className="text-gray-500">{member.position}</p>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="mb-12">
                    <h2 className="text-xl font-bold mb-4">Санал болгох заалнууд</h2>
                    <div className="grid grid-cols-4 gap-6">
                        {courts.map((court) => (
                            <Card key={court.id} court={court} />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}

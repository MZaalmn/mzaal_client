

const categories = [
    { id: 1, title: 'Захиалга', link: '#' },
    { id: 2, title: 'Нууц үгний дахин тохируулах', link: '#' },
    { id: 3, title: 'Төлбөрийн сонголт', link: '#' },
    { id: 4, title: 'Хэрэглэгчийн данс', link: '#' },
    { id: 5, title: 'Хүслийн жагсаалт ба харилцах', link: '#' },
    { id: 6, title: 'Тээвэрлэлт ба тооцоо', link: '#' },
    { id: 7, title: 'Promo code', link: '#' },
    { id: 8, title: 'МЗаал мэдээлэл', link: '#' },
];

const faqs = [
    { id: 1, question: 'How do I return my item?', link: '#' },
    { id: 2, question: 'What is Clicsons Return Policy?', link: '#' },
    { id: 3, question: 'How long is the refund process?', link: '#' },
    { id: 4, question: 'What are the Delivery Timelines?', link: '#' },
    { id: 5, question: 'What is Discover Your Deals Campaign 2022?', link: '#' },
    { id: 6, question: 'What is the Voucher & Gift Offer in this Campaign?', link: '#' },
    { id: 7, question: 'How to cancel Clicon Order?', link: '#' },
    { id: 8, question: 'How to change my shop name?', link: '#' },
];

export default function Help() {
    return (
        <div>
            <main className="container mx-auto my-8">
                {/* Hero Section */}
                <section className="text-center mb-12">
                    <h1 className="text-2xl font-bold mb-4">Бид танд хэрхэн тусалж чадах вэ?</h1>
                    <p className="text-gray-600 mb-4">Асуулт асгах тулгуур үгээ оруулна уу</p>
                    <div className="flex justify-center">
                        <input
                            type="text"
                            placeholder="Асуулт оруулна уу..."
                            className="border p-2 w-1/2 rounded-l"
                        />
                        <button className="bg-red-500 text-white px-6 rounded-r">Хайх</button>
                    </div>
                </section>

                {/* Categories Section */}
                <section className="mb-12">
                    <h2 className="text-xl font-bold mb-6">Өнөөдөр бид танд юу тусалж чадах вэ?</h2>
                    <div className="grid grid-cols-4 gap-6">
                        {categories.map((category) => (
                            <a
                                key={category.id}
                                href={category.link}
                                className="block border rounded p-4 text-center text-gray-700 hover:bg-red-100 hover:text-red-500 transition"
                            >
                                {category.title}
                            </a>
                        ))}
                    </div>
                </section>

                {/* FAQ Section */}
                <section>
                    <h2 className="text-xl font-bold mb-6">Түгээмэл асуултууд</h2>
                    <div className="grid grid-cols-2 gap-6">
                        {faqs.map((faq) => (
                            <a
                                key={faq.id}
                                href={faq.link}
                                className="block text-gray-700 hover:text-red-500 transition"
                            >
                                {faq.question}
                            </a>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}

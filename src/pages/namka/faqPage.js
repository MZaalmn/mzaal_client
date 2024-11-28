import { useState } from 'react';

const faqData = [
    {
        question: 'Төлбөрөө яаж төлөх вэ?',
        answer: `Nulla malesuada laoreet nisl. Morbi aliquet pulvinar orci non volutpat. Donec aliquet ullamcorper gravida. 
        Integer et lacus vitae justo fermentum rutrum. In nec ultricies massa.`,
    },
    {
        question: 'Цагаа хойшлуулах боломжтой юу?',
        answer: 'Цагийг урьдчилан тохирсон тохиолдолд хойшлуулах боломжтой.',
    },
    {
        question: 'Хэдээс хэдэн цагийн хооронд ажилдаг вэ?',
        answer: 'Бид өдөр бүр өглөө 8:00 цагаас орой 22:00 цаг хүртэл ажилладаг.',
    },
    {
        question: 'Хөнгөлөлт урамшуулал байгаа юу?',
        answer: 'Бид улирал бүр хөнгөлөлтийн урамшуулал зарладаг. Дэлгэрэнгүй мэдээлэл авахыг хүсвэл бидэнтэй холбогдоорой.',
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <main className="container mx-auto py-8 px-4 lg:px-0">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Түгээмэл асуултууд</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* FAQ Section */}
                    <div className="lg:col-span-2 space-y-4">
                        {faqData.map((item, index) => (
                            <div
                                key={index}
                                className={`border rounded shadow-sm ${
                                    openIndex === index ? 'bg-white' : 'bg-gray-50'
                                }`}
                            >
                                <button
                                    className={`w-full text-left p-4 focus:outline-none transition-all ${
                                        openIndex === index
                                            ? 'text-red-600 font-semibold'
                                            : 'text-gray-700'
                                    }`}
                                    onClick={() => toggleFAQ(index)}
                                >
                                    {item.question}
                                </button>
                                {openIndex === index && (
                                    <div className="p-4 text-gray-600 border-t bg-gray-50">
                                        {item.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Feedback Section */}
                    <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold mb-4 text-gray-800">
                            Санал хүсэлт илгээнэ үү
                        </h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Имэйл хаяг
                                </label>
                                <input
                                    type="email"
                                    className="w-full p-3 border rounded-lg focus:ring focus:ring-yellow-300"
                                    placeholder="Таны имэйл"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Сэдэв</label>
                                <input
                                    type="text"
                                    className="w-full p-3 border rounded-lg focus:ring focus:ring-yellow-300"
                                    placeholder="Таны саналын сэдэв"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Мессеж
                                </label>
                                <textarea
                                    className="w-full p-3 border rounded-lg focus:ring focus:ring-yellow-300"
                                    rows="4"
                                    placeholder="Мессежээ бичнэ үү..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-red-500 text-white py-2 px-4 w-full rounded-lg hover:bg-red-600 transition-all"
                            >
                                Илгээх →
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}

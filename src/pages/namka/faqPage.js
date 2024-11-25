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
        <div>
            <main className="container mx-auto my-8">
                <h1 className="text-2xl font-bold mb-6">Түгээмэл асуултууд</h1>
                <div className="grid grid-cols-3 gap-6">
                    {/* FAQ Section */}
                    <div className="col-span-2">
                        {faqData.map((item, index) => (
                            <div
                                key={index}
                                className="border-b last:border-b-0"
                            >
                                <button
                                    className={`w-full text-left p-4 ${
                                        openIndex === index
                                            ? 'bg-red-100 text-red-600'
                                            : 'text-gray-700'
                                    }`}
                                    onClick={() => toggleFAQ(index)}
                                >
                                    {item.question}
                                </button>
                                {openIndex === index && (
                                    <div className="p-4 bg-gray-50 text-gray-600">
                                        {item.answer}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Feedback Section */}
                    <div className="bg-yellow-100 p-6 rounded shadow">
                        <h2 className="text-lg font-bold mb-4">
                            Санал хүсэлт илгээнэ үү
                        </h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm mb-1">
                                    Имэйл хаяг
                                </label>
                                <input
                                    type="email"
                                    className="w-full p-2 border rounded"
                                    placeholder="Таны имэйл"
                                />
                            </div>
                            <div>
                                <label className="block text-sm mb-1">Сэдэв</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border rounded"
                                    placeholder="Таны саналын сэдэв"
                                />
                            </div>
                            <div>
                                <label className="block text-sm mb-1">
                                    Мессеж
                                </label>
                                <textarea
                                    className="w-full p-2 border rounded"
                                    rows="4"
                                    placeholder="Мессежээ бичнэ үү..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-red-500 text-white w-full py-2 rounded"
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

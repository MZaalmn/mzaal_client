export default function HelpCenter() {
    return (
        <div>
            <main className="container mx-auto my-10 px-4 lg:px-0">
                {/* Header Section */}
                <section className="bg-gradient-to-r from-orange-400 to-orange-600 text-white rounded-lg p-10 shadow-lg mb-12">
                    <h1 className="text-4xl font-extrabold mb-4">Хэрэглэгчийн туслах</h1>
                    <p className="text-lg">
                        Бид танд хэрхэн туслах вэ? Доорх хайлтын хэсэг эсвэл үйлчилгээнүүдээс сонгоно уу.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center mt-6 space-y-4 sm:space-y-0 sm:space-x-4">
                        <input
                            type="text"
                            placeholder="Асуулт эсвэл түлхүүр үг оруулна уу"
                            className="flex-grow w-full p-4 rounded-lg shadow-inner border border-gray-300 focus:outline-none"
                        />
                        <button className="px-8 py-3 bg-white text-orange-500 font-bold rounded-lg shadow hover:bg-gray-100 transition">
                            Хайх
                        </button>
                    </div>
                </section>

                {/* Options Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                        Өнөөдөр бид танд юу тусалж чадах вэ?
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Захиалга", icon: "📦" },
                            { title: "Нууц үгийг дахин тохируулах", icon: "🔑" },
                            { title: "Төлбөрийн сонголт", icon: "💳" },
                            { title: "Хэрэглэгчийн дэлгэрэнгүй", icon: "👤" },
                            { title: "Хүсэлт жагсаалт ба хариултууд", icon: "📄" },
                            { title: "Тээврийн ба тооцоо", icon: "🚛" },
                            { title: "Promo code", icon: "🎟️" },
                            { title: "МЗал мэдээлэл", icon: "ℹ️" },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition transform hover:scale-105"
                            >
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <p className="text-lg font-medium text-gray-700">{item.title}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="bg-white shadow-md rounded-lg p-10">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                        Түгээмэл асуултууд
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            "How do I return my item?",
                            "What is Clickons Returns Policy?",
                            "How long is the refund process?",
                            "What are the Delivery Timelines?",
                            "What is Discover Your Dara Campaign 2022?",
                            "What is the Voucher & Gift Offer in this Campaign?",
                            "How to cancel Clickon Order?",
                            "How to change my shop name?",
                            "Ask the Digital and Device Community.",
                        ].map((faq, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-lg transition transform hover:scale-105"
                            >
                                <h3 className="text-lg font-medium text-gray-700">{faq}</h3>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    );
}

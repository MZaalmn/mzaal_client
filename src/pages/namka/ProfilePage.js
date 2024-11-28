export default function Profile() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <main className="container mx-auto py-12 px-6">
                {/* Бүртгэлийн тохиргоо */}
                <section className="bg-white shadow-lg rounded-lg p-8 mb-12">
                    <h1 className="text-3xl font-extrabold mb-8 text-gray-900 text-center">
                        БҮРТГЭЛИЙН ТОХИРГОО
                    </h1>
                    <div className="flex flex-col md:flex-row items-center md:space-x-6 mb-10">
                        <img
                            src="/images/user-avatar.jpg"
                            alt="User Avatar"
                            className="w-32 h-32 rounded-full object-cover border-4 border-orange-500 shadow-md"
                        />
                        <div className="mt-6 md:mt-0 text-center md:text-left">
                            <p className="text-2xl font-bold text-gray-800">Жишээ Нэр</p>
                            <p className="text-gray-600">user@example.com</p>
                        </div>
                    </div>
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Нэр
                            </label>
                            <input
                                type="text"
                                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                                placeholder="Нэр"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Хэрэглэгчийн нэр
                            </label>
                            <input
                                type="text"
                                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                                placeholder="Хэрэглэгчийн нэр"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Имэйл
                            </label>
                            <input
                                type="email"
                                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                                placeholder="Имэйл"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Утасны дугаар
                            </label>
                            <input
                                type="text"
                                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                                placeholder="Утасны дугаар"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Дүүрэг
                            </label>
                            <select className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none">
                                <option value="Сонгинохайрхан">Сонгинохайрхан</option>
                                <option value="Баянгол">Баянгол</option>
                                <option value="Сүхбаатар">Сүхбаатар</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Хороо
                            </label>
                            <select className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none">
                                <option value="1-р хороо">1-р хороо</option>
                                <option value="2-р хороо">2-р хороо</option>
                                <option value="3-р хороо">3-р хороо</option>
                            </select>
                        </div>
                    </form>
                    <button className="mt-8 px-10 py-4 bg-orange-500 text-white text-lg font-bold rounded-lg shadow-md hover:bg-orange-600 focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:outline-none transition">
                        ХАДГАЛАХ
                    </button>
                </section>

                {/* Нууц үг өөрчлөх */}
                <section className="bg-white shadow-lg rounded-lg p-8">
                    <h2 className="text-3xl font-extrabold mb-8 text-gray-900 text-center">
                        НУУЦ ҮГ ӨӨРЧЛӨХ
                    </h2>
                    <form className="grid grid-cols-1 gap-8">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Одоогийн нууц үг
                            </label>
                            <input
                                type="password"
                                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                                placeholder="Одоогийн нууц үг"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Шинэ нууц үг
                            </label>
                            <input
                                type="password"
                                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                                placeholder="Шинэ нууц үг"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Нууц үг баталгаажуулах
                            </label>
                            <input
                                type="password"
                                className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none"
                                placeholder="Нууц үг баталгаажуулах"
                            />
                        </div>
                    </form>
                    <button className="mt-8 px-10 py-4 bg-red-500 text-white text-lg font-bold rounded-lg shadow-md hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:outline-none transition">
                        НУУЦ ҮГ СОЛИХ
                    </button>
                </section>
            </main>
        </div>
    );
}

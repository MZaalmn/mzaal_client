

export default function Profile() {
    return (
        <div>
            <main className="container mx-auto my-8">
                {/* Profile Information Section */}
                <section className="bg-white shadow rounded p-6 mb-8">
                    <h1 className="text-xl font-bold mb-6">БҮРТГЭЛИЙН ТОХИРГОО</h1>
                    <div className="flex items-center space-x-6 mb-6">
                        <img
                            src="/images/user-avatar.jpg"
                            alt="User Avatar"
                            className="w-24 h-24 rounded-full object-cover"
                        />
                        <div>
                            <p className="text-gray-700 font-bold">Нэр: Жишээ Нэр</p>
                            <p className="text-gray-600">Имэйл: user@example.com</p>
                        </div>
                    </div>
                    <form className="grid grid-cols-2 gap-6">
                        {/* Left Column */}
                        <div>
                            <label className="block text-sm mb-2">Нэр</label>
                            <input
                                type="text"
                                className="w-full p-2 border rounded"
                                placeholder="Нэр"
                            />
                        </div>
                        <div>
                            <label className="block text-sm mb-2">Хэрэглэгчийн нэр</label>
                            <input
                                type="text"
                                className="w-full p-2 border rounded"
                                placeholder="Хэрэглэгчийн нэр"
                            />
                        </div>
                        <div>
                            <label className="block text-sm mb-2">Имэйл</label>
                            <input
                                type="email"
                                className="w-full p-2 border rounded"
                                placeholder="Имэйл"
                            />
                        </div>
                        <div>
                            <label className="block text-sm mb-2">Утасны дугаар</label>
                            <input
                                type="text"
                                className="w-full p-2 border rounded"
                                placeholder="Утасны дугаар"
                            />
                        </div>
                        <div>
                            <label className="block text-sm mb-2">Дүүрэг</label>
                            <select className="w-full p-2 border rounded">
                                <option value="Сонгинохайрхан">Сонгинохайрхан</option>
                                <option value="Баянгол">Баянгол</option>
                                <option value="Сүхбаатар">Сүхбаатар</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm mb-2">Хороо</label>
                            <select className="w-full p-2 border rounded">
                                <option value="1-р хороо">1-р хороо</option>
                                <option value="2-р хороо">2-р хороо</option>
                                <option value="3-р хороо">3-р хороо</option>
                            </select>
                        </div>
                    </form>
                    <button className="bg-red-500 text-white px-6 py-2 rounded mt-6">
                        ХАДГАЛАХ
                    </button>
                </section>

                {/* Password Section */}
                <section className="bg-white shadow rounded p-6">
                    <h2 className="text-xl font-bold mb-6">НУУЦ ҮГ ӨӨРЧЛӨХ</h2>
                    <form className="grid grid-cols-1 gap-6">
                        <div>
                            <label className="block text-sm mb-2">Одоогийн нууц үг</label>
                            <input
                                type="password"
                                className="w-full p-2 border rounded"
                                placeholder="Одоогийн нууц үг"
                            />
                        </div>
                        <div>
                            <label className="block text-sm mb-2">Шинэ нууц үг</label>
                            <input
                                type="password"
                                className="w-full p-2 border rounded"
                                placeholder="Шинэ нууц үг"
                            />
                        </div>
                        <div>
                            <label className="block text-sm mb-2">Нууц үг баталгаажуулах</label>
                            <input
                                type="password"
                                className="w-full p-2 border rounded"
                                placeholder="Нууц үг баталгаажуулах"
                            />
                        </div>
                    </form>
                    <button className="bg-red-500 text-white px-6 py-2 rounded mt-6">
                        НУУЦ ҮГ СОЛИХ
                    </button>
                </section>
            </main>
        </div>
    );
}

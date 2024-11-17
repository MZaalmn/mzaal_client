// // src/app/UserList.js
// import React, { useEffect, useState } from "react";
// import { fetcher } from "../utils/fetcher";

// //Comment
// const HomePage = () => {
//     const [users, setUsers] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const fetchUsers = async () => {
//             try {
//                 const data = await fetcher("users");
//                 setUsers(data);
//             } catch (err) {
//                 setError(err);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchUsers();
//     }, []);

//     if (loading) return <p>Loading...</p>;
//     if (error) return <p>Error fetching users: {error.message}</p>;

//     return (
//         <div>
//             <h1>Бүртгүүлсэн хэрэглэгчид</h1>
//             <ul className="bg-primary hover:bg-primary-light transition">
//                 {users.map((user) => (
//                     <li key={user._id}>
//                         {user.username} - {user.email}
//                     </li>
//                 ))}
//             </ul>
//             <h2>asnvoabo</h2>
//         </div>
//     );
// };

// export default HomePage;
import React, { useEffect, useState } from "react";

const HomePage = () => {
    const [role, setRole] = useState("");

    useEffect(() => {
        const userRole = localStorage.getItem("userRole");
        setRole(userRole || "guest");
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("userRole");
        window.location.href = "/login";
    };

    return (
        <div className="w-[50%] mx-auto mt-10 text-center">
            <h1 className="text-3xl font-bold">Welcome to Home Page</h1>
            <p className="text-xl mt-5">
                Hi {role.charAt(0).toUpperCase() + role.slice(1)}!
            </p>
            {role !== "guest" && (
                <button
                    onClick={handleLogout}
                    className="mt-5 bg-red-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-red-600"
                >
                    Logout
                </button>
            )}
        </div>
    );
};

export default HomePage;

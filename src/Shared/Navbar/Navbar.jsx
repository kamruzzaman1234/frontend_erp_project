import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="w-full bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">

                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <Link
                            to="/"
                            className="text-[18px] font-bold  text-green-500 "
                        >
                            ERP
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex space-x-6">
                        {[
                            { name: "Dashboard", path: "/dashboard" },
                            { name: "Projects", path: "/projects" },
                            { name: "Tasks & Team", path: "/tasks" },
                            { name: "Payments & Approvals", path: "/payments" },
                        ].map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                className={({ isActive }) =>
                                    `uppercase font-medium text-[13px] tracking-wide px-2 py-1 transition-all duration-300
                  ${isActive
                                        ? "text-yellow-500"
                                        : "text-gray-700 hover:text-yellow-400"
                                    } hover:scale-105`
                                }
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>

                    {/* Mobile Menu */}
                    <div className="lg:hidden dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-gray-700"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="dropdown-content menu p-2 shadow bg-white rounded-box w-52 mt-2"
                        >
                            {[
                                { name: "Dashboard", path: "/dashboard" },
                                { name: "Projects", path: "/projects" },
                                { name: "Tasks & Team", path: "/tasks" },
                                { name: "Payments & Approvals", path: "/payments" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link className="uppercase hover:text-yellow-400" to={item.path}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Call-to-action Button */}
                    <div className="hidden lg:flex">
                        <button className="border-[1.5px] text-[14px] border-yellow-400 text-yellow-300 px-4 py-2 cursor-pointer hover:bg-yellow-400 rounded-lg hover:text-white font-medium transition-all duration-300">
                            Contact Us
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;
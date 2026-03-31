import { useState } from "react";
import data from "../../data/data.json";
import {
    FaProjectDiagram,
    FaTasks,
    FaCheckCircle,
    FaClock,
    FaBars,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Dashboard = () => {
    const company = data.company;
    const projects = company.projects;

    // Calculations
    const totalProjects = projects.length;
    const totalBudget = projects.reduce((acc, p) => acc + p.budget.total, 0);
    const totalSpent = projects.reduce((acc, p) => acc + p.budget.spent, 0);
    const budgetPercent = Math.round((totalSpent / totalBudget) * 100);

    const allTasks = projects.flatMap((p) => p.tasks);
    const completedTasks = allTasks.filter((t) => t.progress === 100).length;
    const pendingTasks = allTasks.filter((t) => t.progress < 100).length;

    const allPayments = projects.flatMap((p) => p.payments);
    const approved = allPayments.filter(
        (p) => p.approvalFlow?.status === "Approved"
    ).length;
    const pendingApproval = allPayments.length - approved;

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen bg-gray-100">

            {/* Mobile Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 md:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div
                className={`fixed md:fixed z-50 top-0 left-0 h-full bg-white shadow-lg transition-all duration-300
        ${sidebarOpen ? "w-64 translate-x-0" : "w-64 -translate-x-full md:translate-x-0 md:w-20"}`}
            >
                <div className="flex items-center justify-between px-4 py-4 border-b">
                    <h1 className={`font-bold text-lg ${!sidebarOpen && "hidden md:block"}`}>
                        ERP
                    </h1>

                    <button
                        className="text-gray-600 text-xl"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        <FaBars />
                    </button>
                </div>

                <nav className="mt-6 space-y-2">
                    <NavItem to="/project-list" icon={<FaProjectDiagram />} label="Projects" show={sidebarOpen} />
                    <NavItem to="/task-team" icon={<FaTasks />} label="Tasks" show={sidebarOpen} />
                    <NavItem to="/payments" icon={<FaClock />} label="Payments" show={sidebarOpen} />
                </nav>
            </div>

            {/* Main */}
            <div className="max-w-screen-xl mx-auto w-full">
                <div className="flex-1 w-full p-4 sm:p-6 md:p-8 overflow-y-auto">

                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800">
                            {company.name}
                        </h1>
                        <p className="text-xs sm:text-sm text-gray-500">
                            Smart ERP Dashboard Overview
                        </p>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden text-xl"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <FaBars />
                    </button>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
                    <DashboardCard title="Projects" value={totalProjects} icon={<FaProjectDiagram />} color="from-blue-500 to-blue-400" />
                    <DashboardCard title="Completed Tasks" value={completedTasks} icon={<FaCheckCircle />} color="from-green-500 to-green-400" />
                    <DashboardCard title="Pending Tasks" value={pendingTasks} icon={<FaTasks />} color="from-yellow-400 to-yellow-300" />
                    <DashboardCard title="Pending Approvals" value={pendingApproval} icon={<FaClock />} color="from-red-400 to-red-300" />
                </div>

                {/* Budget */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6">
                    <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 shadow">
                        <h3 className="text-base md:text-lg font-semibold mb-4">
                            Budget Utilization
                        </h3>

                        <div className="w-full bg-gray-200 h-3 md:h-4 rounded-full">
                            <div
                                className="bg-gradient-to-r from-green-400 to-green-600 h-full rounded-full"
                                style={{ width: `${budgetPercent}%` }}
                            />
                        </div>

                        <div className="flex justify-between text-xs md:text-sm text-gray-600 mt-2">
                            <span>{budgetPercent}% Used</span>
                            <span>
                                ৳ {(totalSpent / 1000000).toFixed(1)}M /{" "}
                                {(totalBudget / 1000000).toFixed(1)}M
                            </span>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 shadow space-y-3">
                        <StatItem label="Total Budget" value={`৳ ${(totalBudget / 1000000).toFixed(1)}M`} />
                        <StatItem label="Total Spent" value={`৳ ${(totalSpent / 1000000).toFixed(1)}M`} />
                        <StatItem
                            label="Approval Rate"
                            value={`${allPayments.length === 0 ? 0 : Math.round((approved / allPayments.length) * 100)}%`}
                        />
                    </div>
                </div>

                {/* Projects */}
                <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 shadow">
                    <h3 className="text-base md:text-lg font-semibold mb-5">
                        Project Overview
                    </h3>

                    <div className="space-y-4">
                        {projects.map((project) => {
                            const percent = Math.round(
                                (project.budget.spent / project.budget.total) * 100
                            );

                            return (
                                <div key={project.projectId}>
                                    <div className="flex justify-between items-center">
                                        <h4 className="text-sm md:text-base font-medium">
                                            {project.name}
                                        </h4>

                                        <span className="text-[10px] md:text-xs px-2 py-1 rounded-full bg-gray-200">
                                            {project.status}
                                        </span>
                                    </div>

                                    <div className="w-full bg-gray-200 h-2 mt-2 rounded-full">
                                        <div
                                            className="bg-yellow-500 h-2 rounded-full"
                                            style={{ width: `${percent}%` }}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
            </div>
        </div>
    );
};

export default Dashboard;

// Nav Item
const NavItem = ({ to, icon, label, show }) => (
    <Link
        to={to}
        className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-200 rounded-lg transition"
    >
        <span className="text-lg">{icon}</span>
        {show && <span className="ml-3 text-sm">{label}</span>}
    </Link>
);

// Card
const DashboardCard = ({ title, value, icon, color }) => (
    <div className={`rounded-2xl p-4 text-white bg-gradient-to-r ${color}`}>
        <div className="flex justify-between">
            <div>
                <p className="text-xs opacity-80">{title}</p>
                <h2 className="text-xl font-bold">{value}</h2>
            </div>
            <div className="text-xl">{icon}</div>
        </div>
    </div>
);

// Stat
const StatItem = ({ label, value }) => (
    <div className="flex justify-between text-xs md:text-sm">
        <span>{label}</span>
        <span className="font-semibold">{value}</span>
    </div>
);
import data from "../../data/data.json";
import { FaProjectDiagram, FaTasks, FaCheckCircle, FaClock } from "react-icons/fa";

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

    return (
        <div className="py-[80px] bg-gradient-to-br from-[#f8fafc] to-[#eef2f7] min-h-screen">
            <div className="max-w-screen-xl mx-auto px-4 space-y-10">

                {/* Header */}
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">
                        {company.name}
                    </h1>
                    <p className="text-gray-500 text-sm">
                        Smart ERP Dashboard Overview
                    </p>
                </div>

                {/* 🔥 Summary Cards */}
                <div className="grid md:grid-cols-4 gap-6">

                    <DashboardCard
                        title="Projects"
                        value={totalProjects}
                        icon={<FaProjectDiagram />}
                        color="from-blue-500 to-blue-400"
                    />

                    <DashboardCard
                        title="Completed Tasks"
                        value={completedTasks}
                        icon={<FaCheckCircle />}
                        color="from-green-500 to-green-400"
                    />

                    <DashboardCard
                        title="Pending Tasks"
                        value={pendingTasks}
                        icon={<FaTasks />}
                        color="from-yellow-400 to-yellow-300"
                    />

                    <DashboardCard
                        title="Pending Approvals"
                        value={pendingApproval}
                        icon={<FaClock />}
                        color="from-red-400 to-red-300"
                    />

                </div>

                {/* 🔥 Budget + Stats */}
                <div className="grid md:grid-cols-2 gap-6">

                    {/* Budget Card */}
                    <div className="bg-white rounded-3xl p-6 shadow-sm">
                        <h3 className="text-lg font-semibold text-gray-800 mb-4">
                            Budget Utilization
                        </h3>

                        <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
                            <div
                                className="bg-gradient-to-r from-green-400 to-green-600 h-4 rounded-full"
                                style={{ width: `${budgetPercent}%` }}
                            ></div>
                        </div>

                        <div className="flex justify-between text-sm text-gray-600 mt-2">
                            <span>{budgetPercent}% Used</span>
                            <span>
                                ৳ {(totalSpent / 1000000).toFixed(1)}M /{" "}
                                {(totalBudget / 1000000).toFixed(1)}M
                            </span>
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="bg-white rounded-3xl p-6 shadow-sm flex flex-col justify-center space-y-4">
                        <StatItem label="Total Budget" value={`৳ ${(totalBudget / 1000000).toFixed(1)}M`} />
                        <StatItem label="Total Spent" value={`৳ ${(totalSpent / 1000000).toFixed(1)}M`} />
                        <StatItem label="Approval Rate" value={`${allPayments.length === 0 ? 0 : Math.round((approved / allPayments.length) * 100)}%`} />
                    </div>

                </div>

                {/* 🔥 Projects Overview */}
                <div className="bg-white rounded-3xl p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-800 mb-6">
                        Project Overview
                    </h3>

                    <div className="space-y-5">
                        {projects.map((project) => {
                            const percent = Math.round(
                                (project.budget.spent / project.budget.total) * 100
                            );

                            return (
                                <div key={project.projectId} className="space-y-2">

                                    <div className="flex justify-between items-center">
                                        <h4 className="font-medium text-gray-800">
                                            {project.name}
                                        </h4>

                                        <span
                                            className={`text-xs px-2 py-1 rounded-full
                      ${project.status === "Completed"
                                                    ? "bg-green-100 text-green-600"
                                                    : project.status === "In Progress"
                                                        ? "bg-yellow-100 text-yellow-600"
                                                        : "bg-gray-200 text-gray-600"
                                                }`}
                                        >
                                            {project.status}
                                        </span>
                                    </div>

                                    <div className="w-full bg-gray-200 h-[6px] rounded-full">
                                        <div
                                            className="bg-yellow-500 h-[6px] rounded-full"
                                            style={{ width: `${percent}%` }}
                                        ></div>
                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;



// 🔥 Card Component
const DashboardCard = ({ title, value, icon, color }) => {
    return (
        <div className={`rounded-3xl p-5 text-white shadow-md bg-gradient-to-r ${color}`}>
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-sm opacity-80">{title}</p>
                    <h2 className="text-2xl font-bold mt-1">{value}</h2>
                </div>
                <div className="text-2xl opacity-80">{icon}</div>
            </div>
        </div>
    );
};


// 🔥 Stat Item
const StatItem = ({ label, value }) => {
    return (
        <div className="flex justify-between text-sm text-gray-600">
            <span>{label}</span>
            <span className="font-semibold text-gray-800">{value}</span>
        </div>
    );
};
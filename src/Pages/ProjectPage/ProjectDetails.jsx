import { useParams } from "react-router-dom";
import data from "../../data/data.json";


const ProjectDetails = () => {
    const { id } = useParams();
    const projects = data.company.projects;

    const project = projects.find((p) => p.projectId === id);

    if (!project) {
        return <h2 className="text-center mt-10">Project Not Found</h2>;
    }

    const { name, status, manager, budget, timeline, teams, tasks } = project;

    const percentage = Math.round((budget.spent / budget.total) * 100);

    return (
        <div>
            <div className="py-[80px] bg-gray-50 min-h-screen">
            <div className="max-w-screen-xl mx-auto px-4 space-y-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                    <h2 className="text-3xl font-bold text-gray-800">{name}</h2>

                    <span
                        className={`px-4 py-1 rounded-full text-sm font-semibold
            ${status === "Completed"
                                ? "bg-green-100 text-green-600"
                                : status === "In Progress"
                                    ? "bg-yellow-100 text-yellow-600"
                                    : "bg-gray-200 text-gray-600"
                            }`}
                    >
                        {status}
                    </span>
                </div>

                {/* Info Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-5 rounded-xl shadow">
                        <p className="text-gray-500 text-sm">Project Manager</p>
                        <h4 className="text-lg font-semibold text-gray-800">
                            {manager.name}
                        </h4>
                        <p className="text-xs text-gray-500">{manager.designation}</p>
                    </div>

                    <div className="bg-white p-5 rounded-xl shadow">
                        <p className="text-gray-500 text-sm">Start Date</p>
                        <h4 className="text-lg font-semibold text-gray-800">
                            {timeline.startDate}
                        </h4>
                    </div>

                    <div className="bg-white p-5 rounded-xl shadow">
                        <p className="text-gray-500 text-sm">End Date</p>
                        <h4 className="text-lg font-semibold text-gray-800">
                            {timeline.endDate}
                        </h4>
                    </div>
                </div>

                {/* Budget Section */}
                <div className="bg-white p-6 rounded-xl shadow">
                    <h3 className="text-xl font-semibold mb-4">Budget Overview</h3>

                    {/* Progress */}
                    <div className="mb-4">
                        <div className="w-full bg-gray-200 rounded-full h-3">
                            <div
                                className="bg-yellow-400 h-3 rounded-full"
                                style={{ width: `${percentage}%` }}
                            ></div>
                        </div>
                        <div className="flex justify-between text-sm mt-1 text-gray-600">
                            <span>{percentage}% used</span>
                            <span>
                                {(budget.spent / 1000000).toFixed(1)}M /{" "}
                                {(budget.total / 1000000).toFixed(1)}M
                            </span>
                        </div>
                    </div>

                    {/* Categories */}
                    <div className="grid md:grid-cols-3 gap-4 mt-4">
                        {budget.categories.map((cat, index) => (
                            <div
                                key={index}
                                className="bg-gray-100 p-4 rounded-lg text-sm"
                            >
                                <p className="font-semibold text-gray-700">{cat.name}</p>
                                <p>Allocated: {(cat.allocated / 1000000).toFixed(1)}M</p>
                                <p>Spent: {(cat.spent / 1000000).toFixed(1)}M</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Teams */}
                <div className="bg-white p-6 rounded-xl shadow">
                    <h3 className="text-xl font-semibold mb-4">Teams</h3>

                    {teams.length === 0 ? (
                        <p className="text-gray-500">No team assigned</p>
                    ) : (
                        <div className="grid md:grid-cols-2 gap-4">
                            {teams.map((team) => (
                                <div
                                    key={team.teamId}
                                    className="shadow-xl p-4 rounded-lg transition"
                                >
                                    <h4 className="font-semibold text-gray-800 mb-2">
                                        {team.name}
                                    </h4>

                                    {team.members.map((m, i) => (
                                        <p key={i} className="text-sm text-gray-600">
                                            {m.name} — {m.role}
                                        </p>
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Tasks */}
                <div className="bg-white p-6 rounded-xl shadow">
                    <h3 className="text-xl font-semibold mb-4">Tasks</h3>

                    <div className="space-y-4">
                        {tasks.map((task) => (
                            <div
                                key={task.taskId}
                                className=" p-4 rounded-lg hover:shadow transition"
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <h4 className="font-semibold text-gray-800">
                                        {task.title}
                                    </h4>

                                    <span
                                        className={`text-xs px-2 py-1 rounded
                    ${task.priority === "High"
                                                ? "bg-red-100 text-red-600"
                                                : "bg-yellow-100 text-yellow-600"
                                            }`}
                                    >
                                        {task.priority}
                                    </span>
                                </div>

                                {/* Progress */}
                                <div className="w-full bg-gray-200 h-2 rounded-full">
                                    <div
                                        className="bg-green-500 h-2 rounded-full"
                                        style={{ width: `${task.progress}%` }}
                                    ></div>
                                </div>

                                <p className="text-xs mt-1 text-gray-500">
                                    {task.progress}% completed
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
        
        </div>
    );
};

export default ProjectDetails;
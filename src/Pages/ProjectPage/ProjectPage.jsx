import { Link } from "react-router-dom";
import data from "../../data/data.json"
import { FaEye } from "react-icons/fa";

const ProjectPage = () => {
    const projects = data.company.projects;

    return (
        <div className="py-[80px] bg-gray-50 min-h-screen">
            <div className="max-w-screen-xl mx-auto px-4">
                <div className="flex flex-col gap-10">

                    {/* Title */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 uppercase">
                            Project List
                        </h2>
                        <div className="w-20 h-[4px] bg-yellow-400 mt-2 rounded"></div>
                    </div>

                    {/* Table Card */}
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border">

                        <table className="w-full">
                            {/* Table Head */}
                            <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
                                <tr>
                                    <th className="p-4 text-left">Project</th>
                                    <th className="p-4 text-left">Status</th>
                                    <th className="p-4 text-left">Budget</th>
                                    <th className="p-4 text-left">Manager</th>
                                    <th className="p-4 text-center">Action</th>
                                </tr>
                            </thead>

                            {/* Table Body */}
                            <tbody>
                                {projects.map((project) => {
                                    const { projectId, name, status, manager, budget } = project;

                                    const percentage = Math.round(
                                        (budget.spent / budget.total) * 100
                                    );

                                    // dynamic progress color
                                    const progressColor =
                                        percentage < 40
                                            ? "bg-red-500"
                                            : percentage < 80
                                                ? "bg-yellow-500"
                                                : "bg-green-500";

                                    return (
                                        <tr
                                            key={projectId}
                                            className="border-b hover:bg-gray-50 transition duration-300"
                                        >
                                            {/* Project Name */}
                                            <td className="p-4 font-semibold text-gray-800">
                                                {name}
                                            </td>

                                            {/* Status */}
                                            <td className="p-4">
                                                <span
                                                    className={`px-3 py-1 rounded-full text-xs font-semibold
                          ${status === "Completed"
                                                            ? "bg-green-100 text-green-600"
                                                            : status === "In Progress"
                                                                ? "bg-yellow-100 text-yellow-600"
                                                                : "bg-gray-200 text-gray-600"
                                                        }`}
                                                >
                                                    {status}
                                                </span>
                                            </td>

                                            {/* Budget */}
                                            <td className="p-4 w-[250px]">
                                                <div className="w-full">
                                                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                                                        <div
                                                            className={`${progressColor} h-2 rounded-full transition-all duration-500`}
                                                            style={{ width: `${percentage}%` }}
                                                        ></div>
                                                    </div>
                                                    <div className="flex justify-between text-xs mt-1 text-gray-500">
                                                        <span>{percentage}%</span>
                                                        <span>
                                                            {(budget.spent / 1000000).toFixed(1)}M /{" "}
                                                            {(budget.total / 1000000).toFixed(1)}M
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>

                                            {/* Manager */}
                                            <td className="p-4 text-gray-700">
                                                <div className="font-medium">{manager.name}</div>
                                                <div className="text-xs text-gray-500">
                                                    {manager.designation}
                                                </div>
                                            </td>

                                            {/* Action */}
                                            <td className="p-4 text-center">
                                                <Link
                                                    to={`/projects/${projectId}`}
                                                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 transition"
                                                >
                                                    <FaEye /> View
                                                </Link>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectPage;
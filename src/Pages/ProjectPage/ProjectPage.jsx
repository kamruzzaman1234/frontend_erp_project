import { Link } from "react-router-dom";
import data from "../../data/data.json";
import { FaEye } from "react-icons/fa";

const ProjectPage = () => {
    const projects = data.company.projects;

    return (
        <div className="py-[60px] bg-gray-50">
            <div className="max-w-screen-xl mx-auto px-3 md:px-4">

                {/* Title */}
                <div className="mb-6 md:mb-10">
                    <h2 className="text-xl md:text-3xl font-bold text-gray-800 uppercase">
                        Project List
                    </h2>
                    <div className="w-16 md:w-20 h-[4px] bg-yellow-400 mt-2 rounded"></div>
                </div>

                {/* Table Wrapper (IMPORTANT) */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                    <div className="overflow-x-auto">

                        <table className="min-w-[700px] w-full">
                            {/* Table Head */}
                            <thead className="bg-gray-100 text-gray-700 uppercase text-xs md:text-sm">
                                <tr>
                                    <th className="p-3 md:p-4 text-left">Project</th>
                                    <th className="p-3 md:p-4 text-left">Status</th>
                                    <th className="p-3 md:p-4 text-left">Budget</th>
                                    <th className="p-3 md:p-4 text-left">Manager</th>
                                    <th className="p-3 md:p-4 text-center">Action</th>
                                </tr>
                            </thead>

                            {/* Table Body */}
                            <tbody>
                                {projects.map((project) => {
                                    const { projectId, name, status, manager, budget } = project;

                                    const percentage = Math.round(
                                        (budget.spent / budget.total) * 100
                                    );

                                    const progressColor =
                                        percentage < 40
                                            ? "bg-red-500"
                                            : percentage < 80
                                            ? "bg-yellow-500"
                                            : "bg-green-500";

                                    return (
                                        <tr
                                            key={projectId}
                                            className="hover:bg-gray-50 transition duration-300"
                                        >
                                            {/* Project */}
                                            <td className="p-3 md:p-4 font-semibold text-gray-800 text-sm md:text-base">
                                                {name}
                                            </td>

                                            {/* Status */}
                                            <td className="p-3 md:p-4">
                                                <span
                                                    className={`px-2 md:px-3 py-1 rounded-full text-[10px] md:text-xs font-semibold
                                                    ${
                                                        status === "Completed"
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
                                            <td className="p-3 md:p-4 w-[200px] md:w-[250px]">
                                                <div className="w-full">
                                                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                                                        <div
                                                            className={`${progressColor} h-2 rounded-full transition-all duration-500`}
                                                            style={{ width: `${percentage}%` }}
                                                        ></div>
                                                    </div>
                                                    <div className="flex justify-between text-[10px] md:text-xs mt-1 text-gray-500">
                                                        <span>{percentage}%</span>
                                                        <span>
                                                            {(budget.spent / 1000000).toFixed(1)}M /{" "}
                                                            {(budget.total / 1000000).toFixed(1)}M
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>

                                            {/* Manager */}
                                            <td className="p-3 md:p-4 text-gray-700 text-sm">
                                                <div className="font-medium">{manager.name}</div>
                                                <div className="text-[10px] md:text-xs text-gray-500">
                                                    {manager.designation}
                                                </div>
                                            </td>

                                            {/* Action */}
                                            <td className="p-3 md:p-4 text-center">
                                                <Link
                                                    to={`/projects/${projectId}`}
                                                    className="inline-flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1.5 md:py-2 text-xs md:text-sm font-medium bg-yellow-400 text-white rounded-lg hover:bg-yellow-500 transition"
                                                >
                                                    <FaEye /> 
                                                    <span className="hidden sm:inline">View</span>
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
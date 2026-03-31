
import data from "../../data/data.json";


const TaskTeam = () => {
    const projects = data.company.projects;

    const allTasks = projects.flatMap((project) =>
        project.tasks.map((task) => ({
            ...task,
            projectName: project.name,
        }))
    );

    const completed = allTasks.filter((t) => t.progress === 100);
    const inProgress = allTasks.filter(
        (t) => t.progress > 0 && t.progress < 100
    );
    const pending = allTasks.filter((t) => t.progress === 0);

    return (
        <div>
            <div className="py-10 md:py-16 bg-[#f8fafc] min-h-screen">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-5 lg:px-6 space-y-8">

                    {/* Title */}
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 uppercase tracking-wide">
                            Tasks & Team
                        </h2>
                        <p className="text-xs sm:text-sm text-gray-500 mt-1">
                            Manage and monitor task progress across all projects
                        </p>
                    </div>

                    {/* Columns */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">

                        <TaskColumn title="Pending" tasks={pending} color="gray" />
                        <TaskColumn title="In Progress" tasks={inProgress} color="yellow" />
                        <TaskColumn title="Completed" tasks={completed} color="green" />

                    </div>
                </div>
            </div>
            
            
        </div>
    );
};

export default TaskTeam;

// 🔥 Column Component
const TaskColumn = ({ title, tasks, color }) => {
    const colorMap = {
        gray: "bg-gray-200 text-gray-700",
        yellow: "bg-yellow-100 text-yellow-600",
        green: "bg-green-100 text-green-600",
    };

    return (
        <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-5 shadow-sm hover:shadow-md transition">

            {/* Header */}
            <div className="flex justify-between items-center mb-4 md:mb-6">
                <h3 className="text-base md:text-lg font-semibold text-gray-800">
                    {title}
                </h3>

                <span
                    className={`text-[10px] md:text-xs px-2 md:px-3 py-1 rounded-full ${colorMap[color]}`}
                >
                    {tasks.length}
                </span>
            </div>

            {/* Tasks */}
            <div className="space-y-3 md:space-y-4 max-h-[400px] overflow-y-auto pr-1">
                {tasks.length === 0 ? (
                    <p className="text-gray-400 text-xs md:text-sm">No tasks</p>
                ) : (
                    tasks.map((task) => (
                        <div
                            key={task.taskId}
                            className="bg-[#f9fafb] rounded-xl md:rounded-2xl p-3 md:p-4 hover:shadow-lg transition-all duration-300"
                        >
                            {/* Title */}
                            <h4 className="font-semibold text-sm md:text-base text-gray-800">
                                {task.title}
                            </h4>

                            {/* Project */}
                            <p className="text-[10px] md:text-xs text-gray-400 mt-1">
                                {task.projectName}
                            </p>

                            {/* Team + Priority */}
                            <div className="flex justify-between items-center mt-2 md:mt-3">
                                <span className="text-xs md:text-sm text-gray-600 truncate">
                                    👤 {task.assignedTeam}
                                </span>

                                <span
                                    className={`text-[10px] md:text-xs px-2 py-1 rounded-full
                  ${task.priority === "High"
                                            ? "bg-red-100 text-red-500"
                                            : "bg-yellow-100 text-yellow-600"
                                        }`}
                                >
                                    {task.priority}
                                </span>
                            </div>

                            {/* Progress */}
                            <div className="mt-3 md:mt-4">
                                <div className="w-full bg-gray-200 h-[5px] md:h-[6px] rounded-full overflow-hidden">
                                    <div
                                        className={`h-full rounded-full transition-all duration-500
                    ${task.progress === 100
                                                ? "bg-green-500"
                                                : task.progress > 50
                                                    ? "bg-yellow-400"
                                                    : "bg-blue-500"
                                            }`}
                                        style={{ width: `${task.progress}%` }}
                                    ></div>
                                </div>

                                <div className="flex justify-between text-[10px] md:text-xs text-gray-400 mt-1">
                                    <span>{task.progress}%</span>
                                    <span>Progress</span>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};
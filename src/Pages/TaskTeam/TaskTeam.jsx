import Contact from "../../Components/Contact/Contact";
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
    const inProgress = allTasks.filter((t) => t.progress > 0 && t.progress < 100);
    const pending = allTasks.filter((t) => t.progress === 0);

    return (
        <div>
            <div className="py-[80px] bg-[#f8fafc] min-h-screen">
            <div className="max-w-screen-xl mx-auto px-4 space-y-10">

                {/* Title */}
                <div>
                    <h2 className="text-3xl font-bold text-gray-800 uppercase tracking-wide">
                        Tasks & Team
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                        Manage and monitor task progress across all projects
                    </p>
                </div>

                {/* Columns */}
                <div className="grid md:grid-cols-3 gap-8">

                    <TaskColumn title="Pending" tasks={pending} color="gray" />
                    <TaskColumn title="In Progress" tasks={inProgress} color="yellow" />
                    <TaskColumn title="Completed" tasks={completed} color="green" />

                </div>
            </div>
        </div>
        <Contact></Contact>
    </div>
    );
};

export default TaskTeam;



// 🔥 Clean Column
const TaskColumn = ({ title, tasks, color }) => {

    const colorMap = {
        gray: "bg-gray-200 text-gray-700",
        yellow: "bg-yellow-100 text-yellow-600",
        green: "bg-green-100 text-green-600",
    };

    return (
        <div className="bg-white rounded-3xl p-5 shadow-sm">

            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-gray-800">
                    {title}
                </h3>

                <span className={`text-xs px-3 py-1 rounded-full ${colorMap[color]}`}>
                    {tasks.length}
                </span>
            </div>

            {/* Tasks */}
            <div className="space-y-4">
                {tasks.length === 0 ? (
                    <p className="text-gray-400 text-sm">No tasks</p>
                ) : (
                    tasks.map((task) => (
                        <div
                            key={task.taskId}
                            className="bg-[#f9fafb] rounded-2xl p-4 hover:shadow-lg transition-all duration-300"
                        >
                            {/* Title */}
                            <h4 className="font-semibold text-gray-800">
                                {task.title}
                            </h4>

                            {/* Project */}
                            <p className="text-xs text-gray-400 mt-1">
                                {task.projectName}
                            </p>

                            {/* Team + Priority */}
                            <div className="flex justify-between items-center mt-3">
                                <span className="text-sm text-gray-600">
                                    👤 {task.assignedTeam}
                                </span>

                                <span
                                    className={`text-xs px-2 py-1 rounded-full
                  ${task.priority === "High"
                                            ? "bg-red-100 text-red-500"
                                            : "bg-yellow-100 text-yellow-600"
                                        }`}
                                >
                                    {task.priority}
                                </span>
                            </div>

                            {/* Progress */}
                            <div className="mt-4">
                                <div className="w-full bg-gray-200 h-[6px] rounded-full overflow-hidden">
                                    <div
                                        className={`h-[6px] rounded-full transition-all duration-500
                    ${task.progress === 100
                                                ? "bg-green-500"
                                                : task.progress > 50
                                                    ? "bg-yellow-400"
                                                    : "bg-blue-500"
                                            }`}
                                        style={{ width: `${task.progress}%` }}
                                    ></div>
                                </div>

                                <div className="flex justify-between text-xs text-gray-400 mt-1">
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
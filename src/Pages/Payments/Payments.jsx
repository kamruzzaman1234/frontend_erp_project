import Contact from "../../Components/Contact/Contact";
import data from "../../data/data.json";

const Payments = () => {
    const projects = data.company.projects;

    // 🔥 sob project theke payments collect
    const allPayments = projects.flatMap((project) =>
        project.payments.map((pay) => ({
            ...pay,
            projectName: project.name,
        }))
    );

    return (
        <div>
            <div className="py-[80px] bg-[#f8fafc]">
                <div className="max-w-screen-xl mx-auto px-4 space-y-10">

                    {/* Title */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 uppercase">
                            Payments & Approvals
                        </h2>
                        <p className="text-sm text-gray-500 mt-1">
                            Track payment requests and approval status
                        </p>
                    </div>

                    {/* Table */}
                    <div className="bg-white rounded-3xl shadow-sm overflow-hidden">

                        <table className="w-full text-sm">
                            <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
                                <tr>
                                    <th className="text-left px-6 py-4">Project</th>
                                    <th className="text-left px-6 py-4">Amount</th>
                                    <th className="text-left px-6 py-4">Requested By</th>
                                    <th className="text-left px-6 py-4">Approved By</th>
                                    <th className="text-left px-6 py-4">Status</th>
                                </tr>
                            </thead>

                            <tbody>
                                {allPayments.length === 0 ? (
                                    <tr>
                                        <td colSpan="5" className="text-center py-10 text-gray-400">
                                            No payments found
                                        </td>
                                    </tr>
                                ) : (
                                    allPayments.map((pay) => (
                                        <tr
                                            key={pay.paymentId}
                                            className="hover:bg-gray-50 transition"
                                        >
                                            {/* Project */}
                                            <td className="px-6 py-4 font-medium text-gray-800">
                                                {pay.projectName}
                                            </td>

                                            {/* Amount */}
                                            <td className="px-6 py-4 text-gray-700 font-semibold">
                                                ৳ {(pay.amount / 1000000).toFixed(1)}M
                                            </td>

                                            {/* Requested By */}
                                            <td className="px-6 py-4 text-gray-600">
                                                {pay.requestedBy}
                                            </td>

                                            {/* Approved By */}
                                            <td className="px-6 py-4 text-gray-600">
                                                {pay.approvalFlow?.approvedBy || "—"}
                                            </td>

                                            {/* Status */}
                                            <td className="px-6 py-4">
                                                <span
                                                    className={`text-xs px-3 py-1 rounded-full font-medium
                        ${pay.approvalFlow?.status === "Approved"
                                                            ? "bg-green-100 text-green-600"
                                                            : "bg-yellow-100 text-yellow-600"
                                                        }`}
                                                >
                                                    {pay.approvalFlow?.status || "Pending"}
                                                </span>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
            <Contact></Contact>
        </div>
    );
};

export default Payments;
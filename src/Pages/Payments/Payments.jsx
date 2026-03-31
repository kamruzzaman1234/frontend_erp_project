
import data from "../../data/data.json";


const Payments = () => {
    const projects = data.company.projects;

    const allPayments = projects.flatMap((project) =>
        project.payments.map((pay) => ({
            ...pay,
            projectName: project.name,
        }))
    );

    return (
        <div>
            <div className="py-10 md:py-16 bg-[#f8fafc]">
                <div className="max-w-screen-xl mx-auto px-3 sm:px-5 lg:px-6 space-y-8">

                    {/* Title */}
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 uppercase">
                            Payments & Approvals
                        </h2>
                        <p className="text-xs sm:text-sm text-gray-500 mt-1">
                            Track payment requests and approval status
                        </p>
                    </div>

                    {/* ================= DESKTOP TABLE ================= */}
                    <div className="hidden md:block bg-white rounded-3xl shadow-sm overflow-x-auto">
                        <table className="w-full text-sm min-w-[700px]">
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
                                        <tr key={pay.paymentId} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 font-medium text-gray-800">
                                                {pay.projectName}
                                            </td>

                                            <td className="px-6 py-4 font-semibold">
                                                ৳ {(pay.amount / 1000000).toFixed(1)}M
                                            </td>

                                            <td className="px-6 py-4">{pay.requestedBy}</td>

                                            <td className="px-6 py-4">
                                                {pay.approvalFlow?.approvedBy || "—"}
                                            </td>

                                            <td className="px-6 py-4">
                                                <span
                                                    className={`text-xs px-3 py-1 rounded-full
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

                    {/* ================= MOBILE CARD ================= */}
                    <div className="md:hidden space-y-4">
                        {allPayments.length === 0 ? (
                            <p className="text-center text-gray-400">No payments found</p>
                        ) : (
                            allPayments.map((pay) => (
                                <div
                                    key={pay.paymentId}
                                    className="bg-white rounded-2xl p-4 shadow-sm space-y-2"
                                >
                                    <h4 className="font-semibold text-gray-800">
                                        {pay.projectName}
                                    </h4>

                                    <p className="text-sm text-gray-500">
                                        💰 ৳ {(pay.amount / 1000000).toFixed(1)}M
                                    </p>

                                    <p className="text-xs text-gray-500">
                                        Requested: {pay.requestedBy}
                                    </p>

                                    <p className="text-xs text-gray-500">
                                        Approved: {pay.approvalFlow?.approvedBy || "—"}
                                    </p>

                                    <span
                                        className={`inline-block text-xs px-3 py-1 rounded-full
                    ${pay.approvalFlow?.status === "Approved"
                                                ? "bg-green-100 text-green-600"
                                                : "bg-yellow-100 text-yellow-600"
                                            }`}
                                    >
                                        {pay.approvalFlow?.status || "Pending"}
                                    </span>
                                </div>
                            ))
                        )}
                    </div>

                </div>
            </div>
            
            
        </div>
    );
};

export default Payments;
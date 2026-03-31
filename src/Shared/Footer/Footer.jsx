const Footer = () => {
    return (
        <footer className="bg-gray-100">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

                {/* Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/* Logo & Info */}
                    <div>
                        <h4 className="text-xl font-bold text-green-500">ERP</h4>
                        <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                            Providing reliable tech solutions since 1992.
                            We help businesses manage projects, teams, and operations efficiently.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h6 className="font-semibold text-gray-800 mb-3">Services</h6>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li className="hover:text-green-500 cursor-pointer">Branding</li>
                            <li className="hover:text-green-500 cursor-pointer">Design</li>
                            <li className="hover:text-green-500 cursor-pointer">Marketing</li>
                            <li className="hover:text-green-500 cursor-pointer">Advertisement</li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h6 className="font-semibold text-gray-800 mb-3">Company</h6>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li className="hover:text-green-500 cursor-pointer">About us</li>
                            <li className="hover:text-green-500 cursor-pointer">Contact</li>
                            <li className="hover:text-green-500 cursor-pointer">Jobs</li>
                            <li className="hover:text-green-500 cursor-pointer">Press kit</li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h6 className="font-semibold text-gray-800 mb-3">Legal</h6>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li className="hover:text-green-500 cursor-pointer">Terms of use</li>
                            <li className="hover:text-green-500 cursor-pointer">Privacy policy</li>
                            <li className="hover:text-green-500 cursor-pointer">Cookie policy</li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t mt-10 pt-5 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400 gap-3">
                    <p>© {new Date().getFullYear()} ERP System. All rights reserved.</p>

                    <div className="flex gap-4">
                        <span className="hover:text-green-500 cursor-pointer">Facebook</span>
                        <span className="hover:text-green-500 cursor-pointer">Twitter</span>
                        <span className="hover:text-green-500 cursor-pointer">LinkedIn</span>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
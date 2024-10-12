function Footer() {
    return (
        <footer className="bg-black text-gray-400 py-12">
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
                {/* About Us Section */}
                <div>
                    <h2 className="text-white text-lg font-semibold mb-6">
                        About Us
                    </h2>
                    <p className="leading-relaxed mb-6">
                        Music School is a premier institution dedicated to
                        teaching the art and science of music. We nurture talent
                        from the ground up, fostering a vibrant community of
                        musicians.
                    </p>
                </div>

                {/* Quick Links Section */}
                <div>
                    <h2 className="text-white text-lg font-semibold mb-6">
                        Quick Links
                    </h2>
                    <ul>
                        <li className="mb-2">
                            <a
                                href="#"
                                className="hover:text-white transition-colors duration-300 hover:underline"
                            >
                                Home
                            </a>
                        </li>
                        <li className="mb-2">
                            <a
                                href="#"
                                className="hover:text-white transition-colors duration-300 hover:underline"
                            >
                                About
                            </a>
                        </li>
                        <li className="mb-2">
                            <a
                                href="#"
                                className="hover:text-white transition-colors duration-300 hover:underline"
                            >
                                Courses
                            </a>
                        </li>
                        <li className="mb-2">
                            <a
                                href="#"
                                className="hover:text-white transition-colors duration-300 hover:underline"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Follow Us Section */}
                <div>
                    <h2 className="text-white text-lg font-semibold mb-6">
                        Follow Us
                    </h2>
                    <div className="flex space-x-4">
                        <a
                            href="#"
                            className="hover:text-white transition-colors duration-300 hover:underline hover:bg-gray-700 rounded-full p-2"
                        >
                            Facebook
                        </a>
                        <a
                            href="#"
                            className="hover:text-white transition-colors duration-300 hover:underline hover:bg-gray-700 rounded-full p-2"
                        >
                            Twitter
                        </a>
                        <a
                            href="#"
                            className="hover:text-white transition-colors duration-300 hover:underline hover:bg-gray-700 rounded-full p-2"
                        >
                            Instagram
                        </a>
                    </div>
                </div>

                {/* Contact Us Section */}
                <div>
                    <h2 className="text-white text-lg font-semibold mb-6">
                        Contact Us
                    </h2>
                    <p className="leading-relaxed">New Delhi, India</p>
                    <p>Delhi 10001</p>
                    <p>
                        Email:
                        <a
                            href="mailto:info@musicschool.com"
                            className="hover:text-white hover:underline transition-colors duration-300"
                        >
                            info@musicschool.com
                        </a>
                    </p>
                    <p>
                        Phone:
                        <a
                            href="tel:(123) 456-7890"
                            className="hover:text-white hover:underline transition-colors duration-300"
                        >
                            (123) 456-7890
                        </a>
                    </p>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <p className="text-center text-xs pt-8 border-t border-gray-700 mt-12">
                © 2024 Music School. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;

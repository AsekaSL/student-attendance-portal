function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-0">
        <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-xl font-bold mb-4 gradient-text">EduPortal</h3>
                    <p className="text-gray-400">Empowering educations with innovative technology solutions.</p>
                </div>
                <div>
                    <h4 className="font-semibold mb-4 text-gray-300">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Home</a></li>
                        <li><a href="#features" className="text-gray-400 hover:text-white transition-colors duration-200">Features</a></li>
                        <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-200">Services</a></li>
                        <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">About Us</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-4 text-gray-300">Resources</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Documentation</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">API Reference</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Tutorials</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">Blog</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold mb-4 text-gray-300">Connect With Us</h4>
                    <div className="flex gap-4 mb-4">
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-colors duration-200">
                            <i data-feather="twitter" className="w-5 h-5"></i>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
                            <i data-feather="facebook" className="w-5 h-5"></i>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors duration-200">
                            <i data-feather="instagram" className="w-5 h-5"></i>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-500 transition-colors duration-200">
                            <i data-feather="linkedin" className="w-5 h-5"></i>
                        </a>
                    </div>
                    <p className="text-gray-400">Subscribe to our newsletter</p>
                    <div className="flex mt-2">
                        <input type="email" placeholder="Your email" className="px-3 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"/>
                        <button className="bg-indigo-600 px-4 py-2 rounded-r-lg hover:bg-indigo-700 transition-colors duration-200">
                            <i data-feather="send" className="w-5 h-5"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-500 text-sm">© 2023 EduPortal Prodigy. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#" className="text-gray-500 hover:text-white transition-colors duration-200 text-sm">Privacy Policy</a>
                    <a href="#" className="text-gray-500 hover:text-white transition-colors duration-200 text-sm">Terms of Service</a>
                    <a href="#" className="text-gray-500 hover:text-white transition-colors duration-200 text-sm">Cookie Policy</a>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer;

function Footer() {
  return (
    <footer class="bg-gray-900 text-white py-8 mt-0">
        <div class="max-w-6xl mx-auto px-6">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 class="text-xl font-bold mb-4 gradient-text">EduPortal</h3>
                    <p class="text-gray-400">Empowering educations with innovative technology solutions.</p>
                </div>
                <div>
                    <h4 class="font-semibold mb-4 text-gray-300">Quick Links</h4>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">Home</a></li>
                        <li><a href="#features" class="text-gray-400 hover:text-white transition-colors duration-200">Features</a></li>
                        <li><a href="#services" class="text-gray-400 hover:text-white transition-colors duration-200">Services</a></li>
                        <li><a href="#about" class="text-gray-400 hover:text-white transition-colors duration-200">About Us</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-semibold mb-4 text-gray-300">Resources</h4>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">Documentation</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">API Reference</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">Tutorials</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white transition-colors duration-200">Blog</a></li>
                    </ul>
                </div>
                <div>
                    <h4 class="font-semibold mb-4 text-gray-300">Connect With Us</h4>
                    <div class="flex gap-4 mb-4">
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-indigo-600 transition-colors duration-200">
                            <i data-feather="twitter" class="w-5 h-5"></i>
                        </a>
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
                            <i data-feather="facebook" class="w-5 h-5"></i>
                        </a>
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors duration-200">
                            <i data-feather="instagram" class="w-5 h-5"></i>
                        </a>
                        <a href="#" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-500 transition-colors duration-200">
                            <i data-feather="linkedin" class="w-5 h-5"></i>
                        </a>
                    </div>
                    <p class="text-gray-400">Subscribe to our newsletter</p>
                    <div class="flex mt-2">
                        <input type="email" placeholder="Your email" class="px-3 py-2 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 w-full"/>
                        <button class="bg-indigo-600 px-4 py-2 rounded-r-lg hover:bg-indigo-700 transition-colors duration-200">
                            <i data-feather="send" class="w-5 h-5"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div class="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p class="text-gray-500 text-sm">© 2023 EduPortal Prodigy. All rights reserved.</p>
                <div class="flex gap-6 mt-4 md:mt-0">
                    <a href="#" class="text-gray-500 hover:text-white transition-colors duration-200 text-sm">Privacy Policy</a>
                    <a href="#" class="text-gray-500 hover:text-white transition-colors duration-200 text-sm">Terms of Service</a>
                    <a href="#" class="text-gray-500 hover:text-white transition-colors duration-200 text-sm">Cookie Policy</a>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer;

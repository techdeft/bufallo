<template>
    <!-- Footer -->
    <footer class="bg-slate-900 text-slate-300 py-16 border-t border-slate-800 mt-auto">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-4 gap-12">
                <div class="col-span-1 md:col-span-2">
                    <router-link to="/" class="flex items-center gap-2 mb-6">
                        <!-- <i class="ph ph-buildings text-3xl text-white"></i> -->
                        <span class="font-heading font-bold text-2xl text-white">BNEDC</span>
                    </router-link>
                    <p class="mb-6 max-w-md text-slate-400">
                        Buffalo Narrows Economic Development Corporation. Fostering economic self-sufficiency and empowering our northern community.
                    </p>
                    <div class="flex space-x-4">
                        <a href="#" class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                            <i class="ph-fill ph-facebook-logo text-xl"></i>
                        </a>
                        <a href="#" class="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                            <i class="ph-fill ph-twitter-logo text-xl"></i>
                        </a>
                    </div>
                </div>

                <div>
                    <h4 class="text-white font-heading font-bold text-lg mb-6">Quick Links</h4>
                    <ul class="space-y-3">
                        <li><router-link to="/about" class="hover:text-white transition-colors">About Us</router-link></li>
                        <li><router-link to="/council" class="hover:text-white transition-colors">Council Members</router-link></li>
                        <li><router-link to="/directory" class="hover:text-white transition-colors">Business Directory</router-link></li>
                        <li><router-link to="/events" class="hover:text-white transition-colors">Community Events</router-link></li>
                    </ul>
                </div>

                <div>
                    <h4 class="text-white font-heading font-bold text-lg mb-6">Contact</h4>
                    <ul class="space-y-4">
                        <li class="flex items-start gap-3">
                            <i class="ph ph-map-pin text-xl text-primary-light mt-0.5"></i>
                            <span>1491 pederson Avenue,<br>Buffalo Narrows, SK S0M 0J0</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <i class="ph ph-phone text-xl text-primary-light"></i>
                            <span>(306) 235-4593</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <i class="ph ph-envelope text-xl text-primary-light"></i>
                            <span><router-link to="/contact" class="hover:text-white">Contact Form</router-link></span>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div class="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                <p>&copy; 2026 Buffalo Narrows Economic Development Corporation. All rights reserved.</p>
                <p class="mt-2 md:mt-0 italic">"Cherishing Our Heritage, Respecting Our Land, Building Our Future"</p>
            </div>
        </div>
    </footer>
</template>

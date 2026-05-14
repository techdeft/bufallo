<template>
    <!-- Footer -->
    <footer class="bg-slate-900 text-slate-300 py-16 border-t border-slate-800 mt-auto relative overflow-hidden">

        <!-- Maple leaf watermark -->
        <svg class="maple-watermark right-0 top-0 w-96 h-96 -translate-y-16 translate-x-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="white" aria-hidden="true">
            <path d="M256 16l-40 96-104-24 56 80-96 32 80 40-16 96 72-48 8 112 40-80 40 80 8-112 72 48-16-96 80-40-96-32 56-80-104 24z"/>
        </svg>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid md:grid-cols-4 gap-12">
                <div class="col-span-1 md:col-span-2">
                    <router-link to="/" class="flex items-center gap-3 mb-4">
                        <span class="font-heading font-bold text-2xl text-white">BNEDC</span>
                        <!-- Proudly Canadian badge -->
                        <span class="canada-badge inline-flex items-center gap-1.5 bg-canada/10 border border-canada/30 text-canada-light text-xs font-bold px-2.5 py-1 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-3 h-3" fill="currentColor"><path d="M256 16l-40 96-104-24 56 80-96 32 80 40-16 96 72-48 8 112 40-80 40 80 8-112 72 48-16-96 80-40-96-32 56-80-104 24z"/></svg>
                            Proudly Canadian
                        </span>
                    </router-link>
                    <p class="text-slate-400 text-sm mb-2 flex items-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-3.5 h-3.5 text-canada flex-shrink-0" fill="#D42B2B"><path d="M256 16l-40 96-104-24 56 80-96 32 80 40-16 96 72-48 8 112 40-80 40 80 8-112 72 48-16-96 80-40-96-32 56-80-104 24z"/></svg>
                        Buffalo Narrows, Saskatchewan, Canada
                    </p>
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
                        <li><router-link to="/council" class="hover:text-white transition-colors">Council /Board Members</router-link></li>
                        <li><router-link to="/directory" class="hover:text-white transition-colors">Business Directory</router-link></li>
                        <li><router-link to="/events" class="hover:text-white transition-colors">Community Events</router-link></li>
                    </ul>
                </div>

                <div>
                    <h4 class="text-white font-heading font-bold text-lg mb-6">Contact</h4>
                    <ul class="space-y-4">
                        <li class="flex items-start gap-3">
                            <i class="ph ph-map-pin text-xl text-white mt-0.5"></i>
                            <span>1491 Pederson Avenue,<br>Buffalo Narrows, SK S0M 0J0<br><span class="text-canada-light text-xs font-semibold">Saskatchewan, Canada</span></span>
                        </li>
                        <li class="flex items-center gap-3">
                            <i class="ph ph-phone text-xl text-white"></i>
                            <span>(306) 235-4593</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <i class="ph ph-envelope text-xl text-white"></i>
                            <span><router-link to="/contact" class="hover:text-white">Contact Form</router-link></span>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Canadian flag stripe divider -->
            <div class="mt-12 mb-6 h-px bg-gradient-to-r from-canada via-slate-700 to-canada opacity-40"></div>

            <div class="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                <p>&copy; 2026 Buffalo Narrows Economic Development Corporation. All rights reserved.</p>
                <p class="mt-2 md:mt-0 italic">"Cherishing Our Heritage, Respecting Our Land, Building Our Future"</p>
            </div>
        </div>
    </footer>
</template>

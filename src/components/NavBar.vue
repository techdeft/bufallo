<template>
    <!-- Navigation -->
    <nav class="fixed w-full z-50 glass-nav transition-all duration-300 canada-stripe">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-20 items-center">
                <!-- Logo -->
                <div class="flex-shrink-0 flex items-center gap-3">
                    <router-link to="/" class="flex flex-col justify-center">
                        <div class="flex items-center gap-2">
                            <img src="/images/logo.png" alt="BNEDC Logo" class="h-12 w-auto object-contain">
                            <!-- Canadian maple leaf accent -->
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="h-5 w-5 text-canada flex-shrink-0 opacity-70" fill="#D42B2B" aria-label="Canadian maple leaf">
                                <path d="M256 16l-40 96-104-24 56 80-96 32 80 40-16 96 72-48 8 112 40-80 40 80 8-112 72 48-16-96 80-40-96-32 56-80-104 24z"/>
                            </svg>
                        </div>
                        <span class="text-[10px] sm:text-[11px] tracking-widest font-bold uppercase text-slate-600 mt-1 ml-1 hidden sm:block">Economic Development Corporation</span>
                    </router-link>
                </div>

                <!-- Desktop Menu -->
                <div class="hidden md:flex items-center space-x-8">
                    <router-link to="/" class="text-slate-600 font-medium hover:text-primary transition-colors" exact-active-class="!text-primary">Home</router-link>
                    <router-link to="/about" class="text-slate-600 font-medium hover:text-primary transition-colors" exact-active-class="!text-primary">About Us</router-link>
                    <router-link to="/council" class="text-slate-600 font-medium hover:text-primary transition-colors" exact-active-class="!text-primary">Council/Board Members</router-link>
                    <router-link to="/directory" class="text-slate-600 font-medium hover:text-primary transition-colors" exact-active-class="!text-primary">Directory</router-link>
                    <router-link to="/events" class="text-slate-600 font-medium hover:text-primary transition-colors" exact-active-class="!text-primary">Events</router-link>
                    <router-link to="/contact" class="px-5 py-2.5 rounded-full bg-primary text-white font-medium hover:bg-primary-dark transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5" exact-active-class="!bg-primary-dark">Contact Us</router-link>
                </div>

                <!-- Mobile Menu Button -->
                <div class="md:hidden flex items-center">
                    <button @click="mobileMenuOpen = !mobileMenuOpen" class="text-primary focus:outline-none p-2">
                        <i v-if="!mobileMenuOpen" class="ph ph-list text-3xl"></i>
                        <i v-else class="ph ph-x text-3xl"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile Menu Panel -->
        <div v-show="mobileMenuOpen" class="md:hidden bg-white border-t border-slate-100 shadow-xl absolute w-full">
            <div class="px-4 pt-2 pb-6 space-y-1">
                <router-link to="/" @click="mobileMenuOpen = false" class="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-primary" exact-active-class="!text-primary !bg-slate-50">Home</router-link>
                <router-link to="/about" @click="mobileMenuOpen = false" class="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-primary" exact-active-class="!text-primary !bg-slate-50">About Us</router-link>
                <router-link to="/council" @click="mobileMenuOpen = false" class="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-primary" exact-active-class="!text-primary !bg-slate-50">Council/Board Members</router-link>
                <router-link to="/directory" @click="mobileMenuOpen = false" class="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-primary" exact-active-class="!text-primary !bg-slate-50">Directory</router-link>
                <router-link to="/events" @click="mobileMenuOpen = false" class="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-primary" exact-active-class="!text-primary !bg-slate-50">Events</router-link>
                <router-link to="/contact" @click="mobileMenuOpen = false" class="block mt-4 text-center px-5 py-3 rounded-full bg-primary text-white font-medium shadow-md" exact-active-class="!bg-primary-dark">Contact Us</router-link>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue';

const mobileMenuOpen = ref(false);
</script>

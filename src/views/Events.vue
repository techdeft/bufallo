
<template>
    <div>
        <!-- Page Header -->
    <header class="pt-32 pb-16 bg-white border-b border-slate-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
            <h1 class="font-heading text-4xl md:text-6xl font-bold text-slate-900 mb-4">Upcoming Events</h1>
            <p class="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">Stay connected with what's happening in Buffalo Narrows. Join us in building a stronger community.</p>
        </div>
    </header>

    <!-- Events Feed -->
    <section class="py-20 bg-slate-50">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            
            <!-- Featured Event: Summit 2026 -->
            <div class="bg-gradient-to-br from-primary via-primary-dark to-slate-950 text-white rounded-3xl flex flex-col md:flex-row overflow-hidden shadow-xl border border-primary-light/20 reveal group">
                <div class="md:w-1/3 bg-slate-900 relative min-h-[200px] overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-r from-transparent to-primary-dark/80 mix-blend-multiply z-10 hidden md:block"></div>
                    <img src="/images/Buffalo_Narrows_Sand_Dunes.jpg" alt="Summit 2026" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70">
                    <div class="absolute top-4 left-4 z-20">
                        <span class="px-3 py-1 rounded-full bg-secondary text-slate-950 text-xs font-bold uppercase tracking-wider">Featured Forum</span>
                    </div>
                </div>
                <div class="md:w-2/3 p-8 flex flex-col justify-center relative">
                    <div class="flex items-center gap-2 text-secondary-light font-semibold mb-2 text-sm">
                        <i class="ph-bold ph-calendar-star text-lg"></i>
                        <span>Upcoming &bull; 2026</span>
                    </div>
                    <h3 class="font-heading text-3xl font-extrabold text-white mb-3">Northwest Economic Development Summit 2026</h3>
                    <p class="text-slate-300 mb-6 leading-relaxed text-sm sm:text-base">Connecting Communities: A high-impact forum for regional leaders, industry experts, and entrepreneurs to shape our economic future.</p>
                    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-auto pt-4 border-t border-white/10">
                        <div class="flex items-center gap-2 text-sm text-slate-400">
                            <i class="ph-fill ph-map-pin text-secondary-light"></i>
                            <span>Main Auditorium, Buffalo Narrows</span>
                        </div>
                        <router-link to="/summit" class="px-6 py-2.5 rounded-full bg-secondary hover:bg-secondary-light text-white font-bold transition-all flex items-center gap-2 shadow-lg text-sm self-stretch sm:self-auto text-center justify-center tracking-wide">
                            <span>Explore & Register</span>
                            <i class="ph-bold ph-arrow-right"></i>
                        </router-link>
                    </div>
                </div>
            </div>

           

        </div>
    </section>
    </div>
</template>

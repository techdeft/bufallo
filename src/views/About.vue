
<template>
    <div>
        <!-- Cinematic Hero -->
    <header class="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden bg-slate-900">
        <img src="/images/Churchill_Lake_at_Buffalo_Narrows,_Saskatchewan.jpeg" alt="Churchill Lake, Buffalo Narrows" class="absolute inset-0 w-full h-full object-cover opacity-50">
        <div class="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary/60 to-transparent"></div>
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 w-full">
            <span class="inline-block text-secondary font-bold uppercase tracking-widest text-xs mb-4 reveal">Est. 1989 &bull; Northern Saskatchewan</span>
            <h1 class="font-heading text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4 reveal reveal-delay-1">
                Who We Are
            </h1>
            <p class="text-xl text-slate-200 max-w-2xl font-light reveal reveal-delay-2">
                Cherishing Our Heritage, Respecting Our Land, Building Our Future.
            </p>
        </div>
    </header>

    <!-- Story / Origin Section -->
    <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
                <div class="reveal">
                    <span class="text-secondary font-bold uppercase tracking-widest text-xs block mb-4">Our Foundation</span>
                    <h2 class="font-heading text-4xl font-bold text-slate-900 mb-6 leading-tight">Building Buffalo Narrows Since 1989</h2>
                    <p class="text-slate-600 leading-relaxed mb-5">The Buffalo Narrows Economic Development Corporation was established in 1989 by the Northern Village of Buffalo Narrows to promote community business development and stimulate employment through strategic ventures.</p>
                    <p class="text-slate-600 leading-relaxed mb-5">Located on the picturesque shores of Churchill Lake in northwest Saskatchewan, Buffalo Narrows is a vibrant community of approximately 1,100 residents, primarily of Aboriginal descent. The corporation has supported landmark projects including the Town Center and a SARCAN depot.</p>
                    <p class="text-slate-600 leading-relaxed">Today, BNEDC continues to position Buffalo Narrows as a strategic northern hub for tourism, mining support services, Indigenous partnerships, and regional economic collaboration.</p>
                </div>
                <!-- Stats Column -->
                <div class="grid grid-cols-2 gap-6 reveal reveal-delay-1">
                    <div class="bg-primary rounded-2xl p-8 text-white">
                        <div class="font-heading text-5xl font-extrabold mb-2">35<span class="text-secondary">+</span></div>
                        <p class="text-slate-300 text-sm font-medium">Years of Community Development</p>
                    </div>
                    <div class="bg-slate-900 rounded-2xl p-8 text-white">
                        <div class="font-heading text-5xl font-extrabold mb-2">1,100<span class="text-secondary text-3xl">+</span></div>
                        <p class="text-slate-300 text-sm font-medium">Community Members Served</p>
                    </div>
                    <div class="bg-secondary rounded-2xl p-8 text-slate-950">
                        <div class="font-heading text-5xl font-extrabold mb-2">7</div>
                        <p class="text-slate-900 text-sm font-bold">Active Economic Focus Areas</p>
                    </div>
                    <div class="bg-slate-100 rounded-2xl p-8 text-slate-900">
                        <div class="font-heading text-5xl font-extrabold mb-2 text-primary">NW</div>
                        <p class="text-slate-600 text-sm font-medium">Saskatchewan's Northern Growth Hub</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Mission, Vision, Values -->
    <section class="py-20 bg-slate-50 border-y border-slate-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-2xl mx-auto mb-16 reveal">
                <span class="text-secondary font-bold uppercase tracking-widest text-xs block mb-3">What Drives Us</span>
                <h2 class="font-heading text-4xl font-bold text-slate-900">Our Purpose & Direction</h2>
            </div>
            <div class="grid md:grid-cols-3 gap-8">
                <div class="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-all reveal">
                    <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                        <i class="ph-bold ph-target text-2xl"></i>
                    </div>
                    <h3 class="font-heading text-xl font-bold text-slate-900 mb-3">Our Mission</h3>
                    <p class="text-slate-600 leading-relaxed text-sm">To foster economic growth through strategic development, collaboration, innovation, and responsible community leadership while enhancing the social and economic wellbeing of Buffalo Narrows.</p>
                </div>
                <div class="bg-primary rounded-2xl p-8 text-white shadow-xl reveal reveal-delay-1">
                    <div class="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-secondary-light mb-6">
                        <i class="ph-bold ph-eye text-2xl"></i>
                    </div>
                    <h3 class="font-heading text-xl font-bold text-white mb-3">Our Vision</h3>
                    <p class="text-slate-300 leading-relaxed text-sm">To build a vibrant, self-sustaining, and economically resilient community that creates lasting opportunities for residents, businesses, and future generations across Northern Saskatchewan.</p>
                </div>
                <div class="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-all reveal reveal-delay-2">
                    <div class="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-6">
                        <i class="ph-bold ph-heart text-2xl"></i>
                    </div>
                    <h3 class="font-heading text-xl font-bold text-slate-900 mb-3">Our Values</h3>
                    <ul class="space-y-2 text-sm text-slate-600">
                        <li class="flex items-center gap-2"><i class="ph-bold ph-check-circle text-secondary text-base"></i> Community-first development</li>
                        <li class="flex items-center gap-2"><i class="ph-bold ph-check-circle text-secondary text-base"></i> Transparency & accountability</li>
                        <li class="flex items-center gap-2"><i class="ph-bold ph-check-circle text-secondary text-base"></i> Respect for Indigenous heritage</li>
                        <li class="flex items-center gap-2"><i class="ph-bold ph-check-circle text-secondary text-base"></i> Sustainable growth</li>
                        <li class="flex items-center gap-2"><i class="ph-bold ph-check-circle text-secondary text-base"></i> Empowering local residents</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

  
    <!-- Mayor Message: Full-bleed premium card -->
    <section class="py-20 bg-slate-50 border-t border-slate-100">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12 reveal">
                <span class="text-secondary font-bold uppercase tracking-widest text-xs">Leadership</span>
                <h2 class="font-heading text-4xl font-bold text-slate-900 mt-2">A Word from Our Leaders</h2>
            </div>

            <!-- Mayor Card -->
            <div class="bg-primary rounded-3xl overflow-hidden shadow-2xl mb-10 reveal">
                <div class="grid md:grid-cols-5">
                    <div class="md:col-span-2 relative min-h-[320px] md:min-h-full overflow-hidden">
                        <img src="/images/Shaylee.jpeg" alt="Shaylee Gardiner, Mayor" class="absolute inset-0 w-full h-full object-cover object-top">
                        <div class="absolute inset-0 bg-gradient-to-r md:bg-gradient-to-r from-transparent to-primary/80 hidden md:block"></div>
                        <div class="absolute inset-0 bg-gradient-to-t from-primary to-transparent md:hidden"></div>
                    </div>
                    <div class="md:col-span-3 p-8 md:p-12 text-white flex flex-col justify-center">
                        <div class="flex items-center gap-3 mb-6">
                            <i class="ph-fill ph-quotes text-secondary text-4xl opacity-60"></i>
                        </div>
                        <p class="text-slate-200 leading-relaxed mb-4 text-sm sm:text-base">Welcome to the Buffalo Narrows Economic Development Corporation and to the proud and resilient community of Buffalo Narrows.</p>
                        <p class="text-slate-200 leading-relaxed mb-4 text-sm sm:text-base">As Mayor and Chairperson, I firmly believe that the future of Buffalo Narrows depends on bold leadership, strong partnerships, and a clear commitment to economic growth that benefits our people today and future generations tomorrow.</p>
                        <p class="text-slate-200 leading-relaxed mb-6 text-sm sm:text-base">We are positioning ourselves as a strategic northern hub for tourism, mining support services, transportation, small business growth, Indigenous partnerships, and regional collaboration.</p>
                        <div class="pt-6 border-t border-white/20">
                            <p class="font-heading font-bold text-xl text-white">Shaylee Gardiner</p>
                            <p class="text-secondary-light text-sm font-medium">Mayor &amp; Chairperson — Northern Village of Buffalo Narrows</p>
                            <p class="text-slate-400 italic text-xs mt-2">"Cherishing Our Heritage, Respecting Our Land, Building Our Future"</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- BDO Card -->
            <div class="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-lg reveal reveal-delay-1">
                <div class="grid md:grid-cols-5">
                    <div class="md:col-span-3 p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
                        <div class="flex items-center gap-3 mb-6">
                            <i class="ph-fill ph-chart-line-up text-primary text-4xl opacity-30"></i>
                        </div>
                        <p class="text-slate-600 leading-relaxed mb-4 text-sm sm:text-base">Welcome to the Buffalo Narrows Economic Development Corporation — where opportunity, community, and vision come together to shape a stronger future for Buffalo Narrows and Northwest Saskatchewan.</p>
                        <p class="text-slate-600 leading-relaxed mb-4 text-sm sm:text-base">Buffalo Narrows is a community filled with resilience, potential, innovation, and pride. At BNEDC, we are proud to champion initiatives that create economic opportunities, strengthen local businesses, and attract investment.</p>
                        <p class="text-primary font-semibold mb-4 text-sm sm:text-base">We believe the future of Buffalo Narrows is bright.</p>
                        <p class="text-slate-600 leading-relaxed mb-6 text-sm sm:text-base">Together, we are building a stronger community, a thriving economy, and a future filled with opportunity for every resident and business in our region.</p>
                        <div class="pt-6 border-t border-slate-100">
                            <p class="font-heading font-bold text-xl text-slate-900">Oyewole Farinde</p>
                            <p class="text-primary text-sm font-medium">Economic/Business Development Officer (BDO) — BNEDC</p>
                            <p class="text-slate-400 italic text-xs mt-2">"Building opportunities that inspire progress"</p>
                        </div>
                    </div>
                    <div class="md:col-span-2 relative min-h-[320px] md:min-h-full overflow-hidden order-1 md:order-2">
                        <img src="/images/farinde.jpeg" alt="Oyewole Farinde, BDO" class="absolute inset-0 w-full h-full object-cover object-top">
                        <div class="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-white to-transparent md:hidden"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Banner -->
    <section class="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
            <h2 class="font-heading text-4xl font-bold mb-4">Ready to Grow with Buffalo Narrows?</h2>
            <p class="text-slate-300 mb-8 max-w-xl mx-auto">Explore our business directory, connect with council, or reach out directly — we are here to help you build your future in Northern Saskatchewan.</p>
            <div class="flex flex-col sm:flex-row justify-center gap-4">
                <router-link to="/directory" class="px-8 py-4 rounded-full bg-secondary text-slate-950 font-bold hover:bg-secondary-light transition-all shadow-lg">Explore Directory</router-link>
                <router-link to="/contact" class="px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-all backdrop-blur-sm">Contact Us</router-link>
            </div>
        </div>
    </section>
    </div>
</template>

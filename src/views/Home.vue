
<script setup>
import { onMounted, onUnmounted, ref } from 'vue';

const showScrollTop = ref(false);
const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

onMounted(() => {
    // Scroll-to-top visibility
    const handleScroll = () => { showScrollTop.value = window.scrollY > 400; };
    window.addEventListener('scroll', handleScroll);
    window._homeScrollHandler = handleScroll;

    // Carousel
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.carousel-dot');
    const prevBtn = document.getElementById('prev-slide');
    const nextBtn = document.getElementById('next-slide');

    let slideInterval;
    if (slides.length > 0) {
        let currentSlide = 0;

        const updateCarousel = (newIndex) => {
            slides[currentSlide].classList.remove('opacity-100');
            slides[currentSlide].classList.add('opacity-0', 'pointer-events-none');
            if (dots[currentSlide]) {
                dots[currentSlide].classList.remove('bg-white');
                dots[currentSlide].classList.add('bg-white/40');
            }
            currentSlide = (newIndex + slides.length) % slides.length;
            slides[currentSlide].classList.remove('opacity-0', 'pointer-events-none');
            slides[currentSlide].classList.add('opacity-100');
            if (dots[currentSlide]) {
                dots[currentSlide].classList.remove('bg-white/40');
                dots[currentSlide].classList.add('bg-white');
            }
        };

        const nextSlide = () => updateCarousel(currentSlide + 1);
        const prevSlide = () => updateCarousel(currentSlide - 1);
        const startAutoPlay = () => { stopAutoPlay(); slideInterval = setInterval(nextSlide, 6000); };
        const stopAutoPlay = () => { if (slideInterval) clearInterval(slideInterval); };

        if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); startAutoPlay(); });
        if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); startAutoPlay(); });
        dots.forEach((dot, index) => dot.addEventListener('click', () => { updateCarousel(index); startAutoPlay(); }));

        startAutoPlay();
        window._homeCarouselInterval = slideInterval;
    }

    // Count-up animation for stats
    const countEls = document.querySelectorAll('[data-count-up]');
    if (countEls.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !entry.target.dataset.animated) {
                    entry.target.dataset.animated = 'true';
                    const target = parseInt(entry.target.dataset.countUp, 10);
                    const suffix = entry.target.dataset.suffix || '';
                    const steps = 60;
                    let step = 0;
                    const timer = setInterval(() => {
                        step++;
                        const current = Math.min(Math.round((target / steps) * step), target);
                        entry.target.textContent = current.toLocaleString('en-US') + suffix;
                        if (step >= steps) clearInterval(timer);
                    }, 2000 / steps);
                }
            });
        }, { threshold: 0.5 });
        countEls.forEach(el => observer.observe(el));
        window._countUpObserver = observer;
    }
});

onUnmounted(() => {
    if (window._homeCarouselInterval) clearInterval(window._homeCarouselInterval);
    if (window._homeScrollHandler) window.removeEventListener('scroll', window._homeScrollHandler);
    if (window._countUpObserver) window._countUpObserver.disconnect();
});
</script>

<template>
    <div>
        <!-- Hero Section with Carousel -->
    <header class="relative pt-20 h-[90vh] min-h-[700px] flex items-center justify-center overflow-hidden bg-slate-900">
        <!-- Carousel Images Container -->
        <div id="hero-carousel" class="absolute inset-0 z-0">
            <!-- Slide 1 -->
            <div class="carousel-slide absolute inset-0 transition-opacity duration-1000 ease-in-out opacity-100" data-slide="0">
                <img src="/images/Buffalo_Narrows_Sand_Dunes.jpg" alt="Buffalo Narrows Sand Dunes" class="w-full h-full object-cover opacity-60 scale-105 transform transition-transform duration-[10000ms] ease-out">
                <div class="absolute inset-0 bg-gradient-to-r from-primary-dark/60 to-transparent mix-blend-multiply"></div>
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent"></div>
            </div>
            <!-- Slide 2 -->
            <div class="carousel-slide absolute inset-0 transition-opacity duration-1000 ease-in-out opacity-0 pointer-events-none" data-slide="1">
                <img src="/images/Churchill_Lake_at_Buffalo_Narrows,_Saskatchewan.jpeg" alt="Churchill Lake" class="w-full h-full object-cover opacity-60 scale-105 transform transition-transform duration-[10000ms] ease-out">
                <div class="absolute inset-0 bg-gradient-to-r from-primary-dark/60 to-transparent mix-blend-multiply"></div>
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent"></div>
            </div>
            <!-- Slide 3 -->
            <div class="carousel-slide absolute inset-0 transition-opacity duration-1000 ease-in-out opacity-0 pointer-events-none" data-slide="2">
                <img src="/images/Town_centre_in_Buffalo_Narrows,_Saskatchewan.jpeg" alt="Town Centre" class="w-full h-full object-cover opacity-60 scale-105 transform transition-transform duration-[10000ms] ease-out">
                <div class="absolute inset-0 bg-gradient-to-r from-primary-dark/60 to-transparent mix-blend-multiply"></div>
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent"></div>
            </div>
            <!-- Slide 4 -->
            <div class="carousel-slide absolute inset-0 transition-opacity duration-1000 ease-in-out opacity-0 pointer-events-none" data-slide="3">
                <img src="/images/Highway_155_bridge_at_Buffalo_Narrows (1).JPG" alt="Highway 155 Bridge" class="w-full h-full object-cover opacity-60 scale-105 transform transition-transform duration-[10000ms] ease-out">
                <div class="absolute inset-0 bg-gradient-to-r from-primary-dark/60 to-transparent mix-blend-multiply"></div>
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent"></div>
            </div>

            <!-- Slide 4 -->
            <div class="carousel-slide absolute inset-0 transition-opacity duration-1000 ease-in-out opacity-0 pointer-events-none" data-slide="4">
                <img src="/images/banner.jpeg" alt="Highway 155 Bridge" class="w-full h-full object-cover opacity-60 scale-105 transform transition-transform duration-[10000ms] ease-out">
                <div class="absolute inset-0 bg-gradient-to-r from-primary-dark/60 to-transparent mix-blend-multiply"></div>
                <div class="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent"></div>
            </div>
        </div>

        <!-- Carousel Content Overlay -->
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white w-full pointer-events-none">
            <span class="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-semibold tracking-wide uppercase mb-6 reveal pointer-events-auto">
                Northwest Saskatchewan's Gateway to Growth
            </span>
            <h1 class="font-heading text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight reveal reveal-delay-1 text-balance">
                Buffalo Narrows <br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">Economic Development</span>
            </h1>
            <p class="mt-4 text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto mb-10 font-light reveal reveal-delay-2 text-balance">
                Driving sustainable growth, empowering communities, and building a stronger Northern Saskatchewan.
            </p>
            <div class="flex flex-col sm:flex-row justify-center gap-4 reveal reveal-delay-3 pointer-events-auto">
                <router-link to="/about" class="px-8 py-4 rounded-full bg-white text-primary font-semibold hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl">
                    Discover Our Vision
                </router-link>
                <router-link to="/directory" class="px-8 py-4 rounded-full bg-primary border border-primary-light text-white font-semibold hover:bg-primary-light transition-all shadow-lg hover:shadow-xl">
                    Explore Directory
                </router-link>
            </div>
        </div>

        <!-- Carousel Controls -->
        <button id="prev-slide" class="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm flex items-center justify-center transition-all focus:outline-none">
            <i class="ph-bold ph-caret-left text-xl"></i>
        </button>
        <button id="next-slide" class="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm flex items-center justify-center transition-all focus:outline-none">
            <i class="ph-bold ph-caret-right text-xl"></i>
        </button>

        <!-- Carousel Indicators -->
        <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            <button class="carousel-dot w-3 h-3 rounded-full bg-white transition-all focus:outline-none" data-slide="0"></button>
            <button class="carousel-dot w-3 h-3 rounded-full bg-white/40 hover:bg-white/60 transition-all focus:outline-none" data-slide="1"></button>
            <button class="carousel-dot w-3 h-3 rounded-full bg-white/40 hover:bg-white/60 transition-all focus:outline-none" data-slide="2"></button>
            <button class="carousel-dot w-3 h-3 rounded-full bg-white/40 hover:bg-white/60 transition-all focus:outline-none" data-slide="3"></button>
            <button class="carousel-dot w-3 h-3 rounded-full bg-white/40 hover:bg-white/60 transition-all focus:outline-none" data-slide="4"></button>
        </div>
    </header>

    <!-- Welcome / Mission Section -->
    <section class="py-24 bg-white relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
                <div class="reveal">
                    <h2 class="text-primary font-semibold tracking-wide uppercase text-sm mb-3">About BNEDC</h2>
                    <h3 class="font-heading text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                        Cherishing Our Heritage,<br/>
                        <span class="text-gradient">Building Our Future.</span>
                    </h3>
                    <p class="text-lg text-slate-600 mb-6 leading-relaxed">
                        Established in 1989 by the Northern Village of Buffalo Narrows, BNEDC is committed to driving sustainable economic growth, community empowerment, and long-term prosperity.
                    </p>
                    <p class="text-lg text-slate-600 mb-8 leading-relaxed">
                        Located on the picturesque shores of Churchill Lake, we work to create opportunities that strengthen the local economy, support entrepreneurship, and attract investment to our vibrant community of over 1,100 residents.
                    </p>
                    <router-link to="/about" class="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-light transition-colors group">
                        Read more about us
                        <i class="ph-bold ph-arrow-right transform group-hover:translate-x-1 transition-transform"></i>
                    </router-link>
                </div>
                
                <div class="relative reveal reveal-delay-1">
                    <div class="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl relative">
                        <img src="/images/7ELXoffd-600-450.jpg" alt="Buffalo Narrows Scenery" class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700">
                    </div>
                    <!-- Decorative element -->
                    <div class="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10"></div>
                    <div class="absolute -top-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
                </div>
            </div>
        </div>
    </section>

    <!-- Quick Links / Core Focus -->
    <section class="py-20 bg-slate-50 border-y border-slate-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-16 reveal">
                <h2 class="font-heading text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Focus</h2>
                <p class="text-lg text-slate-600">We champion initiatives that position Buffalo Narrows as a northern hub for business, tourism, and culture.</p>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Card 1 -->
                <router-link to="/directory" class="group block bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-100 reveal">
                    <div class="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                        <i class="ph ph-storefront text-3xl"></i>
                    </div>
                    <h3 class="font-heading text-xl font-bold text-slate-900 mb-3">Local Business</h3>
                    <p class="text-slate-600 leading-relaxed">Supporting entrepreneurship, retail, and commercial infrastructure growth.</p>
                </router-link>
                
                <!-- Card 2 -->
                <router-link to="/directory" class="group block bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-100 reveal reveal-delay-1">
                    <div class="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                        <i class="ph ph-tent text-3xl"></i>
                    </div>
                    <h3 class="font-heading text-xl font-bold text-slate-900 mb-3">Tourism</h3>
                    <p class="text-slate-600 leading-relaxed">Promoting our lakes, beaches, and rich cultural experiences to visitors.</p>
                </router-link>

                <!-- Card 3 -->
                <router-link to="/directory" class="group block bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-100 reveal reveal-delay-2">
                    <div class="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                        <i class="ph ph-hard-hat text-3xl"></i>
                    </div>
                    <h3 class="font-heading text-xl font-bold text-slate-900 mb-3">Mining & Forestry</h3>
                    <p class="text-slate-600 leading-relaxed">Fostering partnerships in transportation, logistics, and resource development.</p>
                </router-link>

                <!-- Card 4 -->
                <router-link to="/council" class="group block bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-slate-100 reveal reveal-delay-3">
                    <div class="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                        <i class="ph ph-users-three text-3xl"></i>
                    </div>
                    <h3 class="font-heading text-xl font-bold text-slate-900 mb-3">Community</h3>
                    <p class="text-slate-600 leading-relaxed">Youth empowerment, infrastructure, and Indigenous partnerships.</p>
                </router-link>
            </div>
        </div>
    </section>

    <!-- Key Statistics -->
    <section class="py-20 bg-primary relative overflow-hidden">
        <div class="absolute inset-0 opacity-10 pointer-events-none">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" class="w-full h-full"><path d="M0 100 C 20 0 50 0 100 100 Z" fill="white"/></svg>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
                <div class="reveal">
                    <div class="text-4xl md:text-6xl font-bold text-white font-heading mb-2" data-count-up="1100" data-suffix="+">1,100+</div>
                    <div class="text-white font-medium uppercase tracking-wider text-sm">Proud Residents</div>
                </div>
                <div class="reveal reveal-delay-1">
                    <div class="text-4xl md:text-6xl font-bold text-white font-heading mb-2" data-count-up="50" data-suffix="+">50+</div>
                    <div class="text-white font-medium uppercase tracking-wider text-sm">Local Businesses</div>
                </div>
                <div class="reveal reveal-delay-2">
                    <div class="text-4xl md:text-6xl font-bold text-white font-heading mb-2" data-count-up="100" data-suffix="%">100%</div>
                    <div class="text-white font-medium uppercase tracking-wider text-sm">Committed to Growth</div>
                </div>
                <div class="reveal reveal-delay-3">
                    <div class="text-4xl md:text-6xl font-bold text-white font-heading mb-2" data-count-up="35" data-suffix="+">35+</div>
                    <div class="text-white font-medium uppercase tracking-wider text-sm">Years of Service</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Why Invest in Buffalo Narrows -->
    <section class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-16 reveal">
                <span class="text-secondary font-bold uppercase tracking-widest text-xs">Opportunities</span>
                <h2 class="font-heading text-4xl font-bold text-slate-900 mt-2 mb-4">Why Invest in Buffalo Narrows?</h2>
                <p class="text-lg text-slate-600">A strategic northern hub offering unparalleled access to natural resources, a growing tourism sector, and a supportive business environment.</p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-10">
                <!-- Point 1 -->
                <div class="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-primary/20 transition-colors reveal">
                    <div class="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary mb-6">
                        <i class="ph-fill ph-map-pin-line text-3xl"></i>
                    </div>
                    <h3 class="font-heading text-xl font-bold text-slate-900 mb-3">Strategic Location</h3>
                    <p class="text-slate-600 leading-relaxed mb-6">Serving as a vital transportation and logistics hub for Northern Saskatchewan's mining and forestry sectors.</p>
                    <router-link to="/about" class="text-primary font-semibold hover:text-primary-light flex items-center gap-2 group">Learn more <i class="ph-bold ph-arrow-right transform group-hover:translate-x-1 transition-transform"></i></router-link>
                </div>
                
                <!-- Point 2 -->
                <div class="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-primary/20 transition-colors reveal reveal-delay-1">
                    <div class="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary mb-6">
                        <i class="ph-fill ph-handshake text-3xl"></i>
                    </div>
                    <h3 class="font-heading text-xl font-bold text-slate-900 mb-3">Supportive Environment</h3>
                    <p class="text-slate-600 leading-relaxed mb-6">The BNEDC offers guidance, resources, and potential partnerships for new ventures and infrastructure projects.</p>
                    <router-link to="/contact" class="text-primary font-semibold hover:text-primary-light flex items-center gap-2 group">Contact BNEDC <i class="ph-bold ph-arrow-right transform group-hover:translate-x-1 transition-transform"></i></router-link>
                </div>
                
                <!-- Point 3 -->
                <div class="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-primary/20 transition-colors reveal reveal-delay-2">
                    <div class="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary mb-6">
                        <i class="ph-fill ph-tree text-3xl"></i>
                    </div>
                    <h3 class="font-heading text-xl font-bold text-slate-900 mb-3">Tourism Potential</h3>
                    <p class="text-slate-600 leading-relaxed mb-6">Home to pristine lakes and the famous sand dunes, presenting massive opportunities for eco-tourism and hospitality.</p>
                    <router-link to="/directory" class="text-primary font-semibold hover:text-primary-light flex items-center gap-2 group">Explore Tourism <i class="ph-bold ph-arrow-right transform group-hover:translate-x-1 transition-transform"></i></router-link>
                </div>
            </div>
        </div>
    </section>

    <!-- Upcoming Events -->
    <section class="py-20 bg-slate-50 border-t border-slate-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 reveal">
                <div class="max-w-2xl">
                    <span class="text-secondary font-bold uppercase tracking-widest text-xs">Community</span>
                    <h2 class="font-heading text-3xl md:text-4xl font-bold text-slate-900 mt-2">Upcoming Events & News</h2>
                </div>
                <router-link to="/events" class="inline-flex items-center gap-2 text-primary font-medium hover:text-primary-light transition-colors mt-4 md:mt-0">
                    View All Events <i class="ph-bold ph-arrow-right"></i>
                </router-link>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Event 1 -->
                <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100 reveal">
                    <div class="h-48 bg-slate-200 relative">
                        <img src="/images/banner.jpeg" alt="Event Image" class="w-full h-full object-cover">
                        <div class="absolute top-4 left-4 bg-white px-3 py-2 rounded-lg shadow-md text-center">
                            <div class="text-xs font-bold text-primary uppercase">Oct</div>
                            <div class="text-xl font-bold text-slate-900 leading-none">08</div>
                        </div>
                    </div>
                    <div class="p-6">
                        <div class="flex items-center gap-2 text-sm text-slate-500 mb-3">
                            <i class="ph-fill ph-clock"></i> 6:00 PM - 8:00 PM
                        </div>
                        <h3 class="font-heading text-xl font-bold text-slate-900 mb-3">Northwest Economic Development
Summit 2026</h3>
                        <p class="text-slate-600 mb-4 line-clamp-2">Connecting Communities: A high-impact forum for regional leaders, industry experts, and entrepreneurs to shape our economic future.</p>
                        <router-link to="/events" class="text-primary font-medium hover:underline">Learn More</router-link>
                    </div>
                </div>

                <!-- Event 2 -->
                <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100 reveal reveal-delay-1">
                    <div class="h-48 bg-slate-200 relative">
                        <img src="/images/7ELXoffd-600-450.jpg" alt="Event Image" class="w-full h-full object-cover">
                        <div class="absolute top-4 left-4 bg-white px-3 py-2 rounded-lg shadow-md text-center">
                            <div class="text-xs font-bold text-primary uppercase">Sep</div>
                            <div class="text-xl font-bold text-slate-900 leading-none">05</div>
                        </div>
                    </div>
                    <div class="p-6">
                        <div class="flex items-center gap-2 text-sm text-slate-500 mb-3">
                            <i class="ph-fill ph-clock"></i> 10:00 AM - 4:00 PM
                        </div>
                        <h3 class="font-heading text-xl font-bold text-slate-900 mb-3">Local Business Expo</h3>
                        <p class="text-slate-600 mb-4 line-clamp-2">Discover the diverse services and products offered by businesses right here in Buffalo Narrows. Networking opportunities available.</p>
                        <router-link to="/events" class="text-primary font-medium hover:underline">Learn More</router-link>
                    </div>
                </div>

                <!-- Event 3 -->
                <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-100 reveal reveal-delay-2 hidden lg:block">
                    <div class="h-48 bg-slate-200 relative">
                        <img src="/images/Buffalo_Narrows_Sand_Dunes.jpg" alt="Event Image" class="w-full h-full object-cover">
                        <div class="absolute top-4 left-4 bg-primary text-white px-3 py-2 rounded-lg shadow-md text-center">
                            <div class="text-xs font-bold uppercase">News</div>
                            <div class="text-xl font-bold leading-none"><i class="ph-fill ph-megaphone mt-1"></i></div>
                        </div>
                    </div>
                    <div class="p-6">
                        <div class="flex items-center gap-2 text-sm text-slate-500 mb-3">
                            <i class="ph-fill ph-calendar-blank"></i> Published July 28, 2024
                        </div>
                        <h3 class="font-heading text-xl font-bold text-slate-900 mb-3">New Tourism Grant Awarded</h3>
                        <p class="text-slate-600 mb-4 line-clamp-2">The BNEDC is proud to announce a new provincial grant to help upgrade facilities near the sand dunes to boost local tourism.</p>
                        <a href="#" class="text-primary font-medium hover:underline">Read Full Story</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="py-20 bg-white border-t border-slate-100">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12 reveal">
                <span class="text-secondary font-bold uppercase tracking-widest text-xs">Leadership</span>
                <h2 class="font-heading text-4xl font-bold text-slate-900 mt-2">Word from the Mayor</h2>
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

          
        </div>
    </section>


    <!-- Business Spotlight -->
    <section class="py-24 bg-white border-t border-slate-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-16 items-center">
                <div class="order-2 lg:order-1 relative reveal">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="space-y-4">
                            <div class="aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                                <img src="/images/Buffalo_Narrows_Sand_Dunes.jpg" alt="Buffalo Narrows Sand Dunes" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                            </div>
                            <div class="aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                                <img src="/images/Churchill_Lake_at_Buffalo_Narrows,_Saskatchewan.jpeg" alt="Churchill Lake" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                            </div>
                        </div>
                        <div class="space-y-4 pt-8">
                            <div class="aspect-[4/3] rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                                <img src="/images/Town_centre_in_Buffalo_Narrows,_Saskatchewan.jpeg" alt="Town Centre" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                            </div>
                            <div class="aspect-square rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                                <img src="/images/Highway_155_bridge_at_Buffalo_Narrows (1).JPG" alt="Highway 155 Bridge" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700">
                            </div>
                        </div>
                    </div>
                    <!-- Decorative element -->
                    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
                </div>
                
                <div class="order-1 lg:order-2 reveal reveal-delay-1">
                    <span class="text-secondary font-bold uppercase tracking-widest text-xs">Local Economy</span>
                    <h2 class="font-heading text-4xl font-bold text-slate-900 mt-2 mb-6">Discover Local Excellence</h2>
                    <p class="text-lg text-slate-600 mb-6 leading-relaxed">
                        Buffalo Narrows is home to a diverse and resilient business community. From essential services and retail to specialized mining and forestry support, our local entrepreneurs are the backbone of our economy.
                    </p>
                    <p class="text-lg text-slate-600 mb-8 leading-relaxed">
                        By supporting local, we keep our community strong. Explore our business directory to find services, partners, and investment opportunities right here at home.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4">
                        <router-link to="/directory" class="px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary-dark transition-all shadow-md text-center">
                            Browse Directory
                        </router-link>
                        <router-link to="/contact" class="px-8 py-4 rounded-full bg-white text-primary border border-slate-200 font-semibold hover:bg-slate-50 transition-all text-center">
                            List Your Business
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Call to Action Banner -->
    <section class="py-20 bg-gradient-to-br from-slate-900 via-primary-dark to-primary relative overflow-hidden">
        <div class="absolute inset-0 opacity-5 pointer-events-none">
            <svg viewBox="0 0 200 200" class="w-full h-full"><circle cx="150" cy="50" r="100" fill="white"/><circle cx="50" cy="150" r="80" fill="white"/></svg>
        </div>
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span class="inline-block py-1 px-4 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-bold tracking-widest uppercase mb-6">Get Involved</span>
            <h2 class="font-heading text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">Ready to Invest, Relocate,<br class="hidden md:block"> or Partner With Us?</h2>
            <p class="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">Whether you're a business owner, investor, or community partner — BNEDC is here to help you grow in Northern Saskatchewan.</p>
            <div class="flex flex-col sm:flex-row justify-center gap-4">
                <router-link to="/contact" class="px-8 py-4 rounded-full bg-white text-primary font-bold hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">Talk to Us Today</router-link>
                <router-link to="/directory" class="px-8 py-4 rounded-full bg-white/10 border border-white/30 text-white font-semibold hover:bg-white/20 backdrop-blur-sm transition-all">Browse Directory</router-link>
            </div>
        </div>
    </section>

    <!-- Scroll to Top Button -->
    <button
        @click="scrollToTop"
        :class="['fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-primary text-white shadow-lg hover:bg-primary-dark hover:shadow-xl transition-all duration-300 transform flex items-center justify-center', showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none']"
        aria-label="Scroll to top">
        <i class="ph-bold ph-arrow-up text-xl"></i>
    </button>
    </div>
</template>

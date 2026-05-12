
<template>
    <div>
        <!-- Page Header -->
    <header class="pt-32 pb-16 bg-white border-b border-slate-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
            <h1 class="font-heading text-4xl md:text-6xl font-bold text-slate-900 mb-4">Contact Us</h1>
            <p class="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">Get in touch with the Buffalo Narrows Economic Development Corporation. We are here to support our community and partners.</p>
        </div>
    </header>

    <!-- Contact Section -->
    <section class="py-20 bg-slate-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-5 gap-12">
                
                <!-- Contact Info -->
                <div class="lg:col-span-2 space-y-8 reveal">
                    <div class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                        <h2 class="font-heading text-2xl font-bold text-slate-900 mb-6">Our Office</h2>
                        
                        <div class="space-y-6">
                            <div class="flex items-start gap-4">
                                <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                    <i class="ph-fill ph-map-pin text-xl"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold text-slate-900">Location</h4>
                                    <p class="text-slate-600 mt-1">1491  Pedersen Ave<br>Buffalo Narrows, SK S0M 0J0</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start gap-4">
                                <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                    <i class="ph-fill ph-phone text-xl"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold text-slate-900">Phone & Fax</h4>
                                    <p class="text-slate-600 mt-1">Phone: (306) 235-4593<br>Fax: (306) 235-4594</p>
                                </div>
                            </div>

                            <div class="flex items-start gap-4">
                                <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                    <i class="ph-fill ph-user text-xl"></i>
                                </div>
                                <div>
                                    <h4 class="font-bold text-slate-900">Primary Contact</h4>
                                    <p class="text-slate-600 mt-1">Bonnie Aubichon, Manager</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Contact Form -->
                <div class="lg:col-span-3 reveal reveal-delay-1">
                    <div class="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100">
                        <h2 class="font-heading text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
                        <form action="#" method="POST" class="space-y-6">
                            <div class="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label for="first-name" class="block text-sm font-medium text-slate-700 mb-2">First name</label>
                                    <input type="text" id="first-name" class="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary transition-colors outline-none" placeholder="Jane">
                                </div>
                                <div>
                                    <label for="last-name" class="block text-sm font-medium text-slate-700 mb-2">Last name</label>
                                    <input type="text" id="last-name" class="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary transition-colors outline-none" placeholder="Doe">
                                </div>
                            </div>
                            <div>
                                <label for="email" class="block text-sm font-medium text-slate-700 mb-2">Email address</label>
                                <input type="email" id="email" class="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary transition-colors outline-none" placeholder="jane@example.com">
                            </div>
                            <div>
                                <label for="message" class="block text-sm font-medium text-slate-700 mb-2">Message</label>
                                <textarea id="message" rows="5" class="w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary transition-colors outline-none resize-none" placeholder="How can we help you?"></textarea>
                            </div>
                            <button type="submit" class="w-full bg-primary text-white font-semibold py-4 rounded-lg hover:bg-primary-dark transition-colors shadow-md hover:shadow-lg">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </section>
    </div>
</template>

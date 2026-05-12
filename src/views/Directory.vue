
<script setup>
import directoryData from '../data/directory.json'

// Group businesses by category
const groupedDirectory = directoryData.reduce((acc, business) => {
    if (!acc[business.category]) {
        acc[business.category] = []
    }
    // Filter out some incorrectly parsed empty names
    if (business.name && business.name.length > 2 && !business.name.startsWith('Monday') && !business.name.startsWith('Or 306') && !business.name.startsWith('7 days')) {
        acc[business.category].push(business)
    }
    return acc
}, {})

// Define icons for categories
const categoryIcons = {
    'Airlines': 'ph-airplane',
    'Accommodations': 'ph-bed',
    'Advertisement': 'ph-megaphone',
    'Automotive & Gas Bar': 'ph-gas-pump',
    'Attractions': 'ph-tent',
    'Development & Management Agencies': 'ph-briefcase',
    'Education & Daycare': 'ph-student',
    'Fabrication & Manufacturing': 'ph-factory',
    'Fast Foods & Restaurants': 'ph-hamburger',
    'Grocery': 'ph-shopping-cart',
    'Government Services': 'ph-bank',
    'Construction & Trucking': 'ph-truck',
    'Municipal Services': 'ph-buildings',
    'Retail Business': 'ph-storefront',
    'Other Services': 'ph-wrench',
    'Beauty': 'ph-scissors'
}

const getIcon = (category) => {
    return categoryIcons[category] || 'ph-storefront'
}
</script>

<template>
    <div>
        <!-- Page Header -->
    <header class="pt-32 pb-16 bg-white border-b border-slate-100">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal">
            <h1 class="font-heading text-4xl md:text-6xl font-bold text-slate-900 mb-4">Business Directory</h1>
            <p class="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">Buffalo Narrows has a growing and diverse economy. Discover the businesses and sectors driving our community forward.</p>
        </div>
    </header>

    <!-- Directory Content -->
    <section class="py-20 bg-slate-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            
            <div v-for="(businesses, category) in groupedDirectory" :key="category" class="reveal">
                <div v-if="businesses.length > 0">
                    <div class="flex items-center gap-4 mb-8 border-b border-slate-200 pb-4">
                        <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                            <i :class="['ph-fill text-2xl', getIcon(category)]"></i>
                        </div>
                        <h2 class="font-heading text-3xl font-bold text-slate-900">{{ category }}</h2>
                    </div>
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div v-for="(business, index) in businesses" :key="index" class="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow flex flex-col h-full">
                            <h3 class="font-bold text-lg text-slate-900 mb-4">{{ business.name }}</h3>
                            
                            <div class="space-y-2 mt-auto text-sm text-slate-600">
                                <p v-if="business.owner" class="flex items-start gap-2"><i class="ph-fill ph-user text-primary mt-0.5"></i> <span>{{ business.owner }}</span></p>
                                <p v-if="business.phone" class="flex items-start gap-2"><i class="ph-fill ph-phone text-primary mt-0.5"></i> <span>{{ business.phone }}</span></p>
                                <p v-if="business.cell" class="flex items-start gap-2"><i class="ph-fill ph-device-mobile text-primary mt-0.5"></i> <span>{{ business.cell }}</span></p>
                                <p v-if="business.fax" class="flex items-start gap-2"><i class="ph-fill ph-printer text-primary mt-0.5"></i> <span>{{ business.fax }}</span></p>
                                <p v-if="business.email" class="flex items-start gap-2"><i class="ph-fill ph-envelope text-primary mt-0.5"></i> <span>{{ business.email }}</span></p>
                                <p v-if="business.website" class="flex items-start gap-2"><i class="ph-fill ph-globe text-primary mt-0.5"></i> <a :href="business.website.startsWith('http') ? business.website : 'http://' + business.website" target="_blank" class="hover:text-primary transition-colors hover:underline">{{ business.website }}</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Mining & Resource Development (Featured block) -->
            <div class="reveal mt-20">
                <div class="bg-primary text-white rounded-3xl p-8 md:p-12 shadow-lg relative overflow-hidden">
                    <div class="absolute -right-20 -top-20 opacity-10 pointer-events-none">
                        <i class="ph-fill ph-mountains text-[300px]"></i>
                    </div>
                    <div class="relative z-10 max-w-3xl">
                        <h2 class="font-heading text-3xl font-bold mb-4">Mining, Resources & Northern Supply</h2>
                        <p class="text-primary-light text-slate-200 mb-6 text-lg leading-relaxed">
                            Buffalo Narrows is strategically positioned to support Northern Saskatchewan’s resource sectors, including forestry, commercial fishing, wild rice harvesting, and mining support services.
                        </p>
                        <div class="flex flex-wrap gap-3">
                            <span class="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">Logistics & Transportation</span>
                            <span class="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">Camp Services</span>
                            <span class="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">Heavy Equipment</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
    </div>
</template>

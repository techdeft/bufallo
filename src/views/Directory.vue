
<script setup>
import { ref, computed } from 'vue'
import rawData from '../data/directory.json'

// ── helpers ──────────────────────────────────────────────────────────────────
const isValidName = (name) =>
    name &&
    name.length > 2 &&
    !/^(monday|tuesday|wednesday|thursday|friday|saturday|sunday|or\s|7 days|24 hrs|\d{3}-)/i.test(name) &&
    !/^\(/.test(name)

// ── clean data ────────────────────────────────────────────────────────────────
const businesses = rawData.filter(b => isValidName(b.name))

// ── categories ────────────────────────────────────────────────────────────────
const categoryConfig = {
    'Airlines':                         { icon: 'ph-airplane',       color: 'bg-sky-100 text-sky-700' },
    'Accommodations':                   { icon: 'ph-bed',             color: 'bg-teal-100 text-teal-700' },
    'Advertisement':                    { icon: 'ph-megaphone',       color: 'bg-orange-100 text-orange-700' },
    'Automotive & Gas Bar':             { icon: 'ph-gas-pump',        color: 'bg-yellow-100 text-yellow-700' },
    'Attractions':                      { icon: 'ph-tent',            color: 'bg-green-100 text-green-700' },
    'Development & Management Agencies':{ icon: 'ph-briefcase',       color: 'bg-purple-100 text-purple-700' },
    'Education & Daycare':              { icon: 'ph-student',         color: 'bg-blue-100 text-blue-700' },
    'Fabrication & Manufacturing':      { icon: 'ph-factory',         color: 'bg-gray-100 text-gray-700' },
    'Fast Foods & Restaurants':         { icon: 'ph-hamburger',       color: 'bg-red-100 text-red-700' },
    'Grocery':                          { icon: 'ph-shopping-cart',   color: 'bg-lime-100 text-lime-700' },
    'Government Services':              { icon: 'ph-bank',            color: 'bg-indigo-100 text-indigo-700' },
    'Construction & Trucking':          { icon: 'ph-truck',           color: 'bg-amber-100 text-amber-700' },
    'Municipal Services':               { icon: 'ph-buildings',       color: 'bg-cyan-100 text-cyan-700' },
    'Retail Business':                  { icon: 'ph-storefront',      color: 'bg-pink-100 text-pink-700' },
    'Other Services':                   { icon: 'ph-wrench',          color: 'bg-slate-100 text-slate-700' },
    'Beauty':                           { icon: 'ph-scissors',        color: 'bg-rose-100 text-rose-700' },
}

const allCategories = [...new Set(businesses.map(b => b.category))]
const selectedCategory = ref('All')
const searchQuery = ref('')

const filteredBusinesses = computed(() => {
    let list = businesses
    if (selectedCategory.value !== 'All') {
        list = list.filter(b => b.category === selectedCategory.value)
    }
    if (searchQuery.value.trim()) {
        const q = searchQuery.value.toLowerCase()
        list = list.filter(b =>
            b.name.toLowerCase().includes(q) ||
            (b.owner && b.owner.toLowerCase().includes(q)) ||
            (b.category && b.category.toLowerCase().includes(q))
        )
    }
    return list
})

// Group filtered businesses by category
const grouped = computed(() => {
    return filteredBusinesses.value.reduce((acc, b) => {
        if (!acc[b.category]) acc[b.category] = []
        acc[b.category].push(b)
        return acc
    }, {})
})

const totalCount = computed(() => businesses.length)
const categoryCount = (cat) => businesses.filter(b => b.category === cat).length

const getCfg = (cat) => categoryConfig[cat] || { icon: 'ph-storefront', color: 'bg-slate-100 text-slate-700' }
</script>

<template>
    <div>
        <!-- Hero Header -->
        <header class="pt-32 pb-20 bg-gradient-to-br from-slate-900 via-primary-dark to-primary relative overflow-hidden">
            <!-- Watermark -->
            <div class="absolute inset-0 opacity-5 pointer-events-none">
                <svg viewBox="0 0 200 200" class="w-full h-full"><circle cx="160" cy="40" r="120" fill="white"/></svg>
            </div>
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div class="text-center mb-10">
                    <span class="inline-block py-1 px-4 rounded-full bg-white/10 text-white text-xs font-bold tracking-widest uppercase mb-4">Buffalo Narrows</span>
                    <h1 class="font-heading text-5xl md:text-6xl font-bold text-white mb-4">Business Directory</h1>
                    <p class="text-lg text-slate-300 max-w-2xl mx-auto">
                        Discover the {{ totalCount }}+ businesses and services driving our community forward in Northern Saskatchewan.
                    </p>
                </div>

                <!-- Search bar -->
                <div class="max-w-2xl mx-auto relative">
                    <i class="ph ph-magnifying-glass absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 text-xl"></i>
                    <input
                        v-model="searchQuery"
                        type="text"
                        placeholder="Search businesses, owners, or categories…"
                        class="w-full pl-14 pr-6 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white/30 text-base"
                    />
                </div>
            </div>
        </header>

        <!-- Category filter tabs -->
        <div class="sticky top-20 z-30 bg-white border-b border-slate-100 shadow-sm">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex gap-2 overflow-x-auto py-3 no-scrollbar">
                    <button
                        @click="selectedCategory = 'All'"
                        :class="['flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all', selectedCategory === 'All' ? 'bg-primary text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200']"
                    >
                        All <span class="ml-1 opacity-70">({{ totalCount }})</span>
                    </button>
                    <button
                        v-for="cat in allCategories" :key="cat"
                        @click="selectedCategory = cat"
                        :class="['flex-shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all', selectedCategory === cat ? 'bg-primary text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200']"
                    >
                        <i :class="['ph text-base', getCfg(cat).icon]"></i>
                        {{ cat }}
                        <span class="ml-1 opacity-70">({{ categoryCount(cat) }})</span>
                    </button>
                </div>
            </div>
        </div>

        <!-- Directory Content -->
        <section class="py-16 bg-slate-50 min-h-[60vh]">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <!-- No results -->
                <div v-if="Object.keys(grouped).length === 0" class="text-center py-24">
                    <i class="ph ph-magnifying-glass text-6xl text-slate-300 mb-4 block"></i>
                    <p class="text-xl font-semibold text-slate-500">No businesses found</p>
                    <p class="text-slate-400 mt-2">Try a different search term or category.</p>
                    <button @click="searchQuery = ''; selectedCategory = 'All'" class="mt-6 px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-primary-dark transition-all">
                        Clear Filters
                    </button>
                </div>

                <!-- Grouped results -->
                <div v-for="(list, category) in grouped" :key="category" class="mb-16 reveal">

                    <!-- Category header -->
                    <div class="flex items-center gap-4 mb-6">
                        <div :class="['w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0', getCfg(category).color]">
                            <i :class="['ph-fill text-2xl', getCfg(category).icon]"></i>
                        </div>
                        <div>
                            <h2 class="font-heading text-2xl font-bold text-slate-900">{{ category }}</h2>
                            <p class="text-sm text-slate-500">{{ list.length }} listing{{ list.length > 1 ? 's' : '' }}</p>
                        </div>
                        <div class="flex-1 h-px bg-slate-200 ml-2"></div>
                    </div>

                    <!-- Business cards grid -->
                    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        <div
                            v-for="(biz, i) in list" :key="i"
                            class="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 flex flex-col overflow-hidden"
                        >
                            <!-- Card top accent -->
                            <div :class="['h-1.5 w-full', getCfg(category).color.split(' ')[0].replace('bg-', 'bg-').replace('100', '400')]"></div>

                            <div class="p-6 flex flex-col flex-1">
                                <!-- Category chip -->
                                <span :class="['inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full w-fit mb-3', getCfg(category).color]">
                                    <i :class="['ph text-xs', getCfg(category).icon]"></i>
                                    {{ category }}
                                </span>

                                <h3 class="font-heading font-bold text-lg text-slate-900 mb-4 group-hover:text-primary transition-colors leading-snug">{{ biz.name }}</h3>

                                <div class="space-y-2 mt-auto text-sm text-slate-600">
                                    <p v-if="biz.owner" class="flex items-center gap-2">
                                        <i class="ph-fill ph-user text-primary flex-shrink-0"></i>
                                        <span class="font-medium text-slate-700">{{ biz.owner }}</span>
                                    </p>
                                    <p v-if="biz.phone" class="flex items-center gap-2">
                                        <i class="ph-fill ph-phone text-primary flex-shrink-0"></i>
                                        <a :href="'tel:' + biz.phone" class="hover:text-primary transition-colors">{{ biz.phone }}</a>
                                    </p>
                                    <p v-if="biz.cell" class="flex items-center gap-2">
                                        <i class="ph-fill ph-device-mobile text-primary flex-shrink-0"></i>
                                        <a :href="'tel:' + biz.cell" class="hover:text-primary transition-colors">{{ biz.cell }}</a>
                                    </p>
                                    <p v-if="biz.email" class="flex items-center gap-2 break-all">
                                        <i class="ph-fill ph-envelope text-primary flex-shrink-0"></i>
                                        <a :href="'mailto:' + biz.email" class="hover:text-primary transition-colors">{{ biz.email }}</a>
                                    </p>
                                    <p v-if="biz.website" class="flex items-center gap-2">
                                        <i class="ph-fill ph-globe text-primary flex-shrink-0"></i>
                                        <a :href="biz.website.startsWith('http') ? biz.website : 'https://' + biz.website" target="_blank" rel="noopener" class="hover:text-primary transition-colors hover:underline truncate">{{ biz.website }}</a>
                                    </p>
                                    <p v-if="biz.tollFree" class="flex items-center gap-2">
                                        <i class="ph-fill ph-phone-incoming text-primary flex-shrink-0"></i>
                                        <span class="text-xs text-slate-500">Toll-free: {{ biz.tollFree }}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Northern Resources callout -->
                <div class="mt-8 reveal">
                    <div class="bg-gradient-to-br from-primary-dark to-primary text-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
                        <div class="absolute -right-16 -top-16 opacity-10 pointer-events-none">
                            <i class="ph-fill ph-mountains text-[280px]"></i>
                        </div>
                        <div class="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                            <div>
                                <span class="text-xs font-bold uppercase tracking-widest text-white/60 mb-3 block">Northern Saskatchewan</span>
                                <h2 class="font-heading text-3xl md:text-4xl font-bold mb-4">Mining, Resources &amp; Northern Supply</h2>
                                <p class="text-slate-300 mb-6 leading-relaxed">
                                    Buffalo Narrows is strategically positioned to support Northern Saskatchewan's resource sectors — forestry, commercial fishing, wild rice harvesting, and mining support services.
                                </p>
                                <div class="flex flex-wrap gap-3">
                                    <span class="bg-white/15 px-4 py-2 rounded-full text-sm font-medium">Logistics &amp; Transportation</span>
                                    <span class="bg-white/15 px-4 py-2 rounded-full text-sm font-medium">Camp Services</span>
                                    <span class="bg-white/15 px-4 py-2 rounded-full text-sm font-medium">Heavy Equipment</span>
                                    <span class="bg-white/15 px-4 py-2 rounded-full text-sm font-medium">Wild Rice Harvesting</span>
                                    <span class="bg-white/15 px-4 py-2 rounded-full text-sm font-medium">Commercial Fishing</span>
                                </div>
                            </div>
                            <div class="text-center">
                                <router-link to="/contact" class="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-primary font-bold hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                    List Your Business
                                    <i class="ph-bold ph-arrow-right"></i>
                                </router-link>
                                <p class="text-slate-400 text-sm mt-4">Want to be featured in this directory? Contact BNEDC.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </div>
</template>

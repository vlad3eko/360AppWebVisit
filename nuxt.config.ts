import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: "2025-07-15",
    devtools: {enabled: true},
    css: ['@/assets/css/main.css'],
    modules: ['nuxt-swiper', '@nuxt/image', '@nuxtjs/color-mode', '@nuxt/icon'],

    vite: {
        plugins: [
            tailwindcss(),
        ],
    },
    app: {
        head: {
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Orbitron:wght@400..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap'
                }
            ],
        }
    },
});

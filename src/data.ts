export interface Project {
    id: number;
    title: string;
    category: string;
    videoSrc?: string;
    imageSrc?: string;
    className: string;
    videoHeight?: string;
    isFeatured?: boolean; // For the first card with distinctive layout
    description: string;
    link: string;
    tags: string[];
    type?: 'interactive' | 'video' | 'image' | 'media';
    embedUrl?: string;
    github?: string;
    gallery?: GalleryBlock[];
    hideModalVisual?: boolean;
    visualFit?: 'cover' | 'contain';
}

export interface GalleryBlock {
    type: 'image' | 'video' | 'text' | 'code';
    src?: string;      // For image/video
    content?: string;  // For text/code
    language?: string; // For code
}

export interface LabItem {
    id: number;
    title: string;
    date: string;
    height: string;
    bgColor: string;
    imageUrl?: string;
    category?: string;
    year?: string;
}

export const PROJECTS: Project[] = [
    {
        id: 1,
        title: "VERY GOOD  PACKAGING",
        category: "BLENDER / KEYSHOT",
        videoSrc: "/box.mp4",
        className: "md:col-span-2 border-4 border-black p-6 flex flex-col justify-between hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-300 bg-white group cursor-pointer relative overflow-hidden",
        isFeatured: true,
        description: "An elegant packaging design for a premium hibiscus tea brand. The goal was to capture the organic and vibrant nature of the flower through texture and lighting.",
        link: "#",
        tags: ["Blender", "KeyShot", "Packaging Design", "3D Rendering"],
        type: "media",
        gallery: [
            {
                type: 'text',
                content: "01. STRUCTURE DESIGN\nFirst, I designed the base geometry using Blender to ensure structural integrity."
            },
            { type: 'image', src: "/model.webp" },

            {
                type: 'text',
                content: "02. MATERIAL & LIGHTING PROCESS\nUsing KeyShot, I experimented with various material nodes and lighting setups to achieve a realistic texture."
            },
            { type: 'video', src: "/process.mp4" },

            {
                type: 'text',
                content: "03. VISUALIZATION\nThe final rendering focuses on the clean, minimal aesthetic of the brand."
            },
            { type: 'image', src: "/package.webp" },

            {
                type: 'text',
                content: "04. PRODUCTION READY\nI also created the precise die-line (blueprint) for actual mass production."
            },
            { type: 'image', src: "/dieline.webp" },

            {
                type: 'text',
                content: "05. CONTEXT\nA lifestyle mockup showing how the product looks in a real-world environment."
            },
            { type: 'image', src: "/lifestyle.webp" }
        ]
    },
    {
        id: 2,
        title: "CHOCOLATE ORDER SYSTEM",
        category: "REACT / TAILWIND",
        videoSrc: "/dashboard.mp4",
        className: "md:col-span-1 bg-black text-white hover:shadow-[8px_8px_0px_0px_rgba(113,113,122,1)]",
        description: "A real-world chocolate ordering dashboard designed for high efficiency. Experience the seamless workflow and real-time data visualization directly inside this interactive modal.",
        link: "https://order.verygood-chocolate.com/",
        tags: ["React", "Tailwind CSS", "Recharts", "Framer Motion"],
        type: "interactive",
        embedUrl: "https://order.verygood-chocolate.com/"
    },
    {
        id: 3,
        title: "BLOG DETECTOR",
        category: "PYTHON / SELENIUM / STREAMLIT",
        videoSrc: "/algo.mp4",
        hideModalVisual: true,
        className: "md:col-span-1 bg-gray-200 text-black hover:bg-[#edc5c4] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
        description: "A high-performance diagnostic tool for Naver Blog SEO. It automates data collection of visitor metrics, content quality, and real-time search engine rankings using Selenium and Streamlit.",
        link: "https://blogcheck.streamlit.app/",
        tags: ["D3.js", "Python", "Data Structure", "SVG"],
        type: "media",
        gallery: [
            {
                type: 'text',
                content: "01. HYBRID TERMINAL INTERFACE\nDesigned a custom CSS-in-Streamlit terminal UI to provide a hacker-style UX while maintaining professional data visualization."
            },
            {
                type: 'video',
                src: "/detector.mp4"
            },
            {
                type: 'text',
                content: "02. REAL-TIME SEARCH EXPOSURE LOGIC\nThe core engine tracks keyword rankings by reverse-engineering mobile search results and calculating competitive scores."
            },
            {
                type: 'code',
                language: 'python',
                content: `def check_search_exposure(blog_id, post_title):
    # Extracts keywords and simulates mobile search to track ranking
    search_url = f"https://m.search.naver.com/search.naver?query={encoded_query}"
    driver.get(search_url)
    
    # Logic to identify ranking among top 20 results
    result_links = driver.execute_script("return Array.from(document.querySelectorAll('a[href*=\"blog.naver.com\"]')).map(a => a.href)")
    
    for rank, link in enumerate(result_links):
        if f"blog.naver.com/{blog_id}" in link:
            return True, f"Ranked #{rank + 1} for keyword"
    return False, "Not in top 20"`
            }
        ]
    },
    {
        id: 4,
        title: "CONTENT AUTOMATION\nSYSTEM",
        category: "FIREBASE / GEMINI MCP / PENCIL.DEV",
        imageSrc: "/system_ideation.webp",
        className: "md:col-span-2 bg-gray-200 text-black hover:bg-[#FFC497] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
        videoHeight: "h-[200px]",
        description: "A customized content production ecosystem. It integrates Gemini MCP for AI-driven ideation and a Firebase backend for seamless asset management and publishing.",
        link: "https://verygood-chocolate.com",
        tags: ["Firebase", "Gemini MCP", "Pencil.dev", "TypeScript"],
        type: "media",
        gallery: [
            {
                type: 'text',
                content: "01. AI-DRIVEN IDEATION\nCollaborating with Gemini MCP via Pencil.dev to rapidly prototype and refine content details with high precision."
            },
            { type: 'image', src: "/system_ideation.webp" },

            {
                type: 'text',
                content: "02. VERRY GOOD ASSET MANAGER\nDeveloping a proprietary asset library to ensure consistent brand aesthetics while maximizing production speed."
            },
            { type: 'image', src: "/system_assets.webp" },

            {
                type: 'text',
                content: "03. FIREBASE INTEGRATION\nImplemented a robust Firebase backend and a custom Admin Dashboard for easy, code-free content updates."
            },
            { type: 'image', src: "/system_admin.webp" },

            {
                type: 'code',
                language: 'typescript',
                content: `// Firebase Config for Content Stream
const blogPost = {
  title: "Verry Good Cacao Story",
  assets: ["asset_01", "asset_02"],
  status: "published",
  createdAt: firebase.firestore.Timestamp.now()
};`,
            }
        ]
    }
];

// TODO: Replace with Firebase Fetch
export const LAB_ITEMS: LabItem[] = [
    // 2026
    { id: 23, title: "LEVAIN COOKIE CONCEPT", date: "NOV 2026", category: "Food Design", imageUrl: "https://res.cloudinary.com/dmeumcp9i/image/upload/v1770278603/levain.webp", height: "h-[410px]", bgColor: "bg-neutral-900", year: "2026" },
    { id: 22, title: "CHOCOLATE 6-BOX MOCKUP", date: "OCT 2026", category: "Package", imageUrl: "https://res.cloudinary.com/dmeumcp9i/image/upload/v1770278570/chocolate_6box.webp", height: "h-[300px]", bgColor: "bg-zinc-800", year: "2026" },
    { id: 21, title: "DETOX TEA PANTONE", date: "SEP 2026", category: "Design", imageUrl: "https://res.cloudinary.com/dmeumcp9i/image/upload/v1770278534/detox_4tea_2.webp", height: "h-[340px]", bgColor: "bg-gray-800", year: "2026" },
    { id: 20, title: "2025 CSAT MOCKUP", date: "AUG 2026", category: "Mockup", imageUrl: "https://res.cloudinary.com/dmeumcp9i/image/upload/v1770278504/suneong_poster.webp", height: "h-[430px]", bgColor: "bg-slate-800", year: "2026" },
    { id: 19, title: "DETOX WATER AI", date: "JUL 2026", category: "AI Art", imageUrl: "https://res.cloudinary.com/dmeumcp9i/image/upload/v1770278452/cacaodetoxwater.webp", height: "h-[390px]", bgColor: "bg-stone-900", year: "2026" },
    { id: 18, title: "CACAO ILLUSTRATION", date: "JUN 2026", category: "Illustration", imageUrl: "https://res.cloudinary.com/dmeumcp9i/image/upload/v1770278421/toss_background.webp", height: "h-[270px]", bgColor: "bg-neutral-800", year: "2026" },
    { id: 17, title: "SIGNATURE DRINK AI", date: "MAY 2026", category: "AI Art", imageUrl: "https://res.cloudinary.com/dmeumcp9i/image/upload/v1770277976/signature_drink.webp", height: "h-[460px]", bgColor: "bg-zinc-900", year: "2026" },

    // 2025
    { id: 16, title: "ALMOND BRANDING AI", date: "APR 2025", category: "AI Art", imageUrl: "https://res.cloudinary.com/dmeumcp9i/image/upload/v1770277952/almond_bre.webp", height: "h-[370px]", bgColor: "bg-gray-900", year: "2025" },
    { id: 15, title: "ALMOND AI CONCEPT", date: "MAR 2025", category: "AI Art", imageUrl: "https://res.cloudinary.com/dmeumcp9i/image/upload/v1770277924/almond.webp", height: "h-[330px]", bgColor: "bg-slate-900", year: "2025" },
    { id: 14, title: "TONI PACKAGING DESIGN", date: "FEB 2025", category: "Package", imageUrl: "https://res.cloudinary.com/dmeumcp9i/image/upload/v1770277896/toni_.webp", height: "h-[410px]", bgColor: "bg-stone-800", year: "2025" },
    { id: 13, title: "BRITISH MOCKUP SERIES", date: "JAN 2025", category: "3D", imageUrl: "https://res.cloudinary.com/dmeumcp9i/image/upload/v1770277868/british_2025.webp", height: "h-[290px]", bgColor: "bg-neutral-900", year: "2025" },
    { id: 10, title: "VERY GOOD POSTER", date: "OCT 2025", category: "Poster", imageUrl: "https://res.cloudinary.com/dmeumcp9i/image/upload/v1770277765/poster_2025_2.webp", height: "h-[380px]", bgColor: "bg-slate-800", year: "2025" },

    // 2024
    { id: 11, title: "VERY GOOD PROMO BANNER", date: "NOV 2024", category: "Graphic", imageUrl: "https://res.cloudinary.com/dmeumcp9i/image/upload/v1770277800/banner_2025.webp", height: "h-[310px]", bgColor: "bg-gray-800", year: "2024" },

    // 2023
    { id: 12, title: "HANDMADE WOODWORK", date: "DEC 2023", category: "Craft", imageUrl: "https://res.cloudinary.com/dmeumcp9i/image/upload/v1770277830/fit_wood.webp", height: "h-[440px]", bgColor: "bg-zinc-800", year: "2023" },
    { id: 9, title: "NOCKPET PRODUCT PAGE", date: "SEP 2023", category: "Web", imageUrl: "https://res.cloudinary.com/dmeumcp9i/image/upload/v1770277320/nock_2023_3.png", height: "h-[480px]", bgColor: "bg-stone-900", year: "2023" },
    { id: 8, title: "NOCKPET MOCKUP STUDY", date: "AUG 2023", category: "3D", imageUrl: "https://res.cloudinary.com/dmeumcp9i/image/upload/v1770277265/nock_2023_2.webp", height: "h-[260px]", bgColor: "bg-neutral-800", year: "2023" },
    { id: 7, title: "NOCKPET PACKAGING V1", date: "JUL 2023", category: "Package", imageUrl: "https://res.cloudinary.com/dmeumcp9i/image/upload/v1770277235/nock_2023_1.webp", height: "h-[420px]", bgColor: "bg-zinc-900", year: "2023" },

    // 2022
    { id: 4, title: "ZEROCARE PROPOSAL", date: "APR 2022", category: "Editorial", imageUrl: "https://res.cloudinary.com/dmeumcp9i/image/upload/v1770277066/zerocare_2022_2.webp", height: "h-[400px]", bgColor: "bg-stone-800", year: "2022" },
    { id: 3, title: "ZEROCARE PACKAGING", date: "MAR 2022", category: "Package", imageUrl: "https://res.cloudinary.com/dmeumcp9i/image/upload/v1770277022/zerocare_2022.webp", height: "h-[280px]", bgColor: "bg-neutral-900", year: "2022" },

    // 2021
    { id: 6, title: "FIRST KEYSHOT RENDER", date: "JUN 2021", category: "3D", imageUrl: "https://res.cloudinary.com/dmeumcp9i/image/upload/v1770277170/3d_coffee_2021.webp", height: "h-[300px]", bgColor: "bg-gray-900", year: "2021" },
    { id: 5, title: "DYWOOD LANDING PAGE", date: "MAY 2021", category: "Web", imageUrl: "https://res.cloudinary.com/dmeumcp9i/image/upload/v1770277106/dywood_2021.webp", height: "h-[350px]", bgColor: "bg-slate-900", year: "2021" },
    { id: 2, title: "SIGNALCARE LEAFLET", date: "FEB 2021", category: "Graphic", imageUrl: "https://res.cloudinary.com/dmeumcp9i/image/upload/v1770275973/signalcare_2021.webp", height: "h-[450px]", bgColor: "bg-zinc-800", year: "2021" },

    // 2020
    { id: 1, title: "CAD SYSTEM ARCHITECTURE", date: "JAN 2020", category: "CAD", imageUrl: "https://res.cloudinary.com/dmeumcp9i/image/upload/v1770275927/RYAN.webp", height: "h-[320px]", bgColor: "bg-gray-800", year: "2020" }
];

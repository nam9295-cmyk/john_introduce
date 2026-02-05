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
            { type: 'image', src: "/public/model.webp" },

            {
                type: 'text',
                content: "02. MATERIAL & LIGHTING PROCESS\nUsing KeyShot, I experimented with various material nodes and lighting setups to achieve a realistic texture."
            },
            { type: 'video', src: "/public/process.mp4" },

            {
                type: 'text',
                content: "03. VISUALIZATION\nThe final rendering focuses on the clean, minimal aesthetic of the brand."
            },
            { type: 'image', src: "/public/package.webp" },

            {
                type: 'text',
                content: "04. PRODUCTION READY\nI also created the precise die-line (blueprint) for actual mass production."
            },
            { type: 'image', src: "/public/dieline.webp" },

            {
                type: 'text',
                content: "05. CONTEXT\nA lifestyle mockup showing how the product looks in a real-world environment."
            },
            { type: 'image', src: "/public/lifestyle.webp" }
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

export interface LabItem {
    id: number;
    title: string;
    date: string;
    height: string;
    bgColor: string;
}

export const LAB_ITEMS: LabItem[] = [
    {
        id: 1,
        title: "Shader Test #01",
        date: "FEB 05, 2026",
        height: "h-[300px]",
        bgColor: "bg-gray-300"
    },
    {
        id: 2,
        title: "React Flow Node",
        date: "FEB 04, 2026",
        height: "h-[450px]",
        bgColor: "bg-gray-400"
    },
    {
        id: 3,
        title: "Neon Typography",
        date: "FEB 03, 2026",
        height: "h-[250px]",
        bgColor: "bg-gray-500"
    },
    {
        id: 4,
        title: "Three.js Cube",
        date: "FEB 02, 2026",
        height: "h-[350px]",
        bgColor: "bg-gray-600"
    },
    {
        id: 5,
        title: "Glitch Effect",
        date: "FEB 01, 2026",
        height: "h-[400px]",
        bgColor: "bg-gray-700"
    },
    {
        id: 6,
        title: "UI Component",
        date: "JAN 30, 2026",
        height: "h-[300px]",
        bgColor: "bg-gray-800"
    }
];

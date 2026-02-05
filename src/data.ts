export type LocalizedString = string | { en: string; ko: string };

export interface Project {
    id: number;
    title: string;
    category: string;
    videoSrc?: string;
    imageSrc?: string;
    className: string;
    videoHeight?: string;
    isFeatured?: boolean; // For the first card with distinctive layout
    description: LocalizedString;
    link: string;
    tags: string[];
    type?: 'interactive' | 'video' | 'image' | 'media';
    embedUrl?: string;
    github?: string;
    gallery?: GalleryBlock[];
    hideModalVisual?: boolean;
    visualFit?: 'cover' | 'contain';
    poster?: string;
}

export interface GalleryBlock {
    type: 'image' | 'video' | 'text' | 'code';
    src?: string;      // For image/video
    content?: LocalizedString;  // For text/code
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
        videoSrc: "/box_opt.mp4",
        poster: "/box_poster.jpg",
        className: "md:col-span-2 border-4 border-black p-6 flex flex-col justify-between hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-300 bg-white group cursor-pointer relative overflow-hidden",
        isFeatured: true,
        description: {
            en: "An elegant packaging design for a premium hibiscus tea brand. The goal was to capture the organic and vibrant nature of the flower through texture and lighting.",
            ko: "프리미엄 히비스커스 티 브랜드를 위한 우아한 패키지 디자인입니다. 텍스처와 조명을 통해 꽃의 유기적이고 생동감 넘치는 본연의 성질을 포착하고자 했습니다."
        },
        link: "#",
        tags: ["Blender", "KeyShot", "Packaging Design", "3D Rendering"],
        type: "media",
        gallery: [
            {
                type: 'text',
                content: {
                    en: "01. STRUCTURE DESIGN\nFirst, I designed the base geometry using Blender to ensure structural integrity.",
                    ko: "01. 구조 설계\n먼저 블렌더(Blender)를 사용하여 구조적 안정성을 보장하도록 기본 지오메트리를 설계했습니다."
                }
            },
            { type: 'image', src: "/model.webp" },

            {
                type: 'text',
                content: {
                    en: "02. MATERIAL & LIGHTING PROCESS\nUsing KeyShot, I experimented with various material nodes and lighting setups to achieve a realistic texture.",
                    ko: "02. 재질 및 조명 프로세스\n키샷(KeyShot)을 활용하여 다양한 재질 노드와 조명 설정을 실험하며 사실적인 텍스처를 구현했습니다."
                }
            },
            { type: 'video', src: "/process_opt.mp4" },

            {
                type: 'text',
                content: {
                    en: "03. VISUALIZATION\nThe final rendering focuses on the clean, minimal aesthetic of the brand.",
                    ko: "03. 시각화\n최종 렌더링은 브랜드의 깔끔하고 미니멀한 미적 감각에 초점을 맞췄습니다."
                }
            },
            { type: 'image', src: "/package.webp" },

            {
                type: 'text',
                content: {
                    en: "04. PRODUCTION READY\nI also created the precise die-line (blueprint) for actual mass production.",
                    ko: "04. 제작 준비 완료\n실제 대량 생산을 위한 정밀한 다이라인(설계도)도 제작했습니다."
                }
            },
            { type: 'image', src: "/dieline.webp" },

            {
                type: 'text',
                content: {
                    en: "05. CONTEXT\nA lifestyle mockup showing how the product looks in a real-world environment.",
                    ko: "05. 컨텍스트\n실제 환경에서 제품이 어떻게 보이는지 보여주는 라이프스타일 목업입니다."
                }
            },
            { type: 'image', src: "/lifestyle.webp" }
        ]
    },
    {
        id: 2,
        title: "CHOCOLATE ORDER SYSTEM",
        category: "REACT / TAILWIND",
        videoSrc: "/dashboard_opt.mp4",
        poster: "/dashboard_poster.jpg",
        className: "md:col-span-1 bg-black text-white hover:shadow-[8px_8px_0px_0px_rgba(113,113,122,1)]",
        description: {
            en: "A real-world chocolate ordering dashboard designed for high efficiency. Experience the seamless workflow and real-time data visualization directly inside this interactive modal.",
            ko: "높은 효율성을 위해 설계된 실전 초콜릿 주문 대시보드입니다. 이 인터랙티브 모달 안에서 끊김 없는 워크플로우와 실시간 데이터 시각화를 직접 경험해보세요."
        },
        link: "https://order.verygood-chocolate.com/",
        tags: ["React", "Tailwind CSS", "Recharts", "Framer Motion"],
        type: "interactive",
        embedUrl: "https://order.verygood-chocolate.com/"
    },
    {
        id: 3,
        title: "BLOG DETECTOR",
        category: "PYTHON / SELENIUM / STREAMLIT",
        videoSrc: "/algo_opt.mp4",
        poster: "/algo_poster.jpg",
        hideModalVisual: true,
        className: "md:col-span-1 bg-gray-200 text-black hover:bg-[#edc5c4] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
        description: {
            en: "A high-performance diagnostic tool for Naver Blog SEO. It automates data collection of visitor metrics, content quality, and real-time search engine rankings using Selenium and Streamlit.",
            ko: "네이버 블로그 SEO를 위한 고성능 진단 도구입니다. 셀레니움(Selenium)과 스트림릿(Streamlit)을 사용하여 방문자 지표, 콘텐츠 품질, 실시간 검색 엔진 순위 데이터 수집을 자동화합니다."
        },
        link: "https://blogcheck.streamlit.app/",
        tags: ["D3.js", "Python", "Data Structure", "SVG"],
        type: "media",
        gallery: [
            {
                type: 'text',
                content: {
                    en: "01. HYBRID TERMINAL INTERFACE\nDesigned a custom CSS-in-Streamlit terminal UI to provide a hacker-style UX while maintaining professional data visualization.",
                    ko: "01. 하이브리드 터미널 인터페이스\n해커 스타일의 사용자 경험(UX)을 제공하면서도 전문적인 데이터 시각화를 유지하기 위해 커스텀 CSS-in-Streamlit 터미널 UI를 설계했습니다."
                }
            },
            {
                type: 'video',
                src: "/detector_opt.mp4"
            },
            {
                type: 'text',
                content: {
                    en: "02. REAL-TIME SEARCH EXPOSURE LOGIC\nThe core engine tracks keyword rankings by reverse-engineering mobile search results and calculating competitive scores.",
                    ko: "02. 실시간 검색 노출 로직\n핵심 엔진은 모바일 검색 결과를 리버스 엔지니어링하고 경쟁 점수를 계산하여 키워드 순위를 추적합니다."
                }
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
        videoSrc: "/cyber_opt.mp4",
        poster: "/cyber_poster.jpg",
        className: "md:col-span-2 bg-gray-200 text-black hover:bg-[#FFC497] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
        videoHeight: "h-[200px]",
        description: {
            en: "A customized content production ecosystem. It integrates Gemini MCP for AI-driven ideation and a Firebase backend for seamless asset management and publishing.",
            ko: "개인 맞춤형 콘텐츠 제작 생태계입니다. AI 기반 아이디어 도출을 위한 Gemini MCP와 원활한 자산 관리 및 발행을 위한 Firebase 백엔드를 통합했습니다."
        },
        link: "https://verygood-chocolate.com",
        tags: ["Firebase", "Gemini MCP", "Pencil.dev", "TypeScript"],
        type: "media",
        gallery: [
            {
                type: 'text',
                content: {
                    en: "01. AI-DRIVEN IDEATION\nCollaborating with Gemini MCP via Pencil.dev to rapidly prototype and refine content details with high precision.",
                    ko: "01. AI 기반 아이디어 도출\nPencil.dev를 통해 Gemini MCP와 협업하여 높은 정밀도로 콘텐츠 세부 사항을 빠르게 프로토타이핑하고 다듬습니다."
                }
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

export const ABOUT_DATA = {
    slogan: {
        en: "Engineering Mind, Designer's Eye, Craftsman's Hand.",
        ko: "공학자의 사고, 디자이너의 눈, 장인의 손길."
    },
    narrative: {
        en: [
            "My journey began in 2007 at Hyundai Mobis, where I engineered logistics systems and learned the precision of large-scale operations. But specific blueprint wasn't enough for my creative hunger.",
            "I pivoted to entrepreneurship, leading HWproject as CEO, then diving into the sensory world of F&B as a Chef & Owner. These years taught me that 'User Experience' isn't just digital—it's taste, service, and atmosphere.",
            "In 2020, I returned to the physical realm with professional woodworking, mastering the patience and detail required to turn raw material into functional art.",
            "Now, as a Creative Director & Developer, I synthesize all these disciplines. I build digital products with the structural integrity of an engineer, the aesthetic of a designer, and the soul of a craftsman."
        ],
        ko: [
            "저의 여정은 2007년 현대모비스에서 시작되었습니다. 그곳에서 물류 시스템을 설계하며 대규모 운영의 정밀함을 배웠습니다. 하지만 정해진 청사진만으로는 저의 창조적 갈증을 채울 수 없었습니다.",
            "저는 기업가로 전향하여 HWproject의 CEO를 역임했고, 이후 셰프이자 오너로서 감각적인 F&B 세계에 뛰어들었습니다. 이 시기를 통해 '사용자 경험'이 단순한 디지털이 아니라 맛, 서비스, 분위기라는 것을 배웠습니다.",
            "2020년, 저는 전문 목공예의 길로 들어서며 원자재를 기능적인 예술로 승화시키는 데 필요한 인내와 디테일을 익혔습니다.",
            "이제 저는 크리에이티브 디렉터이자 개발자로서 이 모든 분야를 통합합니다. 저는 엔지니어의 구조적 무결성, 디자이너의 미적 감각, 그리고 장인의 영혼을 담아 디지털 제품을 만듭니다."
        ]
    },
    timeline: [
        { year: "2024-PRES", role: "Creative Director & Dev", desc: "Very Goût / Web Development", descKo: "베리굿 / 웹 개발" },
        { year: "2023", role: "Creative Director", desc: "SUIN CO.LTD. / Pet Care Branding", descKo: "수인코 / 펫케어 브랜딩 & 전략" },
        { year: "2021", role: "Design Freelancer", desc: "Digital Branding & Web Design", descKo: "디지털 브랜딩 & 웹 디자인" },
        { year: "2020", role: "Woodworker", desc: "Professional Craftsmanship / Ottchil", descKo: "전문 목공예 / 옻칠" },
        { year: "2014-2019", role: "Chef & Owner", desc: "F&B Management & Branding", descKo: "F&B 경영 및 브랜딩" },
        { year: "2012", role: "CEO", desc: "HWproject (Auto Parts Import)", descKo: "HWproject (자동차 부품 수입)" },
        { year: "2007", role: "Engineer", desc: "Hyundai Mobis (Logistics)", descKo: "현대모비스 (물류 엔지니어링)" }
    ],
    skills: {
        design: ["Blender", "KeyShot", "Affinity Suite", "Photoshop", "Illustrator"],
        dev: ["Dynamic Web Interface (React/TS)", "Intelligence Layer / Vibe Coding", "Cloud Deployment & Database"],
        physical: ["Woodworking", "Furniture Design", "Lacquerware (Ottchil)", "CNC Machining"]
    }
};

export interface Project {
    id: number;
    title: string;
    category: string;
    videoSrc: string;
    className: string;
    videoHeight?: string;
    isFeatured?: boolean; // For the first card with distinctive layout
    description: string;
    link: string;
    tags: string[];
    type?: 'interactive' | 'video' | 'image' | 'media';
    embedUrl?: string;
    github?: string;
    gallery?: string[];
}

export const PROJECTS: Project[] = [
    {
        id: 1,
        title: "3D SPATIAL ARTWORKS",
        category: "BLENDER / KEYSHOT",
        videoSrc: "/box.mp4",
        className: "md:col-span-2 border-4 border-black p-6 flex flex-col justify-between hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-300 bg-white group cursor-pointer relative overflow-hidden",
        isFeatured: true,
        description: "Blender와 KeyShot을 활용한 3D 아트워크 컬렉션입니다. 3D 공간 구성과 텍스처링, 라이팅에 집중하여 작업했습니다.",
        link: "#",
        tags: ["Blender", "KeyShot", "Photoshop", "3D Modeling"],
        type: "media",
        gallery: [
            "/images/art_01.jpg",
            "/images/art_02.jpg",
            "/images/art_03.jpg"
        ]
    },
    {
        id: 2,
        title: "CHOCOLATE-ORDER SYSTEM",
        category: "REACT / TAILWIND",
        videoSrc: "/dashboard.mp4",
        className: "md:col-span-1 bg-black text-white hover:shadow-[8px_8px_0px_0px_rgba(113,113,122,1)]",
        description: "실제 운영 중인 초콜릿 주문 시스템입니다. 모달 안에서 바로 체험해보세요!",
        link: "https://order.verygood-chocolate.com/",
        tags: ["React", "Tailwind CSS", "Recharts", "Framer Motion"],
        type: "interactive",
        embedUrl: "https://order.verygood-chocolate.com/"
    },
    {
        id: 3,
        title: "BLOG\nDETECTOR",
        category: "D3.JS / TYPESCRIPT",
        videoSrc: "/algo.mp4",
        className: "md:col-span-1 bg-gray-200 text-black hover:bg-[#edc5c4] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
        description: "Visualizing complex algorithms in real-time using D3.js. This tool helps developers understand data structures and sorting algorithms through interactive animations.",
        link: "#",
        tags: ["D3.js", "TypeScript", "Algorithms", "SVG"]
    },
    {
        id: 4,
        title: "WEBPAGE\nBLOG",
        category: "WEBGL / SHADERS",
        videoSrc: "/cyber.mp4",
        className: "md:col-span-2 bg-gray-200 text-black hover:bg-[#FFC497] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
        videoHeight: "h-[200px]",
        description: "A cyberpunk-inspired blog interface featuring GLSL shaders for background effects and unique typography treatments. A blend of high-tech aesthetics and brutalist design.",
        link: "#",
        tags: ["WebGL", "GLSL Shaders", "React-Three-Fiber", "Typography"]
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

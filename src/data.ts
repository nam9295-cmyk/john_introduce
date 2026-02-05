export interface Project {
    id: number;
    title: string;
    category: string;
    videoSrc: string;
    className: string;
    videoHeight?: string;
    isFeatured?: boolean; // For the first card with distinctive layout
}

export const PROJECTS: Project[] = [
    {
        id: 1,
        title: "3D SPATIAL\nEXPLORATION",
        category: "THREE.JS / BLENDER",
        videoSrc: "/box.mp4",
        className: "md:col-span-2 border-4 border-black p-6 flex flex-col justify-between hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-300 bg-white group cursor-pointer relative overflow-hidden",
        isFeatured: true
    },
    {
        id: 2,
        title: "CHOCOLAT-ORDER SYSTEM",
        category: "REACT / TAILWIND",
        videoSrc: "/dashboard.mp4",
        className: "md:col-span-1 bg-black text-white hover:shadow-[8px_8px_0px_0px_rgba(113,113,122,1)]"
    },
    {
        id: 3,
        title: "BLOG\nDETECTOR",
        category: "D3.JS / TYPESCRIPT",
        videoSrc: "/algo.mp4",
        className: "md:col-span-1 bg-gray-200 text-black hover:bg-[#edc5c4] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
    },
    {
        id: 4,
        title: "WEBPAGE\nBLOG",
        category: "WEBGL / SHADERS",
        videoSrc: "/cyber.mp4",
        className: "md:col-span-2 bg-gray-200 text-black hover:bg-[#FFC497] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]",
        videoHeight: "h-[200px]"
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

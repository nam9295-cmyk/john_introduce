import React, { useRef } from 'react';
import { ArrowUpRight, Github, Twitter } from 'lucide-react';
import Marquee from 'react-fast-marquee';

interface HoverVideoCardProps {
    title: string;
    category: string;
    videoSrc: string;
    className?: string;
    videoHeight?: string;
}

const HoverVideoCard: React.FC<HoverVideoCardProps> = ({ title, category, videoSrc, className, videoHeight }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    const baseClasses = "border-4 border-black p-6 flex flex-col justify-between hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-300 cursor-pointer group";
    const themeClasses = className || "md:col-span-1 bg-black text-white hover:shadow-[8px_8px_0px_0px_rgba(113,113,122,1)]";
    const heightClass = videoHeight || "h-[120px]";

    return (
        <div
            className={`${baseClasses} ${themeClasses}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="flex justify-between items-start">
                <h2 className="font-['Outfit'] font-black text-3xl whitespace-pre-line">{title}</h2>
                <ArrowUpRight className="w-6 h-6" />
            </div>
            <div className={`${heightClass} w-full bg-zinc-800 my-4 border border-zinc-700 overflow-hidden relative`}>
                <video
                    ref={videoRef}
                    src={videoSrc}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                />
            </div>
            <span className="font-['Inter'] font-semibold opacity-70 text-xs tracking-wide">{category}</span>
        </div>
    );
};

const Portfolio = () => {
    return (
        <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white font-['Outfit']">

            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-white border-b-4 border-black px-6 md:px-16 h-20 flex items-center justify-between">
                <div className="font-['Outfit'] font-black text-3xl tracking-tighter">JD.26</div>
                <div className="hidden md:flex gap-10">
                    {['WORKS', 'LABS', 'ABOUT'].map((link) => (
                        <a key={link} href="#" className="font-['Outfit'] font-extrabold text-lg hover:underline decoration-4 underline-offset-4">
                            {link}
                        </a>
                    ))}
                </div>
                {/* Mobile Menu Icon Placeholder */}
                <div className="md:hidden font-['Outfit'] font-bold text-xl">MENU</div>
            </nav>

            {/* Marquee */}
            <div className="bg-black text-white h-[60px] border-b-4 border-black flex items-center overflow-hidden">
                <Marquee gradient={false} speed={50} className="w-full overflow-hidden whitespace-nowrap">
                    <div className="flex items-center font-['Outfit'] font-black text-2xl tracking-wide">
                        {Array(8).fill('BREAKING BARRIERS //').map((text, i) => (
                            <span key={i} className="mx-4">{text}</span>
                        ))}
                    </div>
                </Marquee>
            </div>

            {/* Main Content - Bento Grid */}
            <main className="p-6 md:p-16 max-w-[1600px] mx-auto">
                <div className="flex flex-col gap-8">

                    {/* Row 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-auto md:h-[400px]">
                        {/* Card 1: 3D Spatial */}
                        <div className="md:col-span-2 border-4 border-black p-6 flex flex-col justify-between hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow duration-300 bg-white group cursor-pointer relative overflow-hidden">
                            <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                                <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" alt="Abstract 3D" className="w-full h-full object-cover grayscale" />
                            </div>
                            <div className="relative z-10 w-full">
                                <div className="w-full h-[200px] bg-gray-100 border-2 border-black mb-4 relative overflow-hidden group">
                                    {/* 비디오 태그 시작 */}
                                    <video
                                        src="/box.mp4"       // public 폴더에 넣은 파일 이름 (앞에 / 꼭 붙이기)
                                        autoPlay             // 자동 재생
                                        loop                 // 무한 반복
                                        muted                // 소리 끔 (이게 있어야 자동재생됨!)
                                        playsInline          // 모바일에서도 전체화면 안 되고 그 자리에서 재생
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                                    />
                                    {/* 비디오 태그 끝 */}

                                    {/* 위에 덮어씌우는 효과 (선택사항: 원하면 남겨두고 아니면 지워) */}
                                    <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none"></div>
                                </div>
                            </div>
                            <div className="relative z-10 flex justify-between items-end">
                                <h2 className="font-['Outfit'] font-black text-4xl md:text-5xl leading-[0.9]">
                                    3D SPATIAL<br />EXPLORATION
                                </h2>
                                <span className="font-['Inter'] font-semibold text-zinc-500 text-sm tracking-wide">THREE.JS / BLENDER</span>
                            </div>
                        </div>

                        {/* Card 2: Neo-Dash */}
                        {/* Card 2: Neo-Dash */}
                        <HoverVideoCard
                            title="CHOCOLAT-ORDER  SYSTEM"
                            category="REACT / TAILWIND"
                            videoSrc="/dashboard.mp4"
                        />
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-auto md:h-[400px]">
                        {/* Card 3: Algo-Viz */}
                        {/* Card 3: Algo-Viz */}
                        <HoverVideoCard
                            title={`BLOG\nDETECTOR`}
                            category="D3.JS / TYPESCRIPT"
                            videoSrc="/algo.mp4"
                            className="md:col-span-1 bg-gray-200 text-black hover:bg-[#edc5c4] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                        />

                        {/* Card 4: Cybernetic Interface */}
                        <HoverVideoCard
                            title={`WEBPAGE\nBLOG`}
                            category="WEBGL / SHADERS"
                            videoSrc="/cyber.mp4"
                            className="md:col-span-2 bg-gray-200 text-black hover:bg-[#FFC497] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                            videoHeight="h-[200px]"
                        />
                    </div>

                </div>
            </main>

            {/* Footer */}
            <footer className="bg-black text-white border-t-4 border-black py-16 px-6 md:px-16 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="font-['Inter'] font-semibold text-sm tracking-wider">
                    © 2026 JOHN DOE. NO RIGHTS RESERVED.
                </div>
                <div className="flex gap-8">
                    <a href="#" className="flex items-center gap-2 font-['Outfit'] font-bold hover:text-zinc-300 transition-colors">
                        <Twitter className="w-5 h-5" /> TWITTER
                    </a>
                    <a href="#" className="flex items-center gap-2 font-['Outfit'] font-bold hover:text-zinc-300 transition-colors">
                        <Github className="w-5 h-5" /> GITHUB
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;

import React, { useRef, useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, ArrowRight } from 'lucide-react';
import Marquee from 'react-fast-marquee';
import { PROJECTS, LAB_ITEMS, Project } from './data';

interface HoverVideoCardProps {
    title: string;
    category: string;
    videoSrc?: string;
    imageSrc?: string;
    className?: string;
    videoHeight?: string;
    onClick?: () => void;
}

const HoverVideoCard: React.FC<HoverVideoCardProps> = ({ title, category, videoSrc, imageSrc, className, videoHeight, onClick }) => {
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
            onClick={onClick}
        >
            <div className="flex justify-between items-start">
                <h2 className="font-['Outfit'] font-black text-3xl whitespace-pre-line">{title}</h2>
                <ArrowUpRight className="w-6 h-6" />
            </div>
            <div className={`${heightClass} w-full bg-zinc-800 my-4 border border-zinc-700 overflow-hidden relative`}>
                {videoSrc ? (
                    <video
                        ref={videoRef}
                        src={videoSrc}
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                    />
                ) : imageSrc ? (
                    <img
                        src={imageSrc}
                        alt={title}
                        className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                ) : null}
            </div>
            <span className="font-['Inter'] font-semibold opacity-70 text-xs tracking-wide">{category}</span>
        </div>
    );
};

const Portfolio = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [selectedProject]);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const scrollLeft = e.currentTarget.scrollLeft;
        // Card width is 85vw.
        // Approximate calculation: scrollLeft / (width * 0.85)
        // Or cleaner: calculate based on the first child's width if possible, but simplified math works for UX
        const index = Math.round(scrollLeft / (window.innerWidth * 0.85));
        setCurrentSlide(index);
    };
    return (
        <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white font-['Outfit']">

            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-white border-b-4 border-black px-6 md:px-16 h-20 flex items-center justify-between">
                <div className="font-['Outfit'] font-black text-3xl tracking-tighter">JD.26</div>
                <div className="hidden md:flex gap-10">
                    {['WORKS', 'LABS', 'ABOUT', 'CONTACT'].map((link) => (
                        <a key={link} href={`#${link.toLowerCase()}`} className="font-['Outfit'] font-extrabold text-lg hover:underline decoration-4 underline-offset-4">
                            {link}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Toggle Button */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="md:hidden border-2 border-black p-2 hover:bg-black hover:text-white transition-colors z-50"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Full-Screen Menu Overlay */}
            <div className={`fixed inset-0 bg-black z-40 flex flex-col justify-center items-center gap-8 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
                {['WORKS', 'LABS', 'ABOUT', 'CONTACT'].map((link) => (
                    <a
                        key={link}
                        href={`#${link.toLowerCase()}`}
                        onClick={() => setIsMenuOpen(false)}
                        className="font-['Outfit'] font-black text-6xl text-white hover:text-[#39ff14] transition-colors tracking-tighter"
                    >
                        {link}
                    </a>
                ))}
            </div>

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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:auto-rows-[400px]">
                    {PROJECTS.map((project) => (
                        project.isFeatured ? (
                            <div key={project.id} className={project.className} onClick={() => setSelectedProject(project)}>
                                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                                    <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" alt="Abstract 3D" className="w-full h-full object-cover grayscale" />
                                </div>
                                <div className="relative z-10 w-full">
                                    <div className="w-full h-[200px] bg-gray-100 border-2 border-black mb-4 relative overflow-hidden group">
                                        <video
                                            src={project.videoSrc}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                                        />
                                        <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none"></div>
                                    </div>
                                </div>
                                <div className="relative z-10 flex justify-between items-end">
                                    <h2 className="font-['Outfit'] font-black text-4xl md:text-5xl leading-[0.9] whitespace-pre-line">
                                        {project.title}
                                    </h2>
                                    <span className="font-['Inter'] font-semibold text-zinc-500 text-sm tracking-wide">{project.category}</span>
                                </div>
                            </div>
                        ) : (
                            <HoverVideoCard
                                key={project.id}
                                title={project.title}
                                category={project.category}
                                videoSrc={project.videoSrc}
                                imageSrc={project.imageSrc}
                                className={project.className}
                                videoHeight={project.videoHeight}
                                onClick={() => setSelectedProject(project)}
                            />
                        )
                    ))}
                </div>
            </main>

            {/* The Arsenal Section */}
            <section className="bg-black text-white py-20 px-6 md:px-16 border-t-4 border-black">
                <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Left: Headline */}
                    <div>
                        <h2 className="font-['Outfit'] font-black text-6xl md:text-8xl leading-[0.9] tracking-tighter">
                            BRIDGING<br />DESIGN &<br />TECHNOLOGY
                        </h2>
                    </div>

                    {/* Right: The Arsenal */}
                    <div>
                        <h3 className="font-['Outfit'] font-bold text-2xl mb-8 tracking-widest text-zinc-500">THE ARSENAL</h3>
                        <div className="flex flex-wrap gap-3">
                            {['Photoshop', 'Illustrator', 'After Effects', 'Premiere Pro', 'Blender', 'SketchUp', 'KeyShot 11', 'React', 'Tailwind', 'Antigravity'].map((tool) => (
                                <span key={tool} className="border-2 border-white px-4 py-2 font-['Outfit'] font-bold text-lg tracking-wide hover:bg-[#39ff14] hover:text-black hover:border-[#39ff14] transition-all duration-300 cursor-default">
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* LABS Section - Masonry Grid */}
            <section id="labs" className="bg-white text-black py-20 px-6 md:px-16 border-t-4 border-black">
                <div className="max-w-[1600px] mx-auto">
                    {/* Header */}
                    <div className="border-b-4 border-black mb-12 pb-4">
                        <h2 className="font-['Outfit'] font-black text-5xl md:text-7xl tracking-tighter mb-2">
                            LABORATORY // DAILY LOG
                        </h2>
                        <p className="font-['Inter'] font-medium text-lg text-zinc-600 tracking-wide">
                            Raw experiments, code snippets, and daily renders.
                        </p>
                    </div>

                    {/* Masonry Grid (Slider on Mobile) */}
                    <div
                        onScroll={handleScroll}
                        className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 md:block md:columns-3 md:gap-8 md:space-y-8 md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden"
                    >
                        {LAB_ITEMS.map((item) => (
                            <div key={item.id} className="min-w-[85vw] snap-center md:min-w-0 md:break-inside-avoid md:snap-align-none bg-white border-4 border-black p-4 hover:-translate-y-2 hover:rotate-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 cursor-pointer">
                                <div className={`bg-zinc-200 w-full ${item.height} mb-4 border-2 border-black relative overflow-hidden group`}>
                                    <div className={`absolute inset-0 ${item.bgColor}`}></div>
                                </div>
                                <div className="flex justify-between items-end font-['Outfit']">
                                    <span className="font-bold text-xl">{item.title}</span>
                                    <span className="font-bold text-sm text-zinc-500">{item.date}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination Dots (Mobile Only) */}
                    <div className="flex justify-center gap-2 mt-4 md:hidden">
                        {[0, 1, 2, 3, 4, 5].map((index) => (
                            <div
                                key={index}
                                className={`w-3 h-3 transition-colors duration-300 ${currentSlide === index ? 'bg-black' : 'bg-gray-300'}`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Project Detail Modal */}
            {selectedProject && (
                <div className="fixed inset-0 z-[60] bg-black text-white overflow-y-auto font-['Outfit'] animate-fadeIn">
                    <button
                        onClick={() => setSelectedProject(null)}
                        className="sticky top-6 float-right right-6 z-50 p-2 bg-black border-2 border-white rounded-full hover:bg-white hover:text-black transition-colors duration-300 transform hover:scale-110"
                    >
                        <X size={32} />
                    </button>

                    <div className="max-w-[1200px] mx-auto p-6 md:p-16 pt-20 md:pt-20 flex flex-col gap-12">
                        {/* Header */}
                        <div>
                            <div className="flex flex-wrap gap-3 mb-6">
                                {selectedProject.tags.map((tag, i) => (
                                    <span key={i} className="border border-zinc-600 px-3 py-1 text-sm font-semibold tracking-wide text-zinc-400">
                                        {tag.toUpperCase()}
                                    </span>
                                ))}
                            </div>
                            <h1 className="text-5xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-4 whitespace-pre-line">
                                {selectedProject.title}
                            </h1>
                            <p className="text-xl text-zinc-500 font-bold">{selectedProject.category}</p>
                        </div>

                        {/* Visual */}
                        {/* Visual - Only render if media/iframe exists AND not hidden */}
                        {!selectedProject.hideModalVisual && ((selectedProject.type === 'interactive' && selectedProject.embedUrl) || selectedProject.videoSrc || selectedProject.imageSrc) ? (
                            <div className={`w-full ${selectedProject.type === 'interactive'
                                    ? 'h-[400px] md:h-[600px]'
                                    : selectedProject.visualFit === 'contain'
                                        ? 'h-auto bg-black' // Remove aspect-video for contain
                                        : 'h-auto aspect-video'
                                } border-4 border-white bg-zinc-900 overflow-hidden relative group`}>
                                {selectedProject.type === 'interactive' && selectedProject.embedUrl ? (
                                    <iframe
                                        src={selectedProject.embedUrl}
                                        title={selectedProject.title}
                                        className="w-full h-full border-0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                ) : selectedProject.videoSrc ? (
                                    <video
                                        src={selectedProject.videoSrc}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className={`w-full ${selectedProject.visualFit === 'contain' ? 'h-auto object-contain' : 'h-full object-cover'} grayscale group-hover:grayscale-0 transition-grayscale duration-500`}
                                    />
                                ) : selectedProject.imageSrc ? (
                                    <img
                                        src={selectedProject.imageSrc}
                                        alt={selectedProject.title}
                                        className={`w-full ${selectedProject.visualFit === 'contain' ? 'h-auto object-contain' : 'h-full object-cover'} grayscale group-hover:grayscale-0 transition-grayscale duration-500`}
                                    />
                                ) : null}
                            </div>
                        ) : null}

                        {/* Details */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 font-['Inter']">
                            <div className="md:col-span-2">
                                <h3 className="font-['Outfit'] text-2xl font-bold mb-4 text-[#39ff14]">PROJECT OVERVIEW</h3>
                                <p className="text-xl md:text-2xl font-medium leading-relaxed text-zinc-300">
                                    {selectedProject.description}
                                </p>
                            </div>
                            <div>
                                {selectedProject.link && selectedProject.link !== '#' && (
                                    <a
                                        href={selectedProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex items-center justify-between w-full border-2 border-white p-6 font-['Outfit'] font-black text-2xl hover:bg-[#39ff14] hover:text-black hover:border-[#39ff14] transition-all duration-300"
                                    >
                                        <span>VISIT WEBSITE</span>
                                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Gallery / Rich Media Renderer (Full Width) */}
                        {selectedProject.gallery && (
                            <div className="mt-16 flex flex-col gap-8 w-full">
                                {selectedProject.gallery.map((block, i) => (
                                    <div key={i} className="w-full">
                                        {block.type === 'text' && block.content && (
                                            <div className="text-gray-400 text-sm mt-12 mb-4 font-mono uppercase tracking-widest border-l-2 border-gray-700 pl-4 whitespace-pre-line">
                                                {block.content}
                                            </div>
                                        )}
                                        {block.type === 'image' && block.src && (
                                            <img
                                                src={block.src}
                                                alt={`${selectedProject.title} detail ${i}`}
                                                className="w-full h-auto rounded-sm mb-2 border border-gray-800"
                                            />
                                        )}
                                        {block.type === 'video' && block.src && (
                                            <video
                                                src={block.src}
                                                autoPlay loop muted playsInline
                                                className="w-full h-auto rounded-sm mb-2 border border-gray-800"
                                            />
                                        )}
                                        {block.type === 'code' && block.content && (
                                            <div className="bg-[#1e1e1e] border border-gray-700 rounded-md p-4 overflow-x-auto my-4 text-left">
                                                {block.language && (
                                                    <div className="text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider">{block.language}</div>
                                                )}
                                                <pre className="font-mono text-sm leading-relaxed text-[#d4d4d4] whitespace-pre-wrap break-all">
                                                    <code>{block.content}</code>
                                                </pre>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Footer */}
            <footer id="contact" className="bg-black text-white py-20 px-6 md:px-16 border-t-4 border-black font-['Outfit']">
                <div className="max-w-[1600px] mx-auto flex flex-col items-center text-center">
                    {/* Headline */}
                    <h2 className="font-bold text-xl md:text-2xl mb-8 tracking-widest text-zinc-500">HAVE AN IDEA?</h2>

                    {/* Main Action - Email Link */}
                    <a
                        href="mailto:lab@verygood-chocolate.com"
                        className="block w-full"
                    >
                        <h2 className="text-[5vw] md:text-[7vw] font-black leading-none hover:text-[#edc5c4] transition-colors duration-300 break-words">
                            LAB@VERYGOOD-<br className="md:hidden" />CHOCOLATE.COM
                        </h2>
                    </a>

                    {/* Bottom Row */}
                    <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 border-t-2 border-zinc-800 pt-8">
                        {/* Copyright */}
                        <div className="font-['Inter'] font-semibold text-sm tracking-wider text-zinc-500">
                            © 2026 JOHN DOE.
                        </div>

                        {/* Socials */}
                        <div className="flex gap-8">
                            <a href="#" className="flex items-center gap-2 font-bold text-lg hover:text-[#39ff14] transition-colors">
                                INSTAGRAM
                            </a>
                            <a href="#" className="flex items-center gap-2 font-bold text-lg hover:text-[#39ff14] transition-colors">
                                GITHUB
                            </a>
                        </div>

                        {/* Back to Top */}
                        <button
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="font-bold text-lg hover:text-[#39ff14] transition-colors"
                        >
                            BACK TO TOP ↑
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;

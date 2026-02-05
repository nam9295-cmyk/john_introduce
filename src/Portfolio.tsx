import React, { useRef, useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, ArrowRight } from 'lucide-react';
import Marquee from 'react-fast-marquee';
import { PROJECTS, LAB_ITEMS, ABOUT_DATA, Project, LocalizedString } from './data';

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
    const [isExpanded, setIsExpanded] = useState(false);
    const [isIframeLoading, setIsIframeLoading] = useState(true);
    const [lang, setLang] = useState<'en' | 'ko'>('en');
    const [isAboutOpen, setIsAboutOpen] = useState(false);

    // Translation Helper
    const t = (content?: LocalizedString) => {
        if (!content) return "";
        if (typeof content === 'string') return content;
        return content[lang];
    };

    // Reveal Animation Observer
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '50px' // Start slightly before
        });

        const bgElements = document.querySelectorAll('.reveal-item');
        bgElements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [isExpanded]); // Re-run when expanded changes to catch new lab items

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedProject || isAboutOpen) {
            document.body.style.overflow = 'hidden';
            setIsIframeLoading(true); // Reset loader on open
        } else {
            document.body.style.overflow = 'unset';
            setIsIframeLoading(true); // Reset loader on close too just in case
        }
    }, [selectedProject, isAboutOpen]);

    // About Modal History/Back Button Logic
    useEffect(() => {
        if (isAboutOpen) {
            window.history.pushState({ aboutOpen: true }, '');

            const handlePopState = () => {
                setIsAboutOpen(false);
            };

            window.addEventListener('popstate', handlePopState);
            return () => window.removeEventListener('popstate', handlePopState);
        }
    }, [isAboutOpen]);

    const handleAboutClose = () => {
        if (window.history.state?.aboutOpen) {
            window.history.back();
        } else {
            setIsAboutOpen(false);
        }
    };

    // Mobile Back Button Support (History API)
    useEffect(() => {
        if (selectedProject) {
            // Add history entry
            window.history.pushState({ modalOpen: true }, '');

            const handlePopState = () => {
                setSelectedProject(null);
            };

            window.addEventListener('popstate', handlePopState);

            return () => {
                window.removeEventListener('popstate', handlePopState);
            };
        }
    }, [selectedProject]);

    const handleManualClose = () => {
        if (window.history.state?.modalOpen) {
            window.history.back();
        } else {
            setSelectedProject(null);
        }
    };

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const scrollLeft = e.currentTarget.scrollLeft;
        // Item is 85vw.
        const itemWidth = window.innerWidth * 0.85;

        // Calculate index based on items size + gap (gap-4 = 16px)
        const gap = 16;
        const totalItemWidth = itemWidth + gap;

        const index = Math.round(scrollLeft / totalItemWidth);
        setCurrentSlide(index);
    };
    return (
        <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white font-['Outfit']">

            {/* Navigation */}
            <nav className="sticky top-0 z-50 bg-white border-b-4 border-black px-6 md:px-16 h-20 flex items-center justify-between">
                <div className="font-['Outfit'] font-black text-3xl tracking-tighter">JD.26</div>
                <div className="flex items-center gap-4 md:gap-8">
                    <div className="hidden md:flex gap-10">
                        {['WORKS', 'LABS', 'ABOUT', 'CONTACT'].map((link) => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase()}`}
                                onClick={(e) => {
                                    if (link === 'ABOUT') {
                                        e.preventDefault();
                                        setIsAboutOpen(true);
                                    }
                                }}
                                className="font-['Outfit'] font-extrabold text-lg hover:underline decoration-4 underline-offset-4"
                            >
                                {link}
                            </a>
                        ))}
                    </div>

                    {/* Language Toggle */}
                    <button
                        onClick={() => setLang(lang === 'en' ? 'ko' : 'en')}
                        className="border-2 border-black px-3 py-1 text-sm font-bold bg-[#ccff00] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
                    >
                        {lang === 'en' ? 'EN' : 'KR'}
                    </button>

                    {/* Mobile Menu Toggle Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden border-2 border-black p-2 hover:bg-black hover:text-white transition-colors z-50"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Full-Screen Menu Overlay */}
            <div className={`fixed inset-0 bg-black z-40 flex flex-col justify-center items-center gap-8 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
                {['WORKS', 'LABS', 'ABOUT', 'CONTACT'].map((link) => (
                    <a
                        key={link}
                        href={`#${link.toLowerCase()}`}
                        onClick={(e) => {
                            setIsMenuOpen(false);
                            if (link === 'ABOUT') {
                                e.preventDefault();
                                setIsAboutOpen(true);
                            }
                        }}
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
                            <div key={project.id} className={`${project.className} reveal-item`} onClick={() => setSelectedProject(project)}>
                                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                                    <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" alt="Abstract 3D" className="w-full h-full object-cover grayscale" />
                                </div>
                                <div className="relative z-10 w-full">
                                    <div className="w-full h-[200px] bg-gray-100 border-2 border-black mb-4 relative overflow-hidden group">
                                        <video
                                            src={project.videoSrc}
                                            poster={project.poster || project.imageSrc}
                                            preload="metadata"
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                                        />
                                        <div className="absolute inset-0 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] opacity-10 pointer-events-none"></div>
                                    </div>
                                </div>
                                <div className="relative z-10 flex flex-col md:flex-row md:justify-between md:items-end gap-2 md:gap-0 pt-10 md:pt-0">
                                    <h2 className="font-['Outfit'] font-black text-[11vw] md:text-5xl leading-[1.1] md:leading-[0.9] whitespace-pre-line">
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
                                className={`${project.className} reveal-item`}
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
                        <h2 className="font-['Outfit'] font-black text-6xl md:text-8xl leading-none md:leading-[0.9] tracking-tighter reveal-item">
                            BRIDGING<br />DESIGN &<br />TECHNOLOGY
                        </h2>
                    </div>

                    {/* Right: The Arsenal */}
                    <div>
                        <h3 className="font-['Outfit'] font-bold text-2xl mb-8 tracking-widest text-zinc-500">THE ARSENAL</h3>
                        <div className="flex flex-wrap gap-3">
                            {['Photoshop', 'Illustrator', 'After Effects', 'Premiere Pro', 'Blender', 'SketchUp', 'KeyShot 11', 'React', 'Tailwind', 'Antigravity', 'vibe coding'].map((tool) => (
                                <span key={tool} className="border-2 border-white px-4 py-2 font-['Outfit'] font-bold text-lg tracking-wide hover:bg-[#39ff14] hover:text-black hover:border-[#39ff14] transition-all duration-300 cursor-default reveal-item">
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
                    <div className="border-b-4 border-black mb-12 pb-4 reveal-item">
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
                        className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 md:block md:columns-3 md:gap-8 md:space-y-8 md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden pr-12 md:pr-0"
                    >
                        {(isExpanded ? LAB_ITEMS : LAB_ITEMS.slice(0, 6)).map((item, index, array) => {
                            const showDivider = isExpanded && (index === 0 || item.year !== array[index - 1].year);
                            const getCategoryColor = (cat = "") => {
                                const c = cat.toLowerCase();
                                if (c.includes('ai')) return 'text-yellow-400';
                                if (c.includes('3d')) return 'text-pink-400';
                                if (c.includes('package')) return 'text-cyan-400';
                                if (c.includes('graphic')) return 'text-orange-400';
                                if (c.includes('web')) return 'text-lime-400';
                                return 'text-white';
                            };

                            return (
                                <React.Fragment key={item.id}>
                                    {showDivider && (
                                        <div className="hidden md:block w-full [column-span:all] col-span-full py-12 border-b-4 border-black mb-8">
                                            <h3 className="text-6xl font-black italic tracking-tighter text-gray-200">
                                                YEAR_{item.year || '202X'}
                                            </h3>
                                        </div>
                                    )}
                                    <div className="min-w-[85vw] snap-center md:min-w-0 md:break-inside-avoid md:snap-align-none bg-white border-4 border-black p-4 group reveal-item lab-item">
                                        <div className={`bg-zinc-200 w-full ${item.height} mb-4 border-2 border-black relative overflow-hidden`}>
                                            <div className={`absolute top-2 left-2 px-2 py-0.5 text-[9px] font-bold bg-black rounded-sm uppercase z-10 ${getCategoryColor(item.category)}`}>
                                                {item.category || 'LAB'}
                                            </div>
                                            {item.imageUrl ? (
                                                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                                            ) : (
                                                <div className={`absolute inset-0 ${item.bgColor}`}></div>
                                            )}
                                        </div>
                                        <div className="flex justify-between items-end font-['Outfit']">
                                            <span className="font-bold text-xl">{item.title}</span>
                                            <span className="font-bold text-sm text-zinc-500">{item.date}</span>
                                        </div>
                                    </div>
                                </React.Fragment>
                            );
                        })}
                    </div>

                    {/* Mobile Gallery Controls (Progress & Fraction) */}
                    <div className="md:hidden mt-4 relative w-full mb-12">
                        {/* Progress Bar Container */}
                        <div className="w-full h-1 bg-gray-300 relative">
                            <div
                                className="absolute top-0 left-0 h-full bg-[#ccff00] transition-all duration-300"
                                style={{ width: `${((currentSlide + 1) / (isExpanded ? LAB_ITEMS.length : 6)) * 100}%` }}
                            />
                        </div>

                        {/* Fraction Indicator */}
                        <div className="absolute right-0 top-3 border-2 border-black bg-white px-2 py-1 font-['Outfit'] font-bold text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                            {currentSlide + 1} / {isExpanded ? LAB_ITEMS.length : 6}
                        </div>
                    </div>

                    {/* View All Button */}
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="w-full py-8 border-4 border-black font-black text-2xl hover:bg-[#ccff00] hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all mb-20 bg-white"
                    >
                        {isExpanded ? "CLOSE ARCHIVE" : `EXPLORE FULL ARCHIVE (${LAB_ITEMS.length}+)`}
                    </button>
                </div>
            </section>

            {/* Project Detail Modal */}
            {
                selectedProject && (
                    <div className="fixed inset-0 z-[60] bg-black text-white overflow-y-auto font-['Outfit'] animate-fadeIn">
                        <button
                            onClick={handleManualClose}
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
                                        <div className="w-full h-full relative overflow-hidden">
                                            {isIframeLoading && (
                                                <div className="absolute inset-0 flex items-center justify-center bg-zinc-900 z-10">
                                                    <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                                                </div>
                                            )}
                                            <div className="w-[200%] h-[200%] md:w-full md:h-full origin-top-left scale-[0.6] md:scale-100">
                                                <iframe
                                                    src={selectedProject.embedUrl}
                                                    title={selectedProject.title}
                                                    className="w-full h-full border-0"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                    allowFullScreen
                                                    onLoad={() => setIsIframeLoading(false)}
                                                />
                                            </div>
                                        </div>
                                    ) : selectedProject.videoSrc ? (
                                        <video
                                            src={selectedProject.videoSrc}
                                            poster={selectedProject.imageSrc}
                                            preload="metadata"
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
                                        {t(selectedProject.description)}
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
                                                    {t(block.content)}
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
                                                    preload="metadata"
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
                                                        <code>{t(block.content)}</code>
                                                    </pre>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )
            }

            {/* About Modal */}
            {isAboutOpen && (
                <div className="fixed inset-0 z-[60] bg-white text-black overflow-y-auto font-['Outfit'] animate-fadeIn">
                    {/* Close Button */}
                    <button
                        onClick={handleAboutClose}
                        className="fixed top-6 right-6 z-50 p-2 bg-white border-2 border-black rounded-full hover:bg-black hover:text-white transition-colors duration-300 transform hover:scale-110"
                    >
                        <X size={32} />
                    </button>

                    <div className="max-w-[1200px] mx-auto p-6 md:p-16 pt-20 md:pt-20 flex flex-col gap-20">
                        {/* Header Section */}
                        <div className="border-b-4 border-black pb-12">
                            <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.8] uppercase">
                                About<br />John Doe
                            </h1>
                            <p className="text-2xl md:text-4xl font-bold leading-tight max-w-4xl text-zinc-800">
                                {t(ABOUT_DATA.slogan)}
                            </p>
                        </div>

                        {/* Narrative */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 font-['Inter'] text-lg md:text-xl font-medium leading-relaxed text-zinc-700">
                            <div className="space-y-6">
                                {ABOUT_DATA.narrative[lang].slice(0, 2).map((p: string, i: number) => (
                                    <p key={i}>{p}</p>
                                ))}
                            </div>
                            <div className="space-y-6">
                                {ABOUT_DATA.narrative[lang].slice(2).map((p: string, i: number) => (
                                    <p key={i}>{p}</p>
                                ))}
                            </div>
                        </div>

                        {/* Timeline */}
                        <div>
                            <h2 className="text-4xl font-black mb-8 border-l-8 border-[#ccff00] pl-4">TIMELINE</h2>
                            <div className="flex flex-col border-t-2 border-black">
                                {ABOUT_DATA.timeline.map((item, i) => (
                                    <div key={i} className="flex flex-col md:flex-row md:items-baseline py-6 border-b-2 border-zinc-200 hover:bg-zinc-50 transition-colors group">
                                        <div className="md:w-1/4 text-2xl font-black text-[#ccff00] group-hover:text-black transition-colors">{item.year}</div>
                                        <div className="md:w-1/4 text-xl font-bold">{item.role}</div>
                                        <div className="md:w-2/4 text-zinc-500 font-['Inter']">{lang === 'en' ? item.desc : item.descKo}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Skills Grid */}
                        <div>
                            <h2 className="text-4xl font-black mb-8 border-l-8 border-[#39ff14] pl-4">TOOLS OF CHOICE</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {/* Design */}
                                <div className="border-4 border-black p-6 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow bg-zinc-50">
                                    <h3 className="text-2xl font-black mb-6 flex items-center gap-2">
                                        <div className="w-4 h-4 bg-pink-500"></div>
                                        3D & DESIGN
                                    </h3>
                                    <ul className="space-y-2 font-['Inter'] font-bold text-zinc-600">
                                        {ABOUT_DATA.skills.design.map((skill) => (
                                            <li key={skill} className="border-b border-zinc-300 pb-1">{skill}</li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Dev */}
                                <div className="border-4 border-black p-6 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow bg-zinc-50 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-2xl font-black mb-6 flex items-center gap-2">
                                            <div className="w-4 h-4 bg-cyan-500"></div>
                                            FRONT-END & VIBE CODING
                                        </h3>
                                        <ul className="space-y-3 font-['Inter'] font-bold text-zinc-600">
                                            {ABOUT_DATA.skills.dev.map((skill) => (
                                                <li key={skill} className="border-b border-zinc-300 pb-1">
                                                    {skill.includes('Vibe Coding') ? (
                                                        <span>
                                                            Intelligence Layer / <span className="bg-[#ccff00] text-black px-1 ml-1">VIBE CODING</span>
                                                        </span>
                                                    ) : (
                                                        skill
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <p className="mt-6 text-sm text-zinc-500 font-medium italic border-t-2 border-zinc-200 pt-4">
                                        "Using AI to bridge the gap between imagination and digital reality at the speed of thought."
                                    </p>
                                </div>

                                {/* Physical */}
                                <div className="border-4 border-black p-6 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-shadow bg-zinc-50">
                                    <h3 className="text-2xl font-black mb-6 flex items-center gap-2">
                                        <div className="w-4 h-4 bg-orange-500"></div>
                                        PHYSICAL
                                    </h3>
                                    <ul className="space-y-2 font-['Inter'] font-bold text-zinc-600">
                                        {ABOUT_DATA.skills.physical.map((skill) => (
                                            <li key={skill} className="border-b border-zinc-300 pb-1">{skill}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Footer in Modal */}
                        <div className="text-center pt-12 pb-20">
                            <button onClick={handleAboutClose} className="text-xl font-bold underline hover:text-[#ccff00] transition-colors">CLOSE ABOUT</button>
                        </div>
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

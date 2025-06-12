"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { FaInstagram, FaLinkedin, FaFacebook, FaWhatsappSquare, FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false)
    const pathname = usePathname()
    const showNavbar = ["/", "/login", "/content", "/events", "/discussion", "/subco", "/media", "/industry", "/research", "/content", "/advisor", "/faculty", "/training", "/conference", "/contactUs"].includes(pathname)

    return (
        <>
            {showNavbar && (
                <nav className="bg-slate-600 fixed py-2 top-0 left-0 w-full z-50 shadow-md">
                    <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-8 py-3">
                        {/* Logo and Brand */}
                        <div className="flex items-center gap-4">
                            <Link href={"/"}>
                                <Image className="rounded-xl" src={"/logo.jpg"} alt="genai coe logo" height={44} width={44} />
                            </Link>
                            <span className="font-semibold text-lg sm:text-xl text-white hidden sm:inline">IEM GENAI-CoE</span>
                        </div>

                        {/* Desktop Menu */}
                        <ul className="hidden lg:flex gap-6 items-center text-white text-base">
                            <Link href="/"><li className="font-semibold hover:underline">Home</li></Link>
                            <div
                                className="relative"
                                onMouseEnter={() => setIsDropdownOpen(true)}
                                onMouseLeave={() => setIsDropdownOpen(false)}
                            >
                                <button
                                    className="font-semibold hover:underline"
                                    tabIndex={0}
                                    onFocus={() => setIsDropdownOpen(true)}
                                    onBlur={() => setIsDropdownOpen(false)}
                                >
                                    Subcommittees
                                </button>
                                {isDropdownOpen && (
                                    <div className="absolute top-5 left-0 z-40"
                                         onMouseEnter={() => setIsDropdownOpen(true)}
                                         onMouseLeave={() => setIsDropdownOpen(false)}
                                    >
                                        <ul className="w-32 bg-slate-400 text-black rounded-lg shadow-lg">
                                            <Link href="/media"><li className="px-4 py-2 hover:bg-gray-200">Media</li></Link>
                                            <Link href="/industry"><li className="px-4 py-2 hover:bg-gray-200">Industry</li></Link>
                                            <Link href="/research"><li className="px-4 py-2 hover:bg-gray-200">Research</li></Link>
                                            <Link href="/training"><li className="px-4 py-2 hover:bg-gray-200">Training</li></Link>
                                            <Link href="/conference"><li className="px-4 py-2 hover:bg-gray-200">Conference</li></Link>
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <Link href="/content"><li className="font-semibold hover:underline">Content</li></Link>
                            <Link href="/events"><li className="font-semibold hover:underline">Events</li></Link>
                            <Link href="/contactUs"><li className="font-semibold hover:underline">Contact us</li></Link>
                        </ul>

                        {/* Social Icons (always visible) */}
                        <div className="hidden sm:flex justify-center items-center gap-4 text-2xl">
                            <Link className="text-white" href="https://www.linkedin.com/company/iem-uem-generative-ai-coe/" target='_blank' rel="noopener noreferrer"><FaLinkedin /></Link>
                            <Link className="text-white" href="https://www.instagram.com/iemgenai?igsh=MTRhMTdnYzVxcXB5NA==" target='_blank' rel="noopener noreferrer"><FaInstagram /></Link>
                            <Link className="text-white" href="https://www.facebook.com/share/15UTeakAgX/" target='_blank' rel="noopener noreferrer"><FaFacebook /></Link>
                            <Link className="text-white" href="https://whatsapp.com/channel/0029VavIA8lKbYMHjUPl1q2w" target='_blank' rel="noopener noreferrer"><FaWhatsappSquare /></Link>
                        </div>

                        {/* Hamburger for mobile */}
                        <button
                            className="lg:hidden text-white text-2xl ml-2"
                            onClick={() => {
                                setMobileMenuOpen(!mobileMenuOpen)
                                setMobileDropdownOpen(false)
                            }}
                            aria-label="Open menu"
                        >
                            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                        <div className="lg:hidden bg-slate-700 w-full px-4 py-6 flex flex-col gap-4 text-white text-base z-50">
                            <Link href="/" onClick={() => setMobileMenuOpen(false)}><div className="py-2">Home</div></Link>
                            <div>
                                <button
                                    className="w-full text-left font-semibold py-2"
                                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                                    tabIndex={0}
                                >
                                    Subcommittees
                                </button>
                                {mobileDropdownOpen && (
                                    <ul className="ml-4 flex flex-col gap-1 bg-slate-600 rounded-lg py-2">
                                        <li><Link href="/media" onClick={() => { setMobileMenuOpen(false); setMobileDropdownOpen(false); }}>Media</Link></li>
                                        <li><Link href="/industry" onClick={() => { setMobileMenuOpen(false); setMobileDropdownOpen(false); }}>Industry</Link></li>
                                        <li><Link href="/research" onClick={() => { setMobileMenuOpen(false); setMobileDropdownOpen(false); }}>Research</Link></li>
                                        <li><Link href="/training" onClick={() => { setMobileMenuOpen(false); setMobileDropdownOpen(false); }}>Training</Link></li>
                                        <li><Link href="/conference" onClick={() => { setMobileMenuOpen(false); setMobileDropdownOpen(false); }}>Conference</Link></li>
                                    </ul>
                                )}
                            </div>
                            <Link href="/content" onClick={() => setMobileMenuOpen(false)}><div className="py-2">Content</div></Link>
                            <Link href="/events" onClick={() => setMobileMenuOpen(false)}><div className="py-2">Events</div></Link>
                            <Link href="/contactUs" onClick={() => setMobileMenuOpen(false)}><div className="py-2">Contact us</div></Link>
                            <div className="flex gap-4 mt-4 text-2xl">
                                <Link className="text-white" href="https://www.linkedin.com/company/iem-uem-generative-ai-coe/" target='_blank' rel="noopener noreferrer"><FaLinkedin /></Link>
                                <Link className="text-white" href="https://www.instagram.com/iemgenai?igsh=MTRhMTdnYzVxcXB5NA==" target='_blank' rel="noopener noreferrer"><FaInstagram /></Link>
                                <Link className="text-white" href="https://www.facebook.com/share/15UTeakAgX/" target='_blank' rel="noopener noreferrer"><FaFacebook /></Link>
                                <Link className="text-white" href="https://whatsapp.com/channel/0029VavIA8lKbYMHjUPl1q2w" target='_blank' rel="noopener noreferrer"><FaWhatsappSquare /></Link>
                            </div>
                        </div>
                    )}
                </nav>
            )}
        </>
    )
}

export default Navbar
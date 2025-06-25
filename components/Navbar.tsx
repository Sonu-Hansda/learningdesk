'use client';

import Link from "next/link";
import Image from "next/image";
import {cn} from "@/lib/utils";
import {usePathname} from "next/navigation";
import {SignInButton, SignedIn, SignedOut, UserButton} from "@clerk/nextjs";
import {Menu, X} from "lucide-react";
import {useState} from "react";

const navItems: { label: string, href: string }[] = [
    {label: 'Home', href: '/'},
    {label: 'Learning Companions', href: '/companions'},
];

const Navbar = () => {
    const pathName = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={'flex items-center justify-between p-4 relative bg-white'}>
            {/* Backdrop overlay */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
                    onClick={() => setIsMenuOpen(false)}
                    aria-hidden="true"
                />
            )}

            <div className="flex items-center">
                <Link href="/">
                    <Image src="/images/logo.svg" width={42} height={42} alt={'logo'} className="z-20 relative"/>
                </Link>
            </div>

            {/* Mobile menu button */}
            <button
                className="md:hidden z-40 relative"
                onClick={toggleMenu}
                aria-label="Toggle menu"
            >
                {isMenuOpen ? <X size={24}/> : <Menu size={24}/>}
            </button>

            {/* Mobile menu */}
            <div className={cn(
                "fixed top-0 left-0 w-full h-full bg-white z-35 transform transition-transform duration-300 ease-in-out pt-20 px-6",
                "md:hidden",
                isMenuOpen ? "translate-x-0" : "-translate-x-full",
                "shadow-lg overflow-y-auto"
            )}>
                <div className="flex flex-col space-y-6">
                    {navItems.map((item, idx) => (
                        <Link
                            href={item.href}
                            key={idx}
                            className={cn(
                                "text-lg font-medium hover:text-primary transition-colors",
                                pathName === item.href && 'text-primary font-semibold'
                            )}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.label}
                        </Link>
                    ))}
                    <div className="flex flex-col space-y-4 pt-4 border-t border-gray-100">
                        <SignedOut>
                            <SignInButton>
                                <button
                                    className={'w-full border border-black py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer'}>Sign
                                    In
                                </button>
                            </SignInButton>
                        </SignedOut>
                        <SignedIn>
                            <div className="flex items-center">
                                <span className="mr-2">Your Account</span>
                                <UserButton/>
                            </div>
                        </SignedIn>
                    </div>
                </div>
            </div>

            {/* Desktop menu */}
            <div className={'hidden md:flex items-center space-x-8'}>
                {navItems.map((item, idx) => (
                    <Link
                        href={item.href}
                        key={idx}
                        className={cn(
                            "hover:text-primary transition-colors",
                            pathName === item.href && 'text-primary font-semibold'
                        )}
                    >
                        {item.label}
                    </Link>
                ))}
                <SignedOut>
                    <SignInButton>
                        <button
                            className={'border border-black py-1.5 px-4 rounded-lg mr-2 hover:bg-gray-50 transition-colors cursor-pointer'}>Sign
                            In
                        </button>
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    <UserButton/>
                </SignedIn>
            </div>
        </nav>
    );
}

export default Navbar;
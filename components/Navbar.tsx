'use client';

import Link from "next/link";
import Image from "next/image";
import {cn} from "@/lib/utils";
import {usePathname} from "next/navigation";

const navItems: {label:string, href:string}[] = [
    {label: 'Home', href: '/'},
    {label: 'Learning Companions', href: '/companions'},
];

const Navbar = () => {
    const pathName = usePathname();
    return (
        <nav className={'flex items-center justify-between p-4'}>
            <Image src="/images/logo.svg" width={42} height={42} alt={'logo'} />
            <div className={'flex items-center space-x-8'}>
                {navItems.map((item, idx)=>(
                <Link href={item.href} key={idx} className={cn(pathName === item.href) && 'text-primary font-semibold'}>{item.label}</Link>
                ))}
                <Link className={'border border-black py-1.5 px-4 rounded-lg'} href={'/sign-in'}>Sign In</Link>
            </div>
        </nav>
    );
}

export default Navbar;
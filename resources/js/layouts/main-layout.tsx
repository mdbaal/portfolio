import { NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@radix-ui/react-navigation-menu';
import { Copyright } from 'lucide-react';
import {type ReactNode} from 'react';

interface AppLayoutProps {
    children: ReactNode;
}

const navItems:NavItem[] = [
    {
        id: 0,
        title: "Home",
        href: "/",
        isActive: true,
    },
    // {
    //     title: "Wordpress",
    //     href: "/wordpress",
    // },
    // {
    //     title: "Laravel",
    //     href: "/laravel",
    // },
    {
        id: 3,
        title: "Over mij",
        href: "/about",
    },
    // {
    //     title: "Contact",
    //     href: "/contact",
    // }
]

export default function MainLayout( {children, ...props}: AppLayoutProps) {
    
    return (
    <div className='bg-dark' { ...props }>
    <header>
        <NavigationMenu className='py-5 mb-5 shadow bg-dark-bg'>
            <NavigationMenuList className='flex flex-row gap-5 max-w-screen-xl mx-auto'>
                {navItems.map((item,index) => (
                    item.isActive ? (
                        <NavigationMenuItem key={item.id} className='rounded border-b-2 border-primary even:border-accent shadow-xl p-2 text-center bg-primary-hover even:bg-accent-hover text-white '>
                            <Link href={item.href}>
                                {item.title}
                            </Link>
                        </NavigationMenuItem>
                    ):(
                        <NavigationMenuItem key={item.id} className='rounded border-b-2 border-primary even:border-accent shadow-xl p-2 bg-white  text-center hover:bg-primary-hover hover:even:bg-accent-hover hover:text-white '>
                            <Link href={item.href}>
                                {item.title}
                            </Link>
                        </NavigationMenuItem>
                    )
                ))}
            </NavigationMenuList>
        </NavigationMenu>
    </header>
    <main className='max-w-screen-xl mx-auto'>
        {children}
    </main>
    <footer className='bg-dark-bg text-light min-h-10 p-2'>
        <span className='flex flex-row gap-2 text-muted'><Copyright /> Mirco Baalmans 2025</span>
    </footer>
    </div>
    );
}
import { Head, Link, usePage } from '@inertiajs/react';
import MainLayout from '@/layouts/main-layout';
import Heading from '@/components/heading';

export default function Contact() {
    return (  
        <MainLayout>
                <Head title="Contact">
                    
                </Head>

                <div className='min-h-screen'>
                    <div className='mb-10'>
                        <h1 className='text-light text-7xl' >Contact</h1>
                        <div className='w-1/2 min-h-1 bg-accent rounded mt-4'></div>
                     </div>
                    <div className='flex flex-col gap-10'>
                        <div className='bg-dark-bg rounded-lg p-5'>
                            <p className='text-white'>
                                Mocht je na het bekijken van mijn portfolio contact op willen nemen.
                                Dan ben ik voor nu alleen te bereiken via <a href="https://www.linkedin.com/in/mircobaalmans/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            </p>
                        </div>
                    </div>
                </div>
        </MainLayout>
    );
}
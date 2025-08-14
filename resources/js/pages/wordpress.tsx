import { Head, Link, usePage } from '@inertiajs/react';
import MainLayout from '@/layouts/main-layout';
import Heading from '@/components/heading';

export default function Wordpress() {
    return (  
        <MainLayout>
                <Head title="Wordpress">
                    
                </Head>

                <div className='min-h-screen'>
                    <div className='mb-10'>
                        <h1 className='text-light text-7xl' >Wordpress</h1>
                        <div className='w-1/2 min-h-1 bg-accent rounded mt-4'></div>
                     </div>
                    <div className='flex flex-col gap-10'>
                        <div className='bg-dark-bg rounded-lg p-5'>
                            <p className='text-white'>
                                In de afgelopen 2 jaar heb ik gewerkt met WordPress en WooCommerce, waarbij ik ervaring heb opgedaan in het ontwikkelen en aanpassen van functionaliteiten. <br/> Ik heb onder andere meegewerkt aan een plugin die WooCommerce koppelt aan bol.com. Mijn interesse ligt vooral in het ontwikkelen van plugins, waarbij ik graag verdiepende kennis opdoe van WordPress en WooCommerce. <br/><br/>Daarnaast heb ik in eigen projecten de basis onderzocht van het maken van Classic Themes en Block Themes met behulp van AI.
                            </p>
                        </div>
                    </div>
                </div>
        </MainLayout>
    );
}
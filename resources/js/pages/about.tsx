import { Head, Link, usePage } from '@inertiajs/react';
import MainLayout from '@/layouts/main-layout';
import Heading from '@/components/heading';

export default function Wordpress() {
    return (  
        <MainLayout>
                <Head title="Over mij">
                    
                </Head>

                <div className='min-h-screen'>
                    <div className='mb-10'>
                        <h1 className='text-light text-7xl' >Over mij</h1>
                        <div className='w-1/2 min-h-1 bg-accent rounded mt-4'></div>
                     </div>
                    <div className='flex flex-col gap-10'>
                        <div className='bg-dark-bg text-white rounded-lg p-5'>
                            <p>
                                Ik ben een back-end developer met ervaring in <strong>PHP</strong>, <strong>WordPress</strong> en <strong>Laravel</strong>, en een sterke interesse in <strong>C#</strong>. 
                                In WordPress heb ik ruim twee jaar gewerkt met WooCommerce en onder andere bijgedragen aan de ontwikkeling van een plugin die WooCommerce koppelt aan bol.com. 
                                Daarnaast heb ik de basis verkend van Classic Themes.
                                <br /><br />
                                Zoals al vaker benoemd is mijn portfolio is gebouwd met <strong>Laravel 12</strong> in combinatie met <strong>Inertia</strong> en <strong>React</strong>, 
                                met als doel mijn kennis van React uit te breiden en later codevoorbeelden en demo’s te delen. 
                                Op mijn GitHub is ook een eerder Laravel-project te vinden waarmee ik bankrekening-exports kan importeren en visualiseren in een eigen dashboard.
                                <br /><br />
                                Ik ben probleemoplossend, sociaal, gestructureerd en leergierig, en wil me in het algemeen verder ontwikkelen als developer. 
                                Via deze links ben ik te vinden op <a href="https://www.linkedin.com/in/mircobaalmans/" target="_blank" rel="noopener noreferrer">LinkedIn</a> 
                                 en <a href="https://github.com/mdbaal" target="_blank" rel="noopener noreferrer">GitHub</a>.
                            </p>
                        </div>
                    </div>
                </div>
        </MainLayout>
    );
}
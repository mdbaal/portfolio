import { Head, Link, usePage } from '@inertiajs/react';
import MainLayout from '@/layouts/main-layout';
import Heading from '@/components/heading';

export default function Laravel() {
    return (  
        <MainLayout>
                <Head title="Laravel">
                    
                </Head>

                <div className='min-h-screen'>
                    <div className='mb-10'>
                        <h1 className='text-light text-7xl' >Laravel</h1>
                        <div className='w-1/2 min-h-1 bg-primary rounded mt-4'></div>
                     </div>
                    <div className='flex flex-col gap-10'>
                        <div className='bg-dark-bg rounded-lg p-5'>
                            <p className='text-white'>
                                Ik heb door middel van hobby projecten wat kennis met <strong>Laravel</strong>, waarbij mijn huidige portfolio is ontwikkeld in <strong>Laravel 12</strong> met gebruik van <strong>Inertia</strong> en <strong>React</strong>. 
                                Dit project had als doel om mijn kennis van React te vergroten en later codevoorbeelden en demo’s te kunnen delen om mijn vaardigheden te tonen. 
                                <br/><br/>Op mijn GitHub staat een eerder Laravel-project waarin ik een export van mijn bankrekening kan importeren en via een eigen dashboard mijn rekening kan inzien met grafieken. 
                                Daarnaast heb ik beperkte ervaring met <strong>Jetstream</strong> en <strong>Filament</strong>, met de intentie om mijn kennis van deze tools verder uit te breiden.
                            </p>
                        </div>
                        <div className='bg-dark-bg text-light rounded-lg p-5'>
                            <h2 className=' text-3xl'>Financial Dashboard</h2>
                            <p>
                                Zoals al benoemd is deze portfolio een project waar in ik React aan het leren ben en om te laten zien wat ik kan en hoe ik werk.<br/>
                                En natuurlijk wil ik hier andere projecten laten zien en delen.
                            </p>

                            <a className='mt-5 block bg-accent w-fit p-2 rounded' href='https://github.com/mdbaal/portfolio'>Naar project</a>
                        </div>

                        <div className='bg-dark-bg text-light rounded-lg p-5'>
                            <h2 className=' text-3xl'>Financial Dashboard</h2>
                            <p>
                                Een van mijn eerste laravel projecten die ik heb gedaan. Het doel was om voor mijzelf een dashboard te maken waar ik makkelijk en snel kon zien waar mijn geld heen gaat en waar ik het meeste geld aan uit gaf.
                                Het idee is om een nieuwe versie te maken met dezelfde starterpack als deze website of door middel van Filament.
                            </p>

                            <a className='mt-5 block bg-accent w-fit p-2 rounded' href='https://github.com/mdbaal/FinancialDashboard'>Naar project</a>
                        </div>
                    </div>
                </div>
        </MainLayout>
    );
}
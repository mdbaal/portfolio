import { Head, Link, usePage } from '@inertiajs/react';
import MainLayout from '@/layouts/main-layout';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { SiteBlock, Project, WelcomeProps } from '@/types';



export default function Welcome({ siteBlocks, projects }: WelcomeProps) {
    return (
        <MainLayout>
            <Head title="Welkom">

            </Head>

            <div className="flex min-h-screen flex-col" >
                <div className='mx-auto text-center w-full animate-fade-in-left mb-5'>
                    <h1 className="text-6xl text-light mb-2">Welkom op mijn portfolio</h1>
                    <h2 className="text-5xl text-muted">Mirco Baalmans</h2>
                    <div className='w-1/2 min-h-1 bg-gradient-to-r from-primary to-accent rounded mx-auto'></div>
                </div>

                { <div className="my-16 mx-auto w-full max-w-3xl rounded-xl bg-dark-bg border-special p-8 ">
                    <div>
                        <p className="text-lg md:text-xl text-white font-medium text-center">
                            Dit is mijn portfolio website. Via hier wil ik laten zien wat ik kan en waar mijn interesses liggen als developer.<br />
                            Ook de website zelf is deel van het showcasen. Gemaakt in Laravel 12 met React met als doel verder leren in Laravel.<br/><br/>

                            Momenteel ben ik opzoek naar een nieuwe uitdaging waar ik mij verder kan ontwikkelen als back-end/Laravel developer.
                        </p>
                    </div>
                </div>}

                <div className='grid auto-rows-min gap-5 md:grid-cols-2 mt-10 text-light'>
                    {siteBlocks.map((item, index) => (
                        index !== 0 && (index % 4 === 1 || index % 4 === 2) ? (
                            <Card key={item.id} className='bg-dark-bg border-accent border-b-5 transition ease-in-out hover:scale-105'>
                                <CardHeader className='text-center text-2xl'>
                                    <CardTitle>{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    {item.description}
                                </CardContent>
                            </Card>
                        ) : (
                            <Card key={item.id} className='bg-dark-bg border-primary border-b-5 transition ease-in-out hover:scale-105'>
                                <CardHeader className='text-center text-2xl'>
                                    <CardTitle>{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    {item.description}
                                </CardContent>
                            </Card>
                        )

                    ))}
                </div>

                <div className='flex flex-col my-10 text-light gap-5'>
                    <h2 className='text-4xl'>Projecten</h2>
                    {projects.map((project) => (
                        <a key={project.id} href={project.link} className='flex flex-row max-h-[190px] h-fit bg-dark-bg rounded-xl p-5 hover:bg-dark-bg/70'>
                            <div className='w-2/12'>
                                <img className='w-[150px] h-[150px] bg-muted' src={project.img} alt='project image' />
                            </div>
                            <div className='w-10/12 border-l-2  border-accent hover:border-primary px-5'>
                                <strong>{project.title}</strong>
                                <p className='max-w-full max-h-full overflow-y-hidden break-words'>{project.description}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </MainLayout>
    );
}


// Add alternating color borders
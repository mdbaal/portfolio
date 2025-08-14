import { Head, Link, usePage } from '@inertiajs/react';
import MainLayout from '@/layouts/main-layout';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';


const blocks = [
    {
        title: 'Github',
        description: "Hello",
    },
    {
        title: 'Wordpress Plugin',
        description: "Hello",
    },
    {
        title: 'Wordpress Thema',
        description: "Hello",
    },
    {
        title: 'Laravel',
        description: "Hello",
    },
]

const projects = [
    {
        titel: "Project 1",
        description: "",
        img: "",
        link: "#"
    },
    {
        titel: "Project 2",
        description: "",
        img: "",
        link: "#"
    },
    {
        titel: "Project 3",
        description: "",
        img: "",
        link: "#"
    },
    {
        titel: "Project 4",
        description: "",
        img: "",
        link: "#"
    },
]

export default function Welcome() {
    return (

        <MainLayout>
            <Head title="Welcome">

            </Head>

            <div className="flex min-h-screen flex-col" >
                <div className='mx-auto text-center w-full animate-fade-in-left'>
                    <h1 className="text-7xl text-light mb-2">Welkom</h1>
                    <h2 className="text-5xl text-light">Portfolio Mirco Baalmans</h2>
                    <div className='w-1/2 min-h-1 bg-gradient-to-r from-primary to-accent rounded mx-auto'></div>
                </div>

                <div className="my-16 mx-auto w-full max-w-3xl rounded-xl bg-gradient-to-br from-primary/80 to-accent/80 p-8 ">
                    <div>
                        <p className="text-lg md:text-xl text-white font-medium text-center">
                            Dit is mijn portfolio website. Via hier wil ik laten zien wat ik kan en waar mijn interesses liggen als developer.<br />
                            Ook de website zelf is deel van het showcasen. Gemaakt in Laravel 12 met React met als doel verder leren in Laravel.
                        </p>
                    </div>
                </div>

                <div className='grid auto-rows-min gap-5 md:grid-cols-2 mt-10 text-light'>
                    {blocks.map((item, index) => (
                        index !== 0 && (index % 4 === 1 || index % 4 === 2) ? (
                            <Card className='bg-dark-bg border-accent border-b-5 transition ease-in-out hover:scale-105'>
                                <CardHeader className='text-center text-2xl'>
                                    <CardTitle>{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    {item.description}
                                </CardContent>
                            </Card>
                        ) : (
                            <Card className='bg-dark-bg border-primary border-b-5 transition ease-in-out hover:scale-105'>
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
                    {projects.map((project, index) => (
                        <a href={project.link} className='flex flex-row max-h-[190px] h-fit bg-dark-bg rounded-xl p-5 hover:bg-dark-bg/70'>
                            <div className='w-2/12'>
                                <img className='w-[150px] h-[150px] bg-muted' src={project.img} alt='project image' />
                            </div>
                            <div className='w-10/12 border-l-2  border-accent hover:border-primary px-5'>
                                <strong>{project.titel}</strong>
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
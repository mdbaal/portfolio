<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Inertia\Inertia;
use Inertia\Response;

class PageController extends Controller
{
    private array $siteBlocks = [
        [
            'id' => 0,
            'title'=> 'Github',
            'description' => "Kijk op mijn github om direct alle projecten te zien.",
        ],
        [
            'id' => 1,
            'title'=> 'Wordpress Plugins',
            'description' => "Ik heb twee jaar ervaring met het werken aan Wordpress/WooCommerce plugins. Waaronder een waar ik een koppeling heb gemaakt met de bol.com api. Op deze website komen ook eventuele eigen projecten te staan.",
        ],
        [
            'id' => 2,
            'title'=> 'Wordpress Themas',
            'description' => "Ook heb ik kort uit eigen interesse gekeken naar het ontwikkelen van een classic thema en met behulp van AI hoe het zou werken om een Block thema te maken.",
        ],
        [
            'id' => 3,
            'title'=> 'Laravel',
            'description' => "Bij laravel ligt mijn grootste interesse momenteel. Zoals al benoemd is deze website een oefening om te werken met React en heb het plan om ook met React v2 te maken van mijn financeel dashboard.",
        ],
    ];

    private array $projects = [
        [
            'id' => 1,
            'title' => 'Portfolio Laravel 12, Inertia and React',
            'beschrijving' => "",
            'img' => '',
            'link' => "",
        ],
        [
            'id' => 2,
            'title' => 'Financial Dashboard',
            'beschrijving' => "",
            'img' => '',
            'link' => "",
        ]
    ];

    public function Welcome(){
        return Inertia::render('welcome', ['siteBlocks' => $this->siteBlocks , 'projects' => $this->projects,]);
    }
    
    // For later implementation
    // public function Wordpress(){
    //     return Inertia::render('wordpress');

    // }

    // public function Laravel(){
    //     return Inertia::render('laravel');

    // }

    public function About(){
        return Inertia::render('about');

    }

    // public function Contact(){
    //     return Inertia::render('contact');

    // }
}

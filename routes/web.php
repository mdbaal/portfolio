<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PageController;


Route::get('/', [PageController::class,"Welcome"])->name('home');

// Route::get('/wordpress',[PageController::class,'Wordpress'])->name('wordpress');

// Route::get('/laravel',[PageController::class,'Laravel'])->name('laravel');

Route::get('/about',[PageController::class,'About'])->name('about');

// Route::get('/contact',[PageController::class,'Contact'])->name('contact');
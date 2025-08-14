<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/wordpress',function() {
    return Inertia::render('wordpress');
})->name('wordpress');

Route::get('/laravel',function() {
    return Inertia::render('laravel');
})->name('laravel');

Route::get('/over-mij',function() {
    return Inertia::render('about');
})->name('about');

// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::get('dashboard', function () {
//         return Inertia::render('dashboard');
//     })->name('dashboard');
// });

// require __DIR__.'/settings.php';
// require __DIR__.'/auth.php';

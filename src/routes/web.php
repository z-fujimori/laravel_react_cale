<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TestController;
use App\Http\Controllers\DefaultController;
use App\Http\Controllers\PostController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', [DefaultController::class, 'dashboard'])->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('auth')->prefix('test')->name('test.')->group(function () {
    Route::get('/', [TestController::class, 'index'])->name('index');
    Route::post('/hey', [TestController::class, 'hey']);
    Route::get('/modal1', [TestController::class, 'modal1'])->name('modal1');
    Route::get('/modal2', [TestController::class, 'modal2'])->name('modal2');

    Route::get('/post', [PostController::class, 'index'])->name('post');
    Route::post('/post', [PostController::class, 'store']);
    Route::get('/test/post/getall', [PostController::class, 'allget']);
});

require __DIR__.'/auth.php';

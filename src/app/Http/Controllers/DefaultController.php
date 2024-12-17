<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Log;
use Inertia\Inertia;

class DefaultController extends Controller
{
    public function dashboard(Log $log){
        return Inertia::render('Dashboard', ['logs'=>$log->get()]);
    }
}

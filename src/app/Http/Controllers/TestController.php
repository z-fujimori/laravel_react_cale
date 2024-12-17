<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class TestController extends Controller
{
    public function index(){
        return Inertia::render("Test/Index");
    }

    public function hey(Request $request){
        // dd($request->name);
        $name = $request->name;
        return response()->json(["reply"=>"hey".$name]);
    }

    public function modal1(){
        return Inertia::render("Modal1/ModalMain");
    }
    public function modal2(){
        return Inertia::render("Modal2/ModalMain");
    }
}

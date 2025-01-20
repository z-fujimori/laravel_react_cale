<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Post;
use Auth;

class PostController extends Controller
{
    //
    public function index() {
        return Inertia::render("Post/Index");
    }

    public function store(Request $request, Post $post) {
        // dd(Auth()->user()->id);
        $input = $request->all();
        $input["user_id"] = Auth()->user()->id;
        // dd($input);
        $post->fill($input)->save();
        return response()->json([$post]);
    }

    public function allget(Post $post) {

    }
}

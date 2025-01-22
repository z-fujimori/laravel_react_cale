<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Post;
use App\Models\PostLike;
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
        $posts = $post->with('user','post_likes')->get();
        $posts = $posts->map(function ($post){
            $isLike = $post->post_likes->filter(function($like){
                return $like["user_id"] = Auth()->user()->id;
            });
            if ($isLike->isEmpty()) {
                $post["isLike"] = false;
            } else {
                $post["isLike"] = true;
            }
            $post["likeCount"] = $post->post_likes->count();
            return $post;
        });

        return response()->json(["posts"=>$posts]);
    }

    public function post_like(Post $post){
        $user_id = Auth()->user()->id;
        $like = $post->post_likes()->where('user_id', $user_id)->first();
        if ($like) {
            $like->delete();
            $message = "delete like";
        } else {
            $post_like = new PostLike;
            $input = ["user_id"=>$user_id, "post_id"=>$post["id"]];
            $post_like->fill($input)->save();
            $message = "is like";
        }

        return response()->json(["message"=>$message]);
    }
}

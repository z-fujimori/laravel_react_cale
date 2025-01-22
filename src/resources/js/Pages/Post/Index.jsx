import React, { useEffect, useState } from 'react'
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from '@inertiajs/react';
import axios from 'axios';
import { Dot, Heart } from 'lucide-react';

import 'bootstrap/dist/css/bootstrap.min.css';

const Index = (props) => {

    const [posts, setPosts] = useState([]);
    const [inputBody, setInputBody] = useState("");

    const rodePost = async () => {
        await axios.get('/test/post/getall').then(res => {console.log(res.data);setPosts(res.data.posts)}).catch(err => {console.error(err)});
    }
    useEffect(() => {
        rodePost();
    }, [])

    async function onSubmitBody(){
        await axios.post('/test/post', {
            body: inputBody
            })
            .then(res => {
                console.log(res.data);
                rodePost();
            })
            .catch(err => {console.error(err)});
    }

    const likeButton = async (id) => {
        await axios.post(`/test/post/like/${id}`)
            .then(async (res) => {
                console.log(res.data);
                await rodePost();
            })
            .catch(err => {console.error(err)});
    }


	return (
		<Authenticated user={props.auth.user} header={
			<h2 className="font-semibold text-xl text-gray-800 leading-tight flex flex-col justify-center items-center">
				投稿
			</h2>
		}>
			<div class="d-flex flex-column align-items-center vh-100 ">

				<div class="w-50 bg-light border p-5 mb-3">
					<div class="card-body">
						This is some text within a card body.
					</div>
				</div>
				<div class="card">
					<div class="card-body">
						<input type="text" value={inputBody} onChange={(e) => setInputBody(e.target.value)} />
						<button class="ml-5 btn btn-outline-primary" onClick={onSubmitBody} >送信</button>
					</div>
				</div>
				<div class="card w-75 p-5">
					{posts.map(((post) =>
						<div class="card m-1">
							<div className='card-body d-flex justify-content-between items-center'>
                                <div class="d-flex justify-center items-center">
                                    <h5>{post.body}</h5>
                                    <h5 class="fs-6">({post.user.name})</h5>
                                </div>
                                <button onClick={() => likeButton(post.id)}>
                                    {post.isLike ?
                                        <div  className="d-flex justify-content-center align-items-center">
                                            <Heart />
                                            <h5 class="mb-0 ml-2">{post.likeCount}</h5>
                                        </div>
                                        :
                                        <div className="flex justify-content-center align-items-center">
                                            <Dot />
                                            <h5 class="mb-0 ml-2">{post.likeCount}</h5>
                                        </div>
                                    }
                                </button>
                            </div>
						</div>
					))}
				</div>

			</div>
		</Authenticated>
	)
}

export default Index

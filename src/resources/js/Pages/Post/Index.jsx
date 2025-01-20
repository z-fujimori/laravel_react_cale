import React, { useEffect, useState } from 'react'
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Link } from '@inertiajs/react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

const Index = (props) => {

    const [posts, setPosts] = useState(["taitle", "titl2"]);
    const [inputBody, setInputBody] = useState("");

    const rodePost = async () => {
        await axios.get('/test/post/getall').then(res => setPosts(res.data.posts)).catch(err => {console.error(err)});
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
							<div className='card-body'>{post}</div>
						</div>
					))}
				</div>

			</div>
		</Authenticated>
	)
}

export default Index

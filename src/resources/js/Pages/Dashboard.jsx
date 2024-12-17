import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import Hey from './Comp/Hey';

export default function Dashboard(props) {
    const [data,setData,post] = useForm({
        text: "",
    })

    function buttonClick (inputData) {
        console.log(inputData)
    }

    return (
        <AuthenticatedLayout
            user={props.auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <link rel="stylesheet" href="/css/bound.css" />
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">ログインしたよ!</div>
                    </div>
                </div>

                <div>
                    <button type='button' onClick={()=>buttonClick('おはよ')} className='bg-green-400 p-2 m-1' >おはよ</button>
                    <button type='button' onClick={()=>buttonClick('こんちわ')} className='bg-green-400 p-2 m-1' >こんちわ</button>
                </div>

                <div>
                    <Hey />
                </div>

                <form action="">
                    <input type="text" />
                    <input type="submit" />
                </form>

                <div>
                    {props.logs ? (props.logs.forEach(log => {
                        <div>
                            {log.id}
                        </div>
                    })) : (
                        <></>
                    )}
                </div>

                <div id="bound" class="w-full flex justify-end">
                    <div className='bounce'>
                        <img src="/img/rust_crab.png" alt="rust_img" className='w-[200px] h-[100px] object-contain' />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

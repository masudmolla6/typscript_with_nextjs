"use client";
import { useRouter } from 'next/navigation';

const Banner = () => {
    const router=useRouter();

    const handleBtn=()=>{
        const password=prompt("Ener Your Password");
        
        if(password=="1234"){
            console.log(router);
            router.push("/dashboard");
        }
    }
    return (
        <div className='text-center space-y-5 bg-linear-60 from-gray-500 to-blue-500 text-black p-10 rounded-2xl'>
            <h2 className='text-4xl font-bold'>Welcome To Typescript 🤖</h2>
            <button onClick={handleBtn} className='py-4 px-2 bg-sky-400 text-white rounded cursor-pointer hover:bg-gray-700 duration-200'>Share-Story</button>
        </div>
    );
};

export default Banner;
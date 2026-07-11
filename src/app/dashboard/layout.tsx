import Title from '@/components/Title';
import Link from 'next/link';
import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div className='grid grid-cols-12 gap-5 w-full min-h-screen my-4'>
            <div className='col-span-3 border-r-2'>
                <div className='flex justify-center'>
                    <Link href="/" className="text-lg text-center w-full">😊 Dev Storey</Link>
                </div>
                <div className='flex flex-col gap-6 mt-10'>
                    <Link className='px-4 py-2 bg-gray-700 text-white rounded-2xl mx-4 text-center' href="/dashboard/add-story">Add Story</Link>
                    <Link className='px-4 py-2 bg-gray-700 text-white rounded-2xl mx-4 text-center' href="/dashboard/my-profile">My Profile</Link>
                    <Link className='px-4 py-2 bg-gray-700 text-white rounded-2xl mx-4 text-center' href="/dashboard/settings">Settings</Link>
                </div>
            </div>
            <div className='col-span-9'>
                {children}
            </div>
        </div>
    );
};

export default DashboardLayout;
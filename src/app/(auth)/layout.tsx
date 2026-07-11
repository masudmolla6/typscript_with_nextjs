import React from 'react';

const AuthLayout = ({children}) => {
    return (
        <div className='flex min-h-screen gap-5 p-10'>
            <div className='flex-2'>
                {children}
            </div>
            <div className='flex flex-1 bg-blue-300 text-center justify-center items-center rounded-2xl'>
                <h2 className='text-4xl font-bold pt-6'>Welcome For Authentication🔒</h2>
            </div>
        </div>
    );
};

export default AuthLayout;
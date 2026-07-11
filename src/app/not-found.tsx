import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='flex justify-center items-center min-h-screen flex-col gap-3'>
            <h2>404 | You Page Not Found.</h2>
            <Link className='underline' href={"/"}>Go To Home Page.</Link>
        </div>
    );
};

export default NotFound;
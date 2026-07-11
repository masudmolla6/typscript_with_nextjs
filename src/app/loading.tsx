import React from 'react';

const loading = () => {
    return (
        <div className='flex justify-center items-center min-h-screen gap-3 text-4xl'>
            <h2>L <span className='inline-block animate-spin'>🔧</span></h2>
            <h2>ADING</h2>
        </div>
    );
};

export default loading;
import Title from '@/components/Title';
import React from 'react';

type TutorialPageProps={
    params:Promise<{
        slug?:string[];
    }>
}

const TutorialsPage = async({params}:TutorialPageProps) => {
    const {slug}=await params;
    console.log(slug);
    const [technology, topic, , page_no , subject]=slug || [];
    return (
        <div>
            <Title>{technology} Tutorials</Title>
            <h2>{topic}</h2>
            <div className='flex justify-between'>
                <h2 className='font-bold'>{subject}</h2>
                <p>Page No: {page_no}</p>
            </div>
        </div>
    );
};

export default TutorialsPage;
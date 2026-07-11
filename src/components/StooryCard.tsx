import Link from 'next/link';
import React from 'react';

const StoryCard = ({ story }) => {
    const { id, name, description, company, experience, skills, image } = story;

    return (
        <div className="bg-gray-400 shadow-lg rounded-2xl p-5 hover:scale-105 transition duration-300">
            
            {/* Image */}
            <img
                src={image} 
                alt={name} 
                className="w-20 h-20 rounded-full mx-auto mb-3"
            />

            {/* Name */}
            <h2 className="text-xl font-bold text-center">{name}</h2>

            {/* Role */}
            <p className="text-center text-gray-500">{description}</p>

            {/* Company */}
            <p className="text-center text-sm text-gray-400 mt-1">
                {company} • {experience}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 justify-center mt-3">
                {
                    skills.map((skill, index) => (
                        <span 
                            key={index}
                            className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md text-xs"
                        >
                            {skill}
                        </span>
                    ))
                }
            </div>
            <Link href={`/stories/${id}`} className='inline-block text-white mt-3 bg-blue-600 px-4 py-2 rounded-2xl text-sm text-center'>
                Read Full Story
            </Link>
        </div>
    );
};

export default StoryCard;
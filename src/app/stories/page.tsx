import StoryCard from '@/components/StoryCard';
import Title from '@/components/Title';
import { Story } from '@/types/story';
import React from 'react';

const Stories = () => {
    const devStories:Story[]=[
                {
                    "id": "1",
                    "name": "Rahim Uddin",
                    "description": "Frontend Developer",
                    "company": "TechSoft Ltd",
                    "experience": "2 years",
                    "skills": ["HTML", "CSS", "JavaScript"],
                    "story": "Started coding during college and fell in love with web development.",
                    "about": "Passionate about UI/UX and clean design.",
                    "image": "https://i.pravatar.cc/150?img=1"
                },
                {
                    "id": "2",
                    "name": "Karim Hasan",
                    "description": "Backend Developer",
                    "company": "CodeBase",
                    "experience": "3 years",
                    "skills": ["Node.js", "Express", "MongoDB"],
                    "story": "Began with C++ and transitioned to backend development.",
                    "about": "Enjoys solving server-side problems.",
                    "image": "https://i.pravatar.cc/150?img=2"
                },
                {
                    "id": "3",
                    "name": "Nusrat Jahan",
                    "description": "Full Stack Developer",
                    "company": "DevHub",
                    "experience": "4 years",
                    "skills": ["React", "Node.js", "MongoDB"],
                    "story": "Built multiple MERN projects during university.",
                    "about": "Loves building scalable apps.",
                    "image": "https://i.pravatar.cc/150?img=3"
                },
                {
                    "id": "4",
                    "name": "Sabbir Ahmed",
                    "description": "UI Designer",
                    "company": "Pixel Studio",
                    "experience": "2 years",
                    "skills": ["Figma", "Adobe XD"],
                    "story": "Started as a graphic designer.",
                    "about": "Focused on modern UI trends.",
                    "image": "https://i.pravatar.cc/150?img=4"
                },
                {
                    "id": "5",
                    "name": "Tanvir Islam",
                    "description": "React Developer",
                    "company": "NextGen IT",
                    "experience": "3 years",
                    "skills": ["React", "Tailwind", "Next.js"],
                    "story": "Learned React through online courses.",
                    "about": "Enjoys building dynamic UIs.",
                    "image": "https://i.pravatar.cc/150?img=5"
                },

                {
                    "id": "6",
                    "name": "Mim Akter",
                    "description": "Software Engineer",
                    "company": "SoftTech",
                    "experience": "2 years",
                    "skills": ["Java", "Spring Boot"],
                    "story": "Started with Java in university.",
                    "about": "Backend enthusiast.",
                    "image": "https://i.pravatar.cc/150?img=6"
                },
                {
                    "id": "7",
                    "name": "Rakib Hossain",
                    "description": "Frontend Developer",
                    "company": "WebCraft",
                    "experience": "1.5 years",
                    "skills": ["HTML", "CSS", "React"],
                    "story": "Self-taught developer.",
                    "about": "Loves animations.",
                    "image": "https://i.pravatar.cc/150?img=7"
                },
                {
                    "id": "8",
                    "name": "Jannat Sultana",
                    "description": "Full Stack Developer",
                    "company": "InnovateX",
                    "experience": "3 years",
                    "skills": ["MERN", "Firebase"],
                    "story": "Built freelance projects.",
                    "about": "Enjoys learning new tech.",
                    "image": "https://i.pravatar.cc/150?img=8"
                },
                {
                    "id": "9",
                    "name": "Imran Khan",
                    "description": "DevOps Engineer",
                    "company": "CloudOps",
                    "experience": "4 years",
                    "skills": ["Docker", "AWS"],
                    "story": "Moved from backend to DevOps.",
                    "about": "Automation lover.",
                    "image": "https://i.pravatar.cc/150?img=9"
                },
                {
                    "id": "10",
                    "name": "Shila Roy",
                    "description": "QA Engineer",
                    "company": "TestLab",
                    "experience": "2 years",
                    "skills": ["Selenium", "Manual Testing"],
                    "story": "Started as intern.",
                    "about": "Ensures quality.",
                    "image": "https://i.pravatar.cc/150?img=10"
                }
            ]
    return (
        <div>
            <Title>Explore Stories of Developers 💖</Title>
            <div className='grid gap-5 p-10'>
                {
                    devStories.map(story=><StoryCard key={story.id} story={story}></StoryCard>)
                }
            </div>
        </div>
    );
};

export default Stories;
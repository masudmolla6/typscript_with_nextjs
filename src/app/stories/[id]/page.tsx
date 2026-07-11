import React, { ReactNode } from 'react';
import Title from '../../../components/Title';

type StoryDetailsProps = {
  params: Promise<{
    id: string;
  }>;
};

const StoryDetails = async({params}:StoryDetailsProps) => {
    const {id}=await params;
    const devStories=[
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
                }]
    
    const story=devStories.find((story)=>story.id==id);

    if(!story){
        return <h2>Story is not found.</h2>
    }
    else{
        console.log(story);
    }

    const { name, description, company, experience, skills, story: fullStory, about, image } = story;


    // console.log(id);
    return (
        <div className='p-10 grid justify-center'>
            <Title>Feveloper Story Details.💝</Title>
                        {/* Card */}
            <div className="bg-gray-400 shadow-xl rounded-2xl p-6 mt-6 grid justify-center">

                {/* Top Section */}
                <div className="flex flex-col md:flex-row items-center gap-6">

                    <img
                        src={image}
                        alt={name}
                        width={120}
                        height={120}
                        className="rounded-full"
                    />

                    <div>
                        <h2 className="text-2xl font-bold">{name}</h2>
                        <p className="text-gray-500">{description}</p>
                        <p className="text-sm text-gray-400 mt-1">
                            {company} • {experience}
                        </p>
                    </div>
                </div>

                {/* Skills */}
                <div className="mt-5 text-center grid justify-center">
                    <h3 className="font-semibold mb-2">Skills 🚀</h3>
                    <div className="flex flex-wrap gap-2 text-center">
                        {
                            skills.map((skill, index) => (
                                <span
                                    key={index}
                                    className="bg-blue-100 text-blue-600 px-3 py-1 rounded-md text-sm"
                                >
                                    {skill}
                                </span>
                            ))
                        }
                    </div>
                </div>

                {/* Story */}
                <div className="mt-5 grid justify-center">
                    <h3 className="font-semibold mb-2 text-center">Journey 📖</h3>
                    <p className="text-gray-600">{fullStory}</p>
                </div>

                {/* About */}
                <div className="mt-5 grid justify-center">
                    <h3 className="font-semibold mb-2 text-center">About 👨‍💻</h3>
                    <p className="text-gray-600">{about}</p>
                </div>

            </div>
        </div>
    );
}; 

export default StoryDetails;
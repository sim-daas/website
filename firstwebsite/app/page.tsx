'use client'; // Add this line at the top

import { useState } from 'react';
import { Raleway, Sora } from 'next/font/google';

// Fonts
const primary = Raleway({
    variable: '--font-primary',
    subsets: ['latin'],
    display: 'swap'
});

const secondary = Sora({
    variable: '--font-secondary',
    subsets: ['latin'],
    display: 'swap'
});

// Interactive Modal Component
const Modal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
            <div className="bg-white p-6 rounded shadow-lg w-11/12 max-w-md">
                <h2 className="text-xl font-bold mb-4">Project Details</h2>
                <p>Here you can provide details about a specific project.</p>
                <button onClick={onClose} className="mt-4 text-blue-500 hover:underline">Close</button>
            </div>
        </div>
    );
};

export default function Page() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className={`${primary.variable} ${secondary.variable} p-8`}>
            {/* Introduction Section */}
            <section id="intro" className="mb-12">
                <h1 className="text-4xl font-bold mb-4">Hello, I'm [Your Name]</h1>
                <p className="text-lg mb-4">A passionate developer with a focus on creating beautiful and functional web applications.</p>
                <button onClick={() => setIsModalOpen(true)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Learn More</button>
            </section>

            {/* Projects Section */}
            <section id="projects" className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Example Project */}
                    <div className="bg-white p-4 rounded shadow">
                        <h3 className="text-xl font-semibold mb-2">Project Title</h3>
                        <p className="mb-4">Brief description of the project goes here. Highlight the main features and technologies used.</p>
                        <button onClick={() => setIsModalOpen(true)} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Details</button>
                    </div>
                    {/* Add more projects as needed */}
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Skills</h2>
                <ul className="list-disc ml-6">
                    <li>JavaScript / TypeScript</li>
                    <li>React / Next.js</li>
                    <li>Node.js</li>
                    <li>HTML & CSS</li>
                    <li>Git & GitHub</li>
                    {/* Add more skills as needed */}
                </ul>
            </section>

            {/* Contact Section */}
            <section id="contact" className="mb-12">
                <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
                <p className="mb-4">Feel free to reach out if you'd like to collaborate on a project or just want to connect!</p>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                        <input id="name" type="text" className="border border-gray-300 p-2 rounded w-full" />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                        <input id="email" type="email" className="border border-gray-300 p-2 rounded w-full" />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                        <textarea id="message" rows={4} className="border border-gray-300 p-2 rounded w-full" />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Send</button>
                </form>
            </section>

            {/* Modal Component */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
}

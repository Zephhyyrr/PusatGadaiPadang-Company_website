import React from 'react';
const Footer: React.FC = () => {
    return (
        <footer className="text-white py-6 h-200">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center md:items-start">
                    <img src="/path/to/logo.png" alt="Logo" className="h-10 mb-3" />
                    <span className="text-xl font-bold">2024 Usaha Gadai Mandiri</span>
                </div>
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                    <a href="#" className="hover:underline mb-1">Home</a>
                    <a href="#" className="hover:underline mb-1">About</a>
                    <a href="#" className="hover:underline mb-1">Services</a>
                    <a href="#" className="hover:underline mb-1">Contact</a>
                </div>
                <div className="flex flex-col items-center md:items-start">
                    <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                    <p className="mb-1">1234 Street Name</p>
                    <p className="mb-1">City, State, 12345</p>
                    <p className="mb-1">Email: info@company.com</p>
                    <p className="mb-1">Phone: (123) 456-7890</p>
                </div>
            </div>
            <div className="container mx-auto text-center mt-4">
                <p className="text-sm">&copy; 2024 Usaha Gadai Mandiri. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
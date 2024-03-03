

export default function Contact() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
            <div className="text-3xl mb-4">Contact Us</div>
            <div className="text-xl mb-8">Have questions? Reach out to us!</div>
            <div className="bg-gray-800 p-4 rounded-lg">
                <div className="text-lg">Email: <a href="mailto:breezotechno@gmail.com" className="text-blue-400 hover:underline">breezotechno@gmail.com</a></div>
            </div>
        </div>
    );
}

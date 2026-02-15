import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';

const WelcomePage = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
           
           
            <motion.div
                className="text-center mt-25"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* Badge */}
                <motion.div
                    variants={itemVariants}
                    className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold mb-6"
                >
                    🌟 Best Tuition in the City
                </motion.div>

                {/* Title */}
                <motion.h1
                    variants={itemVariants}
                    className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-6 tracking-tight"
                >
                    Abbas <span className="text-blue-800">Tuition</span> Classes
                </motion.h1>

                {/* Description */}
                <motion.p
                    variants={itemVariants}
                    className="text-md md:text-md text-gray-600 max-w-2xl mx-auto mb-10"
                >
                    Sirf padhai nahi, hum banate hain Success Stories. Expert guidance aur
                    personalized learning har student ke liye.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
                >
                    <Link to={"/Login"} className="bg-gray-800 text-white px-8 py-3 rounded-xl font-bold hover:bg-gray-700 transition">
                        Login karen
                    </Link>
                    <Link to={"/Rajister"} className="bg-gray-100 text-gray-800 px-8 py-3 rounded-xl font-bold hover:bg-gray-200 transition">
                        Rajister karen
                    </Link>
                </motion.div>

                {/* Features */}
                <motion.div
                    variants={itemVariants}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-700"
                    // Ye animation har 2 second mein loop hogi
                    animate={{
                        y: [0, -10, 0], // 10px upar jayega fir wapas niche
                    }}
                    transition={{
                        duration: 1, // 2 second ka gap
                        repeat: Infinity, // Hamesha chalta rahega
                        ease: "easeInOut"
                    }}
                >
                    <div className="flex flex-col items-center">
                        <span className="text-3xl mb-2 text-blue-600">📚</span>
                        <span className="font-medium text-slate-800">Quality Notes</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-3xl mb-2 text-blue-600">👥</span>
                        <span className="font-medium text-slate-800">Small Batches</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-3xl mb-2 text-blue-600">🎓</span>
                        <span className="font-medium text-slate-800">Expert Mentors</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-3xl mb-2 text-blue-600">🏆</span>
                        <span className="font-medium text-slate-800">100% Result</span>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default WelcomePage;
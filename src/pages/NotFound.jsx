import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';

const NotFound = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-20 left-20 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl floating-element" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-glow-highlight/10 rounded-full blur-3xl floating-element" style={{ animationDelay: '2s' }} />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center relative z-10 px-4"
            >
                {/* Icon */}
                <motion.div
                    animate={{ rotate: [0, -5, 5, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    className="flex justify-center mb-6"
                >
                    <AlertTriangle size={80} className="text-accent-primary opacity-80" />
                </motion.div>

                {/* 404 */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="text-8xl md:text-9xl font-bold gradient-text mb-4"
                >
                    404
                </motion.h1>

                {/* Message */}
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-2xl font-semibold text-text-primary mb-3"
                >
                    Page Not Found
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-text-secondary mb-10 max-w-md mx-auto"
                >
                    The page you're looking for doesn't exist or has been moved.
                </motion.p>

                {/* Back to Home */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    <Link
                        to="/"
                        className="btn-primary inline-flex items-center gap-2"
                    >
                        <Home size={20} />
                        Back to Home
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default NotFound;

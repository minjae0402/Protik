import { motion } from 'framer-motion';
import "../styles/Page.css";
import React from 'react';

type PageProps = {
    children: React.ReactNode;
};

const Page: React.FC<PageProps> = ({ children }) => {
    return (
        <motion.div
            className="page"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
        >
            {children}
        </motion.div>
    );
};

export default Page;

import { motion } from 'framer-motion';
const Alert = ({ alerting }: {alerting: boolean}) => {
    const alertVariants = {
        hidden: { opacity: 0, y: '-100vh' },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: '-100vh' },
    };

    return (
        <motion.div
            variants={alertVariants}
            initial="hidden"
            animate= {alerting ? "visible" : "hidden"}
            exit="exit"
            className="fixed top-0 left-0 right-0 bg-[#30DD4C] text-white text-center p-4"
            transition={{ type: 'spring', stiffness: 120 }}
        > Message sent!</motion.div>
    );
};

export default Alert;
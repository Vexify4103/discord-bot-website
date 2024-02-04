// components/PrivacyPolicy.js
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			animate={{ opacity: 1 }}
		>
			<Head>
				<title>Privacy Policy | Lunio</title>
				<meta name="description" content="Privacy Policy page | Minimal and awesome discord music bot website created with ❤️ using NextJS" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<style>
					{`
            body {
              font-family: 'Arial', sans-serif;
              max-width: 800px;
              margin: 0 auto;
              padding: 20px;
              background-color: #202d49;
              color: white;
            }

            h1, h2 {
              color: #ffffff;
            }

            a {
              color: #00bfff;
            }
          `}
				</style>
			</Head>
			<Navbar />
			<section className="privacy-section">
				<h1 className="privacy-header h-color">Privacy Policy</h1>
				<div className="privacy-content p-color">{/* Paste the provided HTML content for Privacy Policy here */}</div>
			</section>
			<Footer />
		</motion.div>
	);
};

export default PrivacyPolicy;

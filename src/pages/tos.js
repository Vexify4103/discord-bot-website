// components/TermsOfService.js
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const TermsOfService = () => {
	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			animate={{ opacity: 1 }}
		>
			<Head>
				<title>Terms of Service | Lunio</title>
				<meta name="description" content="Terms of Service page | Minimal and awesome discord music bot website created with ❤️ using NextJS" />
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

            h1, h2, h3 {
              color: #ffffff;
            }

            a {
              color: #00bfff;
            }

            kbd {
              background-color: #1a1a1a;
              padding: 2px 5px;
              border-radius: 4px;
              color: #00bfff;
              font-size: 0.9em;
            }

            p {
              margin-bottom: 15px;
            }
          `}
				</style>
			</Head>
			<Navbar />
			<section className="terms-section">
				<h1 className="terms-header h-color">Terms of Service</h1>
				<div className="terms-content p-color">
					{/* Paste the provided HTML content for TOS here */}
					<h2>ACCEPTANCE OF TERMS</h2>
					<p>
						Welcome to Lunio Bot! These Terms of Service (“Terms”) govern your use of Lunio Bot, a Discord bot specialized in providing music playback during gameplay
						or work. By using Lunio Bot, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please refrain from using the bot.
					</p>

					{/* Add the rest of the HTML content here */}
				</div>
			</section>
			<Footer />
		</motion.div>
	);
};

export default TermsOfService;

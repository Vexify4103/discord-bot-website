import Link from 'next/link';
import { motion } from 'framer-motion';

const Showcase = () => {
	// Replace 'YOUR_DISCORD_BOT_INVITE_URL' with the actual invite URL of your Discord bot
	const discordBotInviteUrl = 'https://discord.com/api/oauth2/authorize?client_id=945030475779551415&permissions=61991952&scope=bot+applications.commands';

	// Replace 'YOUR_DISCORD_SERVER_INVITE_URL' with the actual invite URL of your Discord server
	const discordServerInviteUrl = 'https://discord.gg/rrqEFukVUZ';

	return (
		<motion.div
			initial={{
				opacity: 0,
			}}
			animate={{ opacity: 1 }}
		>
			<main className="showcase">
				<h1 className="showcase-header h-color">Lunio</h1>
				<h2 className="showcase-header-text h-color">The only discord bot you need!</h2>
				<p className="showcase-para p-color">The awesome discord music bots that will fill your needs in your discord server.</p>

				<div className="showcase-btn">
					<button className="btn">
						<Link href={discordBotInviteUrl}>
							<a className="h-color no-decoration">Invite now!</a>
						</Link>
					</button>

					<button className="btn">
						<Link href={discordServerInviteUrl}>
							<a className="h-color no-decoration">Join server!</a>
						</Link>
					</button>
				</div>
			</main>
		</motion.div>
	);
};

export default Showcase;

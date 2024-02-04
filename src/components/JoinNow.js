import Link from 'next/link';

const JoinNow = () => {
	// Replace 'YOUR_DISCORD_BOT_INVITE_URL' with the actual invite URL of your Discord bot
	const discordBotInviteUrl = 'https://discord.com/api/oauth2/authorize?client_id=945030475779551415&permissions=61991952&scope=bot+applications.commands';

	return (
		<>
			<section className="joinUs">
				<div className="h-color joinUs-header">
					<h3>Join us now!</h3>
				</div>
				<div className="joinUs-para p-color">Invite Lunio to your Discord server! </div>
				<button className="btn">
					<Link href={discordBotInviteUrl}>
						<a className="h-color no-decoration">Invite now!</a>
					</Link>
				</button>
			</section>
		</>
	);
};

export default JoinNow;

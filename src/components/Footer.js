import Link from 'next/link';
import Image from 'next/image';
import botOnlineStatus from '../utils/images/botStatus.svg';

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<div>
			<footer className="footer">
				<div className="footer-sec1">
					<div className="footer-header"></div>
					<div className="footer-items">
						<ul>
							<li>
								<Link className="p-color" href="/commands">
									/commands
								</Link>
							</li>
							<li>
								<Link className="p-color" href="#">
									/support
								</Link>
							</li>
							<li>
								<Link className="p-color" href="#">
									/discord-server
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<div className="footer-sec2">
					<hr />
					<div className="footer-sec2-link">
						<Link target="_blank" className="p-color no-decoration" href="https://top.gg/bot/945030475779551415">
							/topgg
						</Link>
						<Link className="p-color no-decoration" href="/tos">
							/tos
						</Link>
						<Link className="p-color no-decoration" href="/privacy">
							/privacy
						</Link>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;

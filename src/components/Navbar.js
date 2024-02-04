import Link from "next/link";

const Navbar = () => {
  return (
		<div>
			<navbar className="navbar">
				<nav className="navbar-header">
					<ul>
						<li>
							<Link className="h-color" href="/">
								Lunio
							</Link>
						</li>
					</ul>
				</nav>
				<nav className="navbar-items">
					<ul>
						<li>
							<Link className="p-color" href="/">
								/home
							</Link>
						</li>
						<li>
							<Link className="p-color" href="/commands">
								/commands
							</Link>
						</li>
						<li>
							<Link className="p-color" href="https://top.gg/bot/945030475779551415" target="_blank">
								/topgg
							</Link>
						</li>
					</ul>
				</nav>
			</navbar>
		</div>
  );
};

export default Navbar;

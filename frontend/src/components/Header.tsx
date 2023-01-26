import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '~/styles/Header.css'

function App() {
	const [openMenu, setOpenMenu] = useState<Boolean>(false);

	const handleOpenMenu = () => {
		setOpenMenu(!openMenu);
	};

	return (
		<header>
			<div className='title'>
				<ol>
					<li><Link className='link' to="/">Simple App</Link></li>
				</ol>
			</div>

			<div className='menu'>
				<button onClick={handleOpenMenu} type="button" className="z-20 space-y-2 relative">
					<div className={
						openMenu 
						? 'w-8 h-0.5 bg-white translate-y-2.5 rotate-45 duration-500 ease-in-out'
						: 'w-8 h-0.5 bg-white transition duration-500 ease-in-out'} />
					<div className={
						openMenu 
						? 'opacity-0 transition duration-500 ease-in-out' 
						: 'w-8 h-0.5 bg-white transition duration-500 ease-in-out'} />
					<div className={openMenu 
						? 'w-8 h-0.5 bg-white -rotate-45 transition duration-500 ease-in-out' 
						: 'w-8 h-0.5 bg-white transition duration-500 ease-in-out'} />
				</button>

				<nav className={
					openMenu
						? 'text-center fixed bg-slate-800/90 z-10 right-0 top-0 w-full h-screen flex flex-col justify-start pt-8  ease-linear duration-300'
						: 'fixed right-[-100%] ease-linear duration-300'
				}>
					{openMenu ? (
						<div>
							<ol className="mt-6">
								<li className='mt-4'><Link className='link' to="/todo">Todo</Link></li>
								<li className='mt-4'><Link className='link' to="/about">About</Link></li>
								<li className='mt-4'><Link className='link' to="/setting">Settings</Link></li>
							</ol>
						</div>) : undefined}
				</nav>

			</div>

		</header>
	);
}

export default App;
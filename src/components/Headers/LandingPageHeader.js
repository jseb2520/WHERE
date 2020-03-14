import React from 'react';

// reactstrap components
import {Button, Container} from 'reactstrap';

// core components

function LandingPageHeader() {
	let pageHeader = React.createRef();
	const videoSource = require('assets/video/World.mp4');

	React.useEffect(() => {
		if (window.innerWidth > 991) {
			const updateScroll = () => {
				let windowScrollTop = window.pageYOffset / 3;
				pageHeader.current.style.transform =
					'translate3d(0,' + windowScrollTop + 'px,0)';
			};
			window.addEventListener('scroll', updateScroll);
			return function cleanup() {
				window.removeEventListener('scroll', updateScroll);
			};
		}
	});
	return (
		<>
			<div className='page-header clear-filter' filter-color='black'>
				<div className='page-header-image' ref={pageHeader}>
					<video
						preload
						autoPlay='autoplay'
						loop='loop'
						muted
						style={{width: '100%', height: 'auto'}}
					>
						<source src={videoSource} type='video/mp4' />
					</video>
				</div>
				<div className='content-center'>
					<Container>
						<h1 className='text-accent'>Soluciones geoespaciales</h1>
						<div className='text-center'>
							<h3 className='description'>
								Potencializamos sus proyectos con soluciones tecnológicas
								innovadoras
							</h3>
						</div>
						<div className='category category-absolute'>
							<Button
								block
								className='btn-round'
								color='info'
								href='#contact'
								onClick={(e) => e.preventDefault()}
								size='lg'
							>
								Contact Us
							</Button>
						</div>
					</Container>
				</div>
			</div>
		</>
	);
}

export default LandingPageHeader;

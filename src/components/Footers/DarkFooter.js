/*eslint-disable*/
import React from 'react';

// reactstrap components
import {Container} from 'reactstrap';

function DarkFooter() {
	return (
		<footer className='footer' data-background-color='black'>
			<Container>
				<nav>
					<ul>
						<li>WHERE S.A.S</li>
					</ul>
				</nav>
				<div className='copyright' id='copyright'>
					© {new Date().getFullYear()}, WHERE S.A.S
				</div>
			</Container>
		</footer>
	);
}

export default DarkFooter;

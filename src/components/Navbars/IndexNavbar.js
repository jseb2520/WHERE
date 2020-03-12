import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
		const updateNavbarColor = () => {
			if (
				document.documentElement.scrollTop > 599 ||
				document.body.scrollTop > 599
			) {
				setNavbarColor('');
			} else if (
				document.documentElement.scrollTop < 600 ||
				document.body.scrollTop < 600
			) {
				setNavbarColor('navbar-transparent');
			}
		};
		window.addEventListener('scroll', updateNavbarColor);
		return function cleanup() {
			window.removeEventListener('scroll', updateNavbarColor);
		};
	});
  return (
		<>
			{collapseOpen ? (
				<div
					id='bodyClick'
					onClick={() => {
						document.documentElement.classList.toggle('nav-open');
						setCollapseOpen(false);
					}}
				/>
			) : null}
			<Navbar className={'fixed-top ' + navbarColor} expand='lg' color='accent'>
				<Container>
					<div className='navbar-translate'>
						<NavbarBrand href='/' id='navbar-brand' tag={Link}>
							WHERE
						</NavbarBrand>
						<button
							className='navbar-toggler navbar-toggler'
							onClick={() => {
								document.documentElement.classList.toggle('nav-open');
								setCollapseOpen(!collapseOpen);
							}}
							aria-expanded={collapseOpen}
							type='button'
						>
							<span className='navbar-toggler-bar top-bar'></span>
							<span className='navbar-toggler-bar middle-bar'></span>
							<span className='navbar-toggler-bar bottom-bar'></span>
						</button>
					</div>
					<Collapse
						className='justify-content-end'
						isOpen={collapseOpen}
						navbar
					>
						<Nav navbar>
							<UncontrolledDropdown nav>
								<DropdownToggle
									caret
									color='default'
									href='#pablo'
									nav
									onClick={(e) => e.preventDefault()}
								>
									<i className='now-ui-icons location_map-big mr-1'></i>
									<p>Servicios</p>
								</DropdownToggle>
								<DropdownMenu>
									<DropdownItem header tag='a'>
										Topografía
									</DropdownItem>
									<DropdownItem
										href='#pablo'
										onClick={(e) => e.preventDefault()}
									>
										<i className='now-ui-icons design_vector' />
										W-DIMENSION
									</DropdownItem>
									<DropdownItem
										href='#pablo'
										onClick={(e) => e.preventDefault()}
									>
										<i className='now-ui-icons location_world' />
										W-FIJO
									</DropdownItem>
									<DropdownItem
										href='#pablo'
										onClick={(e) => e.preventDefault()}
									>
										<i className='now-ui-icons media-2_sound-wave' />
										W-ESPECTRAL
									</DropdownItem>
									<DropdownItem divider></DropdownItem>
									<DropdownItem header tag='a'>
										Desarrollo de Software
									</DropdownItem>
									<DropdownItem
										href='#pablo'
										onClick={(e) => e.preventDefault()}
									>
										<i className='now-ui-icons education_hat' />
										W-APPCADEMIA
									</DropdownItem>
									<DropdownItem
										href='#pablo'
										onClick={(e) => e.preventDefault()}
									>
										<i className='now-ui-icons tech_laptop' />
										W-DEVELOPMENT
									</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
							<UncontrolledDropdown nav>
								<DropdownToggle
									caret
									color='default'
									href='#pablo'
									nav
									onClick={(e) => e.preventDefault()}
								>
									<i className='now-ui-icons objects_spaceship mr-1'></i>
									<p>Productos</p>
								</DropdownToggle>
								<DropdownMenu>
									<DropdownItem
										href='#pablo'
										onClick={(e) => e.preventDefault()}
									>
										<i className='now-ui-icons location_pin' />
										W-PIC
									</DropdownItem>
									<DropdownItem
										href='#pablo'
										onClick={(e) => e.preventDefault()}
									>
										<i className='now-ui-icons location_compass-05' />
										W-GIS
									</DropdownItem>
									<DropdownItem
										href='#pablo'
										onClick={(e) => e.preventDefault()}
									>
										<i className='now-ui-icons objects_planet' />
										W-MODELARA
									</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
							<NavItem>
								<NavLink
									href='https://twitter.com/CreativeTim?ref=creativetim'
									target='_blank'
									id='twitter-tooltip'
								>
									<i className='fab fa-twitter'></i>
									<p className='d-lg-none d-xl-none'>Twitter</p>
								</NavLink>
								<UncontrolledTooltip target='#twitter-tooltip'>
									Follow us on Twitter
								</UncontrolledTooltip>
							</NavItem>
							<NavItem>
								<NavLink
									href='https://www.facebook.com/CreativeTim?ref=creativetim'
									target='_blank'
									id='facebook-tooltip'
								>
									<i className='fab fa-facebook-square'></i>
									<p className='d-lg-none d-xl-none'>Facebook</p>
								</NavLink>
								<UncontrolledTooltip target='#facebook-tooltip'>
									Like us on Facebook
								</UncontrolledTooltip>
							</NavItem>
							<NavItem>
								<NavLink
									href='https://www.instagram.com/CreativeTimOfficial?ref=creativetim'
									target='_blank'
									id='instagram-tooltip'
								>
									<i className='fab fa-instagram'></i>
									<p className='d-lg-none d-xl-none'>Instagram</p>
								</NavLink>
								<UncontrolledTooltip target='#instagram-tooltip'>
									Follow us on Instagram
								</UncontrolledTooltip>
							</NavItem>
						</Nav>
					</Collapse>
				</Container>
			</Navbar>
		</>
	);
}

export default IndexNavbar;

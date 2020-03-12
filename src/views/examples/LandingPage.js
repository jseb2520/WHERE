import React from 'react';

// reactstrap components
import {
	Button,
	Input,
	InputGroupAddon,
	InputGroupText,
	InputGroup,
	Container,
	Row,
	Col,
} from 'reactstrap';

// core components
// import ExamplesNavbar from 'components/Navbars/ExamplesNavbar.js';
import IndexNavbar from 'components/Navbars/IndexNavbar.js';
import LandingPageHeader from 'components/Headers/LandingPageHeader.js';
import DarkFooter from 'components/Footers/DarkFooter';
// import Images from "views/index-sections/Images";

function LandingPage() {
	const [firstFocus, setFirstFocus] = React.useState(false);
	const [lastFocus, setLastFocus] = React.useState(false);
	React.useEffect(() => {
		document.body.classList.add('landing-page');
		document.body.classList.add('sidebar-collapse');
		document.documentElement.classList.remove('nav-open');
		return function cleanup() {
			document.body.classList.remove('landing-page');
			document.body.classList.remove('sidebar-collapse');
		};
	});
	return (
		<>
      <IndexNavbar />
			<div className='wrapper'>
				<LandingPageHeader />
				<div
					className='section section-about-us'
					style={{
						backgroundImage:
							'url(' + require('assets/img/swoosh-background.svg') + ')',
					}}
				>
					<Container>
						<Row>
							<Col className='ml-auto mr-auto text-center' md='8'>
								<h2 className='title'>Portafolio</h2>
							</Col>
						</Row>
						<div className='separator separator-primary'></div>
						<div className='section-story-overview'>
							<Row>
								<Col md='6'>
									<div
										className='image-container'
										style={{
											backgroundImage:
												'url(' + require('assets/img/bg3.jpg') + ')',
										}}
									></div>
								</Col>
								<Col md='5'>
									<h2>W - Dimension</h2>
									<p
										className='description'
										style={{fontSize: '25px', color: 'black'}}
									>
										Captura, procesamiento, modelación, análisis y despliegue de
										información geoespacial mediante sensores de alta precisión
										aero transportados y terrestres.
									</p>
								</Col>
							</Row>
						</div>
					</Container>
				</div>
				<div
					className='section section-about-us'
					data-background-color='black'
					style={{
						backgroundImage:
							'url(' + require('assets/img/topography-dark.svg') + ')',
					}}
				>
					<Container>
						<div className='separator separator-primary'></div>
						<div className='section-story-overview'>
							<Row>
								<Col md='5'>
									<h2>W - Espectral</h2>
									<p className='description' style={{fontSize: '25px'}}>
										Monitoreo de cultivos mediante sensores multiespectrales
										sobre plataformas aerotransportadas y satelitales (estado
										fenológico, fitosanitario, productividad, entre otros).
									</p>
								</Col>
								<Col md='6'>
									<div
										className='image-container'
										style={{
											backgroundImage:
												'url(' + require('assets/img/bg3.jpg') + ')',
										}}
									></div>
								</Col>
							</Row>
						</div>
					</Container>
				</div>
				<div className='section section-w-fijo' >
					<Container>
						<div className='separator separator-primary'></div>
						<div className='section-story-overview'>
							<Row>
								<Col md='6'>
									<div
										className='image-container'
										style={{
											backgroundImage:
												'url(' + require('assets/img/bg3.jpg') + ')',
										}}
									></div>
								</Col>
								<Col md='6'>
									<h2>W - Fijo</h2>
									<p className='description' style={{fontSize: '25px'}}>
										Geovisor con todos los Puntos de Control Geodésico públicos
										a nivel nacional. Post-Procesamiento GNSS en la nube. Compra
										y venta de Puntos Crudos y Puntos WH-Finales.
									</p>
								</Col>
							</Row>
						</div>
					</Container>
				</div>
				{/* ****** team section ******** */}
				<div
					className='section section-team text-center'
					data-background-color='accent'
				>
					<Container>
						<h2 className='title'>Líderes</h2>
						<div className='team'>
							<Row>
								<Col md='3'>
									<div className='team-player'>
										<img
											alt='...'
											className='rounded-circle img-fluid img-raised'
											src={require('assets/img/Stiven.png')}
										></img>
										<h4 className='title title-up'>Stiven Botero M.</h4>
										<p className='category text-black'>
											Director Ejecutivo {'&'} Fundador
										</p>
										<p className='category' style={{fontStyle: 'italic'}}>
											CEO {'&'} Company Founder
										</p>
										<p className='description'>
											You can write here details about one of your team members.
											You can give more details about what they do. Feel free to
											add some{' '}
											<a href='#pablo' onClick={(e) => e.preventDefault()}>
												links
											</a>{' '}
											for people to be able to follow them outside the site.
										</p>
										<Button
											className='btn-icon btn-round'
											color='black'
											href='#pablo'
											onClick={(e) => e.preventDefault()}
										>
											<i className='fab fa-google-plus'></i>
										</Button>
										<Button
											className='btn-icon btn-round'
											color='black'
											href='#pablo'
											onClick={(e) => e.preventDefault()}
										>
											<i className='fab fa-youtube'></i>
										</Button>
										<Button
											className='btn-icon btn-round'
											color='black'
											href='#pablo'
											onClick={(e) => e.preventDefault()}
										>
											<i className='fab fa-twitter'></i>
										</Button>
									</div>
								</Col>
								<Col md='3'>
									<div className='team-player'>
										<img
											alt='...'
											className='rounded-circle img-fluid img-raised'
											src={require('assets/img/Yeison.png')}
										></img>
										<h4 className='title title-up'>Yeison Toro M.</h4>
										<p className='category text-black'>Gerente Senior</p>
										<p className='category' style={{fontStyle: 'italic'}}>
											Senior Manager
										</p>
										<p className='description'>
											You can write here details about one of your team members.
											You can give more details about what they do. Feel free to
											add some{' '}
											<a href='#pablo' onClick={(e) => e.preventDefault()}>
												links
											</a>{' '}
											for people to be able to follow them outside the site.
										</p>
										<Button
											className='btn-icon btn-round'
											color='black'
											href='#pablo'
											onClick={(e) => e.preventDefault()}
										>
											<i className='fab fa-twitter'></i>
										</Button>
										<Button
											className='btn-icon btn-round'
											color='black'
											href='#pablo'
											onClick={(e) => e.preventDefault()}
										>
											<i className='fab fa-instagram'></i>
										</Button>
										<Button
											className='btn-icon btn-round'
											color='black'
											href='#pablo'
											onClick={(e) => e.preventDefault()}
										>
											<i className='fab fa-facebook-square'></i>
										</Button>
									</div>
								</Col>
								<Col md='3'>
									<div className='team-player'>
										<img
											alt='...'
											className='rounded-circle img-fluid img-raised'
											src={require('assets/img/Miguel.png')}
										></img>
										<h4 className='title title-up'>Miguel Ramírez O.</h4>
										<p className='category text-black'>
											Gerente Desarrollo Tecnológico
										</p>
										<p className='category' style={{fontStyle: 'italic'}}>
											Technical Development Manager
										</p>
										<p className='description'>
											You can write here details about one of your team members.
											You can give more details about what they do. Feel free to
											add some{' '}
											<a href='#pablo' onClick={(e) => e.preventDefault()}>
												links
											</a>{' '}
											for people to be able to follow them outside the site.
										</p>
										<Button
											className='btn-icon btn-round'
											color='black'
											href='#pablo'
											onClick={(e) => e.preventDefault()}
										>
											<i className='fab fa-twitter'></i>
										</Button>
										<Button
											className='btn-icon btn-round'
											color='black'
											href='#pablo'
											onClick={(e) => e.preventDefault()}
										>
											<i className='fab fa-linkedin'></i>
										</Button>
									</div>
								</Col>
								<Col md='3'>
									<div className='team-player'>
										<img
											alt='...'
											className='rounded-circle img-fluid img-raised'
											src={require('assets/img/Sebastian.png')}
										></img>
										<h4 className='title title-up'>Johan Hernández V.</h4>
										<p className='category text-black'>
											Gerente Desarrollo de Aplicativos
										</p>
										<p className='category' style={{fontStyle: 'italic'}}>
											App Development Manager
										</p>
										<p className='description'>
											You can write here details about one of your team members.
											You can give more details about what they do. Feel free to
											add some{' '}
											<a href='#pablo' onClick={(e) => e.preventDefault()}>
												links
											</a>{' '}
											for people to be able to follow them outside the site.
										</p>
										<Button
											className='btn-icon btn-round'
											color='black'
											href='#pablo'
											onClick={(e) => e.preventDefault()}
										>
											<i className='fab fa-google-plus'></i>
										</Button>
										<Button
											className='btn-icon btn-round'
											color='black'
											href='#pablo'
											onClick={(e) => e.preventDefault()}
										>
											<i className='fab fa-youtube'></i>
										</Button>
										<Button
											className='btn-icon btn-round'
											color='black'
											href='#pablo'
											onClick={(e) => e.preventDefault()}
										>
											<i className='fab fa-twitter'></i>
										</Button>
									</div>
								</Col>
							</Row>
						</div>
					</Container>
				</div>
				<div
					id='contact'
					className='section section-contact-us text-center'
					style={{
						backgroundImage:
							'url(' + require('assets/img/topography-dark.svg') + ')',
					}}
				>
					<div className='section' style={{backgroundColor: 'white'}}>
						<Container>
							<h2 className='title'>Contáctanos</h2>
							<p className='description'>
								Su proyecto es muy importante para nosotros.
							</p>
							<Row>
								<Col className='text-center ml-auto mr-auto' lg='6' md='8'>
									<InputGroup
										className={
											'input-lg' + (firstFocus ? ' input-group-focus' : '')
										}
									>
										<InputGroupAddon addonType='prepend'>
											<InputGroupText>
												<i className='now-ui-icons users_circle-08'></i>
											</InputGroupText>
										</InputGroupAddon>
										<Input
											placeholder='First Name...'
											type='text'
											onFocus={() => setFirstFocus(true)}
											onBlur={() => setFirstFocus(false)}
										></Input>
									</InputGroup>
									<InputGroup
										className={
											'input-lg' + (lastFocus ? ' input-group-focus' : '')
										}
									>
										<InputGroupAddon addonType='prepend'>
											<InputGroupText>
												<i className='now-ui-icons ui-1_email-85'></i>
											</InputGroupText>
										</InputGroupAddon>
										<Input
											placeholder='Email...'
											type='text'
											onFocus={() => setLastFocus(true)}
											onBlur={() => setLastFocus(false)}
										></Input>
									</InputGroup>
									<div className='textarea-container'>
										<Input
											cols='80'
											name='name'
											placeholder='Type a message...'
											rows='4'
											type='textarea'
										></Input>
									</div>
									<div className='send-button'>
										<Button
											block
											className='btn-round'
											color='info'
											href='#pablo'
											onClick={(e) => e.preventDefault()}
											size='lg'
										>
											Send Message
										</Button>
									</div>
								</Col>
							</Row>
						</Container>
					</div>
				</div>
        <DarkFooter />
			</div>
		</>
	);
}

export default LandingPage;

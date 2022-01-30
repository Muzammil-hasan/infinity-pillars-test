import React from "react";

const Hero = () => {
	return (
		<section className='hero'>
			<h1 className='hero__title'>Build your ideas into websites.</h1>
			<p className='hero__subtitle'>
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
				been the industry's standard dummy text ever since the 1500s.
			</p>
			<div className='hero__ctas'>
				<button className='portfolio_button--primary'>See projects</button>
				<button className='portfolio_button--secondary'>Contact me</button>
			</div>

			<div className='hero__social'>
				<button className='portfolio_button_icon portfolio_button_icon--gmail'>
					<svg viewBox='0 0 40 30'>
						<g id='gmail' transform='translate(0 -64)'>
							<rect
								id='Rectangle_2'
								data-name='Rectangle 2'
								width='30'
								height='30'
								transform='translate(5 64)'
								fill='#eceff1'
							/>
							<path
								id='Path_4'
								data-name='Path 4'
								d='M256,160.212l15,11.845V148.672Z'
								transform='translate(-236 -78.057)'
								fill='#cfd8dc'
							/>
							<path
								id='Path_5'
								data-name='Path 5'
								d='M36.25,64H35L20,75.845,5,64H3.75A3.751,3.751,0,0,0,0,67.75v22.5A3.751,3.751,0,0,0,3.75,94H5V70.615L20,82.152l15-11.54V94h1.25A3.751,3.751,0,0,0,40,90.25V67.75A3.751,3.751,0,0,0,36.25,64Z'
								transform='translate(0 0)'
								fill='#f44336'
							/>
						</g>
					</svg>
				</button>
				<button className='portfolio_button_icon portfolio_button_icon--linkedin'>
					<svg viewBox='0 0 40 40'>
						<path
							id='linkedin'
							d='M34.141,0H5.859A5.866,5.866,0,0,0,0,5.859V34.141A5.866,5.866,0,0,0,5.859,40H34.141A5.866,5.866,0,0,0,40,34.141V5.859A5.866,5.866,0,0,0,34.141,0Zm-20,31.719H9.453V15.313h4.688Zm0-18.75H9.453V8.281h4.688Zm16.406,18.75H25.859V22.344a2.344,2.344,0,0,0-4.687,0v9.375H16.484V15.313h4.688V16.2a10.161,10.161,0,0,1,3.516-.883,6.135,6.135,0,0,1,5.859,6.226Zm0,0'
							fill='#007ab9'
						/>
					</svg>
				</button>
				<button className='portfolio_button_icon portfolio_button_icon--github'>
					<svg fill='#000000' viewBox='0 0 64 64'>
						<path d='M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z' />
					</svg>
				</button>
			</div>
		</section>
	);
};

export default Hero;

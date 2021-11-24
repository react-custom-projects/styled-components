import React from 'react';
//styles
import { Container } from './styles/Container.styled';
import { Flex } from './styles/Flex.styled';
import { StyledFooter } from './styles/Footer.styled';
//images
import whiteLogo from '../../assets/images/logo_white.svg';

const Footer = () => (
	<StyledFooter>
		<Container>
			<img src={whiteLogo} alt="white logo" />
			<Flex>
				<ul>
					<li>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
						incididunt ut labore et dolore magna aliqua
					</li>
					<li>+1-543-123-4567</li>
					<li>example@huddle.com</li>
				</ul>
				<ul>
					<li>About Us</li>
					<li>What We Do</li>
					<li>FAQ</li>
				</ul>

				<ul>
					<li>Career</li>
					<li>Blog</li>
					<li>Contact Us</li>
				</ul>
				{/* social icons */}
			</Flex>
			<p>&copy; 2021 Huddle. All rights reserved.</p>
		</Container>
	</StyledFooter>
);

export default Footer;

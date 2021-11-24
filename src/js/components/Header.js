import React from 'react';
//styles
import { StyledHeader, Nav, Logo, Image } from './styles/Header.styled';
import { Button } from './styles/Button.styled';
import { Container } from './styles/Container.styled';
import { Flex } from './styles/Flex.styled';
//images
import logoImg from '../../assets/images/logo.svg';
import illustrationMockups from '../../assets/images/illustration-mockups.svg';

const Header = () => {
	return (
		<StyledHeader>
			<Container>
				<Nav>
					<Logo src={logoImg} alt="logo" />
					<Button>Try it free</Button>
				</Nav>
				<Flex>
					<div>
						<h1>Build The Community Your Fans Will Love</h1>
						<p>
							Huddle re-imagines the way we build communities. You have a voice, but so does your
							audience. Create connections with your users as you engage in genuine discussion.
						</p>

						<Button bg="#ff0099" color="#ffffff">
							Get Starged For Free
						</Button>
					</div>
					<Image src={illustrationMockups} alt="mockups" />
				</Flex>
			</Container>
		</StyledHeader>
	);
};

export default Header;

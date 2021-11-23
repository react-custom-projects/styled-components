import React from 'react';
//styles
import { StyledHeader, Nav, Logo } from './styles/Header.styled';
import { Button } from './styles/Button.styled';
import { Container } from './styles/Container.styled';
//images
import logoImg from '../../assets/images/logo.svg';

const Header = () => {
	return (
		<StyledHeader>
			<Container>
				<Nav>
					<Logo src={logoImg} alt="logo" />
					<Button>Try it free</Button>
				</Nav>
			</Container>
		</StyledHeader>
	);
};

export default Header;

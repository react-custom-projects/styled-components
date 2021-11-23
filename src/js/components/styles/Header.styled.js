import styled from 'styled-components';

export const StyledHeader = styled.header`
	background-color: ${({ theme: { colors } }) => colors.header};
	padding: 40px 0;
`;

export const Nav = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 40ox;
`;

export const Logo = styled.img``;

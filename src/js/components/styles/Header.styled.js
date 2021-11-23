import styled from 'styled-components';

export const StyledHeader = styled.header`
	background-color: ${({ theme: { colors } }) => colors.header};
	padding: 40px 0;
`;

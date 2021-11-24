import styled from 'styled-components';

export const StyledCard = styled.div`
	display: flex;
	flex-direction: ${({ layout }) => layout || 'row'};
	align-items: center;
	background-color: #ffffff;
	border-radius: 15px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
	margin: 40px 0;
	padding: 60px;

	& > div {
		flex: 1;
	}

	@media (max-width: ${({ theme: { mobile } }) => mobile}) {
		flex-direction: column;
	}

	img {
		width: 80%;
	}
`;

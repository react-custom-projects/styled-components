import React from 'react';
//styles
import { StyledCard } from '../styles/Card.styled';

const Card = ({ id, title, body, image }) => (
	<StyledCard layout={id % 2 === 0 && 'row-reverse'}>
		<div>
			<h2>{title}</h2>
			<p>{body}</p>
		</div>
		<div>
			<img src={image} alt={title} />
		</div>
	</StyledCard>
);

export default Card;

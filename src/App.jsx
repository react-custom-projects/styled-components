import React from 'react';
import { hot } from 'react-hot-loader/root';
//error boundary
import { ErrorBoundary } from 'react-error-boundary';
//error boundary fallback
import ErrorBoundaryFallback from './js/generic/ErrorBoundaryFallback';
//styles
import { Container } from './js/components/styles/Container.styled';
//components
import Header from './js/components/Header';

const App = () => (
	<ErrorBoundary
		FallbackComponent={ErrorBoundaryFallback}
		onReset={() => {
			//Reset the state of your app so the error doesn't happen again
			console.log('Try again clicked');
		}}
	>
		<Header />
		<Container>
			<h1>styled components</h1>
		</Container>
	</ErrorBoundary>
);

export default hot(App);

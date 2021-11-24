import React from 'react';
import { hot } from 'react-hot-loader/root';
//theme provider
import { ThemeProvider } from 'styled-components';
//error boundary
import { ErrorBoundary } from 'react-error-boundary';
//error boundary fallback
import ErrorBoundaryFallback from './js/generic/ErrorBoundaryFallback';
//constants
import { theme, content } from './js/constants/Constants';
//styles
import GlobalStyles from './js/components/styles/Global';
import { Container } from './js/components/styles/Container.styled';
//components
import Header from './js/components/Header';
import Card from './js/components/shared/Card';
import Footer from './js/components/Footer';

const App = () => (
	<ThemeProvider theme={theme}>
		<GlobalStyles />
		<ErrorBoundary
			FallbackComponent={ErrorBoundaryFallback}
			onReset={() => {
				//Reset the state of your app so the error doesn't happen again
				console.log('Try again clicked');
			}}
		>
			<Header />
			<Container>
				{content.map((el) => (
					<Card key={el.id} id={el.id} title={el.title} body={el.body} image={el.image} />
				))}
			</Container>
			<Footer />
		</ErrorBoundary>
	</ThemeProvider>
);

export default hot(App);

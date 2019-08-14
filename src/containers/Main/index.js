import React, {
	PureComponent,
} from 'react';
import Header from 'components/Header';
import Navigation from 'components/Navigation';
import Chat from 'components/Chat';

import * as Styled from './styles';

export default class Main extends PureComponent {
	render() {
		return (
			<Styled.Wrapper>
				<Chat />
				<Header />
				<Navigation />
			</Styled.Wrapper>
		);
	}
}

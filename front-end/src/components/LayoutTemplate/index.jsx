import React from 'react';

import Navbar from './Navbar';
import Content from './Content';

import { LayoutTemplateWrap } from './styles';

export default function LayoutTemplate({ children }) {
	return (
		<LayoutTemplateWrap>
			<Navbar />
			<Content>{children}</Content>
		</LayoutTemplateWrap>
	);
}

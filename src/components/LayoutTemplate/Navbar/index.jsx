import React from 'react';

import { logo } from '../../../assets/images';
import { NavbarWrap } from './styles';

export default function Navbar() {
	return (
		<NavbarWrap>
			<img src={logo} alt="logo" className="logo" />
		</NavbarWrap>
	);
}

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {
	HomePage,
	ProfilePage,
	SearchPage,
	RegisterPage,
	LoginPage,
} from './pages';

import './customize.css';

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/profile" element={<ProfilePage />} />
				<Route path="/search" element={<SearchPage />} />

				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
			</Routes>
		</BrowserRouter>
	);
}

import { atom } from 'recoil';
import store from 'store';

export const userAtom = atom({
	key: 'userAtom',
	default: store.get('user', {
		id: null,
	}),
});

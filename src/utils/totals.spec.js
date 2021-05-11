import { getTotalGames, getTotalPrice } from './totals';

const gamesMock = [{ price: 2 }, { price: 4 }, { price: 6 }];

const gamesEmptyMock = [];

describe('totals test', () => {
	it('deve retornar o numero 3', () => {
		expect(getTotalGames(gamesMock)).toBe(3);
		expect(getTotalGames(gamesMock)).not.toBe(1);
	});

	it('deve retornar uma string vazia', () => {
		expect(getTotalGames(gamesEmptyMock)).toBe('');
	});

	it('deve retornar mensagem de tipo inválido', () => {
		expect(getTotalGames('')).toBe('format-invalid');
	});

	it('deve retornare soma dos preços', () => {
		expect(getTotalPrice(gamesMock)).toBe(12);
	});
});

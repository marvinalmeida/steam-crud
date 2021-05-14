import { getTotalGames, getTotalPrice } from './totals';
import gamesMock from "../mocks/games.json"

const gamesEmptyMock = [];

describe('totals test', () => {
	it('deve retornar o numero 7', () => {
		expect(getTotalGames(gamesMock)).toBe(7);
		expect(getTotalGames(gamesMock)).not.toBe(1);
	});

	it('deve retornar uma string vazia', () => {
		expect(getTotalGames(gamesEmptyMock)).toBe('');
	});

	it('deve retornar mensagem de tipo inválido', () => {
		expect(getTotalGames('')).toBe('format-invalid');
	});

	it('deve retornar o valor total do carrinho', () => {
		expect(getTotalPrice(gamesMock)).toBe(12);
	});
});

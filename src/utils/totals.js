export const getTotalGames = (games) => {
	if (typeof games != 'object') {
		return 'format-invalid';
	}
	if (games.length === 0) {
		return '';
	}
	return games.length;
};

export const getTotalPrice = (games) => {
	return games.reduce((acc, game) => acc + game.price, 0);
};

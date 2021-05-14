export const getTotalGames = (games) => {
	if (typeof games != 'object') {
		return 'format-invalid';
	}
	if (games.length === 0) {
		return '';
	}
	return games.reduce((acc, game)=>{
		return acc + game.quantity
	}, 0);
};

export const getTotalPrice = (games) => {
	return games.reduce((acc, game) => acc + game.price * game.quantity, 0);
};

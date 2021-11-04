const getAdmins = (map) => {
	let admins = [];

	for ([key, value] of map) {
		if (value === 'ADMIN') {
			admins.push(key);
		}
	}

	return admins;
};

const usuarios = new Map();

usuarios.set('Stephany', 'ADMIN');
usuarios.set('Luiz', 'ADMIN');
usuarios.set('Natalia', 'ADMIN');
usuarios.set('Jorge', 'USER');

console.log(getAdmins(usuarios ));

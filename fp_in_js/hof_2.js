weaponsWithNoises = [
  {name: 'Phaser', noise: 'bssszzsssss', universe: 'Star Trek'},
	{name: 'Blaster', noise: 'Pew Pew', universe: 'Star Wars'},
	{name: 'Sonic Screwdriver', noise: 'Pew Pew', universe: 'Dr. Who'},
	{name: 'Lightsaber', noise: 'Pew Pew', universe: 'Star Wars'},
	{name: 'Noisy Cricket', noise: 'Pew Pew', universe: 'Men in Black'}
]

function weaponsFromUniverse(universe) {
	// ...Your code here!
	return (name => {
		const  universeWeapons = weaponsWithNoises.filter(curVale => curVale.universe === universe).filter(weapon => weapon.name === name);
		const foundedWeapons = (universeWeapons.find(x => x.name === name));
		 if (foundedWeapons==undefined) return `${name} is not a part of ${universe} universe `;
		 else return `used ${name}: ${foundedWeapons.noise} `;
	})
};

// USAGE
const useStarWarsWeapon = weaponsFromUniverse('Star Wars')
//console.log(useStarWarsWeapon)


console.log(useStarWarsWeapon('Blaster')) // console logs 'used Blaster: Pew Pew'
console.log(useStarWarsWeapon('Noisy Cricket')) // console logs 'Noisy Cricket is not a part of the Star Wars universe'
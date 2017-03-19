const today = new Date();
const players = [
	{first: 'Semyon', last: 'Varlamov', number: 1, position: 'G', year: 1988},
	{first: 'Calvin', last: 'Pickard', number: 31, position: 'G', year: 1992},
	{first: 'Mark', last: 'Barberio', number: 45, position: 'D', year: 1990},
	{first: 'Tyson', last: 'Barrie', number: 4, position: 'D', year: 1991},
	{first: 'Francois', last: 'Beauchemin', number: 32, position: 'D', year: 1980},
	{first: 'Cody', last: 'Golubef', number: 11, position: 'D', year: 1989},
	{first: 'Erik', last: 'Johnson', number: 6, position: 'D', year: 1988},
	{first: 'Fydor', last: 'Tyutin', number: 51, position: 'D', year: 1983},
	{first: 'Patrick', last: 'Wiercioch', number: 28, position: 'D', year: 1990},
	{first: 'Nikita', last: 'Zadorov', number: 16, position: 'D', year: 1995},
	{first: 'Carl', last: 'Soderberg', number: 34, position: 'F', year: 1985},
	{first: 'Sven', last: 'Andrighetto', number: 10, position: 'F', year: 1993},
	{first: 'Mikko', last: 'Rantanen', number: 96, position: 'F', year: 1996},
	{first: 'Nathan', last: 'MacKinnon', number: 29, position: 'F', year: 1995},
	{first: 'J.T.', last: 'Compher', number: 37, position: 'F', year: 1995},
	{first: 'Mikhail', last: 'Grigorenko', number: 25, position: 'F', year: 1994},
	{first: 'Gabriel', last: 'Landeskog', number: 92, position: 'F', year: 1992},
	{first: 'Joe', last: 'Colborne', number: 8, position: 'F', year: 1990},
	{first: 'Rene', last: 'Bourque', number: 17, position: 'F', year: 1981},
	{first: 'John', last: 'Mitchell', number: 7, position: 'F', year: 1985},
	{first: 'Blake', last: 'Comeau', number: 14, position: 'F', year: 1986},
	{first: 'Matt', last: 'Duchene', number: 9, position: 'F', year: 1991},
	{first: 'Matt', last: 'Nieto', number: 83, position: 'F', year: 1992}
];

const until1990 = players.filter( player => (player.year < 1990 ) );
//console.table(until1990);

const fullName = players.map( player => `${player.first} ${player.last}` );
//console.log(fullName);

const orderedBirth = players.sort( (current, next) => (current.year > next.year) ? 1 : -1 );
//console.table(orderedBirth);

const orderedNum = players.sort( (current, next) => (current.number > next.number) ? 1 : -1 );
//console.table(orderedNum);

function averageTeamAge() {
	const totalYears = players.reduce( (total, player) => {
		return total + ( today.getFullYear() - player.year );
	}, 0);
	const average = parseFloat((totalYears / players.length).toFixed(1));
	return average;
}
//console.log(averageTeamAge());

const positions = players.map( player => `${player.position}` );

const totalPlayersOnPos = positions.reduce( (obj, item) => {
	if( !obj[item] ) {
		obj[item] = 0;
	}
	obj[item]++;
	return obj;
}, {});
//console.log(totalPlayersOnPos);

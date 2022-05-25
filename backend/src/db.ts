// Let's assume this array is our database
let restaurants: string[] = [
	"Pizza Zola",
	"Shisho Burger",
	"Cocolo Ramen",
	"Brammibal's Donuts",
];

export function getSuggestion(): string {
	return restaurants[Math.round(Math.random() * restaurants.length)];
}

export function getAll(): typeof restaurants {
	return restaurants;
}

export function add(input: string): typeof restaurants {
	restaurants.push(input);
	return restaurants;
}

export function remove(input: string): typeof restaurants {
	restaurants = restaurants.filter((restaurant) => restaurant !== input);
	return restaurants;
}

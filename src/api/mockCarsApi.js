const synonyms = {
	"volkswagen": ["vw", "popular car"],
	"mercedes": ["benz", "mclaren"]
}

const cars = [
	{
		make: "Volkswagen",
		model: "Fusca",
		year: "1991"
	},
	{
		make: "Volkswagen",
		model: "New Beatle",
		year: "2002"
	},
	{
		make: "Volkswagen",
		model: "Voyage",
		year: "1995"
	},
	{
		make: "Audi",
		model: "A3",
		year: "2000"
	},
	{
		make: "Audi",
		model: "A4",
		year: "2004"
	},
	{
		make: "Audi",
		model: "TT",
		year: "2014"
	},
	{
		make: "Mercedes",
		model: "SLK",
		year: "2001"
	},
	{
		make: "Mercedes",
		model: "CLA",
		year: "2002"
	}
];

export default class CarsApi{
	static getAllCars() {
		return cars;
	}
	static getSynonyms() {
		return synonyms;
	}
}


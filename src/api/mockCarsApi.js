const synonyms = {
	"volkswagen": ["vw", "popular car"],
	"mercedes": ["benz", "mclaren"]
}

const cars = [
	{
		make: "Volkswagen",
		model: "Golf",
		year: "2017",
		logo: "http://www.carlogos.org/logo/Volkswagen-logo.jpg"
	},
	{
		make: "Volkswagen",
		model: "New Beatle",
		year: "2002",
		logo: "http://www.carlogos.org/logo/Volkswagen-logo.jpg"
	},
	{
		make: "Volkswagen",
		model: "Polo",
		year: "2010",
		logo: "http://www.carlogos.org/logo/Volkswagen-logo.jpg"
	},
	{
		make: "Audi",
		model: "A5",
		year: "2012",
		logo: "http://www.carlogos.org/logo/Volkswagen-logo.jpg"
	},
	{
		make: "Audi",
		model: "A4",
		year: "2014",
		logo: "http://www.carlogos.org/logo/Audi-logo.jpg"
	},
	{
		make: "Audi",
		model: "TT",
		year: "2016",
		logo: "http://www.carlogos.org/logo/Audi-logo.jpg"
	},
	{
		make: "Mercedes",
		model: "SLK",
		year: "2001",
		logo: "http://www.carlogos.org/logo/Mercedes-Benz-logo.jpg"
	},
	{
		make: "Mercedes",
		model: "CLA",
		year: "2002",
		logo: "http://www.carlogos.org/logo/Mercedes-Benz-logo.jpg"
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


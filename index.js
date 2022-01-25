// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного бака, середня витрата палива на 100 км., водії), і наступні функції для роботи з цим об'єктом:

const car = {
	brand: 'volvo',
	model: 'xc90',
	year: 2022,
	avgSpeed: 100,
	avgFuelPer100Km: 8,
	fuel: {
		tankSize: 60,
		existedLiters: 20
	},

	drivers: ['Peter', 'Vasia']
}

// Висновок на екран з інформацією про автомобіль.

console.log(car);

// Додавання водія, який має право керувати автомобілем.

car.drivers.push('Gogi');
console.log(car.drivers);

// Заправка автомобіля.

car.fuel.existedLiters += 10;
console.log(car.fuel.existedLiters);

// Підрахунок необхідного часу для подолання переданої відстані з середньою швидкістю.
// Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину,
// а також потрібно перевіряти чи має право водій керувати даним автомобілем 
//(ім'я водія функція приймає другим аргументом). 
// Також потрібно перевірити чи вистачить палива, для здійснення цієї поїздки, якщо палива не вистачить потрібно вивести повідомлення,
// про це і запропонувати заправити автомобіль.


function task(distance, checkDriver) {
	var timeWithoutStopping = distance / car.avgSpeed;

	var countOfStopping = 0;
	if (Number.isInteger(timeWithoutStopping / 4)) {
		countOfStopping = timeWithoutStopping / 4 - 1;
	} else {
		countOfStopping = parseInt(timeWithoutStopping / 4);
	}
	const time = timeWithoutStopping + countOfStopping * 1;
	console.log('Time on road:', time);

	// ---

	if (car.drivers.indexOf(checkDriver) === -1) {
		console.log('Driver without permission:', checkDriver);
	} else {
		console.log('Driver has permission:', checkDriver);
	}

	const canPassOnThisTank = (car.avgFuelPer100Km / car.fuel.existedLiters * 100);

	if (canPassOnThisTank < distance) {
		console.log('Can not pass on this tank this distance:', distance);
		console.log('You have to add fuel to the tank!');
	} else {
		console.log('Can pass on this tank this distance:', distance);
	}
}

task(800, 'Peter');
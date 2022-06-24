const car1 = {
  name: "Ford Fusion",
  model: 2016,
  color: "black",
  isBroken: false,
};

const car2 = {
  name: "Toyota Corolla",
  model: 2018,
  color: "Red",
  isBroken: true,
};

interface car {
  name: string;
  model: number;
  color: string;
  isBroken: boolean;
}

const PrintCarInformations = (car: car) => {
  console.log(` Name: ${car.name} `);
  console.log(` Model: ${car.model} `);
  console.log(` color: ${car.color} `);
  console.log(` isBroken: ${car.isBroken} `);
};

PrintCarInformations(car2);

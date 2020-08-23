// interfaces + classes = really TS

/*
const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(vehicle.name, vehicle.year, vehicle.broken);
};
*/
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `all good name :${this.name}`;
  },
};
const oldBMW = {
  summary(): string {
    return `all good name :${this.name}`;
  },
};
/*
const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.name, vehicle.year, vehicle.broken);
};
*/

const printVehicle = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};

printVehicle(oldCivic);

interface Reportable {
  summary(): string;
}

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};
printSummary(oldBMW);

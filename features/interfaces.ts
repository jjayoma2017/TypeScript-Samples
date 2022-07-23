interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name:${this.name} \n year:${this.year} \n broken:${this.broken}`;
  },
};

const TeaDrink = {
  name: 'Tea',
  carbonated: false,
  sugar: 0,
  summary(): string {
    return `Name:${this.name} \n Carbonated:${this.carbonated} \n sugar:${this.sugar}`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(TeaDrink);

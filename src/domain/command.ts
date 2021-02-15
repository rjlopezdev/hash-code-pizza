import { Pizza } from './pizza';

export class PizzaCommand {

  readonly totalPizzas: number;
  readonly twoPersonTeams: number;
  readonly threePersonTeams: number;
  readonly fourPersonTeams: number;
  readonly pizzas: Pizza[];

  constructor(command: {
    totalPizzas: number,
    twoPersonTeams: number,
    threePersonTeams: number,
    fourPersonTeams: number,
    pizzas: Pizza[],
  }) {
    this.totalPizzas = command.totalPizzas;
    this.twoPersonTeams = command.twoPersonTeams;
    this.threePersonTeams = command.threePersonTeams;
    this.fourPersonTeams = command.fourPersonTeams;
    this.pizzas = command.pizzas;
  }
}

import { Pizza } from './pizza';

export class PizzaDelivery {

  readonly totalDeliveries: number;
  readonly pizzas: Pizza[];

  constructor(data: {
    totalDeliveries: number,
    pizzas: Pizza[],
  }) {
    this.totalDeliveries = data.totalDeliveries;
    this.pizzas = data.pizzas;
  }
}

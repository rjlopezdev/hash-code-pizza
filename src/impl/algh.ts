import { PizzaCommand } from '../domain/command';
import { PizzaDelivery } from '../domain/delivery';

export class PizzaDeliveryComputerImpl {

  public computeDelivery(command: PizzaCommand): PizzaDelivery {
    console.info('Command: ', command);
    const delivery = new PizzaDelivery({
      totalDeliveries: 0,
      pizzas: [],
    });
    return delivery;
  }
}

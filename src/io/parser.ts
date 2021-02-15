import { PizzaCommand } from '../domain/command';
import { PizzaDelivery } from '../domain/delivery';
import { Pizza, Topic } from '../domain/pizza';

export class PizzaDeliveryIO {

  public toDomainCommand(raw: string): PizzaCommand {
    const headerRegex = /(?<nPizzas>[0-9]+) (?<g1>[0-9]+) (?<g2>[0-9]+) (?<g3>[0-9]+)\n/;
    const headerParsed = raw.match(headerRegex);
    if (!headerParsed?.groups) {
      throw new Error(`Can't parse header from: ${raw}`);
    }

    const pizzasRegex = /\n(?<nTopics>[0-9]+) (?<topics>.+)/g;
    const pizzasParsed = raw.matchAll(pizzasRegex);
    const pizzas: Pizza[] = [];
    for (const [i, pizzaParsed] of Array.from(pizzasParsed).entries()) {
      const pizzaGroups = pizzaParsed?.groups;
      if (!pizzaGroups) {
        throw new Error(`Can't parse topics from: ${raw}`);
      }
      const topics: Topic[] = pizzaGroups?.topics
        .split(' ')
        .map(topic => new Topic(topic)) || [];
      const pizza = new Pizza({
        id: i,
        totalTopics: +pizzaGroups?.nTopics,
        topics: topics,
      });
      pizzas.push(pizza);
    }

    const command = new PizzaCommand({
      totalPizzas: +headerParsed?.groups.nPizzas,
      twoPersonTeams: +headerParsed?.groups.g1,
      threePersonTeams: +headerParsed?.groups.g2,
      fourPersonTeams: +headerParsed?.groups.g3,
      pizzas: pizzas,
    });
    return command;
  }

  /**
   * TODO: Parse to file format
   * @param delivery Output of `PizzaDeliveryComputerImpl` computation 
   */
  public toRawDelivery(delivery: PizzaDelivery): string {
    return JSON.stringify(delivery);
  }
}

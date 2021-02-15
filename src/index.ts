import { PizzaDeliveryIO } from './io/parser';
import * as fs from 'fs';
import { PizzaDeliveryComputerImpl } from './impl/algh';

const parser = new PizzaDeliveryIO();
const algth = new PizzaDeliveryComputerImpl();

export const main = () => {
  const args = process.argv.slice(2);
  for (const fileName of args) {
    const fileRaw = fs.readFileSync(fileName, 'utf-8');
    const command = parser.toDomainCommand(fileRaw);
    const delivery = algth.computeDelivery(command);
    fs.writeFileSync(`./out/${fileName}.out`, JSON.stringify(delivery));
    console.info('Delivery: ', delivery);
  }
}

main();

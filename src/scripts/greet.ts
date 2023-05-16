// this greets the user according to the time.
import * as types from '../types';
export function greet(app: types.App) {
  app.message(/^greet me$/, async ({message, say}: types.AppMessage) => {
    let date: {getHours: Function} = new Date();
    let hour: number = date.getHours();
    if (6 <= hour && hour < 12) {
      await say(`good morning `);
    } else if (hour >= 12 && hour <= 17) {
      await say(`good afternoon`);
    } else if (hour > 17 && hour <= 23) {
      await say(`good evening`);
    } else {
      await say(`burning the midnight oil, eh ? Keep up the work :)`);
    }
  });
}

import * as types from '../types'
// PING-PONG
export function test(app: types.App) {
  app.message('ping', async ({message,say}: types.AppMessage) => {
    await say('PONG');
  });
// tells the time
  app.message(/^samantha time$/, async ({message,say}: types.AppMessage) => {
    let date : Date = new Date();
    await say(`${date}`);
  });

  // repeats what the user gives as a prompt
  app.message(
    /samantha echo/,
    async ({message,say}: types.AppMessage) => {
      let data : string = message.text;
      let toEcho : string = '';
      toEcho = data.match(/echo (.*)/)![1];
      await say(`${toEcho}`);
    }
  );
}

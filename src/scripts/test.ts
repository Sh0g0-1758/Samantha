export function test(app: {message: Function}) {
  app.message('ping', async ({say}: {say: Function}) => {
    await say('PONG');
  });

  app.message(/^samantha time$/, async ({say}: {say: Function}) => {
    let date = new Date();
    await say(`${date}`);
  });

  app.message(
    /samantha echo/,
    async ({
      message,
      say,
    }: {
      message: {user: string; text: string};
      say: Function;
    }) => {
      let data = message.text;
      let toEcho = '';
      toEcho = data.match(/echo (.*)/)![1];
      await say(`${toEcho}`);
    }
  );

  app.message(
    'sis <@xxxxxx> ++',
    async ({
      message,
      say,
    }: {
      message: {user: string; text: string};
      say: Function;
    }) => {
      console.log(message);
    }
  );
}

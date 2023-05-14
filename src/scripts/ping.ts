export function kachodi (app : {message : Function}) {
    app.message('ping', async ({say} : {say : Function}) => {
      await say('pong');
    });
}
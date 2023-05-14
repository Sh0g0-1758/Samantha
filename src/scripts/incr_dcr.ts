import {getList} from '../services/redis';
import {update} from '../services/redis';

export async function incr_dcr(app: {message: Function}) {
  app.message(
    /<@[0-9a-zA-Z]*>[+][+]/,
    async ({message, say}: {message: {text: string}; say: Function}) => {
      const pattern = /<@[0-9a-zA-Z]*>/g;
      let master = message.text;
      let id = master.match(pattern);
      let final: any = [];
      id?.forEach(e => {
        let size = e.length;
        final.push(e.substring(2, size - 1));
      });
      setTimeout(() => {
        console.log(final);
        final.forEach(async (e: string) => {
          let list = await getList(e);
          let name = list[2];
          let score: number = parseInt(list[0]);
          score = score + 1;
          let str: string = score.toString();
          await update(e, 0, str);
          await say('>*Flamboyant*, ' + `@${name}, you are now at ${score}`);
        });
      }, 100);
    }
  );

  app.message(
    /<@[0-9a-zA-Z]*> [+][+]/,
    async ({message, say}: {message: {text: string}; say: Function}) => {
      const pattern = /<@[0-9a-zA-Z]*>/g;
      let master = message.text;
      let id = master.match(pattern);
      let final: any = [];
      id?.forEach(e => {
        let size = e.length;
        final.push(e.substring(2, size - 1));
        console.log(e.substring(2, size - 1));
      });
      setTimeout(() => {
        console.log(final);
        final.forEach(async (e: string) => {
          let list = await getList(e);
          let name = list[2];
          let score: number = parseInt(list[0]);
          score = score + 1;
          let str: string = score.toString();
          await update(e, 0, str);
          await say('>*Flamboyant*, ' + `@${name}, you are now at ${score}`);
        });
      }, 100);
    }
  );

  app.message(
    /<@[0-9a-zA-Z]*> [-][-]/,
    async ({message, say}: {message: {text: string}; say: Function}) => {
      const pattern = /<@[0-9a-zA-Z]*>/g;
      let master = message.text;
      let id = master.match(pattern);
      let final: any = [];
      id?.forEach(e => {
        let size = e.length;
        final.push(e.substring(2, size - 1));
      });
      setTimeout(() => {
        console.log(final);
        final.forEach(async (e: string) => {
          let list = await getList(e);
          let name = list[2];
          let score: number = parseInt(list[0]);
          score = score - 1;
          let str: string = score.toString();
          await update(e, 0, str);
          await say('>*Sed :(*, ' + `@${name}, you are now at ${score}`);
        });
      }, 100);
    }
  );

  app.message(
    /<@[0-9a-zA-Z]*>[-][-]/,
    async ({message, say}: {message: {text: string}; say: Function}) => {
      const pattern = /<@[0-9a-zA-Z]*>/g;
      let master = message.text;
      let id = master.match(pattern);
      let final: any = [];
      id?.forEach(e => {
        let size = e.length;
        final.push(e.substring(2, size - 1));
      });
      setTimeout(() => {
        console.log(final);
        final.forEach(async (e: string) => {
          let list = await getList(e);
          let name = list[2];
          let score: number = parseInt(list[0]);
          score = score - 1;
          let str: string = score.toString();
          await update(e, 0, str);
          await say('>*Sed :(*, ' + `@${name}, you are now at ${score}`);
        });
      }, 100);
    }
  );
}

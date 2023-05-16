import {getList} from '../services/redis';
import {update} from '../services/redis';
import * as types from '../types'

export async function incr_dcr(app: types.App) {
  // this is a function to check @username++
  app.message(
    /<@[0-9a-zA-Z]*>[+][+]/,
    async ({message, say}: types.AppMessage) => {
      const pattern : RegExp = /<@[0-9a-zA-Z]*>/g;
      let master : string = message.text;
      let id : RegExpMatchArray | null = master.match(pattern);
      let final : string[] = [];
      id?.forEach(e => {
        let size : number = e.length;
        final.push(e.substring(2, size - 1));
      });
      setTimeout(() => {
        final.forEach(async (e: string) => {
          let list : string[] = await getList(e);
          let name : string = list[2];
          let score: number = parseInt(list[0]);
          score = score + 1;
          let str: string = score.toString();
          await update(e, 0, str);
          await say('>*Flamboyant*, ' + `@${name}, you are now at ${score}`);
        });
      }, 100);
    }
  );

  // this is to check @username ++
  app.message(
    /<@[0-9a-zA-Z]*> [+][+]/,
    async ({message, say}: types.AppMessage) => {
      const pattern : RegExp = /<@[0-9a-zA-Z]*>/g;
      let master : string = message.text;
      let id : RegExpMatchArray | null = master.match(pattern);
      let final: string[] = [];
      id?.forEach(e => {
        let size : number = e.length;
        final.push(e.substring(2, size - 1));
      });
      setTimeout(() => {
        final.forEach(async (e: string) => {
          let list : string[] = await getList(e);
          let name : string = list[2];
          let score: number = parseInt(list[0]);
          score = score + 1;
          let str: string = score.toString();
          await update(e, 0, str);
          await say('>*Flamboyant*, ' + `@${name}, you are now at ${score}`);
        });
      }, 100);
    }
  );

  // this is a function @username--
  app.message(
    /<@[0-9a-zA-Z]*> [-][-]/,
    async ({message, say}: types.AppMessage) => {
      const pattern : RegExp = /<@[0-9a-zA-Z]*>/g;
      let master : string = message.text;
      let id : RegExpMatchArray | null = master.match(pattern);
      let final: string[] = [];
      id?.forEach(e => {
        let size : number = e.length;
        final.push(e.substring(2, size - 1));
      });
      setTimeout(() => {
        final.forEach(async (e: string) => {
          let list : string[] = await getList(e);
          let name : string = list[2];
          let score: number = parseInt(list[0]);
          score = score - 1;
          let str: string = score.toString();
          await update(e, 0, str);
          await say('>*Sed :(*, ' + `@${name}, you are now at ${score}`);
        });
      }, 100);
    }
  );

  // this is a function to check @username--
  app.message(
    /<@[0-9a-zA-Z]*>[-][-]/,
    async ({message, say}: types.AppMessage) => {
      const pattern : RegExp = /<@[0-9a-zA-Z]*>/g;
      let master : string = message.text;
      let id : RegExpMatchArray | null = master.match(pattern);
      let final: string[] = [];
      id?.forEach(e => {
        let size : number = e.length;
        final.push(e.substring(2, size - 1));
      });
      setTimeout(() => {
        final.forEach(async (e: string) => {
          let list : string[] = await getList(e);
          let name  :string = list[2];
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

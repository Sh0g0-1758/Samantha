import {getList} from '../services/redis';
import {setlist} from '../services/redis';
import * as types from '../types';

export function roles(app: types.App) {
  app.event('app_mention', async ({event, say}: types.AppMention) => {
    let msg : string = event.text;
    if (msg.match(/ who is /)) {
      let op : RegExpMatchArray | null = msg.match(/ who is (.*)/);
      if(op == null) {
        return;
      } else {
        let person : string = op[1];
        let rolperson : string = 'rol' + person;
        let list : string[] = await getList(rolperson);
        let size : number = list.length;
        if (size == 0) {
          await say(`${person} ? Never heard of them !`);
        } else {
          let output : string = '';
          for (let i : number = 0; i < size - 1; i++) {
            if (i != size - 2) output += list[i] + ', ';
            else output += list[i] + ' .';
          }
          if (output == '') {
            await say(`${person} is nothing to me !`);
          } else await say(`${person} is ${output}`);
        }
      }
    } else if (msg.match(/[a-zA-Z]* is [a-zA-Z]*/)) {
      let op1 : RegExpMatchArray | null = msg.match(/\<.*\> (.*) is/);
      let op2 : RegExpMatchArray | null = msg.match(/is (.*)/);
      if(op1 != null && op2 != null) {
        let person : string = op1[1];
        let tags : string = op2[1];
        let rolperson = 'rol' + person;
        let list : string[] = await getList(rolperson);
        if (list.length == 0) {
          await say(`${person} ? Never heard of them !`);
        } else {
          await setlist(rolperson, tags);
          await say(`ok, ${person} is ${tags}`);
        }
      }
    }
  });
}
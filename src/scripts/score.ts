import {getList} from '../services/redis';
import {PriorityQueue} from '../utils/priorityQueue';
import * as types from '../types'

export function score(app: types.App) {
  app.event('app_mention', async ({event, say}: types.AppMention) => {
    let msg : string = event.text;
    if (msg.match(/score/)) {
      let op1 = msg.match(/score (.*)/);
      if(op1 != null) {
        let batch : string = op1[1];
        let list : string[] = await getList(batch);
        var PriQueue : types.PriorityQueue = new PriorityQueue();
          list.forEach(async (e: string) => {
          let infolist : string[] = await getList(e);
          let score : string = infolist[0];
          var y: number = parseInt(score);
          PriQueue.add({score: score, id: e});
        });
        setTimeout(async () => {
          let final : string[] = [];
          while (PriQueue.peek() != null) {
            final.push(PriQueue.remove().id);
          }
          final.reverse();
          let original : string = '';
          let output : string = '';
          let gap : string = '                  ';
          original += 'name';
          original += gap;
          original += 'score';
          original += '\n';
          output += original;
          final.forEach(async e => {
            let infolist : string[] = await getList(e);
            let toadd : string = '';
            let tempspace : string = '';
            while (
              tempspace.length + infolist[3].length + infolist[0].length !=
              original.length
            ) {
              tempspace += ' ';
            }
            toadd += infolist[3];
            toadd += tempspace;
            toadd += infolist[0];
            toadd += '\n';
            output += toadd;
          });
          setTimeout(async () => {
            await say('```\n' + output + '\n```');
          }, 80);
        }, 80);
      }
    }
  });
}

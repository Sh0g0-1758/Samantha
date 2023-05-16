import {getList} from '../services/redis';
import * as types from '../types'

export function info(app: types.App) {
  app.message(
    /^samantha info /,
    async ({message, say}: types.AppMessage) => {
      let pattern : RegExp = /\@(.*?)\>/g;
      let master : string = message.text;
      let id : RegExpMatchArray | null = master.match(pattern);
      id?.forEach(async e => {
        let len : number = e.length;
        let fid : string = e.substring(1, len - 1);
        let list : string[] = await getList(fid);
        let rname : string = list[3];
        let email : string = list[1];
        let response: object = {
          blocks: [
            {
              type: 'header',
              text: {
                type: 'plain_text',
                text: rname,
              },
            },
            {
              type: 'section',
              fields: [
                {
                  type: 'mrkdwn',
                  text: `Email\n${email}`,
                },
              ],
            },
          ],
          text: `Info`,
        };
        await say(response);
      });
    }
  );

  app.event('app_mention', async ({event, say}: types.AppMention) => {
    let pattern : RegExp = /\@(.*?)\>/g;
    let master : string = event.text;
    let id : RegExpMatchArray | null = master.match(pattern);
    id?.forEach(async (e: string) => {
      let len : number = e.length;
      let fid : string = e.substring(1, len - 1);
      let list : string[] = await getList(fid);
      let rname : string = list[3];
      let email : string = list[1];
      let response: object = {
        blocks: [
          {
            type: 'header',
            text: {
              type: 'plain_text',
              text: rname,
            },
          },
          {
            type: 'section',
            fields: [
              {
                type: 'mrkdwn',
                text: `Email\n${email}`,
              },
            ],
          },
        ],
        text: `Info`,
      };
      await say(response);
    });
  });
}

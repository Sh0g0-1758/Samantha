import { getList } from "../services/redis";

export function info (app : {message : Function, event : Function}) {
    app.message(/^samantha info /, async ({ message,say} : {message : {text : string},say : Function}) => {
        let pattern = /\@(.*?)\>/g
        let master = message.text;
        let id = master.match(pattern);
        console.log(id);
        id?.forEach(async (e) => {
            let len = e.length;
            let fid = e.substring(1,len-1);
            let list = await getList(fid);
            let rname = list[3];
            let email = list[1];
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
        })
    });

    app.event('app_mention', async ({ event, say } : {event : any, say : any}) => {
        let pattern = /\@(.*?)\>/g
        let master = event.text;
        let id = master.match(pattern);
        console.log(id);
        id?.forEach(async (e : string) => {
            let len = e.length;
            let fid = e.substring(1,len-1);
            let list = await getList(fid);
            let rname = list[3];
            let email = list[1];
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
        })
  });
}
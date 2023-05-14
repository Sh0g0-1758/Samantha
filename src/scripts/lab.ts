import { setValue } from "../services/redis";
import { getValue } from "../services/redis";

export function lab (app : {message : Function}) {
    app.message(/^is lab open$/, async ({ message,say} : {message : {user : string},say : Function}) => {
      let lab = await getValue('lab_status');
      await say(lab);
    });

    app.message(/^is lab close$/, async ({ message,say} : {message : {user : string},say : Function}) => {
        let lab = await getValue('lab_status');
        await say(lab);
    });

      app.message(/^is lab closed$/, async ({ message,say} : {message : {user : string},say : Function}) => {
        let lab = await getValue('lab_status');
        await say(lab);
      });

      app.message(/^lab is open$/, async ({ message,say} : {message : {text : string},say : Function}) => {
        await setValue('lab_status',"lab is open");
        await say(`okay, ${message.text}`);
      });

      app.message(/^lab is closed$/, async ({ message,say} : {message : {text : string},say : Function}) => {
        await setValue('lab_status',"lab is closed");
        await say(`okay, ${message.text}`);
      });
}
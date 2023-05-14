import { setValue } from "../services/redis";
import { getValue } from "../services/redis";

export function mention(app : {event : Function}) {
    app.event('app_mention', async ({ event, say } : {event : any, say : any}) => {
        let msg = event.text;
        let lab_status_open = / is lab open$/;
        let lab_status_close = / is lab close$/;
        let lab_status_closed = / is lab closed$/;
        let set_lab_status_open = / lab is open$/;
        let set_lab_status_close = /lab is closed$/;
        let lab = await getValue('lab_status');
        if(msg.match(lab_status_open) != null) {
            await say(lab)
        } else if (msg.match(lab_status_close) != null) {
            await say(lab)
        } else if (msg.match(lab_status_closed) != null) {
            await say(lab)
        } else if (msg.match(set_lab_status_open) != null) {
            await setValue('lab_status','lab is open')
            await say("okay lab is open");
        } else if (msg.match(set_lab_status_close) != null) {
            await setValue('lab_status','lab is closed')
            await say("okay lab is closed")
        }
  });
}
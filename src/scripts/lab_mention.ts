import {setValue} from '../services/redis';
import {getValue} from '../services/redis';
import * as types from '../types'

export function mention(app: types.App) {
  app.event('app_mention', async ({event, say}: types.AppMention) => {
    let msg : string = event.text;
    let lab_status_open : RegExp = / is lab open$/;
    let lab_status_close : RegExp = / is lab close$/;
    let lab_status_closed : RegExp = / is lab closed$/;
    let set_lab_status_open : RegExp = / lab is open$/;
    let set_lab_status_close : RegExp = /lab is closed$/;
    let lab : string = await getValue('lab_status');
    if (msg.match(lab_status_open) != null) {
      await say(lab);
    } else if (msg.match(lab_status_close) != null) {
      await say(lab);
    } else if (msg.match(lab_status_closed) != null) {
      await say(lab);
    } else if (msg.match(set_lab_status_open) != null) {
      await setValue('lab_status', 'lab is open');
      await say('okay lab is open');
    } else if (msg.match(set_lab_status_close) != null) {
      await setValue('lab_status', 'lab is closed');
      await say('okay lab is closed');
    }
  });
}

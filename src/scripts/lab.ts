import {setValue} from '../services/redis';
import {getValue} from '../services/redis';
import * as types from '../types'

export function lab(app: types.App) {
  // to check whether the lab is open or closed
  app.message(
    /^is lab open$/,
    async ({message, say}: types.AppMessage) => {
      let lab : string = await getValue('lab_status');
      await say(lab);
    }
  );

  app.message(
    /^is lab close$/,
    async ({message, say}: types.AppMessage) => {
      let lab : string = await getValue('lab_status');
      await say(lab);
    }
  );

  app.message(
    /^is lab closed$/,
    async ({message, say}: types.AppMessage) => {
      let lab : string = await getValue('lab_status');
      await say(lab);
    }
  );
    // to set that the lab is open or closed 
  app.message(
    /^lab is open$/,
    async ({message, say}: types.AppMessage) => {
      await setValue('lab_status', 'lab is open');
      await say(`okay, ${message.text}`);
    }
  );

  app.message(
    /^lab is closed$/,
    async ({message, say}: types.AppMessage) => {
      await setValue('lab_status', 'lab is closed');
      await say(`okay, ${message.text}`);
    }
  );
}
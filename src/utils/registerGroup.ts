import {getValue} from '../services/redis';
import {setlist} from '../services/redis';
import {getList} from '../services/redis';
import * as types from '../types';

export async function registerGroup(
  app: types.App,
  group_name: string,
  users: string[]
) {
  let list: string[] = await getList(group_name);
  if (list.length == 0) {
    users.forEach(async e => {
      let data: string = await getValue(e);
      await setlist(group_name, data);
    });
  }
}

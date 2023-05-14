import { getValue } from "../services/redis";
import { setlist } from "../services/redis";
import { getList } from "../services/redis";

export async function registerGroup(app : any,group_name : string,users : string[]) {
    let list = await getList(group_name);
    if (list.length == 0) {
        users.forEach(async (e) => {
            let data = await getValue(e);
            await setlist(group_name,data);
        })
    }
}
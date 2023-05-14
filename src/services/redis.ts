import { createClient } from "redis";

const client = createClient();

export async function redisInit() {
  client.on('error', (error : {} ) => {
    console.log('[REDIS]', error);
  });
  await client.connect();
}

export async function redisClose() {
  await client.disconnect();
}

function isReady(): boolean {
  if (!client.isReady) {
    console.log('[REDIS] Error: client is not ready');
    return false;
  } else {
    return true;
  }
}

export async function setValue(key: string, value: string) {
  if (!isReady()) {
    return;
  }
  await client.set(key, value);
}

export async function getValue(key: string): Promise<any> {
  if (!isReady()) {
    return undefined;
  }
  let data = await client.get(key);
  return data;
}

export async function getList(key : string) : Promise<any> {
  if(!isReady()) {
    return undefined;
  }
  let data = await client.lRange(key,0,-1);
  return data
}

export async function setlist(key : string,value : string) :  Promise<any> {
  if(!isReady()) {
    return undefined;
  }
  await client.lPush(key,value);
}
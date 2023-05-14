import {ping} from './scripts/ping'
import {lab} from './scripts/lab'
import { mention } from './scripts/mention';

export function routing (app : any) : any {
  ping(app);
  lab(app);
  mention(app);
};
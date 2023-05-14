import {lab} from './scripts/lab';
import {mention} from './scripts/lab_mention';
import {greet} from './scripts/greet';
import {roles} from './scripts/roles';
import {test} from './scripts/test';
import {score} from './scripts/score';
import {incr_dcr} from './scripts/incr_dcr';
import {info} from './scripts/info';
import {bkc} from './scripts/bkc';

export function routing(app: any): any {
  test(app);
  lab(app);
  mention(app);
  greet(app);
  roles(app);
  score(app);
  incr_dcr(app);
  info(app);
  bkc(app);
}

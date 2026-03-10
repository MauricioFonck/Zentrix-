import { PathLike } from 'fs';

export function getDistPaths(): PathLike[] {
  return ['dist', 'packages/zentrix/dist', 'packages/agegate/dist'];
}

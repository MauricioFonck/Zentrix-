import type { ZentrixRequest } from '../../types/request.js';

export function isAjax(request: ZentrixRequest) {
  return request.get('X-Requested-With') === 'XMLHttpRequest';
}

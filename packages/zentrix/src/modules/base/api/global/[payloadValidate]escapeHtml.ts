import { ZentrixRequest } from '../../../../types/request.js';
import { ZentrixResponse } from '../../../../types/response.js';
import escapePayload from '../../services/escapePayload.js';

export default (request: ZentrixRequest, response: ZentrixResponse, next) => {
  if (request.method === 'GET') {
    next();
  } else {
    escapePayload(request.body);
    next();
  }
};

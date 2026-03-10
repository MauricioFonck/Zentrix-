import bodyParser from 'body-parser';
import { ZentrixRequest } from '../../types/request.js';
import { ZentrixResponse } from '../../types/response.js';

export default (request: ZentrixRequest, response: ZentrixResponse, next) => {
  bodyParser.json()(request, response, next);
};

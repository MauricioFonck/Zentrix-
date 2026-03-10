import isErrorHandlerTriggered from '../../../../lib/middleware/isErrorHandlerTriggered.js';
import { ZentrixRequest } from '../../../../types/request.js';
import { ZentrixResponse } from '../../../../types/response.js';

export default async (
  request: ZentrixRequest,
  response: ZentrixResponse,
  next
) => {
  try {
    /** If a rejected middleware called next(error) without throwing an error */
    if (isErrorHandlerTriggered(response)) {
      return;
    } else {
      response.json(response.$body || {});
    }
  } catch (error) {
    if (!isErrorHandlerTriggered(response)) {
      next(error);
    } else {
      // Do nothing here since the next(error) is already called
      // when the error is thrown on each middleware
    }
  }
};

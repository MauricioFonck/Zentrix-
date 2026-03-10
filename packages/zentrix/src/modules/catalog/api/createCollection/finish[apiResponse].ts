import { getDelegate } from '../../../../lib/middleware/delegate.js';
import { buildUrl } from '../../../../lib/router/buildUrl.js';
import { OK } from '../../../../lib/util/httpStatus.js';
import { ZentrixRequest } from '../../../../types/request.js';
import { ZentrixResponse } from '../../../../types/response.js';

export default async (
  request: ZentrixRequest,
  response: ZentrixResponse,
  next
) => {
  const collection = await getDelegate<Record<string, any>>(
    'createCollection',
    request
  );
  response.status(OK);
  response.json({
    data: {
      ...collection,
      links: [
        {
          rel: 'collectionGrid',
          href: buildUrl('collectionGrid'),
          action: 'GET',
          types: ['text/xml']
        },
        {
          rel: 'edit',
          href: buildUrl('collectionEdit', { id: collection?.uuid }),
          action: 'GET',
          types: ['text/xml']
        }
      ]
    }
  });
};

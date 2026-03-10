import { buildFilterFromUrl } from '../../../../../lib/util/buildFilterFromUrl.js';
import { ZentrixRequest } from '../../../../../types/request.js';
import { setPageMetaInfo } from '../../../../cms/services/pageMetaInfo.js';
import { setContextValue } from '../../../../graphql/services/contextHelper.js';

export default (request: ZentrixRequest, response) => {
  setPageMetaInfo(request, {
    title: 'Orders',
    description: 'Orders'
  });
  setContextValue(
    request,
    'filtersFromUrl',
    buildFilterFromUrl(request.originalUrl)
  );
};

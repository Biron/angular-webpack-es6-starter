/* @ngInject */
export default function($resource, api) {
    return $resource(null, null, {
        startSession: {
            method: 'GET',
            url: api.start
        }
    });
};
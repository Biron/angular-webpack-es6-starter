export default function TokenInterceptor($q, $injector) { 
  'ngInject';
  return {
                request: function(config) {
                    config.headers = config.headers || {};

                    if (localStorage.storage_token) {
                        config.headers.Authorization = 'Bearer ' + localStorage.storage_token;
                    }
                    return config;
                },
                responseError: function(rejection) {
                    if (rejection !== null && rejection.status === 401) {
                        console.log(rejection);
                        $injector.get('$state').transitionTo('login');
                    } else if (rejection.status === 403) {
                        console.log(rejection);
                    } else {
                        //$injector.get('ErrorService').showError(rejection);
                    }

                    return $q.reject(rejection);
                }
            };
} 
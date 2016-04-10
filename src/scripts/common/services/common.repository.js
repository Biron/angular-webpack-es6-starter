export default function CommonRepository($resource, Config) { 
  'ngInject';
  return $resource('', null, { 
    count: { 
      method: 'GET',     
      url: Config.apiUrl + '/events/count/:token',     
    },
    getMyList: {
      method: 'GET',     
      url: Config.apiUrl + '/events/count/'        
    }
  }); 
} 
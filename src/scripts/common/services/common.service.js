/* @ngInject */
export default class CommonService {
    constructor(commonRepository) {
        this.commonRepository = commonRepository;
        console.log('service lodaded');
    }

    getMyList() {
        console.log('getMyList');
        return this.commonRepository.getMyList().$promise;
    }
}
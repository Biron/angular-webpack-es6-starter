export default class CommonService {
    /* @ngInject */
    constructor(commonRepository) {
        this.commonRepository = commonRepository;
        console.log("service lodade")
    }
    
    getMyList() {
        console.log("getMyList")
        return this.commonRepository.getMyList().$promise;
    }
}
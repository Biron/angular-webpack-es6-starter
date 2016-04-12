export default class MainCtrl {
    /* @ngInject */
    constructor(commonService, mainRepository) {
        const session = mainRepository.startSession();

        this.service = commonService;
        console.log('Main loaded');

        this.prop = 'Thing';
        session.$promise.catch(result => console.log('Request result', result));
    }

    getThings() {
        console.log('click-click');
        this.service.getMyList();
    }
}
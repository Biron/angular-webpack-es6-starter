export default class MainCtrl {
    /* @ngInject */
    constructor(commonService) {
        this.service = commonService;
        console.log('Main loaded');

        this.prop = 'Thing';
    }

    getThings() {
        console.log('click-click');
        this.service.getMyList();
    }
}
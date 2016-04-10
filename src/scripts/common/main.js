import angular from 'angular';
import { default as CommonRepository } from './services/common.repository';
import CommonService from './services/common.service';
import { LocalStorageService } from './services/local-storage.service';

const MODULE_NAME = 'App.Common';

angular.module(MODULE_NAME, [])
        .service('localStorageService', LocalStorageService)
        .service('commonService', CommonService)
        .service('commonRepository', CommonRepository)

export default MODULE_NAME;
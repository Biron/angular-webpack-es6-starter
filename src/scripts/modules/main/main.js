import angular from 'angular';
import FooterCtrl from './controllers/footer.ctrl';
import HeaderCtrl from './controllers/header.ctrl';
import MainCtrl from './controllers/main.ctrl';
import { default as RouteConfig } from './config/routers.config'
        
const MODULE_NAME = 'App.Main';

angular.module(MODULE_NAME, [])
        .config(RouteConfig)
        .controller('MainCtrl', MainCtrl)
        .controller('HeaderCtrl', HeaderCtrl)
        .controller('FooterCtrl', FooterCtrl);

export default MODULE_NAME;
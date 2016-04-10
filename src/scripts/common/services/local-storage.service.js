export class LocalStorageService {
    /* @ngInject */
    constructor() {
        this.LS = window.localStorage;
    }
    
    getItem ( headerName ) {
        return this.LS.getItem(headerName);
    }
    
    clear ( headerName ) {
        return this.LS.setItem(headerName, '');
    }

    setItem ( headerName, value ) {
        return this.LS.setItem(headerName, value);
    }
    
    has ( headerName ) {
        return this.LS.getItem(headerName);
    }
}
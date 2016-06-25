import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component ({
    selector: 'header',
    template: require('./header.component.html'),
    styles: [require('./header.component.css'), require('../../../app.component.css')],
    directives: [ROUTER_DIRECTIVES]
})
export class HeaderComponent {


}
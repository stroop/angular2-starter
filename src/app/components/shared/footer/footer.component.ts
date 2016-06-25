import { Component } from '@angular/core';

@Component ({
    selector: 'footer',
    template: require('./footer.component.html'),
    styles: [require('./footer.component.css'), require('../../../app.component.css')]
})
export class FooterComponent {

    message: string = 'footer component is active';
}
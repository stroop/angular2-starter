import { Component } from '@angular/core';

import { SectionTitleComponent } from '../shared/section-title/section-title.component';

@Component ({
    selector: 'home',
    template: require('./home.component.html'),
    styles: [require('./home.component.css')],
    directives: [SectionTitleComponent]
})
export class HomeComponent {

    title: string = 'Home';
    subtitle: string = 'component is active';
}
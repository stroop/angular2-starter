import { Component } from '@angular/core';

import { SectionTitleComponent } from '../shared/section-title/section-title.component';

@Component ({
    template: require('./about.component.html'),
    styles: [require('./about.component.css'), require('../../app.component.css')],
    directives: [SectionTitleComponent]
})
export class AboutComponent {

    title: string = 'About';
    subtitle: string = 'component is active';
}
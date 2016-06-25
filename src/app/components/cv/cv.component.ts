import { Component } from '@angular/core';

import { SectionTitleComponent } from '../shared/section-title/section-title.component';

@Component ({
    template: require('./cv.component.html'),
    styles: [require('./cv.component.css'), require('../../app.component.css')],
    directives: [SectionTitleComponent]
})
export class CVComponent {

    title: string = 'CV';
    subtitle: string = 'component is active';
}
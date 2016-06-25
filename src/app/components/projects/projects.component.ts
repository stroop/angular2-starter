import { Component } from '@angular/core';

import { SectionTitleComponent } from '../shared/section-title/section-title.component';

@Component ({
    template: require('./projects.component.html'),
    styles: [require('./projects.component.css'), require('../../app.component.css')],
    directives: [SectionTitleComponent]
})
export class ProjectsComponent {

    title: string = 'Projects';
    subtitle: string = 'component is active';

}
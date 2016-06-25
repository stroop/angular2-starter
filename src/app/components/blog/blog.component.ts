import { Component } from '@angular/core';

import { SectionTitleComponent } from '../shared/section-title/section-title.component';

@Component ({
    template: require('./blog.component.html'),
    styles: [require('./blog.component.css'), require('../../app.component.css')],
    directives: [SectionTitleComponent]
})
export class BlogComponent {

    title: string = "Blog";
    subtitle: string = 'component is active';
}
import { Component, Input } from '@angular/core';

@Component ({
    selector: 'section-title',
    template: `
        <div class="page-header">
            <h1>{{ title }}<br /><small>{{ subtitle }}</small></h1>
        </div>
    `
    //require('./projects.component.html'),
    //styles: //[require('./projects.component.css'), require('../../app.component.css')]
})
export class SectionTitleComponent { 
    @Input() title: string;
    @Input() subtitle: string;

}
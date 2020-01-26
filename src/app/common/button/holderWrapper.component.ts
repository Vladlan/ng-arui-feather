import {Component} from '@angular/core';

@Component({
    selector: 'holder-wrapper',
    providers: [],
    template: `
    <div style="border: 1px solid red">
      <h2>Hello {{name}}</h2>
      <holder>
        <div>yeey transcluded content {{name}}</div>
      </holder>
    </div>
  `
})
export class HolderWrapper {
    name = 'HolderWrapper';
}

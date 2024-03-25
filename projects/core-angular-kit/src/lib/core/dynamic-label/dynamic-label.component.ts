import { AfterContentInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DynamicLabelControl } from '../../models/core/dynamic-label-control';

@Component({
  selector: 'lib-dynamic-label',
  templateUrl: './dynamic-label.component.html',
  styleUrls: ['./dynamic-label.component.scss']
})
export class DynamicLabelComponent implements OnInit, OnChanges, AfterContentInit {
@Input() lib: DynamicLabelControl;
  constructor(public translate: TranslateService) { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    this.replaceDynamicContent();
  }

  ngAfterContentInit(): void {
    if(this.lib.label){
      this.replaceDynamicContent();
      this.translate.get(this.lib.label).subscribe(localeText =>{
        this.lib.replacePlaceholder(localeText);
        this.lib.translatedValue = localeText;
      })
    }
  }

  replaceDynamicContent(){
    this.lib.placeholder.forEach((item, index) => {
      item= item.split('{{').join('');
      item= item.split('}}').join('');
      this.lib.dynamicData[item] = this.lib.replaceBy[index];
    });
  }

}

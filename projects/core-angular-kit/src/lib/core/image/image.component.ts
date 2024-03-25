import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ImageControl } from '../../models/core/image-control';

@Component({
  selector: 'lib-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent{
  @Input() lib!: ImageControl;
  @Output() redirectlink = new EventEmitter
  constructor() { }

  onClick(){
    this.redirectlink.emit();
  }

}

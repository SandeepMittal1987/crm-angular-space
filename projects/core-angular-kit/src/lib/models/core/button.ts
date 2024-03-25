import { Icore } from '../interfaces/icore';

export class Button implements Icore {
  width = '';
  matIcon = '';
  customCssClass = '';
  constructor(
    public title: string = '',
    public id: string = '',
    public isDisable: boolean = false,
    public isHide: boolean = false,
    public color: string = 'primary',
    public type: string = 'primary',
  ) {}
}

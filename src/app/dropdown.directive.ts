import { Directive, HostBinding,HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  private isOpen=false;

  constructor() { }

  @HostListener('click') open()
  {
    this.isOpen=true;
  }
  @HostListener('mouseenter') hover()
  {
    this.isOpen=true;
  }
  @HostListener('mouseleave') close()
  {
      this.isOpen=false;
  }
  @HostBinding('class.open') get opened()
  {
    return this.isOpen;
  }
}

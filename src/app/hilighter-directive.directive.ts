import { Directive, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHilighterDirective]'
})
export class HilighterDirectiveDirective implements OnInit {
  private bgColor:string;
  @Input() defaultColor='pink';
  @Input() hilighterColor='yellow';
  constructor() {
   }
   ngOnInit()
   {
      this.bgColor=this.defaultColor;
   }

   @HostListener('mouseenter') mouseover()
   {
     this.bgColor=this.hilighterColor;
   }
   @HostListener('mouseleave') mouseleave()
   {
     this.bgColor=this.defaultColor;
   }

   @HostBinding('style.backgroundColor') get setcolor()
   {
     return this.bgColor;
   }
}

import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
  @HostBinding('class.open') isOpen: boolean = false;

  constructor(private elRef: ElementRef) { }

  // @HostListener('click') toggleOpen () {
    // this.isDropdownOpen = !this.isDropdownOpen;
    // const action = this.isDropdownOpen ? 'addClass':'removeClass'
    // this.renderer[action](this.elRef.nativeElement, 'open')
  // }

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
}

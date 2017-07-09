// Importing required services for directives.
import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector : "[hoverOverElement]"
})
export class HoverOverComponent {
    
    constructor(private elem: ElementRef) {

    }

    // Hostlistener for mouseenter event.
    @HostListener('mouseenter', ['$event'])
    OnMouseEnter(event: any) {
        const row = event.target.innerText;
        if(row % 2) {
            this.colorChange('red'); // Make it red, it is odd.
        }
        else {
            this.colorChange('blue'); // Make is blue, it is even.
        }
    }
    
    //HostListener for mouseleave event.
    @HostListener('mouseleave')
    OnMouseLeave() {
        this.colorChange(null); // Make it as before.
    }


    private colorChange(color:string) {
        this.elem.nativeElement.style.color = color; // Change color of text
        //this.elem.nativeElement.style.backgroundColor = color;
    }
}
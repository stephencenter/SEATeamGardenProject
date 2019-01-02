import {Component, Input} from '@angular/core'

@Component ({
    selector: 'app-display-products',
    templateUrl: './display-products.component.html',
    styleUrls: ['./display-products.component.css']
})

export class DisplayProductsComponent {
    scroll = {}

    @Input()
    get livro(): any {
        return this.scroll
    }

    set livro(script : any) {
        this.scroll = (script)
    }
}
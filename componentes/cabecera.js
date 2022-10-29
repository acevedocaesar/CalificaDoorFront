class cabecera extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<header id="main-header"  class="py-2 bg-info text-white">
        <div class="container">
           <div class="row">
                <div class="col-md-6">
                   <h1>
                       <i class="<mat-icon>face</mat-icon>"></i>Estudiantes
                   </h1>
                </div>
           </div>
        </div>
   </header>`;
    }


}
window.customElements.define("app-cabecera", cabecera);
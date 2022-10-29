class botonesEdicion extends HTMLElement{

    constructor(){
       super();
           
    }

    
    connectedCallback(){
        this.innerHTML=` <section id="actions" class="py-4 mb-4 bg-light">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <a href="index.html" class="btn btn-ligth btn-block">
                        <i class="fas fa-arrow-left"></i> Regresar al inicio
                    </a>
                </div>
                <div id="botonActulizar" class="col-md-3">                                    
                </div>
                <div id="botonEliminar" class="col-md-3">                  
                </div>
            </div>
        </div>`;
    }

}
window.customElements.define("app-btoedicion",botonesEdicion);
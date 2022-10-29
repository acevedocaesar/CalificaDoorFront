class botonesNavegacion extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<section id="actions" class="py-4 mb-4 bg-ligth">
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <a href="#" class="btn btn-primary btn-block" data-toggle="modal" data-target="#agregarEstudianteModal">
                        <i class="fas fa-plus"></i>Agregar estudiante
                    </a>
                </div>
            </div>
        </div>
    </section>`;
    }


}
window.customElements.define("app-btnnavegacion", botonesNavegacion);
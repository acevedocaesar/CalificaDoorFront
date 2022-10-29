class agregarEstudiante extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = ` <div class="modal fade" id="agregarEstudianteModal">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-info text-white">
                    <h5 class="modal-title">Agregar Estudiante</h5> 
                    <button class="close" data-dismiss="modal">
                        <span>&times;</span>
                    </button>
                </div>                
                <form  id="formEstudiante" class="was-validated">                    
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="documento">Documento</label>
                            <input type="doc" class="form-control"  id="documento" name="documento" required>
                        </div>
                        <div class="form-group">
                            <label for="nombres">Nombres</label>
                            <input type="text" class="form-control" id="nombres" name="nombres" required>
                        </div>
                        <div class="form-group">
                            <label for="apellidos">Apellidos</label>
                            <input type="text" class="form-control" id="apellidos" name="apellidos" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" class="form-control" id="email" name="email" required>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-primary" onclick="create()" type="submit">Guardar</button>
                    </div>    
                </form>
            </div>
        </div>
    </div>`;
    }


}
window.customElements.define("app-addestudiante", agregarEstudiante);
class listaEstudiantes extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML =`<section id="estudiantes">
        <div class="container">
          <div class="row">
            <div class="col-md-9">
              <div class="card">
                <div class="card-header">
                  <h4>Listado de estudiantes</h4>
                </div>
                <table class="table table-striped">
                  <thead class="thead-dark">
                    <tr>
                      <th>#</th>
                      <th>Nombre del estudiante</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody id="listEstudiantes">
                  </tbody>
                </table>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card text-center bg-success text-white mb-3">
                <div class="card-body">
                  <h3>Numero de estudiantes</h3>
                  <h4 class="display-4" >
                    <i class="fas fa-users"></i>
                    <p id="totalEstudiantes"></p>                    
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>`;
    }


}
window.customElements.define("app-estudiantes", listaEstudiantes);
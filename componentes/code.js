const pathBackend = "http://localhost:8081/api/";


let getAllEstudiantes = () => {
    const endPoint = pathBackend + 'estudiantes';
    fetch(endPoint)
        .then(response => response.json())
        .then(data => show(data))
        .catch(error => console.log);

};

let show = (estudiantes) => {
    let listaEstudiantes = '';
    let totalEstudiantes = estudiantes.length;
    estudiantes.forEach(estudiante => {
        listaEstudiantes += `<tr>
                          <td>${estudiante.id}</td>
                          <td>${estudiante.nombres} ${estudiante.apellidos}</td>
                          <td>
                           <a href="editar.html?id=${estudiante.id}" class="btn btn-secondary"> <i class=fas fa-angle-double-rigth"></i>
                           Editar </a>
                          </td>
                        </tr>`;
    });
    document.getElementById("listEstudiantes").innerHTML = listaEstudiantes;
    document.getElementById("totalEstudiantes").innerHTML = totalEstudiantes;

};

let create = () => {
    const endPoint = pathBackend + 'estudiantes';
    const forma = document.forms["formEstudiante"];
    const p_documento = forma["documento"];
    const p_nombres = forma["nombres"];
    const p_apellidos = forma["apellidos"];
    const p_email = forma["email"];

    const estudiante = {  documento: p_documento.value, nombres: p_nombres.value, apellidos: p_apellidos.value, email: p_email.value};


    fetch(endPoint, {
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            documento: estudiante.documento,
            nombres: estudiante.nombres,
            apellidos: estudiante.apellidos,
            email: estudiante.email,
            
        }),
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))

};

let getEstudianteById = () => {
    const urlSearchParamas = new URLSearchParams(window.location.search);
    const id = urlSearchParamas.get("id");
    const endPoint = pathBackend + "estudiante/" + id;
    fetch(endPoint)
        .then(response => response.json())
        .then(data => loadFormEdit(data))

};

let loadFormEdit = (estudiante) => {
    const forma = document.forms['formEditar'];
    forma['documento'].value = estudiante.documento;
    forma['nombres'].value = estudiante.nombres;
    forma['apellidos'].value = estudiante.apellidos;
    forma['email'].value = estudiante.email;
    

    document.getElementById("botonActulizar").innerHTML = `<button onclick="update(${estudiante.id})" type="submit" class="btn btn-success btn-block">
                                                            <i class="fas fa-check"></i>
                                                            Guardar Estudiante
                                                            </button>  `;

    document.getElementById("botonEliminar").innerHTML=`<button onclick="eliminar(${estudiante.id})" class="btn btn-danger btn-block">
                                                                <i class="fas fa-trash"></i> Eliminar Estudiante
                                                        </button>`;


};

let update=(id)=>{
    const endPoint=pathBackend+'estudiante/'+id;
    const forma = document.forms['formEditar'];
    const p_documento=forma['documento'].value;
    const p_nombres=forma['nombres'].value;
    const p_apellidos=forma['apellidos'].value;
    const p_email=forma['email'].value;
    

    fetch(endPoint, {
            method: 'PUT',
            body: JSON.stringify({
                documento: p_documento,
                nombres: p_nombres,
                apellidos: p_apellidos,
                email: p_email,
            }),
            headers: {
                "Content-type": "application/json"
            }
        })             
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error=>console.log(error));

      window.location.href="index.html";

};

let eliminar=(id)=>{
    const endPoint=pathBackend+`estudiante/${id}`;
    fetch(endPoint, {
       method: 'DELETE'
    });
    window.location.href="index.html";
};

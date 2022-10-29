class piePagina extends HTMLElement{

    constructor(){
       super();
           
    }

    
    connectedCallback(){
        this.innerHTML=`<footer id="pie-pagina" class="bg-warning text-white mt-5 p-5">
        <div class="container">
             <div class="col">
                 <p class="lead text-center">
                    Copyright &copy;
                 </p>
             </div>
        </div>
     </footer>`;
    }

}
window.customElements.define("app-footer",piePagina);
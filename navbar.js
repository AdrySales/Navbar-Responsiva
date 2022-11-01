class NavBarResponsiva{

    //metodo construtor
    constructor (menuDinamico,navList,navLinks){
        this.menuDinamico=document.querySelector(menuDinamico);
        this.navList=document.querySelector(navList);
        this.navLinks=document.querySelector(navLinks);
        this.activeClass="active";

        this.chamada=this.chamada.bind(this);
    }

    //metodo que adiciona evento de click no btn do menu
    addClickEvent(){
      this.menuDinamico.addEventListener("click",this.chamada);
    }

   

    //chama o menu vertical
    chamada(){
        this.navList.classList.toggle(this.activeClass);
      }

    //condicao de existencia de menuDinamico no documento
    init(){
        if(this.menuDinamico){
         this.addClickEvent();
        }
        return this;
    }
}

const navBarResponsiva =new NavBarResponsiva(
    ".menu-dinamico",
    ".nav-list",
    ".nav-list li",
);

navBarResponsiva.init();

document.getElementById('buscar').addEventListener('click', function(){
    event.preventDefault();
const buscado = document.getElementById('busqueda').value.toLowerCase();
const resultadoEncontrado =document.getElementById('resultadosBusqueda');
resultadoEncontrado.innerHTML= ''

const CLASES = [
{name:'DOM',href: "https://jovenesaprogramar.schoology.com/course/7327514202/materials?f=820900704"},
{name:'CSS',href: "https://jovenesaprogramar.schoology.com/course/7327514202/materials?f=820232794"},
{name:'HTML',href: "https://jovenesaprogramar.schoology.com/course/7327514202/materials?f=820232742"},
{name:'JavaScript', href: "https://jovenesaprogramar.schoology.com/course/7327514202/materials?f=820900704"},
];



const filtradoBusqueda = CLASES.filter(item =>item.name.toLowerCase().includes(buscado));

if(filtradoBusqueda.length > 0) {
    filtradoBusqueda.forEach(item => {
        const encontrado = document.createElement('a');
        encontrado.textContent = item.name;
        encontrado.href = item.href;
        encontrado.classList.add('list-group-item', 'list-group-item-action');
        resultadoEncontrado.appendChild(encontrado);
        resultadoEncontrado.appendChild(document.createElement('br'));
    });
}else{
    resultadoEncontrado.textContent= "No se han encontrado resultados"
}

});

document.addEventListener('DOMContentLoaded',function(){
    const SEMANAS =[
        {name:'Semana 1', href: "#sem1",src:"./imagenes/card1.png",h3:"Semana 1",p:"En esta primera semana queremos presentarte la modalidad del curso y las primeras herramientas que vas a usar como desarrollador web."},
        {name:'Semana 2',href: "#sem2",src:"./imagenes/card2.png",h3:"Semana 2",p:"En esta semana vas a profundizar en cómo dar estructura a una página web empleando la herramienta básica de HTML.Veremos sus distintas etiquetas y su uso."},
        {name:'Semana 3',href: "#sem3",src:"./imagenes/card3.png",h3:"Semana 3",p:"La idea es que esta semana aprendas a aplicar reglas de estilo para lograr un mejor resultado visual en el contenido. Para lograr esto vamos a comenzar a trabajar con CSS."},
        {name:'Semana 4',href: "#sem4",src:"./imagenes/card4.png",h3:"Semana 4",p:"Con Javascript (JS) comenzarás a ampliar las funcionalidades de una página web "},
        ];
        SEMANAS.forEach(item =>{
            document.getElementById('weekcards').innerHTML+="<div class='col'>"+
            "<div class='card' style=\"width: 18rem;\">"+
              "<img src=\""+item.src+"\" class=\"card-img-top\" alt=\"...\">"+
              "<div class=\"card-body\">"+
                "<h3 class=\"card-title\">"+item.name+"</h3>"+
                "<p class=\"card-text\">"+item.p+"</p>"+
                "<button type='button' class='btn btn-success' onclick=\"window.location.href='" + item.href + "'\">Ver Más</button>"+
              "</div>"+
            "</div> </div>"
        });

     /*
     Forma cavernícolamente larga:
     
     SEMANAS.forEach(item =>{
        const col = document.createElement('div');
        col.className="col";


        const card = document.createElement('div');
        card.className="card";
        card.style = "width: 18rem;";


        const imagen = document.createElement("img");
        imagen.className="card-img-top";
        imagen.src=item.src;

        const cardbody = document.createElement('div');
        cardbody.className="card-body";

        const title = document.createElement('h3');
        title.className="card-title";
        title.textContent=item.h3;

        const parrafo = document.createElement('p');
        parrafo.className="card-text";
        parrafo.textContent = item.p;

        const link= document.createElement('a');
        link.className="btn btn-primary";
        link.href=imagen.href;
        link.textContent = "Ver más";

        cardbody.appendChild(title);
        cardbody.appendChild(parrafo);
        cardbody.appendChild(link)
        card.appendChild(imagen);
        card.appendChild(cardbody);
        col.appendChild(card);
        document.getElementById('weekcards').appendChild(col);*/

    })
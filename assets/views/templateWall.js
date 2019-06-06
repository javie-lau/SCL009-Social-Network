import{templateStart} from './templateStart.js'

export const templateWall =() => {

    document.getElementById( "conteinerHead").innerHTML= ` 
    <div class= "conteinerH">
    <h1>KETRAWE</h1>
    </div>
    `
      document.getElementById('root').innerHTML = `
     
       <p>aqui va lo de la denis</p>
       <button id="atras" ></button>
       
  
      `

document.getElementById('atras').addEventListener('click', () => {
    templateStart();
    window.location.hash = '#/inicio';
})};
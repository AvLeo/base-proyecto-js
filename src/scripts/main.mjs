import { getAllUsers } from "./users/getUsers.mjs";
import { addUser } from "./users/addUser.mjs";
import { getAllPost } from "./posts/getAllPost.mjs";

getAllUsers();

const $ = selector => document.querySelector(selector)

const $btnRegistrarse = $('#registrarse')
const $btnIniciar = $('#iniciar-sesion')
const $btnFormRegistro = $('.registro')
const $btnFormInicio = $('.inicio')
const $Registrar = $('#btn-registro')
const $nombre = $('#nombre')
const $apellido = $('#apellido')
const $usuario = $('#usuario')
const $password = $('#password')
const $btnPosts = $('#show-posts')

$btnRegistrarse.addEventListener('click', () =>{

    $btnFormRegistro.classList.remove('ocultar')
    $btnFormInicio.classList.add('ocultar')

})

$btnIniciar.addEventListener('click', () =>{

    $btnFormRegistro.classList.add('ocultar')
    $btnFormInicio.classList.remove('ocultar')

})

$Registrar.addEventListener('click', (e) => {
    if($nombre.value !== "" && $apellido.value !== "" && $usuario.value !== "" && $password.value !== ""){
        addUser($nombre.value, $apellido.value, $usuario.value, $password.value)
        alert('El registro fue exitoso')
        $nombre.value = ""
        $apellido.value = ""
        $usuario.value = ""
        $password.value = ""
        $btnFormRegistro.classList.add('ocultar')
        $btnFormInicio.classList.remove('ocultar')
    }
})

$btnPosts.addEventListener('click', () => {
    getAllPost();
})
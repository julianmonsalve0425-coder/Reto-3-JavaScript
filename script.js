// Arreglo para almacenar los nombres ingresados
let listaNombres = [];

// Referencias a los elementos del documento HTML
const inputNombre = document.getElementById('inputNombre');
const btnAgregar = document.getElementById('btnAgregar');
const txtNombres = document.getElementById('txtNombres');
const btnLimpiar = document.getElementById('btnLimpiar');

// Función para agregar el nombre y ordenar la lista
function agregarYOrdenar() {
  const nombre = inputNombre.value.trim();

  // Validar que no esté vacío
  if (nombre !== '') {
    // 1. Agregar el nuevo nombre al arreglo
    listaNombres.push(nombre);

    // 2. Ordenar alfabéticamente en orden ascendente
    listaNombres.sort((a, b) => a.localeCompare(b));

    // 3. Mostrar los nombres en el área de texto, uno por línea
    txtNombres.value = listaNombres.join('\n');

    // 4. Limpiar la caja de texto y mantener el cursor activo
    inputNombre.value = '';
    inputNombre.focus();
  }
}

// Función para limpiar la lista y la interfaz
function limpiarLista() {
  // Vaciar el arreglo y limpiar los campos de texto
  listaNombres = [];
  txtNombres.value = '';
  inputNombre.value = '';
  inputNombre.focus();
}

// Asignar eventos a los botones
btnAgregar.addEventListener('click', agregarYOrdenar);
btnLimpiar.addEventListener('click', limpiarLista);

// Permitir agregar el nombre también al presionar la tecla Enter
inputNombre.addEventListener('keydown', (evento) => {
  if (evento.key === 'Enter') {
    agregarYOrdenar();
  }
});

// Definir la información de las habitaciones en un array JavaScript
 const habitaciones = [
    { id: "101", imagen: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600", precio: 100, tipo: "Estándar", reservada: false },
    { id: "102",imagen: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=600", precio: 150, tipo: "Suite", reservada: false },
    { id: "103", imagen: "https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=600", precio: 80, tipo: "Estándar", reservada: false },
    { id: "104", imagen: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&", precio: 80, tipo: "Estándar", reservada: false },
    { id: "105", imagen: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&",  precio: 80, tipo: "Suite", reservada: false },
    { id: "106", imagen: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&",  precio: 80, tipo: "Estándar", reservada: false },
    { id: "107", imagen: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&",  precio: 80, tipo: "Estándar", reservada: false },
    { id: "108", imagen: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&",  precio: 80, tipo: "Estándar", reservada: false },
    { id: "109", imagen: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&",  precio: 80, tipo: "Estándar", reservada: false },
    { id: "110", imagen: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&",  precio: 80, tipo: "Estándar", reservada: false },
    { id: "111", imagen: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&",  precio: 80, tipo: "Estándar", reservada: false },
    // Agregar más habitaciones aquí
];

// Obtener el contenedor de habitaciones
const habitacionesContainer = document.getElementById('habitaciones-container');
const modal = document.getElementById('reservaModal');
const cerrarModalBtn = document.getElementById('cerrarModal');

// Función para mostrar el modal de reserva
function mostrarModal(habitacion) {
    modal.style.display = 'block';

    const reservaForm = document.getElementById('reservaForm');
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');

    reservaForm.addEventListener('submit', function(event) {
        event.preventDefault();
        if (!habitacion.reservada) {
            habitacion.reservada = true;
            habitacion.div.classList.add('reservada');
            habitacion.div.querySelector('.reservar-btn').innerText = 'Reservada';
            modal.style.display = 'none';
            nombreInput.value = '';
        }
    });
}

// Recorrer el array de habitaciones y crear elementos HTML para cada habitación
habitaciones.forEach(habitacionInfo => {
    const divHabitacion = document.createElement('div');
    divHabitacion.className = 'habitacion';
    divHabitacion.setAttribute('data-id', habitacionInfo.id);
    if (habitacionInfo.reservada) {
        divHabitacion.classList.add('reservada');
    }
    divHabitacion.innerHTML = `
        <img src="${habitacionInfo.imagen}.jpg" alt="Habitación ${habitacionInfo.id}" width= "100%"> <!-- Agregar imagen -->
        <h2>Habitación ${habitacionInfo.id}</h2>
        <p>Tipo: ${habitacionInfo.tipo}</p>
        <p>Precio: $${habitacionInfo.precio} por noche</p>
        <button class="reservar-btn">${habitacionInfo.reservada ? 'Reservada' : 'Reservar'}</button>
    `;

    // Al hacer clic en el botón, mostrar el modal de reserva
    const reservarBtn = divHabitacion.querySelector('.reservar-btn');
    reservarBtn.addEventListener('click', function() {
        const habitacion = habitaciones.find(hab => hab.id === habitacionInfo.id);
        if (!habitacion.reservada) {
            mostrarModal(habitacion);
        }
    });

    habitacionInfo.div = divHabitacion;
    habitacionesContainer.appendChild(divHabitacion);
});

// Cerrar el modal al hacer clic en el botón "Cerrar"
cerrarModalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Obtener una referencia al campo de búsqueda por su id
const buscadorInput = document.getElementById('buscador');

// Escuchar el evento de entrada en el campo de búsqueda
buscadorInput.addEventListener('input', function() {
    const terminoBusqueda = buscadorInput.value.toLowerCase();

    habitaciones.forEach(habitacionInfo => {
        const divHabitacion = habitacionInfo.div;
        const nombreHabitacion = habitacionInfo.tipo.toLowerCase();
        if (nombreHabitacion.includes(terminoBusqueda) || habitacionInfo.id.includes(terminoBusqueda)) {
            divHabitacion.style.display = 'block',
            divHabitacion.style.width = '48%';
        } else {
            divHabitacion.style.display = 'none';
        }
    });
});
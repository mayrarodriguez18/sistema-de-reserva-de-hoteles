 // Definir la información de las habitaciones en un array JavaScript
 const habitaciones = [
    { id: "101", precio: 100, tipo: "Estándar", reservada: false },
    { id: "102", precio: 150, tipo: "Suite", reservada: false },
    { id: "103", precio: 80, tipo: "Estándar", reservada: false },
    { id: "104", precio: 80, tipo: "Estándar", reservada: false },
    { id: "105", precio: 80, tipo: "Suite", reservada: false },
    { id: "106", precio: 80, tipo: "Estándar", reservada: false },
    { id: "107", precio: 80, tipo: "Estándar", reservada: false },
    { id: "108", precio: 80, tipo: "Estándar", reservada: false },
    { id: "109", precio: 80, tipo: "Estándar", reservada: false },
    { id: "110", precio: 80, tipo: "Estándar", reservada: false },
    { id: "111", precio: 80, tipo: "Estándar", reservada: false },
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
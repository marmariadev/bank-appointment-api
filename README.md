# bank-appointment-api

## Contexto de la Aplicación

**Tipo de Establecimiento**: Banco.

## Identificación de Usuarios

- **Clientes**: Usuarios que desean reservar un turno para realizar operaciones bancarias.
- **Administradores**: Empleados del banco que pueden gestionar los turnos, como confirmar, cancelar o modificar disponibilidades.

## Historias de Usuario

### Clientes:

- Como cliente, quiero poder reservar un turno online para realizar operaciones bancarias, para evitar esperas innecesarias.
- Como cliente, quiero recibir una confirmación de mi turno por email, para tener un registro de la fecha y hora asignadas.
- Como cliente, quiero poder cancelar un turno reservado, en caso de que ya no lo necesite o no pueda asistir.

### Administradores:

- Como administrador, quiero poder ver todos los turnos reservados para el día, para organizar mejor la atención al cliente.
- Como administrador, quiero poder cancelar turnos, en caso de necesidad del banco.

## Requisitos Específicos Basados en Historias de Usuario

- Autenticación de usuarios para reservar turnos.
- Interfaz para selección de fechas y horas disponibles para turnos.
- Sistema de confirmación y cancelación de turnos, con envío de email.
- Visualización y gestión de turnos para administradores.

## Extra Credits

- **Envío de confirmación vía email**: Implementar un sistema que automáticamente envíe un email al usuario al reservar o cancelar un turno.

## Esquema de la Base de Datos

### Entidades y Atributos

#### Users

- `user_id`: único para cada usuario (INT)
- `name`: nombre del usuario (VARCHAR)
- `email`: email del usuario (VARCHAR)
- `role`: cliente o administrador (ENUM)

#### Appointments

- `appointment_id`: único para cada turno (INT)
- `datetime`: fecha y hora del turno (DATETIME)
- `user_id`: quién reserva el turno (INT, FOREIGN KEY)
- `status`: reservado, cancelado (ENUM)

#### Credentials (integradas en la tabla de Users)

- `user_id`: (INT, FOREIGN KEY)
- `username`: (VARCHAR)
- `password`: (VARCHAR)

### Relaciones Entre Entidades

- Cada turno (`Appointments`) está asociado a un único usuario (`Users`), pero un usuario puede tener múltiples turnos reservados.
- Los administradores tienen acceso a todas las reservas para su gestión.

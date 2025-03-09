# ClassLink - Aplicación en React Native - Proyecto Desarrollo de Interfaces

## Descripción del Proyecto

ClassLink es una aplicación móvil desarrollada en React Native que proporciona a los estudiantes información actualizada sobre noticias relevantes en su localidad y horarios de clases. La aplicación permite a los usuarios:

- Visualizar noticias relevantes
- Consultar su horario de clases a través de un calendario interactivo
- Navegar entre diferentes secciones mediante una interfaz intuitiva

## Tecnologías Utilizadas

- **Frontend**: React Native, TypeScript
- **Backend**: Node.js, Express
- **Base de Datos**: MongoDB
- **Navegación**: React Navigation
- **UI Components**: React Native Calendars, React Native Vector Icons

## Estructura del Proyecto

El proyecto está organizado en varios componentes clave:

1. **Pantallas Principales**:
   - `Home.tsx`: Pantalla de inicio con el logo de la aplicación
   - `Login.tsx`: Pantalla de inicio de sesión
   - `Main.tsx`: Contiene la navegación por pestañas
   - `Inicio.tsx`: Muestra las noticias actuales
   - `Calendario_screen.tsx`: Interfaz del calendario y horarios

2. **Componentes**:
   - `Schedule.tsx`: Componente para mostrar horarios diarios de clase

3. **Contexto**:
   - `ScheduleContext.tsx`: Gestiona los datos del horario a nivel global

4. **Configuración**:
   - `calendarLocale.ts`: Configuración de localización del calendario
   - `connect.cjs`: Script para probar la conexión a MongoDB
   - `servidor.js`: Servidor Express que proporciona la API para los horarios

## Objetivos Conseguidos

### 1. Creación de Componentes Adaptados a la Aplicación
- ✅ Implementación de componentes reutilizables y modulares
- ✅ Adaptación de los componentes a los requerimientos específicos de la aplicación

### 2. Diseño del Menú y Gestión entre Pantallas
- ✅ Creación de un menú de navegación inferior intuitivo y funcional
- ✅ Implementación de navegación fluida entre pantallas mediante React Navigation

### 3. Uso de Datos Externos
- ✅ Integración con MongoDB para almacenar y recuperar datos de horarios
- ✅ Manejo eficiente de estados de carga y errores durante las peticiones
- ✅ Implementación de función de refresco para actualizar datos

### 4. Creación de Componentes Dinámicos
- ✅ Los componentes se adaptan a los datos recibidos (FlatList para noticias, Schedule para horarios)
- ✅ Actualización correcta de la interfaz cuando cambian los datos

### 5. Uso de Contextos Definidos
- ✅ Implementación del patrón Context para gestionar los datos de horarios
- ✅ Uso adecuado de proveedores y consumidores de contexto

## Objetivos Parcialmente Conseguidos

### Uso de Datos Externos
- ⚠️ En la sección de noticias, actualmente se utilizan datos estáticos en lugar de datos obtenidos de una API externa. Sin embargo, la estructura está preparada para implementar esta funcionalidad.

### Autenticación de Usuarios
- ⚠️ La pantalla de login está implementada a nivel de UI, pero no tiene funcionalidad real de autenticación conectada a un backend.

## Configuración del Proyecto

### Requisitos Previos
- Node.js
- MongoDB
- Emulador Android o dispositivo físico

### Configuración del Servidor
1. Navega a la carpeta del servidor
2. Crea un archivo `config.env` con la siguiente estructura:
   ```
   ATLAS_URI=mongodb+srv://pabloquesada:MPALZE@cluster0.cvb39.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   PORT=5000
   ```
3. Instala las dependencias: `npm install`
4. Inicia el servidor: `node servidor.js`

### Ejecución de la Aplicación
1. Navega a la carpeta de la aplicación
2. Instala las dependencias: `npm install`
3. Inicia el emulador Android
4. Ejecuta la aplicación: `npx react-native run-android`

## Estructura de la Base de Datos

La base de datos MongoDB contiene una colección llamada `Horario` con la siguiente estructura:

```javascript
{
  "Lunes": [
    { "time": "8:30 - 10:30", "subject": "Matemáticas", "classroom": "Aula 1.1" },
    { "time": "11:00 - 13:00", "subject": "Física", "classroom": "Laboratorio 2" }
  ],
  "Martes": [
    { "time": "9:30 - 11:30", "subject": "Programación", "classroom": "Aula de Informática" }
  ],
  // etc..
}
```

## Notas Adicionales

- La aplicación está optimizada para dispositivos Android
- Se ha implementado manejo de errores y estados de carga para mejorar la experiencia de usuario
- El código utiliza TypeScript para proporcionar tipos estáticos y mejorar la seguridad del código

# Notes 

[![K-071.jpg](https://i.postimg.cc/wvYsLG7P/K-071.jpg)](https://postimg.cc/zLpB1pwS)

Aplicación web de notas con JavaScript.

### HTML
Uso de HTML para crear una aplicación web de notas:

- **h1**: Título de la aplicación.
- **div**: Sección para crear notas y carpetas.
    - **div**: Sección para crear carpetas.
        - **input**: Nombre de la carpeta.
        - **button**: Crear carpeta.
    - **div**: Sección para crear notas.
        - **textarea**: Contenido de la nota.
        - **button**: Crear nota.
        - **select**: Seleccionar carpeta para la nota.
- **div**: Sección para ver las notas.
    - **button**: Eliminar carpeta.
    - **div**: Sección para ver las notas.
        - **h3**: Título de la carpeta.
        - **p**: Contenido de la nota.

### CSS
Propiedades de CSS para los elementos de la aplicación

### JavaScript

#### Script 1
Agregar etiquetas de HTML desde JavaScript usando **document.createElement**, **insertAdjacentHTML** e **insertAdjacentElement**.

#### Script 2
 Uso de **EventListener** para agregar eventos a los elementos de la aplicación con botones:

##### AddFolder
Uso de **insertAdjacentHTML** e **insertAdjacentElement** para agregar un div con los elemetos para mostrar una carpeta.

##### AddFiles
Uso de **insertAdjacentHTML** e **insertAdjacentElement** para agregar textos en divs con los elementos para mostrar notas.
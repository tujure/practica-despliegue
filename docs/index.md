# Guía de uso de Visita Águilas

Visita Águilas es una web estática que presenta tres lugares de interés y muestra cuántos elementos hay en la lista.

## Instalación

Para descargar el proyecto necesitas Git. Para abrir la web basta con un navegador.

```bash
git clone https://github.com/tujure/practica-despliegue.git
cd practica-despliegue
```

## Ejecución

Abre en el navegador el archivo `index.html` de la raíz del proyecto. Puedes hacerlo con doble clic desde el explorador de archivos.

## Pruebas manuales

Con la página abierta, comprueba estos cuatro resultados:

1. El encabezado principal muestra «Visita Águilas: guía local».
2. El castillo de San Juan de las Águilas aparece como tercer elemento de la lista, después de Isla del Fraile.
3. Debajo de la lista aparece «Total de lugares: 3».
4. El pie de página aparece debajo del contador y muestra «Visita Águilas - Guía local».

## Variables de entorno

La web funciona sin variables de entorno, archivo `.env` ni credenciales.

## Documentación para desarrolladores

El `README.md` del repositorio explica cómo generar esta guía con MkDocs y la referencia de JavaScript con JSDoc.

La referencia de JSDoc documenta `contarLugares(lista)`. La función recibe una lista HTML y devuelve el número de lugares que contiene.
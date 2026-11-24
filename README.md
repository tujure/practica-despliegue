# Visita Águilas

Web estática que presenta tres lugares de interés de Águilas. La página incluye una lista de lugares, un contador en JavaScript y un pie de página.

## Instalación

Necesitas Git para clonar el repositorio y un navegador para abrir la web.

```bash
git clone https://github.com/tujure/practica-despliegue.git
cd practica-despliegue
```

## Ejecución

Abre en el navegador el archivo `index.html` de la raíz del proyecto. Puedes hacerlo con doble clic desde el explorador de archivos. La web se ejecuta directamente en el navegador.

## Pruebas manuales

Con `index.html` abierto en el navegador, comprueba lo siguiente:

1. El encabezado principal muestra «Visita Águilas: guía local».
2. El castillo de San Juan de las Águilas aparece como tercer elemento de la lista, después de Isla del Fraile.
3. Debajo de la lista aparece «Total de lugares: 3».
4. El pie de página aparece debajo del contador y contiene el texto «Visita Águilas - Guía local».

## Variables de entorno

La web funciona sin variables de entorno, archivo `.env` ni credenciales.

## Generación de la documentación

Necesitas Python 3 con `pip`, Node.js y npm. Ejecuta los comandos desde
la carpeta `practica-despliegue`, donde están `mkdocs.yml` y `package.json`.
Si estás en la carpeta superior `Despliegue`, entra primero con
`cd practica-despliegue`.

Para descargar las dependencias, necesitas una conexión con acceso a
los registros de paquetes de Python y npm.

### Guía de uso con MkDocs

#### Windows (PowerShell)

```powershell
py -3.13 -m pip install mkdocs==1.6.1
py -3.13 -m mkdocs build --strict
```

Abre `site/index.html` en el navegador.

#### Ubuntu

Si falta el soporte para crear entornos virtuales, instálalo primero:

```bash
sudo apt update
sudo apt install python3-venv
```

Si el intento anterior dejó `.venv` incompleto, vuelve a crearlo
ejecutando el primer comando del siguiente bloque. Actívalo y comprueba
que `pip` muestra una ruta dentro de `.venv` antes de instalar MkDocs.

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip --version
python -m pip install mkdocs==1.6.1
python -m mkdocs build --strict
```

Cuando aparezca `Documentation built`, abre la guía desde la misma carpeta:

```bash
xdg-open site/index.html
```

### Referencia de JavaScript con JSDoc

Desde la raíz de `practica-despliegue`, ejecuta:

```bash
npm ci
npx jsdoc src/lugares.js -d docs-api
```

Abre `docs-api/index.html` en el navegador. En Ubuntu, desde esa misma
carpeta, puedes abrirlo con:

```bash
xdg-open docs-api/index.html
```

En el menú **Global**, comprueba que aparece `contarLugares`. La función
recibe una lista de tipo `HTMLUListElement` y devuelve un `number`.
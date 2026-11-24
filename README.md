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

Para generar la documentación, necesitas Python 3 con `pip`, Node.js y npm. Ejecuta los comandos desde la raíz del proyecto, donde están `mkdocs.yml` y `package.json`.

### Guía de uso con MkDocs

En Windows con PowerShell:

```powershell
py -3.13 -m pip install mkdocs==1.6.1
py -3.13 -m mkdocs build --strict
```

En Ubuntu o Linux, usa un entorno virtual de Python:

```bash
python3 -m venv .venv
source .venv/bin/activate
python -m pip install mkdocs==1.6.1
python -m mkdocs build --strict
```

Si Ubuntu indica que falta el módulo `venv`, instala `python3-venv` y vuelve a crear el entorno.

Abre `site/index.html` en el navegador para consultar la guía de uso.

### Referencia de JavaScript con JSDoc

En Windows o Linux:

```bash
npm ci
npx jsdoc src/lugares.js -d docs-api
```

Abre `docs-api/index.html` en el navegador. En el menú **Global**, comprueba que aparece `contarLugares`, que recibe una lista de tipo `HTMLUListElement` y devuelve un `number`.
# Ejercicio 2 - Manejo de Estados

**Alumno:** Juan Sebastián Astudillo Ordóñez
**Materia:** Herramientas Visuales de Programación

---

## Descripción

Este proyecto corresponde al **Ejercicio 2**, enfocado en el **manejo de estados** en React y comprende tres secciones principales:

1. **Contador**: Un contador interactivo con botones para incrementar, decrementar y reiniciar.
2. **E-commerce básico**: Catálogo de productos (ropa, mini cascos, accesorios) con modal de detalles, manejo de stock y tallas.
3. **Buscador**: Campo de búsqueda que muestra la consulta en tiempo real
Se utilizan hooks de React como `useState` y `useEffect` para controlar el estado y la interactividad. El estilo se realiza con **Tailwind CSS**.

---

## Requisitos

Antes de ejecutar el proyecto, asegúrate de tener instalado **pnpm**. Puedes instalarlo con:

```bash
npm install -g pnpm
```

---

## Instalación y ejecución

1. Clonar el repositorio:

```bash
git clone https://github.com/SebasDev807/ASTUDILLO_SEBASTIAN-actividad-2.git
```

2. Entrar a la carpeta del proyecto:

```bash
cd ASTUDILLO_SEBASTIAN-actividad-2
```

3. Instalar dependencias con pnpm:

```bash
pnpm install
```

4. Ejecutar el proyecto en modo desarrollo:

```bash
pnpm dev
```

5. Abrir tu navegador y navegar a `http://localhost:5173` (o el puerto que indique la terminal).

---

## Estructura del proyecto

* `src/components/ProductCard.tsx` → Componente que muestra la tarjeta de cada producto y abre el modal.
* `src/components/ProductDetails.tsx` → Componente que muestra los detalles del producto en un modal con tallas y stock.
* `src/ejercicio/Ejercicio1.tsx` → Contador interactivo con incremento, decremento y reinicio.
* `src/components/Searchbox.tsx` → Componente para buscar y filtrar productos.
* `src/data/products.ts` → Lista de productos con tallas, stock, descripción y características.
* `src/pages/Ejercicio2.tsx` → Página principal del ejercicio donde se renderizan todas las secciones.

---

## Funcionalidades

* **Contador:** Incrementar, decrementar y reiniciar, con animación y estilos modernos.
* **Catálogo E-commerce:** Abrir y cerrar modal de producto, mostrar tallas y stock disponibles.
* **Buscador:** Filtrar productos dinámicamente según el nombre.
* Uso de **`useState` y `useEffect`** para control de estados y efectos.
* Estilo moderno y responsive con **Tailwind CSS**.

---

## Notas

* Este proyecto fue realizado como **actividad de clase** para la materia de **Herramientas Visuales de Programación**.
* Recomendado revisar los componentes para comprender el manejo de **estado y comunicación entre componentes**.

---

**Autor:** Juan Sebastián Astudillo Ordóñez

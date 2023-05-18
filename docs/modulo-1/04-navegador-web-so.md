---
id: clase-04
title: Modulo 1 - Navegador web - Sistema operativo
sidebar_label: 04) Navegador web - Sistema operativo
---

# Navegador web - Sistema operativo

## 🏁 Objetivos

- Conocer qué son los navegadores web y su importancia en el desarrollo web.
- Identificar los navegadores web más utilizados y conocer las diferencias entre ellos.
- Aprender a utilizar la consola del navegador para depurar código y monitorear el rendimiento del sitio web.
- Comprender el funcionamiento de JavaScript en los navegadores.
- Practicar el uso de la consola del navegador y de JavaScript.
- Valorar la importancia de los navegadores web en el desarrollo web y su impacto en la experiencia del usuario.
- Diferencias entre sistemas operativos: características y particularidades de cada uno.

---

## 📝 Contenidos

#### Introducción

- Presentación del tema y objetivos de la clase.
- Explicación de la importancia de los navegadores web en el desarrollo web.

#### Conceptos básicos

- Introducción a los navegadores web: qué son, para qué sirven y cómo funcionan.
- Navegadores más utilizados: cuáles son los navegadores más utilizados y por qué.
- Internet Explorer y su realidad. Evolución a Edge.
- Diferencias entre navegadores: cuáles son las diferencias más significativas entre los navegadores web más utilizados, tales como Chrome, Firefox, Safari, Opera y Edge.

#### Consola del navegador

- Uso de la consola del navegador: qué es la consola del navegador, para qué sirve y cómo se accede a ella.
- Uso de la consola para el desarrollo web: cómo utilizar la consola para depurar código HTML, CSS y JavaScript, así como también para ver la red y el rendimiento del sitio web.

#### Funcionamiento de JavaScript en los navegadores

- Breve introducción a JavaScript: qué es JavaScript, para qué sirve y cómo funciona.
- Funcionamiento de JavaScript en los navegadores: cómo los navegadores interpretan y ejecutan el código JavaScript.
- Explicación breve de los motores de Javascript en los navegadores: **V8** en Google Chrome, **SpiderMonkey** en Firefox, **Chakra** en Microsoft Edge, y **JavaScriptCore** en Safari.

## 💪 Ejercicio

1. Realizar página web simple con un botón central y que al hacer clic en él, el color de fondo cambie de blanco a negro. El objetivo es comprender la funcionalidad de cada lenguaje y cómo se combinan para lograr una acción específica en la página web. Además, se espera que aprendan a utilizar el inspector de elementos y la consola del navegador para analizar el código y solucionar problemas de depuración en el código.

##### Código a emplear

##### HTML

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Cambio de color de fondo</title>
    <link rel="stylesheet" type="text/css" href="style.css" />
  </head>
  <body>
    <button id="btn">Cambiar color de fondo</button>

    <script src="script.js"></script>
  </body>
</html>
```

##### CSS

```css
body {
  background-color: white;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  padding: 10px 20px;
  font-size: 1.2rem;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
```

##### Javascript

```js
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const body = document.querySelector("body");
  if (body.style.backgroundColor === "white") {
    body.style.backgroundColor = "black";
  } else {
    body.style.backgroundColor = "white";
  }
});
```

### 📚 Cierre

- Recapitulación de lo aprendido durante la clase.

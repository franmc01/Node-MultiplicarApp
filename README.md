# Multiplicar Node Console App
En este repositorio encontrarás un aplicación de consola con Javascript  y Node, esta aplicación genera la tabla de multiplicar del numero que ingrese y adicionalmente crea un archivo .txt con la salida generada con el resultado si usted desea hacerlo.

## Requisitos para por usarlo
- Tener instalado Node
- Clonar este repositorio
- Utilizando la consola de su prefencia, acceder al directorio del proyecto
- Ejecutar el siguiente comando para instalar las dependencias
```
   npm install o yarn install 
```

## Uso

Para lanzar la aplicación ejecutar `node tabla` esto mostrará la información de ayuda necesaria para usar la app.

```
λ node tabla
Opciones:
      --help     Muestra ayuda                                        [booleano]
      --version  Muestra número de versión                            [booleano]
  -b, --base     Es el numero de la tabla de multiplicar a generar
                                                            [número] [requerido]
  -l, --listar   Permite ver o ocultar el resultado de la tabla generada en la
                 consola                              [booleano] [defecto: true]
  -t, --txt      Permita crear o no un archivo .txt con los datos de la tabla
                 generada                            [booleano] [defecto: false]
  -h, --hasta    Indica hasta cuanto se va a multiplicar la base
                                                          [número] [defecto: 10]

Falta argumento requerido: b
```

- Comando para generar la tabla: `node tabla -b suNumero`

Por ejemplo: `node tabla -b 10`

- Comando para generar la tabla y crear un archivo: `node tabla -b suNumero -t true`
  
Por ejemplo: `node tabla -b 10 -t true`

- Comando para generar la tabla hasta un numero en especifico: `node tabla -b suNumero -h otroNumero`
  
Por ejemplo: `node tabla -b 10 -h 100`

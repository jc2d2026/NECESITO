# 📱 Proyecto "NECESITO" — App de Asistencia Universal y Seguridad Controlada

**NECESITO** es una plataforma móvil de misión crítica, geolocalización de alta precisión y pagos protegidos, diseñada bajo el principio de **Empatía Tecnológica** exclusivamente para personas con discapacidad visual, limitaciones visuales severas o adultos mayores que viven solos en el Perú.

El núcleo de este sistema elimina las pantallas visuales complejas y las interfaces apáticas, transformando el smartphone del usuario en su **DNI, su billetera y sus ojos** a través de un ecosistema guiado 100% por voz y comandos de audio naturales.

---

## 🧭 1. Pilares Tecnológicos y de Seguridad

*   **Ubicación Satelital Viva (Sin Anclajes):** Captura automática mediante el chip GPS nativo (`FusedLocationProviderClient` / `CoreLocation`) al iniciar la app. Precisión garantizada de hasta **3 metros**, rompiendo cualquier dependencia de sesiones de escritorio o IP fijas de la PC.
*   **Filtro Humano de 1er Orden (Técnicos y Taxistas):** Ningún profesional puede ingresar al radar si no cuenta con una inspección domiciliaria presencial y una validación de DNI realizada y firmada físicamente por el **Administrador Fundador**.
*   **Identidad Expresada por el Móvil:** El celular describe al usuario por voz (dígito por dígito del DNI) y en pantallas de alto contraste exactamente quién llegará a su puerta, emulando la seguridad de los aplicativos de taxi.
*   **Pago Contra Entrega Verificada (Escrow):** El dinero se congela en garantía en el servidor y solo se libera al asistente/repartidor cuando el usuario ratifica por comando de voz (o botón táctil gigante) que tiene el producto o servicio verificado en sus manos.

---

## 🗂️ 2. Módulos de Asistencia Integrados (Las 6 Categorías)

1.  **💊 Farmacia y Medicinas Especiales:** Despacho con verificación física obligatoria de fechas de vencimiento y lectura de recetas por voz al usuario.
2.  **🍔 Comidas Preparadas:** Conexión con restaurantes locales comerciales y caseros tradicionales para ofrecer variedad diaria y evitar la rutina de alimentación.
3.  **🛒 Bodegas y Abastecimiento:** Módulo de dictado libre por micrófono para víveres, frutas y limpieza, gestionado por un único **Gestor de Mandados Personalizados**.
4.  **🛠️ Técnicos de Confianza:** Presupuestos variables basados en valorizaciones en tiempo real (estilo CotizaYa) para gasfitería, cerrajería o electricidad.
5.  **🚨 Emergencia Vital y Salud:** Respuesta inmediata jerarquizada. Conmutación automática al **Médico de Cabecera** prioritario (enviando link GPS directo) o, en su defecto, al profesional de la salud validado más cercano en el radar móvil.
6.  **🌿 OTROS — Necesidades Personalizadas:** Canal flexible enfocado en el bienestar y estilo de vida (compra de plantas, tierra y hierbas aromáticas como menta o hierbaluisa, trámites documentarios o acompañamiento social).

---

## 👨‍💻 3. Prompt Maestro para el Desarrollo (Instrucciones para el Programador)

```text
Actúa como un Desarrollador de Aplicaciones Móviles de Misión Crítica. Programa el backend y el script de geolocalización bajo las siguientes reglas:
1. GEOLOCALIZACIÓN MÓVIL: Forzar petición al chip GPS nativo al abrir la app. Margen de error < 3 metros. Prohibido usar IP fija de escritorio.
2. BACKEND DE SEGURIDAD: Bloquear técnicos y taxistas hasta la aprobación manual del fundador con verificación de vivienda. Activar lectura de DNI por voz dígito por dígito.
3. PASARELA ESCROW: Retener el pago digital. El servidor solo libera los fondos contra entrega verificada mediante comando de voz afirmativo del usuario ("Acepto", "Pedido recibido").
```

---

## 📜 4. Licencia del Proyecto
Este proyecto se distribuye bajo la **Licencia MIT (Código Abierto y Universal)**. Esto garantiza que la tecnología pueda ser utilizada, mejorada y compartida de forma libre y transparente para suplir las necesidades de la comunidad con deficiencia visual en cualquier lugar del mundo.

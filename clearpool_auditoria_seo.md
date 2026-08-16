# Auditoría SEO y Marketing Digital — ClearPool & Garden Services

**Web:** https://clearpool.es  
**Actividad:** mantenimiento y reparación de piscinas, jardinería, poda de palmeras, limpieza de parcelas, mantenimiento de comunidades y cuidado de segundas residencias  
**Zona principal:** Jávea, Moraira y Teulada  
**Zona secundaria:** Benitatxell, Benissa, Calpe, Dénia, Gata de Gorgos, Pedreguer y Jalón  

---

# Resumen ejecutivo

ClearPool parte de una base técnica y comercial razonablemente buena: cuenta con metadatos, canonical, Open Graph, schema.org, imágenes en AVIF, una llamada a la acción clara mediante WhatsApp y argumentos comerciales concretos como los **20 años de experiencia** y el **presupuesto cerrado sin sorpresas**.

El principal freno SEO no está en el diseño ni en la tecnología utilizada, sino en la **arquitectura de una sola página**. Actualmente Google dispone esencialmente de una única URL para entender y posicionar todos los servicios y todas las localidades en las que trabaja ClearPool.

Eso obliga a la home a intentar posicionar simultáneamente por:

- mantenimiento de piscinas;
- reparación de piscinas;
- jardinería;
- poda de palmeras;
- limpieza de parcelas;
- mantenimiento de comunidades;
- cuidado de segundas residencias;
- Jávea;
- Moraira;
- Teulada;
- Benitatxell;
- Benissa;
- Calpe;
- Dénia;
- Gata de Gorgos;
- Pedreguer;
- Jalón.

La prioridad estratégica debe ser, por tanto, **aumentar progresivamente la superficie indexable del sitio mediante páginas de servicio y localidad con intención comercial clara**, sin caer en la creación masiva de páginas casi duplicadas.

## Las 5 mejoras de mayor impacto

1. **Optimizar el H1 y hero principal** para describir claramente el servicio y la zona. **HECHO.**
2. **Crear páginas independientes de servicios/localidades**, empezando por mantenimiento de piscinas y jardines en Jávea y Moraira.
3. **Crear u optimizar Google Business Profile y potenciar las reseñas reales.**
4. **Convertir la sección de zonas de servicio en contenido SEO real**, especialmente para las localidades secundarias.
5. **Añadir señales de confianza y prueba social:** reseñas, fotografías de trabajos reales, antes/después y datos empresariales.

---

# 1. Arquitectura y estrategia SEO

## 1.1 Hero y H1

El H1 anterior:

> Nos encargamos de todo.

era atractivo como claim comercial, pero demasiado genérico para transmitir a Google el servicio principal y la zona geográfica.

La recomendación era sustituirlo por un encabezado descriptivo como:

> **Mantenimiento de piscinas y jardines en Jávea, Moraira y Teulada**

y mantener “Nos encargamos de todo” como claim secundario si se desea.

**Estado: implementado.**

---

## 1.2 Limitación de la arquitectura de una sola página

La estructura actual concentra prácticamente todo el SEO en la home.

Esto limita la capacidad para posicionar búsquedas muy comerciales como:

- mantenimiento piscinas Jávea;
- limpieza piscinas Moraira;
- jardinero Jávea;
- mantenimiento jardines Moraira;
- poda palmeras Jávea;
- mantenimiento segunda residencia Jávea.

Una única URL difícilmente puede ser la mejor respuesta de Google para todas esas intenciones al mismo tiempo.

### Recomendación

Mantener la home como página corporativa principal y crear progresivamente páginas de alta intención comercial.

Una posible estructura:

```text
/
├── mantenimiento-piscinas/
│   ├── javea/
│   ├── moraira/
│   └── teulada/
│
├── mantenimiento-jardines/
│   ├── javea/
│   └── moraira/
│
├── poda-palmeras-javea/
├── limpieza-parcelas-marina-alta/
├── mantenimiento-comunidades/
└── mantenimiento-segundas-residencias-javea/
```

No es recomendable generar automáticamente todas las combinaciones posibles de servicio × localidad. Las páginas deben existir solo cuando puedan aportar contenido propio y útil.

---

## 1.3 Prioridad estimada de nuevas páginas

Sin datos propios de Google Search Console o Keyword Planner no conviene presentar cifras de volumen como datos reales. La siguiente prioridad se basa en intención comercial, comportamiento habitual del sector y competencia observable.

| Prioridad | Página | Demanda estimada | Intención |
|---|---|---|---|
| 1 | Mantenimiento de piscinas en Jávea | Alta | Muy alta |
| 2 | Mantenimiento de piscinas en Moraira | Alta | Muy alta |
| 3 | Mantenimiento de jardines en Jávea | Alta | Alta |
| 4 | Jardinero en Jávea | Alta | Alta |
| 5 | Mantenimiento de jardines en Moraira | Media/Alta | Alta |
| 6 | Reparación de piscinas en Jávea | Media/Alta | Muy alta |
| 7 | Poda de palmeras en Jávea | Media | Muy alta |
| 8 | Mantenimiento de segundas residencias en Jávea | Media | Muy alta |
| 9 | Limpieza de parcelas en Jávea | Media | Alta |
| 10 | Mantenimiento de piscinas en Teulada | Media | Muy alta |
| 11 | Mantenimiento de comunidades en Jávea | Media | Alta |
| 12 | Riego automático en Jávea | Media | Alta |

### Primera tanda recomendada

1. `/mantenimiento-piscinas-javea/`
2. `/mantenimiento-piscinas-moraira/`
3. `/mantenimiento-jardines-javea/`
4. `/mantenimiento-jardines-moraira/`
5. `/poda-palmeras-javea/`
6. `/mantenimiento-segundas-residencias-javea/`

Después:

- Teulada;
- Benitatxell;
- Benissa;
- Calpe;
- Dénia.

---

# 2. SEO técnico

## 2.1 Core Web Vitals

No se dispone en esta auditoría de una medición de campo fiable de LCP, INP y CLS para ClearPool, por lo que no conviene inventar puntuaciones.

El elemento que más merece atención es la imagen de fondo del hero:

`fondo2-web.avif`

Al utilizar una imagen grande en la zona superior de la página, esta puede convertirse en el elemento LCP.

### Aspectos ya bien resueltos

- formato AVIF;
- preload de la imagen;
- `fetchpriority="high"`.

Esto es especialmente útil cuando la imagen LCP se carga como `background-image`, ya que el navegador puede descubrirla más tarde que una imagen declarada directamente en el HTML.

### Comprobaciones recomendadas

- revisar el peso real de `fondo2-web.avif`;
- comprobar si la resolución es excesiva para móvil;
- valorar una variante específica para pantallas pequeñas;
- asegurarse de que no haya múltiples recursos con `fetchpriority="high"`;
- usar `font-display: swap` si existen fuentes web;
- reservar dimensiones para imágenes para evitar CLS;
- cargar JS no crítico con `defer` cuando sea posible.

El principal riesgo probable es **LCP**, más que INP, ya que la página es relativamente sencilla.

---

## 2.2 robots.txt y sitemap.xml

Deben existir y estar correctamente configurados, especialmente ahora que el sitio empezará a crecer en número de URLs.

### robots.txt recomendado

```text
User-agent: *
Allow: /

Sitemap: https://clearpool.es/sitemap.xml
```

### sitemap.xml

Debe incluir todas las URLs canónicas e indexables.

Ejemplo futuro:

```text
https://clearpool.es/
https://clearpool.es/mantenimiento-piscinas-javea/
https://clearpool.es/mantenimiento-piscinas-moraira/
https://clearpool.es/mantenimiento-jardines-javea/
...
```

También es recomendable registrar el sitemap en **Google Search Console**.

---

## 2.3 Schema.org

El uso de:

`HomeAndConstructionBusiness`

es adecuado para ClearPool.

No es necesario sustituirlo por `LocalBusiness`, ya que `HomeAndConstructionBusiness` ya es un subtipo de negocio local.

### Campos recomendables

Siempre que correspondan a datos reales:

```json
{
  "telephone": "+34606447461",
  "url": "https://clearpool.es/",
  "priceRange": "€€",
  "openingHoursSpecification": [],
  "geo": {},
  "sameAs": [
    "URL_DE_GOOGLE_BUSINESS",
    "URL_DE_INSTAGRAM",
    "URL_DE_FACEBOOK"
  ]
}
```

### areaServed

Debe mantenerse.

Es especialmente útil para un negocio sin tienda abierta al público que presta servicio en diferentes municipios.

### Service schema

Cuando existan páginas independientes, se puede añadir un `Service` específico.

Ejemplo:

```json
{
  "@type": "Service",
  "name": "Mantenimiento de piscinas en Jávea",
  "provider": {
    "@id": "https://clearpool.es/#business"
  },
  "areaServed": {
    "@type": "City",
    "name": "Xàbia / Jávea"
  }
}
```

### aggregateRating

No conviene añadir estrellas artificialmente al marcado del negocio con el único objetivo de intentar obtener estrellas en resultados orgánicos.

Las reseñas reales pueden mostrarse en la web, pero el schema debe representar información legítima y conforme a las políticas de Google.

---

## 2.4 GitHub Pages

GitHub Pages no supone por sí mismo un problema SEO.

Para un sitio de este tamaño ofrece:

- HTML estático fácilmente rastreable;
- HTTPS;
- dominio personalizado;
- buen rendimiento potencial;
- mantenimiento sencillo.

### Limitaciones futuras

- reglas avanzadas de redirección menos flexibles;
- ausencia de lógica backend;
- formularios que necesitan servicios externos;
- cambios complejos de estructura URL más difíciles de gestionar.

La consecuencia práctica es importante:

**conviene definir bien los slugs de las nuevas páginas desde el principio.**

No es necesario migrar de plataforma simplemente por motivos SEO.

---

# 3. SEO on-page y contenido

## 3.1 Jerarquía de encabezados

La estructura general con:

- un H1;
- H2 para secciones;
- H3 para subsecciones o servicios;

es correcta.

El problema principal no está en la jerarquía, sino en la **profundidad del contenido**.

---

## 3.2 Contenido de servicios demasiado breve para competir individualmente

Actualmente cada servicio dispone de un bloque breve.

Esto puede funcionar para explicar al usuario qué hace ClearPool, pero ofrece poca profundidad para posicionar por búsquedas específicas.

Por ejemplo, una página de mantenimiento de piscinas podría trabajar de manera natural conceptos como:

- mantenimiento semanal;
- control de cloro;
- control de pH;
- filtración;
- bombas;
- filtros;
- skimmers;
- aspiración;
- agua verde;
- algas;
- puesta a punto;
- mantenimiento en invierno;
- mantenimiento en verano;
- piscinas privadas;
- piscinas comunitarias.

La solución no es sobrecargar la home, sino desarrollar estos conceptos en las nuevas landing pages.

---

## 3.3 Texto alternativo de imágenes

Para el logotipo es preferible:

```html
alt="ClearPool & Garden Services"
```

No es necesario crear variantes SEO artificiales del tipo:

```html
alt="empresa piscinas jardines Jávea Moraira Alicante"
```

Para fotografías reales sí deben utilizarse descripciones específicas.

Ejemplos:

```html
alt="Limpieza y mantenimiento de piscina privada en Jávea"
```

```html
alt="Poda de palmera en una villa de Moraira"
```

```html
alt="Mantenimiento de jardín mediterráneo en Jávea"
```

La variedad debe proceder de imágenes diferentes y contextos diferentes, no de forzar keywords sobre el mismo logo.

---

## 3.4 Keywords semánticas desaprovechadas

El copy actual ya cubre conceptos importantes:

- mantenimiento de piscinas;
- reparación de piscinas;
- limpieza de jardines;
- poda de palmeras;
- riego;
- limpieza de parcelas;
- desbroce;
- comunidades;
- segundas residencias;
- Jávea;
- Moraira;
- Teulada.

Pero existe margen para incorporar de forma natural:

### Piscinas

- mantenimiento de piscinas todo el año;
- mantenimiento semanal de piscinas;
- limpieza de piscinas;
- puesta a punto de piscinas;
- agua verde en piscina;
- tratamiento de algas;
- reparación de bombas;
- reparación de filtros;
- control de pH y cloro;
- mantenimiento de piscinas privadas;
- mantenimiento de piscinas comunitarias.

### Jardinería

- jardinero en Jávea;
- jardinero de confianza;
- mantenimiento de jardines durante todo el año;
- riego automático;
- reparación de riego;
- poda en altura;
- poda de palmeras;
- tratamiento del picudo rojo.

### Vivienda

- mantenimiento de villas;
- cuidado de vivienda en ausencia;
- mantenimiento de segunda residencia;
- preparación de vivienda antes de la llegada;
- mantenimiento de urbanizaciones.

---

## 3.5 FAQ

Sí es recomendable añadir una sección de preguntas frecuentes.

El objetivo principal debe ser:

- resolver objeciones;
- aumentar contenido útil;
- trabajar búsquedas long-tail;
- mejorar la conversión.

No debería hacerse únicamente esperando conseguir rich snippets de FAQ en Google.

### Preguntas recomendadas

- ¿Cada cuánto tiempo hay que mantener una piscina en verano?
- ¿Trabajáis también durante el invierno?
- ¿Incluís los productos químicos?
- ¿Podéis recuperar una piscina con agua verde?
- ¿Reparáis bombas y filtros?
- ¿Hacéis mantenimientos semanales?
- ¿Trabajáis con comunidades?
- ¿Podéis cuidar mi casa cuando estoy fuera?
- ¿Hacéis trabajos puntuales sin contrato?
- ¿Trabajáis en Benissa, Benitatxell o Calpe?

Puede añadirse `FAQPage` si todas las preguntas y respuestas aparecen visibles en la página.

---

# 4. SEO local

## 4.1 Google Business Profile

Google Business Profile debe considerarse uno de los activos SEO principales de ClearPool.

Si ya existe una ficha, debe revisarse y optimizarse.

Si no existe, debe crearse.

### Elementos importantes

- nombre comercial consistente;
- URL de ClearPool;
- teléfono;
- categoría principal adecuada;
- categorías secundarias relevantes;
- descripción;
- servicios;
- horario;
- zonas atendidas;
- fotografías reales;
- publicaciones;
- preguntas y respuestas;
- reseñas.

### Integración en la web

Añadir una sección del tipo:

> ⭐ 4,9/5 en Google — Ver opiniones

siempre que esa valoración sea real y se mantenga actualizada.

Puede incluirse:

- enlace directo a la ficha;
- reseñas seleccionadas;
- botón para dejar una opinión;
- widget ligero si no perjudica demasiado el rendimiento.

---

## 4.2 Reseñas

Las reseñas son especialmente importantes para un negocio de mantenimiento de viviendas.

El usuario está dejando acceso a su:

- casa;
- piscina;
- jardín;
- segunda residencia.

La confianza tiene un peso enorme en la decisión.

Una buena sección podría mostrar:

> “Llevan años cuidándonos la piscina mientras estamos fuera de Jávea. Cuando llegamos está siempre perfecta.”

con nombre o inicial, localidad y origen de la reseña cuando corresponda.

---

## 4.3 Localidades secundarias

Actualmente localidades como:

- Benitatxell;
- Benissa;
- Calpe;
- Dénia;
- Gata de Gorgos;
- Pedreguer;
- Jalón;

tienen poca profundidad contextual.

No es necesario crear inmediatamente una página para cada una.

Primero pueden desarrollarse dentro de la propia sección de zonas.

Ejemplo para Benitatxell:

> **Mantenimiento de piscinas y jardines en Benitatxell**
>
> Trabajamos en viviendas y urbanizaciones de Benitatxell y Cumbre del Sol, donde muchas propiedades permanecen vacías parte del año. Realizamos mantenimiento periódico de piscinas y jardines y revisamos la vivienda para que esté lista cuando vuelvas.

Cuando una localidad tenga suficiente demanda, trabajos reales y contenido diferenciable, puede transformarse en una landing propia.

---

## 4.4 NAP

NAP significa:

- Name;
- Address;
- Phone.

La web muestra el nombre del negocio y teléfono, pero no destaca una dirección física completa.

Eso no implica necesariamente un problema.

Si ClearPool funciona como **service-area business** y no recibe clientes en un establecimiento abierto al público, no es necesario mostrar públicamente una vivienda privada como tienda.

### Recomendación

Mostrar de manera consistente:

> ClearPool & Garden Services S.L.  
> Jávea/Xàbia · Marina Alta · Alicante  
> Tel. 606 447 461  
> Servicio a domicilio en Jávea, Moraira, Teulada y alrededores.

La dirección fiscal completa puede mantenerse en el aviso legal si corresponde.

Lo importante es que:

- el nombre sea consistente;
- el teléfono sea el mismo;
- Google Business Profile esté correctamente configurado;
- directorios y perfiles sociales no utilicen datos contradictorios.

---

# 5. Experiencia de usuario y conversión

## 5.1 Formulario que redirige a WhatsApp

El enfoque es bueno porque reduce fricción.

Campos actuales:

- nombre;
- teléfono;
- servicio;
- mensaje.

La información se transforma en un mensaje de WhatsApp mediante JavaScript.

### Riesgo

Si JavaScript no funciona, la experiencia depende del fallback disponible.

### Recomendación

Mantener el sistema actual pero asegurarse de que siempre existan enlaces HTML directos:

```html
<a href="tel:+34606447461">606 447 461</a>
```

y:

```html
<a href="https://wa.me/34606447461">WhatsApp</a>
```

Así JavaScript mejora la experiencia, pero no es imprescindible para contactar.

---

## 5.2 Elementos de confianza que faltan

Esta es una de las mayores oportunidades de conversión.

Añadir:

- testimonios;
- reseñas de Google;
- fotografías reales;
- antes/después;
- trabajos recientes;
- años de experiencia;
- razón social;
- CIF en aviso legal;
- certificaciones si existen;
- marcas de productos/equipos con las que se trabaja si aportan confianza.

### Sección recomendada

## Trabajos recientes en la Marina Alta

Ejemplos:

- piscina verde → piscina recuperada;
- jardín descuidado → jardín terminado;
- palmera antes → palmera podada;
- parcela antes → parcela desbrozada.

Este tipo de contenido demuestra mucho más que una afirmación genérica de “calidad”.

---

## 5.3 Hero y propuesta de valor

La propuesta de valor debe combinar:

- keyword;
- zona;
- beneficio;
- confianza.

### H1 implementado

> **Mantenimiento de piscinas y jardines en Jávea, Moraira y Teulada**

### Texto de apoyo recomendado

> Cuidamos tu piscina, jardín y vivienda durante todo el año. Más de 20 años de experiencia y presupuesto cerrado, sin sorpresas.

### Claim complementario

> Nos encargamos de todo para que tú solo tengas que disfrutar de tu casa.

También existe un argumento especialmente potente para segunda residencia:

> **Tu casa siempre lista. Aunque tú no estés.**

---

## 5.4 Precio

No es imprescindible publicar una tarifa completa.

Puede ser contraproducente si el precio depende mucho de:

- tamaño de piscina;
- frecuencia;
- estado inicial;
- tamaño del jardín;
- desplazamiento;
- trabajos adicionales.

Pero sí conviene reducir incertidumbre.

Mensajes útiles:

> Presupuesto cerrado antes de empezar.

> Servicios periódicos y trabajos puntuales.

> Presupuesto gratuito y sin compromiso.

Si el modelo de negocio lo permite en el futuro:

> Mantenimiento mensual desde XX €/mes.

Un precio “desde” puede servir para filtrar leads poco cualificados, pero solo debe utilizarse si representa de verdad el servicio habitual.

---

# 6. Palabras clave

## 6.1 Keywords comerciales prioritarias

| Keyword | Cobertura actual | Oportunidad |
|---|---|---|
| mantenimiento piscinas Jávea | Parcial | Muy alta |
| limpieza piscinas Jávea | Parcial | Muy alta |
| reparación piscinas Jávea | Parcial | Alta |
| mantenimiento piscinas Moraira | Parcial | Muy alta |
| limpieza piscinas Moraira | Parcial | Alta |
| mantenimiento piscinas Teulada | Parcial | Alta |
| mantenimiento piscinas Marina Alta | Sí | Alta |
| empresa mantenimiento piscinas Jávea | No explícita | Alta |
| reparación bomba piscina Jávea | No | Media/Alta |
| piscina agua verde Jávea | No | Media |
| jardinero Jávea | No | Muy alta |
| jardinería Jávea | Parcial | Alta |
| mantenimiento jardines Jávea | Parcial | Muy alta |
| mantenimiento jardines Moraira | Parcial | Alta |
| jardinero Moraira | No | Alta |
| poda palmeras Jávea | Sí | Alta |
| riego automático Jávea | Parcial | Media/Alta |
| limpieza parcelas Jávea | Parcial | Alta |
| mantenimiento segunda residencia Jávea | Parcial | Alta |
| mantenimiento comunidades Jávea | Parcial | Alta |

---

## 6.2 Long-tail estacional

### Primavera y verano

- puesta a punto piscina antes del verano Jávea;
- preparar piscina para verano Moraira;
- recuperar piscina verde Jávea;
- limpieza piscina después del invierno;
- mantenimiento piscina verano Marina Alta;
- preparar jardín para verano Jávea.

### Otoño e invierno

- mantenimiento piscina invierno Jávea;
- mantenimiento piscina todo el año;
- poda palmeras Jávea;
- poda palmeras invierno Alicante;
- limpieza parcela antes del verano;
- desbroce parcela prevención incendios Jávea.

### Problemas concretos

- agua verde piscina Jávea;
- bomba piscina no funciona Jávea;
- reparar filtro piscina Moraira;
- tratamiento algas piscina;
- tratamiento picudo rojo palmeras Jávea;
- reparación riego automático Jávea.

---

# 7. Enlaces y autoridad

ClearPool no necesita empezar comprando enlaces ni creando un blog genérico.

La estrategia más lógica es conseguir señales locales reales.

## Prioridades de linkbuilding

### Directorios locales

- directorios empresariales de Jávea/Xàbia;
- directorios de Marina Alta;
- portales comerciales;
- Páginas Amarillas;
- asociaciones empresariales.

### Colaboraciones comerciales

Especialmente interesantes:

- inmobiliarias;
- empresas de alquiler vacacional;
- administradores de fincas;
- property managers;
- reformistas;
- fontaneros;
- electricistas;
- proveedores de piscinas;
- empresas de riego.

### Segunda residencia

Las inmobiliarias y empresas que trabajan con compradores extranjeros son especialmente interesantes porque comparten público con ClearPool.

Una colaboración puede consistir en:

- aparecer como proveedor recomendado;
- intercambio de referencias comerciales;
- guía para nuevos propietarios;
- página de partners;
- servicio postventa para compradores de villas.

### Prensa y comunidad local

Posibles vías:

- noticias locales;
- guías de servicios;
- patrocinios;
- clubes deportivos;
- asociaciones;
- fiestas locales;
- eventos.

La prioridad debe ser obtener enlaces y menciones de sitios que tengan **relación geográfica o comercial real con el negocio**.

---

# 8. Análisis competitivo

## Piscinas Jorge Díaz

### Fortalezas

- especialización muy clara en piscinas;
- contenido específico;
- páginas independientes;
- FAQs;
- mantenimiento;
- reparación;
- instalación;
- orientación explícita a Jávea.

### Frente a ClearPool

ClearPool tiene una ventaja potencial distinta:

- piscinas;
- jardines;
- vivienda;
- comunidades;
- segunda residencia.

La estrategia no debería ser copiar a un especialista de piscinas, sino posicionar ClearPool como un proveedor integral de confianza.

---

## Optimus Pool Garden

Ataca simultáneamente piscinas y jardines y desarrolla sus servicios en páginas independientes.

### Fortalezas

- mayor superficie indexable;
- más profundidad temática;
- servicios diferenciados;
- presencia geográfica explícita.

### Oportunidad para ClearPool

ClearPool puede utilizar un posicionamiento más sencillo y emocional:

> **Nos ocupamos de piscina, jardín y vivienda para que tú no tengas que hacerlo.**

Especialmente atractivo para propietarios de segunda residencia.

---

## Miguel Mata Garden & Pool y otros proveedores locales

Otros competidores trabajan explícitamente conceptos como:

- mantenimiento de jardines y piscinas;
- gardener Javea;
- pool cleaning Javea;
- villa maintenance Javea.

Esto muestra además una oportunidad adicional:

## Contenido en inglés

En una zona con elevada presencia de propietarios internacionales, merece la pena valorar en una fase posterior:

```text
/en/pool-maintenance-javea/
/en/garden-maintenance-javea/
/en/villa-maintenance-javea/
```

La prioridad debe seguir siendo construir primero una estructura sólida en español.

---

# 9. Ejemplos de nuevas páginas

## 9.1 Mantenimiento de piscinas en Jávea

### URL

```text
/mantenimiento-piscinas-javea/
```

### Title

```text
Mantenimiento de Piscinas en Jávea | ClearPool
```

### Meta description

```text
Mantenimiento y limpieza de piscinas en Jávea. Control de pH y cloro, limpieza, bombas, filtros y reparaciones. Más de 20 años de experiencia.
```

### H1

```text
Mantenimiento de piscinas en Jávea durante todo el año
```

### Estructura

```text
H2 — Qué incluye nuestro mantenimiento de piscina
H2 — Limpieza, pH, cloro y filtración
H2 — Reparación de bombas y filtros
H2 — Piscinas privadas y comunidades
H2 — Mantenimiento para segundas residencias
H2 — Zonas de Jávea donde trabajamos
H2 — Preguntas frecuentes
```

### CTA

> **Cuéntanos cómo es tu piscina y te damos presupuesto cerrado.**

---

## 9.2 Mantenimiento de jardines en Jávea

### URL

```text
/mantenimiento-jardines-javea/
```

### Title

```text
Mantenimiento de Jardines en Jávea | Jardineros ClearPool
```

### H1

```text
Jardineros y mantenimiento de jardines en Jávea
```

### Introducción propuesta

> Mantenemos jardines de villas, viviendas y comunidades en Jávea durante todo el año. Nos ocupamos de poda de setos y arbustos, césped, limpieza, riego automático y mantenimiento general para que encuentres el jardín cuidado cada vez que llegas.

Esta página permite trabajar de forma natural una keyword muy importante que actualmente tiene poca presencia:

**jardinero en Jávea**

---

## 9.3 Mantenimiento de segundas residencias en Jávea

### URL

```text
/mantenimiento-segundas-residencias-javea/
```

### H1

```text
Cuidado y mantenimiento de segundas residencias en Jávea
```

### Hero

> **Tu casa lista cuando llegues. Y cuidada mientras estás fuera.**

### Servicios posibles

- revisión periódica;
- mantenimiento de piscina;
- mantenimiento de jardín;
- comprobación de incidencias;
- coordinación de reparaciones;
- preparación antes de la llegada;
- revisión después de temporales;
- acceso para técnicos y proveedores;
- supervisión general de la vivienda.

Esta página puede convertirse en uno de los principales diferenciales SEO y comerciales de ClearPool.

---

# 10. Qué no hacer

## No crear decenas de páginas casi idénticas

Evitar estrategias del tipo:

```text
/poda-palmeras-benissa/
/poda-palmeras-denia/
/poda-palmeras-calpe/
/poda-palmeras-pedreguer/
```

si el contenido va a ser exactamente el mismo cambiando únicamente el municipio.

Cada URL debe tener suficiente razón de existir.

---

## No priorizar un blog genérico

No empezaría por artículos como:

> 10 consejos para cuidar tu piscina.

Antes deben existir páginas comerciales fuertes.

Orden recomendado:

1. páginas de servicio;
2. páginas locales;
3. portfolio/casos reales;
4. FAQs;
5. contenido informativo.

---

## No hacer keyword stuffing

No repetir constantemente:

> piscinas Jávea, piscinas Moraira, piscinas Teulada...

Las keywords deben integrarse naturalmente en:

- títulos;
- headings;
- texto;
- ALT;
- FAQs;
- enlaces internos.

---

# 11. Elementos ya bien resueltos

La web ya cuenta con varios elementos positivos que deben conservarse.

- Meta title y meta description.
- Canonical.
- Open Graph.
- Twitter Cards.
- HTTPS.
- Dominio propio.
- Estructura de encabezados razonable.
- Imágenes AVIF.
- Preload de la imagen principal.
- `fetchpriority="high"` para el recurso crítico del hero.
- Schema.org `HomeAndConstructionBusiness`.
- `areaServed`.
- Catálogo de servicios.
- WhatsApp como CTA principal.
- Teléfono visible.
- Mensajes comerciales concretos.
- Más de 20 años de experiencia como argumento de confianza.
- Presupuesto cerrado como diferencial.
- Cobertura clara de Jávea, Moraira y Teulada.

Por tanto, la estrategia no debe ser rehacer la web desde cero.

Debe consistir en **construir sobre esta base y aumentar progresivamente su capacidad para posicionar búsquedas específicas**.

---

# 12. Tabla general de hallazgos

| Hallazgo | Prioridad | Esfuerzo | Acción |
|---|---|---|---|
| H1 demasiado genérico | Alta | Bajo | **Implementado** |
| Una sola URL para todos los servicios y localidades | Alta | Medio | Crear landings |
| Piscinas y jardines compiten dentro de la misma URL | Alta | Medio | Separar clusters |
| Localidades secundarias tienen poco contenido | Alta | Bajo | Añadir contenido útil |
| Falta de reseñas visibles | Alta | Bajo | Añadir reseñas y GBP |
| Google Business Profile poco integrado | Alta | Bajo | Crear/optimizar/enlazar |
| Falta portfolio de trabajos | Alta | Medio | Añadir fotos y casos |
| Copy de servicios demasiado breve | Alta | Bajo/Medio | Desarrollar landings |
| Segunda residencia poco explotada en SEO | Alta | Medio | Landing propia |
| Falta keyword “jardinero Jávea” | Alta | Bajo | Incorporar naturalmente |
| robots.txt/sitemap deben verificarse | Media | Bajo | Revisar/crear |
| Schema actual correcto | — | — | Mantener |
| Falta completar algunos campos schema | Media | Bajo | Añadir datos reales |
| Hero background puede afectar LCP | Media | Bajo/Medio | Medir y optimizar |
| AVIF + preload | Bien | — | Mantener |
| Formulario depende de JavaScript | Media | Bajo | Añadir fallback directo |
| FAQ ausente | Media | Bajo | Añadir |
| Falta contenido de riego/picudo rojo | Media | Bajo/Medio | Integrar |
| GitHub Pages | Bien | — | Mantener |
| Redirecciones futuras en GitHub Pages | Media | Medio | Definir slugs bien |
| Contenido en inglés | Media futura | Alto | Valorar tras español |

---

# 13. Hoja de ruta — pasos a seguir

## Fase 1 — Quick wins sin rediseñar

- [x] **Optimizar el H1 y el hero principal:** incluir “Mantenimiento de piscinas y jardines en Jávea, Moraira y Teulada” y reforzar experiencia + presupuesto cerrado.
- [ ] Verificar o crear `robots.txt`.
- [ ] Verificar o crear `sitemap.xml`.
- [ ] Registrar y revisar el sitio en Google Search Console.
- [ ] Crear u optimizar Google Business Profile.
- [ ] Enlazar Google Business Profile desde la web.
- [ ] Establecer un sistema para solicitar reseñas a clientes satisfechos.
- [ ] Añadir una sección de testimonios/reseñas reales.
- [ ] Añadir fotografías propias de trabajos realizados.
- [ ] Crear al menos 2–4 ejemplos de antes/después.
- [ ] Ampliar ligeramente el copy de los servicios principales en la home.
- [ ] Añadir contenido específico para Benitatxell, Benissa, Calpe y otras zonas prioritarias.
- [ ] Revisar el NAP y unificar nombre y teléfono en web, GBP, redes y directorios.
- [ ] Completar el schema.org con los datos reales disponibles.
- [ ] Añadir enlaces directos `tel:` y `wa.me` como fallback del formulario.
- [ ] Añadir una sección FAQ orientada a dudas reales de clientes.
- [ ] Medir Core Web Vitals en móvil con PageSpeed Insights/Search Console y revisar especialmente el LCP.

## Fase 2 — Páginas de captación SEO

- [ ] Crear `/mantenimiento-piscinas-javea/`.
- [ ] Crear `/mantenimiento-piscinas-moraira/`.
- [ ] Crear `/mantenimiento-jardines-javea/`.
- [ ] Crear `/mantenimiento-jardines-moraira/`.
- [ ] Crear `/poda-palmeras-javea/`.
- [ ] Crear `/mantenimiento-segundas-residencias-javea/`.
- [ ] Crear una estructura de enlaces internos entre home y nuevas landings.
- [ ] Añadir schema `Service` a las páginas de servicio.
- [ ] Añadir fotografías y ejemplos de trabajos específicos de cada localidad cuando sea posible.
- [ ] Incorporar FAQs específicas en cada landing.

## Fase 3 — Expansión local

- [ ] Crear página de mantenimiento de piscinas en Teulada.
- [ ] Evaluar páginas específicas para Benitatxell.
- [ ] Evaluar páginas específicas para Benissa.
- [ ] Evaluar páginas específicas para Calpe.
- [ ] Evaluar páginas específicas para Dénia.
- [ ] Crear contenido específico para limpieza de parcelas.
- [ ] Crear contenido específico para mantenimiento de comunidades.
- [ ] Potenciar búsquedas relacionadas con riego automático.
- [ ] Potenciar búsquedas relacionadas con picudo rojo y poda de palmeras.
- [ ] Analizar Search Console para decidir qué localidades/servicios justifican nuevas URLs.

## Fase 4 — Autoridad y crecimiento

- [ ] Reclamar/corregir fichas en directorios locales.
- [ ] Buscar enlaces desde directorios empresariales de Jávea y Marina Alta.
- [ ] Contactar con inmobiliarias de Jávea y Moraira para colaboraciones.
- [ ] Contactar con administradores de fincas.
- [ ] Contactar con empresas de alquiler vacacional/property management.
- [ ] Buscar colaboraciones con proveedores complementarios.
- [ ] Conseguir menciones en medios y portales locales.
- [ ] Publicar casos reales de trabajos realizados.
- [ ] Valorar una versión en inglés de las principales páginas comerciales.
- [ ] Crear contenido informativo únicamente cuando las páginas comerciales principales ya estén consolidadas.

---

# Prioridad inmediata recomendada

Una vez completado el cambio del hero, el siguiente salto de impacto debería ser:

> **crear la primera landing SEO: `/mantenimiento-piscinas-javea/`.**

Es la mejor forma de empezar a romper la limitación de la arquitectura de una sola página y permitir que Google disponga de una URL específicamente diseñada para una búsqueda local de intención comercial muy alta.

Después:

1. mantenimiento piscinas Moraira;
2. mantenimiento jardines Jávea;
3. mantenimiento jardines Moraira;
4. poda palmeras Jávea;
5. mantenimiento segundas residencias Jávea.

El objetivo no es convertir ClearPool en una web enorme, sino pasar de **una única URL que intenta posicionar por todo** a un pequeño ecosistema de páginas con una intención clara, contenido útil y fuerte relevancia local.

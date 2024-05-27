async function enviarScript(scriptText) {
  const lines = scriptText
    .split(/[\n\t]+/)
    .map((line) => line.trim())
    .filter((line) => line);
  (main = document.querySelector("#main")),
    (textarea = main.querySelector(`div[contenteditable="true"]`));

  if (!textarea) throw new Error("No hay una conversación abierta");

  for (const line of lines) {
    console.log(line);

    textarea.focus();
    document.execCommand("insertText", false, line);
    textarea.dispatchEvent(new Event("change", { bubbles: true }));

    setTimeout(() => {
      (
        main.querySelector(`[data-testid="send"]`) ||
        main.querySelector(`[data-icon="send"]`)
      ).click();
    }, 100);

    if (lines.indexOf(line) !== lines.length - 1)
      await new Promise((resolve) => setTimeout(resolve, 250));
  }

  return lines.length;
}

enviarScript(`Bee Movie...
  
  Según todas las leyes de la aviación...
  ...Las abejas no deberían poder volar.
  Sus alas son demasiado chicas
  para que su cuerpito gordo despegue.
  Las abejas, claro,
  vuelan de todos modos...
  ...porque no les importa
  lo que los humanos creamos posible.
  Amarillo, ***. Amarillo, ***.
  ¡*** y amarillo!
  Sí, vamos a variarlo un poco.
  MlEL
  ¡Barry! ¡Ya está el desayuno!
  ¡Ya voy!
  Espera un segundo.
  ¿Hola?
  -¿Barry?
  -¿Adam?
  -¿Puedes creer esto?
  -No puedo. Paso por ti.
  Te ves "picudo".
  Usa las escaleras.
  Nos costaron mucho dinero.
  Perdón. Estoy emocionado.
  He aquí al graduado.
  Estamos muy orgullosos.
  Eres muy "avispado".
  Muy orgullosos.
  ¡Mamá! ¡No me toques el pelo!
  -Tienes algo en tu pelusilla.
  -¡Ay, soy yo!
  ¡Salúdanos!
  ¡Estaremos en la fila 1 1 8 mil!
  ¡Te dije que dejaras
  de volar en la casa!
  BEE MOVlE:
  LA HlSTORlA DE UNA ABEJA
  ¡FRlSBl GOLPEA AL PANAL!
  -Hola, Adam.
  -Hola, Barry.
  -¿Te pusiste gel?
  -Un poco. Es la graduación.
  No creí que lo lograría.
  3 días de primaria, 3 de secundaria.
  Momentos bochornosos.
  3 días de universidad. Al menos tomé
  un día para recorrer el panal.
  Regresaste cambiado.
  ¿Te estás dejando el bigote?
  Te queda bien.
  -¿Supiste lo de Frankie?
  -Sí.
  -¿Vas a ir al funeral?
  -No, no voy a ir.
  Todos saben que si picas, te mueres.
  Picó a una ardilla. ¡Qué mal genio!
  Sí, podía haberse quitado.
  Me encanta incorporar un parque
  de diversiones a nuestro día.
  Por eso no necesitamos vacaciones.
  Caramba, hay bastante pompa,
  dadas las circunstancias.
  -Ya somos hombres, Adam.
  -¡Lo somos!
  -Abejas hombres.
  -¡Amén!
  ¡Aleluya!
  Estudiantes, facultad,
  distinguidas abejas...
  ...denle la bienvenida
  al decano Buzzwell.
  Bienvenidos, graduados
  de Ciudad Nuevo Panal, clase de...
  CLASE 9:00
  ...de las 9:1 5.
  Eso concluye la ceremonia.
  ¡Y empieza su carrera
  en lndustrias Mielex!
  ¿Vamos a escoger un trabajo hoy?
  Hoy sólo es la orientación.
  ¡Atención! Allá vamos.
  Mantengan las manos
  y las antenas dentro del vehículo.
  FELlClTAClONES
  BUENA SUERTE
  -¿Cómo crees que sea?
  -Tengo un poco de miedo.
  Bienvenidos a Mielex,
  una división de Mielesco...
  ...y parte del Grupo Hexagón.
  ¡Allá vamos!
  Uds., abejas,
  han trabajado toda su vida...
  ...para llegar al punto
  en que podrán trabajar toda su vida.
  La miel empieza cuando los valientes
  polinecios traen néctar al panal.
  Nuestra fórmula ultra secreta...
  ...es corregida en cuanto a color
  y olor, y adquiere el contorno...
  ...del calmante jarabe dulce...
  ...con su brillo dorado distintivo
  al que llamamos...
  ¡Miel!
  -Qué chica tan sexy.
  -¡Es mi prima!
  -¿Lo es?
  -Sí, todos somos primos.
  -Es cierto.
  -En Mielex nos esforzamos por mejorar...
  ...todos los aspectos
  de nuestra existencia.
  Estas abejas están probando
  el aguante de un nuevo casco.
  -¿Cuánto crees que gane?
  -No lo suficiente.
  Este es nuestro último avance:
  el Krelman.
  -¿Qué hace eso?
  -Agarra el hilo de miel que queda...
  ...colgando. Nos ahorra millones.
  ¿Cualquiera puede trabajar en él?
  Claro. La mayoría de los trabajos
  son pequeños. Pero todos sabemos...
  ...que todos los trabajos,
  bien hechos, importan mucho.
  Pero escojan con cuidado...
  ...porque se quedarán en el trabajo
  que escojan el resto de su vida.
  ¿El mismo trabajo toda la vida?
  No lo sabía.
  ¿Qué más da?
  Les alegrará saber que las abejas,
  como especie, no han descansado...
  ...ni un día en 27 millones de años.
  ¿Trabajamos hasta que nos muramos?
  Trataremos.
  Mielex
  ¡Eso estuvo fuera de serie!
  ¿"Qué más da"? ¿Cómo pudiste decir eso?
  ¿Un trabajo para siempre?
  Qué decisión tan dura.
  Qué alivio. Sólo tomas
  una decisión en tu vida.
  ¿Pero cómo es que nunca
  nos dijeron eso?
  ¿Para qué cuestionarlo?
  Somos abejas.
  Somos la sociedad más eficaz
  sobre la Tierra.
  ¿No se te ha ocurrido que quizá
  todo funciona demasiado bien?
  Dame un ejemplo.
  No sé. Pero tú sabes a qué me refiero.
  Despejen la puerta.
  Se acerca la Fuerza Real de Néctar.
  Espera un segundo.
  ¡Oye, son los polinecios!
  Nunca los había visto de tan cerca.
  Ellos saben cómo es afuera del panal.
  Sí, pero algunos no vuelven.
  ¡Hola, pilotos!
  Néctar
  ¡Uds. se esmeraron!
  ¡Son unos monstruos,
  unos fenómenos del cielo! ¡Me encanta!
  -¿Adónde habrán ido?
  -No lo sé.
  No tienen su día planeado.
  Vuelan quién sabe dónde,
  a hacer quién sabe qué.
  No puedes convertirte en polinecio.
  Te crían para serlo.
  Cierto.
  Es más polen del que tú y yo
  veremos en una vida.
  Sólo es un símbolo de categoría.
  Lo valoramos demasiado.
  Quizá. A menos que lo traigas puesto
  y las chicas te vean con él.
  ¿Esas chicas? ¿No son nuestras primas?
  Lejanas, lejanas.
  Mira a esos dos.
  -Un par de Pedros de Panal.
  -Vamos a divertirnos.
  Debe de ser peligroso ser un polinecio.
  ¡Una vez un oso me atrapó
  contra un hongo!
  ¡Tenía una garra en mi cuello
  y me estaba pegando con la otra!
  ¡No pensé que lo fuera a noquear!
  ¿Y qué estabas haciendo tú?
  Avisando a las autoridades.
  Yo te puedo autografiar eso.
  Había viento allá afuera, ¿no?
  Sí. Había viento.
  Vamos a ir a una mancha
  de girasoles mañana, a 1 0 km de aquí.
  -¿A 1 0 km?
  -¡Barry!
  Para nosotros no es nada,
  pero quizá tú no puedas.
  -Quizá sí.
  -No puedes.
  Salimos a las 0900 de la puerta J.
  ¿Qué opinas, zumbador?
  ¿Eres suficientemente abeja?
  Quizá. Todo depende
  de qué significa 0900.
  ¡Hola, Mielex!
  ¡Papá! ¡Me sorprendiste!
  ¿Ya decidiste lo que te interesa?
  -Hay muchas opciones.
  -Pero sólo puedes escoger una.
  ¿Nunca te aburres de hacer lo mismo?
  Déjame hablarte de revolver.
  Agarras el palo
  y le das vueltas y vueltas.
  Agarras un ritmo. Es hermoso.
  Entre más lo pienso...
  ...quizá trabajar en la miel
  no es lo indicado para mí.
  ¿Quieres hacer animales de globos?
  ¡Con ese aguijón, no te conviene!
  ¡Janet, no está seguro
  si quiere dedicarse a la miel!
  -Barry, qué chistoso eres a veces.
  -No es chiste.
  Vas a trabajar en la miel.
  ¡Nuestro hijo, el revolvedor!
  -¿Vas a ser revolvedor?
  -¡Nadie me escucha!
  Tengo unos palos preciosos.
  Puedo decir lo que sea.
  ¡Me tatuaré una hormiga!
  ¡Vamos a celebrar con miel!
  O quizá me perfore el tórax,
  o me quite las antenas.
  Me acueste con un grillo. ¡Quizá
  les empiece a llamar a todos "perro"!
  ¡Estoy tan orgulloso!
  -¡Vamos a empezar a trabajar hoy!
  -Hoy es el día.
  ¡Apúrate! ¡Van a desaparecer
  los buenos trabajos!
  Sí, claro.
  Conteo de polen, acróbata, vertedor,
  revolvedor, quitador de pelo...
  -¿Todavía está disponible?
  -¡Quedan dos!
  QUlTADOR DE MUGRE
  ¡Y uno es tuyo!
  -¿Qué te dieron?
  -Quitar mugre. ¡Súper!
  ¿Novatos?
  ¡Primer día! ¡Estamos listos!
  Bueno, escojan.
  -¿Tú primero?
  -No, tú escoge.
  ¿Qué hay disponible?
  Asistente de baño
  siempre está disponible.
  -¿Puedo trabajar con el Krelman?
  -Claro, es tuyo.
  CERRADO
  Disculpa, se ocupó.
  Hay mecánico de alas.
  Hay otro puesto en el Krelman.
  ¿Qué pasó?
  Una abeja murió. Hay una vacante.
  ¿Ves? Murió. Otra muerta.
  "Morida". "Mortuosa".
  Muertas del cuello para arriba.
  ¡Así es la vida!
  ¡Ay, qué difícil!
  Calefacción, enfriamiento,
  acróbata, vertedor, revolvedor...
  ...coordinador de pelusa, supervisor...
  ...domador de garrapatas.
  ¿Qué crees que debo hacer?
  ¡Barry!
  Tenemos la mancha de girasoles
  en el cuadrante 9...
  ¿Qué te pasó?
  ¿Dónde estás?
  -Voy a salir.
  -¿A dónde?
  -Afuera.
  -¡No!
  Antes de ponerme
  a trabajar por toda mi vida.
  ¡Te vas a morir! ¡Estás loco!
  Está entrando otra llamada.
  Si alguien se siente valiente,
  un restaurante coreano en la 83...
  ...recibe sus rosas hoy.
  Hola, muchachos.
  -Mira nada más.
  -¿No es el chico de ayer?
  La pista es para abejas autorizadas.
  Está bien.
  Nosotros nos lo vamos a llevar.
  ¿Te sientes con suerte?
  Firma aquí y aquí.
  Pon tus iniciales acá.
  Gracias.
  Tenemos altas probabilidades...
  ...de lluvia y, como saben,
  las abejas no pueden volar en la lluvia.
  Así que cuidado.
  Cuidado con las escobas...
  ...palos de hockey, perros,
  pájaros, osos y murciélagos.
  También hay reportes
  de que nos han arrojado refrescos.
  ¡Murphy está en un asilo por eso,
  balbuceando como una cigarra!
  -¡Qué espanto!
  -Les recuerdo:
  Ley de abejas No. 1 : ¡Por ningún
  motivo hablen con humanos!
  ¡Todos a sus posiciones de lanzamiento!
  ¡Zum, zum, zum!
  ¡*** y amarillo!
  ¡Hello!
  ¿Estás listo, bravucón?
  Sí. Sí, venga.
  Viento, medido.
  -Antenas, listas.
  -Tubo de néctar.
  -Alas, listas.
  -Aguijón, listo.
  Un miedo espantoso, listo.
  Bueno, "señoritas"...
  ... ¡prepárense para salir!
  ¡Péguenles a ese petunias,
  chupadores de tallos rayados!
  ¡Todos ustedes, sequen esas flores!
  ¡Salí!
  ¡No puedo creer que salí!
  ¡Qué azul!
  ¡Me siento tan veloz y libre!
  ¡Cometa de caja!
  ¡Flores!
  Habla líder azul.
  Contacto visual con rosas.
  Virando 30 grados.
  ¡Rosas!
  30 grados, entendido. Virando.
  Hazte a un lado, chico. Da un culatazo.
  Néctar
  ¡Qué forma de recolectar néctar!
  ¿Has visto la polinización de cerca?
  Recojo polen de acá y lo esparzo acá.
  Quizá una pizca ahí...
  ...un pellizco allá.
  ¿Ves? Es un poco de magia.
  Qué increíble. ¿Por qué hacemos eso?
  Es el poder del polen. Más polen,
  más flores, más néctar, más miel.
  ¡Cool!
  Estoy viendo mucho amarillo.
  Pueden ser margaritas. ¿Las necesitamos?
  Capté esa imagen.
  Esperen.
  ¡Una parece estar moviéndose!
  ¿Perdón? ¿Estás reportando
  una flor moviéndose?
  Afirmativo.
  ¡Esa pegó en la raya!
  Esto es lo máximo. ¿Qué es?
  No sé, pero me encanta este color.
  Huele rico. No como las flores,
  pero me gusta.
  Sí, velludo.
  Como a químico.
  Cuidado. Se queda uno pegado.
  ¡Dulce señor de las abejas!
  ¡Tarado, quítate de ahí!
  ¡Un problema!
  -¡Muchachos!
  -Esto puede ser malo.
  Afirmativo.
  Casi.
  Va a doler.
  El hijito consentido.
  ¡Estás fuera de lugar, novato!
  ¡Ahí te va, como un proyectil!
  ¡Ayúdenme!
  No creo que sean flores.
  -¿Le decimos?
  -Creo que ya sabe.
  ¿Qué es esto?
  ¡Punto decisivo!
  ¡Puedes recoger tus cosas,
  porque estás a punto de perder!
  ¡Caray!
  CONTROL DE CLlMA
  Qué asco.
  ¡Hay una abeja en el coche!
  -¡Haz algo!
  -¡Estoy manejando!
  -Hola, abeja.
  -¡Está acá atrás!
  ¡Me va a picar!
  Que nadie se mueva. Si no se mueven,
  no los va a picar. ¡Quietos!
  ¡Parpadeó!
  ¡Rocíala!
  ¿Qué haces?
  El nivel de tensión
  acá afuera es increíble.
  Me tengo que ir a casa.
  No puedo volar en la lluvia.
  No puedo volar en la lluvia.
  ¡No puedo volar en la lluvia!
  ¡Auxilio! ¡Auxilio! ¡Abeja cayendo!
  Ken, ¿puedes cerrar la ventana?
  Ken, ¿puedes cerrar la ventana?
  Mira mi nuevo currículum.
  Lo imprimí en forma de folleto.
  ¿Ves? Se abre.
  Ay, no. Más humanos. No necesito esto.
  ¿Qué fue eso?
  Quizá esta vez.
  ¡Esta vez, esta vez, esta vez!
  ¡Cortinas!
  ¡Eso es diabólico!
  Tiene mis habilidades especiales
  y mis 1 0 películas favoritas.
  ¿La Guerra de las Galaxias?
  No, a mí no me gustan esas...
  ...cosas.
  Con razón no debemos hablarles.
  Están locos.
  En las entrevistas de trabajo
  los dejo asombrados. No lo pueden creer.
  Ahí está el sol. Quizá sea una salida.
  No recuerdo que el sol tuviera
  un "75" pintado.
  Yo predije el calentamiento global.
  Sentía que el calor aumentaba.
  Primero creí que era yo.
  ¡Espera! ¡Alto! ¡Abeja!
  Échense para atrás.
  ¡Traigo botas de invierno!
  ¡Espera!
  ¡No la mates!
  ¡Soy alérgico!
  ¡Esta cosa me puede matar!
  ¿Por qué su vida tiene
  menos valor que la tuya?
  "¿Por qué su vida tiene menos valor
  que la tuya?". ¿Dijiste eso?
  Toda la vida tiene valor.
  Tú no sabes lo que puede sentir.
  ¡Mi folleto!
  Ahí tienes, muchachito.
  No le tengo miedo.
  Es una cosa de alergias.
  Ponlo en el folleto de tu currículum.
  ¡Se me hincha toda la cara!
  Sería una "habilidad especial".
  Noquear a alguien también
  es una habilidad especial.
  Adiós, Vanessa. Gracias.
  -¿Noche de yogur la semana que viene?
  -Está bien. Lo que tú digas.
  Puedes ponerle chispas de algarroba.
  -Son menos calorías.
  -Adiós.
  Tengo que decirle algo.
  Ella me salvó la vida.
  Tengo que decirle algo.
  Bueno, allá voy.
  ATÚN ABEJORRO
  No.
  ¿Qué le puedo decir?
  Me puedo meter en un buen lío.
  Es una ley de abejas.
  No se habla con los humanos.
  Increíble que lo vaya a hacer.
  Lo tengo que hacer.
  No puedo hacerlo. ¡Vamos!
  No. Sí. No.
  ¡Hazlo! No puedo.
  ¡Cómo empiezo?
  ¿"Te gusta el jazz"? Eso no sirve.
  ¡Ahí viene! ¡Habla, tonto!
  ¡Hola!
  Disculpa.
  -Estás hablando.
  -Ya lo sé.
  ¡Estás hablando!
  Discúlpame. Lo siento.
  No, está bien. Estoy soñando.
  Pero no recuerdo haberme acostado.
  Estoy seguro que esto
  es muy desconcertante.
  Me tomó un poco por sorpresa.
  Digo, ¡tú eres una abeja!
  Lo soy. Y no debería
  de estar haciendo esto, pero...
  ...ellos me querían matar.
  Si no hubiera sido por ti...
  Tenía que agradecértelo. Así me criaron.
  Eso fue un poco raro.
  Estoy hablando con una abeja.
  Estoy hablando con una abeja.
  ¡Y la abeja está hablando conmigo!
  Sólo quería decirte
  que estoy agradecido y me voy.
  ¡Espera! ¿Cómo aprendiste a hacer eso?
  Lo de hablar.
  Igual que tú. "Mamá, papá, miel".
  Uno aprende.
  Qué chistoso.
  Las abejas son chistosas.
  Si no nos riéramos, lloraríamos mucho.
  En fin...
  ¿Te puedo...
  -...dar algo?
  -¿Como qué?
  No sé. Quiero decir, no sé. ¿Un café?
  No quiero que te molestes.
  No es ninguna molestia. Son 2 minutos.
  -Sólo es un café.
  -Es mucha molestia.
  -¡No seas ridículo!
  -Me encantaría una taza.
  ¿Y pastel de ron?
  -No debería.
  -¡Un poquito!
  -No puedo.
  -¡Anímate!
  Quiero bajar unos microgramos.
  -¿De dónde?
  -Las rayas no ayudan.
  ¡Te ves genial!
  No sé si sabes de modas.
  ¿Estás bien?
  No.
  Se está haciendo el nudo
  de la corbata camino a la iglesia.
  Por fin llega.
  Sube corriendo los escalones.
  Va a empezar la boda.
  Y dice: " ¿Sandiíta?
  Yo creía que dijiste sandinista".
  "¿Por qué me iba
  a casar con una sandía?".
  ¿Es un chiste de abejas?
  Sí, así son nuestros chistes.
  Sí, diferentes.
  Entonces, ¿qué piensas hacer, Barry?
  ¿Acerca del trabajo? No sé.
  Quiero ayudar al panal,
  pero no como ellos quieren.
  Yo sé lo que se siente.
  -¿De verdad?
  -Claro.
  Mis papás querían que fuera abogada
  o doctora, yo quería ser florista.
  -¿De verdad?
  -Sólo me interesan las flores.
  La reina usó ese eslogan en su campaña.
  En fin, si miras...
  Ahí está mi panal. ¿Lo ves?
  ¡Estás en Prado de Ovejas!
  ¡Sí! ¡Junto al Estanque de las Tortugas!
  ¡lmposible! Yo conozco esa zona.
  Perdí un anillo de pie ahí.
  -¿Por qué usan anillos en los pies?
  -¿Por qué no?
  -Es como un "sombrero de rodilla".
  -Tendré que ponerme uno.
  -¿Está bien, señora?
  -Sí, estoy bien.
  ¡Estoy tomándome dos cafés!
  La pasé muy bien. Gracias por el café.
  No hay de qué.
  Dejé un poco. Si me lo acabo,
  no duermo en toda mi vida.
  ¿Eres...?
  ¿Me puedo llevar un pedazo de esto?
  ¡Claro! Llévate una migaja.
  ¡Gracias!
  Bueno...supongo que hasta la próxima.
  O no.
  Bueno, Barry.
  Y muchas gracias de nuevo,
  por lo de antes.
  Ay, ¿eso? No fue nada.
  Sí fue algo, pero...en fin...
  PRUEBAS REALlZÁNDOSE
  PRUEBAS REALlZÁNDOSE
  PRUEBA DE HURACÁN
  Esto no puede dar resultado.
  Ya está listo. Más vale probar.
  ¡Dave, jala el paracaídas!
  -Suena increíble.
  -¡Lo fue!
  Fue el momento más espantoso
  y más feliz de mi vida.
  ¿Humanos? ¡Estuviste con humanos...
  ...gigantes y temibles! ¿Cómo eran?
  Están locos. Dicen locuras.
  Comen cosas gigantes.
  Manejan como locos.
  -¿Te tratan de matar, como en TV?
  -Unos sí, otros no.
  -¿Cómo volviste?
  -En perro.
  Lo hiciste y me alegro.
  Viste lo que quisiste ver.
  Tuviste tu "experiencia".
  Ahora puedes escoger tu trabajo y ya.
  -Pues...
  -¿Pues qué?
  Conocí a alguien.
  ¿Sí? ¿A alguien abejuno?
  -¿Una avispa? Tus papás te van a matar.
  -No, avispa no.
  -¿A una araña?
  -No me atraen las arañas.
  Yo sé que está de moda,
  con las 8 patas y todo.
  No me gusta la cara.
  ¿Quién es?
  Es...una humana.
  No. No pudiste. Es una ley de las
  abejas. No puedes violar una ley.
  -Se llama Vanessa.
  -Dios mío.
  Es muy linda. ¡Y es florista!
  ¡Ay, no! ¡Estás saliendo
  con una florista humana!
  No estamos saliendo.
  ¡Vuelas afuera del panal!
  ¡Hablas con humanos que nos atacan...
  ...con mangueras de presión
  y M-80! ¡Eso es dinamita!
  ¡Ella me salvó la vida!
  Y ella me entiende.
  ¡Esto se acabó!
  Cómete esto.
  ¡Esto no se acabó! ¿Qué era eso?
  -Lo llaman "una migaja".
  -¡Qué rayadamente aguijonudo!
  ¡Y eso sólo es lo que
  se cae de lo que comen!
  -¿Sabes qué es un bizcocho?
  -No.
  Es un pan con canela y azúcar.
  ¡Los calientan...
  ¡Siéntate!
  -...mucho!
  -¡Escúchame!
  ¡Nosotros no somos ellos!
  ¡Estamos nosotros y están ellos!
  ¿Pero quién puede oponerse
  al corazón que anhela?
  No hay anhelos. Deja de anhelar.
  Tienes que empezar a pensar
  como abeja. ¡Piensa como abeja!
  Piensa como abeja.
  ¡Piensa como abeja! ¡Piensa como abeja!
  Ahí está, en la piscina.
  ¿Sabes cuál es tu problema?
  ¿Necesito pensar como una abeja?
  ¿Cuánto tiempo seguirás así?
  ¡Llevas 3 días! ¿Cuándo vas a trabajar?
  Tengo que tomar decisiones
  que afectan mi vida.
  ¿Cuál vida? ¡No tienes vida ni trabajo!
  ¡Apenas eres una abeja!
  ¿Te mataría hacer un poco de miel?
  ¡Barry, sal! ¡Te está hablando tu papá!
  ¡Martin, habla con él!
  ¡Barry, te estoy hablando!
  Azúcar
  Ay, miel, miel
  Tú eres mi dulce, chica
  Y haces que yo te desee
  Miel
  Ay, miel, miel
  ¿Vienes?
  ¿Tienes todo?
  ¡Todo listo!
  Vete, yo te alcanzo.
  No tardes mucho.
  No puedo creer lo lindo
  Que es amarte
  No puedo creer que sea verdad
  No puedo creer lo maravilloso
  Que es sentir esto
  No puedo creer que sea verdad
  ¡Mira esto!
  Azúcar
  Ay, miel, miel
  ¡Vanessa!
  -Todavía estamos aquí.
  -Te dije que no le gritaras.
  ¡No responde a los gritos!
  -¿Y por qué me gritas a mí?
  -¡Porque no escuchas!
  No voy a escuchar esto.
  Me tengo que ir.
  -¿A dónde?
  -A una cita.
  ¿Con una chica?
  ¿Por eso no puedes decidir?
  ¡Adiós!
  Espero que sea abejuna.
  FLORES VANESSA
  FLORES VANESSA
  ¿Tienen un desfile enorme
  de flores cada año en Pasadena?
  ¡Estar en el Torneo de las Rosas
  es el sueño de todo florista!
  ¡Estar en un carro, rodeado de flores,
  con el aplauso del público!
  Un torneo. ¿Las flores
  compiten en eventos atléticos?
  No. Yo tengo una.
  ¿Por qué no vuelas a todos lados?
  Es agotador. ¿Por qué no corres tú?
  ¿No es más rápido?
  Está bien, ya veo. Te toca.
  TiVo. ¿Puedes congelar
  la imagen en vivo? ¡Qué locura!
  ¿Uds. no tienen eso?
  Tenemos PanalVo,
  pero es una enfermedad terrible.
  Cielos.
  ¡Abejas tontas!
  Te deben dar ganas de picar a todos.
  Tratamos de no picar,
  normalmente es mortal.
  No puedes perder los estribos.
  Hay que tener cuidado.
  Pateas una pared, caminas...
  ...escribes una carta y la tiras.
  La dominas como cualquier emoción...
  ...como el enojo, los celos, la lujuria.
  ¡Dios mío! ¿Estás bien?
  Sí.
  -¿Qué te pasa?
  -Es un insecto.
  ¡No está molestando a nadie!
  ¡Vete de aquí, desdichado!
  ¿Era una circular de Pic N'Save?
  Sí. ¿Cómo sabes?
  Sentí como unas 1 0 páginas.
  Nuestro límite son 75.
  Lo tienen científicamente medido.
  Un primo murió por un Vogue italiano.
  ¿Qué, en nombre
  del poderoso Hércules, es esto?
  MlEL
  "Abejín"..."Panal Dorado"...
  ¿"Selección Privada de Ray Liotta"?
  -¿Es el actor?
  -No lo conozco.
  - ¿Qué hace esto aquí?
  -La gente se la come.
  ¿No tienen suficiente comida propia?
  -Sí.
  -¿Cómo la consiguen?
  -La hacen abejas.
  -¡Yo sé quiénes la hacen!
  ¡Y es difícil hacerla!
  ¡Hay que calentar, enfriar,
  revolver...todo lo de Krelman!
  -Es orgánica.
  -¡Es "panálica"!
  Sólo es miel, Barry.
  ¿Sólo es qué?
  ¡Las abejas no saben de esto!
  ¡Esto es un robo!
  ¡Nos han quitado casas, escuelas,
  hospitales! ¡Sólo nos queda esto!
  50% DE DESCUENTO
  ¿Y está de oferta?
  ¡Voy a llegar al fondo de todo esto!
  ¡Voy a llegar al fondo de todo esto!
  Oye, Héctor.
  -¿Ya casi acabas?
  -Casi.
  Está aquí. La percibo.
  Supongo que me iré a casa...
  ...y dejaré esta miel afuera,
  sin que nadie la vigile.
  ¡Te agarré, acomodador de cajas!
  Sabía que había oído algo.
  ¡Puedes hablar!
  Puedo hablar. ¡Y ahora tú vas a hablar!
  ¿Quién es tu proveedor
  de la sustancia dulce?
  No entiendo. Creía que éramos amigos.
  ¡Nosotros no queremos
  molestar a las abejas!
  ¡Demasiado tarde! ¡Ya es nuestra!
  ¡Ud. señor, escogió mal
  con quien pelear!
  ¡Ud., señor, será el almuerzo
  de mi iguana lgnacio!
  ¿De dónde viene la miel?
  ¡Dime de dónde!
  ¡Viene de Granjas de Miel!
  GRANJAS DE MlEL
  ¡Loco!
  ¿Qué horrible cosa ha pasado aquí?
  Estas caras nunca supieron
  qué les pegó. Y ahora...
  ...van camino al olvido.
  ¡No te muevas!
  ¿No estás muerto?
  ¿Me veo muerto? ¡Matan todo
  lo que se mueve! ¿A dónde vas?
  A Granjas de Miel.
  Descubrí algo gigantesco.
  Yo voy a Alaska. La sangre
  de alce es tremenda. ¡Te vuelve loco!
  Yo voy a Tacoma.
  -¿Y tú?
  -Él sí está muerto.
  Bueno.
  -¿Qué es eso?
  -¡Mo!
  ¡Un limpiador de triple hoja!
  ¡Súbete! ¡Sólo así te puedes salvar!
  ¿Por qué todo tiene que estar
  tan endemoniadamente limpio?
  ¿Cuánto necesitan ver?
  ¡Abran los ojos! ¡Saquen la cabeza!
  Este es el noticiero NPR
  de Washington con Carl Kasell.
  ¡Pero ya no maten más insectos!
  -¡Abeja!
  -¡Sangre de alce!
  -¿Oyes algo?
  -¿Como qué?
  Gritos pequeños.
  Apaga la radio.
  ¿Qué hay, chico abeja?
  Hola, Sangre.
  Había una fila de tarros
  de miel hasta el horizonte.
  Supongo que este camión
  va adonde la consiguen.
  Es nuestra miel.
  -Uds. tienen lazos estrechos.
  -Estamos encimadas.
  Hay mucha intimidad.
  Nosotros no. Cada mosquito
  vela por sí mismo.
  -¿Y si tienes problemas?
  -Si eres mosquito, ya tienes problemas.
  No le gustamos a nadie.
  ¡Te ven y te pegan! ¡Pum, pum!
  Al menos estás en el mundo.
  Debes de conocer chicas.
  Nuestras chicas quieren
  algo mejor, polillas, libélulas.
  Una chica mosquito no quiere mosquitos.
  ¡Estás bromeando!
  TRANSPORTE DE SANGRE
  ¡Sangre de Alce se va del edificio!
  ¡Adiós, abeja!
  ¡Hola, amigos!
  ¡Yo sabía que los iba a alcanzar aquí!
  ¿Trajeron su pajita loca?
  GRANJAS DE MlEL
  La ponemos en tarros, les ponemos
  etiqueta y es pura ganancia.
  ¿Qué es este lugar?
  Las abejas tienen cerebros diminutos.
  ¡Son unas descerebradas!
  ¡Descerebradas!
  -Mira el nuevo ahumador.
  -Fabuloso. Es lo máximo.
  ¡El Thomas 3000!
  ¿Ahumador?
  90 soplidos por minuto.
  El doble de nicotina, todo el alquitrán.
  Un par de inhalaciones
  y quedan inconscientes.
  Ellas hacen la miel
  y nosotros nos hacemos ricos.
  ¿"Ellos hacen la miel
  y nosotros nos hacemos ricos"?
  ¡Cielos!
  ¿Qué pasa? ¿Están bien?
  Sí. No dura mucho.
  ¿Cómo llegaron aquí? ¡Están en
  un panal falso con paredes falsas!
  Mudaron a la reina acá.
  No tuvimos más remedio.
  ¿Su reina?
  ¡Ese es un hombre vestido de mujer!
  ¡Es un travesti!
  ¿Qué es esto?
  ¡Ay, no!
  ¡Hay cientos!
  ¡Miel de abeja!
  ¡Están robando descaradamente
  nuestra miel a una escala gigante!
  ¡Los osos jamás han hecho algo
  tan malo! Yo me propongo pararlo.
  Ay, Barry.
  ¿Humanos llevándose miel?
  ¡Eso es un rumor!
  ¿Estas fotos parecen rumores?
  Es una teoría de conspiración.
  Son fotos alteradas.
  ¿Cómo te metiste en todo esto?
  Ha estado hablando con humanos.
  ¿Con humanos?
  Tiene una novia humana.
  ¡Y se besan!
  ¿Se besan?
  ¡No nos besamos!
  -Te gustaría.
  -¿De qué lado estás?
  ¡Del de las abejas!
  Una vez salí con un grillo.
  Esas piernas locas no me dejaron dormir.
  ¿Esto es lo que quieres hacer
  con tu vida?
  Lo quiero hacer por todos.
  ¡Nadie trabaja tanto como las abejas!
  Papá, un día llegaste
  tan agobiado del trabajo...
  ...que tus manos seguían revolviendo.
  Me acuerdo de eso.
  ¿Qué derecho tienen
  de tomar nuestra miel?
  Nosotros tomamos 2 tazas al año.
  ¡Ellos la ponen en pomadas labiales!
  Aun si es cierto,
  ¿qué puede hacer una abeja?
  Picarlos donde duele.
  ¡En la cara! O en el ojo.
  -Eso duele.
  -No.
  ¿En la nariz? Eso casi te mata.
  A los humanos sólo puedes picarlos
  en un lugar donde importa.
  Este es "El Panal Cinco"
  con su único noticiero de una hora.
  ¡No más barbas de abejas!
  Con el presentador
  Alejandro Cacho Zumbón.
  El clima con Granizo La Raya.
  Deportes con Néctor Larva.
  Y Paola Rojas.
  -Yo soy Alejandro Cacho Zumbón.
  -Y yo soy Paola Rojas.
  ¡Una abeja del tricondado,
  Barry Benson...
  ...piensa demandar a la raza humana
  por robarnos nuestra miel...
  ...empacarla y beneficiarse ilegalmente!
  ABEJA LARRY KlNG
  Mañana en "Abeja Larry King"...
  ...tendremos a tres ex reinas
  discutiendo su nuevo libro...
  ... Damas elegantes,
  que saldrá esta semana en Hexagón.
  Hoy estamos hablando con Barry Benson.
  ¿Nunca pensaste: "Soy un chico
  del panal, no puedo hacer esto"?
  Las abejas nunca han temido
  cambiar el mundo.
  Están la Abeja Colón,
  la Abeja Ghandi. ¡Abejesús!
  Donde crecí jamás
  demandaríamos a humanos.
  Pensábamos más en béisbol
  y tiendas de dulces.
  ¿Cuántos años tienes?
  La comunidad de abejas
  te apoya en este caso...
  ...que será el juicio del "apisiglo".
  Gracias. También hay un Larry King
  en el mundo humano.
  Es un nombre común. La próxima semana...
  Se parece a ti y tiene un programa
  y tirantes y puntos de color...
  ¡La próxima semana...
  ...y lentes y pasan citas del invitado
  abajo aunque las acabes de oír.
  ...es la Semana de Osos!
  ¡Son peludos, espantosos y estarán aquí!
  Se agacha hacia adelante, tiene
  hombros picudos, ojos entrecerrados.
  FLORES VANESSA
  ¡En tenis atacas el punto débil!
  Era mi abuela, Ken. ¡Tiene 81 años!
  ¡Su revés es espantoso!
  ¿Por qué no habría de aprovecharme?
  Silencio, por favor. Estamos trabajando.
  -¿Es la misma abeja?
  -¡Sí, lo es!
  Le estoy ayudando a demandar
  a la raza humana.
  -Ah, hola.
  -Hola, abeja.
  Te presento a Ken.
  Me acuerdo de ti.
  Zapatos Timberland, suela Vibram.
  ¿Por qué está hablando?
  Mejor vete, estamos ocupados trabajando.
  ¡Pero es nuestra noche de yogur!
  Adiós.
  ¿Por qué es tan difícil
  la noche de yogur?
  Pobrecitos. ¡Los dos
  llevan horas trabajando!
  Y Adam me ha ayudado muchísimo.
  ROLLOS DE CANELA
  -Capa de azúcar...
  -¿Cuántos cubitos?
  Uno. Trato de no usar a la competencia.
  ¿Por qué me estás ayudando?
  Las abejas tienen buenas cualidades.
  Y así no pienso en la tienda.
  En vez de flores, la gente
  está dando ramos de globos.
  Sí, son geniales...si tienes 3 años.
  Y flores artificiales.
  -¡Esas me vuelven sicótico!
  -A mí también.
  ¡Aguijones doblados,
  polinización inútil!
  ¡Las abejas las deben de odiar!
  Nada peor que un narciso adulterado.
  Quizá esto sirva
  para compensar todo eso.
  -Esta demanda es muy importante.
  -Supongo.
  ¿Seguro que la quieres presentar?
  ¡Cuando acabe, los humanos no podrán...
  ...decir "miélcoles" sin pagar regalías!
  Hay un espectáculo increíble
  en Manhattan...
  ...con el mundo esperando,
  porque por primera vez en la historia...
  ...escucharemos con nuestros
  propios oídos hablar a una abeja.
  ¿En qué nos metimos, Barry?
  Vino muchísima gente, ¿no?
  Increíble cuántos humanos
  no trabajan durante el día.
  ¿Crees que las compañías globales
  tengan buenos abogados?
  ¡Quédense todos atrás de la barricada!
  ALlCOMPRA
  -¿Qué pasa?
  -No sé. Me dio un escalofrío.
  Vaya, son los "abejados".
  ¿Uds. trabajaron en esto?
  MlEL
  ¡Todos de pie! La honorable
  jueza Bumbleton preside.
  El caso número 4-4-7-5...
  ...Corte Superior, Barry Abeja Benson
  vs. Ia lndustria de la Miel.
  Se abre la sesión.
  Sr. Montgomery, ¿representa
  a las 5 compañías colectivamente?
  Es un honor.
  Sr. Benson, ¿Ud. representa
  a todas las abejas del mundo?
  ¡Es una broma! Sí, Sra. Jueza,
  listos para proseguir.
  Sr. Montgomery,
  su declaración inicial, por favor.
  Damas y caballeros del jurado...
  ...mi abuela era una mujer sencilla.
  Nacida en una granja,
  ella creía que era su derecho divino...
  ...beneficiarse de los frutos
  de la naturaleza que Dios creó.
  Si viviéramos en el mundo invertido
  que el Sr. Benson imagina...
  ...¿qué significaría eso?
  ¡Yo tendría que negociar
  con el gusano de seda...
  ...para que mis pantalones
  tuvieran elástico!
  ¡Una abeja que habla!
  ¿Cómo sabemos
  que no se trata de una...
  ...captura de imagen holográfica
  de Hollywood?
  ¡Quizá estén usando rayos láser!
  ¡Robots! ¡Ventrilocuismo!
  ¡Clonación! ¡Posiblemente hasta...
  ...podría estar tomando esteroides!
  ¿Sr. Benson?
  Damas y caballeros, aquí no hay trucos.
  Yo soy una abeja ordinaria.
  La miel es muy importante para mí.
  Para todas las abejas.
  ¡Nosotras la inventamos!
  Nosotras la hacemos,
  y la protegemos con nuestras vidas.
  ¡Pero hay gente en este cuarto
  que cree...
  ...que nos la puede quitar...
  ... porque somos pequeñas!
  ¡Espero que cuando todo esto termine...
  ...vean que al quitarnos la miel
  no sólo nos quitan lo que tenemos...
  ...sino lo que somos!
  Ojalá se vistiera así siempre.
  ¡Qué guapo!
  Llame a su primer testigo.
  Sr. Klaus Vanderhayden de Granjas
  de Miel, tiene una compañía grande.
  Supongo que sí.
  ¡Veo que también son dueños
  de Jaleaburton y Mielron!
  Sí, nos dan celadores para las abejas.
  772 Celador. Me parece
  una palabra muy inquietante.
  Me imagino que no tienen
  "liberadores", ¿verdad?
  -No.
  -Perdón, no lo oigo.
  -No.
  -No.
  Porque Uds. no liberan abejas,
  las encierran. No sólo eso...
  ...pensaron que un oso podía ser
  buena imagen para un tarro de miel.
  Son criaturas adorables.
  El Oso Yogui, Fozzie el Oso,
  osos de peluche.
  Sí. Como esto.
  ¡Los osos matan abejas!
  ¿Le gustaría que su cabeza
  irrumpiera en su sala?
  ¡Que mordiera su sofá!
  ¡Que escupiera sus cojines!
  Ya fue suficiente. Llévatelo.
  Sr. Sting, o "Aguijón", gracias
  por venir. Su nombre me intriga.
  -¿Dónde lo he oído antes?
  -Tocaba con el conjunto The Police.
  Pero nunca ha sido policía, ¿verdad?
  No.
  Y aquí tenemos un ejemplo más...
  ...de la cultura abejuna robada...
  ...por un humano
  para un nombre escénico.
  Ay, por favor.
  ¿Le ha picado una abeja, Sr. Sting?
  Porque yo estoy picado, Sting.
  ¿O debería decir...Sr. Gordon M. Sumner?
  ¿Ese no es su nombre de verdad?
  ¡ldiotas!
  Sr. Liotta, primero déjeme felicitarlo,
  aunque tarde...
  ...por el Emmy que ganó
  por su aparición en "E.R." en 2005.
  Gracias, gracias.
  En su currículum veo que
  es demoníacamente apuesto...
  ...pero que tiene un tumulto interno
  a punto de explotar.
  Disfruto de lo que hago. ¿Es un crimen?
  Todavía no. ¿Pero tan bajo ha caído?
  ¿A explotar abejitas para no...
  ...tener que ensayar
  o aprenderse diálogos?
  ¡Cuidado! ¡Puedo estallar ahora mismo!
  Este no es un "buen muchacho",
  ¡es un mal muchacho!
  ¿Puede alguien aplastar
  a este cretino para que podamos irnos?
  -¡Orden!
  -¡Todos lo están pensando!
  ¡Orden!
  -¡Díganlo!
  -¡Sr. Liotta, siéntese!
  ¡DEMANDEN A ABEJA!
  ABEJAS NOS MANDAN A VOLAR
  ESTUDlO ABANDONA PROYECTO DE LlOTTA
  ESTUDlO ABANDONA PROYECTO DE LlOTTA
  Fue muy amable el oso en ayudarnos así.
  Creo que el jurado está de nuestro lado.
  ¿Estamos haciendo todo legalmente bien?
  Yo soy una florista.
  Cierto. Brindo por un excelente equipo.
  ¡Por un excelente equipo!
  Hola.
  -¡Ken!
  -Hola.
  No creía que fueras a venir.
  No, se me hizo tarde.
  Traté de llamar pero... Ia batería.
  No quería desperdiciar todo
  y llamé a Barry. Por suerte pudo venir.
  Sí, qué suerte.
  Todavía queda un poco.
  Te lo puedo calentar.
  Sí, caliéntalo. Da igual.
  Dicen que eres un excelente tenista.
  A mí no me fascina el juego.
  La pelota es un poco pegajosa.
  Ahí es donde me siento normalmente.
  Justo...ahí.
  Ken, Barry estaba viendo
  tu currículum...
  ...y también pensó que "comer
  con palitos chinos" no es una habilidad.
  ¿Crees que no veo lo que estás haciendo?
  Yo sé que es duro encontrar el trabajo
  ideal. Tenemos eso en común.
  ¿De verdad?
  Tenemos un empleo del 1 00%,
  pero con empleos como sacar mugre.
  Eso era lo que estaba pensando hacer.
  Le presté a Barry tu máquina
  de afeitar para su pelusilla.
  Voy a vaciar el aguijón.
  Sí, ve a vaciarlo.
  Mira eso.
  ¿Sabes qué? Ya me harté...
  ...de tus jueguitos mentales.
  -¿Qué es eso?
  -El Vogue italiano.
  Mamma mia, son muchas páginas.
  Son muchos anuncios.
  "Van" preguntó por qué tu vida valía
  más que la mía.
  ¡Qué curioso, no recuerdo eso!
  ¡Creo que algo apesta aquí!
  Me encanta el olor a flores.
  ¿Qué tal el olor a llamas?
  No me gusta tanto.
  ¡Chinche de agua! ¡Soy neutral!
  LETAL
  ¡Traigo una gorra de bálsamo labial!
  ¡Qué patético!
  ¡Tengo mis problemas!
  ¡Mira nada más! ¡Quedas excusado!
  -Estás bromeando.
  -¿Tú crees?
  ¡Hora del surf, compa!
  ¡Agua de popó!
  ¡Ese tazón es lo máximo!
  ¡Excepto por esas tiras
  amarillas mugrosas!
  ¡Kenneth! ¿Qué haces?
  ¡A mí ni me gusta la miel! ¡No la como!
  ¡Necesitamos hablar!
  ¡Sólo es una abejita!
  ¡Y es la abeja más amistosa
  que he conocido en mucho tiempo!
  ¿En mucho tiempo? ¿De qué hablas?
  ¿Hay otros insectos en tu vida?
  No, pero tengo otras plagas en mi vida.
  ¡Y tú eres una de ellas!
  Abejas que hablan,
  adiós noche de yogur...
  ¡Tengo los nervios de punta
  por esta montaña rusa emocional!
  ¡Adiós, Ken!
  Y para que quede bien claro...
  ... ¡prefiero los edulcorantes
  artificiales hechos por el hombre!
  Perdón por todo eso.
  ¡Ya sé que te dejan un gustillo!
  ¡A mí me gusta!
  Siempre ha habido una barrera
  entre Ken y yo.
  Nunca la pude superar.
  En fin.
  ¿Estarás bien para el juicio?
  Creo que al Sr. Montgomery
  ya se le acabaron las ideas.
  Quisiera llamar al
  Sr. Barry Benson Abeja al estrado.
  Buena idea. Con razón se le considera
  uno de los mejores abogados...
  Layton, tiene que hechizar al jurado
  o este juicio se acabó.
  Tranquilo. Lo único que tengo
  que hacer para influenciar al jurado...
  ...es recordarles lo que
  no les gusta de las abejas.
  -¿Tiene las pinzas?
  -¿Es Ud. alérgico?
  Sólo a perder, hijo. Sólo a perder.
  Sr. Abeja, quisiera preguntarle
  lo que todos queremos saber.
  ¿Cuál, precisamente, es su relación...
  ...con esa mujer?
  Somos amigos.
  -¿Buenos amigos?
  -Sí.
  ¿Qué tan buenos? ¿Viven juntos?
  Un momento...
  ¿Ud. es su pequeña...
  ...chinche?
  Yo sé de abejas.
  A mi manera de entender...
  ...Ia reina da a luz
  a todas las abejas, ¿no?
  -Sí, pero...
  -¡Entonces ellos no son sus padres!
  -Ay, Barry.
  -¡Sí lo son!
  ¡Detenme!
  Ud. es una abeja ilegítima, ¿verdad?
  ¡Está denunciando a las abejas!
  ¿No salen con sus primas?
  -¡Objeción!
  -¡Lo voy a usar de alfiletero!
  ¡No, eso es lo que quiere!
  ¡Me han herido!
  ¡Dios mío, estoy herido!
  ¡Orden!
  ¡El veneno está surcando mis venas!
  ¡Me ha abatido una bestia alada
  de destrucción!
  ¿Ven? ¡No podemos tratarlas
  como iguales! ¡Son unas salvajes!
  ¡Picar es lo único que saben hacer!
  ¡Así son ellas!
  -Adam, quédate conmigo.
  -No siento mis piernas.
  ¿Qué ángel de misericordia
  se ofrecerá a chupar el veneno...
  ...de mi trasero pulsante?
  ¡Quiero orden en esta corte! ¡Orden!
  ¡Orden, por favor!
  El caso de las abejas
  contra la raza humana...
  ...dio una vuelta aguda...
  ...cuando uno de sus abogados
  picó al Lic. Montgomery.
  -Hola, amigo.
  -Hola.
  -¿Te duele mucho?
  -Sí.
  Yo...
  ...arruiné todo el caso, ¿verdad?
  No importa. Lo importante es
  que estás vivo. ¡Podías haber muerto!
  Mejor muerto que así. Mírame.
  Lo agarraron de la cafetería,
  de un sándwich de atún.
  Mira, todavía tiene un poco de apio.
  ¿Qué se siente picar a alguien?
  No lo puedo explicar. ¡Era pura...
  ...adrenalina y luego...el éxtasis!
  Está bien.
  ¿Crees que fue una trampa?
  Claro. Lo siento,
  yo nos metí directo en esto.
  ¿Cómo se nos ocurrió? Somos sólo
  un par de insectos en este mundo.
  ¿Qué nos harán los humanos si ganan?
  No lo sé.
  A las cucarachas las ponen en moteles,
  no suena tan mal.
  ¡Las cucarachas entran, pero no salen!
  Ay, cielos.
  ¿Puedes hacer que cierren esa ventana?
  -¿Por qué?
  -Por el humo.
  Las abejas no fuman.
  Cierto. Las abejas no fuman.
  ¡Las abejas no fuman!
  ¡Pero algunas abejas están fumando!
  ¡Eso es! ¡Con eso podemos ganar!
  ¿De verdad? ¿No perdimos?
  Vístete. Tengo que ir a un lado.
  Demóralos como puedas.
  Y si hicieron el paso 29 bien,
  están listos para la tina.
  Sr. Flayman.
  ¿Sí? ¡Sí, Sra. Jueza!
  ¿Dónde está el resto de su equipo?
  Sra. Jueza, es muy interesante.
  Las abejas aprenden
  a volar sin rumbo definido...
  ...y como resultado,
  a veces nos demoramos.
  Una vez oí una anécdota simpática...
  ¿No le han quitado
  suficiente tiempo a esta corte?
  ¿Cuánto tiempo más vamos a tolerar
  estas distracciones absurdas?
  No han presentado evidencia
  contundente para apoyar sus cargos...
  ...contra mis clientes,
  que tienen negocios legítimos.
  ¡Pido que se retiren todos los cargos!
  Voy a tener que
  considerar
  la petición del Lic. Montgomery.
  ¡No puede!
  Tenemos muy buenos argumentos.
  ¿Dónde están las pruebas, la evidencia?
  ¡Muéstrenme la pistola humeante!
  ¡Alto! ¿Quiere una pistola humeante?
  ¡Aquí está la pistola humeante!
  ¿Qué es eso?
  ¡Un ahumador de abejas!
  ¿Este pequeño aparato inofensivo?
  ¡Esto no le haría daño a una mosca,
  ya no digamos una abeja!
  Señores del jurado, miren lo que...
  ...Ies pasa a abejas a las que nunca les
  preguntaron: "¿Sección de no fumar?".
  ¿Esto quería la naturaleza?
  ¿Qué nos hicieran adictos a este humo...
  ...y a campos de trabajo
  hechos por el hombre?
  ¿Viviendo como esclavos de miel
  para el hombre blanco?
  -¿Qué hacemos?
  -¡Jugó la carta de la especie!
  ¡Damas y caballeros, por favor...
  Iiberen a las abejas!
  ¡Liberen a las abejas!
  ¡Liberen a las abejas!
  ¡Liberen a las abejas!
  ¡Esta corte falla
  en favor de las abejas!
  ¡Vanessa, ganamos!
  ¡Yo sabía que podías!
  ¡Venga esa mano!
  ¡Ay, perdón!
  ¡Estoy bien!
  ¿Sabes lo que significa esto?
  ¡Toda la miel será de las abejas!
  ¡No tendremos que trabajar tanto!
  Esto es una perversión
  del equilibrio de la naturaleza.
  Te vas a arrepentir.
  ¿Cuánta miel hay allá afuera?
  Está bien. Uno por uno.
  ¿Qué ropa traes?
  Mi suéter es Ralph Lauren
  y no traigo pantalones.
  -¿Y si Montgomery tiene razón?
  -¿Qué quieres decir?
  Llevamos viviendo de cierta manera
  27 millones de años.
  Felicidades por su victoria.
  ¿Qué desea como compensación?
  Primero, que cierren
  todos los campos de trabajos.
  Luego, que nos devuelvan
  toda nuestra miel...
  ...hasta la última gota.
  Exigimos que dejen de glorificar
  al oso como algo más...
  ...que una máquina cochina
  de pestilencia.
  Todos sabemos lo que hacen en el bosque.
  Espera mi señal.
  Dispara.
  Tendrá nauseas unas horas
  pero luego se le pasará.
  Y no toleraremos apodos
  que resulten insultantes...
  ¡Pero sólo es un nombre escénico!
  ...Ia introducción de miel en productos
  fraudulentos...
  ...y su uso en la hora humana del té.
  ¡No puedo respirar!
  ¡Tráiganlo, muchachos!
  ¡Déjenlo ahí! ¡Muy bien!
  Ábrelo.
  Sr. Buzzwell, pasamos
  de las tres tazas.. ¡y viene más!
  -¡Necesitamos cerrar la planta!
  -Nunca la hemos cerrado.
  ¡Paren la producción de miel!
  ¡Dejen de hacer miel!
  ¡Dele vuelta a su llave, señor!
  ¿Y ahora, qué hacemos?
  ¡Bomba!
  ¡Estamos parando la producción!
  Abortar misión.
  Abortando polinización y recolección
  de polen. Volviendo a base.
  Cerrado
  No hay flores
  ¡Es increíble cuánta miel había afuera!
  Ah, ¿sí?
  ¿Qué pasa? ¿Dónde están todos?
  -¿Están celebrando?
  -Están en casa.
  No saben qué hacer.
  Están descansando.
  Tu tío Carl va camino
  a San Antonio con un grillo.
  Al menos recuperamos la miel.
  A veces pienso: ¿Y qué si la miel
  le gustaba a los humanos?
  ¡La miel es maravillosa!
  Era emocionante hacerla.
  Este era el escritorio de mi nuevo
  trabajo. Quería esmerarme.
  Y ahora...
  ...ahora no puedo.
  ¿Por qué no están contentos?
  ¡Creía que sus vidas mejorarían!
  No están haciendo nada.
  Increíble, la miel cambia a la gente.
  No tienes idea de lo que
  está pasando, ¿verdad?
  -¿Qué me querías enseñar?
  -Esto.
  ¿Qué pasó?
  Y eso es lo de menos.
  Ay, no. Ay, cielos.
  Todo se está marchitando.
  No se ve nada bien, ¿verdad?
  No.
  ¿Quién crees que tiene la culpa?
  Voy a decir que las abejas.
  ¿Las abejas?
  Específicamente, yo.
  Nunca pensé que si las abejas
  no hacían miel que pasaría todo esto.
  No son sólo las flores. Las frutas
  y las verduras necesitan abejas.
  Es todo nuestro examen del bachillerato.
  Si quitas las verduras y frutas,
  afectas a los animales.
  Y luego...
  ¿A la especie humana?
  Así que si no hay polinización,
  todo puede ir para abajo, ¿no?
  Ya sé que yo también tengo parte
  de la culpa.
  ¿Hacemos un pacto suicida?
  ¿Cómo lo hacemos?
  -Yo te pico, tú me pisas.
  -Y tú mueres dos veces.
  Exacto.
  Oye, Barry. Lo siento,
  pero me tengo que ir.
  Tuve que abrir la bocota y hablar.
  ¿Vanessa?
  ¿Vanessa? ¿Por qué te vas?
  ¿A dónde vas?
  Al último desfile
  del Torneo de las Rosas.
  Lo adelantaron porque todas las flores
  se están muriendo.
  Es la última oportunidad
  que tendré de verlo.
  Lo siento mucho. No era mi intención
  que todo acabara así.
  Ya lo sé. Tampoco era la mía.
  El Torneo de las Rosas.
  Las rosas no pueden hacer deportes.
  Espera un momento. Rosas. ¿Rosas?
  ¡Rosas!
  ¡Vanessa!
  ¿Rosas?
  ¿Barry?
  -¡Las rosas son flores!
  -¡Sí, lo son!
  ¡Flores, abejas, polen!
  ¡Ya lo sé!
  ¡Por eso es el último desfile!
  ¡Quizá no! ¿Le puedes pedir
  que vaya más despacio?
  ¿Puede ir más despacio?
  ¡Barry!
  Cometí un grave error.
  Es un desastre y todo es culpa mía.
  Sí, lo es.
  Arruiné el planeta. Quería ayudarte
  con tu tienda y te fue peor.
  La verdad, ya la cerré.
  Creía que estabas remodelando.
  Pero tengo otra idea y es mejor
  que todas las anteriores juntas.
  ¡No la quiero oír!
  Ellos tienen las rosas,
  las rosas tienen el polen.
  Yo conozco todas las abejas,
  plantas y flores del parque.
  Sólo tenemos que juntar
  lo suyo con lo nuestro.
  -Abejas.
  -Parque.
  -¡Polen!
  -Flores.
  -¡Repolinización!
  -¡En toda la nación!
  El Torneo de las Rosas,
  Pasadena, California.
  Sólo tienen flores y carros.
  La seguridad será muy estricta.
  Tengo una idea.
  Vanessa Bloome, FTD.
  Asunto floral oficial. Es de verdad.
  Disculpe, señorita. Qué lindo broche.
  Gracias. Fue un regalo.
  Ya que estemos dentro,
  escogemos un buen carro alegórico.
  ¿Qué tal "La Princesa y el Chícharo"?
  Yo seré la princesa y tú el chícharo.
  Entiendo.
  -¿Dónde me siento?
  -¿Qué eres?
  -El chícharo.
  -¿El chícharo?
  Vas debajo del colchón.
  -En este cuento, no.
  -Voy por el encargado.
  ¡Ve por él! ¡Este desfile es un fiasco!
  A ver qué tan rápido puede ir esto.
  ¿Qué estás haciendo?
  Luego nos metemos al tráfico...
  ...sin suscitar sospechas.
  Ya en el aeropuerto,
  nada nos podrá parar.
  ¡Alto! ¡Seguridad!
  ¿Ud. y su insecto empacaron el carro?
  ¿Ha estado en su poder todo el tiempo?
  ¿Se puede quitar los zapatos?
  -Quítese el aguijón.
  -Es parte de mí.
  Ya lo sé. Estaba bromeando.
  Disfruten de su vuelo.
  AL AEROPUERTO JFK
  Con suerte, tendremos
  suficiente polen para lograr esto.
  ¡Tenemos suficiente polen
  para lo que necesitamos!
  ¡Creo que esto va a funcionar!
  Tiene que funcionar.
  Habla el Capitán Scott.
  Tenemos mal tiempo en Nueva York...
  ...así que habrá
  un retraso de dos horas.
  Llevamos flores cortadas,
  sin agua. ¡No van a servir!
  Tengo que hablar con esta gente.
  Ten cuidado.
  ¿Me ayuda con la revista del avión?
  Quiero ordenar el filtro
  de piscina portátil parlante.
  Capitán, tengo un problema serio.
  -¿Qué dijiste, Hal?
  -Nada.
  ¡Abeja!
  ¡No se espanten! Toda mi especie...
  ¿Qué estás haciendo?
  -¡Esperen! ¡Soy abogado!
  -¿Quién es abogado?
  No te muevas.
  LANCHA DE EMERGENClA
  Ay, Barry.
  Buenas tardes. Les habla su capitán.
  ¿Puede reportarse
  la Srta. Vanessa Bloome a la cabina?
  ¡Y apúrese!
  ¿Qué pasó?
  Traté de hablarles. ¡Había una
  aspiradora, una peluca y una lancha!
  ¡Ahora el calvo y el lanchero
  están desmayados!
  -¿Es otro chiste de abejas?
  -¡No!
  ¡No tenemos pilotos!
  Habla la torre de Nueva York,
  vuelo 3-5-6. ¿Cuál es su situación?
  Habla Vanessa Bloome.
  Soy una florista neoyorquina.
  ¿Dónde está el piloto?
  Está inconsciente y el copiloto también.
  ¿Alguien a bordo
  tiene experiencia de vuelo?
  De hecho, sí.
  -¿Quién es?
  -Barry Benson.
  ¿El del juicio de la miel?
  ¡Fantástico!
  Esto sólo es una abeja de metal.
  Con alas y motores gigantes.
  ¡No sé pilotear un avión!
  -¿John Travolta no es piloto?
  -Sí.
  ¿Qué tan difícil puede ser?
  ¡Barry! Vamos hacia unos rayos.
  ¡Les habla Bob Bumble con un flash
  informativo del aeropuerto JFK...
  ...donde se desarrolla
  una escena llena de suspenso!
  ¡Barry Benson,
  tras su reciente triunfo legal...
  ¡Es Barry!
  ...está tratando de aterrizar
  un avión lleno de gente...
  ...flores y una tripulación
  incapacitada!
  ¿Flores?
  Tenemos una tormenta en la zona
  y dos individuos en los controles...
  ...sin ninguna experiencia de vuelo.
  Un momento. Hay una abeja en ese avión.
  Conozco muy bien al Sr. Benson
  y sus inútiles compadres.
  ¡Bastante daño han hecho ya!
  Pero es su única esperanza.
  Una abeja no debería
  poder volar en lo absoluto.
  Sus alas son demasiado chicas...
  ¿No hemos oído eso un millón de veces?
  "La superficie de las alas
  y la masa corporal no son compatibles".
  -¡Pasa esto al aire!
  -¡Hecho!
  -Listos.
  -¡Nos vamos en vivo!
  Quizá nuestras labores sean
  un misterio para Uds.
  Hacer miel requiere muchas abejas
  haciendo muchos trabajitos.
  Pero un trabajo pequeño bien hecho...
  ...es importante.
  Más de lo que creíamos.
  Para nosotros y para todos.
  Por eso quiero que las abejas
  vuelvan a lo suyo, ¡a colaborar!
  ¡Así hacemos las cosas!
  Somos de acero.
  Ayudar al compañero.
  -¡*** y amarillo!
  -¡Hello!
  Izquierda, derecha, abajo, flota.
  -¿Flota?
  -Olvida flotar.
  ¿Sabes qué? No es tan difícil.
  ¡Barry! ¿Qué pasó?
  Creo que íbamos
  con el piloto automático.
  -Quizá eso me ayudó a pilotear.
  -¡Ahora ya no lo tenemos!
  Ahora resulta que no sé
  pilotear un avión.
  MUCHAS ABEJAS
  ¡Escuchen, vamos a ayudar al compañero!
  ¡Despeguemos!
  ¡Fuera!
  ¡Yo haré lo que haría y tú cópiame
  con las alas del avión!
  No grites.
  ¡No grito! ¡Estamos en un lío!
  ¡Es difícil concentrarse
  con ese tono de pánico!
  ¡No es un tono! ¡Me entró el pánico!
  ¡No puedo hacer esto!
  Contrólate. ¡Tienes que calmarte!
  Cálmate tú.
  Tú cálmate.
  -¡Tú cálmate!
  -¡Tú cálmate!
  -¡Tú cálmate!
  -¡Tú cálmate!
  -¡Tú cálmate!
  -¡Tú cálmate!
  -¡Espera!
  -¿Por qué? Me tocaba a mí.
  ¿Cómo está volando el avión?
  No sé.
  ¿Tienes flores para una ocasión feliz?
  ¡Los polinecios!
  Ellos sí ayudan al compañero.
  -*** y amarillo.
  -¡Hello!
  Bajemos esta lata
  a la pista de alquitrán.
  ¿A dónde? No veo nada. ¿Y tú?
  No, nada. Hay muchas nubes.
  Piensa como abeja, Barry.
  Como abeja.
  ¡Como abeja!
  Espera. Creo que estoy sintiendo algo.
  -¿Qué?
  -No sé, pero es fuerte y me jala.
  Como un instinto de 27 millones de años.
  Baja la nariz.
  ¡Como abeja! ¡Como abeja!
  -¿Qué es eso, en la pista?
  -¡lluminen eso!
  ¡Como abeja! ¡Como abeja!
  -¡Vanessa, apunta a la flor!
  -Bien.
  Apaga los motores.
  Vamos con potencia de abeja. ¿Listos?
  ¡Afirmativo!
  Muy bien. Con cuidado. Eso es.
  ¡Aterriza en esa flor!
  ¿Listos? ¡Reversa completa!
  ¡Denle vuelta!
  -¡Esa flor no! ¡La otra!
  -¿Cuál?
  -¡Esa flor!
  -¡Le estoy apuntando!
  Ese es un gordo de camisa floreada.
  ¡Yo hablo de la flor gigante...
  ...hecha de millones de abejas!
  Échate para adelante.
  Nariz abajo, cola arriba.
  Rota el avión.
  -¡Esto es una locura, Barry!
  -Sólo sé volar así.
  ¿Estoy loco o el avión esta volando
  como un insecto?
  Mete ahí la nariz. Huélela.
  ¡Marcha atrás!
  Sólo bájalo. Sé parte de ella.
  ¡Apunta al centro!
  ¡Ahora bájalo! ¡Bájalo, mujer!
  ¡Vámonos ya!
  ¡Barry, lo logramos!
  ¡Me enseñaste a volar!
  -Sí. ¡Nada de golpear las manos!
  -Cierto.
  ¡Dio resultado! ¿Viste la flor gigante?
  ¿Cuál flor gigante? ¡Claro que la vi!
  ¡Estuvo genial!
  -Gracias.
  -Pero no hemos acabado.
  ¡Escuchen todos!
  Esta pista está cubierta
  con el último polen...
  ...de las últimas flores disponibles
  en la Tierra.
  ¡Esta es nuestra última oportunidad!
  ¡Sólo nosotros hacemos miel,
  polinizamos flores y nos vestimos así!
  ¡Si vamos a sobrevivir como especie,
  este es nuestro momento!
  ¿Vamos a ser abejas o llaveros
  del Museo de Historia Natural?
  ¡Somos abejas!
  ¡Llavero!
  ¡Entonces, síganme!
  ¡Excepto el Llavero Solitario!
  Espera, Barry. Toma.
  Te lo ganaste.
  ¡Sí!
  ¡Soy un polinecio! ¡Y me queda!
  ¡Sólo necesito cortar las mangas!
  Ah, sí.
  Ese es nuestro Barry.
  Ahí viene el sol
  Ahí viene el sol y yo digo
  Está bien
  Polen
  Corazoncito
  Tuvimos...
  ...un largo y frío invierno
  Corazoncito, siento que
  Hace años que no ha venido
  Ahí viene el sol
  Ahí viene el sol
  Y yo digo: Está bien
  Corazoncito
  Las sonrisas
  Están volviendo a sus rostros
  Corazoncito
  Parece que hace años...
  ...que no ha venido
  Ahí viene el sol
  Ahí viene el sol y yo digo:
  Y yo digo:
  Está bien
  ¡Mamá! ¡Ya volvieron las abejas!
  ¡Sol, sol, sol! ¡Ahí viene!
  Si alguien necesita
  hacer una llamada, hágala.
  Trabajaremos tarde.
  Corazoncito
  Siento que el hielo empieza a derretirse
  VANESSA Y BARRY
  FLORES MlEL ASESORA LEGAL
  ¡Que tenga una tarde excelente!
  ¿Quién sigue?
  ¿Quiere miel con eso?
  Es aprobada por las abejas.
  BUFETE DE ABEJADO
  Leche, crema, queso, todo lo doy yo.
  ¡Y no veo ni un centavo!
  ¡A veces siento que sólo soy
  un pedazo de carne!
  No tenía idea.
  Disculpa. ¿Tienes un momento?
  Discúlpeme.
  Mi socio el mosquito la puede ayudar.
  Perdón, se me hizo tarde.
  ¿Él también es abogado?
  Yo ya era un parásito chupa sangre.
  Sólo necesitaba un portafolio.
  ¡Que tengan una tarde excelente!
  Tengo una orden enorme de tulipanes
  y no los puedo conseguir.
  No hay problema, "Vannie".
  Déjamelo a mí.
  Me salvaste la vida, Barry.
  ¿Quién sigue?
  ¡Prepárense, pilotos! Es hora de volar.
  ¡Gracias, Barry!
  ¡Esa abeja está viviendo mi vida!
  Olvídalo, Kenny.
  -¿Cuándo acabará esta pesadilla?
  -Olvídalo.
  Ahí viene el sol
  Ahí viene el sol
  -Qué hermoso día para volar.
  -Ya lo creo.
  Entre nosotros, me estaba muriendo
  en esa oficina.
  Está bien
  FlN
  CRUCE DE ABEJAS
  Tienes que empezar a pensar
  como abeja, amigo.
  -¡Como abeja!
  -¿Yo?
  ¡Como abeja! ¡Como abeja!
  ¡Despierta y piensa como abeja!
  ¡Caray!
  -Volando aquí, zumbando allá
  -Me encantan las vistas
  Escucha, todo zumbador necesita
  Decidir ser abeja
  -O no ser
  -Piensa como abeja
  -Barry, no tienes ocupación
  -¿Como polinización?
  ¡Eso es pensar como abeja!
  Amigo, ¿no hiciste el recorrido?
  -Vistes de *** y amarillo
  -Sólo quiero asegurarme
  -Para ser abeja
  -Empieza a pensar como abeja
  -¿No puedo esperar y ver?
  -No, no puede ser
  Sé una abejita ocupada
  No una abejita agitada
  Espera. Vamos a parar un segundo.
  Perdón. Disculpen todos.
  ¿Podemos parar aquí?
  ¡No voy a tomar una decisión
  en medio de un número musical!
  Bueno. Tómense diez minutos.
  Acaben, muchachos.
  ¡Apenas tuve tiempo de ensayarlo!`)
  .then((e) => console.log(`Código finalizado, ${e} mensajes enviados`))
  .catch(console.error);

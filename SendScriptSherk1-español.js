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

enviarScript(`
  SHREK 1
  Se levanta el telón. SHREK y FIONA con voz en off. Mientras los diálogos acontecen, puede verse
  una mínima teatralización de los hechos: El PEQUEÑO SHREK entra desde bambalinas correteando
  y jugando, cuando sus padres lo sientan en un tronco y le dicen al unísono “Debes marcharte”. Lo
  despiden y se retiran por bambalinas. El PEQUEÑO SHREK comienza a vagar cuando se cruza con la
  FIONA NIÑA que está siendo llevada a la torre por sus padres. Sus padres la despiden desde abajo
  mientras dicen al unísono “Alguien te rescatará”.
  
  SHREK.- Érase una vez un pequeño ogro llamado Shrek, que vivía con sus padres en un pantano. Era
  un lugar repugnante, pero él era feliz, porque los ogros aman lo repugnante. Un día, en su séptimo
  cumpleaños, sus padres lo sentaron a charlar para decirle exactamente lo que dicen todos los padres
  ogros a sus hijos de 7 años desde hace siglos:
  
  PAPA Y MAMA OGRO.- Debes marcharte.
  
  FIONA.- Oh oh, perdón, ¿llegué tarde?
  
  SHREK.- ¡Justo a tiempo! Les contaba mi parte de la historia, y lo cruel que…
  
  FIONA.- (Carraspeo pidiendo explicaciones) Cof, cof..
  
  SHREK.- ¿Qué?
  
  FIONA.- ¿En qué quedamos? Éste era MI musical.
  
  SHREK.- Ok, amor, seguí vos…
  
  FIONA.-(Carraspeo para comenzar a narrar) Érase una vez, una pequeña princesa llamada Fiona, que
  vivía en el reino de Muy Muy Lejano. Un día, en su séptimo cumpleaños, sus padres la llevaron a un
  lugar para decirle exactamente lo que dicen los padres de una princesa a su hija de 7 años desde
  hace siglos:
  
  REY Y REINA.- Alguien te rescatará.
  
  FIONA, aún con voz en off.
  
  FIONA.- Egresada Adultos 4: Celina Merendino, osea yo.
  
  
  
  Escena 2: Fiona en la torre
  Muy Muy Lejano. Torre donde vive FIONA. Pueden verse libros gordos por todas partes y un/a
  sillón/silla de época.
  
  Canción “El día es hoy” (3:55 min)
  
  FIONA NIÑA
  Atención niñas, es la hora del cuento
  
  La princesa, en la torre
  Ella es justo como yo
  Le hace falta, un buen corte
  Me pregunto qué pasó
  
  
  Cantando pasa el tiempo
  ¡Exacto! como yo
  Y al pasar los años..
  Los años? oh oh
  
  Su vida era un infierno
  No recuerdo esta parte
  ¿¿Soñaba con morir??
  Y después, y después..
  Un día Rapunzel encuentra a un ricachón
  El príncipe fue ágil, y la pared subió
  
  FIONA ADOLESCENTE
  Y yo sé, que el vendrá
  Cabalgando con el viento
  Yo creo que los sueños se hacen realidad
  Y me iré junto a él
  Como pasa en cada cuento
  Y juro que hoy voy a salir
  Día número... Novecientos cincuenta y seis
  Hoy voy a salir
  El ya va a venirrrrr.....
  
  FIONA GRANDE
  .....irrrr
  La princesa, la que quieras
  Ahora vive muy feliz
  Y yo sigo esperando
  A que él hoy venga aquí
  Siempre es la misma historia
  Ya estoy harta de esperar
  Si esta parte no existiera más…
  ¡Uy! Se rompió…
  
  Saco todo lo que aburre,
  Esta parte me cansó
  Sólo hojas sin sentido
  Que me suben la presión
  Fuera el gordo, fuera el feo
  Lo malvado y lo siniestro
  Y ella espera, y espera, y espera, y espera
  Lo esperaaaaa!!!
  
  Pero sé, que el vendrá
  Mi locura no contagia
  Y aunque sea bipolar, me aceptará
  Soy genial, soy lo más
  La mejor alternativa
  No voy a esperar, que venga ya
  Día número…
  
  ¿Estás ahí Dios?
  Soy yo, Fiona
  TODAS
  Soy yo, Fiona
  
  Y yo sé, que el vendrá
  Cabalgando con el viento
  Yo creo que los sueños se hacen realidad
  Y al final, me voy a casar
  Como pasa en cada cuento
  Yo juro que hoy voy a salir
  
  FIONA NIÑA
  Día número veintitrés!
  
  FIONA ADOLESCENTE
  Novecientos cincuenta y seis!
  
  FIONA GRANDE
  Día número
  Cuatro mil ochocientos
  Veintitrés
  
  FIONA NIÑA
  Yo voy a salir uuhh
  
  FIONA ADOLESCENTE
  Yo voy a salir uuhh
  
  FIONA GRANDE
  Yo voy a salir uuhh
  
  FIONA NIÑA
  Yo voy a salir uuhh
  
  FIONA ADOLESCENTE
  Yo voy a salir uuhh
  
  FIONA GRANDE
  Yo voy a salir uuhh
  
  TODAS
  Hoy voy a salirrrrrrr!!!
  
  
  
  
  Escena 3: Shrek conoce a Burro
  Bosque (árboles de Robin delante de media sombra). Aparece SHREK caminando con unos baldes
  para buscar barro de un charco. Aparece BURRO corriendo desde bambalinas.
  
  BURRO.- (Gritando) Wooooowoowooo (Frena en seco, mira a Shrek). Ayudá a un burro indefenso,
  ¿sí?
  
  GUARDIA 1.- ¡Por orden de Lord Farquaad, estoy autorizado para arrestarlos por ser criaturas
  extrañas!
  
  SHREK.- Ja ja, ¿Arrestarnos?
  
  Rugido de ogro (efecto de sonido). Los GUARDIAS huyen despavoridos.
  
  SHREK.- ¡Y no vuelvan!
  
  SHREK sigue su camino. BURRO lo sigue.
  
  BURRO.- ¿Puedo decir algo? ¡¡Eso fue increíble!! ¡Se tropezaban para alejarse de vos! Me gusta.
  
  SHREK.- ¿Por qué no celebrás la escapatoria con tus amigos?
  
  BURRO.- Pero no tengo amigos.
  
  SHREK.- (Irónicamente) ¡Quién lo hubiera creído!
  
  BURRO.- Decime, ¿estás perdido o qué?
  
  SHREK.- (Como quien no quiere la cosa) Estaré bien solo, gracias.
  
  BURRO.- ¡Pero nadie está bien solo! ¿No escuchaste lo que dijeron? ¡Van a encerrarnos!
  
  SHREK carga sus baldes con barro del suelo.
  
  BURRO.-¿Cómo te llamás?
  
  SHREK.- (Resoplando) Shrek.
  
  SHREK se va por bambalinas. BURRO lo sigue. Se abre el telón. Puede verse el pantano de SHREK,
  invadido de CRIATURAS DE CUENTOS DE HADAS: PINOCHO, HADA DE LOS DULCES, LOBO FEROZ,
  PATITO FEO, TRES CERDITOS, BRUJA MALVADA, FAMILIA OSO (PAPA OSO, MAMA OSA, OSITO),
  PETER PAN, CONEJO BLANCO, ENANO GRUÑÓN, DUENDE ZAPATERO, HADA MADRINA. BURRO
  sigue hablando hasta que lo corta SHREK en la escena siguiente.
  
  BURRO.- ¿Sabés lo que me gusta de vos, Shrek? Que sos de esos tipos a los que le importa un comino
  lo que piensen de él. Me gusta. ¡Shrek y Burro, dos amigos inseparables!
  
  
  
  
  Escena 4: ¡El pantano está invadido por criaturas de cuentos de hadas!
  SHREK y BURRO aparecen de la bambalinapor donde se fueron. Hay mucho alboroto, cada
  personaje se está instalando en su pedazo de pantano. SHREK no entiende lo qué sucede.
  
  SHREK.- (Desconcertado y con ira) ¡¿Qué están haciendo en mi pantano?!
  PINOCHO.- (Alarido) Ahhhhhhhh! Dios santo!!! Fuimos forzados a venir.
  
  SHREK.- ¿Forzados por quién?
  
  CERDITO.- ¡Lord Farquaad! Sopló y sopló y firmó una orden de desalojo.
  
  HADA DE LOS DULCES.- Ey, vos podrías hablarle.
  
  ELFO ZAPATERO.- ¡Sí, él te escucharía! Sos grande y temible.
  
  SHREK.- También soy un ogro, así que me voy a quedar acá en mi pantano y voy a evitar las
  multitudes. ¿No leyeron los cuentos?
  
  LOBO FEROZ.- ¿Te refieres a los cuentos que dicen que yo soy un lobo grande y malo?
  
  Todas las CRIATURAS DE CUENTOS DE HADAS ríen.
  
  BRUJA MALVADA.- ¿Y los que dicen que yo soy una bruja malvada?
  
  Siguen riendo.
  
  PINOCHO.- ¿O los que dicen que yo soy un "chico de madera"?
  
  Busca complicidad, pero ya nadie ríe.
  
  BRUJA MALVADA.- Mirá, ogro, te lo voy a dejar en claro. Sos el único que puede enfrentar al
  estafador de Farquaad.
  
  SHREK.- ¡Ni siquiera me conocen!
  
  Canción “Te decimos chau” (1:12 min)
  
  ELFO ZAPATERO
  Siempre soñé con un final de cuentos
  
  HADA MADRINA
  Apareció
  En mi predicción
  
  PINOCHO
  ¿Me vas a ayudar a ser “feliz por siempre”?
  
  TODOS
  Tal vez seas nuestra salvación
  
  SHREK.- No, no.
  
  TODOS
  Nuestra salvación
  
  LOBO FEROZ
  Salvación
  TODOS
  Nuestra salvación
  
  LOBO FEROZ
  Un gran corazón
  
  TODOS
  Nuestra salvación
  
  LOBO FEROZ
  Nossa salvação
  
  TODOS
  Nuestra…
  
  SHREK.- ¡Bueno, bueno, entendí! ¡Atención a todas las criaturas de cuentos de hadas! Su bienvenida
  ha terminado oficialmente! Iré a ver a ese Farquaad ahora mismo, los sacaré de mi tierra y los enviaré
  de regreso a su lugar.
  
  TODOS
  ¡Wooow!
  Hay que empacar
  Pronto te irás
  Apúrate ya
  No hay que descansar
  Suerte vos tendrás
  Te decimos chau
  
  SHREK.- Volveré pronto.
  
  TODOS
  Te decimos chau
  
  SHREK.- ¡No se pongan cómodos!
  
  TODOS
  Dios, voy a llorar
  
  SHREK.- Y no toquen mis...
  
  TODOS
  Te de-ci-mos chau
  
  
  ELFO ZAPATERO
  ¡No te mueras!
  
  SHREK y BURRO se van por platea? bambalina? hablando. Luces a público. Se baja telón de Duloc.
  Diálogo por platea entre AMBOS:
  
  SHREK.- Este podría ser el día más largo de mi vida.
  
  BURRO.- ¡Tengo el remedio perfecto para eso! Es un juego. Se llama “Puñetazo”. Las reglas son muy
  simples: el que vea una carreta y un caballo por el camino… (viendo una carreta) “Puñetazo”!! Jajaja
  
  
  Escena 5: Viaje a Duloc en busca de Lord Farquaad
  Duloc (Telón de castillo o similar – media sombra con estandartes). Aparecen los HABITANTES DE
  DULOC, que se forman en fila para cantar y bailar. LORD FARQUAAD aparece al final de la canción
  para colocarse en el centro y todos lo rodean formando una pose final.
  
  Canción “Duloc el lugar feliz” (0:33 min)
  
  DULOQUIENSES
  Es el pueblo ideal
  Donde hay perfección 
  Bienvenido acá
  Nuestras reglas son 
  Que el control siempre esté,
  Todos llévense bien 
  Duloc, el lugar feliz
  
  Todo es muy seguro
  Si no muestras tu… cara
  Duloc es,
  Duloc es 
  Donde vives muy feliiiiiiiiz.
  
  LORD FARQUAAD.- (Entre aplausos y ovaciones exageradas) ¡Bravo! ¡Bravo! Todo es como lo
  imaginé… ¡¡PERFECTO!! Como yo, claro… Y ahora, buena gente de Duloc, el momento que todos
  estaban esperando. El sorteo para ver quién tendrá el honor de ponerse en camino para rescatar a la
  adorable princesa Fiona de su feroz guardián… ¡el dragón! Vamos, vamos, traigan los papeles.
  
  SHREK y BURRO llegan al escenario desde platea? la otra bambalina?.BURRO tiene un pin con la
  inscripción “Yo AMO Duloc”.
  
  SHREK.- Disculpe…
  
  Todos los HABITANTES DE DULOC huyen despavoridos gritando. Alarido de Lord Farquaad.
  
  SHREK.- ¿Usted es Lord Farquaad?
  
  LORD FARQUAAD.- (despreciándolo) Quizá… (A bambalinas) ¿Quién lo dejó entrar?
  
  SHREK.- (Caminando hacia él con enojo) Escuche, no me voy a ir hasta que no me devuelva mi
  pantano, donde tiró a todas esas criaturas de cuentos de hadas.
  
  LORD FARQUAAD.- (Asustado y retrocediendo) Un momento, eh… (¡lo invade una nueva idea!) ¡Un
  momento! ¡Vos! ¡Sos grande, corpulento y prescindible! ¡Ciudadanos de Duloc, tenemos un ganador!
  
  Entran los HABITANTES DE DULOC sorprendidos y emocionados, rodeándolos (¡¡muy
  estereotipados!!). BURRO está conmovido como si hubiese ganado algún premio.
  
  SHREK.- ¿Qué?
  
  LORD FARQUAAD.- Felicitaciones, Ogro. ¡Ganaste el honor de embarcarte en una misión noble! (Los
  HABITANTES DE DULOC comienzan a aplaudir fanáticamente. LORD FARQUAAD hace señas para que
  terminen de aplaudir) Es sólo un paquete que tengo que recoger. Si lo hacés, te entregaré la escritura
  de tu Pantano. Señorita Duloc, explíqueles y enséñeles la salida.
  
  UN HABITANTE DE DULOC los acompaña y los retira por bambalinas. TODOS aplauden y se
  empiezan a retirar por bambalinas.
  
  LORD FARQUAAD.- Thelonius, prepara la bañera. Tomaré un largo baño para esperar a mi amada.
  ¡Ah, y no te olvides de mi piña colada!!
  
  
  
  Escena 6: Rescate a Fiona
  Se levanta el telón de Duloc. Torre de Fiona. Como cada día, ella canta su canción esperanzadora,
  “el día es hoy”, pero esta vez con una pandereta.
  
  FIONA.- El día es hoy, uh uhuhuh. El día es hoy, uh uhuhuh.
  
  SHREK.- (En off) ¡Hola! ¿Hay alguien ahí arriba?
  
  FIONA se detiene y mira alrededor incrédula. ¿Es verdad lo que está escuchando? ¿Después de
  tantos años? Corre a mirar por la ventana.
  
  SHREK.- (Gritándolo) ¿No deberías soltar tu cabello para que pueda subir, o algo así?
  
  A medida que la voz se acerca, FIONA se prepara para el encuentro: esconde un corpiño que
  colgaba del balcón, toma un ramo de flores, arregla su vestido y se recuesta en la típica pose de
  princesa que espera dormida el beso de su príncipe azul. SHREK finalmente logra llegar hasta el
  cuarto.
  
  SHREK.- (Cansado) ¡Fiu! (viendo a FIONA dormida en su cama) Genial, me tocó una de las dormilonas.
  
  SHREK se acerca a la cama. FIONA frunce los labios para recibir el beso. ÉL se inclina sobre ella ... Y
  la despierta agarrándola desde los hombro y sacudiéndola.
  
  FIONA.- (Siendo sacudida) Ah, ah, ah
  
  SHREK.- ¿Usted es la princesa Fiona?
  
  FIONA.- (Incorporándose) Lo soy. Esperando a un valiente caballero que venga a rescatarme.
  
  SHREK.- Ah, eso es genial. Bueno, ahora vámonos.
  
  FIONA.- Pero… ¡Espere, señor caballero! ¡Llevo mucho tiempo esperando este día! (insinuándose) Y
  me encantaría conocer el nombre de mi querido salvador.
  
  SHREK.- Shrek.
  FIONA.-¡Oh, Sir Shrek! (entregándole un pañuelo que sacó de su escote/manga).Le ruego que acepte
  este obsequio como muestra de mi gratitud.
  
  Al recibirlo, SHREK se seca la transpiración del cuello y las axilas, y se lo devuelve. FIONA está
  desconcertada.
  
  SHREK.- Gracias. Ok, ahora nos vamos (dirigiéndose a la ventana).
  
  FIONA.- Espere, noble caballero. ¿No quiere saborear este momento? Es nuestro primer encuentro.
  Tiene que ser una escena romántica y maravillosa.
  
  FIONA hace poses y movimientos de princesas de cuentos
  
  SHREK.- Dios, tengo imán con los locos.
  
  Canción “Así es como un sueño se hace realidad” (2:29 min)
  
  FIONA
  Esta escena ya la ví
  Justo…ahí, parado así
  Vos la mano me tomas
  De rodillas vas a estar
  vas a estar
  vas a estar
  
  SHREK
  Ey!
  
  FIONA
  Perdón
  
  Y aunque te veo recién
  Lo supe desde siempre
  Que sería así
  Lo que soñé
  
  FIONA se aproxima, a punto de darle un beso. SHREK escapa, escurridizo; saca a FIONA de la torre
  y comienzan la escapatoria del dragón. Mientras tanto, BURRO escapa de las garras del dragón.
  
  BURRO
  Shrek!!
  
  SHREK y FIONA corren con pasos cortitos y graciosos, como bajando largas escaleras.
  
  FIONA
  Caballero, espéreme
  Creo que ya me cansé
  Y aunque es original
  Lo está haciendo todo mal
  
  FIONA se detiene de golpe para seguir contando su fantasía. SHREK la deja atrás.
  Un corcel nos llevará
  Correrá sin descansar
  
  SHREK vuelve a buscarla. FIONA relata con detalle el “rescate perfecto”.
  
  El dragón quedó atrás
  Ya lo veo, muerto está
  
  SHREK se detiene de golpe, por lo que FIONA lo atropella. Repite, buscando confirmación del
  hecho…
  Muerto está
  
  Prediciendo que la respuesta claramente es “NO”
  Muerto está?!
  
  SHREK
  Está en mi lista de cosas por hacer
  
  FIONA
  ¡¿Que?!
  
  Aparece BURRO corriendo.
  
  SHREK
  Burro, por acá!
  
  BURRO
  Encontraste a la princesa
  
  FIONA
  ¡Él habla!
  
  SHREK
  Sí, lo difícil es hacerlo callar
  
  FIONA
  ¿Estás ahí, Dios? Soy yo, Fiona
  
  SHREK
  ¡Rezá menos y corré más!
  
  FIONA
  Tra la lalala
  
  SHREK
  Por ahí
  
  FIONA
  Tra la lalala 
  
  SHREK
  Ya casi llegamos
  FIONA
  Al final recuerda
  Todo es realidad-ah!!
  
  FIONA corre asustada luego de ver aparecer al dragón. SHREK y BURRO consiguen cerrar la puerta.
  BURRO cae desplomado al suelo, SHREK se apoya sobre sus rodillas, intentando respirar.
  
  FIONA
  Esto es como imaginé
  Mas o menos, lo diré
  No pude sospechar
  Mi vida va a empezar
  
  El día iba a llegar
  Mi corazón va a mil
  Mi sueño al final
  Lo sé, lo sé, lo sé
  Realidad será/ va a ser
  
  
  Escena 7: Shrek devela su identidad
  
  Bosque. Cambio de luces: Atardecer
  
  FIONA.- ¡Lo ha logrado! Admito que es poco ortodoxo, pero su proeza es enorme y su corazón, puro.
  Estoy eternamente en deuda. Bueno, Sir Shrek, la batalla ha terminado. Ya puede quitarse el yelmo.
  
  SHREK.- No.
  
  FIONA.- Pero ¿cómo me besará?
  
  SHREK.- ¿Qué? Eso no era parte del trato.
  
  BURRO.- Tal vez sea un extra.
  
  FIONA.- No, es el destino… "El valiente caballero rescata a la princesa, y se enamoran después del
  primer beso".
  
  Carcajadas entre SHREK y BURRO. FIONA está desconcertada.
  
  FIONA.-¿Qué es tan gracioso?
  
  SHREK.- Bueno, digamos que no soy tu tipo…
  
  FIONA.- Sí, lo es. ¡Ha sido mi salvador! Ahora quítese el yelmo.
  
  SHREK.- Mirá, creo que no es buena idea.
  
  FIONA.- ¡Quíteselo!
  
  SHREK.- ¡No!
  FIONA.- ¡Ahora!
  
  SHREK.- ¡De acuerdo! Tranquila. A sus órdenes, Su Alteza.
  
  SHREK se quita el yelmo, dejando ver su rostro. FIONA no entiende qué sucede.
  
  FIONA.- Sos un ogro.
  
  SHREK.- ¿Esperabas al príncipe azul?
  
  FIONA.- De hecho, sí. (Decepcionada) Oh, no, se suponía que debía rescatarme mi amor verdadero.
  No un ogro y su mascota.
  
  SHREK.- Princesa, fui enviado para rescatarte por Lord Farquaad, ¿está bien? Él es el que quiere
  casarse con vos.
  
  FIONA.- Entonces ¿por qué no vino él a rescatarme?
  
  SHREK.- Buena pregunta. Preguntáselo cuando lleguemos mañana.
  
  FIONA.- ¿Mañana? ¡Oh, Dios mío, es casi el atardecer! Hay que acampar.
  
  SHREK.- ¿Acampar? Pero ¡recién terminamos de escapar!
  
  FIONA.-Sí, y toda esta experiencia fue muy agotadora.
  
  SHREK continua caminando, haciendo caso omiso a los pedidos de FIONA.
  
  FIONA.- (Determinante, con un dejo de capricho) ¡Necesito encontrar un lugar para acampar ahora!
  
  SHREK.- (Volviendo, enojado) Ok, hay una cueva por allá.
  
  FIONA.- ¡Bien!
  
  BURRO.- Ese no es lugar para una princesa.
  
  FIONA.- No, es perfecto. ¡Les deseo buenas noches!
  
  BURRO.- ¿Querés que te lea un cuento para dormir?
  
  FIONA.- ¡Dije “buenas noches”!
  
  FIONA se retira por bambalinas.
  
  BURRO.- Parece simpática.
  
  SHREK y BURRO se retiran por la otra bambalina. Voz en off "De día una, de noche otra. Así serán
  tus días hasta que encuentres el amor verdadero en el primer beso, y luego adoptarás la forma del
  amor verdadero”.
  ESCENA 8: ¿Quién quisieras ser?
  SHREK Y BURRO vuelven a entrar por la misma bambalina con ramas para una fogata.
  
  BURRO.- (Ya viene hablando hace rato con Shrek) Y me di cuenta de esto, si nos escapamos de un
  dragón, amigo, podemos hacer lo que sea. ¡¡Hasta podría ser un corcel!! … ¿Y vos? ¿Quién serías?
  
  SHREK.- No quiero ser nadie.
  
  BURRO.- Si no hubiera opción y te dijeran "ya no podes ser un Ogro, elegí otra cosa", entonces ¿qué
  elegirías?
  
  SHREK.- Burro...
  
  BURRO.- Amigo, no eres nada divertido, ¿lo sabías? ¿Así va a ser una vez que entreguemos a Fiona?
  Quiero decir, ¿estaremos sentados toooodo el día aburriéndonos en nuestro pantano?
  
  SHREK.- ¿Nuestro Pantano? Burro, no hay ningún "nuestro". Sólo mi Pantano y yo.
  
  BURRO.- ¿Cuál es tu problema? ¿Qué tienes contra el mundo entero?
  
  SHREK.- Yo no soy el que tiene el problema, ¿de acuerdo? El mundo tiene el problema conmigo. La
  gente me ve y empieza: ¡Socorro! ¡Un enorme, estúpido y feo ogro...! Me juzgan antes de
  conocerme. Por eso prefiero estar solo.
  
  Silencio.
  
  BURRO.- ¿Sabés qué, Shrek? Cuando nos conocimos, no pensé que eras un enorme, estúpido y feo
  ogro.
  
  SHREK.- Sí, ya sé.
  
  BURRO.- (Mirando las estrellas) ¿No hay alguien que te gustaría ser?
  
  Canción “Quien quiero ser” (2:56 min)
  
  SHREK
  Quisiera ser un héroe
  Vestido de armadura
  Tener gran estatura
  Luchar por el honor
  
  O tal vez un vikingo
  Navegando por los mares
  Visitar algunos bares
  Tomando sin control
  
  Yo quiero ver
  El mundo sin
  Tener preocupaciones
  Quiero sentir
  El viento sobre mí y ver volar mis sueños
  Pero aprendí
  No es para mí
  
  QUISIERA SER POETA
  CONTAR MILES DE HISTORIAS
  QUE NARREN SOBRE GLORIAS
  AMORES Y VERDAD
  
  AL CIELO LLEGARÍAN
  VOLANDO EN UNA ESTRELLA
  LA LUNA LAS LEERÍA
  EN UNA NOCHE IDEAL
  
  Y AL DESPERTAR, PODER CANTAR AL MUNDO BUENOS VERSOS
  QUE CADA FRASE RIME CON AMOR
  Y NAVEGAR EN ELLOS
  PERO APRENDÍ, NO ES PARA MÍ
  
  
  
  Un ogro solo está
  No queda otra opción
  Viviendo lejos de los demás, y sin amor
  
  Quisiera ser un héroe
  Si fuera concedido
  Mi más simple deseo
  Sería tan feliz
  
  TREPAR UNA ALTA TORRE
  Y A LA MÁS HERMOSA
  LLEVAR MI AMADA ROSA
  SERÍA MI ILUSIÓN
  
  Hablar de amor, SIN ASUSTAR
  SERÍA TAN perfecto
  MIRAR SU ROSTRO CONVERSAR
  Y ASÍ ROBARLE UN BESO
  
  Y CAMINAR, CONTAR ESTRELLAS Y TOMAR SU MANO
  PORQUE NO ESTÁ ESE DESTINO EN MÍ
  el gran final perfecto
  El que hay en cada cuento
  Así debe ser
  Un mundo bello y brillante
  No es para mí
  
  FIONA
  Un ogro solo está
  No queda otra opción
  
  SHREK Y FIONA
  Viviendo lejos de los demás
  
  BURRO
  Y sin amor
  
  SHREK Y FIONA
  Sin amor
  
  SHREK                              FIONA                             BURRO
  
  Quisiera ser un héroe              Y yo sé, que el vendrá
  Vestido de armadura
  Tener gran estatura                Cabalgando con el viento
  Luchar por el honor                                                  Solo estás
                                     Yo creo que los sueños            Un amigo
  Quisiera ser un héroe                                                Necesitarás
  Si fuera concedido                 Se hacen realidad
  Mi más simple deseo                                                  Aquí estoy
  Sería tan feliz
  
  Todos
  Con un final de cuentos
  Tal como debe ser
  
  Apagón
  
  Escena 9: Fiona ama vivir de día
  Bosque. Cambio de luces: Amanecer. FIONA recorre el bosque cantando y bailando, al mejor estilo
  de María en “La novicia rebelde”. Ese es su momento del día, así es feliz.
  
  Canción “Amo vivir de día” (5:08 min) ---> FALTA ACORTAR COREO TAP
  
  FIONA:
  Hoy desperté
  Y presentí
  Un día sensacional
  El sol salió, muy fuerte está
  ¿Qué importa?¡Es genial!
  
  Un día nuevo por vivir
  Hay tanto por hacer
  Ya van seis tazas de café
  Muy bien me… (gritado)¡desperté!
  
  Yo siempre amé vivir de día
  Y hoy estoy
  Muy bien
  
  PÁJARO AZUL
  Pi pipipi
  Pi pipipi
  
  FIONA:
  Muy bien
  
  PÁJARO AZUL (más agudo)
  Pi pipipi
  Pipipipi
  
  FIONA:
  Muy bien
  
  PÁJARO AZUL (mucho más agudo)
  Pi pipipi
  Pipipipi
  
  FIONA:
  Muy bieeee – eeeeee- eeennnn!(el pájaro explota)
  
  Buen día, sol
  Buen día, flor
  Hoy me voy a casar
  Mi esposo aún no conocí
  Pero hermosa voy a estar
  
  Un gran salón para bailar
  En nuestra fiesta habrá (baila con un ciervo, que la mira asustado)
  Bailamos hasta amanecer
  Y un beso me dará
  
  Yo siempre amé vivir de día
  Y hoy estoy (tira al ciervo por el acantilado)
  Muy bien
  
  (Un par de ratas corretean junto a ella)
  
  FIONA:
  ¿Por qué… Oh, buen día, señor flautista.
  
  FLAUTISTA DE BREHEMEN:
  Bah, que tiene de bueno??
  No puedo hacer que esas ratas me sigan!
  
  
  FIONA:
  Creo que necesita cambiar su tono, señor…(toma su flauta)
  
  FLAUTISTA DE BREHEMEN:
  Eyy, devuélveme mi flauta!!
  
  
  FIONA toca la flauta como experta. El flautista mira con incredulidad como, de pronto, Fiona es
  seguida por una línea de ratas (Baja el telón principal sin llegar a tocar el piso, escena en
  proscenio. Pies-ratas bailan detrás del telón, siguiendo los pasos de FIONA. Baja el telón
  completamente y vuelve a subir del todo, dejando ver a los bailarines completos). Hombres ratas
  bailan tap con FIONA al mejor estilo Broadway.
  
  FIONA:
  Un día nuevo hoy comienza
  Muy bien me desperté
  Anoche era un monstruo, pero
  Ahora
  Ahora
  Ahora, ya estoy bieeeee- eeee- ee- eeen
  Ahora, ya estoy bien.
  
  Mientras las ratas se van yendo, se arma un bosque con árboles. FIONA se encuentra en la mitad
  del escenario. Mientras tanto, SHREK y BURRO la miran asombrados desde un costado, habiendo
  visto el baile con las ratas minutos atrás al ingresar por bambalinas.
  
  FIONA.- (Viéndolos finalmente, y sin esperarlo) Oh, buen día, caballeros.
  
  BURRO.- (Sin poder creerlo aún) Buen día.
  
  SHREK.- Princesa, ¿por casualidad comiste alguno de esos pequeños hongos de la orilla del arroyo?
  
  FIONA.- (Riendo) Por supuesto que no. Sólo me pone contenta que sea un nuevo día, lleno de
  promesas y nuevos comienzos. Y lo primero que quisiera hacer es disculparme por mi
  comportamiento ayer. (A SHREK) Obviamente, empezamos con el pie equivocado y quisiera
  compensarte.
  
  SHREK.- ¿Enserio?
  
  FIONA.- Sí. Después de todo, me rescataste. ¡Así que recolecté un canasto de bayas para el viaje y les
  hice un collar de margaritas!
  
  BURRO.- ¡Son hermosos, princesa! ¿No son hermosos, Shrek?
  
  Sonidos inentendibles con cara de asco de SHREK.
  
  FIONA.- Ya podemos seguir viaje… Cuéntenme de mi futuro prometido, Lord Farquaad. ¿Cómo es él?
  
  SHREK.- (cómplice con BURRO) Pongámoslo de este modo, princesa, hombres de la altura de
  Farquaad hay en pequeña cantidad.
  
  FIONA.- (impresionada) ¿En serio?
  
  BURRO.- Ja!! (Siguiendo la broma) Sí, pero él es un poco intimidante.
  
  FIONA.- (Convencida) ¡Seguro así es!
  
  SHREK.- Así y todo mantiene el perfil bajo.
  
  BURRO cae al piso de la risa. SHREK se suma a las risas.
  
  FIONA.- (Sin comprender) ¿Qué sucede?
  SHREK.- Nada, que tal vez te convenga bajar un poco las expectativas.
  
  Carcajadas incontenibles.
  
  BURRO.- Como 90 cm.
  
  Continúan las risas.
  
  FIONA.- Bueno, bueno, bromeen. No me importa. Hoy no. Después de una vida miserable, las cosas
  por fin están mejorando (sigue caminando).
  
  SHREK eructa. BURRO y FIONA lo miran sorprendidos.
  
  BURRO.- Shrek!!!
  
  SHREK.- ¿Qué? Es un cumplido!! (Intentando buscar complicidad con Fiona) Mejor afuera que
  adentro, siempre lo he dicho JA JA JA
  
  BURRO.- (Retándolo como un padre a su hijo) No es la forma de comportarse con una princesa…
  
  FIONA eructa. BURRO y SHREK la miran sorprendidos.
  
  FIONA.- Creo que esas bayas estaban algo pasadas.
  
  BURRO.- ¡Qué femenina!
  
  SHREK.- Jajajaja, no es exactamente lo que esperaba de una princesa.
  
  FIONA.- Bueno, no deberías juzgar a la gente antes de conocerla.
  
  FIONA se va de escena. Antes de irse, mira cómplice a SHREK, quien se queda embobado con la
  princesa. BURRO comprende lo que sucede: ¡¡SHREK se ha enamorado!!
  
  BURRO.- Baila con ratas, eructa.. ¡Es igual de sucia que vos!
  
  SHREK.- Seeee
  
  AMBOS se retiran por bambalinas. BURRO hace gestos de oler cosas asquerosas.
  
  
  
  Escena 10: ¿Quién podría amar a una bestia tan fea y repugnante?
  A la derecha del escenario, puede verse una cabaña. A la izquierda, una gran piedra. Cambio de
  luces: Atardecer. SHREK y FIONA entran juntos, riendo mientras hacen que tocan instrumentos, se
  empujan, etc. BURRO va detrás.
  
  BURRO.- (Para romper el hielo) ¿No es romántico? La naturaleza, con las luciérnagas y ese bellísimo
  atardecer gigante…
  
  FIONA.- ¿Atardecer? ¡Dios mío! ¡Atardecer! Es muy tarde.
  BURRO.- Esperá un minuto. ¿Le tenés miedo a la oscuridad, no?
  
  FIONA.- Sí, es eso. Me aterra… Perdón, me tengo que ir...Buenas noches.
  
  SHREK.-Buenas noches.
  
  FIONA entra en la cabaña, SHREK suspira resignado, y camina a buscar algo. BURRO se interpone.
  
  BURRO.- No, Señor. No recorrí todo este camino, soportando tu olor corporal, ¡sólo para que la dejes
  ir así!
  
  SHREK.- Estás loco. Sólo la estoy llevando con Farquaad.
  
  BURRO.- Entonces no sientes nada por ella en absoluto.
  
  SHREK.- Mirá, aunque así fuera, ella es una princesa, y yo soy...
  
  BURRO.- ¿Un ogro? (Silencio de resignación y dirigiéndose a la cabaña) Ella tiene que saber.
  
  SHREK.- ¿Adónde vas?
  
  BURRO.- Voy a buscar leña, antes que tu fuego se apague.
  
  BURRO se acerca hasta la cabaña donde FIONA está resguardada. Aparece FIONA convertida en
  ogro. SHREK hace escena en la piedra.
  
  BURRO.- (Asustado) Ahhhh!!!
  
  FIONA.-No no no, Burro, está bien. Soy yo, Fiona. En este cuerpo.
  
  BURRO.- ¿Princesa? ¿Qué te pasó?
  
  FIONA.- Es una maldición que tengo desde pequeña. Cada noche, cuando baja el sol, me transformo
  en esto... ¡Esta bestia horrible! Si Lord Farquaad se entera de esto, ¡jamás se va a casar conmigo!
  
  BURRO.- Bueno, tranquilízate, no sos tan fea… Bueno, no te voy a mentir, sí lo sos, pero sos un ogro,
  y… Shrek... Bueno, tienen mucho en común.
  
  FIONA.- ¿Shrek?
  
  BURRO.- Sí, si el supiera…
  
  FIONA.- ¡No! Él no debe saberlo. Prometeme que no vas a decirle nada. ¡Por favor!
  
  BURRO.- Está bien, está bien. Lo prometo. Pero deberías decirle.
  
  Del lado izquierdo del escenario, puede verse a SHREK en la fogata. Durante el diálogo entre
  BURRO Y FIONA, se lo ve nervioso. Arranca una flor y camina de un lado a otro buscando las
  palabras para declararle su amor a la princesa.
  
  SHREK.- Princesa, yo… ¿Cómo estás, antes que nada? Yo… Vi esta flor y pensé en vos, porque es
  linda… Y bueno, en realidad a mí no me gustan, pero creí que te gustaría porque vos sos linda. Pero
  
  igualmente me gustás… Ufff, tengo problemas.. Muy bien, allá voy… Ella sabrá lo que quiero decir…
  Sí, ella entenderá.
  
  Convencido, se dirige a declararle su amor a FIONA. Escucha algo que no debía escuchar.
  
  FIONA.- (A BURRO) No puedo pensar en Shrek, no ahora. Después de todo soy una princesa, y ¡mirá!
  ¿Quién podría amar a una bestia tan fea y repugnante? Princesa y fealdad no van juntas. Por eso no
  puedo quedarme acá. Mi única posibilidad de vivir feliz para siempre es casarme con mi amor
  verdadero.
  
  SHREK se aleja decepcionado y humillado, tirando la flor que tenía en su mano. Se va por
  bambalina. Apagón.
  
  
  
  Escena 11: Llegada a Duloc
  Cambio de luces: Amanecer. FIONA sale de la cabaña. Otra mañana que es ella misma
  nuevamente, pero esta vez no se siente feliz. Mira alrededor, ni SHREK ni BURRO están presentes.
  SHREK entra decidido y en actitud no muy amigable. ¡Es la oportunidad perfecta!
  
  FIONA.- (Decidida a contarle la verdad) ¡Shrek, gracias a Dios!
  
  SHREK.- Justo a tiempo. Te traje una sorpresita.
  
  FIONA.- Tengo que decirte algo...
  
  SHREK.- No tenés que decirme nada, ya escuché suficiente anoche. Sobre todo "¿quién podría amar a
  una bestia tan fea y repugnante?"
  
  Se oye una voz a lo lejos. FARQUAAD en off al canto de algunos “Fiona, Fiona. LORD FARQUAAD
  entra a escena.
  
  LORD FARQUAAD.- (Al verla) ¡Princesa Fiona! Perdóname, Princesa, por este encuentro tan repentino
  y sorpresivo. Soy Lord Farquaad.
  
  FIONA aún esta intercambiando cruzadas con SHREK. Decepcionada por su incomprensión y a la
  vez, algo enojada.
  
  FIONA.- (Mirando a Shrek) Lord Farquaad, perdóneme usted, justo estaba por darle una pequeña…
  (Mirando a Lord Farquaad y notando su verdadera estatura) despedida.
  
  LORD FARQUAAD.-Qué dulce, pero no tienes que desperdiciar buenos modales en un ogro. No tiene
  sentimientos. (Tomando la mano de FIONA)Princesa Fiona, hermosa, bella, perfecta Fiona.
  
  Intenta arrodillarse con un esfuerzo sobrehumano. No lo logra.
  
  LORD FARQUAAD.- (hablando rápido para salir de esa posición incómoda) Pido tu mano en
  matrimonio. ¿Serás la novia perfecta para el novio perfecto?
  
  FIONA.- Acepto, nada me haría...
  
  LORD FARQUAAD.- (Incorporándose) ¡Genial! ¡Manos a la obra, mañana nos casamos!
  FIONA.- (¡Imposible esperar una noche más!) ¡No! Quiero decir, ¿por qué esperar? Casémonos hoy
  mismo, antes del atardecer.
  
  LORD FARQUAAD.- Je, je, je ¿Ansiosa, eh? Tenés razón. Cuanto antes, mejor. ¡Capitán, adelántese!
  ¡Hay tanto por hacer!
  
  BURRO entra desperezándose. Se cruza con FIONA que se aleja con los guardias y LORD
  FARQUAAD.
  
  BURRO.- (Sin entender lo que sucede) ¿Qué me perdí?
  
  FIONA.- (Con rencor) Adiós, ogro.
  
  SHREK atina a irse por la bambalina contraria. BURRO lo persigue.
  
  BURRO.- ¡Shrek! ¡La estás dejando ir! ¡Hay algo que no sabés! Hablé con ella anoche y...
  
  SHREK.- Sí, ya sé que hablaste con ella anoche. Ustedes son grandes amigos, ¿no? ¿Por qué no la
  seguís hasta su casa?
  
  BURRO.- Pero, Shrek, quiero ir a casa con vos. Los dos juntos en nuestro pantano, ¿te acordás?
  
  SHREK.- ¡Ya te dije, vivo solo! ¡El pantano y yo! Nadie más, ¿entendido? ¡Nadie!
  
  SHREK se va por bambalina. BURRO lo sigue.
  
  BURRO.- Pero pensé... Shrek, no es lo que creés, ¡dejame explicarte!
  
  Apagón.
  
  
  Escena 11: ¡Bandera freak!
  Pantano. SHREK entra enojado desde bambalina. Lo sigue BURRO, intentando explicarle el
  malentendido con FIONA.
  
  SHREK.-¡Este es lugar es MÍO!
  
  TODOS escuchan asombrados.
  
  SHREK.- ¿Escucharon? Ya tengo mi escritura. Ahora, ¡fuera todos de mi pantano!
  
  BURRO.- (Acumulando) Ahí va de nuevo, (burla) "mío, mío, mío. Yo, yo, yo".
  
  PATITO FEO.- Justo cuando pensás que la vida no puede ser peor, ¡te desalojan de un pantano!
  
  OSITO.- Señor ogro, creí que iba a ayudarnos.
  
  PETER PAN.- ¡Tal vez lo haga! Sólo si cerramos los ojos y repetimos todos juntos “Yo sí creo en…”
  
  PINOCHO.- Qué idiota, ¿Cuándo crecerás?
  SHREK.- ¡Dije que largo! Tomen sus cosas y.. ¡fuera de mi vida!
  
  BURRO.- (Vaso que rebalsó) Bueno, ¿sabés qué? Ahora es MI turno, así que callate y prestá atención.
  Me insultás y no aprecias nada de lo que hago. Sos cruel conmigo, y con todos. ¡Y todo porque le
  tenés miedo a tus propios sentimientos!
  
  SHREK.- Si te trato tan mal, ¿por qué no te vas?
  
  BURRO.- ¡Otra vez! ¡Lo mismo que le hiciste a Fiona! Y sólo porque le agradaste, ¡quizá hasta te
  amaba!
  
  SHREK.- ¿Amarme? ¡Dijo que era feo! ¡Una criatura horrenda! ¡Los escuché hablando!
  
  BURRO.- ¡No estaba hablando de vos! Estaba hablando de ell... (casi mete la pata) iiiaaaaad…. Otra
  persona.
  
  SHREK.- ¿No hablaba de mí? Entonces ¿de quién hablaba?
  
  BURRO.- No, Señor. Nunca querés escucharme, ¿no es así?
  
  SHREK.- ¡Burro! (Silencio, BURRO no cede) Ok, perdón ¿Sí?... (Suspiro) Perdón. Soy un ogro grande,
  tonto y feo. ¿Podrás perdonarme?
  
  BURRO.- Para eso son los amigos, ¿no?
  
  SHREK.- Sí. (Abrazo BURRO y SHREK) Entonces ¿qué dijo Fiona de mí?
  
  BURRO.- ¿Por qué me lo preguntas? Pregúntaselo a ella.
  
  SHREK.- ¡Burro! ¡La boda!
  
  SHREK y BURRO se van por platea. Las CRIATURAS DE CUENTOS DE HADAS no entienden qué
  sucede.
  
  OSITO.- ¿Adónde vamos ahora?
  
  PAPÁ OSO.- (Leyendo la escritura de Shrek) Sesenta y cinco km al norte dice aquí. Hay un basurero
  con nuestros nombres.
  
  GALLETITA DE JENGIBRE.- ¿Basurero? ¿Es un chiste? ¿Cuánto más vamos a caer, gente? ¡Es hora de
  hacer lo que debimos hacer hace mucho tiempo! ¡Tenemos que hacerle frente a Farquaad nosotros
  mismos!
  
  PAPÁ OSO.- ¡La galletita tiene razón! ¡Hay que levantar nuestros traseros peludos y hacer algo!
  
  PINOCHO.- ¡Esperen un minuto! Quizá algo mejor va a venir y sólo hay que esperar a que llegue.
  Porque eso hacemos las criaturas de cuentos de hadas… Esperamos milagros, les pedimos deseos a
  las estrellas. Sólo hay que pasar desapercibidos hasta que todo quede en el olvido. Mi grillo siempre
  decía que…
  
  HADA DE LOS DULCES.- Olvidate de ese grillo… Si hubiera sido inteligente, ¡hubiese visto el
  parabrisas!
  “Oh” general. Risas, murmullo, gritos, discusiones. PINOCHO se hizo a un lado ofendido y
  avergonzado.
  
  PINOCHO.- (Gritando para cortar la discusión) ¡Nada de esto hubiera pasado si fuera de carne y
  hueso!
  
  Silencio sepulcral. HADA DE LOS DULCES y GALLETITA DE JENGIBRE se acercan lentamente a
  PINOCHO.
  
  GALLETITA.- (De repente y causando sobresalto) ¡Escucha muñeco!
  
  
  
  Canción “Déjate llevar” – (2:09 min)
  
  GENGY
  Pasamos nuestra vida
  Deseando ser normal
  Grita “Soy diferente
  Y así soy yo”
  “Aquí estoy
  Así soy yo”
  
  TODOS
  Deja de soñar
  Déjate llevar
  Tienes que aceptar
  Que no está tan mal
  Tu anormalidad
  
  Pinocho.- ¡Si, todo tiene sentido ahora! No tiene nada de malo ser anormal. Sólo estamos locos,
  tenemos garras y poderes mágicos. Y juntos, podremos enfrentar a Farquaad!
  
  PINOCHO
  Nada nos detendrá
  Vamos a luchar
  
  MAMÁ OSA
  Con la magia
  Y la fuerza
  Quien podrá
  Vencernos
  
  Las cosas anormales
  Son las que nos dan valor
  
  Ser especiales
  
  PINOCHO
  Ser especiales
  
  TODOS
  Ser especiales
  Es un don
  
  Deja de soñar
  Déjate llevar
  No hay que echarse atrás
  Sólo hay que luchar
  No mires atrás
  Sí
  
  Déjate llevar
  Y volar
  Sí, sí, sí
  
  PINOCHO
  Soy de madera ¿y qué? Hagámoslo.
  
  TODOS
  ¡Sí!
  
  
  Escena 12: Final
  Telón de Duloc. Puede verse un altar, un obispo con la Biblia y a los HABITANTES DE DULOC
  presenciando la boda. LORD FARQUAAD y FIONA están en escena, ella está vestida de novia con un
  velo. LORD FARQUAAD está colocándole el anillo. Aparecen SHREK y BURRO por platea.
  
  SHREK.- ¡Detengan la boda!
  
  FARQUAAD.- Uff, ¿qué es lo que quiere? Ya es bastante estar vivo cuando nadie te quiere, pero
  ¿aparecer en una boda sin ser invitado?
  
  SHREK.- Debo hablar con Fiona. Sólo te casás con ella para poder ser el rey.
  
  FARQUAAD.- ¿Qué estás diciendo? ¡Eso es atroz, inconcebible! ¡¡Guardias, deténganlo!!
  
  Entran los GUARDIAS para llevarse a SHREK y a BURRO. Los HABITANTES DE DULOC miran
  sorprendidos. FIONA se hace a un lado y comienza a dirigirse hacia el fondo. De pronto, aparecen
  por platea las CRIATURAS DE CUENTOS DE HADAS con carteles de protesta. Gritos varios: “¡Ya
  no!”, “¡Esto se termina hoy!”, “¡Acepten a los raros!”, “ ¡Que nos devuelvan nuestros hogares!”,
  “¡Pagará por lo que hizo!”, “¡Es un discriminador!”
  
  FARQUAAD.- (Gritando por encima del barullo)¡¡Fenómenos!! ¿Cómo se atreven a interrumpir mi
  boda?
  
  PINOCHO.- ¿Fenómenos, eh? Los de una misma clase se reconocen.
  
  FARQUAAD.- ¿Qué?
  
  De atrás del grupo, aparece el ENANO GRUÑÓN.
  
  ENANO GRUÑÓN- ¡Hi-ho!
  FARQUAAD- ¡Papá! Oh, papá.
  
  ENANO GRUÑÓN.- Supongo que mi invitación... ¿se perdió en el correo?
  
  PINOCHO.- Gente de Duloc, ¡su líder es de bajo presupuesto! Es un fenómeno, como nosotros.
  
  Gritos agresivos varios de los HABITANTES DE DULOC.
  
  FARQUAAD.- ¡No! No, no, no. No lo escuchen.
  
  Luces más bajas. De a poco comienza a oscurecer. FIONA llega a las tarimas más altas y
  desaparece para aparecer convertida en ogro. Luces verdes, humo y otros efectos especiales.
  
  FIONA.- ¡Paren la boda!
  
  TODOS se giran a ver. Nadie entiende qué sucede. Silencio sepulcral y expresiones de asombro.
  
  SHREK.- ¿Fiona?
  
  FIONA.- Quise decírtelo antes.
  
  FARQUAAD.- (horrorizado) ¡Diuu! ¡Qué espanto! ¡Guardias, guardias! (Los guardias no responden,
  están decepcionados por todo el maneje de Farquaad) Grrrr, este lío no cambia nada. Ya estamos
  casados, ¡ya soy el Rey! Todos serán encerrados por ser criaturas extrañas…
  
  LORD FARQUAAD continua hablando cuando aparece el DRAGÓN, lo rodea y se van por tarimas al
  grito de Farquaad. Todos festejan, cada uno volverá a tener su vida, volverá a ser como antes.
  
  SHREK.- (Sin querer esperar más) Fiona, te amo.
  
  FIONA.- También yo.
  
  SHREK y FIONA se besan. Las CRIATURAS DE CUENTOS DE HADAS entonan un “Awww” al unísono,
  enternecidos. Juego de luces, un resplandor mágico. VOZ EN OFF FIONA.- "De día una, de noche
  otra. Así serán tus días hasta que encuentres el amor verdadero en el primer beso. Y luego
  adoptarás la forma del amor verdadero" .FIONA gira lentamente. Aún sigue siendo Ogro. Se mira a
  sí misma, extrañada.
  
  SHREK.- ¿Estás bien?
  
  FIONA.- Bueno, sí... Pero, no entiendo. Se suponía que debía ser hermosa.
  
  SHREK.- Pero… sos hermosa.
  
  Canción “Esta es mi historia” (2:16 min)
  
  FIONA
  Yo siempre esperé
  El final feliz
  De los cuentos que leía
  
  SHREK Y FIONA
  Hoy, ya lo entendí
  Solo soy así
  Esa ya no es mi historia
  
  SHREK, FIONA Y BURRO
  Somos ogros, somos burros
  Olorosos, muy peludos
  Y tenemos nuevos cuentos que contar
  
  Los haremos, los diremos
  Oleremos, ya veremos
  Es nuestra historia
  
  SHREK.- Y así es como el pequeño ogro se fue a vivir al pantano con una bella princesa.
  
  BURRO.- Y con su mejor amigo.
  
  SHREK.- Y con su mejor amigo.
  
  GALLETA DE JENGIBRE.- ¡Y con el Hombre de Jengibre!
  
  PINOCHO.- ¡Y con una sexy marioneta!
  
  ELFO ZAPATERO.- ¡Y con un elfo!
  
  HADA MADRINA.- ¡Y con un Hada Madrina!
  
  BRUJA MALVADA- ¡Y con una bruja!
  
  LOBO FEROZ- ¡Y con un lobo travestido!
  
  CERDITOS- ¡Y con los tres cerditos!
  
  MAMÁ OSO
  Ser diferente,
  
  PINOCHO
  Ser diferente,
  
  TODOS
  Ser diferente
  Uhh
  
  MAMÁ OSO
  Ser diferente
  
  PINOCHO
  Ser diferente
  
  TODOS
  Ser diferente
  Es un don
  
  Somos hadas, somos chanchos
  Somos muchos y seremos muchos más
  
  Diferentes, conectados,
  Somos más en plena unión
  
  Es nuestra historia
  Es nuestra historia
  
  Las CRIATURAS quedan en proscenio en dos filas. SHREK y FIONA, atrás en tarima, se besan.
  
  Es nuestra historia
  
  GALLETA DE JENGIBRE
  Que Dios los bendiga a todos
  
  TODOS
  El fin!!!!
  
  TODOS celebran. Baja el telón. Se prepara el saludo final al compás de "I'm a believer”.`)
  .then((e) => console.log(`Código finalizado, ${e} mensajes enviados`))
  .catch(console.error);

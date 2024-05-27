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

enviarScript(`TOY STORY 1
ANDY       (Patata) ¡Muy bien, atención! ¡Esto es un atraco! ¡Qué nadie se
           mueva! ¡Rápido! Vacía esa caja fuerte. Jaja, dinero, dinero.
           (Bo Peep) ¡Basta, basta, malvada patata!
           (Patata) ¡Silencio Bo Peep! O liquidaré a tus ovejas.
           (Ovejas) ¡Socoooorro, Ayúdennos!
           (Bo) ¡Oh no! Mis ovejas no, qué alguien haga algo.
           (Woody) ¡Las manos bien altas, hacia el cielo!
           (Patata) ¡Oh no, el Sheriff Woody!
           (Woody) He venido a detenerte, Burt el tuerto (toing)

ANDY       (Patata) ¡Oh! ¿Cómo sabías que era yo?
           (Woody) ¿Vas a entregarte por las buenas?
           (Patata) Tú no puedes hacerme nada, Sheriff, traigo a mi perro
           guardián con un campo de fuerza incorporado.
           (Woody) Pues yo traigo a mi dinosaurio y se comerá a tu perro.
           (GESTOS)
           (Woody) ¡Vas a ir a la cárcel, Burt! Despídete de tu patatita.
           (GESTOS)
           ¡Has vuelto a solucionarlo todo, Woody!
WOODY      ¡Eres mi ayudante favorito!

ANDY       ¡Rápido! Vamos a reunir al ganado. ¡Rodéalos vaquero! ¡Yiiija!
           ¡Hola vaquero! ¡Jiii! ¡Adelante Woody! (Gestos)
           ¡Oh, fantástico! ¡Canasta, fenomenal! ¡Qué guay!
MADRE      ¿Qué te parece?
ANDY       ¡Oh! Es precioso, mamá.
MADRE      Muy bien, cariño. Feliz cumpleaños.
ANDY       Lo vimos en la tienda. ¡Guau! Es precioso, vaya, ¡Qué pasada!

MADRE        Espero tener suficientes sillas. Una, dos, tres, cuatro… si, serán
             suficientes.
ANDY         ¿Lo dejaremos puesto hasta que nos traslademos?
MADRE        Claro, cariño.
ANDY         ¡Bien!
MADRE        Anda, ve a por Molly, tus amigos llegarán de un momento a otro.
ANDY         Bien, mamá. Es la hora de la fiesta, Woody… ¡Yiiija!
BEBÉ         (Gestos)
ANDY         Hola, jovencita.
WOODY        Alguien ha envenenado el abrevadero.
ANDY         ¡Arriba, Molly! Vaya, cada vez pesas más. Hasta luego, Woody.

WOODY        ¡Por mi cordel! ¿La fiesta de cumpleaños es hoy? Podéis salir,
             chicos, no hay moros en la costa.
SR. PATATA   Para niños de tres años pone en mi caja. A partir de tres años. No
             tengo que hacer de canguro de la princesa babas.
             ¡Eh Hamm! Mira, soy un Picasso
HAMM         Ehhh, no me importa…
SR. PATATA   ¡Eres un cerdo inculto! Y tú que miras, Bob, disco de hockey
WOODY        Ahm… ¡eh! Sargento, ¿Ha visto a Slinky?
SARJENTO     ¡Señor, no, señor!
WOODY        Está bien, hombre, gracias, descanse.

WOODY        ¿Slinky?
SLINKY       Estoy aquí, Woody. Esta vez llevo las rojas.
WOODY        No, Sch… Slink…
SLINKY       ¡Oh! Bueno, está bien. Juega tú con las rojas si quieres.
WOODY        No, ahora no, Slink. Tengo malas noticias.
SLINKY       ¿Malas noticias?
WOODY        Convoca a todos para una reunión, y mantente alegre.
SLINKY       De acuerdo.
WOODY        ¡Alegre!
SLINKY       ¡Ahhh! ¡Ja, ja!

WOODY       Amigos, tenemos una reunión. Serpiente, robot, id hacia el podio.
            ¡Eh Etch! ¡Desenfunda! ¡Oh! Me has vuelto a ganar… Etch, tú
            has estado practicando… Los botones más rápidos del oeste…
SLINKY      Vamos a celebrar reunión de personal, chicos, daos prisa.
WOODY       Vaya, ¿dónde está? ¡Ah! ¡Eh! ¿Quién ha puesto aquí mi pizarra
            mágica?
REX         ¡Ahhhhh!
WOODY       ¿Cómo va eso, Rex?

REX         ¿Te he asustado? Dime la verdad.
WOODY       Esta vez has estado a punto de asustarme.
REX         ¡Oh! Intento ser aterrador pero por desgracia no lo consigo. Creo
            que todos me toman por pesado.
WOODY       ¡Ah! Hola Bo, hola.
BO          Quería darte las gracias, Woody, por salvar mi rebaño.
WOODY       ¡Ah, bueno! Verás, no ha sido nada.
BO          ¿Qué te parece si buscas a otro vaquero para vigilar tu rebaño esta
            noche?
WOODY       (Risa) ¡oh si, verás! Yo… pues…
BO          Recuerda que sólo estoy a dos cajas de aquí.

SLINKY      Vamos, los juguetes más pequeños, delante. ¡Eh, Woody!
            ¿Vienes?
WOODY       ¡Ah! Gracias, Michael. ¡Muy bien! Oh, oh, retírate.
MICHAEL     Siempre estás encima.
WOODY       Eso es, gracias. Hola, probando… ¿Se oye mejor? Bien, ¿me oís
            todos? ¿Los de la estantería me oís también? Ok. Primer punto
            del orden del día: ¡Oh, ah, sí! ¿Ya habéis elegido un compañero
            de mudanza?
JUGUETES    ¿Eh? ¿Cómo? Ahm...
HAMM        ¡Compañero, no puede hablar en serio!
REX         No sabía que ya tuviéramos que tenerlo.
SR PATATA   No sabía que tuviéramos que ir de la mano…
            (GESTOS)

WOODY       ¡Oh, sí! Reíros si os parece gracioso… Recordad que falta una
            semana para la mudanza. No quiero que se quede ningún juguete
            aquí. Buscaos un compañero, si aún no lo tenéis, ¡buscadlo! Bien,
            lo siguiente… ¡Ah, sí! La reunión sobre seguridad ante la
            corrosión del plástico del martes, fue, creo yo, un gran éxito. Y
            quiero agradecerle al Sr. ABC, su magnífica exposición. Gracias,
            Sr. ABC.

SR ABC      De nada.
WOODY       Ok, eh… ¡Oh, ah, sí! Tengo una nota sin importancia. La fiesta
            de cumpleaños de Andy es hoy, eh… lo siguiente…
REX         ¿Qué significa que la fiesta es hoy? Su cumpleaños es la semana
            que viene…
HAMM        ¿Qué ocurre ahí abajo, su madre a perdido el coco?
WOODY       Bueno, es obvio que ha querido dar la fiesta antes de la mudanza.
            Si yo no me preocupo, vosotros tampoco.
SR PATATA   Claro que a ti no te preocupa, has sido el favorito de Andy desde
            la guardería.
SLINKY      ¡Eh, eh! Vamos, Sr. Patata. Si Woody dice que todo está bien,
            para mí, es más que suficiente. Que yo recuerde, Woody nunca
            nos ha liderado mal.

WOODY       Vamos chicos, cada Navidad, cada cumpleaños, pasamos por
            esto.
REX         ¿Y si a Andy le regalan otro dinosaurio? Uno terrorífico, no creo
            que pueda soportar ese tipo de rechazo.
WOODY       ¡Eh, chicos! Nadie va a ser sustituido. Es de Andy de quién
            hablamos. No importa cuánto juegue con nosotros. Lo que
            importa es que estamos aquí para Andy cuando nos necesite. Para
            eso nos han hecho, ¿no?
HAMM        Odio romper esta reunión pero… ¡Ya están aquí, invitados a las
            seis en punto!
            (GESTOS)

00:07:47
WOODY       Se levanta la sesión.
HAMM        ¡Oh, vaya! ¿Veis todos esos regalos?
SR PATATA   Yo no veo nada.
MADRE 1     Pasadlo bien
NIÑO 1      ¡Sí, mamá!
HAMM        En mi opinión, seremos carne de mercadillo para el mes que
            viene.
REX         ¿Hay alguno con forma de dinosaurio?
HAMM        ¡Oh, vamos! Están todos en cajas, bobo.
MADRE 2     ¡Hasta luego!
NIÑO 2      ¡Adiós, mamá!

REX         Cada vez son más grandes…
HAMM        Espera, ahí hay uno pequeñito.
MADRE 3     ¡Divertíos!
NIÑO 3      ¡Sí!
(GESTOS)
HAMM        ¡Estamos perdidos!
WOODY       ¡Está bien, está bien! Veamos, ¿si mando a las tropas os calmaréis
            un poco?
REX         ¡Sí, sí! Lo prometemos.
WOODY       ¡De acuerdo, ahorrad pilas!
HAMM        Muy bueno, Woody, eso es usar el coco.

WOODY       Sargento, instale un puesto de reconocimiento ahí abajo. Código
            rojo, ya sabe qué hacer.
SARGENTO    ¡Sí, señor! Bien chicos, ya habéis oído, código rojo, repito,
            código rojo. Plan de reconocimiento, Charlie, adelante, moveos,
            moveos, moveos.
NIÑO 1      Hola Andy, ¡Felicidades!
NIÑO 2      ¡Cuántos regalos!
NIÑO 3      ¡Queremos verlos!
NIÑOS       (Ad lib.)
MADRE       ¡Muy bien!, vamos chicos, todo el mundo a la sala de estar.
NIÑOS       (Ad lib.)

HAMM             ¡Vamos, dejadme pasar!
WOODY            Y así es como sabremos que hay en esos regalos.
MADRE            ¡Muy bien! ¿Quién tiene hambre? Aquí están las patatas, tengo
                 sabor a jamón y a barbacoa. ¡Oh! ¿Será posible? Ah, creí haberle
                 dicho de recogiera sus juguetes.
REX              Aún no están en sus puestos, ¿Por qué tardan tanto?
WOODY            ¡Eh! Esos hombres son profesionales, son los mejores.
                 Tranquilos, saben hacer su trabajo.
SOLDADO          ¡Ah, seguid sin mí, marchaos!
SARGENTO         Un buen soldado nunca abandona a sus hombres.

NIÑO 1        ¡Vamos a abrir los regalos, chicos!
NIÑO 2        ¡Sí, vamos allá!
NINOS AD LIB.
MADRE         Bien, chicos, atentos. Vamos, silencio. Bien, sentaos todos en
              círculo. ¡Andy, Andy!, tu siéntate en medio, bien. Y, ¿Qué regalo
              vas a abrir primero?
HAMM          Ahí están
SARGENTO      ¡Adelante Madre Pájaro! Aquí Alfa Bravo
WOODY         ¡Es el, es el! ¡Silencio, silencio!
SARGENTO      ¡Atención!, Andy está abriendo el primer regalo.
SR PATATA     ¡Que sea una señora patata! Señora patata, señora patata. ¡Que!
              Puedo soñar, ¿no?

SARGENTO     Está sacando el lazo, ahora lo desenvuelve. Es un… es, es un…
             una fiambrera, tenemos una fiambrera.
WOODY        ¿Una fiambrera?
SR PATATA    ¿Una fiambrera?
SLINKY       Para los fiambre, ¿eh?
SARGENTO     Muy bien, el segundo regalo, parece ser… ¡Sí, es un juego de
             sábanas!
SR PATATA    ¿Quién invitó a ese niño?
VOCES NIÑOS AD LIB.
MADRE        ¡Oh, sólo queda uno!

SARGENTO    ¡Bien, va a abrir el último regalo!
WOODY       ¡El último regalo!
SARGENTO    Es uno grande… es un… ¡Es un juego de mesa, repito, Batalla
            naval!
REX         ¡Bien!
HAMM        ¡Nada de preocuparse! ¡Sí, muy bien, si!
SR PATATA   ¡Eh, sin empujar!
HAMM        Perdona, viejo tubérculo.
SARGENTO    Misión cumplida, buen trabajo chicos, recoged. Volvemos a casa.
WOODY       ¿Qué os había dicho, eh? Ningún problema.
SLINKY      Sabía que tenías razón, Woody, nunca he dudado de ti.

MADRE       ¡Un momento!
NIÑO 1      ¿Qué pasa?
NIÑO 2      ¿Hay más?
MADRE       ¿Qué tenemos aquí?
NIÑO 3      ¡Qué bien!
SARGENTO    ¡Esperad, conecta de nuevo! ¡Adelante Madre Pájaro, adelante
            Madre pájaro! Mamá ha sacado otro regalo del armario. Andy lo
            está abriendo. Está muy emocionado con este.
ANDY        ¡Mamá! ¿Qué es?
SARGENTO    Es un paquete enorme.
NIÑOS       ¡Oh!
SARGENTO    Esperad ¡Vaya, me tapa un niño! No veo nada. Es un…
NIÑO 1      ¡Qué chuli!
NIÑO 2      ¡Es guay!
NIÑO 3      ¡Manudo regalo!

REX         Es un que… ¡Qué es!
WOODY       ¿Qué?
REX         ¡Oh, no!
SR PATATA   ¡Oh, Lagarto enorme! Ahora no sabremos lo que es…
HAMM        ¡Te has pasado, Rex!
WOODY       ¡No, no! ¡Colocad las pilas, las pilas!
HAMM        ¡Oh, las estás poniendo mal! Las pones al revés…
WOODY           ¡Más es positivo, menos, negativo! ¡Oy… dejadme a mí!
HAMM            ¡Oing!
ANDY            ¡Vamos a mi cuarto, chicos!
NIÑOS           ¡Sí, vamos! ¡Bien!
SARGENTO        ¡Alerta roja, alerta roja! Andy va hacia arriba…

WOODY           (GESTOS)
SARGENTO        ¡Invasión infantil, vuelvan a sus puestos!
WOODY           ¡Viene Andy! Todos a sus puestos, ¡rápido!
HAMM            ¡A vuestros sitios, a vuestros sitios!
REX             ¡Oh Dios!
SR PATATA       ¡Dónde está mi oreja, dónde está mi oreja! ¿La habéis visto?
REX             ¡Aparta oca! ¡Ya voy, ya voy! Ooohh…
NIÑOS AD LIB.
ANDY            ¡Venceremos a Zurg! ¡Dejad sitio, aquí es donde aterriza la nave
                espacial!
MADRE           ¡Juegos! ¡Tenemos premios!

SR PATATA       ¿Qué es?
BO              ¿Podéis verlo?
SLINKY          ¿Qué demonios hay ahí arriba?
REX             ¡Woody! ¿Quién está ahí arriba contigo?
WOODY           (GESTOS)
SLINKY          ¡Woody! ¿Qué estás haciendo debajo de la cama?
WOODY           Ahmm… nada, nada. Seguro que Andy estaba emocionado, eso
                es todo. Demasiados dulces y helados, supongo. Solo es un error.
SR PATATA       Pues por lo que veo, ese error está sentado en tu sitio, Woody,
                (Ríe)
REX             ¡Ah! ¿Te ha sustituido?
WOODY           ¡Eh! ¿Qué os he dicho antes? Nadie va a ser sustituido. Y Ahora,
                seamos educados y démosle a quién esté ahí arriba una gran
                bienvenida al cuarto de Andy!

BUZZ       Buzz Lightyear a mando estelar. Adelante mando estelar. Mando
           estelar, responda. ¿Me reciben? ¿Por qué no contestan? ¡Ah, mi
           nave! ¡Porras! Tardaré semanas en repararla. Buzz Lightyear,
           diario de abordo, fecha estelar 4072. Mi nave se ha desviado de
           su rumbo hacia el sector 12. He hecho un aterrizaje forzoso en un
           extraño planeta.

BUZZ       El impacto debió despertarme de mi hipersueño. El terreno
           parece un poco inestable. Aún no tengo lectura de si el aire se
           puede respirar. Parece no haber signos de vida inteligente por
           ningún sitio.
WOODY      ¡Hola!
BUZZ       ¡Yiah!
WOODY      ¡Ah!
BUZZ       (GESTOS)
WOODY      Uouuu, jeje, uouu. ¿Te he asustado?

WOODY      No lo pretendía. Perdón, hola, me llamo Woody y este es el cuarto
           de Andy. Eso es lo que quería decir. Y también que ha habido
           una pequeña confusión. Este es mi sitio, ¿lo ves? Esta cama…
BUZZ       ¡Ah, la autoridad local! Ya era hora de que llegara, soy Buzz
           Lightyear, guardián espacial, unidad de protección del universo.
           Mi nave ha aterrizado aquí por error.

WOODY      ¡Si, es un error! Porque, verás, la cama es mi sitio.
BUZZ       Necesito reparar mis turbopropulsores. ¿Aún usáis combustibles
           fósiles o ya habéis descubierto la fusión de cristales?
WOODY      Bueno, veamos, tenemos pilas alcalinas
BUZZ       ¡Ah, cuidado!
WOODY      (GESTOS)
BUZZ       ¡Alto! ¿Quién anda ahí?

REX          ¡No dispares, calma! Somos amigos…
BUZZ         ¿Conoces a esos de ahí?
WOODY        ¡Si, son los juguetes de Andy!
BUZZ         Está bien, podéis subir hasta aquí. Soy Buzz Lightyear. Vengo en
             son de paz.
REX          ¡Oh, no sabes cuánto me alegro de que no seas un dinosaurio!
BUZZ         Bueno… eh, eh… ¡Gracias! Gracias a todos por vuestra amable
             bienvenida.
REX          ¡Oye! Para que sirve ese botón.
BUZZ         Te lo enseñaré: ¡Buzz Lightyear al rescate!
HAMM         ¡Oh!
SR PATATA    ¡Oh!

SLINKY       ¡Eh! Woody tiene algo parecido, sólo que lo suyo es un cordel.
SR. PATATA   Pero suena como si le hubiera atropellado un coche.
HAMM         ¡Oh, sí! No es como este, es un sistema de sonido de calidad.
             Utilizaron cable de cobre ¿eh? Por cierto, de dónde eres…
             ¿Singapur, Hong Kong?
BUZZ         ¡Oh, no! En realidad estoy destinado en el sector 4 del cuadrante
             Gamma. Como miembro de la unidad del cuerpo de élite de los
             guardianes espaciales para la protección del universo, defiendo
             la galaxia de la amenaza de invasión del malvado Emperador
             Zurg, implacable enemigo de la Alianza Galáctica.

SR. PATATA   ¿En serio? Yo soy de Playskool.
REX          Y yo de Matel, bueno, en realidad no soy de Matel, soy de una
             empresa más pequeña que fue comprada en una subasta de
             acciones.
WOODY        Se diría que nunca han visto un juguete nuevo…
BO           ¡Pues claro, mírale! Tiene más chismes que una navaja suiza
             multiusos.
BUZZ         ¡Ah…ah, ah, ah! Ten cuidado, no querrás estar en medio cuando
             se dispare mi láser.
SR. PATATA   ¡Ah, un láser! ¿Cómo es que tú no tienes un láser, Woody?

WOODY        ¡No es un láser! Es una bombillita que parpadea…
HAMM         ¿Qué le pasa?
SR. PATATA   Envidia su láser.
WOODY        Bueno, ya es suficiente. Mirad, todos estamos muy
             impresionados con el nuevo juguete de Andy.
BUZZ         ¿Juguete?
WOODY        Ju-gue-te, ¡Juguete!
BUZZ         Perdona, me parece que la palabra que estás buscando, es
             guardián espacial…
WOODY        La palabra que estoy buscando, no la puedo decir porque hay
             juguetes preescolares delante…

SR. PATATA   Te estás poniendo algo tengo, ¿no?
REX          ¡Oh, Sr. Lightyear! Siento curiosidad… ¿Qué suele hacer en
             realidad un guardián espacial?
WOODY        ¡No es un guardián espacial, no lucha contra el mal, ni dispara
             lásers, ni vuela!
BUZZ         ¡Disculpa!
TODOS        ¡Oh!
HAMM         ¡Qué alas, qué bien!
WOODY        ¡Oh, el qué, el qué! Son de plástico, no puede volar.
BUZZ         Son de una aleación de terilio-carbono y sí puedo volar.
WOODY        No, no puedes.
BUZZ         Sí, puedo.
WOODY        ¡No puedes!
BUZZ         ¡Sí!
WOODY        No, no, ¡no!

BUZZ         Podría volar por toda esta habitación con los ojos cerrados.
WOODY        Muy bien, chulo espacial, demuéstralo.
BUZZ         Pues claro que lo haré. Apartaos todos.
             ¡Hasta el infinito y más allá! Puedo.
TODOS        ¡Bien!
REX          ¡Oh, vaya! Has volado de maravilla.
BO           Ya tengo mi compañero de mudanza.

BUZZ         ¡Vaya, gracias! Gracias a todos, gracias.
WOODY        ¡Eso no ha sido volar!
REX          Es como un pterodáctilo.
WOODY        Eso ha sido caer con estilo.
SR. PATATA   ¡Eh! Las muñecas deben estar locas por ti, ¿Puedes enseñarme
             eso?
SLINKY       ¡Vaya, es algo increíble!
WOODY        ¡Oh, cállate!
BO           Ohhh…
WOODY        Dentro de un par de días todo será igual que antes, ya lo verás…
REX          ¡Qué pasada, madre mía!
SR. PATATA   ¡Oh sí, es increíble, es increíble!
WOODY        Estoy seguro, aún soy el juguete favorito de Andy.

TAKE 034
00:18:54     (CANCIÓN)
ANDY         ¡Ja, ja! ¡Ja, ja! ¡Oh! ¡Buzz Lightyear al rescate!
REX          ¡Arg! ¡Arrrggggg!
(GESTOS)

WOODY        ¡Ahh, por fin, ahhh! ¡Eh! ¿Quién tiene mi sombrero?
TIBURON      ¡Mira, soy Woody! ¡Jauri, jauri, jauri!
WOODY        ¡Ja, jee! ¡Ja, jaaa! ¡Dame eso!
BUZZ         Escuchad, lagarto y perro radioactivo. Quiero enseñaros una
             cosa. Al parecer, he sido aceptado en vuestra cultura. Vuestro
             jefe, Andy, ha inscrito su nombre en mí.
REX          ¡Vaya, y lo ha hecho con tinta imborrable!
SLINKY       ¡Caramba!
BUZZ         Y ahora, he de seguir reparando mi nave.
BO           No dejes que te afecte, Woody.
WOODY        Oh, eh… ¿dejar que? Yo… eh… ¿Qué quieres decir, quién?
BO           Sé que ahora Andy está emocionado con Buzz, pero tú sabes que
             siempre tendrá un lugar especial para ti…
SR. PATATA   ¡Sí! En el desván…
WOODY        ¡Muy bien! Se acabó.

BUZZ         Umm, cinta acopladora unidireccional.
ROBOT        El señor Lightyear quiere más celo.
WOODY        ¡Escucha! Mequetrefe. Quiero que te aparte de Andy, es mío. Y
             nadie, repito, ¡Nadie! Me lo va a arrebatar.
BUZZ         Pero, ¿De qué estás hablando? Dónde está esa cinta acopladora.
WOODY        Y otra cosa, deja de una vez esa jerga espacial. Me pone nervioso.
BUZZ         ¿Acaso quieres presentar una queja ante el mando estelar?
WOODY        ¡Oh, oh, oh! ¡Está bien! Así que quieres hacerlo por las malas…
             ¿eh?
BUZZ         ¡Ni se te ocurra amenazarme, vaquero!

WOODY        ¡Ah! ¿Sí? ¡Tipo duro!
BUZZ         (GESTOS)
             El aire… ¿No es tóxico? ¿Cómo te atreves a abrir la escafandra
             de un hombre del espacio en un planeta inexplorado? Mis ojos
             podían haberse salido se sus órbitas.
WOODY        Vamos a ver, ¿De veras crees que eres Buzz Lightyear? ¡Oh!
             Todo este tiempo he pensado que era una actuación. ¡Eh, chicos,
             mirad! ¡Es el auténtico Buzz Lightyear!
BUZZ         Te burlas de mí ¿Verdad?
WOODY        ¡Oh! No, no, no, no, no, no, no, no… ¡Buzz, mira, un alien!
BUZZ         ¡Dónde!
WOODY        (GESTOS)

SID          ¡Sí! Jajajaja…
SLINKY       ¡Oh!
WOODY        ¡Oh, oh!
SLINKY       ¡Es Sid!
REX          Creía que estaba de campamento…
HAMM         Este año deben haberle echado antes…
REX          ¡Oh, no, Sid!
BO           ¡Oh!
SID          ¡Bomba va! ¡Toma! Jajaja.
SR. PATATA   ¿Quién es esta vez?
WOODY        Pues la verdad, no lo sé. ¡Ey! ¿Dónde está Lenny?
LENNY        Estoy aquí, Woody
SID          ¡Ahí va otra! ¡Bummba!
REX          ¡Oh no! No podré soportar algo así otra vez.
SID          ¡No se mueva de donde está, soldado!
WOODY        ¡Oh no! Es un soldado…

BUZZ         ¿Qué ocurre?
WOODY        Nada que interese a los hombres del espacio, sólo a los juguetes.
BUZZ         Echaré un vistazo de todos modos.
SID          ¡Vamos soldado! O explotarás en mil pedazos.
BUZZ         ¿Por qué está ese soldado atado a un artefacto explosivo?
WOODY        ¿Por qué? Por eso…
SID          ¡Ahora verás!
BUZZ         ¡Vaya! Es un tipo muy peludo.
WOODY        No, no, no, no, ese es Scud ¡Bobo! Ese es Sid.

BUZZ         ¿Te refieres a ese niño feliz?
SR. PATATA   No es ningún niño feliz.
REX          Tortura a los juguetes, sólo para divertirse.
BUZZ         ¡Vaya! En ese caso, tenemos que hacer algo.
BO           ¿Qué vas a hacer? ¡Baja de ahí!
BUZZ         Le daré una lección a ese chico.
WOODY        ¡Sí, claro, adelante! Fúndele con tu terrorífico láser.
BUZZ         ¡Ten cuidado con eso, es extremadamente peligroso!
LENNY        ¡Atención, lo está encendiendo, todos al suelo!
TODOS        (GESTOS)

SID          ¡Bien! Se fue ¡Ya es historia! ¡Jajaja!
BUZZ         Podría haberle detenido
WOODY        ¡Oh, Buzz! Te aseguro que me encantaría ver como lo intentas.
SID          ¡Sí! Se ha convertido en picadillo ¡Es genial!
WOODY        Porque me encantaría verte convertido en un cráter.
SID          ¡Qué divertido!
BO           Cuánto antes nos mudemos, mejor.
SID          ¡Hay que probarlo otra vez, sí! ¡Jajaja!

ANDY         ¡Hasta el infinito y más allá!
MADRE        Esto de hacer el equipaje me ha dado hambre. ¿Qué tal si vamos
             a cenar al Pizza Planet?
ANDY         ¿Al Pizza Planet? ¡Estupendo!
MADRE        Ve a lavarte las manos, yo prepararé a Molly
ANDY         ¿Puedo llevarme algún juguete?
MADRE        Puedes llevar sólo un juguete.
ANDY         ¿Sólo uno?
WOODY        ¿Un juguete? (GESTOS) ¿Me escogerá a mí? ¿No cuentes con
             ello? (GESTOS)

WOODY        ¡Buzz! ¡Ah, Buzz, Buzz Lightyear! Buzz, gracias a Dios,
             tenemos problemas.
BUZZ         ¿Problemas? ¡Donde!
WOODY        Ahí abajo, ahí abajo. Un juguete indefenso está atrapado, Buzz.
BUZZ         Entonces no hay tiempo que perder. No veo nada.
WOODY        Está ahí, tu sigue…
BUZZ         ¿Qué clase de jugué…? ¡Ah!
SR. PATATA   (GESTOS)
BUZZ         (GESTOS)
HAMM         ¡Buzz!
SR PATATA    (GESTOS)
SLINKY       (GESTOS)
WOODY        ¡Buzz!

REX          ¿Habéis visto lo que ha pasado, habéis visto lo que ha pasado?
SLINKY       En la entrada no le veo, creo que ha rebotado hasta el jardín de
             Sid.
REX          ¡Ohh, ohhh!
HAMM         ¡Qué mala suerte, menudo batacazo!
REX          ¡Eh, atención! RT está tratando de decir algo… ¿Qué pasa?
             Chico…
SR. PATATA   Está diciendo que no ha sido un accidente.
SLINKY       ¿Cómo?
HAMM         ¿Qué?
BO           ¿Qué quieres decir?
SR. PATATA   El pobrecillo fue empujado…
TODOS        ¡Ohhh!
SR. PATATA   ¡Por Woody!
TODOS        ¿Qué? ¡Oh no! ¿Quién?

WOODY        ¡Un momento, no, no! No pensarás que yo pretendía tirar a Buzz
             por la ventana, ¿Verdad, Patata?
SR. PATATA   ¡Señor Patata para ti, asesino traidor!
TODOS        (GESTOS)
WOODY        ¡Que ha sido un accidente, chicos, vamos! Te…te… tenéis que
             creerme.
SLINKY       ¡Nosotros te creemos, Woody! ¿Verdad, Rex?
REX          Bueno… sí… no… No me gustan los enfrentamientos.
SERGENTO     ¡Dónde está tu honor, escoria! Eres una absoluta deshonra, no
             mereces estar entre nosotros… (GESTOS)

SR. PATATA   No podías soportar que Buzz interrumpiera tu diversión…
             ¿Verdad, Woody? Imagino que no querías afrontar el que Buzz
             podía ser el nuevo juguete favorito de Andy. Así que te libraste
             de él… ¿Y sí Andy empieza a jugar más conmigo, Woody, eh?
             ¿También vas a tirarme por la ventana?
WOODY        ¡No!

HAMM         No creo que debamos darle la oportunidad…
SARGENTO     ¡A por él, muchachos! ¡Hacedle pedazos! (GESTOS
             SOLDADO)
SR. PATATA   ¡Linchémosle con su cordel!
HAMM         ¡Quiero su sombrero!
BO           ¿Queréis parar? Chicos.
HAMM         ¡Detenedle!
BO           Dejadle ya.
WOODY        No, no, no, no… esperad, esperad, puedo explicarlo todo.
MADRE        ¡Andy vamos!
ANDY         ¡Vale mamá, ahora bajo! Tengo que coger a Buzz.
SARGENTO     ¡Retirada!
ANDY         ¡Mamá! ¿Sabes dónde está Buzz?
MADRE        No, no le he visto
SR. PATATA   ¡Pssss!
MADRE        ¡Andy vamos! Ya estoy en la puerta…
ANDY         Pero mamá, no lo encuentro…
MADRE        Cariño, coge cualquier otro juguete… ¡Vámonos!
ANDY         ¡Ah, está bien! No he podido encontrar mi Buzz, sé que lo dejé
             en mi cuarto.
MADRE        Bueno, cariño, seguro que está en casa, ya lo encontrarás.

SLINKY       Es demasiado corto, necesitamos más monos.
REX          Ya no quedan más, el barril está vacío. ¡Buzz! Los monos no nos
             valen, pero tranquilo, estamos trazando otro plan. Mantén la
             calma. ¡Oh! ¿Dónde estará?

ANDY         ¿Puedo ayudar a echar gasolina?
MADRE        ¡Claro, y hasta te dejaré conducir!
ANDY         ¿Sí?
MADRE        Sí, cuando tengas 16 años.
ANDY         Eh… muy graciosa, mamá.
MADRE        (GESTO)

WOODY        ¡Oh, vaya! ¿Cómo voy a convencer a esta gente de que fue un
             accidente? ¡Buzz! ¡Buzz! ¡Ja! ¡Estás vivo, es estupendo! ¿No?
             ¡Estoy salvado, estoy salvado! Andy te encontrará aquí, nos
             llevará a casa y entonces tú, podrás contarles a todos que todo
             este asunto fue sólo un enorme error. ¿Eh, verdad? Compañero
BUZZ         Sólo quiero que sepas, que aunque has intentado aniquilarme, la
             venganza no es una idea que fomentemos en mi planeta.
WOODY        ¡Ah, eso está bien!

BUZZ          Pero no estamos en mi planeta, ¿Verdad?
WOODY         No…
(GESTOS DE PELEA)
WOODY         ¡Oh, vale, vamos! ¿Quieres probarme?
BUZZ          (Buzz… Buzz… Buzz Lightyear al recate)
ANDY          ¡Sí, preparados para el Pizza Planet!
WOODY         ¡Ay!
ANDY          ¡Bien!
WOODY         ¡Andy!

WOODY           (GESTOS) ¿No se da cuenta de que no estoy ahí? ¡Ohh, me he
                perdido! ¡Soy un juguete perdido! (GESTOS)
BUZZ            Diario de Buzz Lightyear: El Sheriff local y yo, nos encontramos
                en una estación de reabastecimiento.
WOODY           ¡Tú!
BUZZ            Según mi ordenador, todo indica que…
WOODY           ¡Cállate! Haz el favor de callarte ¡Tonto!
BUZZ            Sheriff, no es momento para asustarse.
WOODY           Es el momento perfecto, me he perdido, Andy se ha ido, dentro
                de dos días van a mudarse y todo por tu culpa.
BUZZ            ¿Qué, por mí culpa? Si no me hubieras empujado por la
                ventana…
WOODY           ¡Ohhh! ¿Sí? Pues si tú no hubieras aparecido con tu estúpida nave
                espacial de cartón, quitándome todo lo que me importaba…

BUZZ            ¡No me hables de lo que importa! Por tu culpa, la seguridad de
                todo este universo está en peligro.
WOODY           ¿Qué, de qué estás hablando?
BUZZ            Ahora, en los confines de la galaxia, el Emperador Zurg ha
                encargado la construcción de un arma terrible capaz de aniquilar
                un planeta entero. Sólo yo poseo la información que revela el
                único punto débil de dicha arma. Y tú, amigo mío, eres el
                responsable de retrasar mi cita con el mando estelar.
WOODY        ¡Te repito que eres un juguete! No eres el auténtico Buzz
             Lightyear, eres… eres sólo un muñeco, sólo eres un juguete
             infantil.
BUZZ         Y tú eres un hombrecillo triste y extraño. Me das lástima. ¡Hasta
             la vista!
WOODY        ¡Ah! ¿Sí? Pues que te vaya bien, chiflado. Una cita con el mando
             estelar…

REPARTIDOR   ¡Eh, gasolinero!
GASOLINERO   ¿Me hablas a mí?
REPARTIDOR   ¡Sí, tío!
WOODY        ¿Pizza Planet?
REPARTIDOR   ¿Puedes ayudarme?
WOODY        ¡Andy!
REPARTIDOR   Llano, por favor.
GASOLINERO   ¡Espera un momento!
WOODY        ¡Oh no! No puedo aparecer en esa habitación sin Buzz.
             ¡Buzz, Buzz! ¡Vuelve!
BUZZ         ¡Márchate!
WOODY        ¡No, Buzz, tienes que volver!

WOODY        ¡He encontrado una nave espacial! ¡Una nave espacial, Buzz!
REPARTIDOR   ¡Vamos tío, date prisa! Que las pizzas se están enfriando.
GASOLINERO   Ya voy, ya voy… dónde quieres ir…
REPARTIDOR   ¡Tengo que estar cerca…!
BUZZ         ¿Estás seguro de que ese carguero espacial regresará a su puerto
             de origen en cuanto se libere de sus provisiones?
WOODY        ¡Ajajá! Y cuando lleguemos allí, podremos encontrar un modo
             de llevarte a tu hogar.
BUZZ         Entonces, subamos a bordo
WOODY        ¡No, no, espera, Buzz, Buzz!
WOODY        Pongámonos ahí, atrás no nos verá nadie.
BUZZ         ¡Negativo! No hay cinturones de seguridad en la zona de carga.
             Estaremos más seguros en la cabina.
WOODY        ¡Sí! Pero… ¡Buzz, Buzz!
REPARTIDOR   Giro dos veces a la izquierda una la derecha ¿no?
GASOLINERO   ¡Sí!
REPARTIDOR   ¡Sí! Pero recuerda, son dos veces a la izquierda.
WOODY        ¡Buzz! Es más seguro en la cabina que en la zona carga, será
             idiota… (GESTOS)

VOZ 1        ¡Siguiente despegue programado para las T menos treinta
             minutos y contando!
VOZ 2        ¡Adelante, pueden entrar!
VOZ 3        Bienvenidos a Pizza Planet.
VOZ 3        En la zona blanca pueden disfrutar la experiencia… (AD LIB)
BUZZ         ¡Sheriff! ¡Sheriff! Está ahí…
WOODY        (GESTOS)
BUZZ         Hay mucha vigilancia en la entrada, necesitamos un modo de
             entrar…
WOODY        (GESTOS)
BUZZ         Gran idea, Woody. Me gusta tu forma de pensar.

VOZ 1        Adelante, pueden entrar.
VOZ 2        Bienvenidos a Pizza Plante
BUZZ         ¡Ahora, rápido Sheriff, la compuerta se cierra!
VOZ 3        ¡Atención! Sólo quedan cinco minutos para embarcar en la base
             de lanzamiento cósmico.
NIÑO 1       ¡Date prima Timmy!
NIÑO 2       ¡Sí, ya voy!
BUZZ         ¡Ay!
WOODY        ¡Mira por dónde vas!
BUZZ         ¡Perdona!
AMBOS        (GESTOS)

VOZ 4        Nueve, ocho, siete, seis, cinco, cuatro, tres, dos, uno…
BUZZ         ¡Menudo puerto espacial! Buen trabajo, Woody.
ANDY         ¡Mamá! ¿Puedo jugar al agujero negro? ¡Por favor, por favor, por
             favor!
WOODY        ¡Andy!
ANDY         ¡Oh, es genial!
BUZZ         Debemos encontrar una nave que se dirija al sector 12.
WOODY        ¡No, no, no, no, no, Buzz! ¡Por aquí! Hay una nave espacial,
             acabo de verla.
BUZZ         ¿Tiene hiperespacio?
WOODY        Hiperespacio hiperactivo y astro… césped.
ANDY         Qué te parece ¿No es genial?
BUZZ         ¿Dónde está? No veo… ¡Ah!
WOODY        ¡Vamos, eso es!
BUZZ         ¡La nave espacial!
VOZ 4        Listo para el despegue… (REPETIR)

WOODY        Muy Bien, Buzz, prepárate. Y… Bien Buzz, cuando yo diga
             “ahora” saltaremos hasta la cesta. ¡Buzz! (GESTO) ¡No! Esto no
             me puede pasar a mí.
MARCIANO 1   ¡Un extraño!
MARCIANO 2   ¡Del exterior!
TODOS        ¡Oh!
BUZZ         ¡Saludos! Soy Buzz Lightyear, vengo en son de paz.
TODOS        ¡Hola!
VOZ 1        ¡Antes de marcharos, reponed energía a bordo del mostrador 3!
BUZZ         Esta es una emergencia intergaláctica. Necesito re direccionar
             vuestra nave hasta el sector 12. ¿Quién está al mando?
TODOS        ¡El Gaaaancho!

MARCIANO 1   El Gancho es nuestro amo.
MARCIANO 2   Él es quién elige quién se va y quién se queda.
WOODY        Todo esto es absurdo
SID          ¡Eh, payaso!
WOODY        ¡Ah!
SID           ¿Quiere pillar ahí dentro? Acabaré con todos.
WOODY        ¡Oh, no! ¡Sid! ¡Abajo!
BUZZ         ¿Qué mosca te ha picado? Se…
WOODY        Fuiste quién decidió subirse a este…
MARCIANO 3   Shuucchhh! El Gancho… se mueve…
MARCIANO 4   ¡Me ha elegido! ¡Adiós amigos, me voy a un lugar mejor!
SID          ¡Ya viene! ¡Ah, un Buzz Lightyear, genial!

WOODY        (GESTOS)
SID          ¡Bien!
WOODY        ¡Ah! ¡Buzz, no!
SID          ¡Eh!
WOODY        (GESTOS)
MARCIANO 1   Él ha sido elegido.
MARCIANO 2   ¡Sí!
MARCIANO 3   Debe irse…
WOODY        ¡Qué estáis haciendo! ¡Basta, basta, fanáticos!
SID          ¡Oh, bien! Tengo un premio doble. Vámonos a casa… ¡A jugar!
             Jajaja

SID          (GESTOS, TARAREA)
BUZZ         ¡Sheriff! Puedo ver tu morada desde aquí, estás casi en casa.
MARCIANO     El Nirvana se acerca, el portal místico me espera…
WOODY        ¡Queréis callaros! No lo entendéis ¿Verdad? Si entramos en casa
             de Sid, ya no saldremos jamás.
SID          ¡No, Scud! Tranquilo chico, siéntate. Buen perro. ¡Eh! Tengo
             algo para ti. ¡Preparado! ¿Listo? ¡Ya! ¡Hannah! ¡Eh, Hannah!
HANNAH       ¡Que!
SID          ¿Ha llegado mi paquete por correo?
HANNAH       No lo sé…
SID          ¡Qué quieres decir con eso!
HANNAH       ¡Pues que no lo sé!

SID          ¡Oh, no, Hannah!
HANNAH       ¡Qué!
SID          ¡Mira Jany!
HANNAH       ¡Eh!
SID          ¡Esta enferma!
HANNAH     ¡No, no lo está!
SID        Tendré que realizar una de mis operaciones. ¡JAJAJA!
HANNAH     ¡No!
WOODY      ¡No! Al cuarto de Sid no, allí no…
HANNAH     ¡No, Sid, devuélvemela!
SID        JAJAJA
HANNAH     ¡Sid! ¡Sid! ¡Sid! ¡Devuélvemela, por favor! ¡Sid!
SID        ¡Oh, no! Tenemos un paciente enfermo. Enfermera, prepare el
           quirófano ¡Rápido! El paciente esta… preparado. Nadie ha
           intentado un trasplante de cerebro con doble bypass hasta el día
           de hoy…

SID        Ahora, lo más delicado… ¡Alicates!
BUZZ       No creo que ese niño haya ido jamás a la facultad de medicina…
SID        JAJAJA, ¡Doctor, lo he conseguido!
           ¡Hannah! Jany ya está un poco mejor…
HANNAH     ¡Ahhh! ¡Mamá, mamá!
SID        ¡Es mentira! Diga lo que diga ¡Miente!
(GESTOS)
WOODY      ¡Ah, vamos a morir! Yo me largo… Cerrada… Tiene que haber
           otra salida… Ahhh, Buzz… ¿Has sido tú? ¡Ahh, hola pequeñín!
           Ven, ¿Sabes algún modo de salir de aquí? (GESTOS)

WOODY      ¡Ayyy!… Bubububu… Buzz!
BUZZ       ¡Son caníbales!
WOODY      ¡Ah!
BUZZ       ¡Mayday, mayday! Responda, mando estelar ¡Envíen refuerzos!
           Mando estelar ¿Me reciben? He cambiado mi láser de aturdir, a
           matar.
WOODY      ¡Ja, bien, bien, sí! Si alguien nos ataca, lo haremos parpadear
           hasta que muera…

REX        ¡Eh, chicos! Creo que está ahí… ¡Buzz! ¿Eres tú? (GATO) ¡Oh,
           gato, vete! ¿Quieres salir de ahí? Estás interfiriendo en la
           búsqueda y rescate. ¿Eh? ¡Mira, ya han vuelto!
ANDY         Mamá ¿Has visto a Woody?
MADRE        ¿Cuál fue el último sitio donde lo dejaste?
ANDY         Aquí, en el coche…
MADRE        Pues será que no has mirado bien…
ANDY         Aquí no está, mamá. Woody ha desaparecido.
BO           ¡Ah! ¿Woody ha desaparecido?
HAMM         Sí, el gusano se ha escapado…
SR. PATATA   ¿Eh, eh? Os dije que era culpable…
REX          Quién hubiera pensado que fuera capaz de tales atrocidades…
BO           ¡Oh, Slink! Espero que esté bien…

SID          ¡Oh, un superviviente! ¿Dónde está la base rebelde? ¡Habla! Veo
             que te resistes… Bueno, tenemos modos para hacerte hablar…
             ¡Dónde están tus amigos rebeldes! JAJAJA.
MADRE        ¡Sid, el desayuno está listo!
SID          ¡Oh, bien!
WOODY        ¡Ahhhhh!
BUZZ         ¿Estás bien? Me enorgulleces, un hombre inferior habría hablado
             bajo tal tortura.
WOODY        Espero que esto no sea permanente…
BUZZ         Aún no hay noticias del mando espacial, no estamos tan lejos del
             puerto espacial…

WOODY        ¡La puerta, está abierta, somos libres!
BUZZ         ¡Espera, no sabemos qué hay ahí!
WOODY        Yo te lo diré cuando… ¡Ahhh! ¡Ah, ah, ah, van a comernos,
             Buzz! ¡Haz algo, rápido!
BUZZ         ¡Tápate los ojos! No funciona, lo recargué antes de salir, debería
             durar…
WOODY        ¡Bobo, eres un juguete, usa tus movimientos de karate!
             ¡Apartaos, vamos, fuera!
BUZZ         ¿Por qué haces eso? ¡Basta ya!

WOODY        ¡Atrás, salvajes, atrás!
BUZZ         ¡Woody, basta!
WOODY         ¡Lo siento, chicos! La cena ha sido cancelada… No hay nada
              como el hogar, no hay nada como el hogar… no hay nada como
              el hogar… (GESTOS)
BUZZ          Otra maniobra así, vaquero, y harás que nos maten.
WOODY         ¡No me digas lo que he de hacer!
BUZZ          ¡Shsss!
WOODY         ¡Yeee ha! Adelante, muchacho. Tenemos que poner en marcha
              este tren.
BUZZ          Separémonos

HOMBRE (TV)   Llamando a Buzz Lightyear, adelante Buzz Lightyear. Aquí el
              mando estelar. Buzz Lightyear ¿Me recibe?
NIÑO (TV)     Al habla Buzz Lightyear, le recibo fuerte y claro.
HOMBRE        Buzz Lightyear, el planeta tierra necesita su ayuda.
NIÑO          ¡Allá voy!
VOCES         ¡BUZZ LIGHTYEAR!
HOMBRE 2      El superhéroe más grande del mundo, y ahora el juguete más
              grande del mundo. Buzz lo tiene todo: comunicador de muñeca…
NIÑO          Llamando a Buzz Lightyear…
HOMBRE 2      …movimientos de karate…
NIÑO          ¡Vaya!
HOMBRE 2      … luz de láser intermitente…
NIÑO          ¡Asimilación total!
HOMBRE 2      … simulador de voz con muchas frases…

BUZZ          “Misión secreta en el espacio inexplorado” (X2)
HOMBRE 2      … y lo mejor de todo, alas espaciales de alta presión.
BUZZ          “Hasta el infinito y más allá”
HOMBRE 3      (INSERTO) NO ES UN JUGUETE VOLADOR
HOMBRE 2      Consigue tu muñeco Buzz Lightyear y salva una galaxia cercana.
VOCES         ¡BUZZ LIGHTYEAR!
HOMBRE 4      (INSERTO) A LA VENTA EN TODOS LOS ALMACENES
              DE JUGUETES DE AL.
LOCUTOR 1     Bienvenidos de nuevo al campeonato de bolos de Boeing
              Richmond
LOCUTOR 2     ¡Sí! ¿Qué hay más emocionante que los bolos a nivel profesional,
              eh?
(CANCION)
WOODY         ¡Eres un juguete, no puedes volar!
BUZZ          ¡Hasta el infinito y más allá!

HANNAH           ¡Mamá, mamá! ¿Has visto a mi muñeca Sally?
MADRE            Perdona cielo ¿Qué has dicho?
HANNAH           ¡No importa!
WOODY            (GESTOS) Buzz ¿Hay moros en la costa? Buzz ¿Dónde estás?
BUZZ             “Misión secreta en el espacio inexplorado ¡Adelante!”
HANNAH           ¿En serio? Eso es muy interesante. ¿Quiere un poco de té, señora
                 Nesbit?
WOODY            ¡Buzz!
HANNAH           Es estupendo que se haya podido reunir con nosotras, habiéndola
                 avisado con tan poco tiempo.
WOODY            ¡Oh, no!
HANNAH           Qué monada de sombrero, señora Nesbit. Le sienta muy bien.
WOODY            ¡Hannah, eh, Hannah!
HANNAH           ¿Mamá? Por favor, discúlpenme señoras, vuelvo enseguida.

HANNAH           ¿Qué pasa, mamá? ¡Mamá! ¿Dónde estás?
WOODY            ¡Buzz, eh, Buzz! ¿Estás bien?
BUZZ             ¡Se fue, todo se fue, todo se ha ido! Byebye, yuju, adiós…
WOODY            ¿Pero qué te ha pasado?
BUZZ             En un momento, estás defendiendo toda la galaxia y de repente,
                 te encuentras tomando té Darge Lincoln, María Antonieta y su
                 hermanita…
WOODY            Creo que ya has tomado bastante té por hoy, te sacaré de aquí,
                 Buzz
BUZZ             ¿No lo entiendes? ¿Ves el sombrero? Soy la señora Nesbiss
                 (RISAS)
WOODY            ¡Vuelve en ti, Buzz!
BUZZ             Lololo…lo siento, tienes razón, sólo estoy un poco deprimido,
                 eso es todo.

BUZZ         Emmm… puedo superar esto. ¡Oh, soy un fraude!
WOODY        Shusss… ¡Buzz, calla!
BUZZ         ¡Un fraude! Ni siquiera puedo volar hacia hasta esa ventana, pero
             el sombrero me quedaba bien, dime que el sombrero me quedaba
             bien… el delantal es excesivo, no es mi color pero es tan mono…
WOODY        ¡Claro! Por la ventana, Buzz ¡Eres un genio! ¡Vamos, vamos! Por
             aquí.
BUZZ         Años de prácticas en la academia perdidos…

SR. PATATA   Jejeje, B3
HAMM         Agua, G6
SR. PATATA   ¡Ah, lo has hundido!
HAMM         (RISAS)
SR. PATATA   Has estado espiando.
HAMM         ¡Oh! Deja de quejarte. Y paga. ¡No, no, la oreja no, dame la nariz!
SR. PATATA   ¿Qué tal a tres de cinco?
WOODY        ¡Eh, chicos, chicos, eh!
SR. PATATA   Por todos los rompecabezas ¡Es Woody!
HAMM         Está en el dormitorio del psicópata.
WOODY        ¡Jojojo hola!
HAMM         ¡Muchachos, es Woody!
BO           ¿Woody?
REX          ¿Bromeas?
SLINKY       ¡Woody!

WOODY        (RISAS) ¡Saldremos de aquí, Buzz! ¿Buzz?
BUZZ         (GESTOS)
REX          ¡Eh, mirad!
BO           ¡Woody!
SLINKY       Jejeje.
WOODY        ¡Ah, cuánto me alegro de veros, chicos!
SLINKY       Sabía que volverías, Woody.
BO           ¿Qué estás haciendo ahí?
WOODY        Es una larga historia, Bo, os lo explicaré luego. ¡Tomad, coged
             esto!
                                                                             27
SLINKY       ¡Uoouuu, ya la tengo!
BO           (GESTO)
REX          Ya la tiene, Woody.
WOODY        Buen trabajo, Slink. Ahora atadla a algo.

SR. PATATA   Espera, espera, espera… Tengo una idea. No hacerlo…
SLINKY       ¡Eh!
BO           ¡Señor Patata!
SR. PATATA   ¿Os habéis vuelto estúpidos esta mañana? ¿Habéis olvidado lo
             que le hizo a Buzz? ¿Queréis dejar que vuelva aquí?
WOODY        No, no, no… estás… jiji… estás equivocado, Señor Patata. Buzz
             está bien, está aquí, conmigo.
SR. PATATA   ¡Eres un embustero!
WOODY        No, no lo soy. Vamos, Buzz, ven aquí y diles a nuestros amigos
             los juguetes que no estás muerto.

WOODY        (GESTOS) Un segundo… Buzz ¿Quieres venir y echarme una
             mano? Ja, ja, ja, muy gracioso, Buzz. ¡Esto va en serio!
REX          ¡Eh, a dónde has ido!
SR. PATATA   Es mentira, Buzz no está ahí.
WOODY        ¡Ah, hola, Buzz! ¿Por qué no saludas a los amigos que están ahí?
             – ¡Hola chicos, hasta el infinito y más allá!
REX          ¡Eh, mirad, es Buzz!
WOODY        ¡Sí! Eh, Buzz, enseñemos a los chicos nuestro saludo secreto de
             grandes amigos ¡Chócala, tío!
HAMM         Aquí hay gato encerrado…
WOODY        ¿Lo veis? Ahora somos amigos ¿verdad, Buzz? – Desde luego,
             dame un abrazo… - ¡Oh, vaya, yo también te quiero!

SLINKY       ¿Veis? Sí que es Buzz… Vuelve a darme las bombillas, señor
             Patata.
SR. PATATA   Espera un momento… ¿Qué estás tramando?
WOODY        ¡Nada!
SR. PATATA   (GESTO)
SLINKY       (GESTO
                                                                          28
BOO          (GESTO)
REX          (GESTO)
HAMM         ¡Oh, eso es repugnante!
SR. PATATA   ¡Asesino!
WOODY        ¡No! No, no, no…
SR. PATATA   ¡Perro repugnante!
WOODY        ¡No es lo que creéis, lo juro!
SR. PATATA   ¡Ahórratelo para el jurado! Espero que Sid te arranque la caja de
             voz… ¡Monstruo!
WOODY        No, no… ¡No os vayáis, no os vayáis! Te… tenéis que ayudarnos,
             por favor. ¡No sabéis lo que es esto…!
SR. PATATA   ¡Venga, vámonos de aquí!
HAMM         Vuelvan a sus vidas, ciudadanos, se acabó la función.
WOODY        (GESTO)… ¡volved! Slink ¡Slink, por favor! ¡Por favor,
             escúchame! ¡No, no… vuelve! Slink-y.

WOODY        ¡Buzz! ¡Marchaos, monstruos asquerosos! ¡Ah! ¡Muy bien, atrás,
             atrás, caníbales, no! Aún está vivo y no os lo vais a comer,
             monstruos. (GESTOS). ¡Eh, te han arreglado! Pero… Si son
             caníbales, les vimos comerse a los otros juguetes. Eh… lo siento,
             eh… pensaba que ibais (RÍE) en fin… es mi amigo. ¡Eh, esperad,
             esperad! ¿Qué pasa?

MADRE        ¿Sid?
SID          Ahora no, mamá, estoy ocupado.
WOODY        ¡Sid! ¡Buzz, vamos, arriba, usa las piernas! ¡Bien, que Sid te
             machaque, pero a mí no me culpes!
SID          ¡Llegó, por fin ha llegado! (GESTOS). El más grande,
             extremadamente peligroso.
             Mantener fuera del alcance de los niños. ¿Qué voy a hacer
             explotar…? ¡Vaya! ¿Dónde está ese vaquero blandengue? ¡Si!
             Siempre he querido poner un hombre del espacio en órbita.
             (GESTOS) ¡Sí! ¡Oh, no!

SID ¡Oh, vaya! Sid Philips informando: el lanzamiento del cohete ha sido retrasado
debido a condiciones meteorológicas adversas. Pronóstico para mañana: soleado.
(GESTO) ¡Dulces sueños…!
MADRE            He buscado por todas partes, cariño, pero sólo he encontrado tu
                 sombrero.
ANDY             ¿Y si nos los dejamos olvidados?
MADRE            ¡Oh! no te preocupes, cariño. Seguro que encontramos a Woody
                 y a Buzz antes de salir mañana.

REX               (GESTOS) ¡Necesito aire!
SR. PATATA        ¿Quieres dejar de moverte?
REX               ¡Lo siento, lo siento! Es que me pongo muy nervioso antes de
                  viajar.
SR. PATATA        Mira que acabar contigo como compañero de mudanza…
REX               Los demás ya se habían elegido.
BO                ¡Oh, Woody! Si pudieras ver cómo te echa de menos Andy…

WOODY             (GESTOS) ¡Eh, Buzz! ¡Eh, ven y aparta esta caja de herramientas
                  de encima! ¡Oh, vamos Buzz! Buzz, no puedo hacer esto sin ti,
                  necesito tu ayuda.
BUZZ              No puedo. No puedo ayudar a nadie…
WOODY             ¡Claro que puedes, Buzz! Puedes sacarme que aquí. Te quitaré
                  ese cohete y nos largaremos a casa de Andy.
BUZZ              Casa de Andy, casa de Sid ¿Qué diferencia hay?
WOODY             ¡Oh, Buzz! Has tenido una caída muy fuerte, no debes pensar con
                  claridad.

BUZZ              No, Woody. Por primera vez, estoy pensando con claridad. Tú
                  tenías razón, no soy un guardián espacial. Sólo soy un juguete,
                  un pequeño e insignificante juguete.
WOODY             ¡Oh, eh, un momento! Ser un juguete es mucho mejor que ser un
                  guardián espacial.
BUZZ              ¡Sí, ya!
WOODY      No, en serio. Mira, en esa casa hay un chico que cree que eres el
           mejor. Y no es porque seas un guardián espacial, amigo. Es
           porque eres un juguete, eres su juguete.
BUZZ       Pero ¿Por qué iba a quererme Andy?

WOODY      ¿Por qué iba a quererte Andy? Pero mírate, eres un Buzz
           Lightyear. Cualquier juguete daría sus partes móviles por ser
           como tú. Tienes alas, brillas en la oscuridad, hablas, tu escafandra
           hace ese ruidito tan, tan espectacular. Eres un juguete guay. A
           decir verdad, eres demasiado guay. En cambio yo, ya me dirás
           qué posibilidades tiene un juguete como yo frente a un muñeco
           de acción como tú. Lo único que puedo hacer es: hay una
           serpiente en mi bota. ¿Por qué iba a querer Andy jugar conmigo
           teniéndote a ti? Soy yo quién debería estar atado a ese cohete.

WOODY      Escucha, Buzz. Olvídate de mí, deberías salir de aquí mientras
           puedas. (GESTOS) ¡Buzz! ¿Qué estás haciendo? Creía que…
BUZZ       ¡Vamos, Sheriff! En esa casa hay un niño que nos necesita, voy
           a sacarte de ahí. (GESTOS)
WOODY      ¡Sí, señor! Vamos Buzz, podemos hacerlo... (GESTOS)
BUZZ       ¡Woody! Es el camión de mudanzas.
WOODY      Tenemos que salir de aquí enseguida. ¡Vamos, Buzz! Eso es…
           ¡Buzz, eh, ya he salido!
BUZZ       Ya casi está…
SID        Quiero montar en el pony…

BUZZ       ¡Woody, Woody! ¿Estás bien?
WOODY      No, estoy bien, muy bien.
SID        (GESTOS) ¡Ah, sí! ¡Es la hora del despegue… uuuh! ¡Hasta el
           infinito y más allá! (GESTOS)
WOODY      (GESTOS) ¡Al suelo, al suelo! Bueno ¿Qué hago ahora? Vamos,
           Woody, piensa… ¡Chicos! ¡No, no, no, no, no… esperad!
           Esperad, escuchad, por favor. Ahí abajo hay un buen juguete, y
           va a volar en pedazos dentro de unos minutos. Y todo por mi
           culpa, tenemos que salvarle. Y necesito vuestra ayuda.

WOODY      ¡Por favor! Es mi amigo y es el único que tengo. Bien, ya sé qué
           hacer. Romperemos algunas reglas. Pero si sale bien, nos ayudará
           a todos.
ANDY       (GESTO)
SID        Sid a control de la misión. Adelante, control. Construimos una
           plataforma de lanzamiento.
WOODY      Muy bien, escuchad. Necesito al chico bomba aquí. A patito aquí.
           Piernas, tú con patito. Rollerball y yo esperaremos a la señal
           ¿Está claro? Muy bien, en marcha…

WOODY      ¡Dad cuerda a la rana! Esperad a la señal… ¡Ya! Bien, andando.
           ¡Ahora!
HANNAH     ¡Ya voy, ya voy! ¡Ah, Scud! Perro tonto…
WOODY      ¡Hacia atrás!

SID        Control de la misión ¿está completa la construcción de la
           plataforma? Alfa Roger, el cohete ha sido asegurado al cable
           guía. Estamos dispuestos para el despegue. La cuenta atrás
           comenzará dentro de un momento. Estén a la espera.
WOODY      Adelante…
SID        ¡Eh, mamá! ¿Dónde están las cerillas? Oh, espera, están aquí. No
           importa.
BUZZ       ¡Woody, bien! Suéltame de aquí
SID        (CANTURREA)
WOODY      Shhh, tranquilo… todo está bajo control…

BUZZ       Woody ¿Qué estás haciendo?
SID        Listos, todos los sistemas encendidos. Solicito permiso para el
           lanzamiento. ¡Eh! ¿Cómo has llegado hasta aquí? ¡Ah, bueno! Tú
           y yo haremos una barbacoa luego… jejeje.
           Houston ¿Permiso para el lanzamiento? (GESTO). Roger,
           permiso concedido, confirmado en “T” menos diez segundos. YT
           contando… 10, 9, 8, 7, 6, 5, 4, 3, 2, 1.

WOODY      Las manos bien altas, hacia el cielo.
SID        ¿Eh?
WOODY      Esta ciudad no es lo bastante grande para los dos.
SID        ¿Qué?
WOODY      Alguien ha envenenado el abrevadero.
SID        ¡Está roto!
WOODY      ¿A quién llamas roto? Bruto.
SID        ¡Ah!
WOODY      ¡Sí! Te estoy hablando a ti, Sid Philips.
SID        (GESTOS)
WOODY      A nosotros no nos gusta que nos hagas explotar, Sid. Ni que nos
           machaques, ni que nos hagas pedazos.
SID        ¿Nosotros?
WOODY      ¡Exacto! A tus juguetes.

MUÑECA     Mamá, mamá, mamá, mamá.
SID        ¡Ah! (GESTOS)
WOODY      De ahora en adelante, debes cuidar bien tus juguetes. Porque si
           no lo haces, lo averiguaremos. Los juguetes podemos verlo todo.
           Así que, juega limpio.
SID        ¡AH!
WOODY      ¡Ahhh, lo logramos, lo logramos, jajajaja, bien!

SID        ¡Los juguetes, los juguetes están vivos! ¡Ah! Linda muñeca…
           ¡Ah! (GESTOS)
HANNAH     ¡Woo! ¿Qué te pasa? Si ¿No quieres jugar con Sally?

WOODY      ¡Buen trabajo, amigos! ¡Sí señor! Salir del suelo ha sido un golpe
           de genio.
BUZZ       Woody. Gracias.
MADRE      Digamos todos: ¡Adiós casa!
BUZZ       ¡Woody, el coche!
ANDY       ¡Adiós casa!
BUZZ         (GESTOS)
WOODY        Nos vamos, ¡Gracias chicos! ¡Rápido!
BUZZ         (GESTOS) ¡Ve tú, ya te alcanzaré!
AMBOS        (GESTOS)
BUZZ         ¡Vamos! Vamos…
WOODY        (GESTOS)
BUZZ         ¡Puedes logarlo, Woody!
WOODY        (GESTOS) ¡Ya lo tengo! ¡Woo! ¡Lo logré!
BUZZ         ¿Eh?

WOODY        ¡Ahhh! Largo de aquí, perro estúpido ¡Suelta, suelta!
BUZZ         ¡Aguanta Woody!
WOODY        No puedo más… Cuida de Andy por mí…
BUZZ         ¡No!
WOODY        ¡Buzz! (GESTOS)

SLINKY       ¡Ay!
REX          ¿Ya hemos llegado?
SR. PATATA   ¡Woody!
HAMM         ¡Woody!
REZ          ¡Woody!
WOODY        ¡Ah!
SLINKY       ¿Cómo hasta…?
SR. PATATA   ¿Qué ha pasado?
HAMM         ¡Ohhh no! ¿Qué ocurre? ¿Qué es? ¿Qué se lleva?
WOODY        ¡Aha!
SR: PATATA   ¡Eh! ¿Qué está haciendo?
TODOS        (GESTOS)
REX          ¡Ya vuelve a armarla!

WOODY        ¡Jajaja!
SR. PATATA   ¡Cogedle!
TODOS        (GESTOS)
HAMM         ¡Se está escapando!
SR. PATATA   ¡Cogedle! ¡A la carga!
TODOS        (GESTOS)
WOODY        ¡No! No, no, no, no… ¡Esperad!
             (GESTOS DE ACCIÓN)
HAMM         ¡Bomba va!

BUZZ         ¡Ahhh!
GENTE        ¡Qué es esto! ¡Qué sucede! ¡Vamos, date prisa! ¡Arranque!
BUZZ         ¡Ufff!
WOODY        No, esperad, no lo entendéis. Buzz está cerca, tenemos que
             ayudarle.
SR. PATATA   Uy…
WOODY        ¡Basta!
SR. PATATA   ¡Echadle por la borda!
WOODY        No, no, no, no… ¡Esperad!
HAMM         ¡Hurra!
SR: PATATA   ¡Hasta nunca, Woody!
WOODY        Ah… ¡Ahhh!

BUZZ         ¡Whoaaah! ¡Woody!
WOODY        Oh, ah… vaya, gracias por el paseo.
BUZZ         ¡Cuidado!
WOODY        ¡Ahhh! Y ahora atrapemos ese camión.
JUGUETES     (GESTOS)
LENNY        ¡Chicos, chicos! Woody va montado sobre RC
BO           ¿Qué?
LENNY        Y Buzz va con el…
SLINKY       Oh…
REX          ¿Qué?

BO           ¡Es Buzz, Woody decía la verdad!
REX          ¡Uhh!
SLINKY       ¡Qué hemos hecho!
REX          Ahora me siento culpable…
WOODY        ¡Ya casi estamos!
BO           ¡Rocky, la rampa!
ROCKY        (GESTOS)
BUZZ         ¡Cuidado!

SLINKY       ¡Rápido! Sujetad mi cola. ¡Ah!
SR. PATATA   ¡Buen chico, Slink! ¡Subid!
SLINKY       Woody…
WOODY        Acelera… ¡Acelera!
BUZZ         Las pilas… ¡Se están agotando!
SLINKY       (GESTOS)

SLINKY       ¡Ahhh!
WOODY        (GESTOS)
SLINKY       No podré aguantar más tiempo…
WOODY        ¡Slink, aguanta!
SLINKY       ¡Ahhh!
ROCKY        ¡Ohh!

WOODY        ¡Genial!
BUZZ         ¡Woody, el cohete!
WOODY        ¡La cerilla, sí! Gracias, Sid. (GESTOS) ¡Nooo! No, no, no, no…
             no… etc.
BUZZ         Woody, ¿Qué estás haciendo?
WOODY        No te muevas, Buzz.
             (GESTOS)
BUZZ         ¡Lo lograste! Siguiente para… ¡Andy!
WOODY        Un momento… he encendido el cohete… ¡Los cohetes explotan!

SLINKY       ¡Ahh! Debería haber aguantado más tiempo…
LENNY        ¡Mirad, mirad! Son Woody y Buzz viniendo muy deprisa…
REX          ¡Woody!
SR. PATATA   ¡Poneos a cubierto!
WOODY        ¡Ahhh, esta es la parte en la que explotamos!
BUZZ         Hoy no…
TAKE 107
01:11:14
WOODY        ¡Ahhh! ¡Eh, Buzz! ¡Estás volando!
BUZZ         Esto no es volar, es caer con estilo.
WOODY        ¡Ohhh, Jajaja! ¡Hasta el infinito y más allá! ¡Eh, Buzz! Nos
             hemos pasado el camión.
BUZZ         No vamos hacia el camión…

ANDY         ¡Eh, bien!
MADRE        ¿Qué… qué pasa?
ANDY         ¡Woody, Buzz!
MADRE        ¡Los has encontrado! ¿Dónde estaban?
ANDY         ¡Aquí, en el coche!
MADRE        ¿Lo ves, qué te había dicho? Justo donde los dejaste.

ANDY         ¿Cuál puedo abrir primero?
MADRE        Deja que Molly abra uno.
SARGENTO     Incienso, aquí mirra… responda incienso…
HAMM         ¡Eh, atención todos! Es la hora del show.
REX          ¡Oh, es la hora!
WOODY        ¡Ahhh, ohhh! ¿No hay un modo menos doloroso de llamarme la
             atención?
BO           Feliz navidad, Sheriff…
WOODY        Vaya… ¿Eso no es muérdago?
BO           (GESTOS)

REX          Puede que Andy reciba otro dinosaurio, un herbívoro, así yo
             podría hacer de… de depredador dominante… Jajaja
BUZZ         ¡Silencio, callaos!
SARGENTO     El primer regalo de Molly es un… una Sra. Patata, repito, una
             Sra. Patata.
HAMM         ¡Felicidades tubérculo!
SR. PATATA   Vaya, será mejor que me afeite.
REX          (GESTO)

TAKE 111
01:12:56
SARGENTO   Adelante incienso, ahora Andy está abriendo su primer regalo.
           Esperad… bueno… todavía… parece que ahora… ¡Sí! Una caja
           grande… es… es…
WOODY      ¡Buzz! Buzz Lightyear, no estarás preocupado ¿Verdad?
BUZZ       ¿Yo? No, no, no, no, no, no… ¿y tú?
WOODY      ¡Ah, jaja! Dime, Buzz… ¿Qué podrían regalar a Andy que fuera
           peor que tú?
ANDY       ¡Oh! ¿Qué es? ¿Qué es? ¡Whoa, un perrito!
WOODY      (GESTO)
BUZZ       (GESTO)`)
  .then((e) => console.log(`Código finalizado, ${e} mensajes enviados`))
  .catch(console.error);

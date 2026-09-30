/* =============================================================
   config.js — unico punto di configurazione del sito.
   ============================================================= */

window.SITE = {
  nome: "Dott.ssa Sanzeni Valentina",
  ruolo: "Biologa Nutrizionista",
  citta: "Cremona",
  albo: "Ordine Nazionale dei Biologi — Sez. A, rif. albo AA_101170",
  piva: "01850000199",

  contatti: {
    telefono: "344 6369631",
    telefonoIntl: "+393446369631", // usato per tel: e WhatsApp
    email: "valentinasanzeni.nutrizionista@gmail.com",
    whatsappMessaggio:
      "Buongiorno Dott.ssa Sanzeni, vorrei informazioni per una visita nutrizionale.",
  },

  studio: {
    nome: "Studio di Nutrizione",
    via: "Via Giuseppina, 21",
    cap: "26100",
    citta: "Cremona",
    provincia: "CR",
    // Usata dalla mappa e dal pulsante "Apri in Google Maps"
    mapsQuery: "Via Giuseppina, 21, 26100 Cremona CR, Italia",
    orari: "Su appuntamento, dal lunedì al venerdì",
  },

  social: {
    // Lascia la stringa vuota per nascondere l'icona corrispondente.
    facebook: "https://www.facebook.com/valentina.sanzeni/",
    instagram: "https://www.instagram.com/valentinasanzeni.nutrizionista/",
    linkedin: "https://www.linkedin.com/in/valentina-sanzeni/",
  },

  /* Fotografie. Metti i file in assets/img/ e indica qui il percorso.
     Finché una voce resta vuota viene mostrato uno sfondo decorativo
     al posto della foto (nessun'immagine rotta, nessun errore 404). */
  immagini: {
    hero: "", // sfondo della homepage (nessuna foto: resta lo sfondo decorativo)
    ritratto: "assets/img/valentina.png", // homepage, sezione "Ciao! Sono la dott.ssa..."
    studio: "assets/img/valentina-about-me.png", // pagina "Su di me"
    studio2: "assets/img/valentina-studio.png", // pagina "Contatti"
  },

  form: {
    /* Il sito è statico e non può inviare email da solo: le richieste passano
       da Web3Forms, che le recapita alla casella Gmail dello studio.

       `accessKey` è la chiave pubblica di Web3Forms. È pensata per stare nel
       codice della pagina ed è quindi VISIBILE a chiunque apra il sito: non è
       una password e non dà accesso all'account, serve solo a indirizzare i
       messaggi alla casella giusta. Chi la trova può però inviare messaggi
       attraverso il modulo: se dovessero arrivare spam, la chiave si rigenera
       dalla dashboard di Web3Forms e si sostituisce qui.

       QUI NON VANNO MAI chiavi private, password o token di altri servizi. */
    endpoint: "https://api.web3forms.com/submit",
    accessKey: "c72628da-b263-46aa-bfbc-5a348a60a41a",

    // Oggetto dell'email che arriva nella casella dello studio
    oggetto: "‼️ Nuova richiesta di consulenza dal sito!",

    /* Prefisso internazionale preselezionato nel campo telefono
       e paesi mostrati in cima all'elenco. */
    paesePredefinito: "it",
    paesiPreferiti: ["it", "ch", "de"],
  },

  // Anno mostrato nel footer
  get anno() {
    return new Date().getFullYear();
  },
};

window.SITE.contatti.whatsappUrl =
  "https://wa.me/" +
  window.SITE.contatti.telefonoIntl.replace(/\D/g, "") +
  "?text=" +
  encodeURIComponent(window.SITE.contatti.whatsappMessaggio);

window.SITE.studio.indirizzoCompleto =
  window.SITE.studio.via +
  ", " +
  window.SITE.studio.cap +
  " " +
  window.SITE.studio.citta +
  " (" +
  window.SITE.studio.provincia +
  ")";

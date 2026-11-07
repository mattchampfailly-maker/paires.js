const paires = [
  // Nourriture et boissons
  ["café", "thé"], ["lait", "crème"], ["beurre", "margarine"], ["pain", "brioche"],
  ["croissant", "pain au chocolat"], ["pizza", "quiche"], ["pâtes", "riz"], ["frites", "chips"],
  ["hamburger", "sandwich"], ["fromage", "yaourt"], ["chocolat", "caramel"], ["miel", "confiture"],
  ["pomme", "poire"], ["orange", "mandarine"], ["fraise", "framboise"], ["citron", "pamplemousse"],
  ["banane", "mangue"], ["tomate", "poivron"], ["carotte", "radis"], ["oignon", "ail"],
  ["pomme de terre", "patate douce"], ["salade", "épinard"], ["soupe", "bouillon"], ["steak", "escalope"],
  ["jambon", "saucisson"], ["saumon", "thon"], ["crevette", "homard"], ["œuf", "omelette"],
  ["gâteau", "tarte"], ["glace", "sorbet"], ["bonbon", "sucette"], ["crêpe", "gaufre"],
  ["coca", "limonade"], ["jus d'orange", "jus de pomme"], ["bière", "cidre"], ["vin", "champagne"],
  ["eau plate", "eau gazeuse"], ["sucre", "sel"], ["poivre", "paprika"], ["ketchup", "mayonnaise"],
  ["moutarde", "vinaigre"], ["kebab", "tacos"], ["sushi", "maki"], ["céréales", "muesli"],
  ["biscuit", "cookie"], ["noix", "noisette"], ["amande", "cacahuète"], ["raisin", "cerise"],
  ["pastèque", "melon"], ["fondue", "raclette"],

  // Animaux
  ["chien", "loup"], ["chat", "tigre"], ["lion", "léopard"], ["cheval", "âne"],
  ["vache", "taureau"], ["mouton", "chèvre"], ["cochon", "sanglier"], ["poule", "canard"],
  ["dinde", "oie"], ["lapin", "lièvre"], ["souris", "rat"], ["hamster", "cochon d'inde"],
  ["renard", "blaireau"], ["ours", "panda"], ["singe", "gorille"], ["éléphant", "rhinocéros"],
  ["girafe", "zèbre"], ["crocodile", "alligator"], ["serpent", "lézard"], ["grenouille", "crapaud"],
  ["tortue", "escargot"], ["requin", "dauphin"], ["baleine", "orque"], ["poisson rouge", "carpe"],
  ["pieuvre", "calamar"], ["méduse", "étoile de mer"], ["aigle", "faucon"], ["hibou", "chouette"],
  ["pigeon", "corbeau"], ["perroquet", "perruche"], ["cigogne", "héron"], ["abeille", "guêpe"],
  ["mouche", "moustique"], ["papillon", "libellule"], ["fourmi", "termite"], ["araignée", "scorpion"],
  ["coccinelle", "scarabée"], ["kangourou", "koala"], ["pingouin", "manchot"], ["phoque", "otarie"],

  // Métiers
  ["médecin", "infirmier"], ["dentiste", "pharmacien"], ["professeur", "instituteur"], ["policier", "gendarme"],
  ["pompier", "ambulancier"], ["avocat", "juge"], ["boulanger", "pâtissier"], ["boucher", "charcutier"],
  ["cuisinier", "serveur"], ["coiffeur", "barbier"], ["plombier", "électricien"], ["maçon", "charpentier"],
  ["peintre", "décorateur"], ["facteur", "livreur"], ["pilote", "hôtesse de l'air"], ["chauffeur de bus", "chauffeur de taxi"],
  ["agriculteur", "jardinier"], ["pêcheur", "marin"], ["soldat", "espion"], ["journaliste", "présentateur"],
  ["acteur", "chanteur"], ["footballeur", "rugbyman"], ["banquier", "comptable"], ["vétérinaire", "dresseur"],
  ["architecte", "ingénieur"], ["informaticien", "hacker"], ["mécanicien", "garagiste"], ["caissier", "vendeur"],
  ["écrivain", "poète"], ["photographe", "cameraman"],

  // Lieux
  ["plage", "piscine"], ["mer", "océan"], ["lac", "étang"], ["rivière", "fleuve"],
  ["montagne", "colline"], ["forêt", "jungle"], ["désert", "savane"], ["île", "presqu'île"],
  ["village", "ville"], ["château", "palais"], ["église", "cathédrale"], ["musée", "galerie"],
  ["cinéma", "théâtre"], ["bibliothèque", "librairie"], ["supermarché", "épicerie"], ["boulangerie", "pâtisserie"],
  ["hôpital", "clinique"], ["école", "lycée"], ["université", "collège"], ["gare", "aéroport"],
  ["port", "quai"], ["stade", "gymnase"], ["parc", "jardin"], ["zoo", "cirque"],
  ["camping", "hôtel"], ["restaurant", "cafétéria"], ["banque", "poste"], ["mairie", "préfecture"],
  ["prison", "commissariat"], ["ferme", "ranch"],

  // Objets de la maison
  ["canapé", "fauteuil"], ["table", "bureau"], ["chaise", "tabouret"], ["lit", "hamac"],
  ["oreiller", "coussin"], ["couette", "couverture"], ["armoire", "commode"], ["miroir", "vitre"],
  ["lampe", "bougie"], ["frigo", "congélateur"], ["four", "micro-ondes"], ["casserole", "poêle"],
  ["fourchette", "cuillère"], ["couteau", "ciseaux"], ["assiette", "bol"], ["verre", "tasse"],
  ["bouteille", "carafe"], ["serviette", "torchon"], ["savon", "shampoing"], ["brosse à dents", "dentifrice"],
  ["peigne", "brosse à cheveux"], ["rideau", "store"], ["tapis", "moquette"], ["balai", "aspirateur"],
  ["seau", "bassine"], ["clé", "cadenas"], ["porte", "fenêtre"], ["escalier", "ascenseur"],
  ["toit", "grenier"], ["cheminée", "radiateur"],

  // Vêtements et accessoires
  ["pull", "gilet"], ["veste", "manteau"], ["t-shirt", "chemise"], ["jean", "pantalon"],
  ["short", "bermuda"], ["jupe", "robe"], ["chaussettes", "collants"], ["baskets", "bottes"],
  ["sandales", "tongs"], ["casquette", "bonnet"], ["écharpe", "foulard"], ["gants", "moufles"],
  ["ceinture", "bretelles"], ["cravate", "nœud papillon"], ["lunettes", "lentilles"], ["montre", "bracelet"],
  ["bague", "collier"], ["sac à dos", "valise"], ["parapluie", "imperméable"], ["pyjama", "peignoir"],

  // Transports
  ["voiture", "camion"], ["moto", "scooter"], ["vélo", "trottinette"], ["bus", "tramway"],
  ["train", "métro"], ["avion", "hélicoptère"], ["bateau", "voilier"], ["taxi", "covoiturage"],
  ["autoroute", "nationale"], ["feu rouge", "stop"], ["essence", "diesel"], ["parking", "garage"],
  ["péage", "radar"], ["fusée", "satellite"], ["sous-marin", "paquebot"], ["roller", "skateboard"],
  ["tracteur", "bulldozer"], ["caravane", "camping-car"], ["ski", "snowboard"], ["traîneau", "luge"],

  // Sports et loisirs
  ["football", "rugby"], ["tennis", "badminton"], ["basket", "handball"], ["volley", "water-polo"],
  ["natation", "plongée"], ["course", "marathon"], ["boxe", "judo"], ["escrime", "tir à l'arc"],
  ["golf", "pétanque"], ["échecs", "dames"], ["cartes", "dés"], ["monopoly", "cluedo"],
  ["puzzle", "mots croisés"], ["guitare", "violon"], ["piano", "orgue"], ["batterie", "tambour"],
  ["flûte", "clarinette"], ["trompette", "trombone"], ["concert", "festival"], ["film", "série"],
  ["roman", "bande dessinée"], ["journal", "magazine"], ["peinture", "dessin"], ["danse", "gym"],
  ["pêche", "chasse"], ["randonnée", "escalade"], ["yoga", "pilates"], ["musculation", "crossfit"],
  ["pique-nique", "barbecue"], ["karaoké", "disco"],

  // Technologie
  ["téléphone", "tablette"], ["ordinateur", "console"], ["clavier", "manette"], ["écran", "télévision"],
  ["casque", "enceinte"], ["wifi", "bluetooth"], ["email", "sms"], ["youtube", "twitch"],
  ["instagram", "snapchat"], ["facebook", "linkedin"], ["google", "wikipédia"], ["mot de passe", "code pin"],
  ["imprimante", "scanner"], ["clé usb", "disque dur"], ["appareil photo", "caméra"], ["radio", "podcast"],
  ["pile", "chargeur"], ["robot", "drone"], ["netflix", "prime video"], ["jeu vidéo", "jeu de société"],

  // Nature, météo, fêtes, matières
  ["pluie", "neige"], ["orage", "tempête"], ["brouillard", "nuage"], ["soleil", "lune"],
  ["étoile", "planète"], ["arc-en-ciel", "éclair"], ["vent", "tornade"], ["été", "printemps"],
  ["automne", "hiver"], ["matin", "soir"], ["anniversaire", "mariage"], ["noël", "pâques"],
  ["halloween", "carnaval"], ["vacances", "week-end"], ["feu", "fumée"], ["volcan", "geyser"],
  ["rose", "tulipe"], ["sapin", "chêne"], ["herbe", "mousse"], ["sable", "gravier"],
  ["pierre", "rocher"], ["or", "argent"], ["diamant", "rubis"], ["bois", "plastique"],
  ["papier", "carton"], ["laine", "coton"], ["cuir", "daim"], ["fer", "acier"],
  ["colle", "scotch"], ["stylo", "crayon"]
];

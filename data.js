/* =========================================================
   DONNÉES DU TOURNOI – Bâtons dans les roues
   ========================================================= */

const marioKartData = {
  pilots: [
    { name: "Mario", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/mario.png" },
    { name: "Luigi", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/luigi.png" },
    { name: "Peach", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/peach.png" },
    { name: "Daisy", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/daisy.png" },
    { name: "Harmonie", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/rosalina.png" },
    { name: "Mario Tanuki", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/tanouki_mario.png" },
    { name: "Peach Chat", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/cat_peach.png" },
    { name: "Birdo", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/birdo.png" },
    { name: "Yoshi", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/yoshi.png" },
    { name: "Toad", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/toad.png" },
    { name: "Koopa", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/koopa.png" },
    { name: "Maskass", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/shy_guy.png" },
    { name: "Lakitu", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/lakitu.png" },
    { name: "Toadette", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/toadette.png" },
    { name: "Roi Boo", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/king_boo.png" },
    { name: "Flora Piranha", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/petey_piranha.png" },
    { name: "Bébé Mario", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/baby_mario.png" },
    { name: "Bébé Luigi", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/baby_luigi.png" },
    { name: "Bébé Peach", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/baby_peach.png" },
    { name: "Bébé Daisy", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/baby_daisy.png" },
    { name: "Bébé Harmonie", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/baby_rosalina.png" },
    { name: "Mario de métal", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/metal_mario.png" },
    { name: "Peach d'or rose", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/pink_gold_peach.png" },
    { name: "Wiggler", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/wiggler.png" },
    { name: "Wario", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/wario.png" },
    { name: "Waluigi", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/waluigi.png" },
    { name: "Donky Kong", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/donkey_kong.png" },
    { name: "Bowser", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/bowser.png" },
    { name: "Skelerex", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/dry_bones.png" },
    { name: "Bowser Jr", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/bowser_jr.png" },
    { name: "Bowser Skelet", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/dry_bowser.png" },
    { name: "Kamek", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/kamek.png" },
    { name: "Lemmy", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/lemmy.png" },
    { name: "Larry", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/larry.png" },
    { name: "Wendy", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/wendy.png" },
    { name: "Ludwig", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/ludwig.png" },
    { name: "Iggy", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/iggy.png" },
    { name: "Roy", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/roy.png" },
    { name: "Morton", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/morton.png" },
    { name: "Peachette", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/peachette.png" },
    { name: "Fille Inkling", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/inkling_girl.png" },
    { name: "Villageois", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/villager_male.png" },
    { name: "Marie la P", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/isabelle.png" },
    { name: "Link", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/link.png" },
    { name: "Diddy Kong", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/diddy_kong.png" },
    { name: "Funky Kong", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/funky_kong.png" },
    { name: "Pauline", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/pauline.png" },
    { name: "Mii", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/characters/mii.png" }
  ],
  karts: [
    { name: "Kart standard", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/standard_kart.png" },
    { name: "Rétro", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/pipe_frame.png" },
    { name: "Proto 8", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/mach_8.png" },
    { name: "Nautomobile", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/steel_driver.png" },
    { name: "Chabriolet", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/cat_cruiser.png" },
    { name: "Mach-célère", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/circuit_special.png" },
    { name: "tubul R3", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/tri_speeder.png" },
    { name: "Beat-bolide", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/badwagon.png" },
    { name: "Cavalkart", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/prancer.png" },
    { name: "Paracoccinelly", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/biddybuggy.png" },
    { name: "Caravéloce", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/landship.png" },
    { name: "Sneakart", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/sneeker.png" },
    { name: "Propulsar", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/sports_coupe.png" },
    { name: "GLA", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/gla.png" },
    { name: "W25 Flèche d'argent", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/w_25_silver_arrow.png" },
    { name: "300 SL Roadster", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/300_sl_roadster.png" },
    { name: "Blue Falcon", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/blue_falcon.png" },
    { name: "Buggy Tanuki", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/tanooki_kart.png" },
    { name: "Intrépide", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/b_dasher.png" },
    { name: "Autorhino", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/streetle.png" },
    { name: "Magikart", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/p_wing.png" },
    { name: "Koopa-mobile", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/karts/koopa_clown.png" },
    { name: "Moto standard", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/bikes/standard_bike.png" },
    /*{ name: "Météore", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/bikes/comet.png" },*/
    /*{ name: "Sport GP", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/bikes/sport_bike.png" },*/
    { name: "Cybertrombe", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/bikes/the_duke.png" },
    { name: "Flamboyante", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/bikes/flame_rider.png" },
    { name: "Mécabécane", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/bikes/varmint.png" },
    { name: "Scootinette", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/bikes/mr_scooty.png" },
    /*{ name: "Epervier", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/bikes/jet_bike.png" },*/
    /*{ name: "Yoshimoto", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/bikes/yoshi_bike.png" },*/
    /*{ name: "Destrier de légende", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/bikes/master_cycle.png" },*/
    { name: "Destrier de légende 0.1", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/bikes/master_cycle_zero.png" },
    { name: "Scooter AC", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/bikes/city_tripper.png" },
    { name: "Quad standard", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/atvs/standard_atv.png" },
    { name: "Quad Wiggler", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/atvs/wild_wiggler.png" },
    { name: "Quad Nounours", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/atvs/teddy_buggy.png" },
    { name: "Malécycle", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/atvs/bone_rattler.png" },
    { name: "Kartoon", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/atvs/splat_buggy.png" },
    { name: "Missile tornade", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/atvs/inkstriker.png" }
  ],
  wheels: [
    { name: "Standard", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/standard.png" },
    { name: "Mastodonte", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/monster.png" },
    { name: "Roller", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/roller.png" },
    { name: "Classique", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/slim.png" },
    { name: "Lisse", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/slick.png" },
    { name: "Métal", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/metal.png" },
    { name: "Bouton", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/button.png" },
    { name: "Hors-piste", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/off_road.png" },
    { name: "Eponge", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/sponge.png" },
    { name: "Bois", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/wood.png" },
    { name: "Coussin", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/cushion.png" },
    { name: "Standard bleu", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/blue_standard.png" },
    { name: "Masto-flamme", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/hot_monster.png" },
    { name: "Roller azur", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/azure_roller.png" },
    { name: "Classique rouge", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/crimson_slim.png" },
    { name: "Cyber-lisse", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/cyber_slick.png" },
    { name: "Hors-piste rétro", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/retro_off_road.png" },
    { name: "GLA", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/gla_tires.png" },
    { name: "Triforce", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/triforce_tires.png" },
    { name: "Archéonique", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/ancient_tires.png" },
    { name: "Feuille", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/wheels/leaf_tires.png" }
  ],
  gliders: [
    { name: "Standard", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/gliders/super_glider.png" },
    { name: "Ailes nuages", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/gliders/cloud_glider.png" },
    { name: "Aile Wario", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/gliders/wario_wing.png" },
    { name: "Dendinaile", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/gliders/waddle_wing.png" },
    { name: "Ombrelle Peach", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/gliders/peach_parasol.png" },
    { name: "Parachute", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/gliders/parachute.png" },
    { name: "Parapente", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/gliders/parafoil.png" },
    { name: "Aile fleurie", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/gliders/flower_glider.png" },
    { name: "Bowser-volant", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/gliders/bowser_kite.png" },
    { name: "Planeur", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/gliders/plane_glider.png" },
    { name: "Parapente MKTV", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/gliders/mktv_parafoil.png" },
    { name: "Aile hylienne", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/gliders/hylian_kite.png" },
    { name: "Paravoile", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/gliders/paraglider.png" },
    { name: "Aile en papier", img: "https://seraphindalberto.yo.fr/MarioKart/img/mario_kart_8/vehicles/gliders/paper_glider.png" }
  ]
};

/* =========================================================
   LISTE DES CIRCUITS
   - "nitros"  : circuits de base (actifs)
   - "retros"  : circuits rétros (actifs)
   - "additionnels" les 4 payants
   - DLC non ajoutés
   ========================================================= */

const circuitsData = {
  nitros: [
    "Champidrome",
    "Parc Glougloop",
    "Piste aux délices",
    "Temple Thwomp",
    "Circuit Mario",
    "Promenade Toad",
    "Manoir Trempé",
    "Cascades Maskass",
    "Aéroport Azur",
    "Lagon Tourbillon",
    "Club Mario",
    "Descente Givrée",
    "Voie céleste",
    "Désert Toussec",
    "Château de Bowser",
    "Route Arc-en-ciel"
  ],
  retros: [
    "Wii Prairie Meuh Meuh",
    "GBA Circuit Mario",
    "DS Plage Cheep Cheep",
    /*"N64 Autoroute Toad",*/
    "GCN Désert Sec-Sec",
    "SNES Plaine Donut 3",
    "N64 Autodrome Royal",
    "3DS Forêt Tropicale DK",
    "DS Stade Wario",
    "GCN Royaume Sorbet",
    "3DS Piste Musicale",
    "N64 Vallée Yoshi",
    "DS Horloge Tic-Tac",
    "3DS Égout Piranha",
    "Wii Volcan Grondant",
    /*"N64 Route Arc-en-ciel"*/
  ],
  additionnels: [
    "GCN Circuit Yoshi",
    /*"Arène d'Excitebike",*/
    "Route du dragon",
    "Mute City",
    "Wii Mine Wario",
    "SNES Route Arc-en-ciel",
    "Station Glagla",
    "Circuit d'Hyrule",
    /*"GCN Parc Baby",*/
    "GBA Pays Fromage",
    "Passage Feuillage",
    /*"Animal Crossing",*/
    "3DS Koopapolis",
    "GBA Route Ruban",
    "Métro Turbo",
    "Big Blue"
  ]
};

/* Renvoie la liste des circuits réellement disponibles au tirage
   (uniquement les groupes NON commentés). */
function getAvailableCircuits() {
  return [
    ...(circuitsData.nitros || []),
    ...(circuitsData.retros || [])
    ...(circuitsData.additionnels || [])  
  ];
}

/* =========================================================
   LISTE DES MALUS
   - "single"  : un seul joueur peut l'avoir
   - "duo"     : doit concerner exactement 2 joueurs
   ========================================================= */

const malusData = {
  physique: [
    "Jouer la course avec un œil de pirate",
    "Jouer la course sur une jambe",
    "Jouer la course dans un miroir",
    "Taper sur la table toutes les 15 secondes",
    "Jouer assis par terre, en dessous de la télé",
    "Jouer avec un livre sur la tête",
    "Jouer la course avec des lunettes de soleil",
    "Jouer la course avec des lunettes de vue",
    "Jouer la course avec des lunettes de bourrés",
    "Interdiction de célébrer",
    "Interdiction de réagir (parler, crier, insulter, rage quit, etc.)",
    "Jouer la course avec des gants"
  ],
  ingame: [
    "Débuter la course avec 10 secondes de retard",
    "S'arrêter au tour 1 pendant 10 secondes",
    "Chaque ligne d'arrivée est un stop : il faut marquer l'arrêt",
    "Jouer la course sans activer de cadeau",
    "Interdiction de déraper"
  ],
  duo: [
    "Deux joueurs doivent jouer les deux bras enlacés"
  ]
};

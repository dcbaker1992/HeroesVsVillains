export class Characters {
    heroes: { marvel: any, dc: any } = {
        marvel: [
            {
                name: 'Spiderman',
                secretId: 'Peter Parker',
                location: 'New York City',
                powers: 'Strength, Agility, Spider Sense, web shooters, wall climbing,',
                img: './assets/marvel-heroes/spiderman.png'
            },
            {
                name: 'Iron Man',
                secretId: 'Tony Stark',
                location: 'New York City',
                powers: 'Rich, Suits of Armor, Genius, Repulsor Rays, Energy Shield',
                img: './assets/marvel-heroes/ironman.png'
            },
            {
                name: 'Thor Odinson',
                secretId: 'Thor Odinson God of Thunder',
                location: 'Asghard',
                powers: 'Superhuman strength, speed, durability and longevity Abilities via Mjolnir',
                img: './assets/marvel-heroes/thor.png'
            },
            {
                name: 'The Black Panther',
                secretId: 'TChalla',
                location: 'Wakanda',
                powers: 'Superhuman strength, endurance, speed, agility, reflexes, stamina and senses, martial arts',
                img: './assets/marvel-heroes/blackpanther.png'
            },
            {
                name: 'Black Widow',
                secretId: 'Natasha Romanoff',
                location: 'New York City ',
                powers: 'master in the covert arts of espionage, infiltration, and subterfuge, an expert martial artists, with exceptional agility and athletic ability',
                img: './assets/marvel-heroes/blackwidow.png'
            },
            {
                name: 'Hawkeye',
                secretId: 'Clint Barton',
                location: 'New York City',
                powers: 'archer and marksman Expert tactician, acrobat and hand-to-hand combatant',
                img: './assets/marvel-heroes/hawkeye.png'
            },
            {
                name: 'Hulk',
                secretId: 'Bruce Banner',
                location: 'New York City',
                powers: 'Superhuman Strength, Regenerative Healing Factor, Radiation Immunity, Rage, Bulletproof',
                img: './assets/marvel-heroes/hulk.png'
            },
            {
                name: 'The Scarlet Witch',
                secretId: 'Wanda Maximoff',
                location: 'New York City',
                powers: 'Psionics, Psionic Energy Manipulation, Telekinesis, Force-field Generation, Mental Manipulation',
                img: './assets/marvel-heroes/wanda.png'
            },
            {
                name: 'Captain America',
                secretId: 'Steve Rodgers',
                location: 'Brooklyn',
                powers: 'The Super-Soldier formula that he has metabolized has enhanced all of his bodily functions to the peak of human efficiency',
                img: './assets/marvel-heroes/captain.jpg'
            },
            {
                name: 'Vision',
                secretId: 'Jarvis',
                location: 'Avengers Tower',
                powers: 'Computer Brain, Superhuman Intelligence, Nanite Body, Flight, Mind Stone',
                img: './assets/marvel-heroes/vision.png'
            },
        ],
        dc: [
            {
                name: 'Batman',
                secretId: 'Bruce Wayne',
                location: 'Gotham City',
                powers: '	Genius Intelllect, Master Detective, Master Combatant, Master Weapons Specialist, Master of Stealth ',
                img: './assets/dc-heroes/batman.png'
            },
            {
                name: 'Wonder Woman',
                secretId: 'Diana Prince',
                location: 'Themyscira',
                powers: 'Godlike Super strength, speed, agility, reflexes, stamina, and endurance, Flight , Healing Factor',
                img: './assets/dc-heroes/wonderwoman.png'
            },
            {
                name: 'Flash',
                secretId: 'Barry Allen',
                location: 'Central City',
                powers: ' Ability to run at super-human velocities',
                img: './assets/dc-heroes/flash.png'
            },
            {
                name: 'Aquaman',
                secretId: 'Arthur Curry',
                location: 'Atlantis',
                powers: 'Hybrid Physiology,Strength,Amphibious Adaptation,Marine Telepathy,Hydrokinesis',
                img: './assets/dc-heroes/aquaman.png'
            },
            {
                name: 'Cyborg',
                secretId: 'Victor Stone',
                location: 'Atlantis',
                powers: 'Cybernetic Enhancement,Computer Interfacing, Superhuman strength, speed, stamina, and flight',
                img: './assets/dc-heroes/cyborg.png'
            },
            {
                name: 'Green Lantern',
                secretId: 'Hal Jordan',
                location: 'The Green House ',
                powers: 'Energy Manipulation, Willpower,Invisibility, Spatial Manipulation, Power Ring ',
                img: './assets/dc-heroes/greenlantern.png'
            },
            {
                name: 'Superman',
                secretId: 'Clark Kent',
                location: 'Crypton/Metropolis',
                powers: 'Super Speed, Super Strength, Super Ventriloquism, Vision, Hearing, Super Breath, Flight',
                img: './assets/dc-heroes/superman.png'
            },
            {
                name: 'Green Arrow',
                secretId: 'Oliver Queen',
                location: 'Star City',
                powers: 'Peak human physical and mental conditioning.Master martial artist and hand-to-hand combatant Master archer and marksman.Expert acrobat Utilizing high-tech equipment, armor, compound bow, and various types of specialty arrows',
                img: './assets/dc-heroes/greenarrow.png'
            },
            {
                name: 'Martian Manhunter',
                secretId: 'Jonn Jonzz',
                location: 'Mars',
                powers: 'supermartian strength, durability, flight, regeneration, shapeshifting, intangibility, invisibility, telepathy, telekinesis, extrasensory input, and heat vision.',
                img: './assets/dc-heroes/martian.png'
            },
        ]
    };
    villains: { marvel: any, dc: any } = {
        marvel: [
            {
                name: 'Thanos',
                secretId:'The Mad Titan',
                Location: 'Titan',
                powers:'Superhuman Strength, Superhuman Durability, Magic, Mysticism Black Arts, Immortality',
                nemesis:'The Avengers',
                img: './assets/marvel-villains/thanos.png'
            },
            {
                name: 'Loki',
                secretId:'God of Mischief',
                Location: 'Asghard',
                powers:'Astral projection, shape-shifting, hypnosis,energy blasts, telekinesis and teleportation',
                nemesis:'The Avengers/Thor',
                img: './assets/marvel-villains/loki.png'
            },
            {
                name: 'The Green Goblin',
                secretId:'Norman Osborn',
                Location: 'Brooklyn',
                powers:'Super human strength, Intelligence, Regeneration',
                nemesis:'Spiderman',
                img: './assets/marvel-villains/greengoblin.png'
            },
            {
                name: 'Venom',
                secretId:'Eddy Brock',
                Location: 'New York',
                powers:'Shape-shifting, Dimensional Aperture, Telepathic, Strength',
                nemesis:'Spiderman',
                img: './assets/marvel-villains/venom.png'
            },
            {
                name: 'Hela',
                secretId:'Goddess of Death',
                Location: 'Hel',
                powers:'Master Combatant, Sword Mastery, Hammer Mastery, Expert Tactician',
                nemesis:'Odin, Thor',
                img: './assets/marvel-villains/hela.png'
            },
            {
                name: 'Red Skull',
                secretId:'Johann Schmidt',
                Location: 'Vormir',
                powers:'Artificially Enhanced Physiology, Enhanced Intelligence, Enhanced Strength, Immortality',
                nemesis:'Captain America',
                img: './assets/marvel-villains/redskull.png'
            },
            {
                name: 'Ulton',
                secretId:'Created by Tony Stark using Mind Stone',
                Location: 'NYC',
                powers:'Robotic Physiology, Superhuman Speed, Tech-Assisted Telekinesis, Energy Blasts, Energy Blasts, Hive Mind System',
                nemesis:'The Avengers',
                img: './assets/marvel-villains/ultron.png'
            },
            {
                name: 'Killmonger',
                secretId:'NJadaka',
                Location: 'Wakanda',
                powers:'	Expert tactician Skilled hunter and tracker Skilled hand-to-hand combatant Enhanced strength, speed, agility, and durability Uses high-tech equipment and weapons, vibranium outfit',
                nemesis:'The Avengers',
                img: './assets/marvel-villains/killmonger.png'
            },
            {
                name: 'Doc Octopus',
                secretId:'Otto Octavius',
                Location: 'NYC',
                powers:'Brilliant engineer and inventor, Genius-level intellect, Superb strategist, Telepathic control over his mechanical arms ',
                nemesis:'Spiderman',
                img: './assets/marvel-villains/dococ.png'
            },
            {
                name: 'Magneto',
                secretId:'Erik Lehnsherr',
                Location: 'Germany',
                powers:'Magnetokinesis, Magnetic Force-Fields, Magnetic Armor, Electrokinesis',
                nemesis:'X-Men',
                img: './assets/marvel-villains/magneto.png'
            },
            
        ],
        dc: [
            {
                name: 'The Joker',
                secretId:'Jack Napier',
                Location: 'Gotham',
                powers:' "Comedic" weapons, "happy Gas", Chemistry, Genetics, and Nuclear Engineering',
                nemesis:'Batman',
                img: './assets/dc-villains/joker.png'
            },
            {
                name: 'Harley Quinn',
                secretId:'Harleen Quinzel',
                Location: 'Gotham',
                powers:' "Trained psychiatrist, Expert gymnast, Enhanced strength, durability, stamina, reflexes, and agility, Skilled hand-to-hand combatant and marksman, Genius level intellect',
                nemesis:'Batman',
                img: './assets/dc-villains/harleyquinn.png'
            },
            {
                name: 'Steppenwolf',
                secretId:'Steppenwolf',
                Location: 'Apokolips',
                powers:' Godlike Strength, Speed, Senses, Immortalilty, Reflexes, Stamina',
                nemesis:'The Justice League',
                img: './assets/dc-villains/steppenwolf.png'
            },
            {
                name: 'Bane',
                secretId:'Eduardo Dorrance',
                Location: 'Gotham',
                powers:'Genius-level tactician Skilled hand-to-hand combatant and martial artist Superhuman strength and physical attributes via the drug Venom',
                nemesis:'Batman',
                img: './assets/dc-villains/bane.png'
            },
            {
                name: 'Posion Ivy',
                secretId:'Pamela Isley',
                Location: 'Gotham',
                powers:'Toxic Immunity, Chlorokinesis, Pheromone Secretion, Toxic Generation',
                nemesis:'Batman',
                img: './assets/dc-villains/poisonivy.png'
            },
            {
                name: 'Two-Face',
                secretId:'Harvey Dent',
                Location: 'Gotham',
                powers:'Expertise in criminal law, criminology, and police procedures to devise his crimes',
                nemesis:'Batman',
                img: './assets/dc-villains/twoface.jpg'
            },
            {
                name: 'The Riddler',
                secretId:'Edward Nygma',
                Location: 'Gotham',
                powers:'Genius-Level Intelligence, Independently Wealthy, Escapologist, Expert Detective',
                nemesis:'Batman',
                img: './assets/dc-villains/riddler.jpg'
            },
            {
                name: 'Doomsday',
                secretId:'General Zod',
                Location: 'Krypton',
                powers:'Superhuman Regeneration, Energy Projection, Regeneration, Superhuman Strength ',
                nemesis:'Superman',
                img: './assets/dc-villains/doomsday.jpg'
            },
            {
                name: 'Darkseid',
                secretId:'Uxas',
                Location: 'Apokolips',
                powers:'Superhuman strength, stamina, and durability Genius-level intelligence Flight Telekinesis Telepathy Matter and energy manipulation Immortality Invulnerability Dimensional travel Omega Effect',
                nemesis:'Martian Manhunter',
                img: './assets/dc-villains/darkseid.png'
            },
            {
                name: 'Lex Luther',
                secretId: 'Alexander Joseph "Lex" Luthor, Jr.',
                location: 'Metropolis',
                powers: 'Genius-level intellect Criminal mastermind Proficient engineer with exceptional technological prowess',
                img: './assets/dc-heroes/lex.jpg'
            },
            
            
            
            
        ]
    }
}
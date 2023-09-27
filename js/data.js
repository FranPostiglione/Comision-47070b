
const juegos =[
    {
        "nombre": "Pac-Man",
        "genero": "Laberinto",
        "year": 1980,
        "empresa": "Namco"
    },
    {
        "nombre": "Donkey Kong",
        "genero": "Plataformas",
        "year": 1981,
        "empresa": "Nintendo"
    },
    {
        "nombre": "Donkey Kong Jr.",
        "genero": "Plataformas",
        "year": 1982,
        "empresa": "Nintendo"
    },
    {
        "nombre": "Mario Bros.",
        "genero": "Plataformas",
        "year": 1983,
        "empresa": "Nintendo"
    },
    {
        "nombre": "Tetris",
        "genero": "Puzzles",
        "year": 1984,
        "empresa": "Pajitnov"
    },
    {
        "nombre": "Super Mario Bros.",
        "genero": "Plataformas",
        "year": 1985,
        "empresa": "Nintendo"
    },
    {
        "nombre": "The Legend of Zelda",
        "genero": "Acción-Aventura",
        "year": 1986,
        "empresa": "Nintendo"
    },
    {
        "nombre": "Metroid",
        "genero": "Accion-Aventura",
        "year": 1987,
        "empresa": "Nintendo"
    },
    {
        "nombre": "Super Mario Bros 2",
        "genero": "Plataformas",
        "year": 1988,
        "empresa": "Nintendo"
    },
    {
        "nombre": "Tetris",
        "genero": "Puzzles",
        "year": 1989,
        "empresa": "Nintendo"
    },
    {
        "nombre": "Super Mario Bros 3",
        "genero": "Plataformas",
        "year": 1990,
        "empresa": "Nintendo"
    },
    {
        "nombre": "Street Fighter II",
        "genero": "Fighting Game",
        "year": 1991,
        "empresa": "Capcom"
    },
    {
        "nombre": "Mortal Kombat",
        "genero": "Fighting Game",
        "year": 1992,
        "empresa": "Midway Games"
    },
    {
        "nombre": "Doom",
        "genero": "fps",
        "year": 1993,
        "empresa": "id Software"
    },
    {
        "nombre": "Mario Bros.",
        "genero": "Accion-Aventura",
        "year": 1994,
        "empresa": "Nintendo"
    },
    {
        "nombre": "Chrono Triger",
        "genero": "RPG",
        "year": 1995,
        "empresa": "Square"
    },
    {
        "nombre": "Super Mario 64",
        "genero": "Plataformas",
        "year": 1996,
        "empresa": "Nintendo"
    },
    {
        "nombre": "Final Fantasy VII",
        "genero": "Plataformas",
        "year": 1997,
        "empresa": "Squaresoft"
    },
    {
        "nombre": "The Legend of Zelda: Ocarina of Time",
        "genero": "Puzzles",
        "year": 1998,
        "empresa": "Nintendo"
    },
    {
        "nombre": "Final Fantasy VIII",
        "genero": "Plataformas",
        "year": 1999,
        "empresa": "Squaresoft"
    },
    {
        "nombre": "The Legend of Zelda: Majora's Mask",
        "genero": "Acción-Aventura",
        "year": 2000,
        "empresa": "Nintendo"
    },
    {
        "nombre": "Halo: Combat Evolved",
        "genero": "fps",
        "year": 2001,
        "empresa": "Microsoft"
    },
    {
        "nombre": "The Elder Scrolls III: Morrowind",
        "genero": "RPG de acción",
        "year": 2002,
        "empresa": "Bethesda Softworks"
    },
    {
        "nombre": "The Legend of Zelda: The Wind Waker",
        "genero": "Acción-Aventura",
        "year": 2003,
        "empresa": "Nintendo"
    },
    {
        "nombre": "Half-Life 2",
        "genero": "fps",
        "year": 2004,
        "empresa": "Valve"
    },
    {
        "nombre": "Resident Evil 4",
        "genero": "Survival Horror",
        "year": 2005,
        "empresa": "Capcom"
    },
    {
        "nombre": "The Elder Scrolls IV: Oblivion",
        "genero": "Juego de rol",
        "year": 2006,
        "empresa": "Bethesda Game Studios"
    },
    {
        "nombre": "Bioshock",
        "genero": "fps",
        "year": 2007,
        "empresa": "2K Games"
    },
    {
        "nombre": "Fallout 3",
        "genero": "Action RPG",
        "year": 2008,
        "empresa": "Bethesda Softworks"
    },
    {
        "nombre": "Uncharted 2: Among Thieves",
        "genero": "Accion-Aventura",
        "year": 2009,
        "empresa": "Naughty Dogs"
    },
    {
        "nombre": "Red Dead Redemption",
        "genero": "Accion-Aventura",
        "year": 2010,
        "empresa": "Rockstar Games"
    },
    {
        "nombre": "The Elder Scrolls V: Skyrim",
        "genero": "Action RPG",
        "year": 2011,
        "empresa": "Bethesda Softworks"
    },
    {
        "nombre": "The Walking Dead: The Game",
        "genero": "Aventura Grafica",
        "year": 2012,
        "empresa": "Telltale Games"
    },
    {
        "nombre": "The Last of Us",
        "genero": "Acción-Aventura",
        "year": 2013,
        "empresa": "Naughty Dogs"
    },
    {
        "nombre": "Dragon Age: Inquisition",
        "genero": "Action RPG",
        "year": 2014,
        "empresa": "Bioware"
    },
    {
        "nombre": "The Witcher 3: Wild Hunt",
        "genero": "Action RPG",
        "year": 2015,
        "empresa": "CD Projekt"
    },
    {
        "nombre": "Overwatch",
        "genero": "fps",
        "year": 2016,
        "empresa": "Blizzard Entertainment"
    },
    {
        "nombre": "The Legend of Zelda: Breath of the Wild",
        "genero": "Action-Adventure",
        "year": 2017,
        "empresa": "Nintendo"
    },
    {
        "nombre": "God of War",
        "genero": "Action-Adventure",
        "year": 2018,
        "empresa": "Santa Monica Studios"
    },
    {
        "nombre": "Sekiro: Shadows Die Twice",
        "genero": "Action RPG",
        "year": 2019,
        "empresa": "FromSoftware"
    },
    {
        "nombre": "The Last of Us II",
        "genero": "Action-Adventure",
        "year": 2020,
        "empresa": "Naughty Dog"
    },
    {
        "nombre": "It Takes Two",
        "genero": "Action-Coop-Adventure",
        "year": 2021,
        "empresa": "Rockstar Games"
    },
    {
        "nombre": "Elder Ring",
        "genero": "Action RPG",
        "year": 2022,
        "empresa": "FromSoftware"
    },
]
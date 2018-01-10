function pokemon(name, type, HP, ATK, DEF, legend){
    this.name = name;
    this.type = type;
    this.HP = HP;
    this.ATK = ATK;
    this.DEF = DEF;
    this.legend = legend;
};
// Venasaur, Dragonite, Dugtrio, Raichu, Flareon, Gyrados
var roster = [];

var venasaur = new pokemon("Venasaur", "Grass, Poison", 270, 152, 153, false);
roster[0] = venasaur;

var dragonite = new pokemon("Dragonite", "Dragon, Flying", 292, 245, 175, false);
roster[1] = dragonite;

var dugtrio = new pokemon("Dugtrio", "Ground", 180, 184, 94, false);
roster[2] = dugtrio;

var raichu = new pokemon("Raichu", "Electric", 230, 166, 103, false);
roster[3] = raichu;

var flareon = new pokemon("Flareon", "Fire", 240, 238, 112, false);
roster[4] = flareon;

var gyrados = new pokemon("Gyrados", "Water", 300, 229, 146, false);
roster[5] = gyrados;


function pokemonAttacked()
{
    for (var i = 0; i < 6; i++)
    {
        roster[i].HP -= 10;
        console.log(roster[i]);
    }
}

pokemonAttacked();

function pokemonAttackedRandom()
{
    var damage = prompt("How much damage should a pokemon take?");
    console.log(roster[Math.floor(Math.random()*6)].HP -= damage);
}

pokemonAttackedRandom();
/*function pokemonAdd()
{

}*/
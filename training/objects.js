function Superhero(realName, power, justice, height) // example of a class
{
    this.realName = realName; // The rightside of the line must be the same as a parameter
    this.power = power; 
    this.justice = justice;
    this.height = height;
}; // Technically defining a class, not a function. Needs semicolon

var superman = new Superhero("Clark Kent", "Strength", true, "6'3");

var batman = new Superhero ("Bruce Wayne", "Dat Money", true, "6'2");

var mew =
{ // Example of an object
    "HP" : 100, // Leftside is the "key". Rightside is value assigned to it
    "type" : "psychic", // each line except except the last must have a comma to seperate from others
    "legendary" : true,

}; // needs semicolon after, just as any variable definition

var mew = 
{
    "HP" : 100,
    "type" : "psychic",
    "legendary" : true,
} ;

console.log(mew.HP);
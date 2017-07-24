var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function randLetter()
{
    console.log(alphabet[Math.floor(Math.random()*26)]);
}

randLetter();


function randWord(num)
{
    var word = []
    for(var i = 0; i < num; i++)
    {
        word.push(randLetter());
    }
    console.log(word);
}

randWord(4);
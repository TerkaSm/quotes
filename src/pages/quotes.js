export const quotes = [
    {textQuote: '"Život je jako jízda na kole. Abyste udrželi rovnováhu, musíte se hýbat vpřed."', authorQuote: '- Albert Einstein'},
    {textQuote: '"Nikdy se nebojte chyby. Nikdy jste se nepokusili něco nového."', authorQuote: '- Albert Einstein',},
    {textQuote: '"Život je příliš krátký na to, abyste ho trávili stresováním se tím, co si o vás myslí ostatní. Buďte sami sebou a buďte šťastní."', authorQuote: '- Marilyn Monroe',},
    {textQuote: '"Nejlepší způsob, jak předpovědět budoucnost, je ji vytvořit."', authorQuote: '- Peter Drucker',},
    {textQuote: '"Když se snažíte dostat se na vrchol, nezapomeňte si užívat výhled."', authorQuote: '- Unknown',},
]


export const chooseRandomItem = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length); // Vygeneruje náhodný index z pole
    const randomQuote = quotes[randomIndex]; // Vybere náhodný objekt z pole
    return randomQuote;  // Vrátí náhodný objekt z pole
  };

console.log(chooseRandomItem());
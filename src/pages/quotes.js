export const quotes = [
    {textQuote: '"Život je jako jízda na kole. Abyste udrželi rovnováhu, musíte se hýbat vpřed."', authorQuote: '- Albert Einstein'},
    {textQuote: '"Fantazie je důležitější než vědomosti. Vědomosti jsou omezené, zatímco fantazie obklopuje svět."', authorQuote: '- Albert Einstein',},
    {textQuote: '"Život je příliš krátký na to, abyste ho trávili stresováním se tím, co si o vás myslí ostatní. Buďte sami sebou a buďte šťastní."', authorQuote: '- Marilyn Monroe',},
    {textQuote: '"Nejlepší způsob, jak předpovědět budoucnost, je ji vytvořit."', authorQuote: '- Peter Drucker',},
    {textQuote: '"Když se snažíte dostat se na vrchol, nezapomeňte si užívat výhled."', authorQuote: '- Unknown',},
    {textQuote: '"Život je cesta, kterou musíte projít, ne jen místo, kam se dostat."', authorQuote: '- Anonymous'},
    {textQuote: '"Největší dobrodružství nemusí být na konci světa. Může to být jen kousek od vašeho domova."', authorQuote: '- Louie Giglio',},
    {textQuote: '"Když si nevíte rady, zkuste se zeptat sami sebe. Většinou máte odpovědi na všechny své otázky."', authorQuote: '- Maya Angelou',},
    {textQuote: '"Přečtěte si knihy, cestujte daleko, zážitky tvoříte paměť, a paměť tvoří váš život."', authorQuote: '- Unknown',},
    {textQuote: '"Život je nejlepší užívat s nadšením a s úsměvem, protože to je jediný způsob, jak ho užít opravdu dobře."', authorQuote: '- Unknown',},
    {textQuote: '"Štěstí je jako koláč - můžete ho rozkrojit a podělit se o něj, a přesto bude stále větší."', authorQuote: '- Tom Bodett',},
    {textQuote: '"Největší nebezpečí v životě spočívá v tom, že si ho vezmeme příliš vážně."', authorQuote: '- Confucius',},
    {textQuote: '"Život je jako jízda na horské dráze. Má své vzestupy a pády, ale pokud se držíte pevně, může to být neuvěřitelná zábava."', authorQuote: '- Unknown',},
    {textQuote: '"Největší vzdělání, které můžete získat, je naučit se sami sebe znát."', authorQuote: '- Socrates',},
    {textQuote: '"Nikdy není pozdě stát se tím, kým jste mohli být."', authorQuote: '- George Eliot',},
    {textQuote: '"Zkušenosti jsou jako kniha, a ty, kteří necestují, čtou jen jednu stránku."', authorQuote: '- Saint Augustine',},
    {textQuote: '"Úspěch je schopnost jít od jednoho neúspěchu k druhému s nadšením."', authorQuote: '- Winston Churchill',},
    {textQuote: '"Dělejte, co je správné, ne co je snadné. Ale někdy je snadné dělat správné věci."', authorQuote: '- Unknown',},
    {textQuote: '"Život je krátký. Smějte se sami sobě dřív, než to udělají ostatní."', authorQuote: '- Elbert Hubbard',},
    {textQuote: '"Představte si, že každý den máte kouzelnou kouli. Co byste s ní dnes udělali?"', authorQuote: '- Unknown',},
    {textQuote: '"Buďte nejlepší verzí sebe sama, ne verze někoho jiného."', authorQuote: '- Judy Garland',},
    {textQuote: '"Nejlepší věci v životě jsou zdarma: úsměv, láska a dobrá nálada."', authorQuote: '- Unknown',},
    {textQuote: '"Když se vám zdá, že jste na konci svých sil, připomínejte si, proč jste začali."', authorQuote: '- Unknown',},
    {textQuote: '"Život je krásná cesta, a ne cíl, který máte dosáhnout."', authorQuote: '- Unknown',},
    // {textQuote: '', authorQuote: '- Unknown',},
]


export const chooseRandomItem = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length); // Vygeneruje náhodný index z pole
    const randomQuote = quotes[randomIndex]; // Vybere náhodný objekt z pole
    return randomQuote;  // Vrátí náhodný objekt z pole
  };

// Refresh stránky na kliknutí
document.addEventListener('click', function() {
  location.reload();
});
const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];
let employersNames = employers.filter((name) => {
    return name.length > 0 && name.length != '';
})
.map((name => name.toLowerCase().trim()))

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

const {cash: [...sum], eu: [...euSponsors], eu: [unsafeSponsor], rus: [...rusSponsors]} = sponsors;
const calcCash = sum.reduce((total,value) => total + value);

function makeBusiness({owner, director = 'Victor', cash, emp } = {}) {
    console.log(`We have a business. Owner: ${owner} , director: ${director}. Our budget: ${cash}. And our employers: ${emp}`);
    console.log(`And we have a sponsors:`);
    console.log(`${euSponsors.join(' ')} ${rusSponsors.join(' ')} unexpected sponsor`);
    console.log(`Note. Be careful with ${unsafeSponsor}. It's a huge risk.`);
}
makeBusiness({owner: 'Sam', cash: calcCash, emp: employersNames});
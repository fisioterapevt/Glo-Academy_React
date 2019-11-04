import {employersNames} from './employers';
import {euSponsors, unsafeSponsor, rusSponsors, calcCash} from './sponsors';

class MakeBusiness {
    constructor({owner, director = 'Victor', cash, emp } = {}) {
        this.owner = owner;
        this.director = director;
        this.cash = cash;
        this.emp = emp;
        this.euSponsors = euSponsors;
        this.rusSponsors = rusSponsors;
        this.unsafeSponsor = unsafeSponsor;
    }
    printText() {
        console.log(`We have a business. Owner: ${this.owner} , director: ${this.director}. Our budget: ${this.cash}. And our employers: ${this.emp}`);
        console.log(`And we have a sponsors:`);
        console.log(`${this.euSponsors.join(' ')} ${this.rusSponsors.join(' ')} unexpected sponsor`);
        console.log(`Note. Be careful with ${this.unsafeSponsor}. It's a huge risk.`);
    }
}
const makeBusiness = new MakeBusiness({owner: 'Sam', cash: calcCash, emp: employersNames});

makeBusiness.printText();

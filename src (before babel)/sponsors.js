const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

const {cash: [...sum], eu: [...euSponsors], eu: [unsafeSponsor], rus: [...rusSponsors]} = sponsors;
const calcCash = sum.reduce((total,value) => total + value);

export {euSponsors, unsafeSponsor, rusSponsors, calcCash};
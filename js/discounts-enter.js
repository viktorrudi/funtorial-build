class Discount {
  constructor(obj) {
    this.id = obj.id;
    this.name = obj.name;
    this.description = obj.description;
    this.img = obj.img;
    this.priceNew = obj.priceNew;
    this.priceOld = obj.priceOld;
    this.percent = obj.percent;
    this.currency = obj.currency;
    this.creditCost = obj.creditCost;
    this.extra = obj.extra; //Array of extra information
    this.obj = obj; // Total object
  }
  build() {
    const discountFeed = document.querySelector('#discount__feed');
    const discountWrapper = document.createElement('div');
    discountWrapper.setAttribute('class', 'row discount__wrapper');
    /* html */
    discountWrapper.innerHTML = `<div class='col-sm-3 discount__wrapper--image'> 
           <img src='${this.img}' alt='Discount' /> 
         </div> 
         <div class='col-sm-9 discount__header'> 
           <div class='discount__header--prices'> 
             <span class='percent-percent'>${this.percent}%</span> 
             <span class='price-new'>${this.priceNew} ${this.currency}</span> 
             <span class='price-old'>${this.priceOld} ${this.currency}</span> 
           </div> 
           <div class='discount__header--content'> 
             <h4>${this.name}</h4> 
             <p> 
               ${this.description} 
             </p> 
             <table> 
               <tr> 
                 <td>City</td> 
                 <td>${this.extra.city}</td> 
               </tr> 
               <tr> 
                 <td>Country</td> 
                 <td>${this.extra.country}</td> 
               </tr> 
               <tr> 
                 <td>Valid from</td> 
                 <td>${this.extra.validFrom}</td> 
               </tr> 
               <tr> 
                 <td>Valid until</td> 
                 <td>${this.extra.validUntil}</td> 
               </tr> 
               <tr> 
                 <td>Provider</td> 
                 <td>${this.extra.provider}</td> 
               </tr> 
               <tr> 
                 <td>Email</td> 
                 <td>${this.extra.email}</td> 
               </tr> 
               <tr> 
                 <td>Phone</td> 
                 <td>${this.extra.phone}</td> 
               </tr>
               <tr> 
                 <td>Address</td> 
                 <td>${this.extra.address}</td> 
               </tr>
             </table> 
           </div> 
           <div class='discount__buttons'> 
             <button class='discount__btn--see-more btn-secondary'> 
               <i class='fas fa-angle-down'></i> See more details 
             </button> 
             <button data-discount-id='${this.id}' data-discount-info='${JSON.stringify(
      this.obj
    )}' class='discount__btn--claim btn-primary'> 
               Claim (${this.creditCost} credits) 
             </button> 
           </div> 
         </div>`;
    discountFeed.appendChild(discountWrapper);
  }
}

// Todo - Put Discount class in another file and leave this file for the
// discounts to be imported into DOM

new Discount({
  id: 1,
  name: 'Shasdasdasdasle',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo placeat facere eveniet, necessitatibus modi quasi nulla. Explicabo odit ea ullam eaque commodi excepturi eum accusamus, temporibus fugit nostrum voluptates eveniet?',
  img: 'https://placeimg.com/550/300/people',
  priceNew: '10',
  priceOld: '20',
  percent: '15',
  currency: 'CZK',
  creditCost: '1050',
  extra: {
    city: 'Brno',
    country: 'CZ',
    validFrom: '01.01.19',
    validUntil: '01.01.20',
    provider: 'HEUREKA',
    email: 'info@yasdadsd.cz',
    phone: '123 392 133',
    address: 'Divalid 3, 232 Wrappi',
  },
}).build();

new Discount({
  id: 2,
  name: 'Short title 2',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo placeat facere eveniet, necessitatibus modi quasi nulla. Explicabo odit ea ullam eaque commodi excepturi eum accusamus, temporibus fugit nostrum voluptates eveniet?',
  img: 'https://placeimg.com/550/300/nature',
  priceNew: '120',
  priceOld: '2033',
  percent: '32',
  currency: 'CZK',
  creditCost: '600',
  extra: {
    city: 'Brno',
    country: 'CZ',
    validFrom: '01.01.19',
    validUntil: '01.01.20',
    provider: 'HEUREKA',
    email: 'info@yasdadsd.cz',
    phone: '123 392 133',
    address: 'Divalid 3, 232 Wrappi',
  },
}).build();

new Discount({
  id: 3,
  name: 'test 123 12321312',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo placeat facere eveniet, necessitatibus modi quasi nulla. Explicabo odit ea ullam eaque commodi excepturi eum accusamus, temporibus fugit nostrum voluptates eveniet?',
  img: 'https://placeimg.com/550/300/grayscale',
  priceNew: '1084',
  priceOld: '230',
  percent: '63',
  currency: 'ASD',
  creditCost: '420',
  extra: {
    city: 'Brno',
    country: 'CZ',
    validFrom: '01.01.19',
    validUntil: '01.01.20',
    provider: 'HEUREKA',
    email: 'info@yasdadsd.cz',
    phone: '123 392 133',
    address: 'Divalid 3, 232 Wrappi',
  },
}).build();

new Discount({
  id: 4,
  name: 'Short title',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo placeat facere eveniet, necessitatibus modi quasi nulla. Explicabo odit ea ullam eaque commodi excepturi eum accusamus, temporibus fugit nostrum voluptates eveniet?',
  img: 'https://placeimg.com/550/301/people',
  priceNew: '10',
  priceOld: '20',
  percent: '31',
  currency: 'CZK',
  creditCost: '100',
  extra: {
    city: 'Brno',
    country: 'CZ',
    validFrom: '01.01.19',
    validUntil: '01.01.20',
    provider: 'HEUREKA',
    email: 'info@yasdadsd.cz',
    phone: '123 392 133',
    address: 'Divalid 3, 232 Wrappi',
  },
}).build();

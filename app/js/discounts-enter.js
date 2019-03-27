class Discount {
 constructor(obj) {
  this.name = obj.name;
  this.description = obj.description;
  this.img = obj.img;
  this.priceNew = obj.priceNew;
  this.priceOld = obj.priceOld;
  this.percent = obj.priceOld;
  this.currency = obj.currency;
  this.creditCost = obj.creditCost;
  this.extra = obj.extra; //Array of extra information
 }
 build() {
  const discountFeed = document.querySelector('#discount__feed');
  const discountWrapper = document.createElement('div');
  discountWrapper.setAttribute('class', 'row discount__wrapper');
  discountWrapper.innerHTML = 
        `<div class="col-sm-3 discount__wrapper--image"> 
           <img src="${this.img}" alt="Discount" /> 
         </div> 
         <div class="col-sm-9 discount__header"> 
           <div class="discount__header--prices"> 
             <span class="percent-percent">${this.percent}%</span> 
             <span class="price-new">${this.priceNew} ${this.currency}</span> 
             <span class="price-old">${this.priceOld} ${this.currency}</span> 
           </div> 
           <div class="discount__header--content"> 
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
           <div class="discount__buttons"> 
             <button class="discount_btn--see-more btn-secondary"> 
               <i class="fas fa-angle-down"></i> See more details 
             </button> 
             <button class="discount_btn--claim btn-primary"> 
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
 name: 'Short title',
 description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo placeat facere eveniet, necessitatibus modi quasi nulla. Explicabo odit ea ullam eaque commodi excepturi eum accusamus, temporibus fugit nostrum voluptates eveniet?',
 img: 'https://placeimg.com/550/300/people',
 priceNew: '10',
 priceOld: '20',
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
  address: 'Divalid 3, 232 Wrappi'
 }
}).build();


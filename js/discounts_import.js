'use strict';

import data from './insert_data/discounts.js';
console.log(data);

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
             <button 
             data-discount-id='${this.id}' 
             data-discount-info='${JSON.stringify(this.obj)}' 
             class='discount__btn--claim btn-primary'> 
               Claim (${this.creditCost} credits) 
             </button> 
           </div> 
         </div>`;
    discountFeed.appendChild(discountWrapper);
  }
}

// Inserts each discount into the page
data.forEach(discount => {
  new Discount(discount).build();
});

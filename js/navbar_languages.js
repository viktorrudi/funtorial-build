'use strict';

import dataSelected from './insert_data/language_selected.js';
import dataAvailable from './insert_data/languages_available.js';

class SelectedLanguage {
  constructor(obj) {
    this.id = obj.id;
    this.name = obj.name;
    this.link = obj.link;
    this.countryCode = obj.countryCode;
    this.icon = obj.icon;
  }

  dropdownToggle() {
    // Create language object with necessary bootstrap required attributes + extra
    let dropdownToggle = document.createElement('a');
    dropdownToggle.setAttribute('class', 'btn dropdown-toggle');
    dropdownToggle.setAttribute('href', this.link);
    dropdownToggle.setAttribute('id', this.id);
    if (this.countryCode) {
      dropdownToggle.setAttribute('data-country-code', this.countryCode);
    }
    dropdownToggle.setAttribute('data-toggle', 'dropdown');
    dropdownToggle.setAttribute('data-target', 'dropdown__languages');
    return dropdownToggle;
  }

  build() {
    // Target main language wrapper in nav
    const languageDropdown = document.querySelector('.dropdown-lang');

    // Gets the wrapper for the flag selection. Only one for this class.
    const item = this.dropdownToggle();

    // Insert HTML of the selected language. This is displayed in the navbar on load
    /* html */
    item.innerHTML = `<span class='flag-wrapper'>
        <object class='navbar-flag-selected' data='${this.icon}' type='image/svg+xml'></object>
    </span>
    ${this.name}`;

    // Add the selected language to the navbar
    languageDropdown.appendChild(item);

    // Wrapper for Language class instances to be inserted into
    // For the Language class.
    const dropdownMenu = document.createElement('div');
    dropdownMenu.setAttribute('id', 'dropdown__languages');
    dropdownMenu.setAttribute('class', 'dropdown-menu dropdown-menu-right');
    dropdownMenu.setAttribute('aria-labelledby', 'dropdown__languages');
    languageDropdown.appendChild(dropdownMenu);
  }
}

class Language extends SelectedLanguage {
  constructor(obj) {
    super(obj);
  }

  // Method for creating wrapper for languages in dropdown list
  dropdownItem() {
    const dropdownItem = document.createElement('a');
    dropdownItem.setAttribute('class', 'dropdown-item');
    dropdownItem.setAttribute('href', this.link);
    dropdownItem.setAttribute('id', this.id);
    if (this.countryCode) {
      dropdownItem.setAttribute('data-country-code', this.countryCode);
    }
    return dropdownItem;
  }

  build() {
    const dropdownMenu = document.querySelector('#dropdown__languages');

    const item = this.dropdownItem();
    item.innerHTML = `<span class='flag-wrapper'>
        <object class='navbar-flag-selected' data='${this.icon}' type='image/svg+xml'></object>
    </span>
    ${this.name}`;

    dropdownMenu.appendChild(item);
  }
}

// Inserts the selected language
dataSelected.forEach(selectedLanguage => {
  new SelectedLanguage(selectedLanguage).build();
});

// Inserts all available languages
dataAvailable.forEach(language => {
  new Language(language).build();
});

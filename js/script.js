"use strict";
let nowYear = new Date(),
changeYear = document.querySelector('.footer__copyright_year');
changeYear.textContent = `${nowYear.getFullYear()}`;

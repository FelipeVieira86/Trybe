/* global validation */

validation.init();

new Pikaday({
  field: document.getElementById('data'),
  firstDay: 1,
  format: 'DD/MM/YYYY',
  maxDate: new Date(),
  yearRange: [1900, 2020],
});

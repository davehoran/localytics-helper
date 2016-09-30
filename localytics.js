// Example file src/helpers/bold.js
module.exports = function(options) {
  // options.fn(this) = Handelbars content between {{#bold}} HERE {{/bold}}
  var email_field = '{{' + options.fn(this) + '}}';
  return email_field;
}
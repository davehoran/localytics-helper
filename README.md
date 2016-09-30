# localytics-helper
Foundation for Emails Panini helper function for adding Localytics email template variables.

Localytics (https://www.localytics.com/welcome/) has expanded their offerings to include email campaigns in addition to their in-app and push notifications for mobile apps. The system for emails uses the Liquid (http://shopify.github.io/liquid/) template engine for composing emails. However, if you are using the Foundation for Emails framework there is an issue. Both systems use the {{var}} format for variables. 

If you attempt to include a Liquid template var, the Foundation for Emails compilier will attempt to process the code and error out. The end goal is to be able to include the variables so Localytics can dynamically add personalization data, but not have it interpreted by the Zurb Stack.This small JavaScript helper function will allow you to add variables into the Foundation for Emails page, but have it genertate a variable in the output file that is ready to consume by the Localytics template system.

## How to use this
1. Place the file in the */src/helpers* directory of your Foundation for Emails installation.
2. Find the variable in Localytics you want to use, for example **{{org['email']}}.**
3. In your email page, add in the variable between two helper tag calls,  **{{#localytics}}org['email']{{/localytics}}**

When the page renders, the output will look like *{{org['email']}}* and is ready for use in Localytics. You can verify this by looking at the rendere page code in the /dist directory.
 '

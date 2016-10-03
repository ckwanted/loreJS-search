/**
 * This component is intended to reflect the high level structure of your application,
 * and render any components that are common across all views, such as the header or
 * top-level navigation. All other components should be rendered by route handlers.
 **/

import React from 'react';

import Search from './Search';

let libraries = [
  { name: 'Backbone.js', url: 'http://documentcloud.github.io/backbone/', id: 1},
  { name: 'AngularJS', url: 'https://angularjs.org/', id: 2},
  { name: 'jQuery', url: 'http://jquery.com/', id: 3},
  { name: 'Prototype', url: 'http://www.prototypejs.org/', id: 4},
  { name: 'React', url: 'http://facebook.github.io/react/', id: 5},
  { name: 'Ember', url: 'http://emberjs.com/', id: 6},
  { name: 'Knockout.js', url: 'http://knockoutjs.com/', id: 7},
  { name: 'Dojo', url: 'http://dojotoolkit.org/', id: 8},
  { name: 'Mootools', url: 'http://mootools.net/', id: 9},
  { name: 'Underscore', url: 'http://documentcloud.github.io/underscore/', id: 10},
  { name: 'Lodash', url: 'http://lodash.com/', id: 11},
  { name: 'Moment', url: 'http://momentjs.com/', id: 12},
  { name: 'Express', url: 'http://expressjs.com/', id: 13},
  { name: 'Koa', url: 'http://koajs.com/', id: 14},
];

export default class Layout extends React.Component {

  render() {
    return (
      <Search items={libraries} />
    );
  }

}

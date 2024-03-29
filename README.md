<p align="center">
  <br>
  <a href="https://vficons.netlify.app">
    <img alt="Vue Flag Icons" src="https://user-images.githubusercontent.com/13184472/70064547-ef1bfd00-1613-11ea-81a4-c40498b993b5.png" width="120"/>
  </a>
</p>
<h1 align="center">Vue Flag Icons</h1>
<p align="center">
Use country flags as a Vue component. You can also use in any project without Vue.
</p>

<p align="center">
  <a title="Latest Stable Version" href="https://www.npmjs.com/package/v-flag-icons">
    <img alt="Latest Stable Version" src="https://img.shields.io/npm/v/v-flag-icons">
  </a>
  <a title="License" href="LICENSE">
    <img alt="License" src="https://img.shields.io/npm/l/v-flag-icons">
  </a>
  <a title="Follow the Developer" href="https://twitter.com/obyydul">
    <img alt="Follow the Developer" src="https://img.shields.io/twitter/follow/obyydul?label=Follow&style=social">
  </a>
  <br>
</p>

> This project is under active development. Any feedback or contributions would be appreciated.

## Get Started
Please read [simple documentation](https://vficons.netlify.app) to get started.

## Quick Start
To install this package run the NPM command:

```bash
npm i v-flag-icons
```
* Import vFlagIcons as a global component in main.js:

```javascript
import vFlagIcons from 'v-flag-icons'
import 'v-flag-icons/css/rectangular.min.css'

Vue.use(vFlagIcons)
```

Now call in component like this:
```javascript
<vf-icon country="bd"/>
```

* Import vFlagIcons in a specific component:

```javascript
import vFlagIcons from 'v-flag-icons'
import 'v-flag-icons/css/rectangular.min.css'

new Vue({
    components: {
        vFlagIcons
    }
})
```

Now call in component like this:
```javascript
<vFlagIcons country="bd"/>
```

## More Options
Read our [documentation](https://vficons.obydul.me) to see all features and usage such as:

* Design Set 1:

```html
<vf-icon country="bd"/> <!-- default is rectangular -->
<vf-icon country="bd" type="square"/>
<vf-icon country="bd" type="hexagonal"/>
<vf-icon country="bd" type="rounded-square"/>
<vf-icon country="bd" type="rounded-rectangle"/>
<vf-icon country="bd" type="mast"/>
```
* Design Set 2:

```html
<vf-icon country="bd" design="ds2"/>  <!-- default is rectangular -->
<vf-icon country="bd" type="square" design="ds2"/>
<vf-icon country="bd" type="hexagonal" design="ds2"/>
<vf-icon country="bd" type="rounded-square" design="ds2"/>
<vf-icon country="bd" type="rounded-rectangle" design="ds2"/>
<vf-icon country="bd" type="mast" design="ds2"/>
```

## Credits
The awesome flag icons are created by [Freepik](https://www.flaticon.com/authors/freepik).

## License
The package is under the [MIT License](https://github.com/mdobydullah/v-flag-icons/blob/master/LICENSE) but the flag icons aren't free.  You can use all icons for free with attribution. Please check the flag icons provider's [Free License](https://profile.flaticon.com/license/free) terms and conditions. If you don't like to use icons with attribution, then please buy membership.

## Note

This package helps you to use Flaticon's flag icons easily. If you have any questions please [contact me](https://obydul.me/contact).

Thank you for using Vue Flag Icons. :heart:

<p align="center">
  <br>
  <a href="https://vficons.netlify.com">
    <img alt="Vue Flag Icons" src="https://user-images.githubusercontent.com/13184472/70064547-ef1bfd00-1613-11ea-81a4-c40498b993b5.png" width="120"/>
  </a>
</p>
<h1 align="center">Vue Flag Icons</h1>
<p align="center">
Use country flags as a Vue component
</p>

> This project is under active development. Any feedback or contributions would be appreciated.

## Get Started
Please read [simple documentation](https://vficons.netlify.com) to get started.

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

Now you can call in a component like this:
```javascript
<vf-icon country="bd"/>
```

## More Options
Read our [documentation](https://vficons.netlify.com) to see all features and usage such as:

```javascript
<vf-icon country="bd" type="square"/>
<vf-icon country="bd" type="hexagonal"/>
<vf-icon country="bd" type="rounded-square"/>
<vf-icon country="bd" type="rounded-rectangle"/>
<vf-icon country="bd" type="mast"/>
```

## Credits
The awesome flag icons are created by [Freepik](https://www.flaticon.com/authors/freepik) and this package flag icon created by [turkkub](https://www.flaticon.com/authors/turkkub).

## License
The package's licensed under the [MIT License](https://github.com/mdobydullah/v-flag-icons/blob/master/LICENSE). Please check the flag icons provider's [License](https://profile.flaticon.com/license/free).

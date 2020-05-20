<h1 align="center">
    <img width="180" src="./assets/img/zikrrr-logo.png" alt="Zikrrr – A random Zikr/Tasbeeh for newly opened tabs by Junaid Ahmed">
    <br>

`zikrrr.com`

[![Tweet for help](https://img.shields.io/twitter/follow/junaidkbr.svg?style=social&label=Tweet%20@junaidkbr)](https://twitter.com/junaidkbr/) [![GitHub followers](https://img.shields.io/github/followers/junaidkbr.svg?style=social&label=Follow)](https://github.com/junaidkbr?tab=followers) [![Uptek.co](https://img.shields.io/badge/Supported%20by-Uptek.co%20Web%20Solutions%20Agency%20%E2%86%92-blue)](https://Upteck.co "This open source project is supported by Upteck.co")
</h1>

<br>

So, what do we get when we open a new tab in a browser? Nothing. Even more precisely, a plain white screen of nothing. The new tab is where Zikrrr comes in. The Zikrrr app is my humble effort to welcome you with an illuminated tasbeeh every time you open a new tab in your browser. Praise and glorification of Allah (SWT) in a short tasbeeh for you to recite on the go.

[![Start](./assets/img/zikrrr-getting-started.png)](/)
## Getting Started
A straight forward process, simply add the following URL under your browser's settings for the newly created tab.

```sh
https://zikrrr.com/
```

[![Contribute](./assets/img/zikrrr-contributions.png)](/)
## Contribute to the Zikrrr app
The Zikrrr app eagerly awaits your PRs. You can choose to only add/update new tasbeeh or style as well as add new features to make it even more visually appealing.

### 📦 Add/Update Tasbeeh
In case you just want to add/update new tasbeeh(s) to this app you can easily do so by updating the app > dist > data > data.json file. Simply add a new object with tasbeeh as a value to the content property.

```sh
{
    "id": 10001,
    "content": "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ",
    "category": []
}
```

### 📦 Customize the Zikrrr app

The source code for the zikrrr app has a modern workflow and includes a build process for SASS files compilation. Feel free to write and organize your stylings using SASS and then compile your stylings to the CSS which any browser understands. You can organize your stylings using the readily available SASS files by the Zikrr app.

```sh
INSIDE: /zikrrr/src/styles

├── core
|   └── _main.scss
|
├── helpers
|   ├── _functions.scss
|   ├── _mixins.scss
|   └── _variables.scss
|
├── type
|   └── _typography.scss
|
├── vendors
|   └── _reset.scss
|
└── app.scss

```

[![Attribution](./assets/img/zikrrr-licenses.png)](/)
## License & Attribution
MIT © Junaid Ahmed

Many thanks to these fine projects for their awesome set of graphics:

### Freepik
Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
### Icons8
<div><a target="_blank" href="https://icons8.com/icons/set/code">Code icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></div>
<div><a target="_blank" href="https://icons8.com/icons/set/software-license">Software License icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></div>
<div><a target="_blank" href="https://icons8.com/icons/set/rocket">Rocket icon</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a></div>
<h1 align="center">
    <img width="180" src="./static/images/zikrrr-logo.png" alt="Zikrrr – A random dhikr/tasbih for newly opened tabs by Junaid Ahmed">
    <br>

Zikrrr

[![Tweet for help](https://img.shields.io/twitter/follow/junaidkbr.svg?style=social&label=Tweet%20@junaidkbr)](https://twitter.com/junaidkbr/) [![GitHub followers](https://img.shields.io/github/followers/junaidkbr.svg?style=social&label=Follow)](https://github.com/junaidkbr?tab=followers) [![Uptek.co](https://img.shields.io/badge/Supported%20by-Uptek.co%20Web%20Solutions%20Agency%20%E2%86%92-blue)](https://Uptek.co "This open source project is supported by Uptek.co")
</h1>

<br>

An easy, minimal and distraction free way of reciting tasbih while you work and surf the internet.

[![Start](./static/images/zikrrr-getting-started.png)](/)
## Getting Started
Simply set the following URL as your new tab in your favourite browser (Chrome) and you're set to go. From now on, every time you open a new tab, you'll recite a random tasbih. 👐

```sh
https://zikrrr.com/
```

**Don't know how to setup `https://zikrrr.com/` as new tab?**
- Google Chrome: Use the [Custom New Tab URL](https://chrome.google.com/webstore/detail/custom-new-tab-url/mmjbdbjnoablegbkcklggeknkfcjkjia) extension to set any website as new tab.
- Firefox: Use the [Custom New Tab Page](https://addons.mozilla.org/en-US/firefox/addon/custom-new-tab-page/) extension to set any website as new tab.
- Safari: Use this [tutorial](https://www.howtogeek.com/284582/how-to-open-a-new-tab-to-a-specific-webpage-in-your-browser/) on how to set any website as new tab.

[![Contribute](./static/images/zikrrr-contributions.png)](/)
## How to Contribute? 👨‍💻👩‍💻

We would love you to contribute to improve the platform!

You can contribute to Zikrrr app in the following ways:
1. Add/Update new tasbih.
2. [Report issues](https://github.com/junaidkbr/zikrrr/issues/new).
3. Fix [reported issues](https://github.com/junaidkbr/zikrrr/issues).
4. Add new features.

> Beware it is best to discuss before you start to work on a major change or new big feature.

### Add/Update Tasbih
To add or update tasbihat, the tasbihat JSON file is located at `dist/js/main/data.js` file. The tasbih JSON structure is very simple which is listed below. If you need help with writing Arabic, use the [Arabic Keyboard](http://www.arabic-keyboard.org/).

```sh
{
    "id": 10001,
    "content": "بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ",
    "category": []
}
```

If you are a non-techy person and want to add or report updates for specific tasbihat, you can do so by opening a Github issue or tweet [@junaidkbr](https://twitter.com/junaidkbr).

### Development & Workflow
- Clone repository
- Install dependencies: `npm install`
- Run project locally: `gulp watch`

## Resources 📚
-  [knowledge-base.md](https://github.com/junaidkbr/zikrrr/blob/master/knowledge-base.md): definitions of terms used throughout the app.
-  [Arabic Keyboard](http://www.arabic-keyboard.org/): An easy to use Arabic writing tool.

[![Attribution](./static/images/zikrrr-licenses.png)](/)
## License & Attribution
MIT © [Junaid Ahmed](https://junaidahmed.com)

This project is result of awesome people who contribute to this project. Many thanks to <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> and <a target="_blank" href="https://icons8.com">Icons8</a> for the awesome icons.

<!-- CONTRIBUTORS-LIST:START -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/junaidkbr"><img src="https://avatars.githubusercontent.com/u/12216819?v=3" width="100px;" alt=""/><br /><sub><b>Junaid Ahmed</b></sub></a></td>
    <td align="center"><a href="https://github.com/ihtishamzahoor"><img src="https://avatars.githubusercontent.com/u/19364485?v=3" width="100px;" alt=""/><br /><sub><b>Ihtisham Zahoor</b></sub></a></td>
  </tr>
</table>
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- CONTRIBUTORS-LIST:END -->
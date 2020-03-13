# JSONBeatifier

說明：
1. 現在還沒有加入Node.js npm 套件，但目前只要把JSONBeatifier資料夾放入node_modules裡面，可以用require來使用。
  ```javascript
  let jsonBeautifier = require("JSONBeautifierToStr")
  jsonBeautifier({aa:{bb:{cc:"123",dd:{ee:"123"}}}})
  ```
2. 目前只有支援 JSON 最底層為 String/Number/Array 類型可以正常使用。


import ejs from "ejs";
import fs from "fs";

const hData = [
  [
    { colIdx: 2, value: "hello world1" },
    { colIdx: 4, value: "hello world4" },
    { colIdx: 9, value: "hello world3" },
  ],
  [
    { colIdx: 2, value: "asdklfj" },
    { colIdx: 4, value: "1290812309128" },
    { colIdx: 9, value: "--asdflj" },
  ],
];

const contents = {
  header: {
    meta: {
      rowCount: hData.length + 9,
    },
    data: hData,
  },
};

const html = await ejs.renderFile("./templates/bom.ejs", { contents });

fs.writeFileSync("./out/bom.xml", html, "utf8");

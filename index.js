const express = require('express');
const fs = require('fs');
const app = express();

app.get('/tasks', (req, res) => {
    const data = JSON.parse(fs.readFileSync('./init.json', 'utf8'));
    // json全量を返す
    //#region 以下でもOK
    /*
    res.header('Content-Type', 'application/json; charset=utf-8');
    res.send({ tasks: data.tasks });
    */
    //#endregion
    res.json(data);
});

// ポート3000を監視
app.listen(3000, () => console.log('App listening on port 3000..'));
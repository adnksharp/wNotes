let meta = [], body = [];
let HEAD = document.querySelector('head'),
    BODY = document.querySelector('body');

meta[0] = document.createElement('meta');
meta[0].setAttribute('charset', 'utf-8');
meta[1] = document.createElement('meta');
meta[1].setAttribute('http-equiv', 'X-UA-Compatible');
meta[1].setAttribute('content', 'IE=edge');
meta[2] = document.createElement('meta');
meta[2].setAttribute('name', 'viewport');
meta[2].setAttribute('content', 'width=device-width, initial-scale=1');
meta[3] = document.createElement('link');
meta[3].setAttribute('rel', 'stylesheet');
meta[3].setAttribute('href', 'index.css');

body[0] = document.createElement('div');
body[0].setAttribute('id', 'input');
body[1] = document.createElement('div');
body[2] = document.createElement('input');
body[2].setAttribute('type', 'text');
body[2].setAttribute('id', 'folder');
body[2].setAttribute('placeholder', 'Nombre de la carpeta: ');
body[3] = '<button id="FolderSubmit">Crear carpeta</button>';
body[4] = document.createElement('div');
body[5] = document.createElement('textarea');
body[5].setAttribute('id', 'note');
body[5].setAttribute('cols', '80');
body[5].setAttribute('rows', '2');
body[5].setAttribute('placeholder', 'Nota: ');
body[6] = document.createElement('div');
body[6].setAttribute('id', 'shrbtx');
body[7] = document.createElement('select');
body[7].setAttribute('name', 'FolderOpt');
body[7].setAttribute('id', 'Note-folder');
body[8] = '<button id="NoteSubmit">Crear nota</button>';
body[9] = document.createElement('div');
body[9].setAttribute('id', 'output');

HEAD.insertBefore(meta[3], HEAD.firstChild);
HEAD.insertBefore(meta[2], HEAD.firstChild);
HEAD.insertBefore(meta[1], HEAD.firstChild);
HEAD.insertBefore(meta[0], HEAD.firstChild);

BODY.insertBefore(body[0], BODY.lastChild);
body[0].insertAdjacentElement('beforeend', body[1]);
body[1].insertAdjacentElement('beforeend', body[2]);
body[1].insertAdjacentHTML('beforeend', body[3]);
body[0].insertAdjacentElement('beforeend', body[4]);
body[4].insertAdjacentElement('beforeend', body[5]);
body[4].insertAdjacentElement('beforeend', body[6]);
body[6].insertAdjacentHTML('beforeend', body[8]);
body[6].insertAdjacentElement('beforeend', body[7]);
BODY.insertBefore(body[9], BODY.lastChild);
let folders = document.getElementById('FolderSubmit'),
    files = document.getElementById('NoteSubmit'),
    access = document.getElementById('Note-folder'),
    out = document.getElementById('output'),
    c = 0;

let Delete = [];

function AddFolders() {
    let folder = document.getElementById('folder').value,
        folderi, buttoni, folders, h3, mode;
    c++;

    folderi = document.createElement('div');
    folderi.setAttribute('id', 'folder-' + String(c));
    buttoni = '<button class="ifolder" id="i-' + String(c) + '">-</button>';
    folders = document.createElement('div');
    folders.setAttribute('id', 'pfolder-' + String(c));
    folders.setAttribute('class', 'folder');
    h3 = '<h3>' + folder + '</h3>';
    mode = '<option value="folder-' + String(c) + '" id="values-' + String(c) + '">' + folder + '</option>';

    out.insertAdjacentElement('beforeend', folderi);
    folderi.insertAdjacentHTML('beforeend', buttoni);
    folderi.insertAdjacentElement('beforeend', folders);
    folders.insertAdjacentHTML('beforeend', h3);
    access.insertAdjacentHTML('beforeend', mode);

    Delete[c - 1] = document.getElementById('i-' + String(c));
    Delete[c - 1].addEventListener('click', function () {
        document.getElementById('folder-' + String(c)).remove();
        document.getElementById('values-' + String(c)).remove();
        c--;
    });
}

function AddFiles() {
    let file = document.getElementById('note').value,
        k = document.getElementById('Note-folder').selectedIndex,
        notes = document.getElementById('pfolder-' + String(k+1)),
        p;
    if (notes != null) {
        p = '<p>' + file + '</p>';
        notes.insertAdjacentHTML('beforeend', p);
    }
}

folders.addEventListener('click', AddFolders);
files.addEventListener('click', AddFiles);

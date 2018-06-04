var template = `
    <div class="param">
        <input class="left_in" placeholder="key">
        <input class="right_in" placeholder="value">
        <button class="ctrl" onclick="newParam();">+</button>
    </div>
`;

var del = (e) => {
    e["0"].parentNode.outerHTML = "";
    refresh();
}

var refresh = () => {
    var count = document.getElementsByClassName('param');
    if (count === 1) {
        last["0"].lastElementChild.childNodes[5].outerHTML = `<button class="ctrl" onclick="newParam()" >+</button>`;
    }

}

var newParam = (e) => {
    // var count = document.getElementsByClassName('param');
    var last = $("#actOne").last();
//    e["0"].outerHTML=`<button class="ctrl" onclick="del($(this))" >-</button>`;
    last["0"].lastElementChild.childNodes[5].outerHTML = `<button class="ctrl" onclick="del($(this))">-</button>`;
    document.getElementById('actOne').innerHTML += template;
}

var run = () => {
    // var list = document.

    alert(res);
}
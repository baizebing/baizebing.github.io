function show_rgb() {
    var y = Number(document.getElementById("iny").value);
    var uu = Number(document.getElementById("inu").value);
    var vv = Number(document.getElementById("inv").value);

    var r, g, b;
    u = uu - 128;
    v = vv - 128;
    r = clamp(y + 1.402 * v);
    g = clamp(y - 0.344136 * u - 0.714136 * v);
    b = clamp(y + 1.772 * u);
    set_yuv(y, uu, vv);
    set_rgb(r, g, b);
    var cvs = document.getElementById("RGB");
    var cxt = cvs.getContext("2d");
    var colorstr = '#' + todhex(r) + todhex(g) + todhex(b);
    console.log(colorstr);
    cxt.fillStyle = colorstr;
    cxt.fillRect(0, 0, 300, 300);
}

function set_yuv(y, u, v) {
    document.getElementById("iny").value = y.toString();
    document.getElementById("inu").value = u.toString();
    document.getElementById("inv").value = v.toString();
    document.getElementById("texty").value = y.toString();
    document.getElementById("textu").value = u.toString();
    document.getElementById("textv").value = v.toString();
}

function set_rgb(r, g, b) {
    document.getElementById("inr").value = r.toString();
    document.getElementById("ing").value = g.toString();
    document.getElementById("inb").value = b.toString();
    document.getElementById("textr").value = r.toString();
    document.getElementById("textg").value = g.toString();
    document.getElementById("textb").value = b.toString();
}

function show_yuv() {
    var r, g, b;
    r = Number(document.getElementById("inr").value);
    g = Number(document.getElementById("ing").value);
    b = Number(document.getElementById("inb").value);
    var y, u, v;
    y = clamp(0.299 * r + 0.587 * g + 0.114 * b);
    u = clamp(128 - 0.168736 * r - 0.331264 * g + 0.5 * b);
    v = clamp(128 + 0.5 * r - 0.418688 * g - 0.081312 * b);

    set_rgb(r, g, b);
    set_yuv(y, u, v);
    var cvs = document.getElementById("RGB");
    var cxt = cvs.getContext("2d");
    var colorstr = '#' + todhex(r) + todhex(g) + todhex(b);
    console.log(colorstr);
    cxt.fillStyle = colorstr;
    cxt.fillRect(0, 0, 300, 300);
}

function todhex(num) {
    var hexstr = Number(num).toString(16);
    if (hexstr.length < 2) {
        hexstr = "0" + hexstr;
    }
    return hexstr;
}
function clamp(num) {
    num = Number(num).toFixed(0);
    if (num > 255) {
        return num = 255;
    }
    if (num < 0) {
        return num = 0;
    }
    return Number(num);
}
function last(ths, colorspace) {
    var str = ths.value;
    str = str.replace(/\D/g, '');
    var num = Number(str);
    if (num > 255) {
        num = 255;
    }
    ths.value = num.toString();
    slidername = "in" + ths.id.substr(4, 1);
    document.getElementById(slidername).value = ths.value;
    if (colorspace == 0) {
        show_rgb();
    } else {
        show_yuv();
    }
    console.log(slidername);
}
function enterkeydown(event) {
    var keynum;
    keynum = event.which;
    if (keynum == 13) {
        console.log(keynum);
        this.blur();
        return false;
    }
}
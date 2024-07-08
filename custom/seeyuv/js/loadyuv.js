function showrgb()
{
    var y=Number(document.getElementById("iny").value);
    var u=Number(document.getElementById("inu").value);
    var v=Number(document.getElementById("inv").value);
    var yt = document.getElementById("texty");
    var ut = document.getElementById("textu");
    var vt = document.getElementById("textv");
    yt.value = y;
    ut.value = u;
    vt.value = v;

    var r,g,b;
    u -= 128;
    v -= 128;
    r = clamp(y+1.402*v);
    g = clamp(y-0.344136*u-0.714136*v);
    b = clamp(y+1.772*u);
    document.getElementById("rv").innerHTML=r.toString();
    document.getElementById("gv").innerHTML=g.toString();
    document.getElementById("bv").innerHTML=b.toString();
    var cvs=document.getElementById("RGB");
    var cxt=cvs.getContext("2d");
    console.log(r);
    console.log(g);
    console.log(b);
    var colorstr = '#'+todhex(r)+todhex(g)+todhex(b);
    console.log(colorstr);
    cxt.fillStyle=colorstr;
    cxt.fillRect(0,0,300,300);
}
function todhex(num)
{
    var hexstr=num.toString(16);
    if (hexstr.length<2)
    {
        hexstr="0"+hexstr;
    }
    return hexstr;
}
function clamp(num)
{
    num = num.toFixed(0);
    if(num>255)
    {
        return num=255;
    }
    if(num<0)
    {
        return num=0;
    }
    return Number(num);
}
function last(ths)
{
    var str=ths.value;
    str = str.replace(/\D/g,'');
    var num=Number(str);
    if(num>255){
        num=255;
    }
    ths.value=num.toString();
    slidername = "in" + ths.id.substr(4,1);
    document.getElementById(slidername).value=ths.value;
    showrgb();
    console.log(slidername);
}
function enterkeydown(event)
{
    var keynum;
    keynum = event.which;
    if(keynum==13)
    {
        console.log(keynum);
        this.blur();
        return false;
    }
}
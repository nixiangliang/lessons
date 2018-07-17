window.onload=function ()
{
    var oTxt=document.getElementById('txt1');
    var oBtn=document.getElementById('btn1');
    var oDiv=document.getElementById('div1');

    oBtn.onclick=function ()
    {
        oDiv.innerHTML=oTxt.value;
    };
};
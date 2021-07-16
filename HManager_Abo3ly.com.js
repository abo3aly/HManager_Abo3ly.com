// ==UserScript==
// @name        HManager_Abo3ly.com
// @namespace   @nas272
// @include     http://192.168.100.1/html/content.html#home
// @version     2.0
// @resource     jQueryUI https://code.jquery.com/ui/1.12.1/jquery-ui.js
// @resource    jQueryUICSS https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css
// @grant       GM_addStyle
// @grant       GM_getResourceText
// ==/UserScript==

$ = unsafeWindow.$;
var newCSS = GM_getResourceText ("jQueryUICSS");
GM_addStyle (newCSS);

var script1 = document.createElement('script');
script1.type = 'text/javascript';


var jQueryUI = GM_getResourceText('jQueryUI');
script1.innerHTML = jQueryUI;



document.getElementsByTagName('head')[0].appendChild(script1);
var script2 = document.createElement('script');


script2.type = 'text/javascript';

script2.innerHTML = 'setTimeout(test, 3000);function test() {document.getElementById("pci").innerText = document.getElementById("iframe_id").contentWindow.document.childNodes[0].childNodes[1].childNodes[0].nodeValue ;'
+'document.getElementById("cell_id").innerText = document.getElementById("iframe_id").contentWindow.document.childNodes[0].childNodes[5].childNodes[0].nodeValue;'
+'document.getElementById("sinr").innerText = document.getElementById("iframe_id").contentWindow.document.childNodes[0].childNodes[13].childNodes[0].nodeValue;'
+'document.getElementById("rsrq").innerText = document.getElementById("iframe_id").contentWindow.document.childNodes[0].childNodes[7].childNodes[0].nodeValue;'
+'document.getElementById("rsrp").innerText = document.getElementById("iframe_id").contentWindow.document.childNodes[0].childNodes[9].childNodes[0].nodeValue;'
+'document.getElementById("txpower").innerText = document.getElementById("iframe_id").contentWindow.document.childNodes[0].childNodes[25].childNodes[0].nodeValue;'
+'document.getElementById("nrrsrp").innerText = document.getElementById("iframe_id").contentWindow.document.childNodes[0].childNodes[87].childNodes[0].nodeValue;'
+'document.getElementById("nrsinr").innerText = document.getElementById("iframe_id").contentWindow.document.childNodes[0].childNodes[85].childNodes[0].nodeValue;'
+'document.getElementById("nrrsrq").innerText = document.getElementById("iframe_id").contentWindow.document.childNodes[0].childNodes[89].childNodes[0].nodeValue;'



+'window.setInterval(refload(), 10000);'
+'document.getElementById("rssi").innerText = document.getElementById("iframe_id").contentWindow.document.childNodes[0].childNodes[11].childNodes[0].nodeValue;}'


+ 'function refload() {document.getElementById("iframe_id").contentWindow.location.reload();setTimeout(test, 1000);} function about(){alert("تصميم: ناصر العنزي\\nTwitter: @nas272\\nnas272@hotmail.com\\n(قم بتسجيل الدخول لتعمل وظائف السكربت)");};'



var css =document.createElement('style');
css.innerHTML = '.draggable{left:151px;top:71px;position:absolute;width:40%;border:1px solid;background:white;font-size: medium;} #table,#table tr,#table tr td {border:1px solid#737373;border-collapse:collapse;min-width:29px;text-align:center;}.label{background-color:#FCD8F9;}';
document.getElementsByTagName('head')[0].appendChild(script2);
document.getElementsByTagName('head')[0].appendChild(css);

var dump = '<div class="draggable"> 	<iframe src="http://192.168.100.1/api/device/signal" id="iframe_id" style="border:2px solid red;display: none;" title="ipa"></iframe>		<table style="width: 100%;" id="table"dir="rtl" border="0"></td><td colspan="4"  dir="ltr" style="height: 23px;"><bt><button onclick="about()" id="about" style="position:absolute;left:0;top:0;height: 25px;width: 25px;" >؟</button><span id="netmode"></span><span id="band"></span><span>تم التطور من مشعل العنزي</span></td></tr><tr> 				<td id="t21" class="label">رقم الخلية</td><td><span id="cell_id">0</span></td><td id="t23" class="label">PCI</td><td><span id="pci">0</span></td> 				</tr> 				<tr> 				<td id="t31" class="label">RSSI</td><td><span id="rssi">0</span></td><td id="t33" class="label">SINR</td><td><span id="sinr">0</span></td> 				</tr> 				<tr id="rsrqtr"> 				<td id="t311" class="label">RSRQ</td><td id="rsrq">0</td><td id="t322" class="label">RSRP</td><td><span id="rsrp">0</span></td> 				</tr> 				 				<tr id="txpowertr"> 				<td id="t61" class="label">txpower</td><td id="txpower" colspan="3" dir="ltr">0</td> 				</tr> 				<tr> 				<td id="t21" class="label">RSRQ_5G</td><td><span id="nrrsrq" dir="ltr">0</span></td><td id="t23" class="label">SINR_5G</td><td><span id="nrsinr" dir="ltr">0</span></td> 				</tr> 				<tr> 				<td id="t61" class="label">RSRP_5G</td><td colspan="3" id="nrrsrp">-</td></td> 				</tr> 			</table> 			</div>';

(function(){
	$('body').append(dump);
	$( ".draggable" ).resizable();
  $( ".draggable" ).draggable();
  
})();







												



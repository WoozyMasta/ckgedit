var update_ckgeditInternalLink,update_ckgeditMediaLink;var fckgInternalInputId,fckgMediaInputId,ckgeditIwikiData,ckgeditIwikiIndex,ckgeditInternalText;var ck_m_files_protocol,ckg_dialog;window.onbeforeunload=function(){};CKEDITOR.dialog.add("link",function(b){oDokuWiki_FCKEditorInstance.Lang=b.lang;ck_m_files_protocol=oDokuWiki_FCKEditorInstance.mfiles?["m-files://\u200E","m-files://"]:"";var y=oDokuWiki_FCKEditorInstance.dwiki_doku_base;var S=CKEDITOR.plugins.link;var f=new Object();f.doku_base=new RegExp("^"+y.replace(/\//g,"\\/"),"g");f.media_internal=/lib\/exe\/fetch\.php\/(.*)/;f.media_rewrite_1=/^_media\/(.*)/;f.media_rewrite_1Doku_Base=new RegExp("^"+y+"_media/(.*)");f.media_rewrite_2=/exe\/fetch.php\?media=(.*)/;f.internal_link=/doku.php\?id=(.*)/;f.internal_link_rewrite_2=/doku.php\/(.*)/;f.internal_link_rewrite_1=new RegExp("^"+y+"(?!_media)(.*)");f.samba=/file:\/\/\/\/\/(.*)/;f.interwiki=/^(.*?)oIWIKIo(.*?)cIWIKIc/;f.samba_unsaved=/^\\\\\w+(\\\w.*)/;ckg_dialog=CKEDITOR.dialog;var C;var I={InternalLink:"internal link",LinkText:"Link Text (Optional)",InternalMedia:"internal media",MediaFileLink:"link to media file",SMBLabel:"Samba Share",GetHeadingsLabel:"Get Headings",QStringLabel:"Query String (For example: value_1=1&value_2=2) ",ResetQS:"Reset Query String",NotSetOption:"Not Set",AdvancedInfo:"To create anchors from Dokuwiki headers, click on the Get Headings button, select the header, click OK. You can go back, select a new page and get new headers.",AdvancedTabPrompt:"Use the advanced tab to create page anchors and query strings",SMBExample:"Enter your share as: \\\\Server\\directory\\file",InterWikiLink:"Interwiki Link",InterWikiType:"Interwiki Type",InterwikiPlaceHolder:"Interwiki Replacement Text",InterwikiInfo:"<div style='max-width:350px; white-space: pre-wrap;border:1px solid #cccccc; margin:auto; overflow:auto; padding:4px;line-height:125%;'>Dokuwiki's interwiki links are short-cuts which look like this: <span style='font-weight:600'>[[wp&gt;Shakespeare]]</span>, which will create a link to the English Wikipedia article on Shakespeare.  The <span style='font-weight:600'>wp</span> part designates a link pattern;  the text following the '<span style='font-weight:900'>&gt;</span>' will be inserted into the link, replacing  a place holder, which is enclosed in curly brackets, as in <span style='font-weight:600'>{NAME}</span>. When there is no place holder, the replacement text will be appended to the end of the link.</div>",MediaFileLink:"link to media file"};var s=b.lang.fbrowser?b.lang.fbrowser:I;var j=function(V){if(s[V]&&s[V]!=""){return s[V]}return I[V]};var l=function(){var V;jQuery.ajax(DOKU_BASE+"lib/exe/ajax.php",{data:{call:"iwiki_list"},type:"POST",async:true,dataType:"json",success:function(X,Y,W){V=X;ckgeditIwikiData=V},error:function(W,Y,X){alert(Y);alert(X)}});return V};var Q=function(){var Y=this.getDialog();var aa=Y.getContentElement("advanced","internalAnchor").getInputElement().$.id;var V=document.getElementById(aa);var X=Y.getContentElement("info","internal").getInputElement().$.id;X=document.getElementById(X).value;if(!X){return}var W={push:function(ac,ab){this.stack[this.Index]=(new Option(ac,ab,false,false));this.Index++},Index:0,stack:undefined,selection:"",ini:function(ab){this.stack=V.options;this.stack.length=0;this.Index=0;this.push(ab,"")}};var Z="dw_id="+X;b.config.jquery.post(b.config.ckedit_path+"get_headers.php",Z,function(af,ab){if(ab=="success"){var ag=decodeURIComponent(af);if(ag.match(/^\s*__EMPTY__\s*$/)){W.ini("No Headers Found");W.selection="";return}W.ini("Headings Menu");var ae=ag.split("@@");for(var ad in ae){var ac=ae[ad].split(/;;/);W.push(ac[0],ac[1])}}},"html")};var L=function(W){var X=W;var V=0;var Y="dw_id="+encodeURIComponent(W);b.config.jquery.ajax({url:b.config.ckedit_path+"useheading.php",async:true,data:Y,type:"POST",dataType:"html",success:function(Z){if(V){alert(Z)}X=decodeURIComponent(Z)},error:function(Z,ab,aa){X=W}});return X};var T=function(){return C};var q;var n=function(){oDokuWiki_FCKEditorInstance.isLocalDwikiBrowser=false;oDokuWiki_FCKEditorInstance.isUrlExtern=false;oDokuWiki_FCKEditorInstance.isDwikiMediaFile=false;var Y=this.getDialog(),ab=["urlOptions","anchorOptions","emailOptions","internalOptions","mediaOptions","sambaOptions","interwikiOptions"],aa=this.getValue(),Z=Y.definition.getContents("upload"),V=Z&&Z.hidden;Y.hidePage("advanced");if(aa=="internal"){oDokuWiki_FCKEditorInstance.isLocalDwikiBrowser=true;Y.showPage("advanced")}else{if(aa=="media"){oDokuWiki_FCKEditorInstance.isDwikiMediaFile=true}}if(aa=="url"){oDokuWiki_FCKEditorInstance.isUrlExtern=true;if(!V){Y.showPage("upload")}}else{if(!V){Y.hidePage("upload")}}for(var X=0;X<ab.length;X++){var W=Y.getContentElement("info",ab[X]);if(!W){continue}W=W.getElement().getParent().getParent();if(ab[X]==aa+"Options"){W.show()}else{W.hide()}}Y.layout()};var K=/^javascript:/,M=/^mailto:([^?]+)(?:\?(.+))?$/,h=/subject=([^;?:@&=$,\/]*)/,U=/body=([^;?:@&=$,\/]*)/,v=/^#(.*)$/,c=/^((?:http|https|ftp|news|m-files):\/\/)?(.*)$/,w=/^(_(?:self|top|parent|blank))$/,p=/^javascript:void\(location\.href='mailto:'\+String\.fromCharCode\(([^)]+)\)(?:\+'(.*)')?\)$/,H=/^javascript:([^(]+)\(([^)]+)\)$/;var r=y.replace("/","/")+"doku.php?id=(.*)$";var a="/"+r+"/";var m=/\s*window.open\(\s*this\.href\s*,\s*(?:'([^']*)'|null)\s*,\s*'([^']*)'\s*\)\s*;\s*return\s*false;*\s*/;var A=/(?:^|,)([^=]+)=(\d+|yes|no)/gi;var o=function(Y,V){var ao=(V&&(V.data("cke-saved-href")||V.getAttribute("href")))||"",ac,an,ak,ad,af={};if((ac=ao.match(K))){if(k=="encode"){ao=ao.replace(p,function(at,av,au){return"mailto:"+String.fromCharCode.apply(String,av.split(","))+(au&&u(au))})}else{if(k){ao.replace(H,function(az,aB,aw){if(aB==J.name){af.type="email";var aA=af.email={};var au=/[^,\s]+/g,av=/(^')|('$)/g,at=aw.match(au),aC=at.length,ay,aD;for(var ax=0;ax<aC;ax++){aD=decodeURIComponent(u(at[ax].replace(av,"")));ay=J.params[ax].toLowerCase();aA[ay]=aD}aA.address=[aA.name,aA.domain].join("@")}})}}}if(!af.type){var al=V?V.getAttribute("class"):"";if((ak=ao.match(v))){af.type="anchor";af.anchor={};af.anchor.name=af.anchor.id=ak[1]}else{if((an=ao.match(M))){var ae=ao.match(h),ag=ao.match(U);af.type="email";var ai=(af.email={});ai.address=an[1];ae&&(ai.subject=decodeURIComponent(ae[1]));ag&&(ai.body=decodeURIComponent(ag[1]))}else{if((ad=ao.match(f.media_internal))||(ad=ao.match(f.media_rewrite_1))||(ad=ao.match(f.media_rewrite_2))||(ad=ao.match(f.media_rewrite_1Doku_Base))){af.type="media";af.url={};af.url.protocol="";af.url.url="";af.url.selected=ad[1]}else{if((ad=ao.match(a))||(ad=ao.match(f.internal_link_rewrite_2))||(ad=ao.match(f.internal_link_rewrite_1))){af.type="internal";af.url={};var X=ad[1].split("=");af.url.selected=X[1];af.url.protocol="";af.url.url=""}else{if(ad=ao.match(f.samba)){af.type="samba";af.url={};af.url.url="";af.url.protocol="";af.url.selected="\\\\"+ad[1].replace(/\//g,"\\")}else{if(ad=ao.match(f.samba_unsaved)){af.type="samba";af.url={};af.url.url="";af.url.protocol="";af.url.selected=ad[0]}else{if(ad=ao.match(f.interwiki)||al.match(/interwiki/)){var aj="";if(ad&&ad[2]){aj=decodeURIComponent(ad[2])}af.url={};q=V.getAttribute("class");var ab=ckg_dialog.getContentElement("info","iwiki_shortcut");var ap=ab.getInputElement().$.id;var ah=document.getElementById(ap);var aa=q.match(/iw_([^\s]+)/);var Z=aa[1].replace(/_/,".");if(!aj){var am=ckgeditIwikiData[Z];am=am.replace(/\{\w+\}$/,"");var W=new RegExp(am+"(.*)");aa=ao.match(W);aj=aa[1]}Z=ckgeditIwikiIndex[Z];if(Z){ah.selectedIndex=Z}else{ah.selectedIndex="0"}ab.disable();af.type="interwiki";af.url.selected=aj;af.url.url=aj}else{if(ao&&(ad=ao.match(c))){af.type="url";af.url={};af.url.protocol=ad[1];af.url.url=ad[2]}else{af.type="url"}}}}}}}}}if(V){var ar=V.getAttribute("target");af.target={};af.adv={};var aq=this}this._.selectedElement=V;return af};var D=function(V){if(!V){return}document.getElementById(fckgInternalInputId).disabled=true;document.getElementById(fckgInternalInputId).style.fontWeight="bold";document.getElementById(fckgInternalInputId).style.backgroundColor="#DDDDDD";V=V.replace(/^[\/\:]/,"");V=V.replace(/\//g,":");V=":"+V;document.getElementById(fckgInternalInputId).value=V};update_ckgeditInternalLink=D;var d=function(V){if(!V){return}V=V.replace(/^[\/\:]/,"");V=V.replace(/\//g,":");V=":"+V;document.getElementById(fckgMediaInputId).value=V};update_ckgeditMediaLink=d;var t=function(V){for(i in V){msg=i+"="+V[i];if(!confirm(msg)){break}}};var z=function(W,V){if(V[W]){this.setValue(V[W][this.id]||"")}};var O=function(V){return z.call(this,"target",V)};var N=function(V){return z.call(this,"adv",V)};var R=function(W,V){if(!V[W]){V[W]={}}V[W][this.id]=this.getValue()||""};var B=function(V){return R.call(this,"target",V)};var P=function(V){return R.call(this,"adv",V)};function u(V){return V.replace(/\\'/g,"'")}function E(V){return V.replace(/'/g,"\\$&")}var k=b.config.emailProtection||"";if(k&&k!="encode"){var J={};k.replace(/^([^(]+)\(([^)]+)\)$/,function(V,W,X){J.name=W;J.params=[];X.replace(/[^,\s]+/g,function(Y){J.params.push(Y)})})}function e(X){var V,W=J.name,ab=J.params,Z,aa;V=[W,"("];for(var Y=0;Y<ab.length;Y++){Z=ab[Y].toLowerCase();aa=X[Z];Y>0&&V.push(",");V.push("'",aa?E(encodeURIComponent(X[Z])):"","'")}V.push(")");return V.join("")}function x(W){var V,Z=W.length,X=[];for(var Y=0;Y<Z;Y++){V=W.charCodeAt(Y);X.push(V)}return"String.fromCharCode("+X.join(",")+")"}function G(W){var V=W.getAttribute("class");return V?V.replace(/\s*(?:cke_anchor_empty|cke_anchor)(?:\s*$)?/g,""):""}var F=b.lang.common,g=b.lang.link;return{title:g.title,minWidth:375,minHeight:250,contents:[{id:"info",label:g.info,title:g.info,elements:[{id:"linkType",type:"select",label:g.type,"default":"url",items:[[g.toUrl,"url"],[j("InternalLink"),"internal"],[j("InternalMedia"),"media"],[g.toEmail,"email"],[j("SMBLabel"),"samba"],[j("InterWikiLink"),"interwiki"]],onChange:n,setup:function(V){if(V.type){this.setValue(V.type)}},commit:function(V){V.type=this.getValue()}},{type:"vbox",id:"urlOptions",children:[{type:"hbox",widths:["25%","75%"],children:[{id:"protocol",type:"select",label:F.protocol,"default":"http://",items:[["http://\u200E","http://"],["https://\u200E","https://"],["ftp://\u200E","ftp://"],["news://\u200E","news://"],ck_m_files_protocol],setup:function(V){if(V.url){this.setValue(V.url.protocol||"")}},commit:function(V){if(!V.url){V.url={}}V.url.protocol=this.getValue()}},{type:"text",id:"url",label:F.url,required:true,onLoad:function(){this.allowOnChange=true},onKeyUp:function(){this.allowOnChange=false;var X=this.getDialog().getContentElement("info","protocol"),V=this.getValue(),W=/^(http|https|ftp|news|m-files):\/\/(?=.)/i,Z=/^((javascript:)|[#\/\.\?])/i;var Y=W.exec(V);if(Y){this.setValue(V.substr(Y[0].length));X.setValue(Y[0].toLowerCase())}else{if(Z.test(V)){X.setValue("")}}this.allowOnChange=true},onChange:function(){if(this.allowOnChange){this.onKeyUp()}},validate:function(){var V=this.getDialog();if(V.getContentElement("info","linkType")&&V.getValueOf("info","linkType")!="url"){return true}if(this.getDialog().fakeObj){return true}var W=CKEDITOR.dialog.validate.notEmpty(g.noUrl);return W.apply(this)},setup:function(V){this.allowOnChange=false;if(V.url){this.setValue(V.url.url)}this.allowOnChange=true},commit:function(V){this.onChange();if(!V.url){V.url={}}V.url.url=this.getValue();this.allowOnChange=false}}],setup:function(V){if(!this.getDialog().getContentElement("info","linkType")){this.getElement().show()}}}]},{type:"vbox",id:"internalOptions",children:[{type:"button",id:"browse1",hidden:"true",filebrowser:"info:url",label:F.browseServer},{type:"text",id:"internal",label:j("InternalLink"),required:true,setup:function(V){if(V){if(V.url&&V.url.selected){var W=V.url.selected.replace(/^\:/,"");this.setValue(":"+W)}}}},{type:"text",id:"internal_text",label:j("LinkText"),required:false},{id:"anchorsmsg",type:"html",html:j("AdvancedTabPrompt")}]},{type:"vbox",id:"interwikiOptions",children:[{type:"text",id:"interwiki",label:j("InterwikiPlaceHolder"),required:true,setup:function(V){if(V){if(V.url&&V.url.selected){var W=V.url.selected.replace(/^\:/,"");this.setValue(W)}}},commit:function(V){if(!V.url){V.url={}}V.url.selection=this.getValue()}},{id:"iwiki_shortcut",type:"select",label:j("InterWikiType"),"default":"",items:[["Not Set","Not-Set"]],setup:function(V){if(V.url){this.setValue(V.url.iwiki_shortcut||"")}},commit:function(V){if(!V.url){V.url={}}V.url.iwiki_shortcut=this.getValue()}},{id:"iwikimsg",type:"html",html:j("InterwikiInfo")}]},{type:"vbox",id:"mediaOptions",children:[{type:"button",id:"browse2",filebrowser:"info:url",label:F.browseServer},{type:"text",id:"media",label:j("MediaFileLink"),required:true,setup:function(V){if(V){if(V.url&&V.url.selected){var W=V.url.selected.replace(/^\:/,"");this.setValue(":"+W)}}}}]},{type:"vbox",id:"sambaOptions",children:[{type:"html",id:"smb_msg",html:j("SMBExample")},{type:"text",id:"samba",width:"50",label:j("SMBLabel"),required:true,setup:function(V){if(V.url&&V.url.selected){this.setValue(V.url.selected)}}}]},{type:"vbox",id:"emailOptions",padding:1,children:[{type:"text",id:"emailAddress",label:g.emailAddress,required:true,validate:function(){var V=this.getDialog();if(!V.getContentElement("info","linkType")||V.getValueOf("info","linkType")!="email"){return true}var W=CKEDITOR.dialog.validate.notEmpty(g.noEmail);return W.apply(this)},setup:function(W){if(W.email){this.setValue(W.email.address)}var V=this.getDialog().getContentElement("info","linkType");if(V&&V.getValue()=="email"){this.select()}},commit:function(V){if(!V.email){V.email={}}V.email.address=this.getValue()}},{type:"text",id:"emailSubject",label:g.emailSubject,setup:function(V){if(V.email){this.setValue(V.email.subject)}},commit:function(V){if(!V.email){V.email={}}V.email.subject=this.getValue()}},{type:"textarea",id:"emailBody",label:g.emailBody,rows:3,"default":"",setup:function(V){if(V.email){this.setValue(V.email.body)}},commit:function(V){if(!V.email){V.email={}}V.email.body=this.getValue()}}],setup:function(V){if(!this.getDialog().getContentElement("info","linkType")){this.getElement().hide()}}}]},{id:"upload",label:g.upload,title:g.upload,hidden:true,filebrowser:"uploadButton",elements:[{type:"file",id:"upload",label:F.upload,style:"height:40px",size:29},{type:"fileButton",id:"uploadButton",label:F.uploadSubmit,filebrowser:"info:url","for":["upload","upload"]}]},{id:"advanced",label:g.advanced,title:g.advanced,elements:[{id:"msg",type:"html",html:"<p style='max-width:350px; white-space: pre-wrap;'>"+j("AdvancedInfo")+"</p>"},{id:"internalAnchor",type:"select","default":"",items:[["Not Set",""]],setup:function(V){if(V.hash){this.setValue(V.hash)}},commit:function(V){V.hash=this.getValue()}},{type:"button",id:"getheaders",onClick:Q,label:j("GetHeadingsLabel")},{type:"html",html:"<br />"},{type:"text",id:"queryString",label:j("QStringLabel"),setup:function(V){if(V.qstring){this.setValue(V.qstring)}},commit:function(V){V.qstring=this.getValue()}},{type:"button",id:"clearquerystring",onClick:function(){var W=this.getDialog();var X=W.getContentElement("advanced","queryString").getInputElement().$.id;var V=document.getElementById(X);V.value=""},label:j("ResetQS")},{type:"vbox",padding:1,hidden:true,children:[{type:"hbox",widths:["45%","55%"],children:[{type:"text",label:g.cssClasses,"default":"",id:"advCSSClasses",setup:N,commit:P},{type:"text",label:g.charset,"default":"",id:"advCharset",setup:N,commit:P}]}]}]}],onShow:function(){var X=this.getParentEditor(),W=X.getSelection(),V=null;if((V=S.getSelectedLink(X))&&V.hasAttribute("href")){W.selectElement(V)}else{V=null}this.setupContent(o.apply(this,[X,V]))},onOk:function(){var ax=false;var af=new RegExp(oDokuWiki_FCKEditorInstance.imageUploadAllowedExtensions);var ah={},aa=[],aA={},az=this,ac=this.getParentEditor();this.commitContent(aA);var at=false;var ai="";switch(aA.type||"url"){case"media":if(document.getElementById(fckgMediaInputId).value){aA.url.url=document.getElementById(fckgMediaInputId).value}aA.adv.advTitle=aA.url.url;var ay=aA.url.url.match(/(\.(\w+))$/);ai=aA.url.url.replace(/^:/,"");aA.url.url=top.dokuBase+"doku.php?id="+aA.url.url;if(ay[1].match(af)){aA.adv.advContentType="linkonly"}else{aA.adv.advContentType="other_mime";aA.url.url=top.dokuBase+"lib/exe/fetch.php?media="+ai;at=true}aA.adv.advCSSClasses="media mediafile";if(ay){aA.adv.advCSSClasses+=" mf_"+ay[2]}var an=(aA.url&&aA.url.protocol!=undefined)?aA.url.protocol:"http://",ad=(aA.url&&CKEDITOR.tools.trim(aA.url.url))||"";ah["data-cke-saved-href"]=(ad.indexOf("/")===0)?ad:an+ad;break;case"internal":ax=document.getElementById(ckgeditInternalText).value?document.getElementById(ckgeditInternalText).value:false;if(!aA.url.url){aA.url.url=document.getElementById(fckgInternalInputId).value;alert(aA.url.url);if(!aA.url.url.match(/^:\w+/)){var aC=top.getCurrentWikiNS()+":";aC=aC.replace(/:$/,"");var Z=new RegExp(":?"+aC+":");if(!aA.url.url.match(Z)){aA.url.url=aC+":"+aA.url.url;aA.url.url=aA.url.url.replace(/\:{2,}/g,":")}}}aA.url.url=aA.url.url.replace(/^.*?\/data\/pages\//,"");aA.url.url=aA.url.url.replace(/^\:/,"");aA.url.url=":"+aA.url.url.replace(/\//g,":");aA.adv.advCSSClasses="wikilink1";if(oDokuWiki_FCKEditorInstance.useheading=="y"){aA.adv.advTitle=L(aA.url.url)}else{aA.adv.advTitle=aA.url.url}aA.url.url=top.dokuBase+"doku.php?id="+aA.url.url;if(aA.hash){aA.url.url+="#"+aA.hash}if(aA.qstring){aA.url.url+="&"+aA.qstring}var an=(aA.url&&aA.url.protocol!=undefined)?aA.url.protocol:"http://",ad=(aA.url&&CKEDITOR.tools.trim(aA.url.url))||"";ah["data-cke-saved-href"]=(ad.indexOf("/")===0)?ad:an+ad;break;case"interwiki":if(q){aA.adv.advCSSClasses=q}else{aA.adv.advCSSClasses="interwiki iw_"+aA.url.iwiki_shortcut}var au=ckgeditIwikiData[aA.url.iwiki_shortcut];aA.adv.advTitle=aA.url.selection;if(aA.url.selection){aA.url.selection="oIWIKIo"+aA.url.selection+"cIWIKIc"}if(au.match(/\{.*?\}/)){aA.url.url=ckgeditIwikiData[aA.url.iwiki_shortcut].replace(/{.*?}/,aA.url.selection)}else{aA.url.url=au+aA.url.selection}ah["data-cke-saved-href"]=aA.url.url;break;case"url":var an=(aA.url&&aA.url.protocol!=undefined)?aA.url.protocol:"http://",ad=(aA.url&&CKEDITOR.tools.trim(aA.url.url))||"";ah["data-cke-saved-href"]=(ad.indexOf("/")===0)?ad:an+ad;break;case"anchor":var aD=(aA.anchor&&aA.anchor.name),ao=(aA.anchor&&aA.anchor.id);ah["data-cke-saved-href"]="#"+(aD||ao||"");break;case"samba":if(!aA.url.url){aA.url.url=document.getElementById(T()).value}if(!aA.url.url){alert("Missing Samba Url");return false}aA.url.protocol="";var an="";ad=(aA.url&&CKEDITOR.tools.trim(aA.url.url))||"";ah["data-cke-saved-href"]=(ad.indexOf("/")===0)?ad:an+ad;aA.adv.advCSSClasses="windows";aA.adv.advTitle=aA.url.url;break;case"email":var Y,aq=aA.email,ab=aq.address;switch(k){case"":case"encode":var ae=encodeURIComponent(aq.subject||""),aj=encodeURIComponent(aq.body||"");var ag=[];aj&&ag.push("body="+aj);ae&&ag.push("subject="+ae);ag=ag.length?"?"+ag.join("&"):"";if(k=="encode"){Y=["javascript:void(location.href='mailto:'+",x(ab)];ag&&Y.push("+'",E(ag),"'");Y.push(")")}else{Y=["mailto:",ab,ag]}break;default:var ap=ab.split("@",2);aq.name=ap[0];aq.domain=ap[1];Y=["javascript:",e(aq)]}ah["data-cke-saved-href"]=Y.join("");break}if(aA.adv){var ar=function(aE,aF){var aG=aA.adv[aE];if(aG){ah[aF]=aG}else{aa.push(aF)}};ar("advId","id");ar("advLangDir","dir");ar("advAccessKey","accessKey");if(aA.adv.advName){ah.name=ah["data-cke-saved-name"]=aA.adv.advName}else{aa=aa.concat(["data-cke-saved-name","name"])}ar("advLangCode","lang");ar("advTabIndex","tabindex");if(!at){ar("advTitle","title")}ar("advContentType","type");ar("advCSSClasses","class");ar("advCharset","charset");ar("advStyles","style");ar("advRel","rel")}var aB=ac.getSelection();var am=aB.getSelectedText()?aB.getSelectedText():false;ah.href=ah["data-cke-saved-href"];if(!this._.selectedElement){var X=aB.getRanges(true);if(X.length==1&&X[0].collapsed){var al=new CKEDITOR.dom.text(aA.type=="email"?aA.email.address:ah["data-cke-saved-href"],ac.document);X[0].insertNode(al);X[0].selectNodeContents(al);aB.selectRanges(X)}if(navigator.userAgent.match(/(Trident|MSIE)/)){var V=ac.document.createElement("a");V.setAttribute("href",ah.href);if(!am&&(aA.type=="media"||aA.type=="internal")){if(ax){V.setHtml(ax)}else{V.setHtml(aA.adv.advTitle)}}else{V.setHtml(aB.getSelectedText())}for(attr in ah){if(attr.match(/href/i)){continue}V.setAttribute(attr,ah[attr])}ac.insertElement(V)}else{var aw=new CKEDITOR.style({element:"a",attributes:ah});aw.type=CKEDITOR.STYLE_INLINE;aw.apply(ac.document)}}else{var W=this._.selectedElement,av=W.data("cke-saved-href"),ak=W.getHtml();if(at){ah.type="other_mime";ah.title=":"+ai}W.setAttributes(ah);W.removeAttributes(aa);if(aA.adv&&aA.adv.advName&&CKEDITOR.plugins.link.synAnchorSelector){W.addClass(W.getChildCount()?"cke_anchor":"cke_anchor_empty")}if(av==ak||aA.type=="email"&&ak.indexOf("@")!=-1){W.setHtml(aA.type=="email"?aA.email.address:ah["data-cke-saved-href"])}aB.selectElement(W);delete this._.selectedElement}if(ax){al.setText(ax)}else{if(al&&aA.adv.advTitle){al.setText(aA.adv.advTitle)}}},onLoad:function(){l();ckg_iwi_Select_Id_x=this.getContentElement("info","iwiki_shortcut").getInputElement().$.id;setTimeout(function(ac){var Z=document.getElementById(ckg_iwi_Select_Id_x);this.stack=Z.options;this.stack.length=0;this.stack[0]=(new Option("Not Set","not-set",false,false));ckgeditIwikiIndex=new Array();var ab=1;for(var aa in ckgeditIwikiData){this.stack[ab]=new Option(aa+" >> "+ckgeditIwikiData[aa],aa,false,false);ckgeditIwikiIndex[aa]=ab;ab++}},2000);oDokuWiki_FCKEditorInstance.isDwikiImage=false;fckgInternalInputId=this.getContentElement("info","internal").getInputElement().$.id;ckgeditInternalText=this.getContentElement("info","internal_text").getInputElement().$.id;fckgMediaInputId=this.getContentElement("info","media").getInputElement().$.id;C=this.getContentElement("info","samba").getInputElement().$.id;var X=this.getContentElement("info","iwiki_shortcut").getInputElement().$.id;this.getContentElement("info","media").disable();this.hidePage("advanced");this.showPage("info");ckg_dialog=this;var W=this._.tabs.advanced&&this._.tabs.advanced[0];var V=this;var Y=j("NotSetOption");W.on("focus",function(aa){var ab=V.getContentElement("advanced","internalAnchor").getInputElement().$.id;var Z=document.getElementById(ab);Z.selectedIndex=-1;Z.options.length=0;Z.options[0]=new Option(Y,"",false,false)})},onFocus:function(){var V=this.getContentElement("info","linkType"),W;if(V&&V.getValue()=="url"){W=this.getContentElement("info","url");W.select()}}}});
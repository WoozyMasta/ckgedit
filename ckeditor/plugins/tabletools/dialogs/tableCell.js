﻿CKEDITOR.dialog.add("cellProperties",function(e){var b=e.lang.table,d=b.cell,c=e.lang.common,i=CKEDITOR.dialog.validate,k=/^(\d+(?:\.\d+)?)(px|%)$/,j=/^(\d+(?:\.\d+)?)px$/,g=CKEDITOR.tools.bind,f={type:"html",html:"&nbsp;"},h=e.lang.dir=="rtl",a=e.plugins.colordialog;return{title:d.title,minWidth:CKEDITOR.env.ie&&CKEDITOR.env.quirks?450:410,minHeight:CKEDITOR.env.ie&&(CKEDITOR.env.ie7Compat||CKEDITOR.env.quirks)?230:220,contents:[{id:"info",label:d.title,accessKey:"I",elements:[{type:"hbox",widths:["40%","5%","40%"],children:[{type:"vbox",padding:0,children:[{type:"hbox",widths:["70%","30%"],children:[{type:"text",id:"width",hidden:true,width:"100px",label:c.width,validate:i.number(d.invalidWidth),onLoad:function(){var m=this.getDialog().getContentElement("info","widthType"),l=m.getElement(),o=this.getInputElement(),n=o.getAttribute("aria-labelledby");o.setAttribute("aria-labelledby",[n,l.$.id].join(" "))},setup:function(l){var n=parseInt(l.getAttribute("width"),10),m=parseInt(l.getStyle("width"),10);!isNaN(n)&&this.setValue(n);!isNaN(m)&&this.setValue(m)},commit:function(l){var n=parseInt(this.getValue(),10),m=this.getDialog().getValueOf("info","widthType");if(!isNaN(n)){l.setStyle("width",n+m)}else{l.removeStyle("width")}l.removeAttribute("width")},"default":""},{type:"select",id:"widthType",hidden:true,label:e.lang.table.widthUnit,labelStyle:"visibility:hidden","default":"px",items:[[b.widthPx,"px"],[b.widthPc,"%"]],setup:function(l){var m=k.exec(l.getStyle("width")||l.getAttribute("width"));if(m){this.setValue(m[2])}}}]},f,{type:"select",id:"hAlign",label:d.hAlign,"default":"",items:[[c.notSet,""],[c.alignLeft,"left"],[c.alignCenter,"center"],[c.alignRight,"right"]],setup:function(l){var n=l.getAttribute("class");var m=n.match(/(\w+)align/);if(m){n=m[1]}else{n=""}this.setValue(n)},commit:function(l){var m=this.getValue();if(m){l.setStyle("text-align",m);l.setAttribute("class",m+"align")}else{l.removeStyle("text-align")}l.removeAttribute("align")}},]},f,{type:"vbox",padding:0,children:[{type:"select",id:"cellType",label:d.cellType,"default":"td",items:[[d.data,"td"],[d.header,"th"]],setup:function(l){this.setValue(l.getName())},commit:function(l){l.renameNode(this.getValue())}},f,{type:"text",id:"rowSpan",label:d.rowSpan,"default":"",validate:i.integer(d.invalidRowSpan),setup:function(l){var m=parseInt(l.getAttribute("rowSpan"),10);if(m&&m!=1){this.setValue(m)}},commit:function(l){var m=parseInt(this.getValue(),10);if(m&&m!=1){l.setAttribute("rowSpan",this.getValue())}else{l.removeAttribute("rowSpan")}}},{type:"text",id:"colSpan",label:d.colSpan,"default":"",validate:i.integer(d.invalidColSpan),setup:function(m){var l=parseInt(m.getAttribute("colSpan"),10);if(l&&l!=1){this.setValue(l)}},commit:function(l){var m=parseInt(this.getValue(),10);if(m&&m!=1){l.setAttribute("colSpan",this.getValue())}else{l.removeAttribute("colSpan")}}},f,{type:"hbox",padding:0,widths:["60%","40%"],children:[{type:"text",id:"bgColor",hidden:true,label:d.bgColor,"default":"",setup:function(m){var l=m.getAttribute("bgColor"),n=m.getStyle("background-color");this.setValue(n||l)},commit:function(l){var m=this.getValue();if(m){l.setStyle("background-color",this.getValue())}else{l.removeStyle("background-color")}l.removeAttribute("bgColor")}},a?{type:"button",hidden:true,id:"bgColorChoose","class":"colorChooser",label:d.chooseColor,onLoad:function(){this.getElement().getParent().setStyle("vertical-align","bottom")},onClick:function(){e.getColorFromDialog(function(l){if(l){this.getDialog().getContentElement("info","bgColor").setValue(l)}this.focus()},this)}}:f]},f,{type:"hbox",padding:0,hidden:true,widths:["60%","40%"],children:[{type:"text",id:"borderColor",label:d.borderColor,"default":"",setup:function(m){var l=m.getAttribute("borderColor"),n=m.getStyle("border-color");this.setValue(n||l)},commit:function(l){var m=this.getValue();if(m){l.setStyle("border-color",this.getValue())}else{l.removeStyle("border-color")}l.removeAttribute("borderColor")}},a?{type:"button",id:"borderColorChoose","class":"colorChooser",hidden:true,label:d.chooseColor,style:(h?"margin-right":"margin-left")+": 10px",onLoad:function(){this.getElement().getParent().setStyle("vertical-align","bottom")},onClick:function(){e.getColorFromDialog(function(l){if(l){this.getDialog().getContentElement("info","borderColor").setValue(l)}this.focus()},this)}}:f]}]}]}]}],onShow:function(){this.cells=CKEDITOR.plugins.tabletools.getSelectedCells(this._.editor.getSelection());this.setupContent(this.cells[0])},onOk:function(){var o=this._.editor.getSelection(),n=o.createBookmarks();var l=this.cells;for(var m=0;m<l.length;m++){this.commitContent(l[m])}this._.editor.forceNextSelectionCheck();o.selectBookmarks(n);this._.editor.selectionChange()}}});
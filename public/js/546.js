/*! For license information please see 546.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[546],{6546:(t,e,o)=>{var i,n;i=[o(9755),o(3333),o(3662)],void 0===(n=function(t){return function(t,e,o,i){"use strict";var n=t.fn.dataTable;return n.AutoFill.classes.btn="btn btn-primary",n}(t,window,document)}.apply(e,i))||(t.exports=n)},3662:(t,e,o)=>{var i,n;i=[o(9755),o(1920)],void 0===(n=function(t){return function(t,e,o,i){"use strict";var n=t.fn.dataTable,l=0,a=function(e,o){if(!n.versionCheck||!n.versionCheck("1.10.8"))throw"Warning: AutoFill requires DataTables 1.10.8 or greater";this.c=t.extend(!0,{},n.defaults.autoFill,a.defaults,o),this.s={dt:new n.Api(e),namespace:".autoFill"+l++,scroll:{},scrollInterval:null,handle:{height:0,width:0},enabled:!1},this.dom={handle:t('<div class="dt-autofill-handle"/>'),select:{top:t('<div class="dt-autofill-select top"/>'),right:t('<div class="dt-autofill-select right"/>'),bottom:t('<div class="dt-autofill-select bottom"/>'),left:t('<div class="dt-autofill-select left"/>')},background:t('<div class="dt-autofill-background"/>'),list:t('<div class="dt-autofill-list">'+this.s.dt.i18n("autoFill.info","")+"<ul/></div>"),dtScroll:null,offsetParent:null},this._constructor()};t.extend(a.prototype,{enabled:function(){return this.s.enabled},enable:function(t){var e=this;return!1===t?this.disable():(this.s.enabled=!0,this._focusListener(),this.dom.handle.on("mousedown",(function(t){return e._mousedown(t),!1})),this)},disable:function(){return this.s.enabled=!1,this._focusListenerRemove(),this},_constructor:function(){var e=this,o=this.s.dt,i=t("div.dataTables_scrollBody",this.s.dt.table().container());o.settings()[0].autoFill=this,i.length&&(this.dom.dtScroll=i,"static"===i.css("position")&&i.css("position","relative")),!1!==this.c.enable&&this.enable(),o.on("destroy.autoFill",(function(){e._focusListenerRemove()}))},_attach:function(e){var o=this.s.dt,i=o.cell(e).index(),n=this.dom.handle,l=this.s.handle;if(i&&-1!==o.columns(this.c.columns).indexes().indexOf(i.column)){this.dom.offsetParent||(this.dom.offsetParent=t(o.table().node()).offsetParent()),l.height&&l.width||(n.appendTo("body"),l.height=n.outerHeight(),l.width=n.outerWidth());var a=this._getPosition(e,this.dom.offsetParent);this.dom.attachedTo=e,n.css({top:a.top+e.offsetHeight-l.height,left:a.left+e.offsetWidth-l.width}).appendTo(this.dom.offsetParent)}else this._detach()},_actionSelector:function(e){var o=this,i=this.s.dt,n=a.actions,l=[];if(t.each(n,(function(t,o){o.available(i,e)&&l.push(t)})),1===l.length&&!1===this.c.alwaysAsk){var s=n[l[0]].execute(i,e);this._update(s,e)}else if(l.length>1){var r=this.dom.list.children("ul").empty();l.push("cancel"),t.each(l,(function(l,s){r.append(t("<li/>").append('<div class="dt-autofill-question">'+n[s].option(i,e)+"<div>").append(t('<div class="dt-autofill-button">').append(t('<button class="'+a.classes.btn+'">'+i.i18n("autoFill.button","&gt;")+"</button>").on("click",(function(){var l=n[s].execute(i,e,t(this).closest("li"));o._update(l,e),o.dom.background.remove(),o.dom.list.remove()})))))})),this.dom.background.appendTo("body"),this.dom.list.appendTo("body"),this.dom.list.css("margin-top",this.dom.list.outerHeight()/2*-1)}},_detach:function(){this.dom.attachedTo=null,this.dom.handle.detach()},_drawSelection:function(e,o){var i=this.s.dt,n=this.s.start,l=t(this.dom.start),a={row:this.c.vertical?i.rows({page:"current"}).nodes().indexOf(e.parentNode):n.row,column:this.c.horizontal?t(e).index():n.column},s=i.column.index("toData",a.column),r=i.row(":eq("+a.row+")",{page:"current"}),d=t(i.cell(r.index(),s).node());if(i.cell(d).any()&&-1!==i.columns(this.c.columns).indexes().indexOf(s)){var c,u,f,h,p,m;this.s.end=a,c=n.row<a.row?l:d,u=n.row<a.row?d:l,f=n.column<a.column?l:d,h=n.column<a.column?d:l,c=this._getPosition(c.get(0)).top,f=this._getPosition(f.get(0)).left,p=this._getPosition(u.get(0)).top+u.outerHeight()-c,m=this._getPosition(h.get(0)).left+h.outerWidth()-f;var v=this.dom.select;v.top.css({top:c,left:f,width:m}),v.left.css({top:c,left:f,height:p}),v.bottom.css({top:c+p,left:f,width:m}),v.right.css({top:c,left:f+m,height:p})}},_editor:function(t){var e=this.s.dt,o=this.c.editor;if(o){for(var n={},l=[],a=o.fields(),s=0,r=t.length;s<r;s++)for(var d=0,c=t[s].length;d<c;d++){var u=t[s][d],f=e.settings()[0].aoColumns[u.index.column],h=f.editField;if(h===i)for(var p=f.mData,m=0,v=a.length;m<v;m++){var b=o.field(a[m]);if(b.dataSrc()===p){h=b.name();break}}if(!h)throw"Could not automatically determine field data. Please see https://datatables.net/tn/11";n[h]||(n[h]={});var g=e.row(u.index.row).id();n[h][g]=u.set,l.push(u.index)}o.bubble(l,!1).multiSet(n).submit()}},_emitEvent:function(e,o){this.s.dt.iterator("table",(function(i,n){t(i.nTable).triggerHandler(e+".dt",o)}))},_focusListener:function(){var e=this,i=this.s.dt,n=this.s.namespace,l=null!==this.c.focus?this.c.focus:i.init().keys||i.settings()[0].keytable?"focus":"hover";"focus"===l?i.on("key-focus.autoFill",(function(t,o,i){e._attach(i.node())})).on("key-blur.autoFill",(function(t,o,i){e._detach()})):"click"===l?(t(i.table().body()).on("click"+n,"td, th",(function(t){e._attach(this)})),t(o.body).on("click"+n,(function(o){t(o.target).parents().filter(i.table().body()).length||e._detach()}))):t(i.table().body()).on("mouseenter"+n,"td, th",(function(t){e._attach(this)})).on("mouseleave"+n,(function(o){t(o.relatedTarget).hasClass("dt-autofill-handle")||e._detach()}))},_focusListenerRemove:function(){var e=this.s.dt;e.off(".autoFill"),t(e.table().body()).off(this.s.namespace),t(o.body).off(this.s.namespace)},_getPosition:function(e,o){var i,n=e,l=0,a=0;o||(o=t(t(this.s.dt.table().node())[0].offsetParent));do{var s=n.offsetTop,r=n.offsetLeft;if(i=t(n.offsetParent),l+=s+1*parseInt(i.css("border-top-width")||0),a+=r+1*parseInt(i.css("border-left-width")||0),"body"===n.nodeName.toLowerCase())break;n=i.get(0)}while(i.get(0)!==o.get(0));return{top:l,left:a}},_mousedown:function(i){var n=this,l=this.s.dt;this.dom.start=this.dom.attachedTo,this.s.start={row:l.rows({page:"current"}).nodes().indexOf(t(this.dom.start).parent()[0]),column:t(this.dom.start).index()},t(o.body).on("mousemove.autoFill",(function(t){n._mousemove(t)})).on("mouseup.autoFill",(function(t){n._mouseup(t)}));var a=this.dom.select,s=t(l.table().node()).offsetParent();a.top.appendTo(s),a.left.appendTo(s),a.right.appendTo(s),a.bottom.appendTo(s),this._drawSelection(this.dom.start,i),this.dom.handle.css("display","none");var r=this.dom.dtScroll;this.s.scroll={windowHeight:t(e).height(),windowWidth:t(e).width(),dtTop:r?r.offset().top:null,dtLeft:r?r.offset().left:null,dtHeight:r?r.outerHeight():null,dtWidth:r?r.outerWidth():null}},_mousemove:function(t){this.s.dt;var e=t.target.nodeName.toLowerCase();"td"!==e&&"th"!==e||(this._drawSelection(t.target,t),this._shiftScroll(t))},_mouseup:function(e){t(o.body).off(".autoFill");var n=this,l=this.s.dt,a=this.dom.select;a.top.remove(),a.left.remove(),a.right.remove(),a.bottom.remove(),this.dom.handle.css("display","block");var s=this.s.start,r=this.s.end;if(s.row!==r.row||s.column!==r.column){var d=l.cell(":eq("+s.row+")",s.column+":visible",{page:"current"});if(t("div.DTE",d.node()).length){var c=l.editor();return c.on("submitSuccess.dtaf close.dtaf",(function(){c.off(".dtaf"),setTimeout((function(){n._mouseup(e)}),100)})).on("submitComplete.dtaf preSubmitCancelled.dtaf close.dtaf",(function(){c.off(".dtaf")})),void c.submit()}for(var u=this._range(s.row,r.row),f=this._range(s.column,r.column),h=[],p=l.settings()[0],m=p.aoColumns,v=l.columns(this.c.columns).indexes(),b=0;b<u.length;b++)h.push(t.map(f,(function(t){var e=l.row(":eq("+u[b]+")",{page:"current"}),o=l.cell(e.index(),t+":visible"),n=o.data(),a=o.index(),s=m[a.column].editField;if(s!==i&&(n=p.oApi._fnGetObjectDataFn(s)(l.row(a.row).data())),-1!==v.indexOf(a.column))return{cell:o,data:n,label:o.data(),index:a}})));this._actionSelector(h),clearInterval(this.s.scrollInterval),this.s.scrollInterval=null}},_range:function(t,e){var o,i=[];if(t<=e)for(o=t;o<=e;o++)i.push(o);else for(o=t;o>=e;o--)i.push(o);return i},_shiftScroll:function(t){var e,i,n,l,a=this,s=(this.s.dt,this.s.scroll),r=!1,d=5,c=65,u=t.pageY-o.body.scrollTop,f=t.pageX-o.body.scrollLeft;u<c?e=-1*d:u>s.windowHeight-c&&(e=d),f<c?i=-1*d:f>s.windowWidth-c&&(i=d),null!==s.dtTop&&t.pageY<s.dtTop+c?n=-1*d:null!==s.dtTop&&t.pageY>s.dtTop+s.dtHeight-c&&(n=d),null!==s.dtLeft&&t.pageX<s.dtLeft+c?l=-1*d:null!==s.dtLeft&&t.pageX>s.dtLeft+s.dtWidth-c&&(l=d),e||i||n||l?(s.windowVert=e,s.windowHoriz=i,s.dtVert=n,s.dtHoriz=l,r=!0):this.s.scrollInterval&&(clearInterval(this.s.scrollInterval),this.s.scrollInterval=null),!this.s.scrollInterval&&r&&(this.s.scrollInterval=setInterval((function(){if(s.windowVert&&(o.body.scrollTop+=s.windowVert),s.windowHoriz&&(o.body.scrollLeft+=s.windowHoriz),s.dtVert||s.dtHoriz){var t=a.dom.dtScroll[0];s.dtVert&&(t.scrollTop+=s.dtVert),s.dtHoriz&&(t.scrollLeft+=s.dtHoriz)}}),20))},_update:function(t,e){if(!1!==t){var o,i=this.s.dt,n=i.columns(this.c.columns).indexes();if(this._emitEvent("preAutoFill",[i,e]),this._editor(e),null!==this.c.update?this.c.update:!this.c.editor){for(var l=0,a=e.length;l<a;l++)for(var s=0,r=e[l].length;s<r;s++)o=e[l][s],-1!==n.indexOf(o.index.column)&&o.cell.data(o.set);i.draw(!1)}this._emitEvent("autoFill",[i,e])}}}),a.actions={increment:{available:function(t,e){var o=e[0][0].label;return!isNaN(o-parseFloat(o))},option:function(t,e){return t.i18n("autoFill.increment",'Increment / decrement each cell by: <input type="number" value="1">')},execute:function(e,o,i){for(var n=1*o[0][0].data,l=1*t("input",i).val(),a=0,s=o.length;a<s;a++)for(var r=0,d=o[a].length;r<d;r++)o[a][r].set=n,n+=l}},fill:{available:function(t,e){return!0},option:function(t,e){return t.i18n("autoFill.fill","Fill all cells with <i>%d</i>",e[0][0].label)},execute:function(t,e,o){for(var i=e[0][0].data,n=0,l=e.length;n<l;n++)for(var a=0,s=e[n].length;a<s;a++)e[n][a].set=i}},fillHorizontal:{available:function(t,e){return e.length>1&&e[0].length>1},option:function(t,e){return t.i18n("autoFill.fillHorizontal","Fill cells horizontally")},execute:function(t,e,o){for(var i=0,n=e.length;i<n;i++)for(var l=0,a=e[i].length;l<a;l++)e[i][l].set=e[i][0].data}},fillVertical:{available:function(t,e){return e.length>1},option:function(t,e){return t.i18n("autoFill.fillVertical","Fill cells vertically")},execute:function(t,e,o){for(var i=0,n=e.length;i<n;i++)for(var l=0,a=e[i].length;l<a;l++)e[i][l].set=e[0][l].data}},cancel:{available:function(){return!1},option:function(t){return t.i18n("autoFill.cancel","Cancel")},execute:function(){return!1}}},a.version="2.3.9",a.defaults={alwaysAsk:!1,focus:null,columns:"",enable:!0,update:null,editor:null,vertical:!0,horizontal:!0},a.classes={btn:"btn"};var s=t.fn.dataTable.Api;return s.register("autoFill()",(function(){return this})),s.register("autoFill().enabled()",(function(){var t=this.context[0];return!!t.autoFill&&t.autoFill.enabled()})),s.register("autoFill().enable()",(function(t){return this.iterator("table",(function(e){e.autoFill&&e.autoFill.enable(t)}))})),s.register("autoFill().disable()",(function(){return this.iterator("table",(function(t){t.autoFill&&t.autoFill.disable()}))})),t(o).on("preInit.dt.autofill",(function(e,o,i){if("dt"===e.namespace){var l=o.oInit.autoFill,s=n.defaults.autoFill;if(l||s){var r=t.extend({},l,s);!1!==l&&new a(o,r)}}})),n.AutoFill=a,n.AutoFill=a,a}(t,window,document)}.apply(e,i))||(t.exports=n)},3333:(t,e,o)=>{var i,n;i=[o(9755),o(1920)],void 0===(n=function(t){return function(t,e,o,i){"use strict";var n=t.fn.dataTable;return t.extend(!0,n.defaults,{dom:"<'row'<'col-sm-12 col-md-6'l><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",renderer:"bootstrap"}),t.extend(n.ext.classes,{sWrapper:"dataTables_wrapper dt-bootstrap5",sFilterInput:"form-control form-control-sm",sLengthSelect:"form-select form-select-sm",sProcessing:"dataTables_processing card",sPageButton:"paginate_button page-item"}),n.ext.renderer.pageButton.bootstrap=function(e,l,a,s,r,d){var c,u,f,h=new n.Api(e),p=e.oClasses,m=e.oLanguage.oPaginate,v=e.oLanguage.oAria.paginate||{},b=0,g=function(o,i){var n,l,s,f,w=function(e){e.preventDefault(),t(e.currentTarget).hasClass("disabled")||h.page()==e.data.action||h.page(e.data.action).draw("page")};for(n=0,l=i.length;n<l;n++)if(f=i[n],Array.isArray(f))g(o,f);else{switch(c="",u="",f){case"ellipsis":c="&#x2026;",u="disabled";break;case"first":c=m.sFirst,u=f+(r>0?"":" disabled");break;case"previous":c=m.sPrevious,u=f+(r>0?"":" disabled");break;case"next":c=m.sNext,u=f+(r<d-1?"":" disabled");break;case"last":c=m.sLast,u=f+(r<d-1?"":" disabled");break;default:c=f+1,u=r===f?"active":""}c&&(s=t("<li>",{class:p.sPageButton+" "+u,id:0===a&&"string"==typeof f?e.sTableId+"_"+f:null}).append(t("<a>",{href:"#","aria-controls":e.sTableId,"aria-label":v[f],"data-dt-idx":b,tabindex:e.iTabIndex,class:"page-link"}).html(c)).appendTo(o),e.oApi._fnBindAction(s,{action:f},w),b++)}};try{f=t(l).find(o.activeElement).data("dt-idx")}catch(t){}g(t(l).empty().html('<ul class="pagination"/>').children("ul"),s),f!==i&&t(l).find("[data-dt-idx="+f+"]").trigger("focus")},n}(t,window,document)}.apply(e,i))||(t.exports=n)}}]);
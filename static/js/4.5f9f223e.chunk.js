(this.webpackJsonpElinext_test=this.webpackJsonpElinext_test||[]).push([[4],{1858:function(e,t,o){"use strict";var a=o(34),r=o(131),n=o(192),c=o(1870),s=o(1853),l=o(76),i=o(1871),d=o(0),h=o.n(d),u=o(134),p=o(135),j=o(9),b=h.a.memo((function(e){var t=Object(d.useState)(!1),o=Object(r.a)(t,2),h=o[0],b=o[1],f=Object(d.useState)(!!localStorage[e.photoId]),x=Object(r.a)(f,2),g=x[0],m=x[1],O=function(){b(!1)};return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(c.a,{hoverable:!0,style:{width:300},onClick:function(){return b(!0)},cover:Object(j.jsx)("img",{alt:"example",src:e.photoUrlC||e.photoUrlO||"https://znaiwifi.com/wp-content/uploads/2018/01/hqdefault.jpg"}),children:Object(j.jsxs)("div",{className:"flex flex-col gap-8",children:[Object(j.jsx)(u.a,{level:4,children:e.title}),Object(j.jsx)("div",{children:Object(j.jsx)(p.a,{type:"secondary",children:"Click to card for view more information."})})]})}),Object(j.jsx)(s.a,{visible:h,title:e.title.length>50?e.title.slice(0,50)+" ...":e.title,onCancel:O,width:1e3,footer:[Object(j.jsx)(l.a,{onClick:function(){localStorage[e.photoId]?n.a.error({message:"Bookmark Error",description:"You already have this bookmark."}):(localStorage[e.photoId]=JSON.stringify(Object(a.a)({},e)),m(!!localStorage[e.photoId]),e.updateBookmarks&&e.updateBookmarks())},hidden:g,children:"Add to bookmark"},"addToFav"),Object(j.jsx)(l.a,{onClick:function(){localStorage[e.photoId]?(delete localStorage[e.photoId],m(!!localStorage[e.photoId]),e.updateBookmarks&&e.updateBookmarks()):n.a.error({message:"Bookmark Error",description:"You havent this bookmark."})},hidden:!g,children:"Delete from bookmark"},"remFav"),Object(j.jsx)(l.a,{onClick:O,children:"Close"},"back")],children:Object(j.jsxs)("div",{className:"flex flex-col items-start gap-2",children:[Object(j.jsxs)(p.a,{italic:!0,className:"block",children:["Owner: ",e.ownerName]}),Object(j.jsxs)("div",{className:"flex gap-4 items-start justify-center",children:[(e.photoUrlO||e.photoUrlC)&&Object(j.jsx)(i.a,{width:300,src:e.photoUrlO||e.photoUrlC,preview:!1}),e.description&&Object(j.jsx)("div",{style:{width:"600px"},children:Object(j.jsx)(p.a,{children:e.description})})]}),Object(j.jsx)("div",{className:"flex flex-wrap justify-center",children:e.tags&&e.tags.split(" ").map((function(e,t){return Object(j.jsx)(p.a,{keyboard:!0,className:"block",children:e},t)}))})]})})]})}));t.a=b},1873:function(e,t,o){"use strict";o.r(t);var a=o(131),r=o(0),n=o.n(r),c=o(192),s=o(1872),l=o(72),i=o(89),d=o(5),h=o(4),u=o(6),p=o.n(u),j=o(29),b=o(1863),f=o(56),x=o(76),g=o(48),m=o(46),O=o(17),v=function(e,t){var o={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(o[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(o[a[r]]=e[a[r]])}return o},k=r.forwardRef((function(e,t){var o,a,n=e.prefixCls,c=e.inputPrefixCls,s=e.className,l=e.size,i=e.suffix,u=e.enterButton,k=void 0!==u&&u,y=e.addonAfter,C=e.loading,w=e.disabled,S=e.onSearch,N=e.onChange,P=v(e,["prefixCls","inputPrefixCls","className","size","suffix","enterButton","addonAfter","loading","disabled","onSearch","onChange"]),E=r.useContext(m.b),B=E.getPrefixCls,_=E.direction,I=r.useContext(g.b),T=l||I,U=r.useRef(null),z=function(e){var t;document.activeElement===(null===(t=U.current)||void 0===t?void 0:t.input)&&e.preventDefault()},A=function(e){var t;S&&S(null===(t=U.current)||void 0===t?void 0:t.input.value,e)},M=B("input-search",n),F=B("input",c),D="boolean"===typeof k||"undefined"===typeof k?r.createElement(b.a,null):null,J="".concat(M,"-button"),R=k||{},Y=R.type&&!0===R.type.__ANT_BUTTON;a=Y||"button"===R.type?Object(O.a)(R,Object(h.a)({onMouseDown:z,onClick:A,key:"enterButton"},Y?{className:J,size:T}:{})):r.createElement(x.a,{className:J,type:k?"primary":void 0,size:T,disabled:w,key:"enterButton",onMouseDown:z,onClick:A,loading:C,icon:D},k),y&&(a=[a,Object(O.a)(y,{key:"addonAfter"})]);var q=p()(M,(o={},Object(d.a)(o,"".concat(M,"-rtl"),"rtl"===_),Object(d.a)(o,"".concat(M,"-").concat(T),!!T),Object(d.a)(o,"".concat(M,"-with-button"),!!k),o),s);return r.createElement(f.a,Object(h.a)({ref:Object(j.a)(U,t),onPressEnter:A},P,{size:T,prefixCls:F,addonAfter:a,suffix:i,onChange:function(e){e&&e.target&&"click"===e.type&&S&&S(e.target.value,e),N&&N(e)},className:q,disabled:w}))}));k.displayName="Search";var y=k,C=o(1858),w=o(179),S=o(132),N=o(9),P=n.a.memo((function(e){var t=Object(r.useState)(""),o=Object(a.a)(t,2),n=o[0],i=o[1];return Object(N.jsxs)("div",{className:"flex flex-col gap-4 items-center p-4",children:[Object(N.jsx)(y,{onSearch:function(){n?e.getPhotosTC(n,1,"search"):c.a.error({message:"Search Error",description:"Please enter your request text in area."})},value:n,onChange:function(e){return i(e.target.value)},enterButton:!0,placeholder:"Please enter text for search"}),e.isFetching?Object(N.jsx)(S.a,{height:"400px"}):Object(N.jsxs)("div",{children:[e.photos&&0!==e.photos.length&&Object(N.jsxs)("div",{className:"flex flex-col gap-2 items-center",children:[Object(N.jsx)("div",{className:"grid grid-cols-3 gap-4 pb-4",style:{height:"400px",overflowY:"scroll"},children:e.photos.map((function(e){return Object(N.jsx)(C.a,{title:e.title,description:e.description._content,photoUrlO:e.url_o?e.url_o:null,photoUrlC:e.url_c?e.url_c:null,photoId:e.id,tags:e.tags,ownerName:e.ownername},e.id)}))}),Object(N.jsx)(s.a,{current:e.currentPage,total:e.totalPages||0,pageSize:21,onChange:function(t){e.getPhotosTC(e.searchTextMemory,t,"paginate")},showSizeChanger:!1})]}),(!e.photos||0===e.photos.length)&&Object(N.jsx)(l.a,{image:l.a.PRESENTED_IMAGE_SIMPLE})]})]})})),E=Object(i.b)((function(e){return{isFetching:e.search.isFetching,photos:e.search.photos,totalPages:e.search.totalPages,currentPage:e.search.currentPage,searchTextMemory:e.search.searchTextMemory}}),{getPhotosTC:w.b})(P);t.default=E}}]);
//# sourceMappingURL=4.5f9f223e.chunk.js.map
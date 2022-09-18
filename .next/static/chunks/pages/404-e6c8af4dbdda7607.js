(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{5084:function(e,t,o){"use strict";o.d(t,{Z:function(){return k}});var n=o(3366),a=o(7462),i=o(7294),r=o(6010),s=o(7925),l=o(4780),c=o(1796),d=o(7074),p=o(8884),u=o(9828),h=o(6622),m=o(4867);function v(e){return(0,m.Z)("MuiButton",e)}var g=(0,o(1588).Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var x=i.createContext({}),b=o(5893);const f=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],S=["root"],Z=e=>(0,a.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),z=(0,d.ZP)(u.Z,{shouldForwardProp:e=>(0,d.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],t[`${o.variant}${(0,h.Z)(o.color)}`],t[`size${(0,h.Z)(o.size)}`],t[`${o.variant}Size${(0,h.Z)(o.size)}`],"inherit"===o.color&&t.colorInherit,o.disableElevation&&t.disableElevation,o.fullWidth&&t.fullWidth]}})((({theme:e,ownerState:t})=>{var o,n;return(0,a.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,a.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:(e.vars||e).palette.grey.A100,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":(0,a.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${g.focusVisible}`]:(0,a.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${g.disabled}`]:(0,a.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"outlined"===t.variant&&"secondary"===t.color&&{border:`1px solid ${(e.vars||e).palette.action.disabled}`},"contained"===t.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${(0,c.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.vars?e.vars.palette.text.primary:null==(o=(n=e.palette).getContrastText)?void 0:o.call(n,e.palette.grey[300]),backgroundColor:(e.vars||e).palette.grey[300],boxShadow:(e.vars||e).shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})}),(({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${g.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${g.disabled}`]:{boxShadow:"none"}})),y=(0,d.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.startIcon,t[`iconSize${(0,h.Z)(o.size)}`]]}})((({ownerState:e})=>(0,a.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},Z(e)))),w=(0,d.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.endIcon,t[`iconSize${(0,h.Z)(o.size)}`]]}})((({ownerState:e})=>(0,a.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},Z(e))));var k=i.forwardRef((function(e,t){const o=i.useContext(x),c=(0,s.Z)(o,e),d=(0,p.Z)({props:c,name:"MuiButton"}),{children:u,color:m="primary",component:g="button",className:Z,disabled:k=!1,disableElevation:C=!1,disableFocusRipple:$=!1,endIcon:I,focusVisibleClassName:j,fullWidth:R=!1,size:E="medium",startIcon:N,type:P,variant:W="text"}=d,T=(0,n.Z)(d,f),_=(0,a.Z)({},d,{color:m,component:g,disabled:k,disableElevation:C,disableFocusRipple:$,fullWidth:R,size:E,type:P,variant:W}),B=(e=>{const{color:t,disableElevation:o,fullWidth:n,size:i,variant:r,classes:s}=e,c={root:["root",r,`${r}${(0,h.Z)(t)}`,`size${(0,h.Z)(i)}`,`${r}Size${(0,h.Z)(i)}`,"inherit"===t&&"colorInherit",o&&"disableElevation",n&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,h.Z)(i)}`],endIcon:["endIcon",`iconSize${(0,h.Z)(i)}`]},d=(0,l.Z)(c,v,s);return(0,a.Z)({},s,d)})(_),{root:F}=B,M=(0,n.Z)(B,S),L=N&&(0,b.jsx)(y,{className:M.startIcon,ownerState:_,children:N}),O=I&&(0,b.jsx)(w,{className:M.endIcon,ownerState:_,children:I});return(0,b.jsxs)(z,(0,a.Z)({ownerState:_,className:(0,r.Z)(o.className,F,Z),component:g,disabled:k,focusRipple:!$,focusVisibleClassName:(0,r.Z)(M.focusVisible,j),ref:t,type:P},T,{classes:M,children:[L,u,O]}))}))},6141:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return o(9622)}])},2794:function(e,t,o){"use strict";var n=o(5893),a=o(7074),i=o(1953),r=(0,a.ZP)(i.Z)((function(e){return{height:"100vh","& .content-center":{display:"flex",minHeight:"100vh",alignItems:"center",justifyContent:"center",padding:e.theme.spacing(5)},"& .content-right":{display:"flex",minHeight:"100vh",overflowX:"hidden",position:"relative"}}}));t.Z=function(e){var t=e.children;return(0,n.jsx)(r,{className:"layout-wrapper",children:(0,n.jsx)(i.Z,{className:"app-content",sx:{minHeight:"100vh",overflowX:"hidden",position:"relative"},children:t})})}},9622:function(e,t,o){"use strict";o.r(t);var n=o(4924),a=o(5893),i=o(1664),r=o.n(i),s=o(5084),l=o(7074),c=o(9630),d=o(1953),p=o(2794),u=o(3350),h=(0,l.ZP)(d.Z)((function(e){var t=e.theme;return(0,n.Z)({},t.breakpoints.down("md"),{width:"90vw"})})),m=(0,l.ZP)("img")((function(e){var t,o=e.theme;return t={marginTop:o.spacing(15),marginBottom:o.spacing(15)},(0,n.Z)(t,o.breakpoints.down("lg"),{height:450,marginTop:o.spacing(10),marginBottom:o.spacing(10)}),(0,n.Z)(t,o.breakpoints.down("md"),{height:400}),t})),v=function(){return(0,a.jsxs)(d.Z,{className:"content-center",children:[(0,a.jsxs)(d.Z,{sx:{p:5,display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"},children:[(0,a.jsxs)(h,{children:[(0,a.jsx)(c.Z,{variant:"h1",sx:{mb:2.5},children:"404"}),(0,a.jsx)(c.Z,{variant:"h5",sx:{mb:2.5,letterSpacing:"0.18px",fontSize:"1.5rem !important"},children:"Page Not Found \u26a0\ufe0f"}),(0,a.jsx)(c.Z,{variant:"body2",children:"We couldn\u2032t find the page you are looking for."})]}),(0,a.jsx)(m,{alt:"error-illustration",src:"/images/pages/404.png"}),(0,a.jsx)(r(),{passHref:!0,href:"/",children:(0,a.jsx)(s.Z,{component:"a",variant:"contained",sx:{px:5.5},children:"Back to Home"})})]}),(0,a.jsx)(u.Z,{image:"/images/pages/misc-404-object.png"})]})};v.getLayout=function(e){return(0,a.jsx)(p.Z,{children:e})},t.default=v},3350:function(e,t,o){"use strict";var n=o(4924),a=o(5893),i=o(7294),r=o(1225),s=o(7074),l=o(2097),c=(0,s.ZP)("img")((function(){return{bottom:0,zIndex:-1,width:"100%",position:"absolute"}})),d=(0,s.ZP)("img")((function(e){var t=e.theme;return(0,n.Z)({left:"15%",bottom:"12%",position:"absolute"},t.breakpoints.down("lg"),{bottom:"7%"})}));t.Z=function(e){var t=e.image,o=(0,l.Z)(),n=t||"/images/pages/misc-coming-soon-object.png";return(0,r.Z)(o.breakpoints.down("md"))?null:(0,a.jsxs)(i.Fragment,{children:[(0,a.jsx)(d,{alt:"shape",src:n}),(0,a.jsx)(c,{alt:"mask",src:"/images/pages/misc-mask-".concat(o.palette.mode,".png")})]})}}},function(e){e.O(0,[774,888,179],(function(){return t=6141,e(e.s=t);var t}));var t=e.O();_N_E=t}]);
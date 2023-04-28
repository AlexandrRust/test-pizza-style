"use strict";(self.webpackChunktest_pizza_style=self.webpackChunktest_pizza_style||[]).push([[483],{4455:function(n,e,a){a.d(e,{W:function(){return c}});var i,r=a(168),t=a(1528),c=(0,a(6444).ZP)(t.Z)(i||(i=(0,r.Z)(["\n  max-width: 350px;\n  height: 600px;\n  overflow: hidden;\n  @media screen and (min-width: 768px) {\n    flex-basis: calc(100% / 2 - 20px);\n    height: 580px;\n  }\n  @media screen and (min-width: 991px) {\n    flex-basis: calc(100% / 2 - 20px);\n    height: 580px;\n  }\n  @media screen and (min-width: 1200px) {\n    flex-basis: calc(100% / 3 - 20px);\n    height: 580px;\n  }\n  @media screen and (min-width: 1280px) {\n    flex-basis: calc(100% / 3 - 20px);\n  }\n"])))},6207:function(n,e,a){a.d(e,{k:function(){return t}});var i,r=a(168),t=a(6444).ZP.div(i||(i=(0,r.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  margin-top: 10px;\n"])))},682:function(n,e,a){a.d(e,{$:function(){return c}});var i,r=a(168),t=a(7022),c=(0,a(6444).ZP)(t.Z)(i||(i=(0,r.Z)(["\n  padding-top: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n  flex-wrap: wrap;\n  @media screen and (min-width: 768px) {\n    flex-direction: row;\n    align-align-items: center;\n  }\n"])))},3483:function(n,e,a){a.r(e),a.d(e,{default:function(){return p}});var i,r=a(1413),t=a(682),c=a(2791),d=a(1528),s=a(3360),o=a(9434),l=a(5515),f=a(3313),u=a(6207),x=a(4455),m=a(168),Z=(0,a(6444).ZP)(d.Z.Img)(i||(i=(0,m.Z)(["\n  cursor: pointer;\n  transition: all 0.4s ease-in-out;\n  &:hover {\n    transform: scale(1.1);\n  }\n"]))),v=a(184),p=function(){var n=(0,o.I0)(),e=(0,o.v9)(l.t.d),a=(0,o.v9)(l.t._);(0,c.useEffect)((function(){n(l.Y.getPizzaList())}),[n]);return(0,v.jsx)(t.$,{children:e.map((function(e){return(0,v.jsxs)(x.W,{children:[(0,v.jsx)(Z,{variant:"top",src:e.image}),(0,v.jsxs)(d.Z.Body,{children:[(0,v.jsx)(d.Z.Title,{children:e.title}),(0,v.jsx)(d.Z.Text,{children:e.description}),(0,v.jsxs)(d.Z.Text,{children:["Price: ",e.price," UAH"]}),(0,v.jsxs)(u.k,{children:[(0,v.jsx)(s.Z,{variant:"secondary",onClick:function(){return function(e){n(l.Y.addPizzaCard((0,r.Z)((0,r.Z)({},e),{},{quantity:1})))}(e)},children:"Add to cart"}),a.find((function(n){return e.id===n.id}))&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(s.Z,{variant:"secondary",children:(0,v.jsx)(f.OvN,{onClick:function(){return function(e){var i=a.find((function(n){return e.id===n.id}));n(l.Y.plusPizzaCard((0,r.Z)((0,r.Z)({},e),{},{quantity:i.quantity+1})))}(e)}})}),(0,v.jsx)(s.Z,{variant:"secondary",children:(0,v.jsx)(f.ego,{onClick:function(){return function(e){var i=a.find((function(n){return e.id===n.id}));n(l.Y.minusPizzaCard((0,r.Z)((0,r.Z)({},e),{},{quantity:i.quantity-1})))}(e)}})})]})]})]})]},e.id)}))})}},3360:function(n,e,a){var i=a(1413),r=a(9439),t=a(5987),c=a(1694),d=a.n(c),s=a(2791),o=a(5341),l=a(162),f=a(184),u=["as","bsPrefix","variant","size","active","disabled","className"],x=s.forwardRef((function(n,e){var a=n.as,c=n.bsPrefix,s=n.variant,x=void 0===s?"primary":s,m=n.size,Z=n.active,v=void 0!==Z&&Z,p=n.disabled,h=void 0!==p&&p,b=n.className,g=(0,t.Z)(n,u),y=(0,l.vE)(c,"btn"),j=(0,o.FT)((0,i.Z)({tagName:a,disabled:h},g)),N=(0,r.Z)(j,2),P=N[0],w=N[1].tagName;return(0,f.jsx)(w,(0,i.Z)((0,i.Z)((0,i.Z)({},P),g),{},{ref:e,disabled:h,className:d()(b,y,v&&"active",x&&"".concat(y,"-").concat(x),m&&"".concat(y,"-").concat(m),g.href&&h&&"disabled")}))}));x.displayName="Button",e.Z=x},1528:function(n,e,a){a.d(e,{Z:function(){return k}});var i=a(1413),r=a(5987),t=a(1694),c=a.n(t),d=a(2791),s=a(162),o=a(6543),l=a(7472),f=a(9040),u=a(6040),x=a(184),m=["bsPrefix","className","as"],Z=d.forwardRef((function(n,e){var a=n.bsPrefix,t=n.className,o=n.as,l=void 0===o?"div":o,f=(0,r.Z)(n,m),Z=(0,s.vE)(a,"card-header"),v=(0,d.useMemo)((function(){return{cardHeaderBsPrefix:Z}}),[Z]);return(0,x.jsx)(u.Z.Provider,{value:v,children:(0,x.jsx)(l,(0,i.Z)((0,i.Z)({ref:e},f),{},{className:c()(t,Z)}))})}));Z.displayName="CardHeader";var v=Z,p=["bsPrefix","className","bg","text","border","body","children","as"],h=(0,l.Z)("h5"),b=(0,l.Z)("h6"),g=(0,o.Z)("card-body"),y=(0,o.Z)("card-title",{Component:h}),j=(0,o.Z)("card-subtitle",{Component:b}),N=(0,o.Z)("card-link",{Component:"a"}),P=(0,o.Z)("card-text",{Component:"p"}),w=(0,o.Z)("card-footer"),C=(0,o.Z)("card-img-overlay"),z=d.forwardRef((function(n,e){var a=n.bsPrefix,t=n.className,d=n.bg,o=n.text,l=n.border,f=n.body,u=void 0!==f&&f,m=n.children,Z=n.as,v=void 0===Z?"div":Z,h=(0,r.Z)(n,p),b=(0,s.vE)(a,"card");return(0,x.jsx)(v,(0,i.Z)((0,i.Z)({ref:e},h),{},{className:c()(t,b,d&&"bg-".concat(d),o&&"text-".concat(o),l&&"border-".concat(l)),children:u?(0,x.jsx)(g,{children:m}):m}))}));z.displayName="Card";var k=Object.assign(z,{Img:f.Z,Title:y,Subtitle:j,Body:g,Link:N,Text:P,Header:v,Footer:w,ImgOverlay:C})},9040:function(n,e,a){var i=a(1413),r=a(5987),t=a(1694),c=a.n(t),d=a(2791),s=a(162),o=a(184),l=["bsPrefix","className","variant","as"],f=d.forwardRef((function(n,e){var a=n.bsPrefix,t=n.className,d=n.variant,f=n.as,u=void 0===f?"img":f,x=(0,r.Z)(n,l),m=(0,s.vE)(a,"card-img");return(0,o.jsx)(u,(0,i.Z)({ref:e,className:c()(d?"".concat(m,"-").concat(d):m,t)},x))}));f.displayName="CardImg",e.Z=f}}]);
//# sourceMappingURL=483.0a03f705.chunk.js.map
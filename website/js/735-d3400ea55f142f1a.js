"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[735],{73413:function(e,t,n){n.r(t),n.d(t,{useIsAccountFrozen:function(){return p}});var r=n(73360),i=n(7761),o=n(670),s=n(12197),a=n(93981),c=n(24628),u=n(89388),l=n(74518),d=n(60347),f=n(29541),p=function(e){var t=(0,o.gZ)().mintToAssociatedTokenAccountMap;return(0,a.useMemo)((function(){var n;return Boolean(null===t||void 0===t||null===(n=t.get((null===e||void 0===e?void 0:e.address)||""))||void 0===n?void 0:n.info.isFrozen)}),[t,null===e||void 0===e?void 0:e.address])};t.default=function(e){var t=e.tokenInfo,n=e.className;return!1!==p(t)&&t?(0,f.jsx)("div",{className:(0,u.cn)("pt-3 pb-1.5 px-2 mb-4 bg-warning/10 rounded-lg border border-warning/50 text-xs flex items-center space-x-3",n),children:(0,f.jsxs)("div",{className:"flex flex-col items-start gap-2",children:[(0,f.jsx)("p",{className:"text-warning",children:(0,f.jsx)(r.cC,{id:"This token account is frozen, please contact token project for more information."})}),(0,f.jsxs)("div",{className:"flex w-full justify-between",children:[(0,f.jsxs)("div",{className:"flex items-center gap-2 w-full",children:[(0,f.jsx)(l.Z,{width:20,height:20,info:t}),(0,f.jsx)("span",{className:"font-semibold",children:t.symbol}),(0,f.jsx)("div",{className:"text-warning/50",children:(0,s.Xn)(t.address)})]}),(0,f.jsxs)(d.Z,{tokenInfo:t,className:"text-warning rounded-lg whitespace-nowrap bg-warning/[.15] px-2 py-1.5",children:[(0,f.jsx)("span",{children:i.ag._("Check in Explorer")}),(0,f.jsx)(c.Z,{})]})]})]})}):null}},95523:function(e,t,n){n(93981);var r=n(29541);t.Z=function(e){var t=e.width,n=void 0===t?21:t,i=e.height,o=void 0===i?22:i;return(0,r.jsxs)("svg",{width:n,height:o,viewBox:"0 0 21 22",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:[(0,r.jsx)("path",{d:"M6.51043 7.47998V14.99H7.77043V7.47998L9.66043 9.36998L10.5505 8.47994L7.5859 5.51453C7.3398 5.26925 6.94114 5.26925 6.69504 5.51453L3.73047 8.47994L4.62051 9.36998L6.51043 7.47998Z",fill:"currentColor"}),(0,r.jsx)("path",{d:"M14.4902 14.52V7.01001H13.2302V14.52L11.3402 12.63L10.4502 13.5201L13.4148 16.4855C13.6609 16.7308 14.0595 16.7308 14.3056 16.4855L17.2702 13.5201L16.3802 12.63L14.4902 14.52Z",fill:"currentColor"})]})}},33130:function(e,t,n){n.d(t,{R3:function(){return y},gQ:function(){return T}});var r,i=n(54423),o=n(63956),s=n(70107),a=n(27195),c=n(8857),u=n.n(c),l=n(73360),d=n(7761),f=n(93981),p=n(670),g=n(88680),x=n(50992),h=n(85978),v=n(57917),m=(n(91551),n(29541)),b=["title","description"];function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e,t){return Math.floor(1e6*e/t)}function T(e,t){return Math.floor(e*t/1e6)}!function(e){e.NONE="NONE",e.LOW="LOW",e.MEDIUM="MEDIUM",e.HIGH="HIGH",e.VERY_HIGH="VERY_HIGH",e.UNSAFE_MAX="UNSAFE_MAX",e.DEFAULT="DEFAULT"}(r||(r={}));var y=function(){var e=(0,g.lm)().toast,t=(0,p.Rc)(),n=(0,p.Os)(),r=(0,v.SR)(),o=r.addNotificationTx,c=r.updateNotificationMetadata,w=r.updateNotificationTxStatus,T=(0,p.BT)().prioritizationFee,y=(0,f.useCallback)(function(){var r=(0,a.Z)(u().mark((function r(a,f,p){var g,v,y,O,M,E,N,P,L,C,Z,_,I,R,A,F,H,S,D,B,V,z,U;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(g=f.extraSigners,v=f.blockhash,y=f.lastValidBlockHeight,O=f.idl,M=f.idlProgramId,E=f.skipPreflight,n.publicKey&&n.signTransaction){r.next=3;break}throw new Error("Wallet not connected");case 3:return N="",r.next=6,Promise.race([(0,x.Sx)(t,{tx:a}).then((function(e){return 10*e})),new Promise((function(e){return setTimeout(e,1e3)})).then((function(){return null}))]);case 6:return P=r.sent,"number"===typeof T&&T>0&&(L=(0,x.av)(a)||14e5,C=k(T*Math.pow(10,9),L),Z=k(5e4,L),0,I="number"!==typeof p.referenceFee&&"number"!==typeof P?Z:Math.max(k(p.referenceFee||0,L),k(P||0,L)),_=Math.min(C,I),(0,x.Gg)(a,_)),R=(1e5*Math.random()).toFixed(0),r.prev=9,A=p.submittingMessage,F=p.successMessage,r.prev=11,g&&("version"in a?a.sign(g):(H=a).sign.apply(H,(0,s.Z)(g))),r.next=15,n.signTransaction(a);case 15:a=r.sent,r.next=24;break;case 18:return r.prev=18,r.t0=r.catch(11),o(R,{status:"fail-no-txid",txid:"",stepText:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{children:r.t0.message}),(0,m.jsx)(l.cC,{id:"Refresh browser if problem persists"})]}),error:r.t0}),c(R,{customTitle:d.ag._("Wallet signing failed")}),e({duration:5e3,id:R,render:function(e){return(0,m.jsx)(h.x,j({},e))},closeOnClick:!1}),r.abrupt("return",{success:!1});case 24:return N=(0,x.o$)(a),o(R,{status:"loading",txid:N,stepText:A}),e({duration:6e4,id:R,render:function(e){return(0,m.jsx)(h.x,j({},e))},closeOnClick:!1}),r.next=29,(0,x.ie)({connection:t,blockhash:v,lastValidBlockHeight:y,idl:O,idlProgramId:M,signedTransaction:a,skipPreflight:null===E||void 0===E||E});case 29:if(!("error"in(S=r.sent))){r.next=32;break}throw S.error;case 32:return c(R,{customTitle:F}),w(R,{status:"success",stepText:null}),r.abrupt("return",{success:!0,txid:N,transactionResponse:S.transactionResponse});case 37:return r.prev=37,r.t1=r.catch(9),D=d.ag._("Transaction failed"),r.t1 instanceof x.qw&&(D=r.t1.message),B="getErrorTitleAndDescription"in p?p.getErrorTitleAndDescription(r.t1):{title:p.errorMessage,description:D},V=B.title,z=B.description,U=(0,i.Z)(B,b),c(R,j({customTitle:V,description:z},U)),r.t1.txid?w(R,{status:"fail",error:r.t1}):w(R,{status:"fail-no-txid",error:r.t1}),console.error({error:r.t1,isTxError:r.t1 instanceof x.qw}),r.abrupt("return",{success:!1,txid:N,error:r.t1});case 46:case"end":return r.stop()}}),r,null,[[9,37],[11,18]])})));return function(e,t,n){return r.apply(this,arguments)}}(),[n,t,T,o,e,c,w]);return y}},79877:function(e,t,n){n.d(t,{J:function(){return g},V:function(){return x}});var r=n(97620),i=n(3082),o=n(93981),s=n(670),a=n(88680),c=n(42082),u=n(20255),l=n(10361),d=n(12197),f=n(2997),p=n(29541),g="jupiter-last-swap",x=function(){var e=(0,s.Bn)(),t=e.tokenMap,n=e.getTokenInfo,x=e.getTokenInfoFromSymbol,h=e.duplicatedTokenSymbolMap,v=((0,s.jB)().useWSol,(0,c.T)()),m=(0,i.useRouter)(),b=(0,o.useRef)(!1),w=(0,a._)(g,null),j=(0,r.Z)(w,1)[0],k=(0,o.useMemo)((function(){var e;if(0===t.size)return[null,null];if(m.isReady&&!b.current&&"/"===m.asPath&&h.size>0&&null!==j&&void 0!==j&&j.fromPair&&null!==j&&void 0!==j&&j.toPair){var i=n(j.fromPair),o=n(j.toPair);if(i&&o)return v(i,o),b.current=!0,[i,o]}var s=m.query.inOut||"";if(!s.includes("-")&&1===(null===(e=s.match(/_/g))||void 0===e?void 0:e.length)&&h.size>0){var a=s.split("_"),c=(0,r.Z)(a,2),u=c[0],l=c[1];return[n(u)||null,n(l)||null]}var d=s.split("-"),f=(0,r.Z)(d,2),p=f[0],g=f[1],w=function(e){return e.length>=32&&e.length<=48&&!e.includes("_")};return p&&g?[w(p)?n(p):x(p),w(g)?n(g):x(g)]:[null,null]}),[t,n,m.query.inOut,x,m.isReady]),T=k[0],y=k[1],O=(0,u.B)(),M=O.add,E=O.get,N=(0,f.JT)(),P=N.openModal,L=N.closeModal;return(0,o.useEffect)((function(){if(T&&y){var e=function(){var e=(0,d.tr)(T)||(0,d.kL)(T),t=E(T.address);return e&&!t}(),t=function(){var e=(0,d.tr)(y)||(0,d.kL)(y),t=E(y.address);return e&&!t}(),n=[e?T:null,t?y:null].filter(Boolean);n.length>0&&setTimeout((function(){P((0,p.jsx)(l.Z,{tokensInfo:n,onClickReject:function(){v(null,null),L()},onClickAccept:function(){M(n.map((function(e){return e.address}))),L()}}),{canDismiss:!1,containerStyle:{background:"none"}})}),0)}}),[T,y,v]),[T,y]}}}]);
//# sourceMappingURL=735-d3400ea55f142f1a.js.map
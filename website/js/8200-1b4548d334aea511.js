"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8200],{78200:function(e,r,n){n.d(r,{Xg:function(){return P},ZL:function(){return D},AW:function(){return f}});var t=n(52466),i=n(54455);const o=e=>({decode:e.decode.bind(e),encode:e.encode.bind(e)});var u=n(795).Buffer;const s=e=>r=>{const n=(0,t.blob)(e,r),{encode:s,decode:c}=o(n),f=n;return f.decode=(e,r)=>{const n=c(e,r);return(0,i.toBigIntLE)(u.from(n))},f.encode=(r,n,t)=>{const o=(0,i.toBufferLE)(r,e);return s(o,n,t)},f},c=e=>r=>{const n=(0,t.blob)(e,r),{encode:s,decode:c}=o(n),f=n;return f.decode=(e,r)=>{const n=c(e,r);return(0,i.toBigIntBE)(u.from(n))},f.encode=(r,n,t)=>{const o=(0,i.toBufferBE)(r,e);return s(o,n,t)},f},f=s(8);c(8),s(16),c(16),s(24),c(24),s(32),c(32);var l=/^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,a=Math.ceil,h=Math.floor,g="[BigNumber Error] ",p=g+"Number primitive has more than 15 significant digits: ",d=1e14,w=14,m=9007199254740991,v=[1,10,100,1e3,1e4,1e5,1e6,1e7,1e8,1e9,1e10,1e11,1e12,1e13],b=1e7,N=1e9;function O(e){var r=0|e;return e>0||e===r?r:r-1}function E(e){for(var r,n,t=1,i=e.length,o=e[0]+"";t<i;){for(r=e[t++]+"",n=w-r.length;n--;r="0"+r);o+=r}for(i=o.length;48===o.charCodeAt(--i););return o.slice(0,i+1||1)}function y(e,r){var n,t,i=e.c,o=r.c,u=e.s,s=r.s,c=e.e,f=r.e;if(!u||!s)return null;if(n=i&&!i[0],t=o&&!o[0],n||t)return n?t?0:-s:u;if(u!=s)return u;if(n=u<0,t=c==f,!i||!o)return t?0:!i^n?1:-1;if(!t)return c>f^n?1:-1;for(s=(c=i.length)<(f=o.length)?c:f,u=0;u<s;u++)if(i[u]!=o[u])return i[u]>o[u]^n?1:-1;return c==f?0:c>f^n?1:-1}function A(e,r,n,t){if(e<r||e>n||e!==h(e))throw Error(g+(t||"Argument")+("number"==typeof e?e<r||e>n?" out of range: ":" not an integer: ":" not a primitive number: ")+String(e))}function B(e){var r=e.c.length-1;return O(e.e/w)==r&&e.c[r]%2!=0}function S(e,r){return(e.length>1?e.charAt(0)+"."+e.slice(1):e)+(r<0?"e":"e+")+r}function _(e,r,n){var t,i;if(r<0){for(i=n+".";++r;i+=n);e=i+e}else if(++r>(t=e.length)){for(i=n,r-=t;--r;i+=n);e+=i}else r<t&&(e=e.slice(0,r)+"."+e.slice(r));return e}var L=function e(r){var n,t,i,o=M.prototype={constructor:M,toString:null,valueOf:null},u=new M(1),s=20,c=4,f=-7,L=21,P=-1e7,R=1e7,D=!1,I=1,U=0,x={prefix:"",groupSize:3,secondaryGroupSize:0,groupSeparator:",",decimalSeparator:".",fractionGroupSize:0,fractionGroupSeparator:"\xa0",suffix:""},C="0123456789abcdefghijklmnopqrstuvwxyz",T=!0;function M(e,r){var n,o,u,f,a,g,d,v,b=this;if(!(b instanceof M))return new M(e,r);if(null==r){if(e&&!0===e._isBigNumber)return b.s=e.s,void(!e.c||e.e>R?b.c=b.e=null:e.e<P?b.c=[b.e=0]:(b.e=e.e,b.c=e.c.slice()));if((g="number"==typeof e)&&0*e==0){if(b.s=1/e<0?(e=-e,-1):1,e===~~e){for(f=0,a=e;a>=10;a/=10,f++);return void(f>R?b.c=b.e=null:(b.e=f,b.c=[e]))}v=String(e)}else{if(!l.test(v=String(e)))return i(b,v,g);b.s=45==v.charCodeAt(0)?(v=v.slice(1),-1):1}(f=v.indexOf("."))>-1&&(v=v.replace(".","")),(a=v.search(/e/i))>0?(f<0&&(f=a),f+=+v.slice(a+1),v=v.substring(0,a)):f<0&&(f=v.length)}else{if(A(r,2,C.length,"Base"),10==r&&T)return j(b=new M(e),s+b.e+1,c);if(v=String(e),g="number"==typeof e){if(0*e!=0)return i(b,v,g,r);if(b.s=1/e<0?(v=v.slice(1),-1):1,M.DEBUG&&v.replace(/^0\.0*|\./,"").length>15)throw Error(p+e)}else b.s=45===v.charCodeAt(0)?(v=v.slice(1),-1):1;for(n=C.slice(0,r),f=a=0,d=v.length;a<d;a++)if(n.indexOf(o=v.charAt(a))<0){if("."==o){if(a>f){f=d;continue}}else if(!u&&(v==v.toUpperCase()&&(v=v.toLowerCase())||v==v.toLowerCase()&&(v=v.toUpperCase()))){u=!0,a=-1,f=0;continue}return i(b,String(e),g,r)}g=!1,(f=(v=t(v,r,10,b.s)).indexOf("."))>-1?v=v.replace(".",""):f=v.length}for(a=0;48===v.charCodeAt(a);a++);for(d=v.length;48===v.charCodeAt(--d););if(v=v.slice(a,++d)){if(d-=a,g&&M.DEBUG&&d>15&&(e>m||e!==h(e)))throw Error(p+b.s*e);if((f=f-a-1)>R)b.c=b.e=null;else if(f<P)b.c=[b.e=0];else{if(b.e=f,b.c=[],a=(f+1)%w,f<0&&(a+=w),a<d){for(a&&b.c.push(+v.slice(0,a)),d-=w;a<d;)b.c.push(+v.slice(a,a+=w));a=w-(v=v.slice(a)).length}else a-=d;for(;a--;v+="0");b.c.push(+v)}}else b.c=[b.e=0]}function k(e,r,n,t){var i,o,u,s,l;if(null==n?n=c:A(n,0,8),!e.c)return e.toString();if(i=e.c[0],u=e.e,null==r)l=E(e.c),l=1==t||2==t&&(u<=f||u>=L)?S(l,u):_(l,u,"0");else if(o=(e=j(new M(e),r,n)).e,s=(l=E(e.c)).length,1==t||2==t&&(r<=o||o<=f)){for(;s<r;l+="0",s++);l=S(l,o)}else if(r-=u,l=_(l,o,"0"),o+1>s){if(--r>0)for(l+=".";r--;l+="0");}else if((r+=o-s)>0)for(o+1==s&&(l+=".");r--;l+="0");return e.s<0&&i?"-"+l:l}function G(e,r){for(var n,t=1,i=new M(e[0]);t<e.length;t++){if(!(n=new M(e[t])).s){i=n;break}r.call(i,n)&&(i=n)}return i}function F(e,r,n){for(var t=1,i=r.length;!r[--i];r.pop());for(i=r[0];i>=10;i/=10,t++);return(n=t+n*w-1)>R?e.c=e.e=null:n<P?e.c=[e.e=0]:(e.e=n,e.c=r),e}function j(e,r,n,t){var i,o,u,s,c,f,l,g=e.c,p=v;if(g){e:{for(i=1,s=g[0];s>=10;s/=10,i++);if((o=r-i)<0)o+=w,u=r,l=(c=g[f=0])/p[i-u-1]%10|0;else if((f=a((o+1)/w))>=g.length){if(!t)break e;for(;g.length<=f;g.push(0));c=l=0,i=1,u=(o%=w)-w+1}else{for(c=s=g[f],i=1;s>=10;s/=10,i++);l=(u=(o%=w)-w+i)<0?0:c/p[i-u-1]%10|0}if(t=t||r<0||null!=g[f+1]||(u<0?c:c%p[i-u-1]),t=n<4?(l||t)&&(0==n||n==(e.s<0?3:2)):l>5||5==l&&(4==n||t||6==n&&(o>0?u>0?c/p[i-u]:0:g[f-1])%10&1||n==(e.s<0?8:7)),r<1||!g[0])return g.length=0,t?(r-=e.e+1,g[0]=p[(w-r%w)%w],e.e=-r||0):g[0]=e.e=0,e;if(0==o?(g.length=f,s=1,f--):(g.length=f+1,s=p[w-o],g[f]=u>0?h(c/p[i-u]%p[u])*s:0),t)for(;;){if(0==f){for(o=1,u=g[0];u>=10;u/=10,o++);for(u=g[0]+=s,s=1;u>=10;u/=10,s++);o!=s&&(e.e++,g[0]==d&&(g[0]=1));break}if(g[f]+=s,g[f]!=d)break;g[f--]=0,s=1}for(o=g.length;0===g[--o];g.pop());}e.e>R?e.c=e.e=null:e.e<P&&(e.c=[e.e=0])}return e}function q(e){var r,n=e.e;return null===n?e.toString():(r=E(e.c),r=n<=f||n>=L?S(r,n):_(r,n,"0"),e.s<0?"-"+r:r)}return M.clone=e,M.ROUND_UP=0,M.ROUND_DOWN=1,M.ROUND_CEIL=2,M.ROUND_FLOOR=3,M.ROUND_HALF_UP=4,M.ROUND_HALF_DOWN=5,M.ROUND_HALF_EVEN=6,M.ROUND_HALF_CEIL=7,M.ROUND_HALF_FLOOR=8,M.EUCLID=9,M.config=M.set=function(e){var r,n;if(null!=e){if("object"!=typeof e)throw Error(g+"Object expected: "+e);if(e.hasOwnProperty(r="DECIMAL_PLACES")&&(A(n=e[r],0,N,r),s=n),e.hasOwnProperty(r="ROUNDING_MODE")&&(A(n=e[r],0,8,r),c=n),e.hasOwnProperty(r="EXPONENTIAL_AT")&&((n=e[r])&&n.pop?(A(n[0],-N,0,r),A(n[1],0,N,r),f=n[0],L=n[1]):(A(n,-N,N,r),f=-(L=n<0?-n:n))),e.hasOwnProperty(r="RANGE"))if((n=e[r])&&n.pop)A(n[0],-N,-1,r),A(n[1],1,N,r),P=n[0],R=n[1];else{if(A(n,-N,N,r),!n)throw Error(g+r+" cannot be zero: "+n);P=-(R=n<0?-n:n)}if(e.hasOwnProperty(r="CRYPTO")){if((n=e[r])!==!!n)throw Error(g+r+" not true or false: "+n);if(n){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw D=!n,Error(g+"crypto unavailable");D=n}else D=n}if(e.hasOwnProperty(r="MODULO_MODE")&&(A(n=e[r],0,9,r),I=n),e.hasOwnProperty(r="POW_PRECISION")&&(A(n=e[r],0,N,r),U=n),e.hasOwnProperty(r="FORMAT")){if("object"!=typeof(n=e[r]))throw Error(g+r+" not an object: "+n);x=n}if(e.hasOwnProperty(r="ALPHABET")){if("string"!=typeof(n=e[r])||/^.?$|[+\-.\s]|(.).*\1/.test(n))throw Error(g+r+" invalid: "+n);T="0123456789"==n.slice(0,10),C=n}}return{DECIMAL_PLACES:s,ROUNDING_MODE:c,EXPONENTIAL_AT:[f,L],RANGE:[P,R],CRYPTO:D,MODULO_MODE:I,POW_PRECISION:U,FORMAT:x,ALPHABET:C}},M.isBigNumber=function(e){if(!e||!0!==e._isBigNumber)return!1;if(!M.DEBUG)return!0;var r,n,t=e.c,i=e.e,o=e.s;e:if("[object Array]"=={}.toString.call(t)){if((1===o||-1===o)&&i>=-N&&i<=N&&i===h(i)){if(0===t[0]){if(0===i&&1===t.length)return!0;break e}if((r=(i+1)%w)<1&&(r+=w),String(t[0]).length==r){for(r=0;r<t.length;r++)if((n=t[r])<0||n>=d||n!==h(n))break e;if(0!==n)return!0}}}else if(null===t&&null===i&&(null===o||1===o||-1===o))return!0;throw Error(g+"Invalid BigNumber: "+e)},M.maximum=M.max=function(){return G(arguments,o.lt)},M.minimum=M.min=function(){return G(arguments,o.gt)},M.random=function(){var e=9007199254740992,r=Math.random()*e&2097151?function(){return h(Math.random()*e)}:function(){return 8388608*(1073741824*Math.random()|0)+(8388608*Math.random()|0)};return function(e){var n,t,i,o,c,f=0,l=[],p=new M(u);if(null==e?e=s:A(e,0,N),o=a(e/w),D)if(crypto.getRandomValues){for(n=crypto.getRandomValues(new Uint32Array(o*=2));f<o;)(c=131072*n[f]+(n[f+1]>>>11))>=9e15?(t=crypto.getRandomValues(new Uint32Array(2)),n[f]=t[0],n[f+1]=t[1]):(l.push(c%1e14),f+=2);f=o/2}else{if(!crypto.randomBytes)throw D=!1,Error(g+"crypto unavailable");for(n=crypto.randomBytes(o*=7);f<o;)(c=281474976710656*(31&n[f])+1099511627776*n[f+1]+4294967296*n[f+2]+16777216*n[f+3]+(n[f+4]<<16)+(n[f+5]<<8)+n[f+6])>=9e15?crypto.randomBytes(7).copy(n,f):(l.push(c%1e14),f+=7);f=o/7}if(!D)for(;f<o;)(c=r())<9e15&&(l[f++]=c%1e14);for(o=l[--f],e%=w,o&&e&&(c=v[w-e],l[f]=h(o/c)*c);0===l[f];l.pop(),f--);if(f<0)l=[i=0];else{for(i=-1;0===l[0];l.splice(0,1),i-=w);for(f=1,c=l[0];c>=10;c/=10,f++);f<w&&(i-=w-f)}return p.e=i,p.c=l,p}}(),M.sum=function(){for(var e=1,r=arguments,n=new M(r[0]);e<r.length;)n=n.plus(r[e++]);return n},t=function(){var e="0123456789";function r(e,r,n,t){for(var i,o,u=[0],s=0,c=e.length;s<c;){for(o=u.length;o--;u[o]*=r);for(u[0]+=t.indexOf(e.charAt(s++)),i=0;i<u.length;i++)u[i]>n-1&&(null==u[i+1]&&(u[i+1]=0),u[i+1]+=u[i]/n|0,u[i]%=n)}return u.reverse()}return function(t,i,o,u,f){var l,a,h,g,p,d,w,m,v=t.indexOf("."),b=s,N=c;for(v>=0&&(g=U,U=0,t=t.replace(".",""),d=(m=new M(i)).pow(t.length-v),U=g,m.c=r(_(E(d.c),d.e,"0"),10,o,e),m.e=m.c.length),h=g=(w=r(t,i,o,f?(l=C,e):(l=e,C))).length;0==w[--g];w.pop());if(!w[0])return l.charAt(0);if(v<0?--h:(d.c=w,d.e=h,d.s=u,w=(d=n(d,m,b,N,o)).c,p=d.r,h=d.e),v=w[a=h+b+1],g=o/2,p=p||a<0||null!=w[a+1],p=N<4?(null!=v||p)&&(0==N||N==(d.s<0?3:2)):v>g||v==g&&(4==N||p||6==N&&1&w[a-1]||N==(d.s<0?8:7)),a<1||!w[0])t=p?_(l.charAt(1),-b,l.charAt(0)):l.charAt(0);else{if(w.length=a,p)for(--o;++w[--a]>o;)w[a]=0,a||(++h,w=[1].concat(w));for(g=w.length;!w[--g];);for(v=0,t="";v<=g;t+=l.charAt(w[v++]));t=_(t,h,l.charAt(0))}return t}}(),n=function(){function e(e,r,n){var t,i,o,u,s=0,c=e.length,f=r%b,l=r/b|0;for(e=e.slice();c--;)s=((i=f*(o=e[c]%b)+(t=l*o+(u=e[c]/b|0)*f)%b*b+s)/n|0)+(t/b|0)+l*u,e[c]=i%n;return s&&(e=[s].concat(e)),e}function r(e,r,n,t){var i,o;if(n!=t)o=n>t?1:-1;else for(i=o=0;i<n;i++)if(e[i]!=r[i]){o=e[i]>r[i]?1:-1;break}return o}function n(e,r,n,t){for(var i=0;n--;)e[n]-=i,i=e[n]<r[n]?1:0,e[n]=i*t+e[n]-r[n];for(;!e[0]&&e.length>1;e.splice(0,1));}return function(t,i,o,u,s){var c,f,l,a,g,p,m,v,b,N,E,y,A,B,S,_,L,P=t.s==i.s?1:-1,R=t.c,D=i.c;if(!R||!R[0]||!D||!D[0])return new M(t.s&&i.s&&(R?!D||R[0]!=D[0]:D)?R&&0==R[0]||!D?0*P:P/0:NaN);for(b=(v=new M(P)).c=[],P=o+(f=t.e-i.e)+1,s||(s=d,f=O(t.e/w)-O(i.e/w),P=P/w|0),l=0;D[l]==(R[l]||0);l++);if(D[l]>(R[l]||0)&&f--,P<0)b.push(1),a=!0;else{for(B=R.length,_=D.length,l=0,P+=2,(g=h(s/(D[0]+1)))>1&&(D=e(D,g,s),R=e(R,g,s),_=D.length,B=R.length),A=_,E=(N=R.slice(0,_)).length;E<_;N[E++]=0);L=D.slice(),L=[0].concat(L),S=D[0],D[1]>=s/2&&S++;do{if(g=0,(c=r(D,N,_,E))<0){if(y=N[0],_!=E&&(y=y*s+(N[1]||0)),(g=h(y/S))>1)for(g>=s&&(g=s-1),m=(p=e(D,g,s)).length,E=N.length;1==r(p,N,m,E);)g--,n(p,_<m?L:D,m,s),m=p.length,c=1;else 0==g&&(c=g=1),m=(p=D.slice()).length;if(m<E&&(p=[0].concat(p)),n(N,p,E,s),E=N.length,-1==c)for(;r(D,N,_,E)<1;)g++,n(N,_<E?L:D,E,s),E=N.length}else 0===c&&(g++,N=[0]);b[l++]=g,N[0]?N[E++]=R[A]||0:(N=[R[A]],E=1)}while((A++<B||null!=N[0])&&P--);a=null!=N[0],b[0]||b.splice(0,1)}if(s==d){for(l=1,P=b[0];P>=10;P/=10,l++);j(v,o+(v.e=l+f*w-1)+1,u,a)}else v.e=f,v.r=+a;return v}}(),i=function(){var e=/^(-?)0([xbo])(?=\w[\w.]*$)/i,r=/^([^.]+)\.$/,n=/^\.([^.]+)$/,t=/^-?(Infinity|NaN)$/,i=/^\s*\+(?=[\w.])|^\s+|\s+$/g;return function(o,u,s,c){var f,l=s?u:u.replace(i,"");if(t.test(l))o.s=isNaN(l)?null:l<0?-1:1;else{if(!s&&(l=l.replace(e,(function(e,r,n){return f="x"==(n=n.toLowerCase())?16:"b"==n?2:8,c&&c!=f?e:r})),c&&(f=c,l=l.replace(r,"$1").replace(n,"0.$1")),u!=l))return new M(l,f);if(M.DEBUG)throw Error(g+"Not a"+(c?" base "+c:"")+" number: "+u);o.s=null}o.c=o.e=null}}(),o.absoluteValue=o.abs=function(){var e=new M(this);return e.s<0&&(e.s=1),e},o.comparedTo=function(e,r){return y(this,new M(e,r))},o.decimalPlaces=o.dp=function(e,r){var n,t,i,o=this;if(null!=e)return A(e,0,N),null==r?r=c:A(r,0,8),j(new M(o),e+o.e+1,r);if(!(n=o.c))return null;if(t=((i=n.length-1)-O(this.e/w))*w,i=n[i])for(;i%10==0;i/=10,t--);return t<0&&(t=0),t},o.dividedBy=o.div=function(e,r){return n(this,new M(e,r),s,c)},o.dividedToIntegerBy=o.idiv=function(e,r){return n(this,new M(e,r),0,1)},o.exponentiatedBy=o.pow=function(e,r){var n,t,i,o,s,f,l,p,d=this;if((e=new M(e)).c&&!e.isInteger())throw Error(g+"Exponent not an integer: "+q(e));if(null!=r&&(r=new M(r)),s=e.e>14,!d.c||!d.c[0]||1==d.c[0]&&!d.e&&1==d.c.length||!e.c||!e.c[0])return p=new M(Math.pow(+q(d),s?e.s*(2-B(e)):+q(e))),r?p.mod(r):p;if(f=e.s<0,r){if(r.c?!r.c[0]:!r.s)return new M(NaN);(t=!f&&d.isInteger()&&r.isInteger())&&(d=d.mod(r))}else{if(e.e>9&&(d.e>0||d.e<-1||(0==d.e?d.c[0]>1||s&&d.c[1]>=24e7:d.c[0]<8e13||s&&d.c[0]<=9999975e7)))return o=d.s<0&&B(e)?-0:0,d.e>-1&&(o=1/o),new M(f?1/o:o);U&&(o=a(U/w+2))}for(s?(n=new M(.5),f&&(e.s=1),l=B(e)):l=(i=Math.abs(+q(e)))%2,p=new M(u);;){if(l){if(!(p=p.times(d)).c)break;o?p.c.length>o&&(p.c.length=o):t&&(p=p.mod(r))}if(i){if(0===(i=h(i/2)))break;l=i%2}else if(j(e=e.times(n),e.e+1,1),e.e>14)l=B(e);else{if(0===(i=+q(e)))break;l=i%2}d=d.times(d),o?d.c&&d.c.length>o&&(d.c.length=o):t&&(d=d.mod(r))}return t?p:(f&&(p=u.div(p)),r?p.mod(r):o?j(p,U,c,undefined):p)},o.integerValue=function(e){var r=new M(this);return null==e?e=c:A(e,0,8),j(r,r.e+1,e)},o.isEqualTo=o.eq=function(e,r){return 0===y(this,new M(e,r))},o.isFinite=function(){return!!this.c},o.isGreaterThan=o.gt=function(e,r){return y(this,new M(e,r))>0},o.isGreaterThanOrEqualTo=o.gte=function(e,r){return 1===(r=y(this,new M(e,r)))||0===r},o.isInteger=function(){return!!this.c&&O(this.e/w)>this.c.length-2},o.isLessThan=o.lt=function(e,r){return y(this,new M(e,r))<0},o.isLessThanOrEqualTo=o.lte=function(e,r){return-1===(r=y(this,new M(e,r)))||0===r},o.isNaN=function(){return!this.s},o.isNegative=function(){return this.s<0},o.isPositive=function(){return this.s>0},o.isZero=function(){return!!this.c&&0==this.c[0]},o.minus=function(e,r){var n,t,i,o,u=this,s=u.s;if(r=(e=new M(e,r)).s,!s||!r)return new M(NaN);if(s!=r)return e.s=-r,u.plus(e);var f=u.e/w,l=e.e/w,a=u.c,h=e.c;if(!f||!l){if(!a||!h)return a?(e.s=-r,e):new M(h?u:NaN);if(!a[0]||!h[0])return h[0]?(e.s=-r,e):new M(a[0]?u:3==c?-0:0)}if(f=O(f),l=O(l),a=a.slice(),s=f-l){for((o=s<0)?(s=-s,i=a):(l=f,i=h),i.reverse(),r=s;r--;i.push(0));i.reverse()}else for(t=(o=(s=a.length)<(r=h.length))?s:r,s=r=0;r<t;r++)if(a[r]!=h[r]){o=a[r]<h[r];break}if(o&&(i=a,a=h,h=i,e.s=-e.s),(r=(t=h.length)-(n=a.length))>0)for(;r--;a[n++]=0);for(r=d-1;t>s;){if(a[--t]<h[t]){for(n=t;n&&!a[--n];a[n]=r);--a[n],a[t]+=d}a[t]-=h[t]}for(;0==a[0];a.splice(0,1),--l);return a[0]?F(e,a,l):(e.s=3==c?-1:1,e.c=[e.e=0],e)},o.modulo=o.mod=function(e,r){var t,i,o=this;return e=new M(e,r),!o.c||!e.s||e.c&&!e.c[0]?new M(NaN):!e.c||o.c&&!o.c[0]?new M(o):(9==I?(i=e.s,e.s=1,t=n(o,e,0,3),e.s=i,t.s*=i):t=n(o,e,0,I),(e=o.minus(t.times(e))).c[0]||1!=I||(e.s=o.s),e)},o.multipliedBy=o.times=function(e,r){var n,t,i,o,u,s,c,f,l,a,h,g,p,m,v,N=this,E=N.c,y=(e=new M(e,r)).c;if(!E||!y||!E[0]||!y[0])return!N.s||!e.s||E&&!E[0]&&!y||y&&!y[0]&&!E?e.c=e.e=e.s=null:(e.s*=N.s,E&&y?(e.c=[0],e.e=0):e.c=e.e=null),e;for(t=O(N.e/w)+O(e.e/w),e.s*=N.s,(c=E.length)<(a=y.length)&&(p=E,E=y,y=p,i=c,c=a,a=i),i=c+a,p=[];i--;p.push(0));for(m=d,v=b,i=a;--i>=0;){for(n=0,h=y[i]%v,g=y[i]/v|0,o=i+(u=c);o>i;)n=((f=h*(f=E[--u]%v)+(s=g*f+(l=E[u]/v|0)*h)%v*v+p[o]+n)/m|0)+(s/v|0)+g*l,p[o--]=f%m;p[o]=n}return n?++t:p.splice(0,1),F(e,p,t)},o.negated=function(){var e=new M(this);return e.s=-e.s||null,e},o.plus=function(e,r){var n,t=this,i=t.s;if(r=(e=new M(e,r)).s,!i||!r)return new M(NaN);if(i!=r)return e.s=-r,t.minus(e);var o=t.e/w,u=e.e/w,s=t.c,c=e.c;if(!o||!u){if(!s||!c)return new M(i/0);if(!s[0]||!c[0])return c[0]?e:new M(s[0]?t:0*i)}if(o=O(o),u=O(u),s=s.slice(),i=o-u){for(i>0?(u=o,n=c):(i=-i,n=s),n.reverse();i--;n.push(0));n.reverse()}for((i=s.length)-(r=c.length)<0&&(n=c,c=s,s=n,r=i),i=0;r;)i=(s[--r]=s[r]+c[r]+i)/d|0,s[r]=d===s[r]?0:s[r]%d;return i&&(s=[i].concat(s),++u),F(e,s,u)},o.precision=o.sd=function(e,r){var n,t,i,o=this;if(null!=e&&e!==!!e)return A(e,1,N),null==r?r=c:A(r,0,8),j(new M(o),e,r);if(!(n=o.c))return null;if(t=(i=n.length-1)*w+1,i=n[i]){for(;i%10==0;i/=10,t--);for(i=n[0];i>=10;i/=10,t++);}return e&&o.e+1>t&&(t=o.e+1),t},o.shiftedBy=function(e){return A(e,-9007199254740991,m),this.times("1e"+e)},o.squareRoot=o.sqrt=function(){var e,r,t,i,o,u=this,f=u.c,l=u.s,a=u.e,h=s+4,g=new M("0.5");if(1!==l||!f||!f[0])return new M(!l||l<0&&(!f||f[0])?NaN:f?u:1/0);if(0==(l=Math.sqrt(+q(u)))||l==1/0?(((r=E(f)).length+a)%2==0&&(r+="0"),l=Math.sqrt(+r),a=O((a+1)/2)-(a<0||a%2),t=new M(r=l==1/0?"5e"+a:(r=l.toExponential()).slice(0,r.indexOf("e")+1)+a)):t=new M(l+""),t.c[0])for((l=(a=t.e)+h)<3&&(l=0);;)if(o=t,t=g.times(o.plus(n(u,o,h,1))),E(o.c).slice(0,l)===(r=E(t.c)).slice(0,l)){if(t.e<a&&--l,"9999"!=(r=r.slice(l-3,l+1))&&(i||"4999"!=r)){+r&&(+r.slice(1)||"5"!=r.charAt(0))||(j(t,t.e+s+2,1),e=!t.times(t).eq(u));break}if(!i&&(j(o,o.e+s+2,0),o.times(o).eq(u))){t=o;break}h+=4,l+=4,i=1}return j(t,t.e+s+1,c,e)},o.toExponential=function(e,r){return null!=e&&(A(e,0,N),e++),k(this,e,r,1)},o.toFixed=function(e,r){return null!=e&&(A(e,0,N),e=e+this.e+1),k(this,e,r)},o.toFormat=function(e,r,n){var t,i=this;if(null==n)null!=e&&r&&"object"==typeof r?(n=r,r=null):e&&"object"==typeof e?(n=e,e=r=null):n=x;else if("object"!=typeof n)throw Error(g+"Argument not an object: "+n);if(t=i.toFixed(e,r),i.c){var o,u=t.split("."),s=+n.groupSize,c=+n.secondaryGroupSize,f=n.groupSeparator||"",l=u[0],a=u[1],h=i.s<0,p=h?l.slice(1):l,d=p.length;if(c&&(o=s,s=c,c=o,d-=o),s>0&&d>0){for(o=d%s||s,l=p.substr(0,o);o<d;o+=s)l+=f+p.substr(o,s);c>0&&(l+=f+p.slice(o)),h&&(l="-"+l)}t=a?l+(n.decimalSeparator||"")+((c=+n.fractionGroupSize)?a.replace(new RegExp("\\d{"+c+"}\\B","g"),"$&"+(n.fractionGroupSeparator||"")):a):l}return(n.prefix||"")+t+(n.suffix||"")},o.toFraction=function(e){var r,t,i,o,s,f,l,a,h,p,d,m,b=this,N=b.c;if(null!=e&&(!(l=new M(e)).isInteger()&&(l.c||1!==l.s)||l.lt(u)))throw Error(g+"Argument "+(l.isInteger()?"out of range: ":"not an integer: ")+q(l));if(!N)return new M(b);for(r=new M(u),h=t=new M(u),i=a=new M(u),m=E(N),s=r.e=m.length-b.e-1,r.c[0]=v[(f=s%w)<0?w+f:f],e=!e||l.comparedTo(r)>0?s>0?r:h:l,f=R,R=1/0,l=new M(m),a.c[0]=0;p=n(l,r,0,1),1!=(o=t.plus(p.times(i))).comparedTo(e);)t=i,i=o,h=a.plus(p.times(o=h)),a=o,r=l.minus(p.times(o=r)),l=o;return o=n(e.minus(t),i,0,1),a=a.plus(o.times(h)),t=t.plus(o.times(i)),a.s=h.s=b.s,d=n(h,i,s*=2,c).minus(b).abs().comparedTo(n(a,t,s,c).minus(b).abs())<1?[h,i]:[a,t],R=f,d},o.toNumber=function(){return+q(this)},o.toPrecision=function(e,r){return null!=e&&A(e,1,N),k(this,e,r,2)},o.toString=function(e){var r,n=this,i=n.s,o=n.e;return null===o?i?(r="Infinity",i<0&&(r="-"+r)):r="NaN":(null==e?r=o<=f||o>=L?S(E(n.c),o):_(E(n.c),o,"0"):10===e&&T?r=_(E((n=j(new M(n),s+o+1,c)).c),n.e,"0"):(A(e,2,C.length,"Base"),r=t(_(E(n.c),o,"0"),10,e,i,!0)),i<0&&n.c[0]&&(r="-"+r)),r},o.valueOf=o.toJSON=function(){return q(this)},o._isBigNumber=!0,o[Symbol.toStringTag]="BigNumber",o[Symbol.for("nodejs.util.inspect.custom")]=o.valueOf,null!=r&&M.set(r),M}();new L("1e+18");const P=e=>{const r=(0,t.u8)(e),{encode:n,decode:i}=o(r),u=r;return u.decode=(e,r)=>!!i(e,r),u.encode=(e,r,t)=>{const i=Number(e);return n(i,r,t)},u};var R=n(75105);const D=e=>{const r=(0,t.blob)(32,e),{encode:n,decode:i}=o(r),u=r;return u.decode=(e,r)=>{const n=i(e,r);return new R.PublicKey(n)},u.encode=(e,r,t)=>{const i=e.toBuffer();return n(i,r,t)},u}}}]);
//# sourceMappingURL=8200-1b4548d334aea511.js.map
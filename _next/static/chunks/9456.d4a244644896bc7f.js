(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9456],{55525:function(t){var e;e=function(){return function(t,e){var i=e.prototype,n=i.format;i.format=function(t){var e=this,i=this.$locale();if(!this.isValid())return n.bind(this)(t);var r=this.$utils(),s=(t||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(t){switch(t){case"Q":return Math.ceil((e.$M+1)/3);case"Do":return i.ordinal(e.$D);case"gggg":return e.weekYear();case"GGGG":return e.isoWeekYear();case"wo":return i.ordinal(e.week(),"W");case"w":case"ww":return r.s(e.week(),"w"===t?1:2,"0");case"W":case"WW":return r.s(e.isoWeek(),"W"===t?1:2,"0");case"k":case"kk":return r.s(String(0===e.$H?24:e.$H),"k"===t?1:2,"0");case"X":return Math.floor(e.$d.getTime()/1e3);case"x":return e.$d.getTime();case"z":return"["+e.offsetName()+"]";case"zzz":return"["+e.offsetName("long")+"]";default:return t}});return n.bind(this)(s)}}},t.exports=e()},19898:function(t){var e;e=function(){"use strict";var t={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},e=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,i=/\d/,n=/\d\d/,r=/\d\d?/,s=/\d*[^-_:/,()\s\d]+/,a={},o=function(t){return(t=+t)+(t>68?1900:2e3)},c=function(t){return function(e){this[t]=+e}},l=[/[+-]\d\d:?(\d\d)?|Z/,function(t){(this.zone||(this.zone={})).offset=function(t){if(!t||"Z"===t)return 0;var e=t.match(/([+-]|\d\d)/g),i=60*e[1]+(+e[2]||0);return 0===i?0:"+"===e[0]?-i:i}(t)}],u=function(t){var e=a[t];return e&&(e.indexOf?e:e.s.concat(e.f))},d=function(t,e){var i,n=a.meridiem;if(n){for(var r=1;r<=24;r+=1)if(t.indexOf(n(r,0,e))>-1){i=r>12;break}}else i=t===(e?"pm":"PM");return i},h={A:[s,function(t){this.afternoon=d(t,!1)}],a:[s,function(t){this.afternoon=d(t,!0)}],Q:[i,function(t){this.month=3*(t-1)+1}],S:[i,function(t){this.milliseconds=100*+t}],SS:[n,function(t){this.milliseconds=10*+t}],SSS:[/\d{3}/,function(t){this.milliseconds=+t}],s:[r,c("seconds")],ss:[r,c("seconds")],m:[r,c("minutes")],mm:[r,c("minutes")],H:[r,c("hours")],h:[r,c("hours")],HH:[r,c("hours")],hh:[r,c("hours")],D:[r,c("day")],DD:[n,c("day")],Do:[s,function(t){var e=a.ordinal,i=t.match(/\d+/);if(this.day=i[0],e)for(var n=1;n<=31;n+=1)e(n).replace(/\[|\]/g,"")===t&&(this.day=n)}],w:[r,c("week")],ww:[n,c("week")],M:[r,c("month")],MM:[n,c("month")],MMM:[s,function(t){var e=u("months"),i=(u("monthsShort")||e.map(function(t){return t.slice(0,3)})).indexOf(t)+1;if(i<1)throw Error();this.month=i%12||i}],MMMM:[s,function(t){var e=u("months").indexOf(t)+1;if(e<1)throw Error();this.month=e%12||e}],Y:[/[+-]?\d+/,c("year")],YY:[n,function(t){this.year=o(t)}],YYYY:[/\d{4}/,c("year")],Z:l,ZZ:l};return function(i,n,r){r.p.customParseFormat=!0,i&&i.parseTwoDigitYear&&(o=i.parseTwoDigitYear);var s=n.prototype,c=s.parse;s.parse=function(i){var n=i.date,s=i.utc,o=i.args;this.$u=s;var l=o[1];if("string"==typeof l){var u=!0===o[2],d=!0===o[3],f=o[2];d&&(f=o[2]),a=this.$locale(),!u&&f&&(a=r.Ls[f]),this.$d=function(i,n,r,s){try{if(["x","X"].indexOf(n)>-1)return new Date(("X"===n?1e3:1)*i);var o=(function(i){var n,r;n=i,r=a&&a.formats;for(var s=(i=n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(e,i,n){var s=n&&n.toUpperCase();return i||r[n]||t[n]||r[s].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(t,e,i){return e||i.slice(1)})})).match(e),o=s.length,c=0;c<o;c+=1){var l=s[c],u=h[l],d=u&&u[0],f=u&&u[1];s[c]=f?{regex:d,parser:f}:l.replace(/^\[|\]$/g,"")}return function(t){for(var e={},i=0,n=0;i<o;i+=1){var r=s[i];if("string"==typeof r)n+=r.length;else{var a=r.regex,c=r.parser,l=t.slice(n),u=a.exec(l)[0];c.call(e,u),t=t.replace(u,"")}}return function(t){var e=t.afternoon;if(void 0!==e){var i=t.hours;e?i<12&&(t.hours+=12):12===i&&(t.hours=0),delete t.afternoon}}(e),e}})(n)(i),c=o.year,l=o.month,u=o.day,d=o.hours,f=o.minutes,m=o.seconds,y=o.milliseconds,k=o.zone,g=o.week,p=new Date,v=u||(c||l?1:p.getDate()),x=c||p.getFullYear(),T=0;c&&!l||(T=l>0?l-1:p.getMonth());var b,w=d||0,$=f||0,_=m||0,D=y||0;return k?new Date(Date.UTC(x,T,v,w,$,_,D+60*k.offset*1e3)):r?new Date(Date.UTC(x,T,v,w,$,_,D)):(b=new Date(x,T,v,w,$,_,D),g&&(b=s(b).week(g).toDate()),b)}catch(t){return new Date("")}}(n,l,s,r),this.init(),f&&!0!==f&&(this.$L=this.locale(f).$L),(u||d)&&n!=this.format(l)&&(this.$d=new Date("")),a={}}else if(l instanceof Array)for(var m=l.length,y=1;y<=m;y+=1){o[1]=l[y-1];var k=r.apply(this,o);if(k.isValid()){this.$d=k.$d,this.$L=k.$L,this.init();break}y===m&&(this.$d=new Date(""))}else c.call(this,i)}}},t.exports=e()},23738:function(t){var e;e=function(){"use strict";var t,e,i=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,n=/\[([^\]]+)]|YYYY|YY|Y|M{1,2}|D{1,2}|H{1,2}|m{1,2}|s{1,2}|SSS/g,r={years:31536e6,months:2628e6,days:864e5,hours:36e5,minutes:6e4,seconds:1e3,milliseconds:1,weeks:6048e5},s=function(t){return t instanceof d},a=function(t,e,i){return new d(t,i,e.$l)},o=function(t){return e.p(t)+"s"},c=function(t){return t<0},l=function(t){return c(t)?Math.ceil(t):Math.floor(t)},u=function(t,e){return t?c(t)?{negative:!0,format:""+Math.abs(t)+e}:{negative:!1,format:""+t+e}:{negative:!1,format:""}},d=function(){function c(t,e,n){var s=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),e)return a(t*r[o(e)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach(function(e){s.$d[o(e)]=t[e]}),this.calMilliseconds(),this;if("string"==typeof t){var c=t.match(i);if(c){var l=c.slice(2).map(function(t){return null!=t?Number(t):0});return this.$d.years=l[0],this.$d.months=l[1],this.$d.weeks=l[2],this.$d.days=l[3],this.$d.hours=l[4],this.$d.minutes=l[5],this.$d.seconds=l[6],this.calMilliseconds(),this}}return this}var d=c.prototype;return d.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce(function(e,i){return e+(t.$d[i]||0)*r[i]},0)},d.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=l(t/31536e6),t%=31536e6,this.$d.months=l(t/2628e6),t%=2628e6,this.$d.days=l(t/864e5),t%=864e5,this.$d.hours=l(t/36e5),t%=36e5,this.$d.minutes=l(t/6e4),t%=6e4,this.$d.seconds=l(t/1e3),t%=1e3,this.$d.milliseconds=t},d.toISOString=function(){var t=u(this.$d.years,"Y"),e=u(this.$d.months,"M"),i=+this.$d.days||0;this.$d.weeks&&(i+=7*this.$d.weeks);var n=u(i,"D"),r=u(this.$d.hours,"H"),s=u(this.$d.minutes,"M"),a=this.$d.seconds||0;this.$d.milliseconds&&(a+=this.$d.milliseconds/1e3,a=Math.round(1e3*a)/1e3);var o=u(a,"S"),c=t.negative||e.negative||n.negative||r.negative||s.negative||o.negative,l=r.format||s.format||o.format?"T":"",d=(c?"-":"")+"P"+t.format+e.format+n.format+l+r.format+s.format+o.format;return"P"===d||"-P"===d?"P0D":d},d.toJSON=function(){return this.toISOString()},d.format=function(t){var i={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return(t||"YYYY-MM-DDTHH:mm:ss").replace(n,function(t,e){return e||String(i[t])})},d.as=function(t){return this.$ms/r[o(t)]},d.get=function(t){var e=this.$ms,i=o(t);return"milliseconds"===i?e%=1e3:e="weeks"===i?l(e/r[i]):this.$d[i],e||0},d.add=function(t,e,i){var n;return n=e?t*r[o(e)]:s(t)?t.$ms:a(t,this).$ms,a(this.$ms+n*(i?-1:1),this)},d.subtract=function(t,e){return this.add(t,e,!0)},d.locale=function(t){var e=this.clone();return e.$l=t,e},d.clone=function(){return a(this.$ms,this)},d.humanize=function(e){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!e)},d.valueOf=function(){return this.asMilliseconds()},d.milliseconds=function(){return this.get("milliseconds")},d.asMilliseconds=function(){return this.as("milliseconds")},d.seconds=function(){return this.get("seconds")},d.asSeconds=function(){return this.as("seconds")},d.minutes=function(){return this.get("minutes")},d.asMinutes=function(){return this.as("minutes")},d.hours=function(){return this.get("hours")},d.asHours=function(){return this.as("hours")},d.days=function(){return this.get("days")},d.asDays=function(){return this.as("days")},d.weeks=function(){return this.get("weeks")},d.asWeeks=function(){return this.as("weeks")},d.months=function(){return this.get("months")},d.asMonths=function(){return this.as("months")},d.years=function(){return this.get("years")},d.asYears=function(){return this.as("years")},c}(),h=function(t,e,i){return t.add(e.years()*i,"y").add(e.months()*i,"M").add(e.days()*i,"d").add(e.hours()*i,"h").add(e.minutes()*i,"m").add(e.seconds()*i,"s").add(e.milliseconds()*i,"ms")};return function(i,n,r){t=r,e=r().$utils(),r.duration=function(t,e){return a(t,{$l:r.locale()},e)},r.isDuration=s;var o=n.prototype.add,c=n.prototype.subtract;n.prototype.add=function(t,e){return s(t)?h(this,t,1):o.bind(this)(t,e)},n.prototype.subtract=function(t,e){return s(t)?h(this,t,-1):c.bind(this)(t,e)}}},t.exports=e()},76073:function(t){var e;e=function(){return function(t,e,i){var n=function(t){return t.add(4-t.isoWeekday(),"day")},r=e.prototype;r.isoWeekYear=function(){return n(this).year()},r.isoWeek=function(t){if(!this.$utils().u(t))return this.add(7*(t-this.isoWeek()),"day");var e,r,s,a=n(this),o=(e=this.isoWeekYear(),s=4-(r=(this.$u?i.utc:i)().year(e).startOf("year")).isoWeekday(),r.isoWeekday()>4&&(s+=7),r.add(s,"day"));return a.diff(o,"week")+1},r.isoWeekday=function(t){return this.$utils().u(t)?this.day()||7:this.day(this.day()%7?t:t-7)};var s=r.startOf;r.startOf=function(t,e){var i=this.$utils(),n=!!i.u(e)||e;return"isoweek"===i.p(t)?n?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):s.bind(this)(t,e)}}},t.exports=e()},79456:function(t,e,i){"use strict";i.d(e,{diagram:function(){return t4}});var n,r,s,a=i(27317),o=i(89107),c=i(26667),l=i(2465),u=i(86617),d=i(16468),h=i(76073),f=i(19898),m=i(55525),y=i(23738),k=i(6642),g=i(38821),p=i(65457);function v(t,e){return null==t||null==e?NaN:t<e?-1:t>e?1:t>=e?0:NaN}function x(t,e){return null==t||null==e?NaN:e<t?-1:e>t?1:e>=t?0:NaN}function T(t){let e,i,n;function r(t,n,r=0,s=t.length){if(r<s){if(0!==e(n,n))return s;do{let e=r+s>>>1;0>i(t[e],n)?r=e+1:s=e}while(r<s)}return r}return 2!==t.length?(e=v,i=(e,i)=>v(t(e),i),n=(e,i)=>t(e)-i):(e=t===v||t===x?t:b,i=t,n=t),{left:r,center:function(t,e,i=0,s=t.length){let a=r(t,e,i,s-1);return a>i&&n(t[a-1],e)>-n(t[a],e)?a-1:a},right:function(t,n,r=0,s=t.length){if(r<s){if(0!==e(n,n))return s;do{let e=r+s>>>1;0>=i(t[e],n)?r=e+1:s=e}while(r<s)}return r}}}function b(){return 0}let w=T(v);function $(t){return function(e,i,n=i){if(!((i=+i)>=0))throw RangeError("invalid rx");if(!((n=+n)>=0))throw RangeError("invalid ry");let{data:r,width:s,height:a}=e;if(!((s=Math.floor(s))>=0))throw RangeError("invalid width");if(!((a=Math.floor(void 0!==a?a:r.length/s))>=0))throw RangeError("invalid height");if(!s||!a||!i&&!n)return e;let o=i&&t(i),c=n&&t(n),l=r.slice();return o&&c?(_(o,l,r,s,a),_(o,r,l,s,a),_(o,l,r,s,a),D(c,r,l,s,a),D(c,l,r,s,a),D(c,r,l,s,a)):o?(_(o,r,l,s,a),_(o,l,r,s,a),_(o,r,l,s,a)):c&&(D(c,r,l,s,a),D(c,l,r,s,a),D(c,r,l,s,a)),e}}function _(t,e,i,n,r){for(let s=0,a=n*r;s<a;)t(e,i,s,s+=n,1)}function D(t,e,i,n,r){for(let s=0,a=n*r;s<n;++s)t(e,i,s,s+a,n)}function M(t){let e=Math.floor(t);if(e===t)return function(t){let e=2*t+1;return(i,n,r,s,a)=>{if(!((s-=a)>=r))return;let o=t*n[r],c=a*t;for(let t=r,e=r+c;t<e;t+=a)o+=n[Math.min(s,t)];for(let t=r,l=s;t<=l;t+=a)o+=n[Math.min(s,t+c)],i[t]=o/e,o-=n[Math.max(r,t-c)]}}(t);let i=t-e,n=2*t+1;return(t,r,s,a,o)=>{if(!((a-=o)>=s))return;let c=e*r[s],l=o*e,u=l+o;for(let t=s,e=s+l;t<e;t+=o)c+=r[Math.min(a,t)];for(let e=s,d=a;e<=d;e+=o)c+=r[Math.min(a,e+l)],t[e]=(c+i*(r[Math.max(s,e-u)]+r[Math.min(a,e+u)]))/n,c-=r[Math.max(s,e-l)]}}w.right,w.left,T(function(t){return null===t?NaN:+t}).center,$(M),$(function(t){let e=M(t);return(t,i,n,r,s)=>{e(t,i,(n<<=2)+0,(r<<=2)+0,s<<=2),e(t,i,n+1,r+1,s),e(t,i,n+2,r+2,s),e(t,i,n+3,r+3,s)}}),Array.prototype.slice;var S=i(64423);function C(t){return t}function Y(t){return"translate("+t+",0)"}function E(t){return"translate(0,"+t+")"}function O(){return!this.__axis}function A(t,e){var i=[],n=null,r=null,s=6,a=6,o=3,c="undefined"!=typeof window&&window.devicePixelRatio>1?0:.5,l=1===t||4===t?-1:1,u=4===t||2===t?"x":"y",d=1===t||3===t?Y:E;function h(h){var f=null==n?e.ticks?e.ticks.apply(e,i):e.domain():n,m=null==r?e.tickFormat?e.tickFormat.apply(e,i):C:r,y=Math.max(s,0)+o,k=e.range(),g=+k[0]+c,p=+k[k.length-1]+c,v=(e.bandwidth?function(t,e){return e=Math.max(0,t.bandwidth()-2*e)/2,t.round()&&(e=Math.round(e)),i=>+t(i)+e}:function(t){return e=>+t(e)})(e.copy(),c),x=h.selection?h.selection():h,T=x.selectAll(".domain").data([null]),b=x.selectAll(".tick").data(f,e).order(),w=b.exit(),$=b.enter().append("g").attr("class","tick"),_=b.select("line"),D=b.select("text");T=T.merge(T.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),b=b.merge($),_=_.merge($.append("line").attr("stroke","currentColor").attr(u+"2",l*s)),D=D.merge($.append("text").attr("fill","currentColor").attr(u,l*y).attr("dy",1===t?"0em":3===t?"0.71em":"0.32em")),h!==x&&(T=T.transition(h),b=b.transition(h),_=_.transition(h),D=D.transition(h),w=w.transition(h).attr("opacity",1e-6).attr("transform",function(t){return isFinite(t=v(t))?d(t+c):this.getAttribute("transform")}),$.attr("opacity",1e-6).attr("transform",function(t){var e=this.parentNode.__axis;return d((e&&isFinite(e=e(t))?e:v(t))+c)})),w.remove(),T.attr("d",4===t||2===t?a?"M"+l*a+","+g+"H"+c+"V"+p+"H"+l*a:"M"+c+","+g+"V"+p:a?"M"+g+","+l*a+"V"+c+"H"+p+"V"+l*a:"M"+g+","+c+"H"+p),b.attr("opacity",1).attr("transform",function(t){return d(v(t)+c)}),_.attr(u+"2",l*s),D.attr(u,l*y).text(m),x.filter(O).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",2===t?"start":4===t?"end":"middle"),x.each(function(){this.__axis=v})}return h.scale=function(t){return arguments.length?(e=t,h):e},h.ticks=function(){return i=Array.from(arguments),h},h.tickArguments=function(t){return arguments.length?(i=null==t?[]:Array.from(t),h):i.slice()},h.tickValues=function(t){return arguments.length?(n=null==t?null:Array.from(t),h):n&&n.slice()},h.tickFormat=function(t){return arguments.length?(r=t,h):r},h.tickSize=function(t){return arguments.length?(s=a=+t,h):s},h.tickSizeInner=function(t){return arguments.length?(s=+t,h):s},h.tickSizeOuter=function(t){return arguments.length?(a=+t,h):a},h.tickPadding=function(t){return arguments.length?(o=+t,h):o},h.offset=function(t){return arguments.length?(c=+t,h):c},h}var L=i(75018),I=function(){var t=(0,l.e)(function(t,e,i,n){for(i=i||{},n=t.length;n--;i[t[n]]=e);return i},"o"),e=[6,8,10,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,33,35,36,38,40],i=[1,26],n=[1,27],r=[1,28],s=[1,29],a=[1,30],o=[1,31],c=[1,32],u=[1,33],d=[1,34],h=[1,9],f=[1,10],m=[1,11],y=[1,12],k=[1,13],g=[1,14],p=[1,15],v=[1,16],x=[1,19],T=[1,20],b=[1,21],w=[1,22],$=[1,23],_=[1,25],D=[1,35],M={trace:(0,l.e)(function(){},"trace"),yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,weekend:19,weekend_friday:20,weekend_saturday:21,dateFormat:22,inclusiveEndDates:23,topAxis:24,axisFormat:25,tickInterval:26,excludes:27,includes:28,todayMarker:29,title:30,acc_title:31,acc_title_value:32,acc_descr:33,acc_descr_value:34,acc_descr_multiline_value:35,section:36,clickStatement:37,taskTxt:38,taskData:39,click:40,callbackname:41,callbackargs:42,href:43,clickStatementDebug:44,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",20:"weekend_friday",21:"weekend_saturday",22:"dateFormat",23:"inclusiveEndDates",24:"topAxis",25:"axisFormat",26:"tickInterval",27:"excludes",28:"includes",29:"todayMarker",30:"title",31:"acc_title",32:"acc_title_value",33:"acc_descr",34:"acc_descr_value",35:"acc_descr_multiline_value",36:"section",38:"taskTxt",39:"taskData",40:"click",41:"callbackname",42:"callbackargs",43:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[19,1],[19,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[37,2],[37,3],[37,3],[37,4],[37,3],[37,4],[37,2],[44,2],[44,3],[44,3],[44,4],[44,3],[44,4],[44,2]],performAction:(0,l.e)(function(t,e,i,n,r,s,a){var o=s.length-1;switch(r){case 1:return s[o-1];case 2:case 6:case 7:this.$=[];break;case 3:s[o-1].push(s[o]),this.$=s[o-1];break;case 4:case 5:this.$=s[o];break;case 8:n.setWeekday("monday");break;case 9:n.setWeekday("tuesday");break;case 10:n.setWeekday("wednesday");break;case 11:n.setWeekday("thursday");break;case 12:n.setWeekday("friday");break;case 13:n.setWeekday("saturday");break;case 14:n.setWeekday("sunday");break;case 15:n.setWeekend("friday");break;case 16:n.setWeekend("saturday");break;case 17:n.setDateFormat(s[o].substr(11)),this.$=s[o].substr(11);break;case 18:n.enableInclusiveEndDates(),this.$=s[o].substr(18);break;case 19:n.TopAxis(),this.$=s[o].substr(8);break;case 20:n.setAxisFormat(s[o].substr(11)),this.$=s[o].substr(11);break;case 21:n.setTickInterval(s[o].substr(13)),this.$=s[o].substr(13);break;case 22:n.setExcludes(s[o].substr(9)),this.$=s[o].substr(9);break;case 23:n.setIncludes(s[o].substr(9)),this.$=s[o].substr(9);break;case 24:n.setTodayMarker(s[o].substr(12)),this.$=s[o].substr(12);break;case 27:n.setDiagramTitle(s[o].substr(6)),this.$=s[o].substr(6);break;case 28:this.$=s[o].trim(),n.setAccTitle(this.$);break;case 29:case 30:this.$=s[o].trim(),n.setAccDescription(this.$);break;case 31:n.addSection(s[o].substr(8)),this.$=s[o].substr(8);break;case 33:n.addTask(s[o-1],s[o]),this.$="task";break;case 34:this.$=s[o-1],n.setClickEvent(s[o-1],s[o],null);break;case 35:this.$=s[o-2],n.setClickEvent(s[o-2],s[o-1],s[o]);break;case 36:this.$=s[o-2],n.setClickEvent(s[o-2],s[o-1],null),n.setLink(s[o-2],s[o]);break;case 37:this.$=s[o-3],n.setClickEvent(s[o-3],s[o-2],s[o-1]),n.setLink(s[o-3],s[o]);break;case 38:this.$=s[o-2],n.setClickEvent(s[o-2],s[o],null),n.setLink(s[o-2],s[o-1]);break;case 39:this.$=s[o-3],n.setClickEvent(s[o-3],s[o-1],s[o]),n.setLink(s[o-3],s[o-2]);break;case 40:this.$=s[o-1],n.setLink(s[o-1],s[o]);break;case 41:case 47:this.$=s[o-1]+" "+s[o];break;case 42:case 43:case 45:this.$=s[o-2]+" "+s[o-1]+" "+s[o];break;case 44:case 46:this.$=s[o-3]+" "+s[o-2]+" "+s[o-1]+" "+s[o]}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:i,13:n,14:r,15:s,16:a,17:o,18:c,19:18,20:u,21:d,22:h,23:f,24:m,25:y,26:k,27:g,28:p,29:v,30:x,31:T,33:b,35:w,36:$,37:24,38:_,40:D},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:36,11:17,12:i,13:n,14:r,15:s,16:a,17:o,18:c,19:18,20:u,21:d,22:h,23:f,24:m,25:y,26:k,27:g,28:p,29:v,30:x,31:T,33:b,35:w,36:$,37:24,38:_,40:D},t(e,[2,5]),t(e,[2,6]),t(e,[2,17]),t(e,[2,18]),t(e,[2,19]),t(e,[2,20]),t(e,[2,21]),t(e,[2,22]),t(e,[2,23]),t(e,[2,24]),t(e,[2,25]),t(e,[2,26]),t(e,[2,27]),{32:[1,37]},{34:[1,38]},t(e,[2,30]),t(e,[2,31]),t(e,[2,32]),{39:[1,39]},t(e,[2,8]),t(e,[2,9]),t(e,[2,10]),t(e,[2,11]),t(e,[2,12]),t(e,[2,13]),t(e,[2,14]),t(e,[2,15]),t(e,[2,16]),{41:[1,40],43:[1,41]},t(e,[2,4]),t(e,[2,28]),t(e,[2,29]),t(e,[2,33]),t(e,[2,34],{42:[1,42],43:[1,43]}),t(e,[2,40],{41:[1,44]}),t(e,[2,35],{43:[1,45]}),t(e,[2,36]),t(e,[2,38],{42:[1,46]}),t(e,[2,37]),t(e,[2,39])],defaultActions:{},parseError:(0,l.e)(function(t,e){if(e.recoverable)this.trace(t);else{var i=Error(t);throw i.hash=e,i}},"parseError"),parse:(0,l.e)(function(t){var e=this,i=[0],n=[],r=[null],s=[],a=this.table,o="",c=0,u=0,d=0,h=s.slice.call(arguments,1),f=Object.create(this.lexer),m={yy:{}};for(var y in this.yy)Object.prototype.hasOwnProperty.call(this.yy,y)&&(m.yy[y]=this.yy[y]);f.setInput(t,m.yy),m.yy.lexer=f,m.yy.parser=this,void 0===f.yylloc&&(f.yylloc={});var k=f.yylloc;s.push(k);var g=f.options&&f.options.ranges;function p(){var t;return"number"!=typeof(t=n.pop()||f.lex()||1)&&(t instanceof Array&&(t=(n=t).pop()),t=e.symbols_[t]||t),t}"function"==typeof m.yy.parseError?this.parseError=m.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError,(0,l.e)(function(t){i.length=i.length-2*t,r.length=r.length-t,s.length=s.length-t},"popStack"),(0,l.e)(p,"lex");for(var v,x,T,b,w,$,_,D,M,S={};;){if(T=i[i.length-1],this.defaultActions[T]?b=this.defaultActions[T]:(null==v&&(v=p()),b=a[T]&&a[T][v]),void 0===b||!b.length||!b[0]){var C="";for($ in M=[],a[T])this.terminals_[$]&&$>2&&M.push("'"+this.terminals_[$]+"'");C=f.showPosition?"Parse error on line "+(c+1)+":\n"+f.showPosition()+"\nExpecting "+M.join(", ")+", got '"+(this.terminals_[v]||v)+"'":"Parse error on line "+(c+1)+": Unexpected "+(1==v?"end of input":"'"+(this.terminals_[v]||v)+"'"),this.parseError(C,{text:f.match,token:this.terminals_[v]||v,line:f.yylineno,loc:k,expected:M})}if(b[0]instanceof Array&&b.length>1)throw Error("Parse Error: multiple actions possible at state: "+T+", token: "+v);switch(b[0]){case 1:i.push(v),r.push(f.yytext),s.push(f.yylloc),i.push(b[1]),v=null,x?(v=x,x=null):(u=f.yyleng,o=f.yytext,c=f.yylineno,k=f.yylloc,d>0&&d--);break;case 2:if(_=this.productions_[b[1]][1],S.$=r[r.length-_],S._$={first_line:s[s.length-(_||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(_||1)].first_column,last_column:s[s.length-1].last_column},g&&(S._$.range=[s[s.length-(_||1)].range[0],s[s.length-1].range[1]]),void 0!==(w=this.performAction.apply(S,[o,u,c,m.yy,b[1],r,s].concat(h))))return w;_&&(i=i.slice(0,-1*_*2),r=r.slice(0,-1*_),s=s.slice(0,-1*_)),i.push(this.productions_[b[1]][0]),r.push(S.$),s.push(S._$),D=a[i[i.length-2]][i[i.length-1]],i.push(D);break;case 3:return!0}}return!0},"parse")},S={EOF:1,parseError:(0,l.e)(function(t,e){if(this.yy.parser)this.yy.parser.parseError(t,e);else throw Error(t)},"parseError"),setInput:(0,l.e)(function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:(0,l.e)(function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},"input"),unput:(0,l.e)(function(t){var e=t.length,i=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var n=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var r=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===n.length?this.yylloc.first_column:0)+n[n.length-i.length].length-i[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[r[0],r[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},"unput"),more:(0,l.e)(function(){return this._more=!0,this},"more"),reject:(0,l.e)(function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},"reject"),less:(0,l.e)(function(t){this.unput(this.match.slice(t))},"less"),pastInput:(0,l.e)(function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:(0,l.e)(function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:(0,l.e)(function(){var t=this.pastInput(),e=Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},"showPosition"),test_match:(0,l.e)(function(t,e){var i,n,r;if(this.options.backtrack_lexer&&(r={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(r.yylloc.range=this.yylloc.range.slice(0))),(n=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=n.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:n?n[n.length-1].length-n[n.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],i=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack)for(var s in r)this[s]=r[s];return!1},"test_match"),next:(0,l.e)(function(){if(this.done)return this.EOF;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var t,e,i,n,r=this._currentRules(),s=0;s<r.length;s++)if((i=this._input.match(this.rules[r[s]]))&&(!e||i[0].length>e[0].length)){if(e=i,n=s,this.options.backtrack_lexer){if(!1!==(t=this.test_match(i,r[s])))return t;if(!this._backtrack)return!1;e=!1;continue}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,r[n]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:(0,l.e)(function(){return this.next()||this.lex()},"lex"),begin:(0,l.e)(function(t){this.conditionStack.push(t)},"begin"),popState:(0,l.e)(function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:(0,l.e)(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:(0,l.e)(function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},"topState"),pushState:(0,l.e)(function(t){this.begin(t)},"pushState"),stateStackSize:(0,l.e)(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:(0,l.e)(function(t,e,i,n){switch(i){case 0:return this.begin("open_directive"),"open_directive";case 1:return this.begin("acc_title"),31;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),33;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:case 15:case 18:case 21:case 24:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:case 9:case 10:case 12:case 13:break;case 11:return 10;case 14:this.begin("href");break;case 16:return 43;case 17:this.begin("callbackname");break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 41;case 22:return 42;case 23:this.begin("click");break;case 25:return 40;case 26:return 4;case 27:return 22;case 28:return 23;case 29:return 24;case 30:return 25;case 31:return 26;case 32:return 28;case 33:return 27;case 34:return 29;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return 20;case 43:return 21;case 44:return"date";case 45:return 30;case 46:return"accDescription";case 47:return 36;case 48:return 38;case 49:return 39;case 50:return":";case 51:return 6;case 52:return"INVALID"}},"anonymous"),rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:weekend\s+friday\b)/i,/^(?:weekend\s+saturday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:!0}}};function C(){this.yy={}}return M.lexer=S,(0,l.e)(C,"Parser"),C.prototype=M,M.Parser=C,new C}();I.parser=I,d.extend(h),d.extend(f),d.extend(m);var F={friday:5,saturday:6},W="",N="",P=void 0,H="",z=[],B=[],R=new Map,G=[],V=[],j="",Z="",U=["active","done","crit","milestone","vert"],q=[],Q="",X=!1,J=!1,K="sunday",tt="saturday",te=0,ti=(0,l.e)(function(){G=[],V=[],j="",q=[],tW=0,n=void 0,r=void 0,tz=[],W="",N="",Z="",P=void 0,H="",z=[],B=[],X=!1,J=!1,te=0,R=new Map,Q="",(0,o.ZH)(),K="sunday",tt="saturday"},"clear"),tn=(0,l.e)(function(t){Q=t},"setDiagramId"),tr=(0,l.e)(function(t){N=t},"setAxisFormat"),ts=(0,l.e)(function(){return N},"getAxisFormat"),ta=(0,l.e)(function(t){P=t},"setTickInterval"),to=(0,l.e)(function(){return P},"getTickInterval"),tc=(0,l.e)(function(t){H=t},"setTodayMarker"),tl=(0,l.e)(function(){return H},"getTodayMarker"),tu=(0,l.e)(function(t){W=t},"setDateFormat"),td=(0,l.e)(function(){X=!0},"enableInclusiveEndDates"),th=(0,l.e)(function(){return X},"endDatesAreInclusive"),tf=(0,l.e)(function(){J=!0},"enableTopAxis"),tm=(0,l.e)(function(){return J},"topAxisEnabled"),ty=(0,l.e)(function(t){Z=t},"setDisplayMode"),tk=(0,l.e)(function(){return Z},"getDisplayMode"),tg=(0,l.e)(function(){return W},"getDateFormat"),tp=(0,l.e)((t,e)=>[...new Set([...t,...e.toLowerCase().split(/[\s,]+/).filter(t=>""!==t)])],"mergeTokens"),tv=(0,l.e)(function(t){z=tp(z,t)},"setIncludes"),tx=(0,l.e)(function(){return z},"getIncludes"),tT=(0,l.e)(function(t){B=tp(B,t)},"setExcludes"),tb=(0,l.e)(function(){return B},"getExcludes"),tw=(0,l.e)(function(){return R},"getLinks"),t$=(0,l.e)(function(t){j=t,G.push(t)},"addSection"),t_=(0,l.e)(function(){return G},"getSections"),tD=(0,l.e)(function(){let t=tj(),e=0;for(;!t&&e<10;)t=tj(),e++;return V=tz},"getTasks"),tM=(0,l.e)(function(t,e,i,n){let r=t.format(e.trim()),s=t.format("YYYY-MM-DD");return!(n.includes(r)||n.includes(s))&&(!!(i.includes("weekends")&&(t.isoWeekday()===F[tt]||t.isoWeekday()===F[tt]+1)||i.includes(t.format("dddd").toLowerCase()))||i.includes(r)||i.includes(s))},"isInvalidDate"),tS=(0,l.e)(function(t){K=t},"setWeekday"),tC=(0,l.e)(function(){return K},"getWeekday"),tY=(0,l.e)(function(t){tt=t},"setWeekend"),tE=(0,l.e)(function(t,e,i,n){let r;if(!i.length||t.manualEndTime)return;let[s,a]=tO((t.startTime instanceof Date?d(t.startTime):d(t.startTime,e,!0)).add(1,"d"),t.endTime instanceof Date?d(t.endTime):d(t.endTime,e,!0),e,i,n);t.endTime=s.toDate(),t.renderEndTime=a},"checkTaskDates"),tO=(0,l.e)(function(t,e,i,n,r){let s=!1,a=null,o=e.add(1e4,"d");for(;t<=e;){if(s||(a=e.toDate()),(s=tM(t,i,n,r))&&(e=e.add(1,"d"))>o)throw Error("Failed to find a valid date that was not excluded by `excludes` after 10,000 iterations.");t=t.add(1,"d")}return[e,a]},"fixTaskDates"),tA=(0,l.e)(function(t,e){c.c.warn(`Gantt: the "${t}" statement references unknown task id(s): ${e.join(", ")}. Make sure the referenced tasks exist and declare an id. Milestones need both an id and a duration, e.g. "Milestone :milestone, m1, 2023-01-01, 0d".`)},"warnAboutUnknownTaskIds"),tL=(0,l.e)(function(t,e,i){if(i=i.trim(),(0,l.e)(t=>{let e=t.trim();return"x"===e||"X"===e},"isTimestampFormat")(e)&&/^\d+$/.test(i))return new Date(Number(i));let n=/^after\s+(?<ids>[\d\w- ]+)/.exec(i);if(null!==n){let t=null,e=[];for(let i of n.groups.ids.split(" ").filter(t=>""!==t)){let n=tG(i);if(void 0===n){e.push(i);continue}(!t||n.endTime>t.endTime)&&(t=n)}if(e.length>0&&tA("after",e),t)return t.endTime;let i=new Date;return i.setHours(0,0,0,0),i}let r=d(i,e.trim(),!0);if(r.isValid())return r.toDate();{c.c.debug("Invalid date:"+i),c.c.debug("With date format:"+e.trim());let t=new Date(i);if(void 0===t||isNaN(t.getTime())||-1e4>t.getFullYear()||t.getFullYear()>1e4)throw Error("Invalid date:"+i);return t}},"getStartDate"),tI=(0,l.e)(function(t){let e=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return null!==e?[Number.parseFloat(e[1]),e[2]]:[NaN,"ms"]},"parseDuration"),tF=(0,l.e)(function(t,e,i,n=!1){i=i.trim();let r=/^until\s+(?<ids>[\d\w- ]+)/.exec(i);if(null!==r){let t=null,e=[];for(let i of r.groups.ids.split(" ").filter(t=>""!==t)){let n=tG(i);if(void 0===n){e.push(i);continue}(!t||n.startTime<t.startTime)&&(t=n)}if(e.length>0&&tA("until",e),t)return t.startTime;let i=new Date;return i.setHours(0,0,0,0),i}let s=d(i,e.trim(),!0);if(s.isValid())return n&&(s=s.add(1,"d")),s.toDate();let a=d(t),[o,l]=tI(i);if(Number.isNaN(o))c.c.warn(`Gantt: "${i}" is neither a valid date for the "${e.trim()}" date format nor a valid duration (e.g. "3d"), so it is ignored and the task gets a zero duration. Milestones need a duration too, e.g. "Milestone :milestone, m1, 2023-01-01, 0d".`);else{let t=a.add(o,l);t.isValid()&&(a=t)}return a.toDate()},"getEndDate"),tW=0,tN=(0,l.e)(function(t){return void 0===t?"task"+(tW+=1):t},"parseId"),tP=(0,l.e)(function(t,e){let i=(":"===e.substr(0,1)?e.substr(1,e.length):e).split(","),n={};t1(i,n,U);for(let t=0;t<i.length;t++)i[t]=i[t].trim();let r="";switch(i.length){case 1:n.id=tN(),n.startTime=t.endTime,r=i[0];break;case 2:n.id=tN(),n.startTime=tL(void 0,W,i[0]),r=i[1];break;case 3:n.id=tN(i[0]),n.startTime=tL(void 0,W,i[1]),r=i[2]}return r&&(n.endTime=tF(n.startTime,W,r,X),n.manualEndTime=d(r,"YYYY-MM-DD",!0).isValid(),tE(n,W,B,z)),n},"compileData"),tH=(0,l.e)(function(t,e){let i=(":"===e.substr(0,1)?e.substr(1,e.length):e).split(","),n={};t1(i,n,U);for(let t=0;t<i.length;t++)i[t]=i[t].trim();switch(i.length){case 1:n.id=tN(),n.startTime={type:"prevTaskEnd",id:t},n.endTime={data:i[0]};break;case 2:n.id=tN(),n.startTime={type:"getStartDate",startData:i[0]},n.endTime={data:i[1]};break;case 3:n.id=tN(i[0]),n.startTime={type:"getStartDate",startData:i[1]},n.endTime={data:i[2]}}return n},"parseData"),tz=[],tB={},tR=(0,l.e)(function(t,e){let i={section:j,type:j,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:e},task:t,classes:[]},n=tH(r,e);i.raw.startTime=n.startTime,i.raw.endTime=n.endTime,i.id=n.id,i.prevTaskId=r,i.active=n.active,i.done=n.done,i.crit=n.crit,i.milestone=n.milestone,i.vert=n.vert,i.vert?i.order=-1:(i.order=te,te++);let s=tz.push(i);r=i.id,tB[i.id]=s-1},"addTask"),tG=(0,l.e)(function(t){return tz[tB[t]]},"findTaskById"),tV=(0,l.e)(function(t,e){let i={section:j,type:j,description:t,task:t,classes:[]},r=tP(n,e);i.startTime=r.startTime,i.endTime=r.endTime,i.id=r.id,i.active=r.active,i.done=r.done,i.crit=r.crit,i.milestone=r.milestone,i.vert=r.vert,n=i,V.push(i)},"addTaskOrg"),tj=(0,l.e)(function(){let t=(0,l.e)(function(t){let e=tz[t],i="";switch(tz[t].raw.startTime.type){case"prevTaskEnd":{let t=tG(e.prevTaskId);e.startTime=t.endTime;break}case"getStartDate":(i=tL(void 0,W,tz[t].raw.startTime.startData))&&(tz[t].startTime=i)}return tz[t].startTime&&(tz[t].endTime=tF(tz[t].startTime,W,tz[t].raw.endTime.data,X),tz[t].endTime&&(tz[t].processed=!0,tz[t].manualEndTime=d(tz[t].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),tE(tz[t],W,B,z))),tz[t].processed},"compileTask"),e=!0;for(let[i,n]of tz.entries())t(i),e=e&&n.processed;return e},"compileTasks"),tZ=(0,l.e)(function(t,e){let i=e;"loose"!==(0,o.nV)().securityLevel&&(i=(0,u.N)(e)),t.split(",").forEach(function(t){void 0!==tG(t)&&(tQ(t,()=>{window.open(i,"_self")}),R.set(t,i))}),tU(t,"clickable")},"setLink"),tU=(0,l.e)(function(t,e){t.split(",").forEach(function(t){let i=tG(t);void 0!==i&&i.classes.push(e)})},"setClass"),tq=(0,l.e)(function(t,e,i){if("loose"!==(0,o.nV)().securityLevel||void 0===e)return;let n=[];if("string"==typeof i){n=i.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let t=0;t<n.length;t++){let e=n[t].trim();e.startsWith('"')&&e.endsWith('"')&&(e=e.substr(1,e.length-2)),n[t]=e}}0===n.length&&n.push(t),void 0!==tG(t)&&tQ(t,()=>{a.w8.runFunc(e,...n)})},"setClickFun"),tQ=(0,l.e)(function(t,e){q.push(function(){let i=Q?`${Q}-${t}`:t,n=document.querySelector(`[id="${i}"]`);null!==n&&n.addEventListener("click",function(){e()})},function(){let i=Q?`${Q}-${t}`:t,n=document.querySelector(`[id="${i}-text"]`);null!==n&&n.addEventListener("click",function(){e()})})},"pushFun"),tX=(0,l.e)(function(t,e,i){t.split(",").forEach(function(t){tq(t,e,i)}),tU(t,"clickable")},"setClickEvent"),tJ=(0,l.e)(function(t){q.forEach(function(e){e(t)})},"bindFunctions"),tK={getConfig:(0,l.e)(()=>(0,o.nV)().gantt,"getConfig"),clear:ti,setDateFormat:tu,getDateFormat:tg,enableInclusiveEndDates:td,endDatesAreInclusive:th,enableTopAxis:tf,topAxisEnabled:tm,setAxisFormat:tr,getAxisFormat:ts,setTickInterval:ta,getTickInterval:to,setTodayMarker:tc,getTodayMarker:tl,setAccTitle:o.GN,getAccTitle:o.eu,setDiagramTitle:o.g2,getDiagramTitle:o.Kr,setDiagramId:tn,setDisplayMode:ty,getDisplayMode:tk,setAccDescription:o.U$,getAccDescription:o.Mx,addSection:t$,getSections:t_,getTasks:tD,addTask:tR,findTaskById:tG,addTaskOrg:tV,setIncludes:tv,getIncludes:tx,setExcludes:tT,getExcludes:tb,setClickEvent:tX,setLink:tZ,getLinks:tw,bindFunctions:tJ,parseDuration:tI,isInvalidDate:tM,setWeekday:tS,getWeekday:tC,setWeekend:tY};function t1(t,e,i){let n=!0;for(;n;)n=!1,i.forEach(function(i){let r=RegExp("^\\s*"+i+"\\s*$");t[0].match(r)&&(e[i]=!0,t.shift(1),n=!0)})}(0,l.e)(t1,"getTaskTags"),d.extend(y);var t0=(0,l.e)(function(){c.c.debug("Something is calling, setConf, remove the call")},"setConf"),t2={monday:k.Ox,tuesday:k.YD,wednesday:k.EF,thursday:k.Ig,friday:k.y2,saturday:k.Lq,sunday:k.Zy},t3=(0,l.e)((t,e)=>{let i=[...t].map(()=>-1/0),n=[...t].sort((t,e)=>t.startTime-e.startTime||t.order-e.order),r=0;for(let t of n)for(let n=0;n<i.length;n++)if(t.startTime>=i[n]){i[n]=t.endTime,t.order=n+e,n>r&&(r=n);break}return r},"getMaxIntersections"),t4={parser:I,db:tK,renderer:{setConf:t0,draw:(0,l.e)(function(t,e,i,n){let r;let a=(0,o.nV)().gantt;n.db.setDiagramId(e);let u=(0,o.nV)().securityLevel;"sandbox"===u&&(r=(0,g.Ys)("#i"+e));let h="sandbox"===u?(0,g.Ys)(r.nodes()[0].contentDocument.body):(0,g.Ys)("body"),f="sandbox"===u?r.nodes()[0].contentDocument:document,m=f.getElementById(e);void 0===(s=m.parentElement.offsetWidth)&&(s=1200),void 0!==a.useWidth&&(s=a.useWidth);let y=n.db.getTasks(),v=y.filter(t=>!t.vert),x=[];for(let t of v)x.push(t.type);x=F(x);let T={},b=2*a.topPadding;if("compact"===n.db.getDisplayMode()||"compact"===a.displayMode){let t={};for(let e of v)void 0===t[e.section]?t[e.section]=[e]:t[e.section].push(e);let e=0;for(let i of Object.keys(t)){let n=t3(t[i],e)+1;e+=n,b+=n*(a.barHeight+a.barGap),T[i]=n}}else for(let t of(b+=v.length*(a.barHeight+a.barGap),x))T[t]=v.filter(e=>e.type===t).length;m.setAttribute("viewBox","0 0 "+s+" "+b);let w=h.select(`[id="${e}"]`),$=(0,p.Xf)().domain([function(t,e){let i;if(void 0===e)for(let e of t)null!=e&&(i>e||void 0===i&&e>=e)&&(i=e);else{let n=-1;for(let r of t)null!=(r=e(r,++n,t))&&(i>r||void 0===i&&r>=r)&&(i=r)}return i}(y,function(t){return t.startTime}),function(t,e){let i;if(void 0===e)for(let e of t)null!=e&&(i<e||void 0===i&&e>=e)&&(i=e);else{let n=-1;for(let r of t)null!=(r=e(r,++n,t))&&(i<r||void 0===i&&r>=r)&&(i=r)}return i}(y,function(t){return t.endTime})]).rangeRound([0,s-a.leftPadding-a.rightPadding]);function _(t,e){let i=t.startTime,n=e.startTime,r=0;return i>n?r=1:i<n&&(r=-1),r}function D(t,e,i){let r=a.barHeight,s=r+a.barGap,o=a.topPadding,c=a.leftPadding,l=(0,p.BY)().domain([0,x.length]).range(["#00B9FA","#F95002"]).interpolate(S.JH);C(s,o,c,e,i,t,n.db.getExcludes(),n.db.getIncludes()),E(c,o,e,i),M(t,s,o,c,r,l,e,i),O(s,o,c,r,l),I(c,o,e,i)}function M(t,i,r,s,c,l,u){t.sort((t,e)=>t.vert===e.vert?0:t.vert?1:-1);let d=t.filter(t=>!t.vert),h=[...new Set(d.map(t=>t.order))].map(t=>d.find(e=>e.order===t));w.append("g").selectAll("rect").data(h).enter().append("rect").attr("x",0).attr("y",function(t,e){return t.order*i+r-2}).attr("width",function(){return u-a.rightPadding/2}).attr("height",i).attr("class",function(t){for(let[e,i]of x.entries())if(t.type===i)return"section section"+e%a.numberSectionStyles;return"section section0"}).enter();let f=w.append("g").selectAll("rect").data(t).enter(),m=n.db.getLinks();if(f.append("rect").attr("id",function(t){return e+"-"+t.id}).attr("rx",3).attr("ry",3).attr("x",function(t){return t.milestone?$(t.startTime)+s+.5*($(t.endTime)-$(t.startTime))-.5*c:$(t.startTime)+s}).attr("y",function(t,e){return(e=t.order,t.vert)?a.gridLineStartPadding:e*i+r}).attr("width",function(t){return t.milestone?c:t.vert?.08*c:$(t.renderEndTime||t.endTime)-$(t.startTime)}).attr("height",function(t){return t.vert?d.length*(a.barHeight+a.barGap)+2*a.barHeight:c}).attr("transform-origin",function(t,e){return e=t.order,($(t.startTime)+s+.5*($(t.endTime)-$(t.startTime))).toString()+"px "+(e*i+r+.5*c).toString()+"px"}).attr("class",function(t){let e="";t.classes.length>0&&(e=t.classes.join(" "));let i=0;for(let[e,n]of x.entries())t.type===n&&(i=e%a.numberSectionStyles);let n="";return t.active?t.crit?n+=" activeCrit":n=" active":t.done?n=t.crit?" doneCrit":" done":t.crit&&(n+=" crit"),0===n.length&&(n=" task"),t.milestone&&(n=" milestone "+n),t.vert&&(n=" vert "+n),"task"+(n+=i+" "+e)}),f.append("text").attr("id",function(t){return e+"-"+t.id+"-text"}).text(function(t){return t.task}).attr("font-size",a.fontSize).attr("x",function(t){let e=$(t.startTime),i=$(t.renderEndTime||t.endTime);if(t.milestone&&(e+=.5*($(t.endTime)-$(t.startTime))-.5*c,i=e+c),t.vert)return $(t.startTime)+s;let n=this.getBBox().width;return n>i-e?i+n+1.5*a.leftPadding>u?e+s-5:i+s+5:(i-e)/2+e+s}).attr("y",function(t,e){return t.vert?a.gridLineStartPadding+d.length*(a.barHeight+a.barGap)+60:t.order*i+a.barHeight/2+(a.fontSize/2-2)+r}).attr("text-height",c).attr("class",function(t){let e=$(t.startTime),i=$(t.endTime);t.milestone&&(i=e+c);let n=this.getBBox().width,r="";t.classes.length>0&&(r=t.classes.join(" "));let s=0;for(let[e,i]of x.entries())t.type===i&&(s=e%a.numberSectionStyles);let o="";return(t.active&&(o=t.crit?"activeCritText"+s:"activeText"+s),t.done?o=t.crit?o+" doneCritText"+s:o+" doneText"+s:t.crit&&(o=o+" critText"+s),t.milestone&&(o+=" milestoneText"),t.vert&&(o+=" vertText"),n>i-e)?i+n+1.5*a.leftPadding>u?r+" taskTextOutsideLeft taskTextOutside"+s+" "+o:r+" taskTextOutsideRight taskTextOutside"+s+" "+o+" width-"+n:r+" taskText taskText"+s+" "+o+" width-"+n}),"sandbox"===(0,o.nV)().securityLevel){let t=(0,g.Ys)("#i"+e).nodes()[0].contentDocument;f.filter(function(t){return m.has(t.id)}).each(function(i){var n=t.querySelector("#"+CSS.escape(e+"-"+i.id)),r=t.querySelector("#"+CSS.escape(e+"-"+i.id+"-text"));let s=n.parentNode;var a=t.createElement("a");a.setAttribute("xlink:href",m.get(i.id)),a.setAttribute("target","_top"),s.appendChild(a),a.appendChild(n),a.appendChild(r)})}}function C(t,i,r,s,o,l,u,h){let f,m;if(0===u.length&&0===h.length)return;for(let{startTime:t,endTime:e}of l)(void 0===f||t<f)&&(f=t),(void 0===m||e>m)&&(m=e);if(!f||!m)return;if(d(m).diff(d(f),"year")>5){c.c.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");return}let y=n.db.getDateFormat(),k=[],g=null,p=d(f);for(;p.valueOf()<=m;)n.db.isInvalidDate(p,y,u,h)?g?g.end=p:g={start:p,end:p}:g&&(k.push(g),g=null),p=p.add(1,"d");w.append("g").selectAll("rect").data(k).enter().append("rect").attr("id",t=>e+"-exclude-"+t.start.format("YYYY-MM-DD")).attr("x",t=>$(t.start.startOf("day"))+r).attr("y",a.gridLineStartPadding).attr("width",t=>$(t.end.endOf("day"))-$(t.start.startOf("day"))).attr("height",o-i-a.gridLineStartPadding).attr("transform-origin",function(e,i){return($(e.start)+r+.5*($(e.end)-$(e.start))).toString()+"px "+(i*t+.5*o).toString()+"px"}).attr("class","exclude-range")}function Y(t,e,i,n){if(i<=0||t>e)return 1/0;let r=d.duration({[n??"day"]:i}).asMilliseconds();return r<=0?1/0:Math.ceil((e-t)/r)}function E(t,e,i,r){let s;let o=n.db.getDateFormat();s=n.db.getAxisFormat()||("D"===o?"%d":a.axisFormat??"%Y-%m-%d");let l=A(3,$).tickSize(-r+e+a.gridLineStartPadding).tickFormat((0,L.i$)(s)),u=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(n.db.getTickInterval()||a.tickInterval);if(null!==u){let t=parseInt(u[1],10);if(isNaN(t)||t<=0)c.c.warn(`Invalid tick interval value: "${u[1]}". Skipping custom tick interval.`);else{let e=u[2],i=n.db.getWeekday()||a.weekday,r=$.domain(),s=Y(r[0],r[1],t,e);if(s>1e4)c.c.warn(`The tick interval "${t}${e}" would generate ${s} ticks, which exceeds the maximum allowed (10000). This may indicate an invalid date or time range. Skipping custom tick interval.`);else switch(e){case"millisecond":l.ticks(k.U8.every(t));break;case"second":l.ticks(k.S1.every(t));break;case"minute":l.ticks(k.Z_.every(t));break;case"hour":l.ticks(k.WQ.every(t));break;case"day":l.ticks(k.rr.every(t));break;case"week":l.ticks(t2[i].every(t));break;case"month":l.ticks(k.F0.every(t))}}}if(w.append("g").attr("class","grid").attr("transform","translate("+t+", "+(r-50)+")").call(l).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),n.db.topAxisEnabled()||a.topAxis){let i=A(1,$).tickSize(-r+e+a.gridLineStartPadding).tickFormat((0,L.i$)(s));if(null!==u){let t=parseInt(u[1],10);if(isNaN(t)||t<=0)c.c.warn(`Invalid tick interval value: "${u[1]}". Skipping custom tick interval.`);else{let e=u[2],r=n.db.getWeekday()||a.weekday,s=$.domain();if(1e4>=Y(s[0],s[1],t,e))switch(e){case"millisecond":i.ticks(k.U8.every(t));break;case"second":i.ticks(k.S1.every(t));break;case"minute":i.ticks(k.Z_.every(t));break;case"hour":i.ticks(k.WQ.every(t));break;case"day":i.ticks(k.rr.every(t));break;case"week":i.ticks(t2[r].every(t));break;case"month":i.ticks(k.F0.every(t))}}}w.append("g").attr("class","grid").attr("transform","translate("+t+", "+e+")").call(i).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}function O(t,e){let i=0,n=Object.keys(T).map(t=>[t,T[t]]);w.append("g").selectAll("text").data(n).enter().append(function(t){let e=t[0].split(o.SY.lineBreakRegex),i=-(e.length-1)/2,n=f.createElementNS("http://www.w3.org/2000/svg","text");for(let[t,r]of(n.setAttribute("dy",i+"em"),e.entries())){let e=f.createElementNS("http://www.w3.org/2000/svg","tspan");e.setAttribute("alignment-baseline","central"),e.setAttribute("x","10"),t>0&&e.setAttribute("dy","1em"),e.textContent=r,n.appendChild(e)}return n}).attr("x",10).attr("y",function(r,s){if(!(s>0))return r[1]*t/2+e;for(let a=0;a<s;a++)return i+=n[s-1][1],r[1]*t/2+i*t+e}).attr("font-size",a.sectionFontSize).attr("class",function(t){for(let[e,i]of x.entries())if(t[0]===i)return"sectionTitle sectionTitle"+e%a.numberSectionStyles;return"sectionTitle"})}function I(t,e,i,r){let s=n.db.getTodayMarker();if("off"===s)return;let o=w.append("g").attr("class","today"),c=new Date,l=o.append("line");l.attr("x1",$(c)+t).attr("x2",$(c)+t).attr("y1",a.titleTopMargin).attr("y2",r-a.titleTopMargin).attr("class","today"),""!==s&&l.attr("style",s.replace(/,/g,";"))}function F(t){let e={},i=[];for(let n=0,r=t.length;n<r;++n)Object.prototype.hasOwnProperty.call(e,t[n])||(e[t[n]]=!0,i.push(t[n]));return i}(0,l.e)(_,"taskCompare"),y.sort(_),D(y,s,b),(0,o.v2)(w,b,s,a.useMaxWidth),w.append("text").text(n.db.getDiagramTitle()).attr("x",s/2).attr("y",a.titleTopMargin).attr("class","titleText"),(0,l.e)(D,"makeGantt"),(0,l.e)(M,"drawRects"),(0,l.e)(C,"drawExcludeDays"),(0,l.e)(Y,"getEstimatedTickCount"),(0,l.e)(E,"makeGrid"),(0,l.e)(O,"vertLabels"),(0,l.e)(I,"drawToday"),(0,l.e)(F,"checkUnique")},"draw")},styles:(0,l.e)(t=>`
  .mermaid-main-font {
        font-family: ${t.fontFamily};
  }

  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${t.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${t.fontFamily};
    fill: ${t.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  /* Done task text displayed outside the bar sits against the diagram background,
     not against the done-task bar, so it must use the outside/contrast color. */
  .doneText0.taskTextOutsideLeft,
  .doneText0.taskTextOutsideRight,
  .doneText1.taskTextOutsideLeft,
  .doneText1.taskTextOutsideRight,
  .doneText2.taskTextOutsideLeft,
  .doneText2.taskTextOutsideRight,
  .doneText3.taskTextOutsideLeft,
  .doneText3.taskTextOutsideRight {
    fill: ${t.taskTextOutsideColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  /* Done-crit task text outside the bar \u2014 same reasoning as doneText above. */
  .doneCritText0.taskTextOutsideLeft,
  .doneCritText0.taskTextOutsideRight,
  .doneCritText1.taskTextOutsideLeft,
  .doneCritText1.taskTextOutsideRight,
  .doneCritText2.taskTextOutsideLeft,
  .doneCritText2.taskTextOutsideRight,
  .doneCritText3.taskTextOutsideLeft,
  .doneCritText3.taskTextOutsideRight {
    fill: ${t.taskTextOutsideColor} !important;
  }

  .vert {
    stroke: ${t.vertLineColor};
  }

  .vertText {
    font-size: 15px;
    text-anchor: middle;
    fill: ${t.vertLineColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.titleColor||t.textColor};
    font-family: ${t.fontFamily};
  }
`,"getStyles")}}}]);
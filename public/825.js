(self.webpackChunkcmp_browser_login=self.webpackChunkcmp_browser_login||[]).push([[825],{5825:function(t,e,n){"use strict";n.r(e);var s=n(4823),i=n(6516),a=function(){function t(t){this.isOptedOut=!1,this.iabAgreementExists=t.ccpa.iabAgreementExists||!1,this.isActive=t.ccpa.isActive||!1,this.region=t.ccpa.region||i.L.US_CA_ONLY,this.reshowAfterDays=t.ccpa.reshowAfterDays||365,this.showOnPageLoad=t.ccpa.showOnPageLoad||!1,i.S.getCcpaData()?this.isOptedOut=(0,s.g)():this.setCcpaStorage(this.isOptedOut,s.S.UNKNOWN),(0,s.b)(),(0,s.s)(),window.addEventListener("message",s.h,!1)}return t.prototype.getIsOptedOut=function(){return this.isOptedOut},t.prototype.setCcpaStorage=function(t,e){void 0===e&&(e=s.S.ACCEPT),this.setIsOptedOut(t),t?i.S.setCcpaTimeStamp():i.S.clearCcpaData();var n=(0,s.c)(t,e,this.iabAgreementExists);i.C.isCrossDomainAvailable()&&i.C.setCrossDomainCcpaData({ccpaString:n,timestamp:i.S.getCcpaTimeStamp()}).catch((function(){console.warn(i.b.CROSS_DOMAIN_SET_DATA_FAILURE)})),i.S.setCcpaCookie(n)},t.prototype.setIsOptedOut=function(t){var e="boolean"==typeof t?t:(0,s.a)(t);this.isOptedOut=e},t}();e.default=a},4823:function(t,e,n){"use strict";n.d(e,{S:function(){return i},a:function(){return o},b:function(){return r},c:function(){return u},g:function(){return p},h:function(){return f},s:function(){return l}}),n(8309);var s,i,a,c=n(6516);(a=s||(s={})).API_INVALID_COMMAND="Usercentrics: (__uspapi) Invalid command: ",a.API_INVALID_CALLBACK="Usercentrics: (__uspapi) callback parameter not a function",a.INVALID_STRING="Usercentrics: ccpa string is invalid",a.RESHOW_AFTER_DAYS_INVALID="Usercentrics: reshow after days must be greater than 364.",a.SETTINGS_UNDEFINED="Usercentrics: ccpa is missing in setting",function(t){t.ACCEPT="Y",t.DENY="N",t.UNKNOWN="-"}(i||(i={}));var r=function(){if(!Object.prototype.hasOwnProperty.call(window.frames,c.F)){var t=document.createElement("iframe");t.style.display="none",t.name=c.F,document.body.appendChild(t)}},o=function(t){return!(!t||!t.length||t[2]!==i.ACCEPT)},u=function(t,e,n){var s=""+c.c+e+(t?i.ACCEPT:i.DENY)+(n?i.ACCEPT:i.UNKNOWN);return c.d.test(s)||(s=c.D),s},p=function(){return o(c.S.getCcpaString())},f=function(t){var e=t&&t.data&&t.data.__uspapiCall;e&&window[c.W](e.command,e.version,(function(n,s){!t.source||t.source instanceof MessagePort||t.source instanceof ServiceWorker||t.source.postMessage({__uspapiReturn:{callId:e.callId,returnValue:n,success:s}},"*")}))},l=function(){window[c.W]=function(t,e,n){switch("function"!=typeof n&&console.warn(s.API_INVALID_CALLBACK),e!==c.c&&n({uspString:null,version:null},!1),t){case c.e.GET_USP_DATA:n({uspString:c.S.getCcpaString(),version:c.c},!0);break;case c.W:n(null,!0);break;default:console.warn(s.API_INVALID_COMMAND,t),n(null,!1)}}}}}]);
"use strict";(self.webpackChunkcmp_browser_login=self.webpackChunkcmp_browser_login||[]).push([[564,550],{9564:function(e,t,n){n.r(t),n(8309);var s,i,r,a=n(7657),c=n(1550);(r=s||(s={})).API_INVALID_COMMAND="Usercentrics: (__uspapi) Invalid command: ",r.API_INVALID_CALLBACK="Usercentrics: (__uspapi) callback parameter not a function",r.INVALID_STRING="Usercentrics: ccpa string is invalid",r.RESHOW_AFTER_DAYS_INVALID="Usercentrics: reshow after days must be greater than 364.",r.SETTINGS_UNDEFINED="Usercentrics: ccpa is missing in setting",function(e){e.ACCEPT="Y",e.DENY="N",e.UNKNOWN="-"}(i||(i={}));var o=function(e){return!(!e||!e.length||e[2]!==i.ACCEPT)},u=function(e){var t=e&&e.data&&e.data.__uspapiCall;t&&window[a.W](t.command,t.version,(function(n,s){!e.source||e.source instanceof MessagePort||e.source instanceof ServiceWorker||e.source.postMessage({__uspapiReturn:{callId:t.callId,returnValue:n,success:s}},"*")}))},l=function(e){function t(t,n,r){var c,l,d,p,v,f=e.call(this,n,r)||this;return f.isOptedOut=!1,f.iabAgreementExists=(null===(c=t.ccpa)||void 0===c?void 0:c.iabAgreementExists)||!1,f.isActive=(null===(l=t.ccpa)||void 0===l?void 0:l.isActive)||!1,f.region=(null===(d=t.ccpa)||void 0===d?void 0:d.region)||a.L.US_CA_ONLY,f.reshowAfterDays=(null===(p=t.ccpa)||void 0===p?void 0:p.reshowAfterDays)||365,f.showOnPageLoad=(null===(v=t.ccpa)||void 0===v?void 0:v.showOnPageLoad)||!1,a.S.getCcpaString()!==a.D?f.isOptedOut=o(a.S.getCcpaString()):f.setCcpaStorage(f.isOptedOut,i.UNKNOWN),function(){if(!Object.prototype.hasOwnProperty.call(window.frames,a.F)){var e=document.createElement("iframe");e.style.display="none",e.name=a.F,document.body.appendChild(e)}}(),window[a.W]=function(e,t,n){switch("function"!=typeof n&&console.warn(s.API_INVALID_CALLBACK),t!==a.C&&n({uspString:null,version:null},!1),e){case a.c.GET_USP_DATA:n({uspString:a.S.getCcpaString(),version:a.C},!0);break;case a.W:n(null,!0);break;default:console.warn(s.API_INVALID_COMMAND,e),n(null,!1)}},window.addEventListener("message",u,!1),f}return(0,a.d)(t,e),t.prototype.getIsOptedOut=function(){return this.isOptedOut},t.prototype.setCcpaStorage=function(e,t){void 0===t&&(t=i.ACCEPT),this.setIsOptedOut(e),e?a.S.setCcpaTimeStamp():a.S.clearCcpaData();var n=function(e,t,n){var s=""+a.C+t+(e?i.ACCEPT:i.DENY)+(n?i.ACCEPT:i.UNKNOWN);return a.b.test(s)||(s=a.D),s}(e,t,this.iabAgreementExists);a.e.isCrossDomainAvailable()&&a.e.setCrossDomainCcpaData({ccpaString:n,timestamp:a.S.getCcpaTimeStamp()}).catch((function(){console.warn(a.f.CROSS_DOMAIN_SET_DATA_FAILURE)})),a.S.setCcpaString(n)},t.prototype.setIsOptedOut=function(e){var t="boolean"==typeof e?e:o(e);this.isOptedOut=t},t}(c.default);t.default=l},1550:function(e,t,n){n.r(t),n(5827),n(9826);var s=n(7657),i=function(e){function t(n,i,r){var a=e.call(this,r)||this;return a.categorySlug=n.categorySlug,a.consent=(0,s.g)(n,i),a.id=n.templateId,a.isEssential=i.isEssential,a.isHidden=!!i.isHidden||n.isHidden,a.processorId=""+(0,s.s)((0,s.v)()),a.subServices=[],a.subServicesLength=n.subConsents?n.subConsents.length:0,a.version=n.version,a.fetchSubServices=function(){return(0,s.h)(a,void 0,void 0,(function(){var e,r,a,c,o,u,l;return(0,s.i)(this,(function(d){switch(d.label){case 0:if(e=s.A.getInstance(),r=n.subConsents,a=(null===(l=this.language)||void 0===l?void 0:l.selected)||"de",!(c=(0,s.m)(a,r)).length)return[2,[]];u=null,d.label=1;case 1:return d.trys.push([1,4,,5]),[4,e.fetchAggregatedServices(a,c,!1)];case 2:return o=d.sent(),[4,e.fetchTranslations()];case 3:return u=d.sent(),[3,5];case 4:throw d.sent(),new Error(s.E.FETCH_DATA_PROCESSING_SERVICES);case 5:return o&&r?(this.subServices=r.reduce((function(e,n){var r=null==o?void 0:o.find((function(e){return n.templateId===e.templateId&&n.version===e.version}));if(!r)return(0,s._)([],(0,s.a)(e));var a=new t(n,i,r);return(0,s._)((0,s._)([],(0,s.a)(e)),[a])}),[]),[2,this.subServices.reduce((function(e,t){var n=r.find((function(e){return t.id===e.templateId&&t.version===e.version}));if(!n)return(0,s._)([],(0,s.a)(e));var i=new s.k(n,u,o),a=(0,s.l)((0,s.l)((0,s.l)({},i),t),{subServices:[]});return(0,s._)((0,s._)([],(0,s.a)(e)),[a])}),[])]):[2,[]]}}))}))},a}return(0,s.d)(t,e),t}(s.j),r=function(e,t,n){this.isEssential=e.isEssential,this.isHidden=e.isHidden,this.services=a(e,t,n),this.slug=e.categorySlug},a=function(e,t,n){return t.reduce((function(t,r){if(r.categorySlug===e.categorySlug){var a=null==n?void 0:n.find((function(e){return r.templateId===e.templateId&&r.version===e.version})),c=new i(r,e,a);return(0,s._)((0,s._)([],(0,s.a)(t)),[c])}return(0,s._)([],(0,s.a)(t))}),[])};t.default=function(e,t,n){this.categories=e.categories.reduce((function(t,i){var a=new r(i,e.consentTemplates,n);return(0,s.n)(a.services)?(0,s._)((0,s._)([],(0,s.a)(t)),[a]):(0,s._)([],(0,s.a)(t))}),[]),this.controllerId=t}}}]);
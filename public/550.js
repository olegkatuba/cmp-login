"use strict";(self.webpackChunkcmp_browser_login=self.webpackChunkcmp_browser_login||[]).push([[550],{1550:function(e,n,t){t.r(n),t(5827),t(9826);var r=t(7657),s=function(e){function n(t,s,i){var u=e.call(this,i)||this;return u.categorySlug=t.categorySlug,u.consent=(0,r.g)(t,s),u.id=t.templateId,u.isEssential=s.isEssential,u.isHidden=!!s.isHidden||t.isHidden,u.processorId=""+(0,r.s)((0,r.v)()),u.subServices=[],u.subServicesLength=t.subConsents?t.subConsents.length:0,u.version=t.version,u.fetchSubServices=function(){return(0,r.h)(u,void 0,void 0,(function(){var e,i,u,c,a,o,l;return(0,r.i)(this,(function(d){switch(d.label){case 0:if(e=r.A.getInstance(),i=t.subConsents,u=(null===(l=this.language)||void 0===l?void 0:l.selected)||"de",!(c=(0,r.m)(u,i)).length)return[2,[]];o=null,d.label=1;case 1:return d.trys.push([1,4,,5]),[4,e.fetchAggregatedServices(u,c,!1)];case 2:return a=d.sent(),[4,e.fetchTranslations()];case 3:return o=d.sent(),[3,5];case 4:throw d.sent(),new Error(r.E.FETCH_DATA_PROCESSING_SERVICES);case 5:return a&&i?(this.subServices=i.reduce((function(e,t){var i=null==a?void 0:a.find((function(e){return t.templateId===e.templateId&&t.version===e.version}));if(!i)return(0,r._)([],(0,r.a)(e));var u=new n(t,s,i);return(0,r._)((0,r._)([],(0,r.a)(e)),[u])}),[]),[2,this.subServices.reduce((function(e,n){var t=i.find((function(e){return n.id===e.templateId&&n.version===e.version}));if(!t)return(0,r._)([],(0,r.a)(e));var s=new r.k(t,o,a),u=(0,r.l)((0,r.l)((0,r.l)({},s),n),{subServices:[]});return(0,r._)((0,r._)([],(0,r.a)(e)),[u])}),[])]):[2,[]]}}))}))},u}return(0,r.d)(n,e),n}(r.j),i=function(e,n,t){this.isEssential=e.isEssential,this.isHidden=e.isHidden,this.services=u(e,n,t),this.slug=e.categorySlug},u=function(e,n,t){return n.reduce((function(n,i){if(i.categorySlug===e.categorySlug){var u=null==t?void 0:t.find((function(e){return i.templateId===e.templateId&&i.version===e.version})),c=new s(i,e,u);return(0,r._)((0,r._)([],(0,r.a)(n)),[c])}return(0,r._)([],(0,r.a)(n))}),[])};n.default=function(e,n,t){this.categories=e.categories.reduce((function(n,s){var u=new i(s,e.consentTemplates,t);return(0,r.n)(u.services)?(0,r._)((0,r._)([],(0,r.a)(n)),[u]):(0,r._)([],(0,r.a)(n))}),[]),this.controllerId=n}}}]);
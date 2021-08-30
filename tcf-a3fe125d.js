import{r as e,e as t,c as s,S as i,T as a,a as n,M as l,b as o,d as r,f as c,g as d,h as u,C as p,i as b}from"./helpers-e5bf3480.js";import{aq as m,ar as g,as as v,at as h,au as f}from"./index.module.js";import"./helpers-65e79f36.js";const C=(e,t,a,n,l,o)=>{const r=s("ul",a?m.subElementBlockList:m.subElementItemList,[f.subElementBlockList],t.map((e=>s("li",a?m.subElementBlockListElement:p.subElementItemListElement,[f.subElementBlockListElement],e,a))),a),c=s("button",m.viewMoreButton,[f.viewMoreButton],l,a);c.addEventListener("click",(()=>n())),e.appendChild(s("div",p.subElement,[i.subElement],[...o?[b(o,!0,a)]:[],r,c],a))},y=(e,t,s,i)=>{const a=document.createDocumentFragment();t.forEach((e=>{const t=document.createDocumentFragment();((e,t,s,i)=>{t.description&&o(e,!0,s,[t.description]),t.services.length>0&&C(e,t.services.map((e=>e.name)),s,(()=>{var e;return null===(e=window[g])||void 0===e?void 0:e.showSecondLayer()}),i.labels.nonTCFLabels.general.showMore)})(t,e,s,i),n(a,e.label,t,s)})),e.appendChild(a)},P=(e,t,s,i,a)=>{const c=document.createDocumentFragment();t.forEach((e=>{const t=document.createDocumentFragment();((e,t,s,i,a)=>{t.description&&o(e,!0,i,[t.description]);const n=v(t.descriptionLegal);"string"==typeof n?o(e,!0,i,[n]):n.forEach((t=>{r(e,!0,i,t.bulletPoints,t.title)})),s.length>0&&C(e,s,i,(()=>{var e;return null===(e=window[g])||void 0===e?void 0:e.showSecondLayer()}),a.labels.nonTCFLabels.general.showMore,a.secondLayer.tabs.vendors.label)})(t,e,s.filter((t=>t.purposes.filter((t=>t.id===e.id)).length>0)).slice(0,l).map((e=>e.name)),i,a),n(c,e.name,t,i)})),e.appendChild(c)},L=(e,t,s,i)=>{const a=document.createDocumentFragment();t.forEach((e=>{const t=document.createDocumentFragment();((e,t,s,i)=>{var a,n,l,p,b;if(t.description&&""!==t.description&&o(e,!0,s,[t.description],i.labels.nonTCFLabels.service.descriptionTitle),t.processingCompany){const{name:a,address:n}=t.processingCompany,l=[a,n].filter((e=>""!==e));l.length>0&&o(e,!0,s,l,i.labels.nonTCFLabels.service.processingCompanyTitle)}if(t.dataProtectionOfficer&&""!==t.dataProtectionOfficer&&c(e,!0,s,h(t.dataProtectionOfficer)?`mailto:${t.dataProtectionOfficer}`:t.dataProtectionOfficer,t.dataProtectionOfficer,i.labels.nonTCFLabels.service.dataProtectionOfficer.title,i.labels.nonTCFLabels.service.dataProtectionOfficer.description),t.dataPurposes&&t.dataPurposes.length>0&&r(e,!0,s,t.dataPurposes,i.labels.nonTCFLabels.service.dataPurposes.title,i.labels.nonTCFLabels.service.dataPurposes.description),t.technologiesUsed&&t.technologiesUsed.length>0&&r(e,!0,s,t.technologiesUsed,i.labels.nonTCFLabels.service.technologiesUsed.title,i.labels.nonTCFLabels.service.technologiesUsed.description),t.dataCollected&&t.dataCollected.length>0&&r(e,!0,s,t.dataCollected,i.labels.nonTCFLabels.service.dataCollected.title,i.labels.nonTCFLabels.service.dataCollected.description),t.legalBasis&&t.legalBasis.length>0){const a=t.legalBasis.filter((e=>""!==e));a.length>0&&r(e,!0,s,a,i.labels.nonTCFLabels.service.legalBasis.title,i.labels.nonTCFLabels.service.legalBasis.description)}if(null!==(a=t.dataDistribution)&&void 0!==a&&a.processingLocation&&""!==t.dataDistribution.processingLocation&&o(e,!0,s,[i.labels.nonTCFLabels.service.dataDistribution.processingLocationDescription,t.dataDistribution.processingLocation],i.labels.nonTCFLabels.service.dataDistribution.processingLocationTitle),t.retentionPeriodDescription&&""!==t.retentionPeriodDescription&&o(e,!0,s,[i.labels.nonTCFLabels.service.retentionPeriod.description,t.retentionPeriodDescription],i.labels.nonTCFLabels.service.retentionPeriod.title),null!==(n=t.dataDistribution)&&void 0!==n&&n.thirdPartyCountries&&""!==t.dataDistribution.thirdPartyCountries&&r(e,!0,s,[t.dataDistribution.thirdPartyCountries],i.labels.nonTCFLabels.service.dataDistribution.thirdPartyCountriesTitle,i.labels.nonTCFLabels.service.dataDistribution.thirdPartyCountriesDescription),t.dataRecipients&&t.dataRecipients.length>0){const a=t.dataRecipients.filter((e=>""!==e));a.length>0&&r(e,!0,s,a,i.labels.nonTCFLabels.service.dataRecipients.title,i.labels.nonTCFLabels.service.dataRecipients.description)}null!==(l=t.urls)&&void 0!==l&&l.privacyPolicy&&c(e,!0,s,t.urls.privacyPolicy,t.urls.privacyPolicy,i.labels.nonTCFLabels.service.urls.privacyPolicyTitle),null!==(p=t.urls)&&void 0!==p&&p.cookiePolicy&&c(e,!0,s,t.urls.cookiePolicy,t.urls.cookiePolicy,i.labels.nonTCFLabels.service.urls.cookiePolicyTitle),null!==(b=t.urls)&&void 0!==b&&b.optOut&&c(e,!0,s,t.urls.optOut,t.urls.optOut,i.labels.nonTCFLabels.service.urls.optOutTitle),d(e,t,i.labels.cookieInformation,!0,s),u(e,t,i.labels.cookieInformation,!0,s)})(t,e,s,i),n(a,e.name,t,s)})),e.appendChild(a)},F=(e,t,s,i)=>{const a=document.createDocumentFragment();t.forEach((e=>{const t=document.createDocumentFragment();((e,t,s,i)=>{t.purposes&&t.purposes.length>0&&r(e,!0,s,t.purposes.map((e=>e.name)),i.labels.vendor.purposes),t.legitimateInterestPurposes&&t.legitimateInterestPurposes.length>0&&r(e,!0,s,t.legitimateInterestPurposes.map((e=>e.name)),i.labels.vendor.legitimateInterest),t.specialPurposes&&t.specialPurposes.length>0&&r(e,!0,s,t.specialPurposes.map((e=>e.name)),i.labels.vendor.specialPurposes),t.features&&t.features.length>0&&r(e,!0,s,t.features.map((e=>e.name)),i.labels.vendor.features),t.specialFeatures&&t.specialFeatures.length>0&&r(e,!0,s,t.specialFeatures.map((e=>e.name)),i.labels.vendor.specialFeatures),t.policyUrl&&c(e,!0,s,t.policyUrl,t.name,i.labels.vendor.privacyPolicy),d(e,t,i.labels.cookieInformation,!0,s),u(e,t,i.labels.cookieInformation,!0,s)})(t,e,s,i),n(a,e.name,t,s)})),e.appendChild(a)},T=(e,t,a,n,l)=>{const o=document.createDocumentFragment(),r=s("h3",m.listHeadline,[i.headlinesBorderBottom],t.iabVendorsTitle,t.useUcStyling),c=s("div",m.listDiv,[i.list],r,t.useUcStyling);c.setAttribute("data-testid","uc-embed-tcf-iab-vendors"),F(c,a,t.useUcStyling,l);const d=s("h3",m.listHeadline,[i.headlinesBorderBottom],t.nonIabVendorsTitle,t.useUcStyling),u=s("div",m.listDiv,[i.list],d,t.useUcStyling);u.setAttribute("data-testid","uc-embed-tcf-noniab-vendors"),L(u,n,t.useUcStyling,l),o.appendChild(c),o.appendChild(u),e.appendChild(o)},D=(e,t,n,l,o,r)=>{const c=s("h2",m.headline,[i.headlines],t.embedTitle,t.useUcStyling),d=s("div",m.outerDiv,[i.outerBox],c,t.useUcStyling);switch(d.setAttribute("data-testid","uc-embed-tcf"),t.embedType){case a.PURPOSE:((e,t,a,n,l)=>{const o=document.createDocumentFragment(),r=s("h3",m.listHeadline,[i.headlinesBorderBottom],t.iabPurposeTitle,t.useUcStyling),c=s("div",m.listDiv,[i.list],r,t.useUcStyling);c.setAttribute("data-testid","uc-embed-tcf-iab-purposes"),P(c,[...a.purposes,...a.specialPurposes],a.vendors,t.useUcStyling,l);const d=s("h3",m.listHeadline,[i.headlinesBorderBottom],l.labels.general.features,t.useUcStyling),u=s("div",m.listDiv,[i.list],d,t.useUcStyling);u.setAttribute("data-testid","uc-embed-tcf-iab-features"),P(u,[...a.features,...a.specialFeatures],a.vendors,t.useUcStyling,l);const p=s("h3",m.listHeadline,[i.headlinesBorderBottom],t.nonIabPurposeTitle,t.useUcStyling),b=s("div",m.listDiv,[i.list],p,t.useUcStyling);p.setAttribute("data-testid","uc-embed-tcf-noniab-purpose"),y(b,n,t.useUcStyling,l),o.appendChild(c),o.appendChild(u),o.appendChild(b),e.appendChild(o)})(d,t,n,o,r);break;case a.VENDOR:default:T(d,t,n.vendors,l,r)}e.appendChild(d)},U=(s,i,a,n,l)=>{l.forEach((l=>{e(l);const o=t(l,n);D(l,o,s,i,a,n)}))};export{U as embedTCF};
//# sourceMappingURL=tcf-a3fe125d.js.map

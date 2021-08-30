export declare enum GDPR_EMBEDDING_SECTIONS {
    DATA_COLLECTED = "dataCollected",
    DATA_PROTECTION_OFFICER = "dataProtectionOfficer",
    DATA_PURPOSES = "dataPurposes",
    DATA_RECIPIENTS = "dataRecipients",
    DESCRIPTION = "description",
    FURTHER_INFORMATION = "furtherInformation",
    LEGAL_BASIS = "legalBasis",
    OPT_IN_CHECKBOX_WITH_LABEL = "optInCheckboxWithLabel",
    PROCESSING_LOCATION = "processingLocation",
    PROCESSOR_NAMES = "processorNames",
    RETENTION_PERIOD = "retentionPeriod",
    TECHNOLOGIES_USED = "technologiesUsed",
    THIRD_COUNTRY_TRANSFER = "thirdCountryTransfer"
}
export declare enum GDPR_EMBEDDING_TYPE {
    ALL = "all",
    CATEGORY = "category"
}
export declare enum TCF_EMBEDDING_TYPE {
    VENDOR = "vendor",
    PURPOSE = "purpose"
}
export declare type Content = Element | Node | string | Element[] | Node[];
export declare type GDPREmbedOptions = {
    embedService: string;
    embedTitle: string;
    embedType: GDPR_EMBEDDING_TYPE;
    sections: GDPR_EMBEDDING_SECTIONS[];
    showToggle: boolean;
    useUcStyling: boolean;
};
export declare type TCFEmbedOptions = {
    embedTitle: string;
    embedType: TCF_EMBEDDING_TYPE;
    iabPurposeTitle: string;
    iabVendorsTitle: string;
    nonIabPurposeTitle: string;
    nonIabVendorsTitle: string;
    useUcStyling: boolean;
};

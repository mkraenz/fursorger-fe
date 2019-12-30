import { isProductionBrowser } from "../isProductionBrowser";

export const CONFIG = {
    levelsMetadataUri: isProductionBrowser
        ? "https://r7qyjnm5u0.execute-api.eu-central-1.amazonaws.com/prod/prod/levels"
        : "http://localhost:3140/prod/levels",
    emailJs: {
        serviceId: "default_service",
        templateId: "template_NpJqyVwR",
        userId: "user_8Ocz3CMyCfVJCUSNA3S7k",
    },
};

export interface IEmailJSTemplate {
    name: string;
    email: string;
    message: string;
}

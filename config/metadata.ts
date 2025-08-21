import { Metadata } from "next";
import { Identity } from "./identity";

export const metadata: Metadata = {
    metadataBase: new URL(Identity.url),
    title: `${Identity.name} | Honest Reviews from Gamers Like You`,
    description: "We test, review, and recommend gaming headsets, keyboards, mice, and more — all without breaking the bank. Trusted opinions, no fluff.",
    openGraph: {
        siteName: Identity.name,
        title: {
            default: `${Identity.name} | Honest Reviews from Gamers Like You`,
            template: `%s | ${Identity.name}`,
        },
        description: "We test, review, and recommend gaming headsets, keyboards, mice, and more — all without breaking the bank. Trusted opinions, no fluff.",
        url: Identity.url,
        images: ["/branding-kit/logo.png"],
    },
    twitter: {
        card: "summary_large_image",
        title: `${Identity.name} | Honest Reviews from Gamers Like You`,
        description: "We test, review, and recommend gaming headsets, keyboards, mice, and more — all without breaking the bank. Trusted opinions, no fluff.",
        images: ["/branding-kit/logo.png"],
    },
    alternates: {
        canonical: Identity.url,
    },
    robots: {
        index: true,
    }
};
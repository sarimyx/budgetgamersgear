import { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL('https://budgetgamersgear.com'),
    title: "Budget Gamers Gear | Honest Reviews from Gamers Like You",
    description: "We test, review, and recommend gaming headsets, keyboards, mice, and more — all without breaking the bank. Trusted opinions, no fluff.",
    openGraph: {
        siteName: "Budget Gamers Gear",
        title: {
            default: "Budget Gamers Gear | Honest Reviews from Gamers Like You",
            template: "%s | Budget Gamers Gear",
        },
        description: "We test, review, and recommend gaming headsets, keyboards, mice, and more — all without breaking the bank. Trusted opinions, no fluff.",
        url: "https://budgetgamersgear.com",
        images: ["/branding-kit/logo.png"],
    },
};
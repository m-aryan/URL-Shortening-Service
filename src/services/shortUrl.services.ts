import { ShortUrl } from "../models/shortUrl.model.js";

const store = new Map<string, ShortUrl>();

function generateShortCode(): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    let code = "";

    for (let i = 0; i < 6; i++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
}



export function createShortUrl(url: string): ShortUrl {
    let shortcode = generateShortCode();

    while (store.has(shortcode)) {
        shortcode = generateShortCode();
    }

    const now = new Date().toISOString();

    const shortUrl: ShortUrl = {
        id: shortcode,
        url,
        shortcode,
        createdAt: now,
        updatedAt: now,
        acceessCount: 0
    };

    store.set(shortcode, shortUrl);

    return shortUrl;
} 
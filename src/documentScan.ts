import { doAsync, wrapAsync } from './runtime';

const { ImageScanner } = Windows.Devices.Scanners;

export const documentScan: typeof chrome.documentScan = {
    scan: wrapAsync(async (options: chrome.documentScan.DocumentScanOptions) => {
        
    })
}
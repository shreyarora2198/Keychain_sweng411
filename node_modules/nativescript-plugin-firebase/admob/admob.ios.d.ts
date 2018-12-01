import { BannerOptions, InterstitialOptions } from "./admob";
import { AD_SIZE } from "./admob-common";
export { AD_SIZE };
export declare function showBanner(arg: BannerOptions): Promise<any>;
export declare function preloadInterstitial(arg: InterstitialOptions): Promise<any>;
export declare function showInterstitial(arg?: InterstitialOptions): Promise<any>;
export declare function hideBanner(): Promise<any>;

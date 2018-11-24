import { MLKitCameraView as MLKitCameraViewBase } from "./mlkit-cameraview-common";
export declare abstract class MLKitCameraView extends MLKitCameraViewBase {
    private surfaceView;
    private bytesToByteBuffer;
    private pendingFrameData;
    protected rotation: any;
    protected lastVisionImage: any;
    private detector;
    private camera;
    disposeNativeView(): void;
    createNativeView(): Object;
    initNativeView(): void;
    private hasCamera();
    private initView(nativeView);
    private runCamera();
    protected updateTorch(): void;
    protected pauseScanning(): void;
    protected resumeScanning(): void;
    protected abstract createDetector(): any;
    protected abstract createSuccessListener(): any;
    private createFailureListener();
    private generateValidPreviewSizeList(camera);
    private selectSizePair(camera, desiredWidth, desiredHeight);
    private createPreviewBuffer(previewSize);
    private setRotation(camera, parameters, cameraId);
}

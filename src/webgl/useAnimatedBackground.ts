import { useEffect, useRef } from 'react';
import type { AnimatedBackgroundBlobMode } from './animatedBackgroundConfig';
import { createAnimatedBackground } from './createAnimatedBackground';

export {
    ANIMATED_BACKGROUND_MAX_DPR,
    ANIMATED_BACKGROUND_TARGET_FPS,
} from './animatedBackgroundConfig';
export type { AnimatedBackgroundBlobMode } from './animatedBackgroundConfig';

interface UseAnimatedBackgroundOptions {
    blobMode: AnimatedBackgroundBlobMode;
}

export function useAnimatedBackground({ blobMode }: UseAnimatedBackgroundOptions) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const isDark = true;

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) {
            return;
        }

        return createAnimatedBackground(canvas, isDark, { blobMode }).destroy;
    }, [isDark, blobMode]);

    return { canvasRef };
}

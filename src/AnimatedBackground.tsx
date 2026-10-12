import type { AnimatedBackgroundBlobMode } from './webgl/animatedBackgroundConfig';
import { useAnimatedBackground } from './webgl/useAnimatedBackground';
import { DEFAULT_ANIMATED_BACKGROUND_BLOB_MODE } from './webgl/animatedBackgroundConfig';
import './AnimatedBackground.scss';

interface Props {
    hidden?: boolean;
}

interface CanvasProps extends Props {
    blobMode: AnimatedBackgroundBlobMode;
}

/** WebGL background (blobs + particles) — only mounted while animations are enabled. */
const AnimatedBackgroundCanvas = ({ hidden, blobMode }: CanvasProps) => {
    const { canvasRef } = useAnimatedBackground({ blobMode });

    return (
        /* eslint-disable-next-line jsx-a11y/no-aria-hidden-on-focusable */
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            className={'animated-bg-canvas animated-bg-shader' + (hidden ? 'animated-bg-hidden-shader' : '')}
        />
    );
};

export const AnimatedBackground = ({ hidden = false }: Props) => {
    const animation = document.documentElement.dataset.animation;
    const animatedBackgroundBlobMode = (animation ? animation as AnimatedBackgroundBlobMode : DEFAULT_ANIMATED_BACKGROUND_BLOB_MODE);

    return (
        <AnimatedBackgroundCanvas
            key={animatedBackgroundBlobMode}
            hidden={hidden}
            blobMode={animatedBackgroundBlobMode}
        />
    );
};

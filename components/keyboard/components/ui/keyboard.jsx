import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
const IconBrightnessDown = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="3" /><path d="M12 5V3M12 21v-2M5 12H3m18 0h-2" /></svg>
);
IconBrightnessDown.propTypes = { className: PropTypes.string };

const IconBrightnessUp = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="4" /><path d="M12 3v2m0 14v2M5.6 5.6l1.4 1.4m10 10l1.4 1.4M3 12h2m14 0h2M5.6 18.4l1.4-1.4m10-10l1.4-1.4" /></svg>
);
IconBrightnessUp.propTypes = { className: PropTypes.string };

const IconTable = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M4 10h16M10 4v16" /></svg>
);
IconTable.propTypes = { className: PropTypes.string };

const IconSearch = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
);
IconSearch.propTypes = { className: PropTypes.string };

const IconMicrophone = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v3" /></svg>
);
IconMicrophone.propTypes = { className: PropTypes.string };

const IconMoon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>
);
IconMoon.propTypes = { className: PropTypes.string };

const IconPlayerTrackPrev = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}><polygon points="11 19 2 12 11 5 11 19" /><polygon points="22 19 13 12 22 5 22 19" /></svg>
);
IconPlayerTrackPrev.propTypes = { className: PropTypes.string };

const IconPlayerSkipForward = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}><polygon points="5 4 15 12 5 20 5 4" /><line x1="19" y1="5" x2="19" y2="19" stroke="currentColor" strokeWidth={3} strokeLinecap="round" /></svg>
);
IconPlayerSkipForward.propTypes = { className: PropTypes.string };

const IconPlayerTrackNext = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}><polygon points="13 19 22 12 13 5 13 19" /><polygon points="2 19 11 12 2 5 2 19" /></svg>
);
IconPlayerTrackNext.propTypes = { className: PropTypes.string };

const IconVolume3 = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><line x1="22" y1="9" x2="16" y2="15" /><line x1="16" y1="9" x2="22" y2="15" /></svg>
);
IconVolume3.propTypes = { className: PropTypes.string };

const IconVolume2 = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><path d="M15.54 8.46a5 5 0 0 1 0 7.07" /></svg>
);
IconVolume2.propTypes = { className: PropTypes.string };

const IconVolume = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" /><path d="M15.54 8.46a5 5 0 0 1 0 7.07" /><path d="M19.07 4.93a10 10 0 0 1 0 14.14" /></svg>
);
IconVolume.propTypes = { className: PropTypes.string };

const IconWorld = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20M12 2a14.5 14.5 0 0 1 0 20M2 12h20" /></svg>
);
IconWorld.propTypes = { className: PropTypes.string };

const IconChevronUp = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m18 15-6-6-6 6" /></svg>
);
IconChevronUp.propTypes = { className: PropTypes.string };

const IconCommand = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z" /></svg>
);
IconCommand.propTypes = { className: PropTypes.string };

const IconCaretLeftFilled = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}><polygon points="14 7 8 12 14 17 14 7" /></svg>
);
IconCaretLeftFilled.propTypes = { className: PropTypes.string };

const IconCaretRightFilled = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}><polygon points="10 7 16 12 10 17 10 7" /></svg>
);
IconCaretRightFilled.propTypes = { className: PropTypes.string };

const IconCaretUpFilled = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}><polygon points="7 14 12 8 17 14 7 14" /></svg>
);
IconCaretUpFilled.propTypes = { className: PropTypes.string };

const IconCaretDownFilled = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}><polygon points="7 10 12 16 17 10 7 10" /></svg>
);
IconCaretDownFilled.propTypes = { className: PropTypes.string };

// Sound sprite definitions from config.json [startMs, durationMs]
const SOUND_DEFINES_DOWN = {
  Escape: [2894, 113],
  F1: [3610, 98],
  F2: [4210, 90],
  F3: [4758, 90],
  F4: [5250, 100],
  F5: [5831, 105],
  F6: [6396, 105],
  F7: [6900, 105],
  F8: [7443, 111],
  F9: [7955, 91],
  F10: [8504, 105],
  F11: [9046, 94],
  F12: [9582, 96],
  Backquote: [12476, 100],
  Digit1: [12946, 96],
  Digit2: [13470, 95],
  Digit3: [13963, 100],
  Digit4: [14481, 102],
  Digit5: [14994, 94],
  Digit6: [15505, 109],
  Digit7: [15990, 97],
  Digit8: [16529, 92],
  Digit9: [17012, 103],
  Digit0: [17550, 87],
  Minus: [18052, 93],
  Equal: [18553, 89],
  Backspace: [19065, 110],
  Tab: [21734, 119],
  KeyQ: [22245, 95],
  KeyW: [22790, 89],
  KeyE: [23317, 83],
  KeyR: [23817, 92],
  KeyT: [24297, 92],
  KeyY: [24811, 93],
  KeyU: [25313, 95],
  KeyI: [25795, 91],
  KeyO: [26309, 84],
  KeyP: [26804, 83],
  BracketLeft: [27330, 85],
  BracketRight: [27883, 99],
  Backslash: [28393, 100],
  CapsLock: [31011, 126],
  KeyA: [31542, 85],
  KeyS: [32031, 88],
  KeyD: [32492, 85],
  KeyF: [32973, 87],
  KeyG: [33453, 94],
  KeyH: [33986, 93],
  KeyJ: [34425, 88],
  KeyK: [34932, 90],
  KeyL: [35410, 95],
  Semicolon: [35914, 95],
  Quote: [36428, 87],
  Enter: [36902, 117],
  ShiftLeft: [38136, 133],
  KeyZ: [38694, 80],
  KeyX: [39148, 76],
  KeyC: [39632, 95],
  KeyV: [40136, 94],
  KeyB: [40621, 107],
  KeyN: [41103, 90],
  KeyM: [41610, 93],
  Comma: [42110, 92],
  Period: [42594, 90],
  Slash: [43105, 95],
  ShiftRight: [43565, 137],
  Fn: [44251, 110],
  ControlLeft: [45327, 83],
  AltLeft: [45750, 82],
  MetaLeft: [46199, 100],
  Space: [51541, 144],
  MetaRight: [47929, 75],
  AltRight: [49329, 82],
  ArrowUp: [44251, 110],
  ArrowLeft: [49837, 88],
  ArrowDown: [50333, 90],
  ArrowRight: [50783, 111],
};

const SOUND_DEFINES_UP = {
  Escape: [2894 + 120, 100],
  F1: [3610 + 100, 90],
  F2: [4210 + 95, 80],
  F3: [4758 + 95, 80],
  F4: [5250 + 105, 90],
  F5: [5831 + 110, 95],
  F6: [6396 + 110, 95],
  F7: [6900 + 110, 95],
  F8: [7443 + 115, 100],
  F9: [7955 + 95, 80],
  F10: [8504 + 110, 95],
  F11: [9046 + 100, 85],
  F12: [9582 + 100, 85],
  Backquote: [12476 + 105, 90],
  Digit1: [12946 + 100, 85],
  Digit2: [13470 + 100, 85],
  Digit3: [13963 + 105, 90],
  Digit4: [14481 + 110, 90],
  Digit5: [14994 + 100, 85],
  Digit6: [15505 + 115, 100],
  Digit7: [15990 + 100, 90],
  Digit8: [16529 + 95, 85],
  Digit9: [17012 + 110, 90],
  Digit0: [17550 + 90, 80],
  Minus: [18052 + 100, 85],
  Equal: [18553 + 90, 85],
  Backspace: [19065 + 115, 100],
  Tab: [21734 + 125, 110],
  KeyQ: [22245 + 100, 85],
  KeyW: [22790 + 90, 85],
  KeyE: [23317 + 85, 80],
  KeyR: [23817 + 95, 85],
  KeyT: [24297 + 95, 85],
  KeyY: [24811 + 100, 85],
  KeyU: [25313 + 100, 85],
  KeyI: [25795 + 95, 85],
  KeyO: [26309 + 85, 80],
  KeyP: [26804 + 85, 80],
  BracketLeft: [27330 + 85, 80],
  BracketRight: [27883 + 105, 90],
  Backslash: [28393 + 105, 90],
  CapsLock: [31011 + 135, 110],
  KeyA: [31542 + 90, 80],
  KeyS: [32031 + 90, 80],
  KeyD: [32492 + 85, 80],
  KeyF: [32973 + 90, 80],
  KeyG: [33453 + 100, 85],
  KeyH: [33986 + 95, 85],
  KeyJ: [34425 + 90, 85],
  KeyK: [34932 + 95, 85],
  KeyL: [35410 + 100, 85],
  Semicolon: [35914 + 100, 85],
  Quote: [36428 + 90, 80],
  Enter: [36902 + 125, 105],
  ShiftLeft: [38136 + 140, 120],
  KeyZ: [38694 + 85, 75],
  KeyX: [39148 + 80, 70],
  KeyC: [39632 + 100, 85],
  KeyV: [40136 + 100, 85],
  KeyB: [40621 + 115, 95],
  KeyN: [41103 + 95, 85],
  KeyM: [41610 + 100, 85],
  Comma: [42110 + 95, 85],
  Period: [42594 + 95, 85],
  Slash: [43105 + 100, 85],
  ShiftRight: [43565 + 145, 125],
  Fn: [44251 + 115, 100],
  ControlLeft: [45327 + 85, 80],
  AltLeft: [45750 + 85, 80],
  MetaLeft: [46199 + 105, 90],
  Space: [51541 + 150, 130],
  MetaRight: [47929 + 75, 70],
  AltRight: [49329 + 85, 80],
  ArrowUp: [44251 + 115, 100],
  ArrowLeft: [49837 + 90, 85],
  ArrowDown: [50333 + 95, 80],
  ArrowRight: [50783 + 115, 100],
};

const KEY_DISPLAY_LABELS = {
  Escape: "esc",
  Backspace: "delete",
  Tab: "tab",
  Enter: "return",
  ShiftLeft: "shift",
  ShiftRight: "shift",
  ControlLeft: "control",
  ControlRight: "control",
  AltLeft: "option",
  AltRight: "option",
  MetaLeft: "command",
  MetaRight: "command",
  Space: "space",
  CapsLock: "caps",
  ArrowUp: "↑",
  ArrowDown: "↓",
  ArrowLeft: "←",
  ArrowRight: "→",
  Backquote: "`",
  Minus: "-",
  Equal: "=",
  BracketLeft: "[",
  BracketRight: "]",
  Backslash: "\\",
  Semicolon: ";",
  Quote: "'",
  Comma: ",",
  Period: ".",
  Slash: "/",
};

const getKeyDisplayLabel = (keyCode) => {
  if (KEY_DISPLAY_LABELS[keyCode]) return KEY_DISPLAY_LABELS[keyCode];
  if (keyCode.startsWith("Key")) return keyCode.slice(3);
  if (keyCode.startsWith("Digit")) return keyCode.slice(5);
  if (keyCode.startsWith("F") && keyCode.length <= 3) return keyCode;
  return keyCode;
};

const KeyboardContext = createContext(null);

const useKeyboardSound = () => {
  const context = useContext(KeyboardContext);
  if (!context) {
    throw new Error("useKeyboardSound must be used within KeyboardProvider");
  }
  return context;
};

export const KeyboardProvider = ({
  children,
  enableSound = false,
  containerRef,
}) => {
  const audioContextRef = useRef(null);
  const audioBufferRef = useRef(null);
  const [pressedKeys, setPressedKeys] = useState(new Set());
  const [lastPressedKey, setLastPressedKey] = useState(null);
  const [soundLoaded, setSoundLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!enableSound) return;

    const initAudio = async () => {
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        audioContextRef.current = new AudioCtx();
        const response = await fetch("/sounds/sound.ogg");
        if (!response.ok) {
          console.warn("Sound file not available");
          return;
        }
        const arrayBuffer = await response.arrayBuffer();
        audioBufferRef.current =
          await audioContextRef.current.decodeAudioData(arrayBuffer);
        setSoundLoaded(true);
      } catch (error) {
        console.warn("Failed to load sound:", error);
      }
    };

    initAudio();

    return () => {
      try {
        audioContextRef.current?.close();
      } catch {
        // ignore
      }
    };
  }, [enableSound]);

  const playSoundDown = useCallback(
    (keyCode) => {
      if (!enableSound || !soundLoaded) return;
      const ctx = audioContextRef.current;
      const buffer = audioBufferRef.current;
      if (!ctx || !buffer) return;

      const soundDef = SOUND_DEFINES_DOWN[keyCode];
      if (!soundDef) return;

      const [startMs, durationMs] = soundDef;
      const startTime = startMs / 1000;
      const duration = durationMs / 1000;

      const play = () => {
        try {
          const source = ctx.createBufferSource();
          source.buffer = buffer;
          source.connect(ctx.destination);
          source.start(0, startTime, duration);
        } catch {
          // ignore
        }
      };

      if (ctx.state === "suspended") {
        ctx.resume().then(play).catch(() => {});
      } else {
        play();
      }
    },
    [enableSound, soundLoaded]
  );

  const playSoundUp = useCallback(
    (keyCode) => {
      if (!enableSound || !soundLoaded) return;
      const ctx = audioContextRef.current;
      const buffer = audioBufferRef.current;
      if (!ctx || !buffer) return;

      const soundDef = SOUND_DEFINES_UP[keyCode];
      if (!soundDef) return;

      const [startMs, durationMs] = soundDef;
      const startTime = startMs / 1000;
      const duration = durationMs / 1000;

      const play = () => {
        try {
          const source = ctx.createBufferSource();
          source.buffer = buffer;
          source.connect(ctx.destination);
          source.start(0, startTime, duration);
        } catch {
          // ignore
        }
      };

      if (ctx.state === "suspended") {
        ctx.resume().then(play).catch(() => {});
      } else {
        play();
      }
    },
    [enableSound, soundLoaded]
  );

  const setPressed = useCallback((keyCode) => {
    setPressedKeys((prev) => new Set(prev).add(keyCode));
    setLastPressedKey(keyCode);
  }, []);

  const setReleased = useCallback((keyCode) => {
    setPressedKeys((prev) => {
      const next = new Set(prev);
      next.delete(keyCode);
      return next;
    });
  }, []);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [containerRef]);

  useEffect(() => {
    if (!isVisible) return;

    const handleKeyDown = (e) => {
      if (e.repeat) return;
      const keyCode = e.code;
      playSoundDown(keyCode);
      setPressed(keyCode);
    };

    const handleKeyUp = (e) => {
      const keyCode = e.code;
      playSoundUp(keyCode);
      setReleased(keyCode);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [isVisible, playSoundDown, playSoundUp, setPressed, setReleased]);

  return (
    <KeyboardContext.Provider
      value={{
        playSoundDown,
        playSoundUp,
        pressedKeys,
        setPressed,
        setReleased,
        lastPressedKey,
      }}
    >
      {children}
    </KeyboardContext.Provider>
  );
};

KeyboardProvider.propTypes = {
  children: PropTypes.node,
  enableSound: PropTypes.bool,
  containerRef: PropTypes.shape({ current: PropTypes.any }),
};

export const KeystrokePreview = () => {
  const { lastPressedKey, pressedKeys } = useKeyboardSound();
  const [displayKey, setDisplayKey] = useState(null);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (lastPressedKey) {
      if (
        lastPressedKey === "Space" ||
        lastPressedKey === "ShiftLeft" ||
        lastPressedKey === "ShiftRight"
      ) {
        setDisplayKey(null);
        return;
      }

      setDisplayKey(getKeyDisplayLabel(lastPressedKey));
      setAnimationKey((prev) => prev + 1);
    }
  }, [lastPressedKey]);

  const isPressed = pressedKeys.size > 0;

  return (
    <div className="relative flex h-10 w-full items-center justify-center pointer-events-none">
      <AnimatePresence mode="popLayout">
        {displayKey && (
          <motion.div
            key={animationKey}
            layout
            initial={{ opacity: 0, scale: 0.5, y: 5 }}
            animate={{
              opacity: 1,
              scale: isPressed ? 0.95 : 1,
              y: 0,
            }}
            exit={{ opacity: 0, scale: 0.8, y: -5 }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 30,
              mass: 0.5,
            }}
            className="absolute flex items-center justify-center rounded-lg px-4 py-1.5 font-mono text-xl font-black text-cyan-400 drop-shadow-[0_0_12px_rgba(6,182,212,0.6)]"
          >
            <motion.span
              initial={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
              animate={{ opacity: 0.9, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.05 }}
              className="text-xl"
            >
              {displayKey}
            </motion.span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Keyboard = ({
  className,
  enableSound = true,
  showPreview = false,
}) => {
  const containerRef = useRef(null);

  return (
    <KeyboardProvider enableSound={enableSound} containerRef={containerRef}>
      <div ref={containerRef} className={cn("mx-auto w-fit", className)}>
        {showPreview && <KeystrokePreview />}
        <Keypad />
      </div>
    </KeyboardProvider>
  );
};

Keyboard.propTypes = {
  className: PropTypes.string,
  enableSound: PropTypes.bool,
  showPreview: PropTypes.bool,
};

export const Keypad = () => {
  return (
    <div className="h-full w-fit rounded-2xl bg-[#e2e8f0] p-[5px] sm:p-[6px] shadow-[0_16px_36px_rgba(0,0,0,0.65),0_2px_4px_rgba(0,0,0,0.1)] border border-[#cbd5e1] select-none">
      {/* Function Row */}
      <Row>
        <Key
          keyCode="Escape"
          containerClassName="rounded-tl-xl"
          className="w-10 rounded-tl-lg"
          childrenClassName="items-start justify-end pb-[2px] pl-[4px]"
        >
          <span>esc</span>
        </Key>
        <Key keyCode="F1">
          <IconBrightnessDown className="h-[6px] w-[6px]" />
          <span className="mt-1">F1</span>
        </Key>
        <Key keyCode="F2">
          <IconBrightnessUp className="h-[6px] w-[6px]" />
          <span className="mt-1">F2</span>
        </Key>
        <Key keyCode="F3">
          <IconTable className="h-[6px] w-[6px]" />
          <span className="mt-1">F3</span>
        </Key>
        <Key keyCode="F4">
          <IconSearch className="h-[6px] w-[6px]" />
          <span className="mt-1">F4</span>
        </Key>
        <Key keyCode="F5">
          <IconMicrophone className="h-[6px] w-[6px]" />
          <span className="mt-1">F5</span>
        </Key>
        <Key keyCode="F6">
          <IconMoon className="h-[6px] w-[6px]" />
          <span className="mt-1">F6</span>
        </Key>
        <Key keyCode="F7">
          <IconPlayerTrackPrev className="h-[6px] w-[6px]" />
          <span className="mt-1">F7</span>
        </Key>
        <Key keyCode="F8">
          <IconPlayerSkipForward className="h-[6px] w-[6px]" />
          <span className="mt-1">F8</span>
        </Key>
        <Key keyCode="F9">
          <IconPlayerTrackNext className="h-[6px] w-[6px]" />
          <span className="mt-1">F9</span>
        </Key>
        <Key keyCode="F10">
          <IconVolume3 className="h-[6px] w-[6px]" />
          <span className="mt-1">F10</span>
        </Key>
        <Key keyCode="F11">
          <IconVolume2 className="h-[6px] w-[6px]" />
          <span className="mt-1">F11</span>
        </Key>
        <Key keyCode="F12">
          <IconVolume className="h-[6px] w-[6px]" />
          <span className="mt-1">F12</span>
        </Key>
        <Key containerClassName="rounded-tr-xl" className="rounded-tr-lg">
          <div className="h-4 w-4 rounded-full bg-gradient-to-b from-neutral-300 via-neutral-200 to-neutral-300 p-px">
            <div className="h-full w-full rounded-full bg-neutral-100" />
          </div>
        </Key>
      </Row>

      {/* Number Row */}
      <Row>
        <Key keyCode="Backquote">
          <span>~</span>
          <span>`</span>
        </Key>
        <Key keyCode="Digit1">
          <span>!</span>
          <span>1</span>
        </Key>
        <Key keyCode="Digit2">
          <span>@</span>
          <span>2</span>
        </Key>
        <Key keyCode="Digit3">
          <span>#</span>
          <span>3</span>
        </Key>
        <Key keyCode="Digit4">
          <span>$</span>
          <span>4</span>
        </Key>
        <Key keyCode="Digit5">
          <span>%</span>
          <span>5</span>
        </Key>
        <Key keyCode="Digit6">
          <span>^</span>
          <span>6</span>
        </Key>
        <Key keyCode="Digit7">
          <span>&</span>
          <span>7</span>
        </Key>
        <Key keyCode="Digit8">
          <span>*</span>
          <span>8</span>
        </Key>
        <Key keyCode="Digit9">
          <span>(</span>
          <span>9</span>
        </Key>
        <Key keyCode="Digit0">
          <span>)</span>
          <span>0</span>
        </Key>
        <Key keyCode="Minus">
          <span>—</span>
          <span>_</span>
        </Key>
        <Key keyCode="Equal">
          <span>+</span>
          <span>=</span>
        </Key>
        <Key
          keyCode="Backspace"
          className="w-10"
          childrenClassName="items-end justify-end pr-[4px] pb-[2px]"
        >
          <span>delete</span>
        </Key>
      </Row>

      {/* QWERTY Row */}
      <Row>
        <Key
          keyCode="Tab"
          className="w-10"
          childrenClassName="items-start justify-end pb-[2px] pl-[4px]"
        >
          <span>tab</span>
        </Key>
        {["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"].map((letter) => (
          <Key key={letter} keyCode={`Key${letter}`}>
            {letter}
          </Key>
        ))}
        <Key keyCode="BracketLeft">
          <span>{`{`}</span>
          <span>{`[`}</span>
        </Key>
        <Key keyCode="BracketRight">
          <span>{`}`}</span>
          <span>{`]`}</span>
        </Key>
        <Key keyCode="Backslash">
          <span>{`|`}</span>
          <span>{`\\`}</span>
        </Key>
      </Row>

      {/* Home Row */}
      <Row>
        <Key
          keyCode="CapsLock"
          className="w-[2.8rem]"
          childrenClassName="items-start justify-end pb-[2px] pl-[4px]"
        >
          <span>caps lock</span>
        </Key>
        {["A", "S", "D", "F", "G", "H", "J", "K", "L"].map((letter) => (
          <Key key={letter} keyCode={`Key${letter}`}>
            {letter}
          </Key>
        ))}
        <Key keyCode="Semicolon">
          <span>:</span>
          <span>;</span>
        </Key>
        <Key keyCode="Quote">
          <span>{`"`}</span>
          <span>{`'`}</span>
        </Key>
        <Key
          keyCode="Enter"
          className="w-[2.85rem]"
          childrenClassName="items-end justify-end pr-[4px] pb-[2px]"
        >
          <span>return</span>
        </Key>
      </Row>

      {/* Bottom Letter Row */}
      <Row>
        <Key
          keyCode="ShiftLeft"
          className="w-[3.65rem]"
          childrenClassName="items-start justify-end pb-[2px] pl-[4px]"
        >
          <span>shift</span>
        </Key>
        {["Z", "X", "C", "V", "B", "N", "M"].map((letter) => (
          <Key key={letter} keyCode={`Key${letter}`}>
            {letter}
          </Key>
        ))}
        <Key keyCode="Comma">
          <span>{`<`}</span>
          <span>,</span>
        </Key>
        <Key keyCode="Period">
          <span>{`>`}</span>
          <span>.</span>
        </Key>
        <Key keyCode="Slash">
          <span>?</span>
          <span>/</span>
        </Key>
        <Key
          keyCode="ShiftRight"
          className="w-[3.65rem]"
          childrenClassName="items-end justify-end pr-[4px] pb-[2px]"
        >
          <span>shift</span>
        </Key>
      </Row>

      {/* Modifier Row */}
      <Row>
        <ModifierKey
          keyCode="Fn"
          containerClassName="rounded-bl-xl"
          className="rounded-bl-lg"
        >
          <span>fn</span>
          <IconWorld className="h-[6px] w-[6px]" />
        </ModifierKey>
        <ModifierKey keyCode="ControlLeft">
          <IconChevronUp className="h-[6px] w-[6px]" />
          <span>control</span>
        </ModifierKey>
        <ModifierKey keyCode="AltLeft">
          <OptionKey className="h-[6px] w-[6px]" />
          <span>option</span>
        </ModifierKey>
        <ModifierKey keyCode="MetaLeft" className="w-8">
          <IconCommand className="h-[6px] w-[6px]" />
          <span>command</span>
        </ModifierKey>
        <Key keyCode="Space" className="w-[8.2rem]" />
        <ModifierKey keyCode="MetaRight" className="w-8">
          <IconCommand className="h-[6px] w-[6px]" />
          <span>command</span>
        </ModifierKey>
        <ModifierKey keyCode="AltRight">
          <OptionKey className="h-[6px] w-[6px]" />
          <span>option</span>
        </ModifierKey>
        {/* Arrow Keys */}
        <div className="flex h-6 w-[4.9rem] items-center justify-end rounded-[4px] p-[0.5px]">
          <Key keyCode="ArrowLeft" className="h-6 w-6">
            <IconCaretLeftFilled className="h-[6px] w-[6px]" />
          </Key>
          <div className="flex flex-col">
            <Key keyCode="ArrowUp" className="h-3 w-6">
              <IconCaretUpFilled className="h-[6px] w-[6px]" />
            </Key>
            <Key keyCode="ArrowDown" className="h-3 w-6">
              <IconCaretDownFilled className="h-[6px] w-[6px]" />
            </Key>
          </div>
          <Key
            keyCode="ArrowRight"
            containerClassName="rounded-br-xl"
            className="h-6 w-6 rounded-br-lg"
          >
            <IconCaretRightFilled className="h-[6px] w-[6px]" />
          </Key>
        </div>
      </Row>
    </div>
  );
};

const Row = ({ children }) => (
  <div className="mb-[2px] flex w-full shrink-0 gap-[2px]">{children}</div>
);

Row.propTypes = {
  children: PropTypes.node,
};

const Key = ({
  className,
  childrenClassName,
  containerClassName,
  children,
  keyCode,
}) => {
  const { playSoundDown, playSoundUp, pressedKeys, setPressed, setReleased } =
    useKeyboardSound();
  const isPressed = keyCode ? pressedKeys.has(keyCode) : false;
  const pressedByMouseRef = useRef(false);

  const handleMouseDown = () => {
    if (keyCode) {
      pressedByMouseRef.current = true;
      playSoundDown(keyCode);
      setPressed(keyCode);
    }
  };

  const handleMouseUp = () => {
    if (keyCode) {
      playSoundUp(keyCode);
      setReleased(keyCode);
      setTimeout(() => {
        pressedByMouseRef.current = false;
      }, 50);
    }
  };

  const handleMouseLeave = () => {
    if (keyCode && pressedByMouseRef.current) {
      setReleased(keyCode);
      pressedByMouseRef.current = false;
    }
  };

  const handleClick = (e) => {
    e.stopPropagation();
    if (keyCode && !pressedByMouseRef.current) {
      playSoundDown(keyCode);
      setPressed(keyCode);
      setTimeout(() => {
        playSoundUp(keyCode);
        setReleased(keyCode);
      }, 90);
    }
  };

  return (
    <div className={cn("rounded-[4px] p-[0.5px]", containerClassName)}>
      <button
        type="button"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        className={cn(
          "flex h-6 w-6 cursor-pointer items-center justify-center rounded-[3.5px] bg-white border border-[#d1d5db]/90 border-b-[1.5px] border-b-[#9ca3af] shadow-[0_1px_2px_rgba(0,0,0,0.06)] transition-all duration-75 active:translate-y-[1.5px] active:bg-[#f1f5f9] active:shadow-inner select-none pointer-events-auto",
          isPressed &&
            "translate-y-[1.5px] bg-[#f1f5f9] shadow-inner",
          className
        )}
      >
        <div
          className={cn(
            "flex h-full w-full flex-col items-center justify-center text-[5px] text-neutral-800 font-sans pointer-events-none select-none",
            childrenClassName
          )}
        >
          {children}
        </div>
      </button>
    </div>
  );
};

Key.propTypes = {
  className: PropTypes.string,
  childrenClassName: PropTypes.string,
  containerClassName: PropTypes.string,
  children: PropTypes.node,
  keyCode: PropTypes.string,
};

const ModifierKey = ({
  className,
  containerClassName,
  children,
  keyCode,
}) => {
  const { playSoundDown, playSoundUp, pressedKeys, setPressed, setReleased } =
    useKeyboardSound();
  const isPressed = keyCode ? pressedKeys.has(keyCode) : false;
  const pressedByMouseRef = useRef(false);

  const handleMouseDown = () => {
    if (keyCode) {
      pressedByMouseRef.current = true;
      playSoundDown(keyCode);
      setPressed(keyCode);
    }
  };

  const handleMouseUp = () => {
    if (keyCode) {
      playSoundUp(keyCode);
      setReleased(keyCode);
      setTimeout(() => {
        pressedByMouseRef.current = false;
      }, 50);
    }
  };

  const handleMouseLeave = () => {
    if (keyCode && pressedByMouseRef.current) {
      setReleased(keyCode);
      pressedByMouseRef.current = false;
    }
  };

  const handleClick = (e) => {
    e.stopPropagation();
    if (keyCode && !pressedByMouseRef.current) {
      playSoundDown(keyCode);
      setPressed(keyCode);
      setTimeout(() => {
        playSoundUp(keyCode);
        setReleased(keyCode);
      }, 90);
    }
  };

  return (
    <div className={cn("rounded-[4px] p-[0.5px]", containerClassName)}>
      <button
        type="button"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        className={cn(
          "flex h-6 w-6 cursor-pointer items-center justify-center rounded-[3.5px] bg-white border border-[#d1d5db]/90 border-b-[1.5px] border-b-[#9ca3af] shadow-[0_1px_2px_rgba(0,0,0,0.06)] transition-all duration-75 active:translate-y-[1.5px] active:bg-[#f1f5f9] active:shadow-inner select-none pointer-events-auto",
          isPressed &&
            "translate-y-[1.5px] bg-[#f1f5f9] shadow-inner",
          className
        )}
      >
        <div className="flex h-full w-full flex-col items-start justify-between p-1 text-[5px] text-neutral-800 font-sans pointer-events-none select-none">
          {children}
        </div>
      </button>
    </div>
  );
};

ModifierKey.propTypes = {
  className: PropTypes.string,
  containerClassName: PropTypes.string,
  children: PropTypes.node,
  keyCode: PropTypes.string,
};

const OptionKey = ({ className }) => {
  return (
    <svg
      fill="none"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className={className}
    >
      <rect
        stroke="currentColor"
        strokeWidth={2}
        x="18"
        y="5"
        width="10"
        height="2"
      />
      <polygon
        stroke="currentColor"
        strokeWidth={2}
        points="10.6,5 4,5 4,7 9.4,7 18.4,27 28,27 28,25 19.6,25"
      />
    </svg>
  );
};

OptionKey.propTypes = {
  className: PropTypes.string,
};

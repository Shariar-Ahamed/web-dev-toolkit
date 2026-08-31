"use client";
import { Keyboard } from "@/components/ui/keyboard";

export default function KeyboardDemo() {
  return (
    <div className="flex min-h-[400px] w-full items-center justify-center p-8 bg-slate-950">
      {/* enableSound={true} plays mechanical CherryMX key sounds on keypress & mouse click */}
      {/* showPreview={true} displays an animated cyan keystroke bubble above the keyboard */}
      <Keyboard enableSound={true} showPreview={false} />
    </div>
  );
}

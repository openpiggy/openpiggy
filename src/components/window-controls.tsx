import { getCurrentWindow } from "@tauri-apps/api/window";
import { Minus, Square, X } from "lucide-react";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

interface WindowControlsProps {
  className?: string;
}

function WindowControls({ className }: WindowControlsProps) {
  const appWindow = getCurrentWindow();

  return (
    <div className={cn("flex space-x-4 align-middle", className)}>
      <Button
        variant={"ghost"}
        size={"icon"}
        className="h-6 w-6 rounded-full p-1"
        onClick={() => appWindow.minimize()}
      >
        <Minus className="h-4 w-4" />
      </Button>
      <Button
        variant={"ghost"}
        size={"icon"}
        className="h-6 w-6 rounded-full p-1"
        onClick={() => appWindow.toggleMaximize()}
      >
        <Square className="h-3.5 w-3.5" />
      </Button>
      <Button
        variant={"ghost"}
        size={"icon"}
        className="h-6 w-6 rounded-full p-1 hover:bg-red-100"
        onClick={() => appWindow.close()}
      >
        <X className="h-4 w-4" />
      </Button>
    </div>
  );
}

export default WindowControls;

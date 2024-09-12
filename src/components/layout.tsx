import { useRef, useState } from "react";
import { ImperativePanelHandle } from "react-resizable-panels";

import { PanelLeftClose, PanelLeftOpen } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import WindowControls from "@/components/window-controls";

import { cn } from "@/lib/utils";

const Layout = () => {
  const panelRef = useRef<ImperativePanelHandle>(null);
  const [isPanelOpen, setIsPanelOpen] = useState<boolean>(true);

  const togglePanel = () => {
    const panel = panelRef.current;
    if (panel) {
      if (panel.isCollapsed()) {
        setIsPanelOpen(true);
        panel.expand();
      } else {
        setIsPanelOpen(false);
        panel.collapse();
      }
    }
  };

  const handleResize = (size: number) => {
    setIsPanelOpen(size > 0);
  };

  return (
    <div className="h-screen">
      <div
        data-tauri-drag-region
        className="fixed z-50 h-10 w-full flex-col border-b p-2"
      >
        <Button
          variant="ghost"
          size={"icon"}
          onClick={togglePanel}
          className="absolute left-2 h-6 w-6 text-muted-foreground"
        >
          {isPanelOpen ? (
            <PanelLeftClose className="h-4 w-4" />
          ) : (
            <PanelLeftOpen className="h-4 w-4" />
          )}
        </Button>
        <WindowControls className="absolute right-2" />
      </div>

      <ResizablePanelGroup autoSaveId="conditional" direction="horizontal">
        <div
          className={cn(
            "mt-10 flex h-full w-10 flex-col items-center py-2",
            isPanelOpen ? "border-r bg-secondary" : "",
          )}
        ></div>

        <ResizablePanel
          defaultSize={20}
          minSize={15}
          maxSize={40}
          order={1}
          collapsible
          collapsedSize={0}
          ref={panelRef}
          onResize={handleResize}
          className="mt-10 flex h-full bg-secondary"
        />
        <ResizableHandle
          className={cn(
            "data-[resize-handle-state=drag]:bg-border data-[resize-handle-state=hover]:bg-border",
            isPanelOpen ? "" : "mt-10",
          )}
        />
        <ResizablePanel
          defaultSize={80}
          minSize={60}
          order={2}
          className="flex h-full bg-background"
        />
      </ResizablePanelGroup>
    </div>
  );
};

export default Layout;

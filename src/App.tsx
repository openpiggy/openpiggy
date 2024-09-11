import "@/styles/globals.css";

import WindowControls from "@/components/window-controls";

function App() {
  return (
    <div className="h-screen w-screen">
      <div data-tauri-drag-region className="flex h-10 flex-col border-b p-2">
        <WindowControls className="self-end" />
      </div>
    </div>
  );
}

export default App;


import { Pause } from "lucide-react";
const PauseScreen = () => {
  return (
    <div className="bg-warning-subtle border border-warning rounded p-5 text-center rounded-3">
      <Pause className="mx-auto mb-3" style={{ width: "3rem", height: "3rem", color: "#f59e0b" }} />
      <h3 className="fw-semibold text-warning mb-2">Test Paused</h3>
      <p className="text-warning-emphasis">Click Resume to continue with your test</p>
    </div>
  );
};

export default PauseScreen;
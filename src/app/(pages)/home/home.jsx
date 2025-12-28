"use client"
import CalculatorSection from "@/components/calculator-section/calculator-section";
import ScreenMetrics from "@/components/screen-metrics/screen-metrics";
import UserAgentViewport from "@/components/user-agent-viewport/agent";
import CompareDevices from "@/components/compare-devices/compare-devices";

const Home = () => {

  return (
    <div>
      <CalculatorSection />
      <ScreenMetrics />
      <UserAgentViewport />
      <CompareDevices />
    </div>
  );
};

export default Home;

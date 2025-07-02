export interface NetworkControllerSummary {
  wanStatus: "enabled" | "disabled";
  alerts: number;
  www: {
    status: "enabled" | "disabled";
    latency: number;
    ping: number;
    uptime: number;
  };

  wifi: {
    status: "enabled" | "disabled";
    accessPoints: number;
    users: number;
    guests: number;
  };

  lan: {
    status: "enabled" | "disabled";
    switches: number;
    users: number;
    guests: number;
  };

  vpn: {
    status: "enabled" | "disabled";
    users: number;
  };
}

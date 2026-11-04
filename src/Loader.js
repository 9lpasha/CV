import { SiGo, SiReact } from "react-icons/si";

// Page loader: a React frontend and a Go backend exchanging request/response packets.
export const Loader = () => (
  <div className="loader" role="status" aria-label="Loading">
    <div className="loader-row">
      <div className="loader-node loader-node--react">
        <SiReact className="loader-react-icon" size={40} />
      </div>
      <div className="loader-wire">
        <span className="loader-packet loader-packet--req" />
        <span className="loader-packet loader-packet--res" />
      </div>
      <div className="loader-node loader-node--go">
        <SiGo size={52} />
      </div>
    </div>
  </div>
);

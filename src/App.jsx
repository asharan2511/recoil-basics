import { useRecoilValue } from "recoil";
import {
  jobsAtom,
  messagingAtom,
  networkAtom,
  notificationAtom,
  totalMinusNetwork,
  totalSelector,
} from "./atom";

const App = () => {
  const networkCount = useRecoilValue(networkAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const messagingCount = useRecoilValue(messagingAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  const total = useRecoilValue(totalSelector);
  const total1 = useRecoilValue(totalMinusNetwork);

  return (
    <div>
      <button>Home</button>
      <button>Network ({networkCount})</button>
      <button>Jobs ({jobsCount})</button>
      <button>Messaging ({messagingCount})</button>
      <button>Notification ({notificationCount})</button>
      <button>Me({total})</button>
      <button>total - network ({total1})</button>
    </div>
  );
};

export default App;

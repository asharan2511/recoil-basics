import { atom, selector } from "recoil";

export const networkAtom = atom({
  key: "networkAtom",
  default: 104,
});
export const jobsAtom = atom({
  key: "jobsAtom",
  default: 0,
});

export const notificationAtom = atom({
  key: "notificationAtom",
  default: 12,
});
export const messagingAtom = atom({
  key: "messagingAtom",
  default: 0,
});

export const totalSelector = selector({
  key: "totalSelector",
  get: ({ get }) => {
    const networkAtomCount = get(networkAtom);
    const jobsAtomCount = get(jobsAtom);
    const notificationAtomCount = get(notificationAtom);
    const messagingAtomCount = get(messagingAtom);
    return (
      networkAtomCount +
      jobsAtomCount +
      notificationAtomCount +
      messagingAtomCount
    );
  },
});

export const totalMinusNetwork = selector({
  key: "totalMinusNetwork",
  get: ({ get }) => {
    const total = get(totalSelector);
    const network = get(networkAtom);
    return total - network;
  },
});

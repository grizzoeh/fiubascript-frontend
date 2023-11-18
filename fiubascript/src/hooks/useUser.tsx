import Context, { UserInfo } from "../context/UserContext";
import { useContext } from "react";

type UseUserInfo = {
  userInfo: UserInfo;
  setUserInfo: (userInfo: UserInfo) => void;
};

export default function useUser() {
  const { userInfo, setUserInfo } = useContext(Context) as UseUserInfo;

  return { userInfo, setUserInfo };
}


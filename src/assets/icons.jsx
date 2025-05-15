import { FaWallet } from "react-icons/fa6";
import { GiTwoCoins } from "react-icons/gi";
import { IoSearch, IoCloseCircleOutline } from "react-icons/io5";
import { LuLogOut, LuRefreshCcwDot } from "react-icons/lu";
import { RiAccountPinCircleFill } from "react-icons/ri";

import {
  FaBars,
  FaChalkboardTeacher,
  FaEye,
  FaEyeSlash,
  FaFacebookF,
  FaInstagram,
  FaPlus,
  FaSort,
  FaStar,
  FaStarHalfAlt,
  FaTiktok,
  FaTwitch,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export const Icons = {
  menu: FaBars,
  profile: RiAccountPinCircleFill,
  coachProfile: FaChalkboardTeacher,
  logOut: LuLogOut,
  passwordHidden: FaEyeSlash,
  passwordShow: FaEye,
  star: FaStar,
  halfStar: FaStarHalfAlt,
  wallet: FaWallet,
  coin: GiTwoCoins,
  media: {
    facebook: FaFacebookF,
    instagram: FaInstagram,
    tiktok: FaTiktok,
    twitch: FaTwitch,
    twitter: FaTwitter,
    youtube: FaYoutube,
  },
  add: FaPlus,
  search: IoSearch,
  close: IoCloseCircleOutline,
  sort: FaSort,
  clear: LuRefreshCcwDot,
};

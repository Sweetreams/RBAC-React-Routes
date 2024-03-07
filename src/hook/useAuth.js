import { useContext } from "react";
import {AuthContext} from "../hoc/AuthProvide"

export default function useAuth() {
  return useContext(AuthContext)
}
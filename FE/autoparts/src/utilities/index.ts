import { ERRORS } from "../constants";
import toast from "react-hot-toast";
import axios from "axios";
import { Option } from "../types";

export const checkError = (error: Error) => {
  if (axios.isAxiosError(error)) {
    if (error.response) {
      toast.error(error.response.data.detail || ERRORS.be_fetch);
    } else if (error.request) {
      toast.error("No response from server");
    } else {
      toast.error("Error setting up request");
    }
  } else {
    toast.error(ERRORS.unexpected_err);
  }
};

export const makeSelectOptions = (arr: string[] | number[]): Option[] => {
  return arr.map((item) => {
    return { value: item, label: item.toString() };
  });
};

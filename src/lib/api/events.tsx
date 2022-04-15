import axios from "axios";

const addEvent = async (
  url: string,
  data: { title: string; start: string; user: number; end?: string }
) => {
  const res = await axios.post(url, { data: { ...data } });
  return res.data;
};

export { addEvent };

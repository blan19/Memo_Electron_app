import axios from "axios";

const addEvent = async (
  url: string,
  data: { title: string; start: string; user: number; end?: string }
) => {
  const res = await axios.post(url, { data: { ...data } });
  return res.data;
};

const deleteEvent = async (url: string) => {
  const res = await axios.delete(url);
  return res.data;
};

const updateEvent = async (url: string, start: string, end: string) => {
  const res = await axios.put(url, {
    data: {
      start,
      end: end === "" ? null : end,
    },
  });
  return res.data;
};

export { addEvent, deleteEvent, updateEvent };

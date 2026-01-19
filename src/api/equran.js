import axios from "axios";
import { config } from "../configs";

export const getSurahList = async () => {
  const res = await axios.get(`${config.api_base_url}/surat`);
  return res.data.data;
};

export const getSurahDetail = async (id) => {
  const res = await axios.get(`${config.api_base_url}/surat/${id}`);
  return res.data.data;
};

export const getTafsir = async (id) => {
  const res = await axios.get(`${config.api_base_url}/tafsir/${id}`);
  return res.data.data;
};


export const getAudioSurah = async (id) => {
  const res = await axios.get(`${config.api_base_url}/surat/${id}`);
  return res.data.data.audioFull;
};

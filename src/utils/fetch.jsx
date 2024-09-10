import axios from "axios";
import React from "react";
import { useEffect, useState, createContext } from "react";
import { config } from "../configs";

const Context = createContext(null);

const Provider = ({ children }) => {
  const [daftarSurat, setDaftarSurat] = useState([]);
  const [detailSurat, setDetailSurat] = useState([]);
  const [tafsir, setTafsir] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getDaftarSurat = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`${config.api_base_url}/surat`, {
        headers: {
          accept: "application/json",
        },
      });

      setDaftarSurat(res.data.results);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  const getDetailSurat = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`${config.api_base_url}/surat/${id}`, {
        headers: {
          accept: "application/json",
        },
      });
      setDetailSurat(res.data.results);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  const getTafsir = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(`${config.api_base_url}/tafsir/${id}`, {
        headers: {
          accept: "application/json",
        },
      });

      setTafsir(res.data.results);
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDaftarSurat();
    // getDetailSurat();
    // getTafsir();
  }, []);

  return (
    <Context.Provider
      value={{
        daftarSurat,
        detailSurat,
        tafsir,
        setDaftarSurat,
        setDetailSurat,
        setTafsir,
        isLoading,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, Provider };

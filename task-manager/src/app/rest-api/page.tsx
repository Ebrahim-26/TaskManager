"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CustomizedTables from "@/ui/components/Table/Table";
import { postType } from "@/type/ComponentTypes";
import CustomTextField from "@/ui/components/NewTask/CustomTextField";

function Page() {
  const [search, setSearch] = useState<string>("");
  const [allPosts, setAllPosts] = useState<postType[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const getCall = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setAllPosts(data.data);
      } catch (error) {
        if (error instanceof Error) {
          setError(`Failed to load Data: ${error.message}`);
        } else {
          setError("Failed to load data due to an unknown error.");
        }
      } finally {
        setLoading(false);
      }
    };
    getCall();
  }, []);

  const searchFilter = allPosts.filter(
    (item) =>
      item.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      item.body.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  if (loading) {
    return (
      <div className="h-[100vh] bg-black flex items-center justify-center">
        <p className="font-bold text-2xl">Loading Table...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-black h-[100vh] flex flex-col items-center justify-center">
        <p className="text-white text-5xl">Error</p>
        <p className="text-white text-xl">{error}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="p-2 flex flex-col gap-2">
        <CustomTextField
          placeholder="Search"
          data={search}
          setData={setSearch}
        />
        <CustomizedTables apiData={searchFilter} />
      </div>
    </div>
  );
}

export default Page;

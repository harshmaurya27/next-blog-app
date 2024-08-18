"use client";
import SubsTableItem from "@/Components/AdminComponents/SubsTableItem";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const page = () => {
  const [emails, setEmails] = useState([]);
  const fetchEmail = async () => {
    const response = await axios.get("/api/email");
    if (response) {
      setEmails(response.data.emails);
    } else {
      toast.error("Error");
    }
  };
  const deleteEmail = async (mongoId) => {
    const response = await axios.delete("/api/email", {
      params: {
        id: mongoId,
      },
    });
    if (response.data.success) {
      toast.success(response.data.msg);
      fetchEmail();
    } else {
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchEmail();
  }, []);

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1>All Subscription</h1>
      <div className="relative max-w-[600px] h-[80vh] overflow-x-auto mt-4 border border-x-gray-400 scrollbar-hide">
        <table className="w-full text-sm text-gray-500">
          <thead className="text-xs text-left text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col " className="px-6 py-3 ">
                Email Subscription
              </th>
              <th scope="col " className="px-6 py-3 hidden sm:block ">
                Date
              </th>
              <th scope="col " className="px-6 py-3 ">
                Action{" "}
              </th>
            </tr>
          </thead>
          <tbody className="">
            {emails.map((item, index) => {
              return (
                <SubsTableItem
                  key={index}
                  email={item.email}
                  mongoId={item._id}
                  date={item.date}
                  deleteEmail={deleteEmail}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;

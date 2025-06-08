"use client";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

import searchCustomer from "./searchCustomer";
import OneCompanyInfoCard from "@/app/components/one_company_info_card.jsx";

export default function SearchPage() {
  const formRef = useRef();
  const router = useRouter();
  const [companyInfos, setCompanyInfos] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(formRef.current);
    const companyData = await searchCustomer(formData);
    setCompanyInfos(companyData);
  };

  return (
    <>
      <div className="card bordered bg-white border-blue-200 border-2 max-w-md m-4">
        <div className="m-4 card bordered bg-blue-200 duration-200 hover:border-r-red">
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="card-body">
              <h2 className="card-title">
                <p>
                  会社名:
                  <input
                    type="text"
                    name="company_name"
                    placeholder="日立"
                    className="input input-bordered"
                  />
                </p>
              </h2>
              <p>
                住所:
                <input
                  type="text"
                  name="address"
                  placeholder="多分東京"
                  className="input input-bordered"
                />
              </p>
              <p>
                業種:
                <input
                  type="text"
                  name="industry"
                  placeholder="家電メーカーだと思います"
                  className="input input-bordered"
                />
              </p>
              <p>
                代表者名:
                <input
                  type="text"
                  name="rep_name"
                  placeholder=""
                  className="input input-bordered"
                />
              </p>
            </div>
            <div className="flex justify-center">
              <button type="submit" className="btn btn-primary m-4 text-2xl">
                検索
              </button>
            </div>
          </form>
        </div>
      </div>
      {companyInfos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {companyInfos.map((companyInfo, index) => (
            <div
              key={index}
              className="card bordered bg-white border-blue-200 border-2 flex flex-row max-w-sm m-4"
            >
              <OneCompanyInfoCard {...companyInfo} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center p-4">
          <p>多分まだ検索していません。</p>
        </div>
      )}
    </>
  );
}

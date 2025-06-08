"use server";

const searchCustomer = async (formData) => {
  const company_name = formData.get("company_name");
  const address = formData.get("address");
  const industry = formData.get("industry");
  const rep_name = formData.get("rep_name");

  const res = await fetch(
    process.env.NEXT_PUBLIC_API_ENDPOINT + `/search?company_name=${company_name}?address=${address}?industry=${industry}?rep_name=${rep_name}`,
    { cache: "no-cache" }
  );
  if (!res.ok) {
    throw new Error("Failed to search customer");
  }
  return res.json();
}

export default searchCustomer;
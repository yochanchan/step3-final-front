export default function OneCompanyInfoCard({
  company_name,
  industry,
  address,
  est_date,
  rep_name,
  rep_birthday
}) {
  return (
    <>
      <div className="m-4 card bordered bg-blue-200 duration-200 hover:border-r-red">
        <div className="card-body">
          <h2 className="card-title">会社名: {company_name}</h2>
          <p>業種: {industry}</p>
          <p>住所: {address}</p>
          <p>設立年月日: {est_date}</p>
          <p>代表者名: {rep_name}</p>
          <p>代表者生年月日: {rep_birthday}</p>
        </div>
      </div>
    </>
  );
}

import { Suspense } from "react";
import ConfirmContent from "./confirmContent";

export default function ConfirmPage() {
  return (
    <Suspense fallback={<p className="m-4">検索中...</p>}>
      <ConfirmContent />
    </Suspense>
  );
}
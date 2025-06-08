import { Suspense } from "react";
import ConfirmContent from "./confirmContent";

export const dynamic = "force-dynamic";   // ★ 追加：必ず動的レンダリング

export default function ConfirmPage() {
  return (
    <Suspense fallback={<p className="m-4">検索中...</p>}>
      <ConfirmContent />
    </Suspense>
  );
}
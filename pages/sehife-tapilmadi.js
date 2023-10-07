// pages/404.js
import Link from "next/link";
import PrimaryMdBtn from "@/src/components/buttons/primary_md_btn";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="flex flex-col gap-y-[10px] text-center">
        <h2 className="my-h2">Səhifə Tapılmadı</h2>
        <Link href="/">
          <PrimaryMdBtn btnName="Əsas səhvə" classNames="w-[180px] px-[15px]" />
        </Link>
      </div>
    </div>
  );
}

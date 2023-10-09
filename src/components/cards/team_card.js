import Image from "next/image";
const avatar =
  "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
function TeamCard() {
  return (
    <div className="flex flex-col gap-y-[4px]">
      <Image
        className="w-[220px] h-[220px] rounded-[20px] object-cover object-center"
        width={300}
        height={300}
        src={avatar}
        alt="avatar"
      />
      <p className="font-extrabold">Name Surname</p>
      <p className="font-bold text-[#959595]">Position</p>
      <p className="text-[#959595]">name@cagir.az</p>
    </div>
  );
}

export default TeamCard;

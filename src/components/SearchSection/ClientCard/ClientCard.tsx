import { Edit, Trash } from "../../Icons";

interface ClientCardProps {
  id: number;
  name: string;
  email: string;
}

const ClientCard = (props: ClientCardProps) => {
  return (
    <div className="flex flex-row justify-between bg-white w-full rounded-md p-3 hover:bg-slate-100">
    <span className="flex justify-center items-center text-3xl font-bold">
      #{props.id}
    </span>
    <div className="flex flex-col">
      <span className="font-bold text-blue-500">{props.name}</span>
      <span className="font-bold">Email: {props.email}</span>
    </div>
    <div className="flex justify-center items-center gap-3">
      <button className="flex justify-center items-center w-10 h-10 bg-blue-500 rounded-md">
        <Edit width={28} height={28} strokeWidth={2} />
      </button>
      <button className="flex justify-center items-center w-10 h-10 bg-red-500 rounded-md">
        <Trash width={28} height={28} strokeWidth={2} />
      </button>
    </div>
  </div>
  )
}

export default ClientCard
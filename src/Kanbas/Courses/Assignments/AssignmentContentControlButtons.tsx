import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import {FaPencil} from "react-icons/fa6";
import {FaTrash} from "react-icons/fa";
export default function AssignmentContentControlButtons({ id, deleteAssignment, editAssignment }: {
    id: string; deleteAssignment: (id: string) => void;
    editAssignment: (id: string) => void }) {

    return (
        <div className="float-end">
            <FaPencil onClick={() => editAssignment(id)} className="text-primary me-3" />
            <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteAssignment(id)}/>
            <GreenCheckmark />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}



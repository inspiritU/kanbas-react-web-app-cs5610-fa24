import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
export default function AssignmentControlButtons()
    // { assignmentId, deleteAssignment }: { assignmentId: string; deleteAssignment: (assignmentId: string) => void; } )
{

    return (
        <div className="float-end d-flex align-items-center">
            {/*<FaTrash className="text-danger me-2 mb-1" onClick={() => deleteAssignment(assignmentId)}/>*/}

            <div className="border border-dark rounded-pill px-3 py-1 me-2">
                40% of Total
            </div>
            <BsPlus className="fs-4 me-2" />
            <IoEllipsisVertical className="fs-4" />
        </div>
    );
}
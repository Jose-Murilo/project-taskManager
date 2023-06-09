import { useContext, memo } from 'react';
import { BsTrash3Fill } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { DataProps } from "../../@types/TypeApi";
import { Container } from "./style";
import { TaskContext } from "../../context";

type CardTask = {
    task: DataProps;
    modalOpen: (TaskID: number) => void;
}

function CardTask({ task, modalOpen }: CardTask) {
    const { deleteTasks } = useContext(TaskContext)

    return (
        <Container>
            <div className="cardTask">
                <div className="containerTitle">
                    <h2 key={task.id} className={task.isCompleted ? 'taskCompleted' : ''}>
                        {
                            task.titleTask.length > 17 ? task.titleTask.substring(0, 17) + '...' : task.titleTask
                        }
                    </h2>
                </div>

                <p className={task.isCompleted ? "taskCompleted taskCompletedDescription" : "descriptions"}>{task.descriptionTask}</p>

                <div className="viewMore">
                    <BiEdit onClick={() => {
                        modalOpen(task.id)
                    }} className="buttonViewMore" />

                    <p className="textTaskIsCompleted">{task.isCompleted ? 'Tarefa Concluida' : ''}</p>

                    <BsTrash3Fill title="Alterar tarefa" className="trashTask" onClick={() => {
                        deleteTasks(task.id)
                    }} />
                </div>
            </div>
        </Container>
    )
}

// evitar muita renderização no Card
export default memo(CardTask);
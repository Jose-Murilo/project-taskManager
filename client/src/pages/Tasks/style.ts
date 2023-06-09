import styled from "styled-components";


export const Container = styled.div`
    background: ${props => props.theme["--gray-900"]};
    color: white;
    display: grid;
    place-content: center-start;
    min-height: calc(100vh - 12.6rem);
    
    .containerCard {
        padding: 2rem;
        text-align: center;
    }
    
    h1 {
        padding-block: 1rem;
    }

    .searchTask {
        width: 27.5rem;
        padding: 1rem;
        color: white;
        font-size: 1.5rem;
        border-radius: 1rem;
        border: 1px solid ${props => props.theme["--green-500"]};
        background: ${props => props.theme["--gray-800"]};
        margin-bottom: 1rem;
    }

    .searchTask:focus  {
        border: 1px solid ${props => props.theme["--green-300"]};
        outline: 1px solid ${props => props.theme["--green-300"]};
    }

    .searchTask:disabled {
        opacity: .3;
        border: 1px solid ${props => props.theme["--red-500"]};
    }

    .tasksCompleted {
        display: flex;
        max-width: 500px;
        margin: 0 auto;
        padding-inline: 2rem;
        /* background-color: red; */
        align-items: center;
        justify-content: space-between;
        /* font-size: 1.4rem; */
    }

    .noTaskFound {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        height: 15.6rem;
        justify-content: center;
        color: ${props => props.theme["--gray-400"]}
    }
    
    .containerEmpty {
        margin-top: 7rem;
        
        img {
            margin-bottom: 1.2rem;
        }
    }
    `

export const EmptyText = styled.p`
    color: ${props => props.theme["--gray-400"]};
`

type ShowModal = {
    showModal: boolean;
}

export const ContainerTask = styled.div<ShowModal>`
    display: ${props => props.showModal ? 'none' : 'flex'};
    padding-top: 2rem;
    justify-content: center;
    flex-wrap: wrap;
    gap: 3rem;
`
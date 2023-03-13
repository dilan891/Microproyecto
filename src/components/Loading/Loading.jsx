import styled from "./Loading.module.css"

export function Loading() {
    return (
        <div className={styled.container}>
            <div className={styled.loader}></div>
        </div>
    )
}
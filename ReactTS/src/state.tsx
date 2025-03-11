import { useState } from "react"

type RequestState = 
    | {status: "idle"}
    | {status: "loading"}
    | {status: "success", data: any}
    | {status: "error", error: Error}

function state() {
    const [disabled, setDisabled] = useState<boolean>(false); // 상태 관리를 위한 hook
    const [requestState, setRequestState] = useState<RequestState>({status: "idle"});
}

export function Hook() {
    return (
        <div>
            <h2>Hello! React Hooks</h2>
        </div>
    )
}

export default Hook()
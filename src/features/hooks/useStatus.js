import {changeFilterStatus} from "../actions";
import {useDispatch} from "react-redux";

export default function useStatus() {
    const dispatch = useDispatch();
    return [
        {onClick: (e) => dispatch(changeFilterStatus(e.target.innerHTML))}
    ]
}
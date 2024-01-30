import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const Modal = ({ children, style }) => {
    const [modalRoot] = useState(() => document.createElement("div"));

    useEffect(() => {
        document.body.appendChild(modalRoot);
        return () => {
            document.body.removeChild(modalRoot);
        };
    }, [modalRoot]);

    return ReactDOM.createPortal(<div style={style}>{children}</div>, modalRoot);
};

export default Modal;

import { ToastContainer,toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const handleSuccess = (info, type) => {
    toast.success(info, {
        position: toast.POSITION.TOP_RIGHT
    });
};

const handleError = (info) => {

    toast.error(info, {
        position: toast.POSITION.TOP_RIGHT
    });
};

export {
  handleError,handleSuccess,
};

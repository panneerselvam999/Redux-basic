
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTaskInList } from "../slice/taskSlice";

const UpdateTask = ({ setIsModalOpen }) => {
    const dispatch = useDispatch();

    const { selectedTask } = useSelector((state) => state.tasks);

    const [modelTitle, setModelTitle] = useState("");
    const [modelDescription, setModelDescription] = useState("");
    const [modelID, setModelID] = useState(0);

    const updateTask = () => {
        // console.log("update model data");
        // console.log({ modelTitle, modelDescription });
        dispatch(updateTaskInList({ id: modelID, title: modelTitle, des: modelDescription }))
        setIsModalOpen(false)
    };

    useEffect(() => {
        if (Object.keys(selectedTask).length !== 0) {
            setModelTitle(selectedTask.title);
            setModelDescription(selectedTask.des);
            setModelID(selectedTask.id);
        }
    }, [selectedTask]);

    return (
        <div>
            <div className="fixed inset-0 z-10 flex items-center justify-center">
                <div className="min-height-100vh flex items-center justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
                    <div className="fixed inset-0 transition-opacity">
                        <div className="absolute inset-0 bg-gray-900 opacity-75" />
                    </div>
                    <span className="hidden sm:inline-block sm:h-screen sm:align-middle">
                        &#8203;
                    </span>
                    <div
                        className="align-center inline-block transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-headline"
                    >
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <label className="font-medium text-gray-800">Name</label>
                            <input
                                type="text"
                                value={modelTitle}
                                onChange={(e) => setModelTitle(e.target.value)}
                                className="mb-3 mt-2 w-full rounded bg-gray-100 p-2 outline-none"
                            />
                            <label className="font-medium text-gray-800">Description</label>
                            <input
                                type="text"
                                value={modelDescription}
                                onChange={(e) => setModelDescription(e.target.value)}
                                className="mb-3 mt-2 w-full rounded bg-gray-100 p-2 outline-none"
                            />
                        </div>
                        <div className="bg-gray-200 px-4 py-3 text-right">
                            <button
                                type="button"
                                className="mr-2 rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-700"
                                onClick={() => setIsModalOpen(false)}
                            >
                                <i className="fas fa-times"></i> Cancel
                            </button>
                            <button
                                type="button"
                                onClick={updateTask}
                                className="mr-2 rounded bg-blue-500 px-4 py-2 font-medium text-white transition duration-500 hover:bg-blue-700"
                            >
                                <i className="fas fa-plus"></i> Update
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateTask;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { updateTaskInList } from "../slice/taskSlice";

// const UpdateTask = ({ setIsModalOpen }) => {
//     const dispatch = useDispatch();

//     const { setSelectedTask } = useSelector((state) => state.tasks);

//     const [modelTitle, setModelTitle] = useState("");
//     const [modelDescription, setModelDescription] = useState("");
//     const [modelID, setModelID] = useState(0);

//     const updateTask = () => {
//         console.log("update model data");
//         console.log({ modelTitle, modelDescription });
//         dispatch(updateTaskInList({ modelID, modelTitle, modelDescription }))
//         setIsModalOpen(false)
//     };

//     useEffect(() => {
//         if (Object.keys(setSelectedTask).length !== 0) {
//             setModelTitle(setSelectedTask.title);
//             setModelDescription(setSelectedTask.des);
//             setModelID(setSelectedTask.id);
//         }
//     }, [setSelectedTask]);

//     return (
//         <div>
//             <div className="fixed inset-0 z-10 flex items-center justify-center">
//                 <div className="min-height-100vh flex items-center justify-center px-4 pb-20 pt-4 text-center sm:block sm:p-0">
//                     <div className="fixed inset-0 transition-opacity">
//                         <div className="absolute inset-0 bg-gray-900 opacity-75" />
//                     </div>
//                     <span className="hidden sm:inline-block sm:h-screen sm:align-middle">
//                         &#8203;
//                     </span>
//                     <div
//                         className="align-center inline-block transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle"
//                         role="dialog"
//                         aria-modal="true"
//                         aria-labelledby="modal-headline"
//                     >
//                         <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
//                             <label className="font-medium text-gray-800">Name</label>
//                             <input
//                                 type="text"
//                                 value={modelTitle}
//                                 onChange={(e) => setModelTitle(e.target.value)}
//                                 className="mb-3 mt-2 w-full rounded bg-gray-100 p-2 outline-none"
//                             />
//                             <label className="font-medium text-gray-800">Description</label>
//                             <input
//                                 type="text"
//                                 value={modelDescription}
//                                 onChange={(e) => setModelDescription(e.target.value)}
//                                 className="mb-3 mt-2 w-full rounded bg-gray-100 p-2 outline-none"
//                             />
//                         </div>
//                         <div className="bg-gray-200 px-4 py-3 text-right">
//                             <button
//                                 type="button"
//                                 className="mr-2 rounded bg-gray-500 px-4 py-2 text-white hover:bg-gray-700"
//                                 onClick={() => setIsModalOpen(false)}
//                             >
//                                 <i className="fas fa-times"></i> Cancel
//                             </button>
//                             <button
//                                 type="button"
//                                 onClick={updateTask}
//                                 className="mr-2 rounded bg-blue-500 px-4 py-2 font-medium text-white transition duration-500 hover:bg-blue-700"
//                             >
//                                 <i className="fas fa-plus"></i> Update
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default UpdateTask;

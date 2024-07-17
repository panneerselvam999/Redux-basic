import React from "react";
import { useState } from "react";
import { addTaskToList } from "../slice/taskSlice";
import { useDispatch, useSelector } from "react-redux";

const AddTask = () => {
    const [title, setTitle] = useState("");
    const [des, setDes] = useState("");

    const dispatch = useDispatch();
    const { tasksList } = useSelector((state) => state.tasks);

    const addTask = (e) => {
        e.preventDefault();
        // console.log({ title, des });
        dispatch(addTaskToList({ title, des }));
        setTitle("");
        setDes("");
    };

    return (
        <div className="bg-background mt-24 flex w-full flex-col items-center justify-center">
            <div className="m-3 w-3/4">
                <h1 className="w-full rounded-md bg-slate-700 py-2 text-center text-3xl text-white">{`Currently ${tasksList.length} task is pending`}</h1>
            </div>
            <form className="mx-auto w-3/4 rounded-md bg-slate-400 p-6 shadow-lg">
                <div className="space-y-4">
                    <div>
                        <label
                            htmlFor="name"
                            className="text-foreground mb-1 block text-sm font-medium"
                        >
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="message"
                            className="text-foreground mb-1 block text-sm font-medium"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            placeholder="Enter your message"
                            value={des}
                            onChange={(e) => setDes(e.target.value)}
                            className="w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2"
                            rows={4}
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="rounded-md bg-slate-600 px-4 py-2 font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
                            onClick={(e) => addTask(e)}
                        >
                            Add
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddTask;

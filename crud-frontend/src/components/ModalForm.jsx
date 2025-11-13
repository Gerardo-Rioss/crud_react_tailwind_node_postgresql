const ModalForm = ({ isOpen, onClose, mode, onSubmit }) => {
    return (
        <>
            <dialog id="my_modal_3" className="modal" open={isOpen}>
                <div className="modal-box">
                    <h3 className="font-bold text-lg py-4">
                        {mode === "edit" ? "Edit Client" : "Client Details"}
                    </h3>
                    <form method="dialog">
                        <label className="input">
                            <input
                                type="text"
                                className="grow"
                                placeholder="Name"
                            />
                        </label>
                        <label className="input">
                            <input
                                type="text"
                                className="grow"
                                placeholder="Email"
                            />
                        </label>
                        <label className="input">
                            <input
                                type="text"
                                className="grow"
                                placeholder="Job"
                            />
                        </label>
                        <div className="flex mb-4 justify-between">
                            
                            <label className="input">
                                Rate
                                <input
                                    type="num"
                                    className="grow"
                                    /* placeholder="Rate" */
                                />
                            </label>
                        </div>

                        <button
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={onClose}
                        >
                            ✕
                        </button>
                        <button className="btn btn-success">
                            {mode === "edit" ? "Save Changes" : "Add Client"}
                        </button>
                    </form>
                </div>
            </dialog>
        </>
    );
};

export default ModalForm;

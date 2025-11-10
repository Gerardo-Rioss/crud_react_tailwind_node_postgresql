const Tablelist = () => {
    const clients = [
        {
            id: 1,
            name: "John Doe",
            email: "John.Doe@gmail.com",
            job: "Developer",
            rate: "100",
            isactive: true,
        },
        {
            id: 2,
            name: "John1 Doe",
            email: "John1.Doe@gmail.com",
            job: "Developer1",
            rate: "101",
            isactive: true,
        },
        {
            id: 3,
            name: "John2 Doe",
            email: "John2.Doe@gmail.com",
            job: "Developer2",
            rate: "102",
            isactive: false,
        },
    ];

    return (
        <>
            <div className="overflow-x-auto mt-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody className="hover">
                        {/* row 1 */}

                        {clients.map((client)=> {
                            <tr>
                                <th>{client.id}</th>
                                <td>{client.name}</td>
                                <td>{client.email}</td>
                                <td>{client.job}</td>
                                <td>{client.rate}</td>
                                <td>{client.isactive}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Tablelist;

import { useState } from "react";
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [list, setList] = useState([]);
    const [item, setItem] = useState('');

    const addToList = () => {
        list.push(item);
        setList([...list]);
    };

    const deleteItem = (index) => {
        list.splice(index, 1);
        setList([...list]);
    };

    return (
        <div>
            <table className="table table-striped">
                <tbody>
                {list.length > 0 ? (
                    list.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item}</td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => deleteItem(index)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })
                ) : (
                    <tr>
                        <td>No Items</td>
                    </tr>
                )}
                </tbody>
            </table>

            <input
                className="form-control"
                placeholder="Enter Item"
                onChange={(e) => setItem(e.target.value)}
            />
            <button className="btn btn-primary" onClick={addToList}>
                Add
            </button>
        </div>
    );
};

export default App;


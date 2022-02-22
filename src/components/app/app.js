import AppInfo from '../app-info';
import SearchPanel from '../search-panel';
import AppFilter from '../app-filter';
import EmployeesList from '../employees-list';
import EmployeesAddForm from '../employees-add-form';

import './app.css';

function App() {

    const data = [
        {name: "Jhon C.", salary : 800, increase : false, id: 1},
        {name: "Alex M.", salary : 5000, increase : true, id: 2},
        {name: "Carl W.", salary : 6000, increase : false, id: 3},
    ];

    return (
        <div className="app">
            <AppInfo/>

            <div className="search-panel">
                <SearchPanel/>  
                <AppFilter/>              
            </div>

            <EmployeesList data={data}/>
            <EmployeesAddForm/>
        </div>
    )
}

export default App;
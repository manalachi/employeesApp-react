import AppInfo from '../app-info';
import SearchPanel from '../search-panel';
import AppFilter from '../app-filter';
import EmployeesList from '../employees-list';
import EmployeesAddForm from '../employees-add-form';

import './app.css';

function App() {

    const data = [
        {name: "Jhon C.", salary : 800, increase : false},
        {name: "Alex M.", salary : 5000, increase : true},
        {name: "Carl W.", salary : 6000, increase : false},
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
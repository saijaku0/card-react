import './ExpenseFilter.css';

function ExpenseFilter(props) 
{
    const dropDownMenuHandler = event => {
        props.onSelectFilter(event.target.value);
    };

    return (
        <div className='expense-filter'>
            <div className='expense-filter__control'>
                <label>Filtered by year</label>
                <select value={props.selected} onChange={dropDownMenuHandler}>
                    <option value='2023'>2023</option>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                </select>
            </div>
        </div>
    );
}

export default ExpenseFilter;
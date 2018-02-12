import React from 'react';

const Form = props =>

    <form>
        <div className="form-group">
            <label>SearchTerm</label>
            <input type="text" name="q" className="form-control" value={props.q} onChange={props.handleFormInput} />
        </div>

        <div className="form-group">
            <label>Begin Date (Optional):</label>
            <input type="text" name="begin_date" className="form-control" value={props.begin_date} onChange={props.handleFormInput} />
        </div>

        <div className="form-group">
            <label>End Date (Optional):</label>
            <input type="text" name="end_date" className="form-control" value={props.end_date} onChange={props.handleFormInput} />
        </div>

        <button onClick={this.handleFormSubmit} type="submit" className="btn btn-primary" >Search</button>
        <button id="clearResults" type="submit" className="btn btn-primary">Clear Results</button>


    </form>

export default Form;


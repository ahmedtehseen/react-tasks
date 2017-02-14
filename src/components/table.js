import React, {Component} from 'react';
// importing react-bootstrap
import { Button } from 'react-bootstrap';
import {Table} from 'react-bootstrap';
//  importing functions
import sort from '../functions/sort';
import editor from '../functions/editor';
import save from '../functions/save';
import download from '../functions/download';
import Data  from '../data/dummyData';


export default class TableView extends Component{
  constructor(props){
  	super(props);
  	this.state={
  		data: Data.body,
      sortby: null,
      descending: false,
      edit: null,
      search: false,
  		preSearchData: null,
  	}
  }


toggleSearch() {
  if (this.state.search) {
    this.setState({
      data: this.state.preSearchData,
      search: false,
    });
    // eslint-disable-next-line
    (e)=>{this.setState({preSearchData: null})}
  } else {
    
    this.setState({
      search: true,
      preSearchData : this.state.data
    });
  }
}

renderToolbar() {
  return (
    <div className="toolbar">
      <Button bsStyle="success" onClick={this.toggleSearch.bind(this)}>Search</Button>
      &nbsp;
    	<Button bsStyle="success" onClick={download.bind(this, 'json')} 
            href="data.json">Export JSON</Button>
      &nbsp;
      <Button bsStyle="success" onClick={download.bind(this, 'csv')} 
            href="data.csv">Export CSV</Button>
    </div>
  );
}

  renderSearch() {
  if (!this.state.search) {
    return null;
  }
  return (
    <tr onChange={this.search.bind(this)}>
      {Data.headers.map(function(_ignore, idx) {
        return <td key={idx}><input type="text" data-idx={idx}/></td>;
      })}
    </tr>
  );
}

search(e) {
  var needle = e.target.value.toLowerCase();
  if (!needle) {
    this.setState({data: this.state.preSearchData});
    return;
  }
  var idx = e.target.dataset.idx;
  var searchdata = this.state.preSearchData.filter(function(row) {
    return row[idx].toString().toLowerCase().indexOf(needle) > -1;
  });
  this.setState({data: searchdata});
}
  
	render(){
		return(
			<div>
				{this.renderToolbar()}
				<Table striped bordered condensed hover>
					<thead onClick={sort.bind(this)}>
						<tr>
							{Data.headers.map((header, i)=>{
								if (this.state.sortby === i) {
	                  header += this.state.descending ? ' \u2191' : ' \u2193';
	              }
								return <th key={i}>{header}</th>
							})}
						</tr>
					</thead>
					<tbody onDoubleClick={editor.bind(this)}>
						{this.renderSearch()}
						{this.state.data.map((row, rowid)=>{
							return(
								<tr key={rowid}>
									{row.map((cell,cellid)=>{
										var content = cell;
	                  var edit = this.state.edit;
	                  if (edit && edit.row === rowid && edit.cell === cellid) {
	                    content = (
	                      <form  onSubmit={save.bind(this)}>
	                        <input type="text" defaultValue={cell}/>
	                      </form>
	                    );
	                  }
										return <td key={cellid} data-row={rowid}>{content}</td>
									}
									)}
								</tr>
							);
						})}
					</tbody>
				</Table>
			</div>
		);
	}
}
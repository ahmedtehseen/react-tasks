 export default function search(e) {
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
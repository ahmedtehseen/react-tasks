export default function sort(e) {
    var column = e.target.cellIndex;
    var data = this.state.data.slice();
    var descending = this.state.sortby === column && !this.state.descending;
    data.sort((a, b)=> {
      return descending 
        ? (a[column] < b[column] ? 1 : -1)
        : (a[column] > b[column] ? 1 : -1);
    })
    this.setState({
      data: data,
      sortby: column,
      descending: descending,
    })
  }
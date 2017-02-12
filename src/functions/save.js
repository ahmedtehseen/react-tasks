export default function save(e) {
  e.preventDefault();
  var input = e.target.firstChild;
  var data = this.state.data.slice();
  data[this.state.edit.row][this.state.edit.cell] = input.value;
  this.setState({
    edit: null,
    data: data,
  });
}
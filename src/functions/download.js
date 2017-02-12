export default function download(format, ev){
  var contents = format === 'json'
    ? JSON.stringify(this.state.data)
    : this.state.data.reduce(function(result, row) {
        return result
          + row.reduce(function(rowresult, cell, idx) {
              return rowresult 
                + '"' 
                + cell.replace(/"/g, '""')
                + '"'
                + (idx < row.length - 1 ? ',' : '');
            }, '')
          + "\n";
      }, '');

  var URL = window.URL || window.webkitURL;
  var blob = new Blob([contents], {type: 'text/' + format});
  ev.target.href = URL.createObjectURL(blob);
  ev.target.download = 'data.' + format;
}
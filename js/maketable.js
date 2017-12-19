function maketable(data) {
    var num_columns = 5;
    var _days = ['일', '월', '화', '수', '목', '금', '토'];
    
    var all_rows = data.split(/\r?\n|\r/);
    var tbody = '';
    for (var row = 1; row < all_rows.length; row++) {
        tbody += '<tr>'
        var row_data = all_rows[row].split(',');
        
        var _year = row_data[0].substr(0,4);
        var _month = row_data[0].substr(4,2);
        var _day = row_data[0].substr(6,2);
        var _day2 = new Date(_year + '-' + _month + '-' + _day).getDay();
        
        var _now = new Date();
        var _gap = Math.floor((new Date(_year + '-' + _month + '-' + _day) - _now) / (1000 * 60 * 60 * 24));
        
        var _date = _year + '년 ' + _month + '월 ' + _day + '일 ' + '(' + _days[_day2] + ')'; // Date
        var _dday = "";
        if (_gap > 0) {
            _dday = "D-" + _gap; // D-Day   
        } else if (_gap < 0) {
            _dday = "D+" + Math.abs(_gap);
        } else {
            _dday = "D-Day!"
        }
        var _coinname = row_data[1] + ' (' + row_data[2] + ')'; // Coinname (Unit)
        var _contents = row_data[3]; // Contents
        var _source = '<a href=' + row_data[4] + ' target="_blank">' + '출처</a>'; // Source: link
        var _detail = row_data[5]; // Details
        
        var convert_data = [_date, _dday, _coinname, _contents, _source, _detail];
        
        for(var col = 0; col < num_columns; col++) {
			tbody += '<td>';
			tbody += convert_data[col];
			tbody += '</td>';
        }
        tbody += '</tr>'
    }
    $('#hojae table tbody').append(tbody);
}
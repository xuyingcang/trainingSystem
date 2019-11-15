function openDownloadDialog(url, saveName)
{
	if(typeof url == 'object' && url instanceof Blob)
	{
		url = URL.createObjectURL(url); // 创建blob地址
	}
	var aLink = document.createElement('a');
	aLink.href = url;
	aLink.download = saveName || ''; // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
	var event;
	if(window.MouseEvent) event = new MouseEvent('click');
	else
	{
		event = document.createEvent('MouseEvents');
		event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
	}
	aLink.dispatchEvent(event);
}

	// 读取本地excel文件
	function readWorkbookFromLocalFile(file, callback) {
		console.log(file);
		var reader = new FileReader();
		reader.onload = function(e) {
			var data = e.target.result;
			var workbook = XLSX.read(data, {type: 'binary'});
			console.log(workbook);
			readWorkbook(workbook);
			if(callback) callback(workbook);
		};
		reader.readAsBinaryString(file);
	}
	
	function getLocalFile(){
		var docObj = document.getElementById("docfile");
		console.log(docObj.files[0])
        if (docObj.files && docObj.files[0]) {
        	readWorkbookFromLocalFile(docObj.files[0])
        }
	}
	var text;
	//将读取workbook的内容转换为csv格式
	function readWorkbook(workbook)
	{
	    var sheetNames = workbook.SheetNames; // 工作表名称集合
	    var worksheet = workbook.Sheets[sheetNames[0]]; // 这里我们只读取第一张sheet
	    var csv = XLSX.utils.sheet_to_csv(worksheet);
	    text=csv;
	    document.getElementById('result').innerHTML = csv2table(csv);
	}

	// 将csv转换成简单的表格，会忽略单元格合并，在第一行和第一列追加类似excel的索引
	function csv2table(csv)
	{
	    var html = '<table id="table">';
	    var rows = csv.split('\n');
	    rows.pop(); // 最后一行没用的
	    rows.forEach(function(row, idx) {
	        var columns = row.split(',');
	        columns.unshift(idx+1); // 添加行索引
	        if(idx == 0) { // 添加列索引
	            html += '<tr>';
	            for(var i=0; i<columns.length; i++) {
	                html += '<th>' + (i==0?'':String.fromCharCode(65+i-1)) + '</th>';
	            }
	            html += '</tr>';
	        }
	        html += '<tr>';
	        columns.forEach(function(column) {
	            html += '<td>'+column+'</td>';
	        });
	        html += '</tr>';
	    });
	    html += '</table>';
	    return html;
	}
	
	// csv转sheet对象
	function csv2sheet(csv) {
	    var sheet = {}; // 将要生成的sheet
	    csv = csv.split('\n');
	    csv.forEach(function(row, i) {
	        row = row.split(',');
	        if(i == 0) sheet['!ref'] = 'A1:'+String.fromCharCode(65+row.length-1)+(csv.length-1);
	        row.forEach(function(col, j) {
	            sheet[String.fromCharCode(65+j)+(i+1)] = {v: col};
	        });
	    });
	    return sheet;
	}

	// 将一个sheet转成最终的excel文件的blob对象，然后利用URL.createObjectURL下载
	function sheet2blob(sheet, sheetName) {
	    sheetName = sheetName || 'sheet1';
	    var workbook = {
	        SheetNames: [sheetName],
	        Sheets: {}
	    };
	    workbook.Sheets[sheetName] = sheet;
	    // 生成excel的配置项
	    var wopts = {
	        bookType: 'xlsx', // 要生成的文件类型
	        bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
	        type: 'binary'
	    };
	    var wbout = XLSX.write(workbook, wopts);
	    var blob = new Blob([s2ab(wbout)], {type:"application/octet-stream"});
	    // 字符串转ArrayBuffer
	    function s2ab(s) {
	        var buf = new ArrayBuffer(s.length);
	        var view = new Uint8Array(buf);
	        for (var i=0; i!=s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
	        return buf;
	    }
	    return blob;
	}
	
	/**
	 * 通用的打开下载对话框方法，没有测试过具体兼容性
	 * @param url 下载地址，也可以是一个blob对象，必选
	 * @param saveName 保存文件名，可选
	 */
	function openDownloadDialog(url, saveName)
	{
	    if(typeof url == 'object' && url instanceof Blob)
	    {
	        url = URL.createObjectURL(url); // 创建blob地址
	    }
	    var aLink = document.createElement('a');
	    aLink.href = url;
	    aLink.download = saveName || ''; // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
	    var event;
	    if(window.MouseEvent) event = new MouseEvent('click');
	    else
	    {
	        event = document.createEvent('MouseEvents');
	        event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
	    }
	    aLink.dispatchEvent(event);
	}
	
	function exportExcel(csv) {
	    var sheet = csv2sheet(csv);
	    var blob = sheet2blob(sheet);
	    openDownloadDialog(blob, '导出.xlsx');
	}
	
	function exportFile(){
		var tableDom=document.getElementById('table');
		var sheet=XLSX.utils.table_to_sheet(tableDom);
		var blob = sheet2blob(sheet);
		openDownloadDialog(blob, '导出table.xlsx');
	}
	
	
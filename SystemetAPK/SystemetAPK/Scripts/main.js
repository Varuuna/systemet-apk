﻿function loopParser(xml) {
    var oneThousandBreak = 0;
    var x = xml.documentElement.childNodes;

    // testing
    var arr = [];
    for (var i = 2, n; n = x[i]; ++i) arr.push(n);

    if (entrySlicer != 0) {
        arr = arr.slice(entrySlicer, Number(entrySlicer) + 100);
    }

    for (i = 0; i < arr.length; i++) {
        $("table tbody").append("<tr class='artikel'></tr>");
        $("table tbody tr").last().append("<td>" + arr[i].childNodes[1].firstChild.nodeValue + "</td>");
        $("table tbody tr").last().append("<td>" + arr[i].childNodes[3].firstChild.nodeValue + "</td>");
        $("table tbody tr").last().append("<td>" + arr[i].childNodes[6].firstChild.nodeValue + "</td>");
        // Sometimes, data is simply not there.
        try {
            $("table tbody tr").last().append("<td>" + arr[i].childNodes[19].firstChild.nodeValue + "</td>");
        } catch (e) {
            console.log("Data saknas");
            $("table tbody tr").last().append("<td></td>");
        }
        $("table tbody tr").last().append("<td>" + arr[i].childNodes[5].firstChild.nodeValue + "</td>");
        $("table tbody tr").last().append("<td>" + arr[i].childNodes[7].firstChild.nodeValue + "</td>");
        oneThousandBreak++;
        if (oneThousandBreak == 100) {
            $("#loadDiv").hide();
            return false;
        }
    }
}
function loopParser(xml) {
    var oneThousandBreak = 0;
    var x = xml.documentElement.childNodes;

    for (i = 0; i < x.length; i++) {
        if (i >= 2)
        {
            $("table tbody").append("<tr class='artikel'></tr>");
            $("table tbody tr").last().append("<td>" + x[i].childNodes[1].firstChild.nodeValue + "</td>");
            $("table tbody tr").last().append("<td>" + x[i].childNodes[3].firstChild.nodeValue + "</td>");
            $("table tbody tr").last().append("<td>" + x[i].childNodes[6].firstChild.nodeValue + "</td>");
            // Sometimes, data is simply not there.
            try {
                $("table tbody tr").last().append("<td>" + x[i].childNodes[19].firstChild.nodeValue + "</td>");
            } catch (e) {
                console.log("Data saknas");
                $("table tbody tr").last().append("<td></td>");
            }
            $("table tbody tr").last().append("<td>" + x[i].childNodes[5].firstChild.nodeValue + "</td>");
            $("table tbody tr").last().append("<td>" + x[i].childNodes[7].firstChild.nodeValue + "</td>");
            oneThousandBreak++;
            if (oneThousandBreak == 100) {
                $("#loadDiv").hide();
                return false;
            }
        }
    }
}
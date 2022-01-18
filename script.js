var today = moment().format("MMMM Do");
$("#currentDay").text(today);

var now = moment().format("H");
var thisHour = moment().format("h");

var day = [
    {
        hour: '7',
        ampm: "AM",
        note: ""
    },
    {
        hour: '8',
        ampm: "AM",
        note: ""
    },
    {
        hour: '9',
        ampm: "AM",
        note: ""
    },
    {
        hour: '10',
        ampm: "AM",
        note: ""
    },
    {
        hour: '11',
        ampm: "AM",
        note: ""
    },
    {
        hour: '12',
        ampm: "PM",
        note: ""
    },
    {
        hour: '1',
        ampm: "PM",
        note: ""
    },
    {
        hour: '2',
        ampm: "PM",
        note: ""
    },
    {
        hour: '3',
        ampm: "PM",
        note: ""
    },
    {
        hour: '4',
        ampm: "PM",
        note: ""
    },
    {
        hour: '5',
        ampm: "PM",
        note: ""
    }
]

function refreshSaves() {
    var savedDay = JSON.parse(localStorage.getItem(day));

    if(savedDay) {
        day = savedDay;
    };
};

refreshSaves();

console.log(day);

for (var i= 0; i < day.length; i++) {

    var row = $('<form>').attr({'class': 'row'});
    $('.container').append(row);

    var hour = $('<div>')
        .text(day[i].hour + day[i].ampm)
        .attr({'class':'hour col-md-1'})
    row.append(hour);

    var noteArea = $('<div>');
    noteArea.attr({'class': 'col-md-7 description p-0'});

    var noteInput = $('<textarea>');
    noteInput.attr({'id': day[i].hour + day[i].ampm});
    noteInput.textContent = day[i].note

    noteArea.append(noteInput);
    row.append(noteArea);

    var saveBtn = $('<button>')
        .text("📂")
        .attr({'class': 'saveBtn'})
    row.append(saveBtn);

    if (now  - 7> i) {
        noteInput.attr({'class': 'past col-md m-0'})
    } else if (now - 7 == i ) {
        noteInput.attr({'class': 'present col-md m-0'})
    } else if (now  - 7> i) {
        noteInput.attr({'class': 'future col-md m-0'})
    }
};

$('.saveBtn').on('click', function(event){
    event.preventDefault();
    
    console.log($(this).siblings('.description').val());
    var saveItem = $(this).parent().index();
    day[saveItem].note = $(this).siblings('.description').val();

    localStorage.setItem("day", JSON.stringify(day));
})
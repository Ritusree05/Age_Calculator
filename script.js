document.addEventListener("DOMContentLoaded", function()
{
    let btn = document.getElementById("btn");

    btn.addEventListener('click', function()
    {
        let date = document.getElementById('data1').value;
        let month = document.getElementById('data2').value;
        let year = document.getElementById('data3').value;

        let today = new Date();
        let curDay = today.getDate();
        let curMonth = today.getMonth();
        let curYear = today.getFullYear();

        let ageDay = 0, ageMonth, ageYear;

        if (curMonth < month)
        {
            ageMonth = 12 - (month - curMonth);
            ageYear = curYear - year - 1;
        }

        else if (curMonth > month)
        {
            ageMonth = curMonth - month ;
            ageYear = curYear - year;
        }

        else
        {
            ageMonth = 0;
        }

        if (curDay < date)
        {
            ageDay = 30 - (date - curDay);
        }

        else if (curDay > date)
        {
            ageDay = curDay - date;
        }

        else
        {
            ageDay = 0;
        }

        let res_year = document.getElementById('years');
        let res_else = document.getElementById('else');

        res_year.innerText = ageYear + " Year(s)";
        res_else.innerText = ageMonth + " Month(s) " + ageDay + " Day(s)";
    })
})

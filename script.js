
        const m = moment();

        console.log(m.format('[You made it to ] MMMM Do YYYY[!], h:mm:ss a'))

        const clock = document.getElementById('clock');

        //we will need to set an interval where our itnerval counts down by one second
        setInterval(() => {
          console.log("Time is being updated every second");

          //Whenever you call this moment
          const now = moment();
        }, 1000);

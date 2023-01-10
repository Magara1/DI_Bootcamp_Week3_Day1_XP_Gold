/*
        Copy the code above and write some Javascript code to color all diagonal table cells in red.
        */

        let table = document.body.firstElementChild;

        // your code
        let trows = table.firstElementChild.children;

        //console.log(table.firstElementChild.children);
        j = trows.length - 1;

        for (let i = 0; i < trows.length; i++) {
            let tdatas = trows[i].children;

            //Diagonale gauche
            tdatas[i].style.backgroundColor = "red";


            //Diagonale par la droite
            tdatas[j].style.backgroundColor = "red";
            j--;
        }
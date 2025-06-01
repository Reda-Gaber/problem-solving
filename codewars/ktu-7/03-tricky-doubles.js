function trickyDoubles(n) {

    if (n < 10) console.log(n);
    else {
        n = n.toString();

        if (n.length % 2 === 0) {
            console.log(n);
            
        }
    }
  }

  trickyDoubles(100100);
  trickyDoubles(2);
//object declaration for restaurant

    restaurants = {};
        
        restaurants.chicken = [
            {
                name: "Kinton Ramen",
                flavor: "shio"
            },
            {
                name: "Raijin Ramen",
                flavor:"miso"
            },
            {
                name: "Ryus Noodle bar",
                flavor: "spicy"
            },
            {
                name: "Kyouka Ramen",
                flavor: "shoyu"
            }
        ]

        restaurants.pork = [
            {
                name: "Santouka Ramen",
                flavor: "miso"
            },
            {
                name: "Sansotei Ramen",
                flavor: "spicy"
            },
            {
                name: "Konjiki Ramen",
                flavor: "shoyu"
                        
            },
            {
                name: "Kinton Ramen",
                flavor: "shio"
            }
        ]

        restaurants.seafood = [
            {
                name: "Konjiki Ramen",
                flavor: "shoyu"
            },
            {
                name: "Raijin Ramen",
                flavor: "shio"
            },
            {
                name: "Ramen Isshin",
                flavor: "miso"
            },
            {
                name: "Sansotei Ramen",
                flavor: "spicy"
            }
        ]

        restaurants.vegetarian = [
            {
                name: "Konjiki Ramen",
                flavor: "shio"
            },
            {
                name: "Kinton Ramen",
                flavor: "miso"
            },
            {
                name: "Ryus Noodle bar",
                flavor: "shoyu"
            },
            {
                name: "Ramen Isshin",
                flavor: "spicy"
            }
        ]
        
        restaurants.soupbase = [
            {
                name: "shoyu",
                description: `It has a clear brown broth, with plenty of soy sauce added resulting in a soup that is tangy, salty, and savory yet still fairly light on the palate.`,
                img: `images/soySauce.png`
            },
            {
                name: "shio",
                description: `This ramen is usually a pale, clear, yellowish broth made with plenty of salt. It hasa light and mild flavor, meant to highlight the flavor of your soup base.`,
                img: `images/salt.png`
            },
            {
                name: "miso",
                description: `This unique Japanese ramen, which was developed in Hokkaido, features a broth that highlights its copious miso and tends to have a robust, tangy flavor.`,
                img: `images/miso.png`
            },
            {
                name: "spicy",
                description: `Usually made in combination with a miso base, a spicy bowl of ramen will often combine chilli peppers and chilli oil to add that extra kick with your noodles.`,
                img: `images/chilli.png`
            }
        ]

        restaurants.protein = [
            {
                name: "pork",
                description: `Japanese chashu served with bowls of ramen are actually braised in soy sauce, sake and sugar at low temperature. Chashu is sometimes called “nibuta” (煮豚) in Japanese, literally meaning “simmered/braised pork”.` 
            },
            {
                name: "chicken",
                description:  `The chicken version of the classic ramen topping. Flavorful round slices of chashu made by rolling marinated chicken thighs around chicken tenders and steaming.`
            },
            {
                name: "tofu",
                description:  `If you're not looking for meat as your protein, tofu is definitely a good way to go. Tofu is a good source of protein and contains all eight essential amino acids.`
            },
            {
                name: "none",
                description:  `Enjoy the broth for its goodful tastes. We don't need anything else then just the tasteful sou[ and its noodles.`
            }
        ]



//Start Page
    // function on 'reset' button that will reset the options selected

    // function on 'start' button that will bring user to broth selection

// Option tabs
    // function that allows user selections to be inputed as values, that will be used to narrow down options for ramen selections

    //function that opens each tab to full view of selected step

// results Page
    // function that will evaluate final results based on user selections

    // function that will display user Ramen options based on user selection

    //function attached to links that will send user to restaurant website
    const nextSection = function(next) {
        $(`section${next}`).addClass("displayOn");
        console.log ("toggled the class");
        $(`section${next}`).removeClass("displayNone");
    }

    $(function(){
        $(`.landingPage button.next`).on("click", function(e){
            e.preventDefault();
            nextSection(".dietary");
            $('html, body').animate({
                scrollTop: $('#dietarySection').offset().top
            }, 500);
        });
        
        //transition from dietary section to flavor section
        $(`.dietary button.next`).on("click", function(e){
            e.preventDefault();
            nextSection(".flavor");
            $('html, body').animate({
                scrollTop: $('#flavorSection').offset().top
            }, 500);
        });
        
        //transition from flavor section to protein section
        $(`.flavor button.next`).on("click", function(e){
            e.preventDefault();
            nextSection(".protein");
            $('html, body').animate({
                scrollTop: $('#proteinSection').offset().top
            }, 500);
        });
    
        //transition from protein section to toppings section
        $(`.protein button.next`).on("click", function(e){
            e.preventDefault();
            nextSection(".toppings");
            $('html, body').animate({
                scrollTop: $('#toppingsSection').offset().top
            }, 500);
        });

        let userBase;
        let userFlavor;
        let proteinChoice;
        let toppingsChoice;
        
        //assigns user input for base selection
        $(".dietaryType").on("click", function() {
            //assigns a variable the value of the selected option
            userBase = $("input[name=dietary]:checked").val();
            //removes any prexisting border on previous chosen options
            $(".dietaryType").removeClass("picked");
            //adds a border around current selection
            $(this).addClass("picked");
            console.log(userBase);
        });
        
        //assigns user input for flavor selection when clicked
        $(".flavorType").on("click", function() {
            //removes any prexisting border on previous chosen options
            $(".flavorType").removeClass("chosen");
            //adds a border around current selection
            $(this).addClass("chosen");
            //assign variable for when label is clicked
            userFlavor = $("input[name=flavor]:checked").val();
            console.log(userFlavor);
        });
        
        //assigns user input for protein selection
        
        $(".proteinType").on("click", function(){
            //assigns a variable the value of the selected option
            proteinChoice = $("input[name=proteinToppings]:checked").val();
            //takesaway any borders from any prexisitng choices
            $(".proteinType").removeClass("chosen");
            //places a border around the selected choice
            $(this).addClass("chosen");
            console.log(proteinChoice);
        });

        $(".toppingsType").on("click", function (){
            //takesaway any borders from any prexisitng choices
            $(".toppingsType").removeClass("chosen");
            //places a border around the selected choice
            $(this).addClass("chosen");
            //assigns a variable the value of the selected option
            toppingsChoice = $("input[name=toppings]:checked").val();
            console.log(toppingsChoice);
        });

        //resets page
        $('.reset').on('click', function() {
            window.location.reload(true);
        });

        //on final submit, let's gather all our information
        $(".finalSubmit").on("click", function(e) {
            $('html, body').animate({
                scrollTop: $('#resultsSection').offset().top
            }, 500);
            
            console.log(userBase);
            console.log(userFlavor);
            console.log(proteinChoice);

            //used to find the selected restaurant for the final answer using the base selector
            let suggestResto = restaurants[userBase].filter((value) => {
                //goes through the list of restaurants and finds the restaurant with a flavor style matching the one selected by the suer
                return value.flavor === userFlavor;
            });
            
            console.log(suggestResto);
            //assigns the chosen therestaurants name
            let restoName = suggestResto[0].name;
            console.log(restoName);

            //filter to find the selected flavor broth's description
            restoFlavor = restaurants.soupbase.filter(function(soup){
                return soup.name === userFlavor;
            });

            console.log(restoFlavor);
            //assigns the chosen soupbase's description
            let flavorDescription = restoFlavor[0].description;
            console.log(flavorDescription);

            restoProtein = restaurants.protein.filter(function(prot) {
                return prot.name === proteinChoice;
            });

            console.log(restoProtein);
            //assigns the chosen protein's description
            let proteinDescription = restoProtein[0].description;
            console.log(proteinDescription);

            //assigns the chosesoupbase's photo
            let flavorPhoto = restoFlavor[0].img;
            console.log(flavorPhoto);

            //to display results in results section
            $('.results h2').html(restoName);
            $('.results .style').html(userFlavor);
            $("#brothImage").attr("src", flavorPhoto);
            $('.results .first').html(flavorDescription);
            $('.results .second').html(proteinDescription);
        });

    });


   
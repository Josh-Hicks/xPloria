'use strict';

$(function() {
    var character,
        d,
        time,
        now;
    // background music
    $('audio')[0].currentTime = 10;
    $('audio')[0].play();

    var World = ( function() {

        function new_character() {
            character = {},
            character.name = 'JOSH',
            character.sex = '',
            character.weapon = null;
        }

        function init() {
          d = new Date()
          time = d.getHours();
          if (time < 12) {
            now = 'morning';
          } else if (time > 12 && time < 17) {
            now = 'noon';
          } else if (time > 17 && time < 20) {
            now = 'evening';
          } else {
            now = "night";
          }
          console.log(now);
          new_character();
        }

        // explicitly return public methods when this object is instantiated
        return {
          init : init
        };

    } )();

    // Game start
        // show start screen
        setTimeout(function() {
            $('#start-screen').fadeIn(2000);
            $('#start-screen p').fadeIn(3000);
            $('#start-screen button').delay(3000).fadeIn(5000);
        }, 500)
        // when user clicks start button
        $('#start-btn').on('click', function(){
            World.init();
            // boom
            $('audio')[1].play();
            // Scene 1: Waking up in the village.
            // change scene to Village
            $('.active').removeClass('active').fadeOut(500);
            $('body').addClass(now);
            $('#village').addClass('active').delay(500).fadeIn(2000);
            // Show text on screen to let user know what's going on
            $('#village .one').fadeIn(4000).delay(7000).fadeOut(1000)
            .next().delay(12000).fadeIn(1000)
            .next().delay(12000).fadeIn(1000);

            setTimeout(function() {
                //creak
                $('audio')[2].play();
            }, 9000);
        });

        // prompt user for name, age, sex
        $('#intro-next-btn').on('click', function() {
            character.name = $('#name').val();
            character.sex = $('#sex').val();
            $('#village p').fadeOut(1000);
            console.log(character.name);
            console.log(character.sex);
            $('#village .four').delay(1500).fadeIn(2000);
            //sheath
            $('audio')[3].play();
        });

        $('#second-next-btn').on('click', function() {
            $('#village .four').fadeOut(1000);
            $('#village .theName').text(character.name);
            $('#village .five').delay(1500).fadeIn(2000)
            .next().delay(3000).fadeIn(2000);
            //whoosh
            $('audio')[4].play();
        });

        $('#third-next-btn').on('click', function() {
            //boom
            $('audio')[1].play();
            $('#village .five').fadeOut(1000);
            $('#village .six').fadeOut(1000).next().delay(2000).fadeIn(1000);
        });

        $('#fourth-next-btn').on('click', function(){
            $('#village').removeClass('active').fadeOut(1000).next().delay(2000).fadeIn(2000);
        });

    // Scene 2: Getting ready for the wilds.
        // Prompt user about buying a weapon 'character.weapon'
        // Prompt use to buy potion
        // Prompt user to leave village

    // Scene 3: The open plains.
        // prompt user about where to travel
        // small monster fight
            // prompt user about potions

    // Scene 4: Cave or Mountain
        //

    // Scene 5: Troll or Dragon

    // Scene 6: Return to Village



}());
